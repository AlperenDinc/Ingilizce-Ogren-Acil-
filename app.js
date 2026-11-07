// IELTS Academic Master - Application Logic (Version 2.0)
// Infinite Learning Curriculum, Weekly Checkpoints, Spaced Repetition Engine,
// Deep Grammar Tree with Live Search, 50+ Roots & Affixes, Text-to-Speech

document.addEventListener('DOMContentLoaded', () => {
  // --- STATE MANAGEMENT ---
  const state = {
    currentTab: 'daily',
    currentDay: parseInt(localStorage.getItem('ielts_current_day') || '1', 10),
    completedDays: JSON.parse(localStorage.getItem('ielts_completed_days') || '[]'),
    learnedWords: JSON.parse(localStorage.getItem('ielts_learned_words') || '[]'),
    favoriteWords: JSON.parse(localStorage.getItem('ielts_favorite_words') || '[]'),
    
    // Spaced Repetition System: { [wordId]: { level: 0..4, nextReview: ts, correctStreak: 0, wrongCount: 0 } }
    srData: JSON.parse(localStorage.getItem('ielts_sr_data') || '{}'),

    theme: localStorage.getItem('ielts_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    activeSentenceId: null,
    isReadingAloud: false,
    
    // Checkpoint Quiz State
    checkpointQuizAnswers: {},
    checkpointSubmitted: false,

    // Vocabulary Bank & Games State
    bankFilter: 'all', // 'all', 'due', 'struggling', 'mastered', 'favorites'
    bankSearch: '',
    currentGame: 'matching', // 'matching', 'flashcard', 'quiz', 'list'
    
    // Matching Game
    matchingCards: [],
    firstSelectedCard: null,
    matchedPairsCount: 0,
    matchingMoves: 0,

    // Flashcard Game
    flashcards: [],
    currentFlashcardIndex: 0,
    isCardFlipped: false,

    // Speed Quiz Game
    quizQuestions: [],
    currentQuizIndex: 0,
    quizScore: 0,

    // Roots & Affixes
    rootsTab: 'roots', // 'roots', 'prefixes', 'suffixes', 'practice'
    rootsSearch: '',
    rootsPracticeIndex: 0,
    rootsPracticeScore: 0,

    // Irregular Verbs
    irregularSearch: '',
    irregularQuizIndex: 0,
    irregularQuizScore: 0,
    irregularStreak: 0,

    // English Grammar Tree (Study Guide)
    guideSearch: '',
    expandedCategories: new Set(['tenses']),
    activeTopicId: 'present_simple'
  };

  // --- INITIALIZATION ---
  initTheme();
  setupNavigation();
  setupGlobalEvents();
  initMobileAndPWA();
  renderApp();

  // --- PWA & SERVICE WORKER ---
  function initMobileAndPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(() => console.log('IELTS Master: Service Worker Registered (Offline ready)'))
          .catch(err => console.log('SW registration note:', err));
      });
    }

    // Determine current mobile IP / address for QR code
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || !window.location.hostname;
    const targetHost = isLocal ? '192.168.0.153' : window.location.hostname;
    const targetPort = window.location.port ? window.location.port : '8080';
    const mobileUrl = `${window.location.protocol === 'file:' ? 'http:' : window.location.protocol}//${targetHost}:${targetPort}`;

    const qrImg = document.getElementById('qr-code-img');
    const urlText = document.getElementById('mobile-url-text');
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(mobileUrl)}`;
    }
    if (urlText) {
      urlText.textContent = mobileUrl;
    }

    // Modal open / close
    const modal = document.getElementById('mobile-qr-modal');
    const openBtns = [
      document.getElementById('open-mobile-modal-btn'),
      document.getElementById('mobile-qr-header-btn')
    ];
    const closeBtn = document.getElementById('close-mobile-modal-btn');
    const copyBtn = document.getElementById('copy-url-btn');

    openBtns.forEach(btn => {
      if (btn) btn.addEventListener('click', () => {
        if (modal) modal.classList.remove('hidden');
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (modal) modal.classList.add('hidden');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(mobileUrl).then(() => {
          showToast('Bağlantı adresi panoya kopyalandı! 📋', 'success');
        });
      });
    }
  }

  // --- THEME HANDLER ---
  function initTheme() {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('ielts_theme', state.theme);
    initTheme();
    updateThemeToggleIcons();
  }

  function updateThemeToggleIcons() {
    const icons = document.querySelectorAll('.theme-toggle-btn');
    icons.forEach(btn => {
      btn.innerHTML = state.theme === 'dark' 
        ? '<i class="fas fa-sun text-yellow-400 text-lg"></i>' 
        : '<i class="fas fa-moon text-slate-600 text-lg"></i>';
    });
  }

  // --- TEXT TO SPEECH (TTS) ---
  function speak(text, rate = 0.9) {
    if (!('speechSynthesis' in window)) {
      showToast('Tarayıcınız sesli okumayı desteklemiyor.', 'warning');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }
    window.speechSynthesis.speak(utterance);
  }

  // --- TOAST NOTIFICATION ---
  function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    const bgColors = {
      success: 'bg-emerald-600 text-white',
      warning: 'bg-amber-600 text-white',
      error: 'bg-rose-600 text-white',
      info: 'bg-indigo-600 text-white'
    };
    const icons = {
      success: 'fa-check-circle',
      warning: 'fa-exclamation-triangle',
      error: 'fa-times-circle',
      info: 'fa-info-circle'
    };

    toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl transition-all duration-300 transform translate-y-2 opacity-0 text-sm font-medium ${bgColors[type] || bgColors.info}`;
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info} text-base"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    }, 10);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- SPACED REPETITION ENGINE (SRS) ---
  function recordWordAnswer(wordId, isCorrect) {
    const now = Date.now();
    const current = state.srData[wordId] || { level: 0, nextReview: now, correctStreak: 0, wrongCount: 0 };
    
    if (isCorrect) {
      current.correctStreak++;
      current.level = Math.min(4, current.level + 1);
      // Intervals: Level 1 -> 1 day, Level 2 -> 3 days, Level 3 -> 7 days, Level 4 -> 14 days
      const intervals = [0, 24 * 3600 * 1000, 3 * 24 * 3600 * 1000, 7 * 24 * 3600 * 1000, 14 * 24 * 3600 * 1000];
      current.nextReview = now + intervals[current.level];
    } else {
      current.correctStreak = 0;
      current.wrongCount++;
      current.level = 1; // Drop to low level for quick review
      current.nextReview = now; // Due immediately
    }

    state.srData[wordId] = current;
    localStorage.setItem('ielts_sr_data', JSON.stringify(state.srData));
  }

  function getWordSRInfo(wordId) {
    return state.srData[wordId] || { level: 0, nextReview: 0, correctStreak: 0, wrongCount: 0 };
  }

  // --- NAVIGATION SETUP ---
  function setupNavigation() {
    const navButtons = document.querySelectorAll('[data-tab-target]');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab-target');
        switchTab(targetTab);
      });
    });

    const themeBtns = document.querySelectorAll('.theme-toggle-btn');
    themeBtns.forEach(btn => btn.addEventListener('click', toggleTheme));
    updateThemeToggleIcons();
  }

  function switchTab(tabId) {
    state.currentTab = tabId;
    if (state.isReadingAloud) {
      window.speechSynthesis.cancel();
      state.isReadingAloud = false;
    }
    renderApp();
  }

  function setupGlobalEvents() {
    document.addEventListener('click', (e) => {
      const popup = document.getElementById('word-popup');
      if (popup && !popup.contains(e.target) && !e.target.closest('.interactive-word')) {
        popup.classList.add('hidden');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (state.currentTab === 'bank' && state.currentGame === 'flashcard') {
        if (e.code === 'Space') {
          e.preventDefault();
          flipFlashcard();
        } else if (e.code === 'ArrowRight') {
          nextFlashcard(true);
        } else if (e.code === 'ArrowLeft') {
          nextFlashcard(false);
        }
      }
    });
  }

  // --- MAIN RENDER ROUTER ---
  function renderApp() {
    document.querySelectorAll('[data-tab-target]').forEach(btn => {
      const target = btn.getAttribute('data-tab-target');
      if (target === state.currentTab) {
        btn.classList.add('text-indigo-600', 'dark:text-indigo-400', 'bg-indigo-50', 'dark:bg-indigo-950/50', 'font-semibold');
        btn.classList.remove('text-slate-600', 'dark:text-slate-400');
      } else {
        btn.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'bg-indigo-50', 'dark:bg-indigo-950/50', 'font-semibold');
        btn.classList.add('text-slate-600', 'dark:text-slate-400');
      }
    });

    const mainContainer = document.getElementById('main-content-area');
    if (!mainContainer) return;

    switch (state.currentTab) {
      case 'daily':
        renderDailyPractice(mainContainer);
        break;
      case 'bank':
        renderVocabularyBank(mainContainer);
        break;
      case 'history':
        renderHistoryArchives(mainContainer);
        break;
      case 'roots':
        renderRootsAndAffixes(mainContainer);
        break;
      case 'irregular':
        renderIrregularVerbs(mainContainer);
        break;
      case 'guide':
        renderStudyGuide(mainContainer);
        break;
      default:
        renderDailyPractice(mainContainer);
    }
  }

  // =========================================================================
  // 1. DAILY PRACTICE (SONSUZ DÖNGÜ & WEEKLY CHECKPOINT DENEMELERİ)
  // =========================================================================
  function renderDailyPractice(container) {
    const dayData = window.getCurriculumDay(state.currentDay);
    const isCompleted = state.completedDays.includes(dayData.day);

    let html = `
      <div class="space-y-8 animate-fade-in pb-16">
        <!-- Top Day Navigation Bar (Infinite Navigator) -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700/60">
          <div class="flex items-center gap-3">
            <button id="prev-day-btn" ${state.currentDay <= 1 ? 'disabled' : ''} class="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 dark:text-slate-200 transition">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="text-center sm:text-left">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                  ${dayData.isCheckpoint ? '🏆 HAFTALIK MİNİ DENEME' : 'IELTS 5.5 - 6.0'}
                </span>
                ${isCompleted ? '<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center gap-1"><i class="fas fa-check text-xs"></i> Tamamlandı</span>' : ''}
              </div>
              <h2 class="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mt-1">${dayData.titleTr}</h2>
            </div>
            <button id="next-day-btn" class="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition" title="Sonraki Güne Geç (Sonsuz)">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          <!-- Quick Jump & Infinite Day Input -->
          <div class="flex items-center gap-2">
            <label class="text-xs font-semibold uppercase tracking-wider text-slate-400">Güne Atla:</label>
            <input type="number" id="quick-day-input" min="1" value="${state.currentDay}" class="w-20 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 border-none text-slate-800 dark:text-white text-sm font-bold text-center focus:ring-2 focus:ring-indigo-500">
            <button id="quick-day-go-btn" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition">Git</button>
          </div>
        </div>
    `;

    // CHECKPOINT OR REGULAR DAY
    if (dayData.isCheckpoint) {
      html += renderCheckpointView(dayData, isCompleted);
    } else {
      html += renderRegularDayView(dayData, isCompleted);
    }

    html += `</div>`;
    container.innerHTML = html;
    bindDailyPracticeEvents(container, dayData);
  }

  // --- SUB-VIEW: CHECKPOINT DAY (HAFTALIK MİNİ DENEME) ---
  function renderCheckpointView(dayData, isCompleted) {
    const cp = dayData.checkpoint;
    return `
      <div class="space-y-6">
        <!-- Checkpoint Header Banner -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-500/30 dark:border-amber-500/20 shadow-sm">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-amber-500/30">
              <i class="fas fa-trophy"></i>
            </div>
            <div>
              <span class="text-xs font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Haftalık Mini Deneme</span>
              <h3 class="text-2xl font-black text-slate-900 dark:text-white">${cp.week}. Hafta İlerleme ve Seviye Testi</h3>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            ${cp.summary}
          </p>
        </div>

        <!-- Academic Reading Passage -->
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <div>
              <h4 class="text-lg font-bold text-slate-900 dark:text-white">${cp.readingPassage.title}</h4>
              <p class="text-xs text-slate-500">${cp.readingPassage.titleTr}</p>
            </div>
            <button id="checkpoint-speech-btn" class="px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-700 dark:hover:bg-slate-600 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition flex items-center gap-2">
              <i class="fas fa-volume-up"></i> Dinle
            </button>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-sm leading-relaxed text-slate-800 dark:text-slate-200 mb-4 font-serif">
            ${cp.readingPassage.text}
          </div>

          <details class="text-xs text-slate-600 dark:text-slate-400 p-3 rounded-xl bg-indigo-50/50 dark:bg-slate-900/40 border border-indigo-100 dark:border-slate-800 cursor-pointer">
            <summary class="font-bold text-indigo-600 dark:text-indigo-400 select-none">Paragrafın Türkçe Çevirisini Göster</summary>
            <p class="mt-2 leading-relaxed italic">${cp.readingPassage.textTr}</p>
          </details>
        </div>

        <!-- 5 Questions Checkpoint Quiz -->
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <i class="fas fa-tasks text-indigo-600"></i> Mini Deneme Soruları (Reading & Vocab & Grammar)
          </h4>

          <div class="space-y-6">
            ${cp.quizQuestions.map((q, qIndex) => `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700 checkpoint-question-card" data-q-index="${qIndex}">
                <div class="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">SORU ${qIndex + 1}</div>
                <div class="font-bold text-sm text-slate-800 dark:text-slate-200 mb-3">${q.q}</div>

                <div class="space-y-2">
                  ${q.options.map((opt, optIndex) => `
                    <button class="cp-option-btn w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition flex items-center justify-between" data-q-index="${qIndex}" data-opt-index="${optIndex}">
                      <span>${opt}</span>
                      <i class="far fa-circle text-slate-300 text-xs"></i>
                    </button>
                  `).join('')}
                </div>

                <div class="analysis-box hidden mt-3 p-3 rounded-xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                  <strong class="text-indigo-600 dark:text-indigo-400">Analiz:</strong> ${q.analysis}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div id="checkpoint-score-text" class="text-sm font-bold text-slate-700 dark:text-slate-300">
              Soruları cevaplayın ve denemeyi tamamlayın.
            </div>
            <button id="complete-checkpoint-btn" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center gap-2">
              <i class="fas fa-check-circle"></i> Denemeyi Kaydet & Haftayı Bitir
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --- SUB-VIEW: REGULAR LEARNING DAY ---
  function renderRegularDayView(dayData, isCompleted) {
    return `
      <!-- Section 1: Grammar & Tense Card -->
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-indigo-950/30 border border-indigo-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
        <div class="flex items-start justify-between gap-4 mb-4">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
              <i class="fas fa-clock text-lg"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Günün Tense Kuralı</span>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">${dayData.grammar.name}</h3>
            </div>
          </div>
        </div>

        <div class="bg-white/90 dark:bg-slate-900/80 p-3.5 rounded-xl border border-indigo-100 dark:border-slate-700/80 mb-4">
          <div class="text-xs font-semibold text-slate-400 mb-1">DİL BİLGİSİ FORMÜLÜ:</div>
          <code class="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400">${dayData.grammar.formula}</code>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
          <div class="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50">
            <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-1.5 flex items-center gap-2">
              <i class="fas fa-lightbulb text-amber-500"></i> B1 Seviyesi Özeti:
            </h4>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">${dayData.grammar.b1Explanation}</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-1.5 flex items-center gap-2">
              <i class="fas fa-award text-indigo-500"></i> IELTS 6.0 Stratejisi:
            </h4>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">${dayData.grammar.ieltsUsage}</p>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/50 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2.5">
          <i class="fas fa-exclamation-circle text-amber-600 dark:text-amber-400 text-sm mt-0.5"></i>
          <div><strong class="font-bold">Sınav Tuzağı:</strong> ${dayData.grammar.commonMistakes}</div>
        </div>
      </div>

      <!-- Section 2: 10 Academic Words of the Day -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm">10</div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white">Günün 10 Akademik Kelimesi</h3>
          </div>
          <span class="text-xs text-slate-400">Spaced Repetition seviyeleri otomatik güncellenir</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${dayData.words.map((w, index) => {
            const isLearned = state.learnedWords.includes(w.id);
            const isFav = state.favoriteWords.includes(w.id);
            const srInfo = getWordSRInfo(w.id);
            return `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border ${isLearned ? 'border-emerald-300 dark:border-emerald-800/60' : 'border-slate-200 dark:border-slate-700'} shadow-sm hover:shadow-md transition">
                <div class="flex items-start justify-between gap-2 mb-2">
                  <div class="flex items-baseline gap-2 flex-wrap">
                    <span class="text-xs font-bold text-slate-400">#${index + 1}</span>
                    <h4 class="text-lg font-bold text-indigo-600 dark:text-indigo-400">${w.word}</h4>
                    <span class="text-xs text-slate-400 font-mono">${w.phonetic}</span>
                    <span class="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium">${w.type}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full font-bold sr-badge-${srInfo.level}">SRS Lv.${srInfo.level}</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <button class="fav-toggle-btn text-sm p-1.5 ${isFav ? 'text-amber-500' : 'text-slate-400 hover:text-amber-500'}" data-word-id="${w.id}">
                      <i class="${isFav ? 'fas' : 'far'} fa-star"></i>
                    </button>
                    <button class="speak-btn text-sm p-1.5 text-slate-500 hover:text-indigo-600 transition" data-speak="${w.word}">
                      <i class="fas fa-volume-up"></i>
                    </button>
                  </div>
                </div>

                <div class="mb-3">
                  <div class="text-base font-bold text-slate-900 dark:text-white">${w.tr}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400 italic">${w.enDef}</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs mb-3">
                  <div class="font-medium text-slate-700 dark:text-slate-300">"${w.example}"</div>
                  <div class="text-slate-500 dark:text-slate-400 mt-1">${w.exampleTr}</div>
                </div>

                <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  <button class="learned-toggle-btn flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition ${isLearned ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}" data-word-id="${w.id}">
                    <i class="fas ${isLearned ? 'fa-check-circle text-emerald-600' : 'fa-circle text-slate-400'}"></i>
                    ${isLearned ? 'Öğrenildi' : 'Öğrenildi Olarak İşaretle'}
                  </button>
                  <button class="speak-btn text-xs text-slate-500 hover:text-indigo-600 flex items-center gap-1" data-speak="${encodeURIComponent(w.example)}">
                    <i class="fas fa-play text-[10px]"></i> Cümleyi Dinle
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Section 3: Interactive Reading Passage -->
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm relative">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-700">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                <i class="fas fa-book-reader mr-1"></i> İnteraktif Okuma Paragrafı
              </span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-1">${dayData.reading.title}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">${dayData.reading.titleTr}</p>
          </div>

          <button id="toggle-passage-speech-btn" class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${state.isReadingAloud ? 'bg-rose-600 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'}">
            <i class="fas ${state.isReadingAloud ? 'fa-stop' : 'fa-headphones'}"></i>
            <span>${state.isReadingAloud ? 'Durdur' : 'Metni Baştan Sona Dinle'}</span>
          </button>
        </div>

        <div class="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 text-base leading-loose p-5 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800">
          ${dayData.reading.sentences.map(sent => {
            const words = sent.en.split(' ');
            const interactiveWords = words.map(rawWord => {
              const cleanWord = rawWord.replace(/[.,;:'"?!()]/g, '').toLowerCase();
              const isTargetVocab = dayData.words.some(w => w.word.toLowerCase() === cleanWord);
              return `<span class="interactive-word ${isTargetVocab ? 'target-vocab' : ''}" data-word="${cleanWord}" data-sentence-id="${sent.id}">${rawWord}</span>`;
            }).join(' ');

            return `
              <span class="interactive-sentence ${state.activeSentenceId === sent.id ? 'active-sentence' : ''}" data-sentence-id="${sent.id}">
                ${interactiveWords}
              </span>
            `;
          }).join(' ')}
        </div>

        <div id="sentence-analysis-card" class="${state.activeSentenceId ? '' : 'hidden'} mt-5 p-4 rounded-xl bg-indigo-50/90 dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900 animate-fade-in"></div>

        <div id="word-popup" class="hidden absolute z-50 p-3.5 rounded-xl bg-slate-900 text-white text-xs shadow-2xl border border-slate-700 min-w-[200px] max-w-[280px] animate-fade-in">
          <div class="flex items-start justify-between gap-2 mb-1.5">
            <div class="font-bold text-sm text-amber-400" id="word-popup-title">word</div>
            <button id="word-popup-speak" class="text-slate-300 hover:text-white p-1">
              <i class="fas fa-volume-up"></i>
            </button>
          </div>
          <div class="text-slate-200 font-semibold mb-1" id="word-popup-meaning">anlamı</div>
          <div class="text-slate-400 text-[11px] italic" id="word-popup-def">tanım</div>
        </div>
      </div>

      <!-- Section 4: Day Completion CTA -->
      <div class="p-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white uppercase tracking-wider mb-2 inline-block">Sonsuz İlerleme</span>
          <h3 class="text-2xl font-bold">${dayData.day}. Günü Bitirdiniz mi?</h3>
          <p class="text-indigo-100 text-sm mt-1 max-w-xl">
            Günü tamamladığınızda bu 10 kelime otomatik olarak Aralıklı Tekrar (SRS) havuzunuza eklenir ve oyunlarda karşınıza çıkar.
          </p>
        </div>
        <button id="complete-day-btn" class="px-6 py-3.5 rounded-xl font-bold text-indigo-900 bg-white hover:bg-indigo-50 shadow-lg transition whitespace-nowrap flex items-center gap-2">
          <i class="fas ${isCompleted ? 'fa-check-circle text-emerald-600' : 'fa-trophy text-amber-500'} text-lg"></i>
          <span>${isCompleted ? 'Tamamlandı (Güncelle)' : 'Günü Bitir & Sonraki Güne Geç'}</span>
        </button>
      </div>
    `;
  }

  function bindDailyPracticeEvents(container, dayData) {
    // Prev / Next day
    const prevBtn = container.querySelector('#prev-day-btn');
    const nextBtn = container.querySelector('#next-day-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => {
      if (state.currentDay > 1) {
        state.currentDay--;
        localStorage.setItem('ielts_current_day', state.currentDay);
        state.activeSentenceId = null;
        renderApp();
      }
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      state.currentDay++;
      localStorage.setItem('ielts_current_day', state.currentDay);
      state.activeSentenceId = null;
      renderApp();
    });

    // Quick Day jump input
    const quickInput = container.querySelector('#quick-day-input');
    const quickBtn = container.querySelector('#quick-day-go-btn');
    if (quickBtn && quickInput) {
      quickBtn.addEventListener('click', () => {
        const val = parseInt(quickInput.value, 10);
        if (val && val >= 1) {
          state.currentDay = val;
          localStorage.setItem('ielts_current_day', state.currentDay);
          renderApp();
        }
      });
    }

    // Speech events
    container.querySelectorAll('.speak-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        speak(decodeURIComponent(btn.getAttribute('data-speak')));
      });
    });

    // Toggle learned / favorite
    container.querySelectorAll('.learned-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wordId = btn.getAttribute('data-word-id');
        toggleLearnedWord(wordId);
        renderDailyPractice(container);
      });
    });
    container.querySelectorAll('.fav-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wordId = btn.getAttribute('data-word-id');
        toggleFavoriteWord(wordId);
        renderDailyPractice(container);
      });
    });

    // Interactive words & sentences
    const popup = container.querySelector('#word-popup');
    container.querySelectorAll('.interactive-word').forEach(span => {
      span.addEventListener('click', (e) => {
        e.stopPropagation();
        const rawWord = span.getAttribute('data-word');
        showWordPopup(rawWord, span, dayData, popup);
      });
    });
    container.querySelectorAll('.interactive-sentence').forEach(sentSpan => {
      sentSpan.addEventListener('click', () => {
        const sentId = sentSpan.getAttribute('data-sentence-id');
        selectSentence(sentId, dayData, container);
      });
    });

    // Passage speech
    const speechBtn = container.querySelector('#toggle-passage-speech-btn');
    if (speechBtn) {
      speechBtn.addEventListener('click', () => {
        if (state.isReadingAloud) {
          window.speechSynthesis.cancel();
          state.isReadingAloud = false;
          renderDailyPractice(container);
        } else {
          startParagraphReading(dayData, container);
        }
      });
    }

    // Checkpoint specific events
    if (dayData.isCheckpoint) {
      const cpSpeechBtn = container.querySelector('#checkpoint-speech-btn');
      if (cpSpeechBtn) {
        cpSpeechBtn.addEventListener('click', () => {
          speak(dayData.checkpoint.readingPassage.text, 0.88);
        });
      }

      container.querySelectorAll('.cp-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const qIdx = parseInt(btn.getAttribute('data-q-index'), 10);
          const optIdx = parseInt(btn.getAttribute('data-opt-index'), 10);
          const correctIdx = dayData.checkpoint.quizQuestions[qIdx].correct;

          // Mark options
          const card = container.querySelector(`.checkpoint-question-card[data-q-index="${qIdx}"]`);
          card.querySelectorAll('.cp-option-btn').forEach((b, i) => {
            b.disabled = true;
            if (i === correctIdx) {
              b.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
              b.querySelector('i').className = 'fas fa-check-circle text-white text-xs';
            }
          });

          if (optIdx !== correctIdx) {
            btn.classList.add('bg-rose-500', 'text-white', 'border-rose-600');
            btn.querySelector('i').className = 'fas fa-times-circle text-white text-xs';
          }

          card.querySelector('.analysis-box').classList.remove('hidden');
        });
      });

      const completeCpBtn = container.querySelector('#complete-checkpoint-btn');
      if (completeCpBtn) {
        completeCpBtn.addEventListener('click', () => {
          if (!state.completedDays.includes(dayData.day)) {
            state.completedDays.push(dayData.day);
            localStorage.setItem('ielts_completed_days', JSON.stringify(state.completedDays));
          }
          if (typeof confetti === 'function') confetti();
          showToast(`Tebrikler! ${dayData.checkpoint.week}. Hafta Mini Denemesi tamamlandı! 🏆`, 'success');
          // Auto advance to next day
          state.currentDay++;
          localStorage.setItem('ielts_current_day', state.currentDay);
          renderDailyPractice(container);
        });
      }
    } else {
      // Complete day button
      const completeBtn = container.querySelector('#complete-day-btn');
      if (completeBtn) {
        completeBtn.addEventListener('click', () => {
          completeCurrentDay(dayData);
        });
      }
    }
  }

  function showWordPopup(rawWord, targetElement, dayData, popup) {
    if (!popup) return;
    const targetVocab = (dayData.words || []).find(w => w.word.toLowerCase() === rawWord.toLowerCase());
    const dictMeaning = (dayData.reading && dayData.reading.wordDictionary) ? dayData.reading.wordDictionary[rawWord.toLowerCase()] : null;

    const titleEl = popup.querySelector('#word-popup-title');
    const meaningEl = popup.querySelector('#word-popup-meaning');
    const defEl = popup.querySelector('#word-popup-def');
    const speakBtn = popup.querySelector('#word-popup-speak');

    if (targetVocab) {
      titleEl.textContent = `${targetVocab.word} (${targetVocab.type})`;
      meaningEl.textContent = targetVocab.tr;
      defEl.textContent = targetVocab.enDef;
      speakBtn.onclick = () => speak(targetVocab.word);
    } else if (dictMeaning) {
      titleEl.textContent = rawWord;
      meaningEl.textContent = dictMeaning;
      defEl.textContent = 'Paragraftaki akademik kelime';
      speakBtn.onclick = () => speak(rawWord);
    } else {
      titleEl.textContent = rawWord;
      meaningEl.textContent = 'İngilizce kelime';
      defEl.textContent = 'Telaffuz için hoparlöre tıklayın';
      speakBtn.onclick = () => speak(rawWord);
    }

    const rect = targetElement.getBoundingClientRect();
    const parentRect = targetElement.closest('.relative').getBoundingClientRect();
    popup.style.top = `${rect.bottom - parentRect.top + 8}px`;
    popup.style.left = `${Math.min(rect.left - parentRect.left, parentRect.width - 240)}px`;
    popup.classList.remove('hidden');

    speak(rawWord, 0.95);
  }

  function selectSentence(sentenceId, dayData, container) {
    state.activeSentenceId = sentenceId;
    const sent = (dayData.reading && dayData.reading.sentences) ? dayData.reading.sentences.find(s => s.id === sentenceId) : null;
    if (!sent) return;

    container.querySelectorAll('.interactive-sentence').forEach(el => {
      if (el.getAttribute('data-sentence-id') === sentenceId) {
        el.classList.add('active-sentence');
      } else {
        el.classList.remove('active-sentence');
      }
    });

    const card = container.querySelector('#sentence-analysis-card');
    if (card) {
      card.innerHTML = `
        <div class="flex items-start justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
              <i class="fas fa-language"></i>
            </span>
            <span class="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">Cümlenin Türkçe Çevirisi</span>
          </div>
          <button class="speak-btn text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 p-1" data-speak="${encodeURIComponent(sent.en)}">
            <i class="fas fa-volume-up"></i>
          </button>
        </div>
        <div class="text-sm font-semibold text-slate-900 dark:text-white mb-2 leading-relaxed">
          "${sent.tr}"
        </div>
        <div class="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
          <strong class="text-indigo-700 dark:text-indigo-300">Gramer & Yapı:</strong> ${sent.analysis}
        </div>
      `;
      card.classList.remove('hidden');
      card.querySelector('.speak-btn').addEventListener('click', () => speak(sent.en));
    }
  }

  function startParagraphReading(dayData, container) {
    if (!('speechSynthesis' in window) || !dayData.reading) return;
    state.isReadingAloud = true;
    renderDailyPractice(container);

    const fullText = dayData.reading.sentences.map(s => s.en).join(' ');
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'en-US';
    utterance.rate = 0.88;

    utterance.onend = () => {
      state.isReadingAloud = false;
      renderDailyPractice(container);
    };
    utterance.onerror = () => {
      state.isReadingAloud = false;
      renderDailyPractice(container);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function completeCurrentDay(dayData) {
    if (!state.completedDays.includes(dayData.day)) {
      state.completedDays.push(dayData.day);
      localStorage.setItem('ielts_completed_days', JSON.stringify(state.completedDays));
    }

    // Add 10 words to learned and initialize SRS Level 1
    (dayData.words || []).forEach(w => {
      if (!state.learnedWords.includes(w.id)) {
        state.learnedWords.push(w.id);
      }
      if (!state.srData[w.id]) {
        state.srData[w.id] = { level: 1, nextReview: Date.now(), correctStreak: 0, wrongCount: 0 };
      }
    });
    localStorage.setItem('ielts_learned_words', JSON.stringify(state.learnedWords));
    localStorage.setItem('ielts_sr_data', JSON.stringify(state.srData));

    if (typeof confetti === 'function') confetti();
    showToast(`Tebrikler! ${dayData.day}. Gün bitti. Sonraki güne geçiliyor! 🎉`, 'success');

    // Infinite auto-advance
    state.currentDay++;
    localStorage.setItem('ielts_current_day', state.currentDay);
    renderApp();
  }

  function toggleLearnedWord(wordId) {
    if (state.learnedWords.includes(wordId)) {
      state.learnedWords = state.learnedWords.filter(id => id !== wordId);
      showToast('Kelime öğrenilecekler listesine alındı.', 'info');
    } else {
      state.learnedWords.push(wordId);
      showToast('Kelime öğrenildi olarak işaretlendi! ✓', 'success');
      recordWordAnswer(wordId, true);
    }
    localStorage.setItem('ielts_learned_words', JSON.stringify(state.learnedWords));
  }

  function toggleFavoriteWord(wordId) {
    if (state.favoriteWords.includes(wordId)) {
      state.favoriteWords = state.favoriteWords.filter(id => id !== wordId);
    } else {
      state.favoriteWords.push(wordId);
      showToast('Favorilere eklendi! ⭐', 'success');
    }
    localStorage.setItem('ielts_favorite_words', JSON.stringify(state.favoriteWords));
  }

  // =========================================================================
  // 2. VOCABULARY BANK & GAMES (SPACED REPETITION ENGINE)
  // =========================================================================
  function getAllAccumulatedWords() {
    const daysCount = Math.max(state.currentDay, 1);
    const setOfWords = new Map();

    for (let d = 1; d <= daysCount; d++) {
      const dayData = window.getCurriculumDay(d);
      if (!dayData.isCheckpoint && dayData.words) {
        dayData.words.forEach(w => {
          if (!setOfWords.has(w.id)) {
            setOfWords.set(w.id, { ...w, dayNumber: d, dayTheme: dayData.theme });
          }
        });
      }
    }
    return Array.from(setOfWords.values());
  }

  function renderVocabularyBank(container) {
    const allWords = getAllAccumulatedWords();
    const now = Date.now();

    // Spaced Repetition stats
    const dueWords = allWords.filter(w => {
      const sr = getWordSRInfo(w.id);
      return sr.nextReview <= now || sr.level === 1;
    });
    const masteredWords = allWords.filter(w => getWordSRInfo(w.id).level >= 4);

    let filteredWords = allWords.filter(w => {
      const sr = getWordSRInfo(w.id);
      const matchesSearch = w.word.toLowerCase().includes(state.bankSearch.toLowerCase()) || 
                            w.tr.toLowerCase().includes(state.bankSearch.toLowerCase());
      if (!matchesSearch) return false;

      if (state.bankFilter === 'due') return sr.nextReview <= now || sr.level === 1;
      if (state.bankFilter === 'struggling') return sr.wrongCount >= 1;
      if (state.bankFilter === 'mastered') return sr.level >= 4;
      if (state.bankFilter === 'favorites') return state.favoriteWords.includes(w.id);
      return true;
    });

    let html = `
      <div class="space-y-8 animate-fade-in pb-16">
        <!-- Spaced Repetition Status Dashboard -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="text-xs font-bold text-slate-400 uppercase">Toplam Kelime</div>
            <div class="text-2xl font-black text-slate-800 dark:text-white mt-1">${allWords.length}</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-900/60 bg-rose-50/20 shadow-sm">
            <div class="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase">Tekrarı Gelenler</div>
            <div class="text-2xl font-black text-rose-600 dark:text-rose-400 mt-1">${dueWords.length} <span class="text-xs font-normal">hemen çalış</span></div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 shadow-sm">
            <div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Ustalaşılanlar</div>
            <div class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">${masteredWords.length}</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="text-xs font-bold text-amber-500 uppercase">Favoriler</div>
            <div class="text-2xl font-black text-amber-500 mt-1">${state.favoriteWords.length}</div>
          </div>
        </div>

        <!-- Mode Navigation -->
        <div class="p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 flex flex-wrap gap-2">
          <button class="game-tab-btn flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${state.currentGame === 'matching' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}" data-game="matching">
            <i class="fas fa-th-large"></i> Eşleştirme Oyunu
          </button>
          <button class="game-tab-btn flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${state.currentGame === 'flashcard' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}" data-game="flashcard">
            <i class="fas fa-clone"></i> SRS Hafıza Kartı (3D)
          </button>
          <button class="game-tab-btn flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${state.currentGame === 'quiz' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}" data-game="quiz">
            <i class="fas fa-bolt"></i> Hızlı Quiz
          </button>
          <button class="game-tab-btn flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${state.currentGame === 'list' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}" data-game="list">
            <i class="fas fa-list"></i> Tüm Kelime Listesi
          </button>
        </div>

        <!-- Arena -->
        <div id="game-arena" class="min-h-[420px]"></div>
      </div>
    `;

    container.innerHTML = html;

    container.querySelectorAll('.game-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentGame = btn.getAttribute('data-game');
        renderVocabularyBank(container);
      });
    });

    const arena = container.querySelector('#game-arena');
    // For games, prioritize due words (Spaced Repetition)
    const prioritizedWords = [...dueWords, ...allWords.filter(w => !dueWords.includes(w))];

    if (state.currentGame === 'matching') {
      renderMatchingGame(arena, prioritizedWords);
    } else if (state.currentGame === 'flashcard') {
      renderFlashcardGame(arena, prioritizedWords);
    } else if (state.currentGame === 'quiz') {
      renderSpeedQuizGame(arena, prioritizedWords);
    } else {
      renderWordsList(arena, filteredWords, allWords);
    }
  }

  // --- SUB-GAME 1: MATCHING GAME (SRS AWARE) ---
  function renderMatchingGame(container, wordsPool) {
    if (wordsPool.length < 4) {
      container.innerHTML = `<div class="p-8 text-center text-slate-400">En az 4 kelime gereklidir.</div>`;
      return;
    }

    const sampleSize = Math.min(6, wordsPool.length);
    const chosen = wordsPool.slice(0, sampleSize);
    
    const cards = [];
    chosen.forEach(w => {
      cards.push({ id: `en_${w.id}`, wordId: w.id, text: w.word, lang: 'en', matched: false });
      cards.push({ id: `tr_${w.id}`, wordId: w.id, text: w.tr, lang: 'tr', matched: false });
    });

    state.matchingCards = cards.sort(() => 0.5 - Math.random());
    state.firstSelectedCard = null;
    state.matchedPairsCount = 0;
    state.matchingMoves = 0;

    container.innerHTML = `
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
          <div>
            <h3 class="font-bold text-base text-slate-800 dark:text-white flex items-center gap-2">
              <i class="fas fa-puzzle-piece text-indigo-600"></i> İngilizce - Türkçe Eşleştirme (Aralıklı Tekrar Öncelikli)
            </h3>
            <p class="text-xs text-slate-400">Yanlış bilinen kelimeler otomatik olarak tekrar listesine alınır.</p>
          </div>
          <button id="restart-match-btn" class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-xs font-semibold">Yeni Oyun</button>
        </div>

        <div id="matching-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          ${state.matchingCards.map(c => `
            <div class="matching-card p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 text-center cursor-pointer flex items-center justify-center min-h-[85px] shadow-sm select-none" data-card-id="${c.id}">
              <span class="font-bold text-sm ${c.lang === 'en' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-800 dark:text-slate-200'}">${c.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.matching-card').forEach(cardEl => {
      cardEl.addEventListener('click', () => handleMatchingClick(cardEl, container, sampleSize));
    });

    container.querySelector('#restart-match-btn').addEventListener('click', () => {
      renderMatchingGame(container, wordsPool);
    });
  }

  function handleMatchingClick(cardEl, container, totalPairs) {
    const cardId = cardEl.getAttribute('data-card-id');
    const cardObj = state.matchingCards.find(c => c.id === cardId);
    if (!cardObj || cardObj.matched || cardEl.classList.contains('selected')) return;

    if (!state.firstSelectedCard) {
      state.firstSelectedCard = { el: cardEl, data: cardObj };
      cardEl.classList.add('selected');
    } else {
      const first = state.firstSelectedCard;
      const second = { el: cardEl, data: cardObj };
      second.el.classList.add('selected');
      state.matchingMoves++;

      if (first.data.wordId === second.data.wordId && first.data.lang !== second.data.lang) {
        setTimeout(() => {
          first.el.classList.add('matched');
          second.el.classList.add('matched');
          first.data.matched = true;
          second.data.matched = true;
          state.matchedPairsCount++;
          state.firstSelectedCard = null;

          // Record correct answer in SRS
          recordWordAnswer(first.data.wordId, true);

          if (state.matchedPairsCount === totalPairs) {
            if (typeof confetti === 'function') confetti();
            showToast('Tebrikler! Bütün kelimeleri başarıyla eşleştirdiniz! 🏆', 'success');
          }
        }, 300);
      } else {
        // Record wrong answer in SRS
        recordWordAnswer(first.data.wordId, false);
        recordWordAnswer(second.data.wordId, false);

        setTimeout(() => {
          first.el.classList.add('wrong');
          second.el.classList.add('wrong');
          setTimeout(() => {
            first.el.classList.remove('selected', 'wrong');
            second.el.classList.remove('selected', 'wrong');
            state.firstSelectedCard = null;
          }, 500);
        }, 300);
      }
    }
  }

  // --- SUB-GAME 2: FLASHCARDS (3D FLIP & SRS FEEDBACK) ---
  function renderFlashcardGame(container, wordsPool) {
    state.flashcards = [...wordsPool];
    state.currentFlashcardIndex = 0;
    state.isCardFlipped = false;
    renderFlashcardInner(container);
  }

  function renderFlashcardInner(container) {
    const card = state.flashcards[state.currentFlashcardIndex] || state.flashcards[0];
    if (!card) return;

    const srInfo = getWordSRInfo(card.id);

    container.innerHTML = `
      <div class="max-w-xl mx-auto p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm animate-fade-in">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <span class="px-2 py-0.5 rounded-full sr-badge-${srInfo.level}">SRS Seviye ${srInfo.level}</span>
            <span>Hata: ${srInfo.wrongCount}</span>
          </span>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-mono">
            ${state.currentFlashcardIndex + 1} / ${state.flashcards.length}
          </span>
        </div>

        <div id="flashcard-container" class="perspective-1000 my-4 cursor-pointer select-none">
          <div id="flashcard-inner" class="relative w-full h-72 rounded-2xl transition-transform duration-500 transform-style-3d ${state.isCardFlipped ? 'rotate-y-180' : ''}">
            
            <!-- FRONT -->
            <div class="absolute inset-0 w-full h-full p-8 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-800 dark:via-slate-800 dark:to-indigo-950/40 border-2 border-indigo-200/80 dark:border-slate-700 flex flex-col items-center justify-center text-center shadow-lg backface-hidden">
              <span class="px-2.5 py-0.5 rounded text-xs font-medium bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 mb-2">${card.type}</span>
              <h3 class="text-3xl font-black text-slate-900 dark:text-white mb-1">${card.word}</h3>
              <p class="text-sm font-mono text-slate-400 mb-4">${card.phonetic}</p>
              <div class="text-xs text-slate-500 italic max-w-sm">"${card.example}"</div>
              <div class="mt-6 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <i class="fas fa-sync-alt"></i> Çevirmek için tıkla (veya Boşluk)
              </div>
            </div>

            <!-- BACK -->
            <div class="absolute inset-0 w-full h-full p-8 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 flex flex-col items-center justify-center text-center shadow-lg backface-hidden rotate-y-180">
              <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Türkçe Anlamı</span>
              <h3 class="text-2xl font-black text-slate-900 dark:text-white mb-2">${card.tr}</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 mb-4 max-w-sm">${card.enDef}</p>
              <div class="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-emerald-100 text-xs text-slate-600 dark:text-slate-300 max-w-sm">
                "${card.exampleTr}"
              </div>
            </div>

          </div>
        </div>

        <div class="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
          <button id="fc-repeat-btn" class="flex-1 py-3 px-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 text-xs font-bold transition flex items-center justify-center gap-1.5">
            <i class="fas fa-redo"></i> Tekrar Etmeliyim
          </button>
          
          <button id="fc-speak-btn" class="w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition">
            <i class="fas fa-volume-up"></i>
          </button>

          <button id="fc-know-btn" class="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5">
            <i class="fas fa-check"></i> Biliyorum (Seviye Artır)
          </button>
        </div>
      </div>
    `;

    container.querySelector('#flashcard-container').addEventListener('click', flipFlashcard);
    container.querySelector('#fc-speak-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      speak(card.word);
    });
    container.querySelector('#fc-know-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      recordWordAnswer(card.id, true);
      nextFlashcard(true, container);
    });
    container.querySelector('#fc-repeat-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      recordWordAnswer(card.id, false);
      nextFlashcard(false, container);
    });
  }

  function flipFlashcard() {
    state.isCardFlipped = !state.isCardFlipped;
    const inner = document.getElementById('flashcard-inner');
    if (inner) {
      if (state.isCardFlipped) inner.classList.add('rotate-y-180');
      else inner.classList.remove('rotate-y-180');
    }
  }

  function nextFlashcard(known, container = document.getElementById('game-arena')) {
    state.isCardFlipped = false;
    if (state.currentFlashcardIndex < state.flashcards.length - 1) {
      state.currentFlashcardIndex++;
      renderFlashcardInner(container);
    } else {
      container.innerHTML = `
        <div class="text-center py-12 px-6 max-w-md mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm animate-fade-in">
          <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl mb-4">
            <i class="fas fa-check"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-800 dark:text-white">Deste Tamamlandı!</h3>
          <p class="text-xs text-slate-500 mt-2">Aralıklı Tekrar algoritması kelime seviyelerinizi güncelledi.</p>
          <button id="restart-fc-btn" class="mt-6 px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow">
            Tekrar Çalıştır
          </button>
        </div>
      `;
      container.querySelector('#restart-fc-btn').addEventListener('click', () => {
        renderFlashcardGame(container, getAllAccumulatedWords());
      });
    }
  }

  // --- SUB-GAME 3: SPEED QUIZ (SRS AWARE) ---
  function renderSpeedQuizGame(container, wordsPool) {
    if (wordsPool.length < 4) {
      container.innerHTML = `<div class="p-8 text-center text-slate-400">En az 4 kelime gereklidir.</div>`;
      return;
    }

    state.quizQuestions = generateQuizQuestions(wordsPool, 10);
    state.currentQuizIndex = 0;
    state.quizScore = 0;
    renderSpeedQuizInner(container);
  }

  function generateQuizQuestions(pool, count) {
    const questions = [];
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const limit = Math.min(count, shuffledPool.length);

    for (let i = 0; i < limit; i++) {
      const target = shuffledPool[i];
      const wrongOptions = pool
        .filter(w => w.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.tr);

      const allOptions = [target.tr, ...wrongOptions].sort(() => 0.5 - Math.random());
      questions.push({
        id: target.id,
        word: target.word,
        phonetic: target.phonetic,
        type: target.type,
        correctMeaning: target.tr,
        example: target.example,
        options: allOptions
      });
    }
    return questions;
  }

  function renderSpeedQuizInner(container) {
    const q = state.quizQuestions[state.currentQuizIndex];
    if (!q) return;

    container.innerHTML = `
      <div class="max-w-xl mx-auto p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm animate-fade-in">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
            <i class="fas fa-bolt"></i> Soru ${state.currentQuizIndex + 1} / ${state.quizQuestions.length}
          </span>
          <span class="text-xs font-bold text-emerald-600">Skor: ${state.quizScore}</span>
        </div>

        <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 dark:from-slate-900/60 dark:via-slate-900/60 dark:to-slate-900/60 border border-indigo-100 dark:border-slate-700 text-center mb-6">
          <span class="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-700 text-slate-600">${q.type}</span>
          <h3 class="text-3xl font-black text-slate-900 dark:text-white mt-1 mb-1">${q.word}</h3>
          <p class="text-xs font-mono text-slate-400 mb-2">${q.phonetic}</p>
          <p class="text-xs text-slate-500 italic">"${q.example}"</p>
          <button class="speak-btn mt-2 text-indigo-600 dark:text-indigo-400 p-1.5 rounded-lg hover:bg-indigo-50 transition" data-speak="${q.word}">
            <i class="fas fa-volume-up"></i> Dinle
          </button>
        </div>

        <div class="space-y-3" id="quiz-options-group">
          ${q.options.map(opt => `
            <button class="quiz-option-btn w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 bg-white dark:bg-slate-900/50 text-left font-semibold text-sm text-slate-800 dark:text-slate-200 transition flex items-center justify-between" data-option="${opt}">
              <span>${opt}</span>
              <i class="far fa-circle text-slate-300"></i>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelector('.speak-btn').addEventListener('click', () => speak(q.word));
    container.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleQuizAnswer(btn, q, container));
    });
  }

  function handleQuizAnswer(selectedBtn, q, container) {
    const selectedText = selectedBtn.getAttribute('data-option');
    const isCorrect = selectedText === q.correctMeaning;

    recordWordAnswer(q.id, isCorrect);

    container.querySelectorAll('.quiz-option-btn').forEach(b => {
      b.disabled = true;
      if (b.getAttribute('data-option') === q.correctMeaning) {
        b.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
        b.querySelector('i').className = 'fas fa-check-circle text-white';
      }
    });

    if (isCorrect) {
      state.quizScore += 10;
    } else {
      selectedBtn.classList.add('bg-rose-500', 'text-white', 'border-rose-600');
      selectedBtn.querySelector('i').className = 'fas fa-times-circle text-white';
    }

    setTimeout(() => {
      if (state.currentQuizIndex < state.quizQuestions.length - 1) {
        state.currentQuizIndex++;
        renderSpeedQuizInner(container);
      } else {
        if (typeof confetti === 'function') confetti();
        container.innerHTML = `
          <div class="text-center py-12 px-6 max-w-md mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 class="text-xl font-bold text-slate-800 dark:text-white">Quiz Tamamlandı!</h3>
            <p class="text-2xl font-black text-indigo-600 my-2">${state.quizScore} Puan</p>
            <button id="restart-quiz-btn" class="mt-6 px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow">
              Yeni Test Başlat
            </button>
          </div>
        `;
        container.querySelector('#restart-quiz-btn').addEventListener('click', () => {
          renderSpeedQuizGame(container, getAllAccumulatedWords());
        });
      }
    }, 1100);
  }

  // --- SUB-VIEW 4: WORDS LIST WITH SRS BADGES ---
  function renderWordsList(container, filteredWords, allWords) {
    container.innerHTML = `
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div class="relative w-full sm:w-72">
            <i class="fas fa-search absolute left-3.5 top-3.5 text-slate-400 text-sm"></i>
            <input type="text" id="bank-search-input" value="${state.bankSearch}" placeholder="Kelime veya Türkçe anlam ara..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm dark:text-white">
          </div>

          <div class="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700'}" data-filter="all">Tümü (${allWords.length})</button>
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'due' ? 'bg-rose-600 text-white' : 'bg-slate-100 dark:bg-slate-700'}" data-filter="due">Tekrarı Gelenler</button>
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'struggling' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-700'}" data-filter="struggling">Zorlanılanlar</button>
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'mastered' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-700'}" data-filter="mastered">Ustalaşılanlar</button>
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'favorites' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-700'}" data-filter="favorites">Favoriler</button>
          </div>
        </div>

        <div class="space-y-3">
          ${filteredWords.map(w => {
            const sr = getWordSRInfo(w.id);
            const isFav = state.favoriteWords.includes(w.id);
            return `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-start gap-3">
                  <button class="fav-toggle-btn text-base ${isFav ? 'text-amber-500' : 'text-slate-300'}" data-word-id="${w.id}">
                    <i class="${isFav ? 'fas' : 'far'} fa-star"></i>
                  </button>
                  <div>
                    <div class="flex items-baseline gap-2 flex-wrap">
                      <span class="font-bold text-base text-slate-900 dark:text-white">${w.word}</span>
                      <span class="text-xs text-slate-400 font-mono">${w.phonetic}</span>
                      <span class="text-[11px] px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600">${w.type}</span>
                      <span class="text-[11px] px-2 py-0.5 rounded-full font-bold sr-badge-${sr.level}">SRS Lv.${sr.level}</span>
                      ${sr.wrongCount > 0 ? `<span class="text-[10px] text-rose-500 font-bold">Hata: ${sr.wrongCount}</span>` : ''}
                    </div>
                    <div class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">${w.tr}</div>
                    <div class="text-xs text-slate-500 italic mt-0.5">"${w.example}"</div>
                  </div>
                </div>

                <div class="flex items-center gap-2 self-end sm:self-center">
                  <button class="speak-btn p-2 rounded-lg text-slate-400 hover:text-indigo-600 transition" data-speak="${w.word}">
                    <i class="fas fa-volume-up"></i>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    container.querySelector('#bank-search-input').addEventListener('input', (e) => {
      state.bankSearch = e.target.value;
      renderVocabularyBank(document.getElementById('main-content-area'));
    });
    container.querySelectorAll('.bank-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.bankFilter = btn.getAttribute('data-filter');
        renderVocabularyBank(document.getElementById('main-content-area'));
      });
    });
    container.querySelectorAll('.speak-btn').forEach(btn => {
      btn.addEventListener('click', () => speak(decodeURIComponent(btn.getAttribute('data-speak'))));
    });
    container.querySelectorAll('.fav-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleFavoriteWord(btn.getAttribute('data-word-id'));
        renderVocabularyBank(document.getElementById('main-content-area'));
      });
    });
  }

  // =========================================================================
  // 3. HISTORY & ARCHIVES (GEÇMİŞ VE KAYITLAR)
  // =========================================================================
  function renderHistoryArchives(container) {
    const listLimit = Math.max(state.currentDay + 7, 28);
    const days = [];
    for (let d = 1; d <= listLimit; d++) {
      days.push(window.getCurriculumDay(d));
    }

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in pb-16">
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Sınırsız Müfredat Arşivi</span>
            <h2 class="text-2xl font-black text-slate-900 dark:text-white mt-1">Ders Kayıtları & Haftalık Checkpointler</h2>
            <p class="text-xs text-slate-500 mt-1">Her günün konu başlığı, gramer kuralı ve her 7. günde mini deneme.</p>
          </div>
          <div class="flex items-center gap-4 text-xs font-bold">
            <span class="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
              Aktif Gün: ${state.currentDay}
            </span>
            <span class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
              Tamamlanan: ${state.completedDays.length}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${days.map(d => {
            const isCompleted = state.completedDays.includes(d.day);
            const isCp = d.isCheckpoint;
            return `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border ${isCp ? 'border-amber-300 dark:border-amber-700 bg-amber-50/10' : (isCompleted ? 'border-emerald-300 dark:border-emerald-800' : 'border-slate-200 dark:border-slate-700')} shadow-sm hover:shadow-md transition">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold ${isCp ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' : (isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600 dark:bg-slate-700')}">
                        ${d.day}. GÜN ${isCp ? '★ CHECKPOINT' : ''}
                      </span>
                      <span class="text-xs text-slate-400">${d.theme}</span>
                    </div>
                    <h3 class="font-bold text-sm text-slate-800 dark:text-white">${d.titleTr}</h3>
                  </div>
                  <span class="text-base ${isCompleted ? 'text-emerald-500' : 'text-slate-300'}">
                    <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-circle'}"></i>
                  </span>
                </div>

                <button class="jump-to-day-btn w-full mt-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center justify-center gap-1.5" data-day="${d.day}">
                  <i class="fas fa-play text-[10px]"></i> ${isCp ? 'Denemeyi Çöz' : 'Dersine Git'}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.jump-to-day-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentDay = parseInt(btn.getAttribute('data-day'), 10);
        localStorage.setItem('ielts_current_day', state.currentDay);
        switchTab('daily');
      });
    });
  }

  // =========================================================================
  // 4. ROOTS & AFFIXES (50+ KÖK, 35+ ÖN EK, 30+ SON EK)
  // =========================================================================
  function renderRootsAndAffixes(container) {
    const data = window.ROOTS_AFFIXES_DATA;

    let html = `
      <div class="space-y-8 animate-fade-in pb-16">
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Genişletilmiş Kütüphane (50+ Kök, 35+ Ön Ek, 30+ Son Ek)</span>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white mt-1">Kelime Kökü ve Ek Analiz Ansiklopedisi</h2>
          <p class="text-xs text-slate-500 mt-1 max-w-2xl">
            IELTS Academic Reading metinlerinde bilinmeyen kelimelerin anlamını %80 doğrulukla tahmin etmenizi sağlayan dev kütüphane.
          </p>

          <div class="flex items-center gap-2 mt-5 overflow-x-auto">
            <button class="roots-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition ${state.rootsTab === 'roots' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600'}" data-tab="roots">
              <i class="fas fa-seedling mr-1"></i> Kökler (${data.roots.length})
            </button>
            <button class="roots-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition ${state.rootsTab === 'prefixes' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600'}" data-tab="prefixes">
              <i class="fas fa-chevron-circle-left mr-1"></i> Ön Ekler (${data.prefixes.length})
            </button>
            <button class="roots-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition ${state.rootsTab === 'suffixes' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600'}" data-tab="suffixes">
              <i class="fas fa-chevron-circle-right mr-1"></i> Son Ekler (${data.suffixes.length})
            </button>
            <button class="roots-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition ${state.rootsTab === 'practice' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600'}" data-tab="practice">
              <i class="fas fa-brain mr-1"></i> Pratik Testi
            </button>
          </div>
        </div>

        <div id="roots-content-area"></div>
      </div>
    `;

    container.innerHTML = html;

    container.querySelectorAll('.roots-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.rootsTab = btn.getAttribute('data-tab');
        renderRootsAndAffixes(container);
      });
    });

    const sub = container.querySelector('#roots-content-area');
    if (state.rootsTab === 'roots') renderRootsList(sub, data.roots);
    else if (state.rootsTab === 'prefixes') renderPrefixesList(sub, data.prefixes);
    else if (state.rootsTab === 'suffixes') renderSuffixesList(sub, data.suffixes);
    else renderRootsPractice(sub, data.practiceQuestions);
  }

  function renderRootsList(container, roots) {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${roots.map(r => `
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-baseline justify-between mb-1.5">
              <div class="flex items-baseline gap-2">
                <span class="text-2xl font-black text-indigo-600 dark:text-indigo-400">${r.root}</span>
                <span class="text-xs text-slate-400">(${r.origin})</span>
              </div>
              <span class="text-xs font-bold bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 rounded-full">${r.meaning}</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${r.trDesc}</p>
            <div class="space-y-1.5 border-t border-slate-100 dark:border-slate-700/60 pt-2.5">
              ${r.examples.map(ex => `
                <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-xs flex items-center justify-between">
                  <div><strong>${ex.word}</strong>: ${ex.tr}</div>
                  <span class="text-[10px] text-indigo-500 font-mono">${ex.breakdown}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderPrefixesList(container, prefixes) {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${prefixes.map(p => `
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-baseline justify-between mb-1">
              <span class="text-2xl font-black text-purple-600 dark:text-purple-400">${p.prefix}</span>
              <span class="text-xs font-bold bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 rounded-full">${p.meaning}</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${p.trDesc}</p>
            <div class="space-y-1.5 border-t border-slate-100 dark:border-slate-700/60 pt-2.5">
              ${p.examples.map(ex => `
                <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-xs flex items-center justify-between">
                  <div><strong>${ex.word}</strong>: ${ex.tr}</div>
                  <span class="text-[10px] text-slate-400 italic">Kök: ${ex.rootWord}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderSuffixesList(container, suffixes) {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${suffixes.map(s => `
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-baseline justify-between mb-1">
              <span class="text-2xl font-black text-teal-600 dark:text-teal-400">${s.suffix}</span>
              <span class="text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full">${s.category}</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${s.meaning}</p>
            <div class="space-y-1.5 border-t border-slate-100 dark:border-slate-700/60 pt-2.5">
              ${s.examples.map(ex => `
                <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-xs flex items-center justify-between">
                  <div><strong>${ex.word}</strong>: ${ex.tr}</div>
                  <span class="text-[10px] text-slate-400">Kök: ${ex.base}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderRootsPractice(container, questions) {
    const q = questions[state.rootsPracticeIndex] || questions[0];
    container.innerHTML = `
      <div class="max-w-xl mx-auto p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm animate-fade-in">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold text-amber-600 uppercase">Soru ${state.rootsPracticeIndex + 1} / ${questions.length}</span>
          <span class="text-xs font-bold text-emerald-600">Doğru: ${state.rootsPracticeScore}</span>
        </div>
        <h3 class="text-base font-bold text-slate-900 dark:text-white mb-6">${q.question}</h3>
        <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <button class="roots-opt-btn w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-left text-xs font-semibold transition" data-index="${i}">
              ${opt}
            </button>
          `).join('')}
        </div>
        <div id="roots-exp" class="hidden mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-xs text-amber-900 dark:text-amber-200">
          <strong>Açıklama:</strong> ${q.explanation}
        </div>
      </div>
    `;

    container.querySelectorAll('.roots-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        const isCorrect = idx === q.correct;
        container.querySelectorAll('.roots-opt-btn').forEach((b, i) => {
          b.disabled = true;
          if (i === q.correct) b.classList.add('bg-emerald-500', 'text-white');
        });
        if (isCorrect) state.rootsPracticeScore++;
        else btn.classList.add('bg-rose-500', 'text-white');

        container.querySelector('#roots-exp').classList.remove('hidden');
        setTimeout(() => {
          if (state.rootsPracticeIndex < questions.length - 1) {
            state.rootsPracticeIndex++;
            renderRootsPractice(container, questions);
          } else {
            if (typeof confetti === 'function') confetti();
            showToast('Tebrikler! Kök & Ek testini tamamladınız! 🏆', 'success');
            state.rootsPracticeIndex = 0;
            state.rootsPracticeScore = 0;
            renderRootsPractice(container, questions);
          }
        }, 1800);
      });
    });
  }

  // =========================================================================
  // 5. IRREGULAR VERBS & GAME
  // =========================================================================
  function renderIrregularVerbs(container) {
    const data = window.IRREGULAR_VERBS_DATA;
    let filteredVerbs = data.verbs.filter(v => {
      const q = state.irregularSearch.toLowerCase();
      return v.v1.toLowerCase().includes(q) || v.v2.toLowerCase().includes(q) || v.v3.toLowerCase().includes(q) || v.tr.toLowerCase().includes(q);
    });

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in pb-16">
        <!-- Game Box -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/40 dark:from-slate-800 dark:via-slate-800 dark:to-indigo-950/30 border border-indigo-100 dark:border-slate-700 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-xs font-bold text-indigo-600 uppercase">Boşluk Doldurma Oyunu</span>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">Doğru Düzensiz Fiil Formunu Seçin</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-bold">
              🔥 Seri: ${state.irregularStreak}
            </span>
          </div>
          <div id="irregular-game-box" class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80"></div>
        </div>

        <!-- Table -->
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white">Düzensiz Fiiller Kütüphanesi (${filteredVerbs.length})</h3>
            <input type="text" id="irr-search-input" value="${state.irregularSearch}" placeholder="Fiil veya anlam ara..." class="w-full sm:w-64 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 text-xs">
          </div>
          <div class="overflow-x-auto max-h-96">
            <table class="w-full text-left text-xs">
              <thead class="border-b border-slate-200 dark:border-slate-700 text-slate-400">
                <tr><th class="p-2">V1</th><th class="p-2">V2</th><th class="p-2">V3</th><th class="p-2">Anlamı</th><th class="p-2">Örnek</th><th class="p-2">Ses</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                ${filteredVerbs.map(v => `
                  <tr>
                    <td class="p-2 font-bold text-indigo-600">${v.v1}</td>
                    <td class="p-2 font-semibold">${v.v2}</td>
                    <td class="p-2 font-semibold">${v.v3}</td>
                    <td class="p-2">${v.tr}</td>
                    <td class="p-2 text-slate-400 italic">"${v.example}"</td>
                    <td class="p-2"><button class="speak-btn text-slate-400 hover:text-indigo-600" data-speak="${v.v1}, ${v.v2}, ${v.v3}"><i class="fas fa-volume-up"></i></button></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    container.querySelector('#irr-search-input').addEventListener('input', (e) => {
      state.irregularSearch = e.target.value;
      renderIrregularVerbs(container);
    });
    container.querySelectorAll('.speak-btn').forEach(btn => {
      btn.addEventListener('click', () => speak(decodeURIComponent(btn.getAttribute('data-speak'))));
    });

    renderIrregularQuestion(container.querySelector('#irregular-game-box'), data.gameQuestions);
  }

  function renderIrregularQuestion(box, questions) {
    const q = questions[state.irregularQuizIndex % questions.length];
    if (!q) return;

    box.innerHTML = `
      <div>
        <div class="text-xs text-slate-400 mb-1">İstenen Form: <strong class="uppercase text-indigo-600">${q.requiredForm}</strong> (Fiil: ${q.baseVerb})</div>
        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">${q.sentence.replace('______', '<span class="text-amber-500 underline font-mono">______</span>')}</h4>
        <p class="text-xs text-slate-500 italic mb-4">${q.tr}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          ${q.options.map(opt => `
            <button class="irr-option-btn p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-xs" data-val="${opt}">${opt}</button>
          `).join('')}
        </div>
      </div>
    `;

    box.querySelectorAll('.irr-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isCorrect = btn.getAttribute('data-val') === q.answer;
        if (isCorrect) {
          state.irregularStreak++;
          btn.classList.add('bg-emerald-500', 'text-white');
        } else {
          state.irregularStreak = 0;
          btn.classList.add('bg-rose-500', 'text-white');
        }
        setTimeout(() => {
          state.irregularQuizIndex++;
          renderIrregularQuestion(box, questions);
        }, 800);
      });
    });
  }

  // =========================================================================
  // 6. ENGLISH GRAMMAR TREE & ENCYCLOPEDIA (İNGİLİZCE KONU ANLATIMI)
  // =========================================================================
  function renderStudyGuide(container) {
    const categories = window.STUDY_GUIDE_DATA.categories;
    const query = state.guideSearch.toLowerCase().trim();

    // Filter categories and topics based on search
    const filteredCategories = categories.map(cat => {
      const matchingTopics = cat.topics.filter(t => {
        if (!query) return true;
        return t.title.toLowerCase().includes(query) ||
               t.summary.toLowerCase().includes(query) ||
               t.formula.toLowerCase().includes(query) ||
               t.b1Explanation.toLowerCase().includes(query);
      });
      return { ...cat, topics: matchingTopics };
    }).filter(cat => cat.topics.length > 0);

    // If searching, auto-expand categories that matched
    if (query) {
      filteredCategories.forEach(c => state.expandedCategories.add(c.id));
    }

    // Find active topic
    let activeTopic = null;
    for (const cat of categories) {
      const found = cat.topics.find(t => t.id === state.activeTopicId);
      if (found) {
        activeTopic = found;
        break;
      }
    }
    if (!activeTopic && filteredCategories[0] && filteredCategories[0].topics[0]) {
      activeTopic = filteredCategories[0].topics[0];
      state.activeTopicId = activeTopic.id;
    }

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in pb-16">
        <!-- Top Search Bar & Header -->
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">A'dan Z'ye Dilbilgisi Ansiklopedisi</span>
              <h2 class="text-2xl font-black text-slate-900 dark:text-white mt-1">İngilizce Konu Anlatımı</h2>
              <p class="text-xs text-slate-500 mt-1">Tenseler, Modallar, Edilgen Çatı, Şart Cümleleri ve IELTS Stratejileri.</p>
            </div>

            <!-- Live Search Input -->
            <div class="relative w-full md:w-80">
              <i class="fas fa-search absolute left-3.5 top-3.5 text-slate-400 text-sm"></i>
              <input type="text" id="grammar-search-input" value="${state.guideSearch}" placeholder="Konu ara (örn: Present Perfect, Passive, Wish)..." class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm dark:text-white focus:ring-2 focus:ring-indigo-500">
            </div>
          </div>
        </div>

        <!-- 2-Column Split: Tree Navigator on Left, Content on Right -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- LEFT: Branching Tree Navigator (4 cols) -->
          <div class="lg:col-span-5 space-y-3 max-h-[700px] overflow-y-auto pr-1">
            ${filteredCategories.map(cat => {
              const isExpanded = state.expandedCategories.has(cat.id);
              return `
                <div class="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-sm">
                  <div class="tree-category-header p-3.5 flex items-center justify-between bg-slate-50/70 dark:bg-slate-900/40" data-cat-id="${cat.id}">
                    <div class="flex items-center gap-2.5">
                      <i class="fas ${cat.icon} text-indigo-600 dark:text-indigo-400 text-sm"></i>
                      <span class="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">${cat.name}</span>
                    </div>
                    <i class="fas ${isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-slate-400 text-xs transition-transform"></i>
                  </div>

                  <div class="tree-topics-container ${isExpanded ? 'block' : 'hidden'} p-2 space-y-1 bg-white dark:bg-slate-800">
                    ${cat.topics.map(t => {
                      const isActive = state.activeTopicId === t.id;
                      return `
                        <div class="tree-topic-item p-2.5 rounded-lg text-xs font-semibold transition ${isActive ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}" data-topic-id="${t.id}">
                          ${t.title}
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- RIGHT: Detailed Topic Content View (7 cols) -->
          <div class="lg:col-span-7">
            ${activeTopic ? renderTopicDetailCard(activeTopic) : `
              <div class="p-8 text-center text-slate-400 bg-white dark:bg-slate-800 rounded-2xl">Lütfen bir konu seçin.</div>
            `}
          </div>

        </div>
      </div>
    `;

    // Live search event
    const searchInput = container.querySelector('#grammar-search-input');
    searchInput.addEventListener('input', (e) => {
      state.guideSearch = e.target.value;
      renderStudyGuide(container);
    });

    // Toggle categories
    container.querySelectorAll('.tree-category-header').forEach(header => {
      header.addEventListener('click', () => {
        const catId = header.getAttribute('data-cat-id');
        if (state.expandedCategories.has(catId)) {
          state.expandedCategories.delete(catId);
        } else {
          state.expandedCategories.add(catId);
        }
        renderStudyGuide(container);
      });
    });

    // Select topic
    container.querySelectorAll('.tree-topic-item').forEach(item => {
      item.addEventListener('click', () => {
        state.activeTopicId = item.getAttribute('data-topic-id');
        renderStudyGuide(container);
      });
    });

    // Speak buttons inside detail view
    container.querySelectorAll('.speak-btn').forEach(btn => {
      btn.addEventListener('click', () => speak(decodeURIComponent(btn.getAttribute('data-speak'))));
    });
  }

  function renderTopicDetailCard(topic) {
    return `
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm animate-fade-in space-y-5">
        <div>
          <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Ayrıntılı Konu Anlatımı</span>
          <h3 class="text-2xl font-black text-slate-900 dark:text-white mt-1">${topic.title}</h3>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">${topic.summary}</p>
        </div>

        <!-- Formula Box -->
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-indigo-100 dark:border-slate-700">
          <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">DİL BİLGİSİ FORMÜLÜ & DİZİLİMİ:</div>
          <code class="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400">${topic.formula}</code>
        </div>

        <!-- Explanations Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-700">
            <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
              <i class="fas fa-lightbulb text-amber-500"></i> B1 Seviyesi Özeti:
            </h4>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${topic.b1Explanation}</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-700">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-1.5 flex items-center gap-1.5">
              <i class="fas fa-award text-indigo-500"></i> IELTS 6.0 Önemi:
            </h4>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${topic.ieltsSignificance}</p>
          </div>
        </div>

        <!-- Common Mistake Warning -->
        <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/50 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2.5">
          <i class="fas fa-exclamation-triangle text-amber-600 text-sm mt-0.5"></i>
          <div><strong class="font-bold">Sık Yapılan Hata:</strong> ${topic.commonMistakes}</div>
        </div>

        <!-- Examples -->
        <div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Akademik Örnek Cümleler:</span>
          <div class="space-y-2.5">
            ${topic.examples.map(ex => `
              <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 text-xs">
                <div>
                  <div class="font-bold text-slate-800 dark:text-slate-100">${ex.en}</div>
                  <div class="text-slate-500 mt-1">${ex.tr}</div>
                </div>
                <button class="speak-btn text-indigo-600 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition" data-speak="${encodeURIComponent(ex.en)}">
                  <i class="fas fa-volume-up"></i>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
});
