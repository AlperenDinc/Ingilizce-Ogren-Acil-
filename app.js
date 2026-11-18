// ============================================================================
// ACİL İNGİLİZCE !! - MASTER EMBEDDED CURRICULUM DATABASE (v4.0.0)
// 24 Authentic IELTS Academic Reading Passages, 240 Vocabulary, 4 Checkpoints
// Embedded directly into app.js to guarantee zero cache de-sync or stale mocks!
// ============================================================================
window.__CURRICULUM_VERSION = "4.0.0";
// IELTS Academic Master - Infinite Curriculum & Dynamic Learning Engine (Version 2.0)
// Complete 24 Grammar Structures, 240+ Academic Vocabulary Pool, 4 Weekly IELTS Checkpoints, 
// 100% Unique, Authentic IELTS Academic Reading Passages for Every Day

window.ALL_TENSES_LIST = [
  // Week 1 (Days 1-6)
  {
    id: "tense_pres_simp",
    name: "Present Simple Tense (Geniş Zaman)",
    formula: "S + V1 (s/es) | S + do/does not + V1 | Do/Does + S + V1?",
    ieltsUsage: "IELTS Writing Task 1 ve Task 2'de genel bilimsel gerçekleri, sürekli geçerli durumları ve doğa olaylarını açıklarken temel çatıdır.",
    b1Explanation: "Alışkanlıklar, rutinler ve değişmeyen bilimsel kanunlar için kullanılır. He, She, It öznelerinde fiile '-s, -es, -ies' takısı gelir.",
    commonMistakes: "IELTS yazılarında en sık yapılan hata 3. tekil şahıslarda '-s' takısının unutulmasıdır."
  },
  {
    id: "tense_pres_cont",
    name: "Present Continuous Tense (Şimdiki Zaman & Güncel Eğilimler)",
    formula: "S + am/is/are + V-ing | S + am/is/are not + V-ing",
    ieltsUsage: "IELTS Writing Task 2'de günümüzdeki geçici eğilimleri ve devam eden küresel trendleri aktarırken kullanılır.",
    b1Explanation: "Konuşma anında yapılan işleri veya günümüzde sürmekte olan değişimleri anlatır. Durum fiilleri '-ing' almaz.",
    commonMistakes: "'am/is/are' yardımcı fiilini atlayıp doğrudan fiile '-ing' eklemek."
  },
  {
    id: "tense_past_simp",
    name: "Past Simple Tense (Geçmiş Zaman)",
    formula: "S + V2 (-ed / irregular) | S + did not + V1 | Did + S + V1?",
    ieltsUsage: "IELTS Writing Task 1 geçmiş yıllardaki grafik verilerini aktarırken ve Task 2'de tarihsel örnekler verirken ana zamandır.",
    b1Explanation: "Geçmişte belirli bir zamanda başlayıp tamamlanmış eylemleri anlatır.",
    commonMistakes: "Soru veya olumsuz cümlede 'did' varken fiilin 2. halini yazmak."
  },
  {
    id: "tense_past_cont",
    name: "Past Continuous Tense (Geçmişte Süregelen Zaman)",
    formula: "S + was/were + V-ing | S + was/were not + V-ing",
    ieltsUsage: "Speaking Part 2 hikaye anlatımında arka plan olaylarını betimlerken kullanılır.",
    b1Explanation: "Geçmişte belli bir anda devam etmekte olan süreçleri veya kesilen eylemleri anlatır.",
    commonMistakes: "'When' sonrasında Past Continuous kullanmak (While ile kullanılır)."
  },
  {
    id: "tense_pres_perf",
    name: "Present Perfect Tense (Yakın Geçmiş / Etkisi Süren Zaman)",
    formula: "S + have/has + V3 | S + have/has not + V3",
    ieltsUsage: "IELTS Writing Task 2 giriş cümlelerinde ('In recent years, higher education has witnessed...') en popüler zamandır.",
    b1Explanation: "Geçmişte başlayıp etkisi günümüze uzanan veya zamanı kesin belirtilmemiş deneyimler içindir.",
    commonMistakes: "Kesin geçmiş zaman zarfı (yesterday, in 2010) varken Present Perfect kullanmak."
  },
  {
    id: "tense_pres_perf_cont",
    name: "Present Perfect Continuous (Geçmişten Beri Süregelen Zaman)",
    formula: "S + have/has been + V-ing | S + have/has not been + V-ing",
    ieltsUsage: "Süreklilik arz eden çevre ve toplum sorunlarını vurgularken kullanılır.",
    b1Explanation: "Geçmişte başlayıp konuşma anına kadar kesintisiz süren eylemlerin süresini ('for 10 years') vurgular.",
    commonMistakes: "Durum fiilleriyle (know, believe) '-ing' kullanmak."
  },

  // Week 2 (Days 8-13)
  {
    id: "tense_past_perf",
    name: "Past Perfect Tense (Önceki Geçmiş Zaman)",
    formula: "S + had + V3 | S + had not + V3 | Had + S + V3?",
    ieltsUsage: "IELTS'te geçmişteki iki olay arasındaki sebep-sonuç ilişkisini ve zaman sıralamasını kurar.",
    b1Explanation: "Geçmişteki iki olaydan daha önce gerçekleşmiş olanı ('geçmişin geçmişi') anlatır.",
    commonMistakes: "Geçmişte karşılaştırılacak ikinci bir olay yokken tek başına kullanmak."
  },
  {
    id: "tense_past_perf_cont",
    name: "Past Perfect Continuous (Geçmişte Belli Bir Süre Sürmüş Zaman)",
    formula: "S + had been + V-ing | S + had not been + V-ing",
    ieltsUsage: "Akademik tarihsel metinlerde geçmişteki uzun soluklu araştırma süreçlerini anlatır.",
    b1Explanation: "Geçmişteki bir andan önceye kadar belirli bir süre boyunca kesintisiz devam etmiş eylemler.",
    commonMistakes: "Zaman uyumunu kaçırmak."
  },
  {
    id: "tense_fut_simp",
    name: "Future Simple: Will & Be Going to (Gelecek Zaman)",
    formula: "Will + V1 (Tahmin/Karar) | am/is/are going to + V1 (Plan/Kanıt)",
    ieltsUsage: "Task 1 gelecek projeksiyon grafiklerinde ve Task 2 çözüm önerilerinde temeldir.",
    b1Explanation: "Will: tahmin ve anlık kararlar. Be going to: elde kanıt olan durumlar ve planlar.",
    commonMistakes: "Zaman bağlaçlarından (when, if) sonra 'will' kullanmak."
  },
  {
    id: "tense_fut_cont",
    name: "Future Continuous Tense (Gelecekte Süregelen Zaman)",
    formula: "S + will be + V-ing | S + will not be + V-ing",
    ieltsUsage: "Writing Task 2 ve Speaking Part 3'te gelecek vizyonu sunarken yüksek band puanı getiren yapıdır.",
    b1Explanation: "Gelecekte belirli bir anda veya dönemde sürüyor olacak eylemleri anlatır.",
    commonMistakes: "'will be' sonrası V1 kullanmak."
  },
  {
    id: "tense_fut_perf",
    name: "Future Perfect Tense (Gelecekte Tamamlanmış Zaman)",
    formula: "S + will have + V3 | S + will not have + V3",
    ieltsUsage: "IELTS Writing Task 1 gelecek tahmin grafiklerinde (örn: 'By 2050, solar output will have surpassed coal') 7.0+ göstergesidir.",
    b1Explanation: "Gelecekte belirli bir tarihten önce bitmiş olacak eylemler. Anahtar kelime: 'By + gelecek zaman'.",
    commonMistakes: "'By' kalıbı varken Future Simple yazmak."
  },
  {
    id: "tense_fut_perf_cont",
    name: "Future Perfect Continuous (Gelecekte Süresi Dolacak Zaman)",
    formula: "S + will have been + V-ing",
    ieltsUsage: "İleri düzey bilimsel ve felsefi metinlerde uzun vadeli süreçleri betimler.",
    b1Explanation: "Gelecekteki belirli bir noktada bir eylemin ne kadar süredir devam ediyor olacağını vurgular.",
    commonMistakes: "Yardımcı fiil sıralamasını karıştırmak."
  },

  // Week 3 (Days 15-20)
  {
    id: "tense_pass_basic",
    name: "Passive Voice (Edilgen Çatı: Present & Past)",
    formula: "Object + am/is/are/was/were + V3 (by Agent)",
    ieltsUsage: "IELTS Academic Writing Task 1 süreç diyagramlarında ve Task 2 bilimsel argümanlarında nesnelliği sağlar.",
    b1Explanation: "Eylemi yapan değil, eylemden etkilenen nesne vurgulanır. Bilimsel metinlerde sıkça tercih edilir.",
    commonMistakes: "'be' fiilinin uygun zaman çekimini unutmak."
  },
  {
    id: "tense_pass_adv",
    name: "Passive Voice: Modals & Perfects (İleri Düzey Edilgen)",
    formula: "Modal + be + V3 | have/has/had been + V3",
    ieltsUsage: "Akademik makalelerde hipotezlerin ve tarihsel bulguların tarafsız sunulmasında esastır.",
    b1Explanation: "Modallar ve Perfect zamanlarla edilgen çatı kurularak yüksek akademik üslup elde edilir.",
    commonMistakes: "'been' yardımcı fiilini atlamak."
  },
  {
    id: "tense_modals",
    name: "Modal Verbs (Zorunluluk, İhtimal ve Çıkarım)",
    formula: "Must / Should / May / Might / Cannot + V1",
    ieltsUsage: "Akademik iddiaları yumuşatırken (hedging) ve mantıksal çıkarım yaparken kullanılır.",
    b1Explanation: "Must (kesin çıkarım/zorunluluk), Should (tavsiye), May/Might (olasılık), Cannot (imkansızlık).",
    commonMistakes: "Modaldan sonra 'to' kullanmak (have to hariç)."
  },
  {
    id: "tense_cond_basic",
    name: "Conditionals (Şart Cümleleri: Zero, 1st & 2nd)",
    formula: "Type 0: If + V1, V1 | Type 1: If + V1, will + V1 | Type 2: If + V2, would + V1",
    ieltsUsage: "Politika önerileri, varsayımsal çözümler ve sebep-sonuç bağlamlarında vazgeçilmezdir.",
    b1Explanation: "Type 0 (genel gerçek), Type 1 (olası gelecek), Type 2 (gerçek dışı şimdiki/gelecek durum).",
    commonMistakes: "'If' cümlesinin içine 'will' veya 'would' koymak."
  },
  {
    id: "tense_cond_adv",
    name: "Third & Mixed Conditionals (Geçmiş Varsayım)",
    formula: "If + had + V3, would have + V3 | If + had + V3, would + V1",
    ieltsUsage: "Tarihsel olayların analizinde ve hatalardan ders çıkarma senaryolarında Band 7.5+ puan kazandırır.",
    b1Explanation: "Geçmişte gerçekleşmemiş bir durumun geçmişteki veya günümüzdeki olası sonucunu anlatır.",
    commonMistakes: "Temel cümlede 'had' kullanmak."
  },
  {
    id: "tense_relative",
    name: "Relative Clauses (İlgi Cümlecikleri: Tanımlayan & Ek Bilgi Veren)",
    formula: "Noun + who / which / that / whose / wherein + Clause",
    ieltsUsage: "Karmaşık cümle (complex sentences) kurarak Grammatical Range & Accuracy puanını doğrudan yükseltir.",
    b1Explanation: "Who (insan), Which (nesne/hayvan), That (resmi olmayan), Whose (iyelik). Ek bilgi veren virgülle ayrılır.",
    commonMistakes: "Virgülle ayrılan non-defining cümlelerde 'that' kullanmak."
  },

  // Week 4 (Days 22-27)
  {
    id: "tense_gerund_inf",
    name: "Gerunds & Infinitives (İsim Fiiller ve Mastarlar)",
    formula: "V-ing (Subject/Object) | to + V1 (Purpose/Adjective Complement)",
    ieltsUsage: "Akademik paragrafların girişinde güçlü özneler kurmak ('Implementing sustainable policies is vital...').",
    b1Explanation: "Gerund isim gibi kullanılan fiildir (-ing). Infinitive ise amaç veya belirli fiillerden sonra gelir.",
    commonMistakes: "Edatlardan (preposition) sonra infinitive kullanmak (edatlardan sonra V-ing gelir)."
  },
  {
    id: "tense_reporting",
    name: "Academic Reporting Verbs & Indirect Speech (Dolaylı Aktarım)",
    formula: "Argue / Contend / Assert / Maintain that + S + V",
    ieltsUsage: "Literatür taraması yaparken ve diğer araştırmacıların iddialarını akademik dille aktarırken temeldir.",
    b1Explanation: "Başkalarının bulgularını ve fikirlerini tarafsız ya da eleştirel biçimde aktarmayı sağlar.",
    commonMistakes: "Zaman uyumu kurallarını göz ardı etmek."
  },
  {
    id: "tense_causative",
    name: "Causative Structures (Ettirgen Çatı: Have / Make / Get)",
    formula: "Have/Make/Get + Object + Verb / V3",
    ieltsUsage: "Yetkili kurumların aldığı önlemleri ve uygulattığı politikaları aktarırken kullanılır.",
    b1Explanation: "Bir eylemi başkasına yaptırmayı ya da bir durumun meydana gelmesini sağlamayı ifade eder.",
    commonMistakes: "'Make' sonrasında 'to + V1' kullanmak (aktif çatıda yalın fiil gelir)."
  },
  {
    id: "tense_inversion",
    name: "Inversion & Emphatic Structures (Devrik ve Vurgulu Cümleler)",
    formula: "Rarely / Seldom / Under no circumstances + Aux + Subject + Verb",
    ieltsUsage: "IELTS Writing ve Speaking'de Band 8.0+ göstergesi olan, cümleye güçlü vurgu katan edebi yapıdır.",
    b1Explanation: "Cümle olumsuz zarfla başladığında yardımcı fiil öznenin önüne geçer.",
    commonMistakes: "Soru işareti koymak (devrik cümle soru değildir, düz cümle sonuna nokta konur)."
  },
  {
    id: "tense_participle",
    name: "Participle Clauses (Kısaltılmış Ulaç Cümlecikleri)",
    formula: "V-ing (Aktif) / V3 (Pasif) / Having + V3 (Öncelikli Eylem)",
    ieltsUsage: "Cümleleri birbirine bağlayarak akıcılık sağlar ve kelime israfını önler.",
    b1Explanation: "Aynı özneye sahip iki cümleyi bağlaçsız ve daha şık bir şekilde birleştirmeyi sağlar.",
    commonMistakes: "Farklı özneleri olan cümleleri ulaçla kısaltmaya çalışmak (dangling participle)."
  },
  {
    id: "tense_subjunctive",
    name: "Subjunctive Mood & Advanced Hypotheticals (İstek & Hipotez Kipi)",
    formula: "It is essential/vital that S + (should) V1 | Were S to V1...",
    ieltsUsage: "IELTS Writing Task 2'de hükümetlere veya kurumlara yönelik en üst düzey resmi politika tavsiyelerinde kullanılır.",
    b1Explanation: "Tavsiye, zorunluluk veya yüksek varsayımlarda fiil şahsa bakılmaksızın yalın halde kalır.",
    commonMistakes: "3. tekil şahısta fiile '-s' eklemek (he go, not he goes)."
  }
];

// 240 Academic IELTS Vocabulary Pool (24 Days x 10 Words)
window.ACADEMIC_VOCABULARY_POOL = [
  // Day 1: Marine Biology & Environment
  { id: "v1_1", word: "biodiversity", phonetic: "/ˌbaɪ.oʊ.daɪˈvɝː.sə.ti/", type: "noun", tr: "biyoçeşitlilik", enDef: "the variety of plant and animal life in a habitat", example: "Marine biodiversity is vital for the stability of oceanic ecosystems.", exampleTr: "Deniz biyoçeşitliliği okyanus ekosistemlerinin istikrarı için hayati önem taşır." },
  { id: "v1_2", word: "degradation", phonetic: "/ˌdeɡ.rəˈdeɪ.ʃən/", type: "noun", tr: "bozulma, tahribat", enDef: "the deterioration of the environment through depletion of resources", example: "Habitat degradation threatens hundreds of coral species.", exampleTr: "Yaşam alanı bozulması yüzlerce mercan türünü tehdit ediyor." },
  { id: "v1_3", word: "emission", phonetic: "/iˈmɪʃ.ən/", type: "noun", tr: "salınım, yayma (gaz)", enDef: "the production and discharge of gas or radiation", example: "Carbon emissions accelerate oceanic acidification.", exampleTr: "Karbon salınımları okyanus asitlenmesini hızlandırır." },
  { id: "v1_4", word: "conserve", phonetic: "/kənˈsɝːv/", type: "verb", tr: "korumak, muhafaza etmek", enDef: "to protect something from harm or destruction", example: "Biologists strive to conserve endangered barrier reefs.", exampleTr: "Biyologlar nesli tükenmekte olan bariyer resiflerini korumaya çabalarlar." },
  { id: "v1_5", word: "sustainable", phonetic: "/səˈsteɪ.nə.bəl/", type: "adj", tr: "sürdürülebilir", enDef: "able to be maintained at a certain rate without depleting resources", example: "Sustainable fishing prevents the total collapse of fish populations.", exampleTr: "Sürdürülebilir balıkçılık balık popülasyonlarının tamamen çökmesini engeller." },
  { id: "v1_6", word: "deplete", phonetic: "/dɪˈpliːt/", type: "verb", tr: "tüketmek, azaltmak", enDef: "to use up the supply or resources of something", example: "Commercial trawlers deplete shallow water fisheries rapidly.", exampleTr: "Ticari troller sığ su balık yataklarını hızla tüketir." },
  { id: "v1_7", word: "contamination", phonetic: "/kənˌtæm.əˈneɪ.ʃən/", type: "noun", tr: "kirlenme, bulaşma", enDef: "the action or state of making or being made impure by polluting", example: "Chemical contamination destroys fragile nursery habitats.", exampleTr: "Kimyasal kirlenme kırılgan yavrulama alanlarını tahrip eder." },
  { id: "v1_8", word: "catastrophic", phonetic: "/ˌkæt.əˈstrɑː.fɪk/", type: "adj", tr: "felaket niteliğinde, yıkıcı", enDef: "involving or causing sudden great damage or suffering", example: "Thermal anomalies cause catastrophic bleaching events.", exampleTr: "Termal anomaliler felaket niteliğinde ağarma olaylarına yol açar." },
  { id: "v1_9", word: "ecosystem", phonetic: "/ˈiː.koʊˌsɪs.təm/", type: "noun", tr: "ekosistem", enDef: "a biological community of interacting organisms and their physical environment", example: "Every single organism preserves balance within the reef ecosystem.", exampleTr: "Her bir canlı resif ekosistemi içindeki dengeyi korur." },
  { id: "v1_10", word: "deteriorate", phonetic: "/dɪˈtɪr.i.ə.reɪt/", type: "verb", tr: "kötüleşmek, bozulmak", enDef: "to become progressively worse in quality or condition", example: "Reef calcification rates deteriorate as ocean pH drops.", exampleTr: "Okyanus pH değeri düştükçe resif kireçlenme oranları kötüleşir." },

  // Day 2: AI & Clinical Robotics
  { id: "v2_1", word: "revolutionize", phonetic: "/ˌrev.əˈluː.ʃən.aɪz/", type: "verb", tr: "devrim yaratmak", enDef: "to change something radically or fundamentally", example: "Automation is revolutionizing laboratory diagnostics worldwide.", exampleTr: "Otomasyon dünya genelinde laboratuvar teşhislerinde devrim yaratıyor." },
  { id: "v2_2", word: "innovative", phonetic: "/ˈɪn.ə.veɪ.tɪv/", type: "adj", tr: "yenilikçi, inovatif", enDef: "featuring new methods; advanced and original", example: "Engineers are creating innovative biosensor tools.", exampleTr: "Mühendisler yenilikçi biyosensör araçları yaratıyorlar." },
  { id: "v2_3", word: "sophisticated", phonetic: "/səˈfɪs.tɪ.keɪ.tɪd/", type: "adj", tr: "gelişmiş, karmaşık", enDef: "developed to a high degree of complexity", example: "Hospitals rely on sophisticated neural pattern analyzers.", exampleTr: "Hastaneler gelişmiş sinirsel örüntü analizörlerine güvenmektedir." },
  { id: "v2_4", word: "breakthrough", phonetic: "/ˈbreɪk.θruː/", type: "noun", tr: "büyük buluş, çığır açan gelişme", enDef: "a sudden, dramatic, and important discovery or development", example: "Deep-learning models represent a breakthrough in oncology screening.", exampleTr: "Derin öğrenme modelleri onkoloji taramasında çığır açan bir gelişmeyi temsil eder." },
  { id: "v2_5", word: "clinical", phonetic: "/ˈklɪn.ɪ.kəl/", type: "adj", tr: "klinik, tıbbi", enDef: "relating to the observation and treatment of actual patients", example: "Clinicians are conducting clinical evaluations of diagnostic algorithms.", exampleTr: "Klinisyenler tanı algoritmalarının klinik değerlendirmelerini yürütmektedir." },
  { id: "v2_6", word: "diagnose", phonetic: "/ˈdaɪ.əɡ.noʊz/", type: "verb", tr: "teşhis etmek, tanı koymak", enDef: "to identify the nature of an illness by examination", example: "Automated scanners diagnose malignant tissue abnormalities accurately.", exampleTr: "Otomatik tarayıcılar kötü huylu doku anormalliklerini doğru bir şekilde teşhis eder." },
  { id: "v2_7", word: "accuracy", phonetic: "/ˈæk.jɚ.ə.si/", type: "noun", tr: "doğruluk, kesinlik", enDef: "the quality or state of being correct or precise", example: "Algorithmic screening improves histological diagnostic accuracy.", exampleTr: "Algoritmik tarama histolojik tanı doğruluğunu artırır." },
  { id: "v2_8", word: "algorithm", phonetic: "/ˈæl.ɡə.rɪ.ðəm/", type: "noun", tr: "algoritma", enDef: "a process or set of rules to be followed in calculations", example: "Medical algorithms process genomic sequencing datasets.", exampleTr: "Tıbbi algoritmalar genomik dizileme veri setlerini işler." },
  { id: "v2_9", word: "autonomous", phonetic: "/ɑːˈtɑː.nə.məs/", type: "adj", tr: "özerk, otonom, kendi kendine işleyen", enDef: "acting independently or having the freedom to do so", example: "Autonomous pipetting robots perform cellular micro-assays.", exampleTr: "Otonom pipetleme robotları hücresel mikro-testler gerçekleştirir." },
  { id: "v2_10", word: "precision", phonetic: "/prəˈsɪʒ.ən/", type: "noun", tr: "kesinlik, hassasiyet", enDef: "the quality, condition, or fact of being exact and accurate", example: "Laser micro-surgery demands absolute procedural precision.", exampleTr: "Lazer mikrocerrahi mutlak yöntemsel hassasiyet gerektirir." },

  // Day 3: Education & Academic History
  { id: "v3_1", word: "curriculum", phonetic: "/kəˈrɪk.jə.ləm/", type: "noun", tr: "müfredat, öğretim programı", enDef: "the subjects comprising a course of study in a school or college", example: "The academy modernized its natural philosophy curriculum.", exampleTr: "Akademi doğa felsefesi müfredatını modernize etti." },
  { id: "v3_2", word: "pedagogy", phonetic: "/ˈped.ə.ɡɑː.dʒi/", type: "noun", tr: "pedagoji, eğitim bilimi", enDef: "the method and practice of teaching", example: "Nineteenth-century educators reformed rote pedagogy.", exampleTr: "19. yüzyıl eğitimcileri ezberci pedagojiyi reforme etti." },
  { id: "v3_3", word: "empirical", phonetic: "/emˈpɪr.ɪ.kəl/", type: "adj", tr: "deneysel, ampirik, gözleme dayalı", enDef: "based on, concerned with, or verifiable by observation", example: "Early scientists prioritized empirical evidence over dogma.", exampleTr: "İlk bilim insanları dogmalar yerine deneysel kanıtları önceledi." },
  { id: "v3_4", word: "literacy", phonetic: "/ˈlɪt̬.ɚ.ə.si/", type: "noun", tr: "okuryazarlık", enDef: "the ability to read and write", example: "Universal literacy expanded alongside mass industrialization.", exampleTr: "Kitlesel sanayileşmeyle birlikte evrensel okuryazarlık genişledi." },
  { id: "v3_5", word: "tuition", phonetic: "/tuːˈɪʃ.ən/", type: "noun", tr: "öğrenim ücreti / öğretim", enDef: "a sum of money charged for teaching by a college", example: "High tuition fees historically barred underprivileged scholars.", exampleTr: "Yüksek öğrenim ücretleri tarih boyunca dezavantajlı araştırmacıları engelledi." },
  { id: "v3_6", word: "elite", phonetic: "/iˈliːt/", type: "adj", tr: "seçkin, elit", enDef: "selected as the best, most powerful, or influential", example: "Elite theological colleges resisted secular scientific instruction.", exampleTr: "Seçkin teoloji kolejleri seküler bilimsel öğretime direndi." },
  { id: "v3_7", word: "institution", phonetic: "/ˌɪn.stəˈtuː.ʃən/", type: "noun", tr: "kurum, kuruluş", enDef: "an organization founded for a religious, educational, or social purpose", example: "Civic institutions established public polytechnic faculties.", exampleTr: "Sivil kurumlar halka açık politeknik fakülteleri kurdu." },
  { id: "v3_8", word: "scholar", phonetic: "/ˈskɑː.lɚ/", type: "noun", tr: "akademisyen, bilgin, araştırmacı", enDef: "a specialist in a particular branch of study", example: "Visiting scholars debated evolutionary biology in lecture halls.", exampleTr: "Konuk akademisyenler amfilerde evrimsel biyolojiyi tartıştı." },
  { id: "v3_9", word: "dissertation", phonetic: "/ˌdɪs.ɚˈteɪ.ʃən/", type: "noun", tr: "akademik tez", enDef: "a long essay on a particular subject written for a degree", example: "Doctoral students submitted original experimental dissertations.", exampleTr: "Doktora öğrencileri özgün deneysel tezler sundu." },
  { id: "v3_10", word: "disseminate", phonetic: "/dɪˈsem.ə.neɪt/", type: "verb", tr: "yaymak, dağıtmak (bilgi)", enDef: "to spread or disperse something widely", example: "Academic printing presses disseminated revolutionary ideas rapidly.", exampleTr: "Akademik matbaalar devrim niteliğindeki fikirleri hızla yaydı." },

  // Day 4: Public Health & Epidemics
  { id: "v4_1", word: "transmission", phonetic: "/trænzˈmɪʃ.ən/", type: "noun", tr: "bulaşma, yayılma", enDef: "the action or process of transmitting something or the state of being transmitted", example: "Doctors investigated the waterborne transmission of vibrio cholerae.", exampleTr: "Doktorlar vibrio cholerae'nın su kaynaklı bulaşmasını araştırıyordu." },
  { id: "v4_2", word: "contagion", phonetic: "/kənˈteɪ.dʒən/", type: "noun", tr: "bulaşma, salgın hastalık", enDef: "the communication of disease from one person to another by close contact", example: "Sanitarians feared atmospheric contagion throughout crowded slums.", exampleTr: "Sıhhiyeciler kalabalık gecekondu mahallelerinde havadaki bulaşmadan korkuyordu." },
  { id: "v4_3", word: "sanitary", phonetic: "/ˈsæn.ə.ter.i/", type: "adj", tr: "sıhhi, hijyenik, sağlıkla ilgili", enDef: "relating to the conditions that affect the hygiene and health of people", example: "Engineers were digging underground sanitary sewer conduits.", exampleTr: "Mühendisler yer altında sıhhi kanalizasyon kanalları kazıyordu." },
  { id: "v4_4", word: "outbreak", phonetic: "/ˈaʊt.breɪk/", type: "noun", tr: "salgın patlak vermesi", enDef: "the sudden or violent start of something unwelcome, such as a disease", example: "City officials were managing a severe typhoid outbreak.", exampleTr: "Şehir yetkilileri şiddetli bir tifo salgınını yönetiyordu." },
  { id: "v4_5", word: "quarantine", phonetic: "/ˈkwɔːr.ən.tiːn/", type: "noun", tr: "karantina", enDef: "a state, period, or place of isolation in which infected people are placed", example: "Port guards were maintaining quarantine over arriving commercial vessels.", exampleTr: "Liman muhafızları gelen ticari gemiler üzerinde karantina uyguluyordu." },
  { id: "v4_6", word: "pathogen", phonetic: "/ˈpæθ.ə.dʒən/", type: "noun", tr: "patojen, hastalık yapıcı mikrop", enDef: "a bacterium, virus, or other microorganism that can cause disease", example: "Microbiologists were identifying the microscopic pathogen in well water.", exampleTr: "Mikrobiyologlar kuyu suyundaki mikroskobik patojeni tanımlıyordu." },
  { id: "v4_7", word: "vulnerable", phonetic: "/ˈvʌl.nɚ.ə.bəl/", type: "adj", tr: "savunmasız, kırılgan", enDef: "susceptible to physical or emotional attack or harm", example: "Impoverished tenement families were feeling especially vulnerable.", exampleTr: "Yoksul apartman aileleri kendilerini özellikle savunmasız hissediyordu." },
  { id: "v4_8", word: "immunize", phonetic: "/ˈɪm.jə.naɪz/", type: "verb", tr: "bağışıklamak, aşılamak", enDef: "to make a person immune to infection, typically by inoculation", example: "Early dispensaries were attempting to immunize children against smallpox.", exampleTr: "Erken dispanserler çocukları çiçek hastalığına karşı aşılamaya çalışıyordu." },
  { id: "v4_9", word: "morbidity", phonetic: "/mɔːrˈbɪd.ə.t̬i/", type: "noun", tr: "hastalık oranı", enDef: "the condition of suffering from a disease or medical condition", example: "Public health registries were tracking infant morbidity across districts.", exampleTr: "Halk sağlığı kayıtları bölgeler arasındaki bebek hastalık oranını takip ediyordu." },
  { id: "v4_10", word: "hygiene", phonetic: "/ˈhaɪ.dʒiːn/", type: "noun", tr: "hijyen, temizlik", enDef: "conditions or practices conducive to maintaining health and preventing disease", example: "Hospitals were strictly enforcing antiseptic hygiene in operating theatres.", exampleTr: "Hastaneler ameliyathanelerde antiseptik hijyeni sıkı bir şekilde uyguluyordu." },

  // Day 5: Urban Infrastructure & Economy
  { id: "v5_1", word: "infrastructure", phonetic: "/ˈɪn.frəˌstrʌk.tʃɚ/", type: "noun", tr: "altyapı", enDef: "the basic physical and organizational structures needed for an enterprise", example: "Expanding metropolitan areas have overhauled their transport infrastructure.", exampleTr: "Büyüyen metropol alanları ulaşım altyapılarını baştan ayağa yenilemiştir." },
  { id: "v5_2", word: "metropolitan", phonetic: "/ˌmet.rəˈpɑː.lə.tən/", type: "adj", tr: "büyükşehir, metropol", enDef: "relating to or denoting a metropolis, large city", example: "Metropolitan zoning boards have approved dense transit corridors.", exampleTr: "Büyükşehir imar kurulları yoğun toplu taşıma koridorlarını onaylamıştır." },
  { id: "v5_3", word: "congestion", phonetic: "/kənˈdʒes.tʃən/", type: "noun", tr: "trafik sıkışıklığı, yoğunluk", enDef: "the state of being extremely full or blocked with traffic", example: "Automobile congestion has degraded arterial urban throughput.", exampleTr: "Otomobil sıkışıklığı ana arter kentsel akışını bozmuştur." },
  { id: "v5_4", word: "allocate", phonetic: "/ˈæl.ə.keɪt/", type: "verb", tr: "tahsis etmek, pay ayırmak", enDef: "to distribute resources or duties for a particular purpose", example: "Finance ministries have allocated emergency loans for light rail expansion.", exampleTr: "Maliye bakanlıkları hafif raylı sistem genişletmesi için acil kredi tahsis etmiştir." },
  { id: "v5_5", word: "subsidize", phonetic: "/ˈsʌb.sə.daɪz/", type: "verb", tr: "sübvanse etmek, mali destek vermek", enDef: "to support an organization or activity financially", example: "Regional authorities have subsidized electrified commuter networks.", exampleTr: "Bölgesel yönetimler elektrikli banliyö ağlarını sübvanse etmiştir." },
  { id: "v5_6", word: "monopolize", phonetic: "/məˈnɑː.pəl.aɪz/", type: "verb", tr: "tekelinde tutmak", enDef: "to have and control fully and exclusively", example: "Private automotive lobbies have monopolized transit planning.", exampleTr: "Özel otomotiv lobileri ulaşım planlamasını tekeli altına almıştır." },
  { id: "v5_7", word: "stimulate", phonetic: "/ˈstɪm.jə.leɪt/", type: "verb", tr: "canlandırmak, teşvik etmek", enDef: "to encourage development or increased activity", example: "Public investment has stimulated commercial manufacturing hubs.", exampleTr: "Kamu yatırımı ticari üretim merkezlerini canlandırmıştır." },
  { id: "v5_8", word: "commodity", phonetic: "/kəˈmɑː.də.t̬i/", type: "noun", tr: "ticari mal, emtia", enDef: "a raw material that can be bought and sold", example: "Global commodity prices have fluctuated dramatically this year.", exampleTr: "Küresel emtia fiyatları bu yıl dramatik biçimde dalgalanmıştır." },
  { id: "v5_9", word: "revenue", phonetic: "/ˈrev.ə.nuː/", type: "noun", tr: "gelir, hasılat", enDef: "income received by an organization", example: "Port authorities have collected substantial cargo revenue.", exampleTr: "Liman yetkilileri kayda değer kargo geliri toplamıştır." },
  { id: "v5_10", word: "stagnant", phonetic: "/ˈstæɡ.nənt/", type: "adj", tr: "durgun, durağan", enDef: "showing no activity, movement, or growth", example: "Despite soaring output, real wages have remained stagnant.", exampleTr: "Fırlayan üretime rağmen reel ücretler durgun kalmıştır." },

  // Day 6: Media, Culture & Heritage
  { id: "v6_1", word: "pervasive", phonetic: "/pɚˈveɪ.sɪv/", type: "adj", tr: "her yana yayılan, sinen", enDef: "spreading widely throughout an area", example: "Digital marketing has been having a pervasive societal impact.", exampleTr: "Dijital pazarlama toplumda her yana yayılan bir etkiye sahip olagelmiştir." },
  { id: "v6_2", word: "manipulate", phonetic: "/məˈnɪp.jə.leɪt/", type: "verb", tr: "manipüle etmek, yönlendirmek", enDef: "to control or influence unscrupulously", example: "Partisan outlets have been manipulating public polling data.", exampleTr: "Taraflı yayınlar kamuoyu anket verilerini manipüle edegelmiştir." },
  { id: "v6_3", word: "credibility", phonetic: "/ˌkred.əˈbɪl.ə.t̬i/", type: "noun", tr: "güvenilirlik, inandırıcılık", enDef: "the quality of being trusted and believed in", example: "Independent broadcasters have been defending journalistic credibility.", exampleTr: "Bağımsız yayıncılar gazetecilik güvenilirliğini savuna gelmiştir." },
  { id: "v6_4", word: "censorship", phonetic: "/ˈsen.sɚ.ʃɪp/", type: "noun", tr: "sansür, denetim", enDef: "the suppression of speech or public communication", example: "Dissident scholars have been protesting online censorship.", exampleTr: "Muhalif akademisyenler çevrimiçi sansürü protesto edegelmiştir." },
  { id: "v6_5", word: "impartial", phonetic: "/ɪmˈpɑːr.ʃəl/", type: "adj", tr: "tarafsız, yansız", enDef: "treating all rivals equally; fair", example: "Judicial commissions have been striving to remain impartial.", exampleTr: "Yargı komisyonları tarafsız kalmaya çabalayagelmiştir." },
  { id: "v6_6", word: "heritage", phonetic: "/ˈher.ɪ.t̬ɪdʒ/", type: "noun", tr: "kültürel/tarihi miras", enDef: "valued objects and qualities passed down through generations", example: "Curators have been safeguarding ancient architectural heritage.", exampleTr: "Küratörler kadim mimari mirası koruyagelmiştir." },
  { id: "v6_7", word: "authentic", phonetic: "/ɑːˈθen.t̬ɪk/", type: "adj", tr: "otantik, özgün, hakiki", enDef: "of undisputed origin; genuine", example: "Anthropologists have been recording authentic oral folklore.", exampleTr: "Antropologlar özgün sözlü folkloru kaydetmektedir." },
  { id: "v6_8", word: "commercialize", phonetic: "/kəˈmɝː.ʃəl.aɪz/", type: "verb", tr: "ticarileştirmek", enDef: "to manage or exploit principally for financial gain", example: "Corporations have been commercializing traditional festivals.", exampleTr: "Şirketler geleneksel festivalleri ticarileştiregelmiştir." },
  { id: "v6_9", word: "indigenous", phonetic: "/ɪnˈdɪdʒ.ə.nəs/", type: "adj", tr: "yerli, o toprağa özgü", enDef: "originating naturally in a particular place", example: "Scholars have been partnering with indigenous council leaders.", exampleTr: "Akademisyenler yerli konsey liderleriyle ortaklık yürütmektedir." },
  { id: "v6_10", word: "assimilate", phonetic: "/əˈsɪm.ə.leɪt/", type: "verb", tr: "asimile olmak/etmek, özümsemek", enDef: "to absorb and integrate people into a wider culture", example: "Minority communities have been resisting pressure to assimilate.", exampleTr: "Azınlık toplulukları asimile olma baskısına direnegelmiştir." },

  // Day 8: Archaeology & Ancient Collapse
  { id: "v8_1", word: "excavation", phonetic: "/ˌeks.kəˈveɪ.ʃən/", type: "noun", tr: "arkeolojik kazı", enDef: "the action of excavating something, especially an archaeological site", example: "Before archaeologists arrived, looters had damaged the excavation.", exampleTr: "Arkeologlar varmadan önce yağmacılar kazı alanına zarar vermişti." },
  { id: "v8_2", word: "sediment", phonetic: "/ˈsed.ə.mənt/", type: "noun", tr: "tortu, çökel", enDef: "matter that settles to the bottom of a liquid", example: "Canal beds had accumulated layers of mineral sediment.", exampleTr: "Kanal yatakları mineral tortu katmanları biriktirmişti." },
  { id: "v8_3", word: "salinization", phonetic: "/ˌseɪ.lɪ.naɪˈzeɪ.ʃən/", type: "noun", tr: "tuzlanma", enDef: "the process by which water-soluble salts accumulate in the soil", example: "Intensive irrigation had caused lethal soil salinization.", exampleTr: "Yoğun sulama ölümcül toprak tuzlanmasına yol açmıştı." },
  { id: "v8_4", word: "arable", phonetic: "/ˈær.ə.bəl/", type: "adj", tr: "tarıma elverişli, ekilebilir", enDef: "used or suitable for growing crops", example: "Farmers had abandoned their once arable barley fields.", exampleTr: "Çiftçiler bir zamanlar ekilebilir olan arpa tarlalarını terk etmişti." },
  { id: "v8_5", word: "collapse", phonetic: "/kəˈlæps/", type: "noun", tr: "çöküş, yıkılış", enDef: "a sudden failure of an institution or undertaking", example: "Sumerian city-states had experienced agrarian collapse.", exampleTr: "Sümer şehir devletleri tarımsal bir çöküş yaşamıştı." },
  { id: "v8_6", word: "civilization", phonetic: "/ˌsɪv.əl.əˈzeɪ.ʃən/", type: "noun", tr: "uygarlık, medeniyet", enDef: "the stage of human social and cultural development", example: "The civilization had flourished beside the alluvial Tigris plain.", exampleTr: "Uygarlık alüvyal Dicle ovasının kıyısında serpilip gelişmişti." },
  { id: "v8_7", word: "drought", phonetic: "/draʊt/", type: "noun", tr: "kuraklık", enDef: "a prolonged period of abnormally low rainfall", example: "Severe drought had devastated municipal reservoirs.", exampleTr: "Şiddetli kuraklık şehir su rezervuarlarını mahvetmişti." },
  { id: "v8_8", word: "artifact", phonetic: "/ˈɑːr.t̬ə.fækt/", type: "noun", tr: "tarihi eser, insan yapımı nesne", enDef: "an object made by a human being, of historical interest", example: "Ceramic artifacts had remained buried in clay strata.", exampleTr: "Seramik tarihi eserler kil katmanlarının altında gömülü kalmıştı." },
  { id: "v8_9", word: "chronology", phonetic: "/krəˈnɑː.lə.dʒi/", type: "noun", tr: "kronoloji, zaman dizini", enDef: "the arrangement of events or dates in the order of their occurrence", example: "Historians had revised the dynastic chronology of Uruk.", exampleTr: "Tarihçiler Uruk hanedanlık kronolojisini revize etmişti." },
  { id: "v8_10", word: "abandon", phonetic: "/əˈbæn.dən/", type: "verb", tr: "terk etmek", enDef: "to cease to support or look after; desert", example: "Desperate citizens had abandoned the fortified citadel.", exampleTr: "Çaresiz yurttaşlar müstahkem iç kaleyi terk etmişti." },

  // Day 9: Astronomy & Celestial Motion
  { id: "v9_1", word: "celestial", phonetic: "/səˈles.tʃəl/", type: "adj", tr: "göksel, uzaya ait", enDef: "positioned in or relating to the sky or outer space", example: "Scholars had been calculating celestial orbits for centuries.", exampleTr: "Bilginler yüzyıllardır göksel yörüngeleri hesaplamaktaydılar." },
  { id: "v9_2", word: "orbit", phonetic: "/ˈɔːr.bɪt/", type: "noun", tr: "yörünge", enDef: "the curved path of a celestial object around a star or planet", example: "Astrophysicists had been tracking the eccentric orbit of Mars.", exampleTr: "Astrofizikçiler Mars'ın dışmerkezli yörüngesini takip etmekteydiler." },
  { id: "v9_3", word: "gravitational", phonetic: "/ˌɡræv.əˈteɪ.ʃən.əl/", type: "adj", tr: "yerçekimsel, kütleçekim", enDef: "relating to movement toward a center of gravity", example: "The moon had been exerting strong gravitational pull on tides.", exampleTr: "Ay gelgitler üzerinde güçlü kütleçekimsel kuvvet uygulamaktaydı." },
  { id: "v9_4", word: "planetary", phonetic: "/ˈplæn.ə.ter.i/", type: "adj", tr: "gezegenlere ait, gezegensel", enDef: "relating to or belonging to a planet or planets", example: "Observers had been logging planetary retrograde motions.", exampleTr: "Gözlemciler gezegenlerin geri hareketlerini kaydetmekteydiler." },
  { id: "v9_5", word: "observatory", phonetic: "/əbˈzɝː.və.tɔːr.i/", type: "noun", tr: "gözlemevi, rasathane", enDef: "a room or building housing an astronomical telescope", example: "The royal observatory had been gathering astronomical tables.", exampleTr: "Kraliyet gözlemevi astronomik tablolar derlemekteydi." },
  { id: "v9_6", word: "trajectory", phonetic: "/trəˈdʒek.tɚ.i/", type: "noun", tr: "yörünge izi, izlenen yol", enDef: "the curved path that an object follows through space", example: "Mathematicians had been plotting the trajectory of comets.", exampleTr: "Matematikçiler kuyrukluyıldızların yörünge izini çizmekteydiler." },
  { id: "v9_7", word: "telescope", phonetic: "/ˈtel.ə.skoʊp/", type: "noun", tr: "teleskop", enDef: "an optical instrument designed to make distant objects appear nearer", example: "Galileo had been refining his optical telescope lenses.", exampleTr: "Galileo optik teleskop merceklerini mükemmelleştirmekteydi." },
  { id: "v9_8", word: "eclipse", phonetic: "/ɪˈklɪps/", type: "noun", tr: "tutulma (güneş/ay)", enDef: "an obscuring of the light from one celestial body by another", example: "Priests had been predicting solar eclipses with ancient calendars.", exampleTr: "Rahipler kadim takvimlerle güneş tutulmalarını önceden tahmin etmekteydiler." },
  { id: "v9_9", word: "spectrum", phonetic: "/ˈspek.trəm/", type: "noun", tr: "tayf, ışık spektrumu", enDef: "a band of colors produced by separation of the components of light", example: "Physicists had been analyzing the prism solar spectrum.", exampleTr: "Fizikçiler prizma güneş tayfını analiz etmekteydiler." },
  { id: "v9_10", word: "cosmic", phonetic: "/ˈkɑːz.mɪk/", type: "adj", tr: "kozmik, evrensel", enDef: "relating to the universe or cosmos, especially as distinct from the earth", example: "Philosophers had been debating cosmic heliocentric order.", exampleTr: "Filozoflar kozmik günmerkezli düzeni tartışmaktaydılar." },

  // Day 10: Energy Transition & Decarbonization
  { id: "v10_1", word: "renewable", phonetic: "/rɪˈnuː.ə.bəl/", type: "adj", tr: "yenilenebilir", enDef: "capable of being replenished naturally within human timescales", example: "Clean utilities will supply renewable electricity to metropolitan grids.", exampleTr: "Temiz hizmet sağlayıcılar metropol şebekelerine yenilenebilir elektrik sağlayacak." },
  { id: "v10_2", word: "turbine", phonetic: "/ˈtɝː.baɪn/", type: "noun", tr: "türbin", enDef: "a machine for producing continuous power by the action of a fluid", example: "Offshore installations will employ massive wind turbines.", exampleTr: "Açık deniz tesisleri devasa rüzgar türbinleri kullanacaktır." },
  { id: "v10_3", word: "harness", phonetic: "/ˈhɑːr.nəs/", type: "verb", tr: "yararlanmak, dizginleyip kullanmak", enDef: "to control and make use of natural resources to produce energy", example: "Coastal cities will harness tidal energy from deep ocean currents.", exampleTr: "Kıyı şehirleri derin okyanus akıntılarından gelgit enerjisini dizginleyip kullanacaktır." },
  { id: "v10_4", word: "photovoltaic", phonetic: "/ˌfoʊ.t̬oʊ.vɑːlˈteɪ.ɪk/", type: "adj", tr: "fotovoltaik (güneş elektriği)", enDef: "relating to the production of electric current at the junction of two substances", example: "Engineers will install high-efficiency photovoltaic cells.", exampleTr: "Mühendisler yüksek verimli fotovoltaik hücreler kuracaklar." },
  { id: "v10_5", word: "grid", phonetic: "/ɡrɪd/", type: "noun", tr: "elektrik şebekesi", enDef: "a network of lines that cross each other, a network of cables for power", example: "Smart software will balance volatile electrical grid demands.", exampleTr: "Akıllı yazılımlar dalgalı elektrik şebekesi taleplerini dengeleyecektir." },
  { id: "v10_6", word: "intermittent", phonetic: "/ˌɪn.t̬ɚˈmɪt.ənt/", type: "adj", tr: "aralıklı, kesintili", enDef: "occurring at irregular intervals; not continuous or steady", example: "Battery stations will store intermittent wind and solar generation.", exampleTr: "Batarya istasyonları kesintili rüzgar ve güneş üretimini depolayacaktır." },
  { id: "v10_7", word: "transition", phonetic: "/trænˈzɪʃ.ən/", type: "noun", tr: "geçiş, dönüşüm", enDef: "the process or a period of changing from one state to another", example: "International pacts will accelerate the global energy transition.", exampleTr: "Uluslararası antlaşmalar küresel enerji geçişini hızlandıracaktır." },
  { id: "v10_8", word: "storage", phonetic: "/ˈstɔːr.ɪdʒ/", type: "noun", tr: "depolama", enDef: "the action or method of storing something for future use", example: "Advanced hydrogen storage will support heavy industrial manufacturing.", exampleTr: "İleri hidrojen depolaması ağır sanayi üretimini destekleyecektir." },
  { id: "v10_9", word: "fossil fuel", phonetic: "/ˈfɑː.səl ˌfjʊəl/", type: "noun", tr: "fosil yakıt", enDef: "a natural fuel such as coal or gas formed in the geological past", example: "Legislators will eliminate fossil fuel subsidies within five years.", exampleTr: "Yasa koyucular beş yıl içinde fosil yakıt sübvansiyonlarını kaldıracaklar." },
  { id: "v10_10", word: "decarbonize", phonetic: "/diːˈkɑːr.bə.naɪz/", type: "verb", tr: "karbonsuzlaştırmak", enDef: "to reduce or eliminate carbon dioxide emissions from a process", example: "Modern economies will decarbonize maritime freight operations.", exampleTr: "Modern ekonomiler deniz taşımacılığı operasyonlarını karbonsuzlaştıracaktır." },

  // Day 11: Deep Space Exploration & Telemetry
  { id: "v11_1", word: "telemetry", phonetic: "/təˈlem.ə.tri/", type: "noun", tr: "telemetri, uzaktan ölçüm verisi", enDef: "the automatic measurement and wireless transmission of data from remote sources", example: "Technicians will be receiving real-time telemetry from deep-space probes.", exampleTr: "Teknisyenler derin uzay sondalarından gerçek zamanlı telemetri verisi alıyor olacaklar." },
  { id: "v11_2", word: "propulsion", phonetic: "/prəˈpʌl.ʃən/", type: "noun", tr: "sevk gücü, itici güç", enDef: "the action of driving or pushing forwards", example: "Next-generation ion propulsion will be powering orbital scientific shuttles.", exampleTr: "Yeni nesil iyon sevk sistemi yörüngedeki bilimsel mekiklere güç veriyor olacak." },
  { id: "v11_3", word: "payload", phonetic: "/ˈpeɪ.loʊd/", type: "noun", tr: "faydalı yük (araçta taşınan cihaz/yük)", enDef: "the part of a vehicle's load, especially an aircraft, from which revenue is derived", example: "The rocket payload will be containing ultra-sensitive infrared sensors.", exampleTr: "Roket faydalı yükü son derece hassas kızılötesi sensörler içeriyor olacak." },
  { id: "v11_4", word: "interstellar", phonetic: "/ˌɪn.t̬ɚˈstel.ɚ/", type: "adj", tr: "yıldızlararası", enDef: "occurring or situated between stars", example: "Robotic scouts will be venturing toward interstellar space boundaries.", exampleTr: "Robotik kaşifler yıldızlararası uzay sınırlarına doğru ilerliyor olacaklar." },
  { id: "v11_5", word: "anomaly", phonetic: "/əˈnɑː.mə.li/", type: "noun", tr: "anomali, sapma, kuraldışılık", enDef: "something that deviates from what is standard, normal, or expected", example: "Monitoring software will be flagging any magnetic anomaly instantly.", exampleTr: "İzleme yazılımı herhangi bir manyetik anomaliyi anında işaretliyor olacak." },
  { id: "v11_6", word: "navigation", phonetic: "/ˌnæv.əˈɡeɪ.ʃən/", type: "noun", tr: "seyrüsefer, yön bulma", enDef: "the process or activity of accurately ascertaining position and direction", example: "Autonomous navigation will be guiding planetary landers safely.", exampleTr: "Otonom seyrüsefer gezegen iniş araçlarını güvenle yönlendiriyor olacak." },
  { id: "v11_7", word: "deploy", phonetic: "/dɪˈplɔɪ/", type: "verb", tr: "göreve yerleştirmek, konuşlandırmak", enDef: "to bring into effective action; utilize", example: "Astronomers will be deploying giant radio arrays on the lunar far side.", exampleTr: "Astronomlar ayın uzak tarafında devasa radyo dizilimleri konuşlandırıyor olacaklar." },
  { id: "v11_8", word: "spectrum", phonetic: "/ˈspek.trəm/", type: "noun", tr: "tayf, elektromanyetik spektrum", enDef: "a band of colors or electromagnetic frequencies", example: "Spectrometers will be analyzing the atmospheric spectrum of exoplanets.", exampleTr: "Spektrometreler ötegezegenlerin atmosferik tayfını analiz ediyor olacak." },
  { id: "v11_9", word: "trajectory", phonetic: "/trəˈdʒek.tɚ.i/", type: "noun", tr: "yörünge izi, rota", enDef: "the curved path along which an object moves through space", example: "The probe will be tracing a gravitational slingshot trajectory.", exampleTr: "Sonda yerçekimsel sapan etkisiyle bir yörünge izi takip ediyor olacak." },
  { id: "v11_10", word: "cosmic", phonetic: "/ˈkɑːz.mɪk/", type: "adj", tr: "kozmik, uzaya ait", enDef: "relating to the universe or cosmos", example: "Detectors will be capturing cosmic background microwave radiation.", exampleTr: "Detektörler kozmik mikrodalga arka plan radyasyonunu yakalıyor olacak." },

  // Day 12: Renewable Transitions & Global Climatology
  { id: "v12_1", word: "decarbonize", phonetic: "/diːˈkɑːr.bə.naɪz/", type: "verb", tr: "karbonsuzlaştırmak", enDef: "to remove or reduce carbon dioxide emissions from an industry", example: "Major economies will have decarbonized power grids before 2050.", exampleTr: "Büyük ekonomiler 2050'den önce enerji şebekelerini karbonsuzlaştırmış olacaktır." },
  { id: "v12_2", word: "photovoltaic", phonetic: "/ˌfoʊ.t̬oʊ.vɑːlˈteɪ.ɪk/", type: "adj", tr: "fotovoltaik, güneş elektriği üreten", enDef: "relating to the conversion of light into electricity", example: "Perovskite photovoltaic cells will have achieved record efficiency.", exampleTr: "Perovskit fotovoltaik hücreler rekor verimliliğe ulaşmış olacaktır." },
  { id: "v12_3", word: "infrastructure", phonetic: "/ˈɪn.frəˌstrʌk.tʃɚ/", type: "noun", tr: "altyapı", enDef: "the basic physical systems of a business, region, or nation", example: "Municipalities will have overhauled regional electrical infrastructure.", exampleTr: "Belediyeler bölgesel elektrik altyapısını baştan aşağı yenilemiş olacaktır." },
  { id: "v12_4", word: "intermittent", phonetic: "/ˌɪn.t̬ɚˈmɪt.ənt/", type: "adj", tr: "kesintili, aralıklı", enDef: "stopping and starting at intervals", example: "Storage solutions will have smoothed out intermittent renewable supply.", exampleTr: "Depolama çözümleri kesintili yenilenebilir arzı dengelemiş olacaktır." },
  { id: "v12_5", word: "capacity", phonetic: "/kəˈpæs.ə.t̬i/", type: "noun", tr: "kapasite, üretim hacmi", enDef: "the maximum amount that something can contain or produce", example: "Global solar generation capacity will have tripled by 2040.", exampleTr: "Küresel güneş üretim kapasitesi 2040 yılına kadar üç katına çıkmış olacaktır." },
  { id: "v12_6", word: "subsidy", phonetic: "/ˈsʌb.sə.di/", type: "noun", tr: "devlet desteği, sübvansiyon", enDef: "a sum of money granted by the government to assist an industry", example: "Legislators will have redirected fossil subsidies toward geothermal tech.", exampleTr: "Yasa koyucular fosil yakıt desteklerini jeotermal teknolojiye yönlendirmiş olacaktır." },
  { id: "v12_7", word: "transition", phonetic: "/trænˈzɪʃ.ən/", type: "noun", tr: "geçiş, dönüşüm süreci", enDef: "the process or a period of changing from one state to another", example: "Developing regions will have completed the green industrial transition.", exampleTr: "Gelişmekte olan bölgeler yeşil sanayi dönüşümünü tamamlamış olacaktır." },
  { id: "v12_8", word: "surpass", phonetic: "/sɚˈpæs/", type: "verb", tr: "aşmak, geride bırakmak", enDef: "to exceed; be greater than", example: "Renewable energy production will have surpassed conventional coal by 2035.", exampleTr: "Yenilenebilir enerji üretimi 2035'e kadar geleneksel kömürü aşmış olacaktır." },
  { id: "v12_9", word: "efficiency", phonetic: "/ɪˈfɪʃ.ən.si/", type: "noun", tr: "verimlilik", enDef: "the state or quality of being efficient", example: "Smart meters will have increased national grid distribution efficiency.", exampleTr: "Akıllı sayaçlar ulusal şebeke dağıtım verimliliğini artırmış olacaktır." },
  { id: "v12_10", word: "reliance", phonetic: "/rɪˈlaɪ.əns/", type: "noun", tr: "bağımlılık, güvenme", enDef: "dependence on or trust in someone or something", example: "Industrial nations will have ended their reliance on foreign crude oil.", exampleTr: "Sanayi ülkeleri yabancı ham petrole olan bağımlılıklarına son vermiş olacaktır." },

  // Day 13: Soil Degradation & Agronomy
  { id: "v13_1", word: "erosion", phonetic: "/ɪˈroʊ.ʒən/", type: "noun", tr: "erozyon, aşınma", enDef: "the gradual destruction or diminution of something", example: "Agro-scientists will have been tracking topsoil erosion rates for decades.", exampleTr: "Tarım bilimcileri onlarca yıldır üst toprak erozyonu oranlarını izliyor olmuş olacaklar." },
  { id: "v13_2", word: "arable", phonetic: "/ˈær.ə.bəl/", type: "adj", tr: "ekilebilir, tarıma uygun", enDef: "used or suitable for growing crops", example: "Unchecked heat waves will have been diminishing arable farmland worldwide.", exampleTr: "Durdurulamaz sıcak hava dalgaları dünya genelinde ekilebilir tarım arazilerini daraltıyor olmuş olacaktır." },
  { id: "v13_3", word: "salinization", phonetic: "/ˌseɪ.lɪ.naɪˈzeɪ.ʃən/", type: "noun", tr: "tuzlanma", enDef: "the buildup of salts in soil", example: "Heavy irrigation will have been inducing dangerous soil salinization.", exampleTr: "Aşırı sulama tehlikeli toprak tuzlanmasını tetikliyor olmuş olacaktır." },
  { id: "v13_4", word: "cultivate", phonetic: "/ˈkʌl.tə.veɪt/", type: "verb", tr: "ekip biçmek, yetiştirmek", enDef: "to prepare and use land for crops or gardening", example: "Farmers will have been cultivating legume cover crops to fix nitrogen.", exampleTr: "Çiftçiler azotu bağlamak için baklagil örtücü ürünleri ekiyor olmuş olacaklardır." },
  { id: "v13_5", word: "fertilizer", phonetic: "/ˈfɝː.t̬əl.aɪ.zɚ/", type: "noun", tr: "gübre", enDef: "a chemical or natural substance added to soil to increase fertility", example: "Runoff from synthetic fertilizer will have been degrading river basins.", exampleTr: "Sentetik gübre akıntıları nehir havzalarını bozunduruyor olmuş olacaktır." },
  { id: "v13_6", word: "yield", phonetic: "/jiːld/", type: "noun", tr: "ürün rekoltesi, verim", enDef: "an amount of an agricultural product produced", example: "Drought will have been depressing cereal crop yields across temperate zones.", exampleTr: "Kuraklık ılıman bölgelerde tahıl ürünü rekoltelerini düşürüyor olmuş olacaktır." },
  { id: "v13_7", word: "sustainability", phonetic: "/səˌsteɪ.nəˈbɪl.ə.t̬i/", type: "noun", tr: "sürdürülebilirlik", enDef: "the ability to maintain ecological balance", example: "Agronomists will have been advocating regenerative sustainability.", exampleTr: "Agronomlar onarıcı sürdürülebilirliği savunuyor olmuş olacaklardır." },
  { id: "v13_8", word: "depletion", phonetic: "/dɪˈpliː.ʃən/", type: "noun", tr: "tükenme, eksilme", enDef: "reduction in the number or quantity of something", example: "Tillage will have been causing continuous organic matter depletion.", exampleTr: "Toprak sürme sürekli organik madde tükenmesine yol açıyor olmuş olacaktır." },
  { id: "v13_9", word: "microbiome", phonetic: "/ˌmaɪ.kroʊˈbaɪ.oʊm/", type: "noun", tr: "mikrobiyom, mikroorganizma topluluğu", enDef: "a community of microorganisms inhabiting a particular environment", example: "Biologists will have been studying the subterranean fungal microbiome.", exampleTr: "Biyologlar yeraltı mantar mikrobiyomunu inceliyor olmuş olacaklardır." },
  { id: "v13_10", word: "irrigation", phonetic: "/ˌɪr.əˈɡeɪ.ʃən/", type: "noun", tr: "sulama", enDef: "the supply of water to land or crops to help growth", example: "Smart drip irrigation will have been conserving precious aquifer reserves.", exampleTr: "Akıllı damla sulama değerli akifer rezervlerini koruyor olmuş olacaktır." },

  // Day 15: Industrial Automation & Advanced Robotics
  { id: "v15_1", word: "assembly", phonetic: "/əˈsem.bli/", type: "noun", tr: "montaj, montaj hattı", enDef: "the fitting together of parts to make a complete machine or structure", example: "Automotive assembly lines operate with minimal human intervention.", exampleTr: "Otomotiv montaj hatları asgari insan müdahalesiyle çalışır." },
  { id: "v15_2", word: "automation", phonetic: "/ˌɑː.t̬əˈmeɪ.ʃən/", type: "noun", tr: "otomasyon", enDef: "the use of largely automatic equipment in a facility", example: "Robotic automation reduces cycle times in semiconductor fabrication.", exampleTr: "Robotik otomasyon yarı iletken üretiminde çevrim sürelerini kısaltır." },
  { id: "v15_3", word: "precision", phonetic: "/prəˈsɪʒ.ən/", type: "noun", tr: "kesinlik, hassasiyet", enDef: "the quality of being exact and accurate", example: "Laser micro-machining requires sub-micron mechanical precision.", exampleTr: "Lazer mikro-işleme mikron altı mekanik hassasiyet gerektirir." },
  { id: "v15_4", word: "fabrication", phonetic: "/ˌfæb.rɪˈkeɪ.ʃən/", type: "noun", tr: "üretim, imalat", enDef: "the action or process of manufacturing or inventing something", example: "Carbon fiber fabrication is carried out in controlled cleanrooms.", exampleTr: "Karbon fiber üretimi kontrollü temiz odalarda yürütülür." },
  { id: "v15_5", word: "optimize", phonetic: "/ˈɑːp.tə.maɪz/", type: "verb", tr: "en uygun hale getirmek, optimize etmek", enDef: "to make the best or most effective use of a situation or resource", example: "Neural networks optimize power distribution across production cells.", exampleTr: "Yapay sinir ağları üretim hücreleri arasındaki güç dağıtımını optimize eder." },
  { id: "v15_6", word: "throughput", phonetic: "/ˈθruː.pʊt/", type: "noun", tr: "üretim debisi, işlem kapasitesi", enDef: "the amount of material or items passing through a system or process", example: "Conveyor upgrades increased daily component throughput by forty percent.", exampleTr: "Konveyör yükseltmeleri günlük bileşen debisini yüzde kırk artırdı." },
  { id: "v15_7", word: "calibrate", phonetic: "/ˈkæl.ə.breɪt/", type: "verb", tr: "kalibre etmek, hassas ayar yapmak", enDef: "to adjust precisely for a particular function", example: "Engineers calibrate optical sensors before initiating production runs.", exampleTr: "Mühendisler üretim döngüsünü başlatmadan önce optik sensörleri kalibre ederler." },
  { id: "v15_8", word: "defect", phonetic: "/ˈdiː.fekt/", type: "noun", tr: "kusur, imalat hatası", enDef: "a shortcoming, imperfection, or lack", example: "Thermal cameras detect microscopic surface defects instantaneously.", exampleTr: "Termal kameralar mikroskobik yüzey kusurlarını anında tespit eder." },
  { id: "v15_9", word: "sensor", phonetic: "/ˈsen.sɚ/", type: "noun", tr: "algılayıcı, sensör", enDef: "a device that detects or measures a physical property", example: "Vibration sensors monitor bearing wear inside turbine generators.", exampleTr: "Titreşim sensörleri türbin jeneratörleri içindeki yatak aşınmasını izler." },
  { id: "v15_10", word: "standardize", phonetic: "/ˈstæn.dɚ.daɪz/", type: "verb", tr: "standartlaştırmak", enDef: "to cause something to conform to a standard", example: "International consortiums standardize interface protocols for robotic arms.", exampleTr: "Uluslararası konsorsiyumlar robot kollar için arayüz protokollerini standartlaştırır." },

  // Day 16: Forensic Anthropology & Paleogenomics
  { id: "v16_1", word: "forensic", phonetic: "/fəˈren.zɪk/", type: "adj", tr: "adli, adli tıpla ilgili", enDef: "relating to the application of scientific methods to investigation", example: "Forensic anthropologists analyze skeletal trauma in buried remains.", exampleTr: "Adli antropologlar gömülü kalıntılardaki iskelet travmasını inceler." },
  { id: "v16_2", word: "excavate", phonetic: "/ˈeks.kə.veɪt/", type: "verb", tr: "kazmak, kazıyla ortaya çıkarmak", enDef: "to dig out material from the ground", example: "Neanderthal jawbones were excavated from submerged cave deposits.", exampleTr: "Neandertal çene kemikleri su altındaki mağara birikintilerinden çıkarıldı." },
  { id: "v16_3", word: "specimen", phonetic: "/ˈspes.ə.mən/", type: "noun", tr: "örnek, numune", enDef: "an individual animal, plant, piece of a mineral, used as an example", example: "The fossilized specimen was preserved in ancient amber resin.", exampleTr: "Fosilleşmiş numune antik kehribar reçinesi içinde korunmuştu." },
  { id: "v16_4", word: "biomarker", phonetic: "/ˈbaɪ.oʊˌmɑːr.kɚ/", type: "noun", tr: "biyolojik belirteç, biyomarker", enDef: "a measurable substance in an organism whose presence indicates disease or age", example: "Lipid biomarkers survived inside porous prehistoric pottery shards.", exampleTr: "Lipit biyomarkerlar gözenekli tarih öncesi çömlek kırıkları içinde varlığını korudu." },
  { id: "v16_5", word: "degradation", phonetic: "/ˌdeɡ.rəˈdeɪ.ʃən/", type: "noun", tr: "bozulma, kimyasal çözünme", enDef: "the condition or process of degrading or being degraded", example: "DNA degradation occurs rapidly in humid tropical sedimentary layers.", exampleTr: "DNA bozulması nemli tropikal tortul katmanlarda hızla gerçekleşir." },
  { id: "v16_6", word: "lineage", phonetic: "/ˈlɪn.i.ɪdʒ/", type: "noun", tr: "soy, köken hattı", enDef: "linear descent from an ancestor; ancestry or pedigree", example: "Genomic sequencing confirmed the distinct lineage of Denisovan hominids.", exampleTr: "Genomik dizileme Denisova hominidlerinin farklı soy hattını doğruladı." },
  { id: "v16_7", word: "isotope", phonetic: "/ˈaɪ.sə.toʊp/", type: "noun", tr: "izotop", enDef: "forms of the same element that contain equal numbers of protons but different neutrons", example: "Strontium isotope ratios in dental enamel reveal migration patterns.", exampleTr: "Diş minesindeki stronsiyum izotop oranları göç modellerini açığa çıkarır." },
  { id: "v16_8", word: "contamination", phonetic: "/kənˌtæm.əˈneɪ.ʃən/", type: "noun", tr: "bulaşma, dış kaynaklı kirlenme", enDef: "the presence of an unwanted substance that makes something impure", example: "Ancient sample rooms prevent modern bacterial contamination.", exampleTr: "Antik numune odaları modern bakteriyel bulaşmayı engeller." },
  { id: "v16_9", word: "skeletal", phonetic: "/ˈskel.ə.t̬əl/", type: "adj", tr: "iskelete ait, iskeletsel", enDef: "relating to or functioning as a skeleton", example: "Pathologists observed severe skeletal lesions indicating chronic malnutrition.", exampleTr: "Patologlar kronik yetersiz beslenmeye işaret eden şiddetli iskelet lezyonları gözlemledi." },
  { id: "v16_10", word: "reconstruct", phonetic: "/ˌriː.kənˈstrʌkt/", type: "verb", tr: "yeniden canlandırmak, inşa etmek", enDef: "to build or form something again after it has been damaged", example: "Paleontologists reconstruct cranial soft tissue using 3D computed tomography.", exampleTr: "Paleontologlar 3B bilgisayarlı tomografi kullanarak kafatası yumuşak dokusunu yeniden canlandırırlar." },

  // Day 17: Cognitive Ethology & Animal Communication
  { id: "v17_1", word: "cognition", phonetic: "/kɑːɡˈnɪʃ.ən/", type: "noun", tr: "biliş, akıl yürütme yetisi", enDef: "the mental action or process of acquiring knowledge and understanding", example: "Comparative psychologists study avian cognition in scrub jays.", exampleTr: "Karşılaştırmalı psikologlar çalı kargalarında kuş bilişini inceler." },
  { id: "v17_2", word: "vocalization", phonetic: "/ˌvoʊ.kəl.əˈzeɪ.ʃən/", type: "noun", tr: "ses çıkarma, ötüş/çağrı", enDef: "the utterance of sounds or words with the voice", example: "Orca vocalizations convey identity and coordinated hunting strategy.", exampleTr: "Katil balina seslenişleri kimliği ve koordineli avlanma stratejisini iletir." },
  { id: "v17_3", word: "acoustic", phonetic: "/əˈkuː.stɪk/", type: "adj", tr: "akustik, işitsel", enDef: "relating to sound or the sense of hearing", example: "Hydrophone arrays capture acoustic signals in deep oceanic trenches.", exampleTr: "Hidrofon dizilimleri derin okyanus çukurlarındaki akustik sinyalleri yakalar." },
  { id: "v17_4", word: "dialect", phonetic: "/ˈdaɪ.ə.lekt/", type: "noun", tr: "lehçe, şive", enDef: "a particular form of a language or sound unique to a specific group", example: "Geographically isolated whale pods develop distinct sonic dialects.", exampleTr: "Coğrafi olarak yalıtılmış balina sürüleri belirgin ses lehçeleri geliştirir." },
  { id: "v17_5", word: "perception", phonetic: "/pɚˈsep.ʃən/", type: "noun", tr: "algı, kavrayış", enDef: "the ability to see, hear, or become aware of something through the senses", example: "Echolocation enhances cetacean environmental perception in murky waters.", exampleTr: "Yankıyla yön bulma bulanık sularda deniz memelilerinin çevresel algısını geliştirir." },
  { id: "v17_6", word: "stimulus", phonetic: "/ˈstɪm.jə.ləs/", type: "noun", tr: "uyaran, dürtü", enDef: "a thing or event that evokes a specific functional reaction", example: "Chimpanzees respond adaptively to novel acoustic stimuli.", exampleTr: "Şempanzeler yeni akustik uyaranlara uyumsal olarak tepki verir." },
  { id: "v17_7", word: "innate", phonetic: "/ɪˈneɪt/", type: "adj", tr: "doğuştan gelen, fıtri", enDef: "inborn; natural", example: "Some alarm calls are innate, whereas complex song syntax is learned.", exampleTr: "Bazı tehlike çağrıları doğuştan gelir, oysa karmaşık ötüş sözdizimi öğrenilir." },
  { id: "v17_8", word: "mimic", phonetic: "/ˈmɪm.ɪk/", type: "verb", tr: "taklit etmek", enDef: "to imitate someone or their actions or speech", example: "Parrots mimic synthetic phonetic structures with astonishing fidelity.", exampleTr: "Papağanlar sentetik fonetik yapıları şaşırtıcı bir doğrulukla taklit eder." },
  { id: "v17_9", word: "foraging", phonetic: "/ˈfɔːr.ɪ.dʒɪŋ/", type: "noun", tr: "yiyecek arama", enDef: "searching for wild food resources", example: "Dolphins coordinate cooperative foraging through whistle sequences.", exampleTr: "Yunuslar ıslık dizilimleri aracılığıyla işbirlikçi yiyecek aramayı koordine eder." },
  { id: "v17_10", word: "pod", phonetic: "/pɑːd/", type: "noun", tr: "balina/yunus sürüsü", enDef: "a small herd or school of marine animals, especially whales", example: "The matrilineal pod navigates ancestral migratory oceanic routes.", exampleTr: "Anaerkil balina sürüsü atalardan kalma göç rotalarında yol alır." },

  // Day 18: Ocean Circulation & Climate Dynamics
  { id: "v18_1", word: "circulation", phonetic: "/ˌsɝː.kjəˈleɪ.ʃən/", type: "noun", tr: "dolaşım, sirkülasyon", enDef: "the movement of fluid in a closed system", example: "Thermohaline circulation regulates terrestrial heat distribution.", exampleTr: "Termohalin dolaşım karasal ısı dağılımını düzenler." },
  { id: "v18_2", word: "salinity", phonetic: "/səˈlɪn.ə.t̬i/", type: "noun", tr: "tuzluluk derecesi", enDef: "the concentration of dissolved salt in water", example: "Melting polar glaciers dilute surface ocean salinity.", exampleTr: "Eriyen kutup buzulları yüzey okyanus tuzluluğunu seyreltir." },
  { id: "v18_3", word: "equilibrium", phonetic: "/ˌiː.kwəˈlɪb.ri.əm/", type: "noun", tr: "denge, denge hali", enDef: "a state in which opposing forces or influences are balanced", example: "Thermal equilibrium stabilizes mid-latitude maritime weather.", exampleTr: "Termal denge orta enlem deniz iklimini istikrara kavuşturur." },
  { id: "v18_4", word: "conveyor", phonetic: "/kənˈveɪ.ɚ/", type: "noun", tr: "taşıyıcı akıntı kuşağı", enDef: "a continuous moving band or natural oceanic transport current", example: "The global ocean conveyor transports warm waters toward polar seas.", exampleTr: "Küresel okyanus taşıyıcı akıntısı ılık suları kutup denizlerine doğru taşır." },
  { id: "v18_5", word: "redistribute", phonetic: "/ˌriː.dɪˈstrɪb.juːt/", type: "verb", tr: "yeniden dağıtmak", enDef: "to distribute again or differently", example: "Deep ocean currents redistribute equatorial heat toward northern continents.", exampleTr: "Derin okyanus akıntıları ekvatoral ısıyı kuzey kıtalarına doğru yeniden dağıtır." },
  { id: "v18_6", word: "disruption", phonetic: "/dɪsˈrʌp.ʃən/", type: "noun", tr: "aksama, kesinti, bozulma", enDef: "disturbance or problems which interrupt an event or process", example: "Current disruption would trigger abrupt atmospheric anomalies.", exampleTr: "Akıntının aksaması ani atmosferik anomalileri tetiklerdi." },
  { id: "v18_7", word: "tipping point", phonetic: "/ˈtɪp.ɪŋ ˌpɔɪnt/", type: "noun", tr: "kırılma noktası, kritik eşik", enDef: "the point at which a series of small changes causes a larger, more important change", example: "Glaciologists warn that the Arctic ice sheet is approaching a critical tipping point.", exampleTr: "Buzulbilimciler Arktik buz tabakasının kritik bir kırılma noktasına yaklaştığını uyarıyor." },
  { id: "v18_8", word: "glacier", phonetic: "/ˈɡleɪ.ʃɚ/", type: "noun", tr: "buzul", enDef: "a slowly moving mass or river of ice formed by the accumulation of snow", example: "Greenland glaciers discharge massive volumes of freshwater into the Atlantic.", exampleTr: "Grönland buzulları Atlantik'e muazzam miktarda tatlı su akıtır." },
  { id: "v18_9", word: "collapse", phonetic: "/kəˈlæps/", type: "verb", tr: "çökmek, yıkılmak", enDef: "to fall down or in; give way", example: "If deep Atlantic overturning were to collapse, sub-polar ecosystems would suffer.", exampleTr: "Şayet derin Atlantik altüst oluşu çökerse, kutup altı ekosistemler zarar görürdü." },
  { id: "v18_10", word: "mitigate", phonetic: "/ˈmɪt̬.ə.ɡeɪt/", type: "verb", tr: "hafifletmek, azaltmak", enDef: "to make less severe, serious, or painful", example: "Rapid decarbonization mitigates catastrophic sea-level rise.", exampleTr: "Hızlı karbonsuzlaşma felaket niteliğindeki deniz seviyesi yükselmesini hafifletir." },

  // Day 19: Technological Revolutions & Economic History
  { id: "v19_1", word: "mechanization", phonetic: "/ˌmek.ə.nəˈzeɪ.ʃən/", type: "noun", tr: "makineleşme", enDef: "the process of introducing machines into work", example: "Textile mechanization replaced manual weaving looms in Britain.", exampleTr: "Tekstil makineleşmesi Britanya'da el dokuma tezgahlarının yerini aldı." },
  { id: "v19_2", word: "productivity", phonetic: "/ˌproʊ.dʌkˈtɪv.ə.t̬i/", type: "noun", tr: "üretkenlik, verimlilik", enDef: "the effectiveness of productive effort", example: "Steam power magnified industrial manufacturing productivity.", exampleTr: "Buhar gücü endüstriyel üretim verimliliğini katladı." },
  { id: "v19_3", word: "transistor", phonetic: "/trænˈzɪs.tɚ/", type: "noun", tr: "transistör", enDef: "a semiconductor device used to amplify or switch electrical signals", example: "The solid-state transistor catalyzed modern telecommunications.", exampleTr: "Katı hal transistörü modern telekomünikasyonu tetikledi." },
  { id: "v19_4", word: "catalyst", phonetic: "/ˈkæt̬.əl.ɪst/", type: "noun", tr: "katalizör, tetikleyici", enDef: "a person or thing that precipitates an event", example: "Invention of the steam pump was a catalyst for coal mining expansion.", exampleTr: "Buharlı pompanın icadı kömür madenciliğinin genişlemesi için bir katalizördü." },
  { id: "v19_5", word: "paradigm", phonetic: "/ˈper.ə.daɪm/", type: "noun", tr: "paradigma, model, anlayış", enDef: "a typical example or pattern of something; a model", example: "Digital silicon chips shifted the computing paradigm permanently.", exampleTr: "Dijital silikon çipler bilişim paradigmasını kalıcı olarak değiştirdi." },
  { id: "v19_6", word: "workforce", phonetic: "/ˈwɝːk.fɔːrs/", type: "noun", tr: "işgücü, çalışanlar topluluğu", enDef: "the people engaged in or available for work", example: "The agrarian workforce transitioned toward urban assembly plants.", exampleTr: "Tarımsal işgücü kentsel montaj fabrikalarına doğru geçiş yaptı." },
  { id: "v19_7", word: "transformation", phonetic: "/ˌtræns.fɚˈmeɪ.ʃən/", type: "noun", tr: "dönüşüm, köklü değişim", enDef: "a thorough or dramatic change in form or appearance", example: "Electrification induced economic transformation across rural communities.", exampleTr: "Elektriğin yaygınlaşması kırsal topluluklarda ekonomik dönüşüme yol açtı." },
  { id: "v19_8", word: "innovative", phonetic: "/ˈɪn.ə.veɪ.tɪv/", type: "adj", tr: "yenilikçi", enDef: "featuring new methods; advanced and original", example: "Innovative patents spurred metallurgy and locomotive production.", exampleTr: "Yenilikçi patentler metalurji ve lokomotif üretimini körükledi." },
  { id: "v19_9", word: "semiconductor", phonetic: "/ˌsem.i.kənˈdʌk.tɚ/", type: "noun", tr: "yarı iletken", enDef: "a solid substance having a conductivity between conductors and insulators", example: "Semiconductor foundries manufacture nanometer microprocessors.", exampleTr: "Yarı iletken dökümhaneleri nanometre mikroişlemciler üretir." },
  { id: "v19_10", word: "obsolete", phonetic: "/ˌɑːb.səˈliːt/", type: "adj", tr: "eski, modası geçmiş, tedavülden kalkmış", enDef: "no longer produced or used; out of date", example: "Vacuum tubes became obsolete following the development of silicon circuits.", exampleTr: "Vakumlu tüpler silikon devrelerin geliştirilmesinin ardından tedavülden kalktı." },

  // Day 20: Seismic Engineering & Earthquake Architecture
  { id: "v20_1", word: "oscillation", phonetic: "/ˌɑː.səˈleɪ.ʃən/", type: "noun", tr: "salınım", enDef: "movement back and forth at a regular speed", example: "Tuned dampers attenuate hazardous high-rise oscillation.", exampleTr: "Ayarlı sönümleyiciler tehlikeli gökdelen salınımını hafifletir." },
  { id: "v20_2", word: "magnitude", phonetic: "/ˈmæɡ.nə.tuːd/", type: "noun", tr: "deprem büyüklüğü, şiddet", enDef: "the great size or extent of something; measure of earthquake energy", example: "Structures must endure earthquakes exceeding magnitude 8.0.", exampleTr: "Yapılar 8.0 büyüklüğünü aşan depremlere dayanmalıdır." },
  { id: "v20_3", word: "liquefaction", phonetic: "/ˌlɪk.wəˈfæk.ʃən/", type: "noun", tr: "sıvılaşma (zemin)", enDef: "the process of making or becoming liquid", example: "Saturated alluvial soil undergoes seismic liquefaction.", exampleTr: "Doygun alüvyal zemin sismik sıvılaşmaya uğrar." },
  { id: "v20_4", word: "foundation", phonetic: "/faʊnˈdeɪ.ʃən/", type: "noun", tr: "bina temeli", enDef: "the lowest load-bearing part of a building", example: "Deep pilings anchor building foundations into bedrock.", exampleTr: "Derin kazıklar bina temellerini ana kayaya sabitler." },
  { id: "v20_5", word: "structural", phonetic: "/ˈstrʌk.tʃɚ.əl/", type: "adj", tr: "yapısal", enDef: "relating to or forming part of the structure of a building", example: "Reinforced concrete beams ensure structural integrity under stress.", exampleTr: "Güçlendirilmiş beton kirişler gerilim altında yapısal bütünlüğü güvenceye alır." },
  { id: "v20_6", word: "dampening", phonetic: "/ˈdæm.pən.ɪŋ/", type: "noun", tr: "sönümleme, titreşim azaltma", enDef: "reduction in amplitude of an oscillation or vibration", example: "Viscous fluid dampening dissipates kinetic tremor energy.", exampleTr: "Akışkan sönümleme kinetik sarsıntı enerjisini dağıtır." },
  { id: "v20_7", word: "retrofit", phonetic: "/ˈret.roʊ.fɪt/", type: "verb", tr: "güçlendirmek, modernize etmek", enDef: "to add a component or accessory to something that did not have it when manufactured", example: "Municipalities retrofit historic masonry landmarks with steel bracings.", exampleTr: "Belediyeler tarihi taş yapıları çelik çaprazlarla güçlendirir." },
  { id: "v20_8", word: "resilience", phonetic: "/rɪˈzɪl.jəns/", type: "noun", tr: "dayanıklılık, direnç", enDef: "the capacity to recover quickly from difficulties; toughness", example: "Base isolation enhances the seismic resilience of urban hospitals.", exampleTr: "Sismik taban yalıtımı şehir hastanelerinin deprem direncini artırır." },
  { id: "v20_9", word: "elasticity", phonetic: "/ˌiː.læsˈtɪs.ə.t̬i/", type: "noun", tr: "esneklik", enDef: "the ability of an object to resume its normal shape after being stretched", example: "Structural steel exhibits high elasticity under sudden shear stress.", exampleTr: "Yapı çeliği ani kesme gerilmesi altında yüksek esneklik sergiler." },
  { id: "v20_10", word: "lateral", phonetic: "/ˈlæt̬.ɚ.əl/", type: "adj", tr: "yanal, enlemesine", enDef: "of, at, toward, or from the side or sides", example: "Cross-bracing counteracts destructive lateral earthquake shears.", exampleTr: "Çapraz gergiler yıkıcı yanal deprem kuvvetlerine karşı koyar." },

  // Day 22: Developmental Psychology & Child Linguistics
  { id: "v22_1", word: "acquisition", phonetic: "/ˌæk.wəˈzɪʃ.ən/", type: "noun", tr: "edinme, kazanım", enDef: "the learning or developing of a skill, habit, or quality", example: "Early syntax acquisition follows universal developmental milestones.", exampleTr: "Erken sözdizimi edinimi evrensel gelişimsel kilometre taşlarını izler." },
  { id: "v22_2", word: "syntax", phonetic: "/ˈsɪn.tæks/", type: "noun", tr: "sözdizimi, cümle yapısı", enDef: "the arrangement of words and phrases to create well-formed sentences", example: "Toddlers intuit complex grammatical syntax without formal instruction.", exampleTr: "Yeni yürüyen çocuklar resmi ders almadan karmaşık dilbilgisel sözdizimini sezgisel olarak kavrar." },
  { id: "v22_3", word: "lexicon", phonetic: "/ˈlek.sə.kɑːn/", type: "noun", tr: "söz dağarcığı, kelime haznesi", enDef: "the vocabulary of a person, language, or branch of knowledge", example: "Interactive storybook reading expands a child's mental lexicon.", exampleTr: "Etkileşimli hikaye kitabı okuma çocuğun zihinsel söz dağarcığını genişletir." },
  { id: "v22_4", word: "comprehension", phonetic: "/ˌkɑːm.prəˈhen.ʃən/", type: "noun", tr: "kavrama, anlama", enDef: "the action or capability of understanding something", example: "Auditory language comprehension precedes articulate verbal speech production.", exampleTr: "İşitsel dil kavrayışı net sözlü konuşma üretiminden önce gelir." },
  { id: "v22_5", word: "babbling", phonetic: "/ˈbæb.lɪŋ/", type: "noun", tr: "agulama, mırıltı", enDef: "meaningless sounds made by infants learning to talk", example: "Infant canonical babbling exercises oral motor coordination.", exampleTr: "Bebek agulamaları ağız motor koordinasyonunu çalıştırır." },
  { id: "v22_6", word: "developmental", phonetic: "/dɪˌvel.əpˈmen.t̬əl/", type: "adj", tr: "gelişimsel", enDef: "concerned with the development of someone or something", example: "Pediatricians screen children for developmental speech delays.", exampleTr: "Çocuk doktorları gelişimsel konuşma gecikmeleri için tarama yaparlar." },
  { id: "v22_7", word: "cognitive", phonetic: "/ˈkɑːɡ.nə.tɪv/", type: "adj", tr: "bilişsel", enDef: "relating to cognition or mental processes", example: "Bilingual upbringing enhances cognitive task switching in youths.", exampleTr: "İkidilli yetiştirilme gençlerde bilişsel görev geçişini güçlendirir." },
  { id: "v22_8", word: "exposure", phonetic: "/ɪkˈspoʊ.ʒɚ/", type: "noun", tr: "maruz kalma, temas", enDef: "the state of being exposed to contact with something", example: "Rich vocabulary exposure accelerates phonological decoding.", exampleTr: "Zengin kelime dağarcığına maruz kalma fonolojik çözümlemeyi hızlandırır." },
  { id: "v22_9", word: "mastery", phonetic: "/ˈmæs.tɚ.i/", type: "noun", tr: "ustalık, tam yetkinlik", enDef: "comprehensive knowledge or skill in a subject", example: "Linguistic mastery allows young students to formulate complex essays.", exampleTr: "Dilsel yetkinlik genç öğrencilerin karmaşık kompozisyonlar yazmasını sağlar." },
  { id: "v22_10", word: "imitate", phonetic: "/ˈɪm.ə.teɪt/", type: "verb", tr: "taklit etmek", enDef: "to copy or simulate speech or behavior", example: "Infants naturally imitate prosodic intonations modeled by caregivers.", exampleTr: "Bebekler bakıcıları tarafından sergilenen prozodik tonlamaları doğal olarak taklit eder." },

  // Day 23: Environmental Summits & Diplomatic Protocols
  { id: "v23_1", word: "treaty", phonetic: "/ˈtriː.t̬i/", type: "noun", tr: "antlaşma, sözleşme", enDef: "a formally concluded and ratified agreement between states", example: "Multilateral climate treaties obligate signatories to curtail carbon outputs.", exampleTr: "Çok taraflı iklim antlaşmaları imzacılara karbon çıktılarını kısma yükümlülüğü getirir." },
  { id: "v23_2", word: "consensus", phonetic: "/kənˈsen.səs/", type: "noun", tr: "uzlaşı, oybirliği, mutabakat", enDef: "a general agreement among a group of people", example: "Diplomatic delegates labored through midnight to reach consensus.", exampleTr: "Diplomatik delegeler uzlaşıya varmak için gece yarısına kadar ter döktüler." },
  { id: "v23_3", word: "mandate", phonetic: "/ˈmæn.deɪt/", type: "noun", tr: "yetki, talimat", enDef: "an official order or commission to do something", example: "The summit produced a strict mandate for phase-out timelines.", exampleTr: "Zirve, kömürden çıkış takvimleri için bağlayıcı bir yetki/talimat ortaya koydu." },
  { id: "v23_4", word: "ratification", phonetic: "/ˌræt̬.ə.fəˈkeɪ.ʃən/", type: "noun", tr: "onaylama (parlamento/hükümet)", enDef: "the action of signing or giving formal consent to a treaty", example: "Parliamentary ratification is compulsory before international enforcement.", exampleTr: "Uluslararası yürürlük öncesinde parlamenter onay zorunludur." },
  { id: "v23_5", word: "bilateral", phonetic: "/ˌbaɪˈlæt̬.ɚ.əl/", type: "adj", tr: "iki taraflı", enDef: "having or relating to two sides; affecting both sides", example: "Bilateral trade summits resolved cross-border emissions disputes.", exampleTr: "İki taraflı ticaret zirveleri sınır ötesi emisyon anlaşmazlıklarını çözdü." },
  { id: "v23_6", word: "multilateral", phonetic: "/ˌmʌl.tiˈlæt̬.ɚ.əl/", type: "adj", tr: "çok taraflı", enDef: "agreed upon or participated in by three or more parties", example: "Multilateral frameworks coordinate worldwide maritime pollution controls.", exampleTr: "Çok taraflı çerçeveler dünya çapında deniz kirliliği kontrollerini koordine eder." },
  { id: "v23_7", word: "compromise", phonetic: "/ˈkɑːm.prə.maɪz/", type: "noun", tr: "uzlaşma, karşılıklı taviz", enDef: "an agreement or a settlement of a dispute reached by mutual concession", example: "Developing nations accepted a compromise regarding transition subsidies.", exampleTr: "Gelişmekte olan ülkeler dönüşüm sübvansiyonlarına ilişkin bir uzlaşmayı kabul etti." },
  { id: "v23_8", word: "sanction", phonetic: "/ˈsæŋk.ʃən/", type: "noun", tr: "yaptırım, cezai müeyyide", enDef: "a threatened penalty for disobeying a law or rule", example: "Economic sanctions penalize non-compliant manufacturing states.", exampleTr: "Ekonomik yaptırımlar kurallara uymayan üretici devletleri cezalandırır." },
  { id: "v23_9", word: "convention", phonetic: "/kənˈven.ʃən/", type: "noun", tr: "sözleşme, resmi konvansiyon", enDef: "an agreement between states covering matters of mutual concern", example: "The Geneva convention regulates dangerous waste transport.", exampleTr: "Cenevre sözleşmesi tehlikeli atık taşımacılığını düzenler." },
  { id: "v23_10", word: "binding", phonetic: "/ˈbaɪn.dɪŋ/", type: "adj", tr: "yasal olarak bağlayıcı", enDef: "involving an obligation that cannot be broken", example: "Delegates demanded legally binding targets for ocean protection.", exampleTr: "Delegeler okyanus koruma için yasal olarak bağlayıcı hedefler talep etti." },

  // Day 24: Biotechnology & Genetic Engineering
  { id: "v24_1", word: "modification", phonetic: "/ˌmɑː.də.fəˈkeɪ.ʃən/", type: "noun", tr: "modifikasyon, genetik değişiklik", enDef: "the making of a limited change in something", example: "Genetic modification enhances crop resilience against arid climates.", exampleTr: "Genetik modifikasyon ürünlerin kurak iklimlere karşı direncini artırır." },
  { id: "v24_2", word: "vector", phonetic: "/ˈvek.tɚ/", type: "noun", tr: "taşıyıcı vektör (virüs/plazmit)", enDef: "an organism or virus that transmits disease or genetic material", example: "Viral vectors carry corrective therapeutic genes into target cell nuclei.", exampleTr: "Viral vektörler düzeltici tedavi genlerini hedef hücre çekirdeklerine taşır." },
  { id: "v24_3", word: "enzyme", phonetic: "/ˈen.zaɪm/", type: "noun", tr: "enzim", enDef: "a substance produced by a living organism which acts as a catalyst", example: "Endonuclease enzymes cleave double-stranded DNA at exact sites.", exampleTr: "Endonükleaz enzimleri çift sarmallı DNA'yı tam belirlenen bölgelerden keser." },
  { id: "v24_4", word: "pathogen", phonetic: "/ˈpæθ.ə.dʒən/", type: "noun", tr: "patojen, hastalık yapıcı mikrop", enDef: "a bacterium, virus, or microorganism that causes disease", example: "Plant geneticists engineered crops immune to fungal pathogens.", exampleTr: "Bitki genetikçileri mantar patojenlerine karşı bağışık ürünler tasarladılar." },
  { id: "v24_5", word: "sequence", phonetic: "/ˈsiː.kwəns/", type: "noun", tr: "dizilim, gen sekansı", enDef: "the order of nucleotide bases in a DNA molecule", example: "Researchers deciphered the complete rice genome sequence.", exampleTr: "Araştırmacılar pirincin tüm genom dizilimini deşifre ettiler." },
  { id: "v24_6", word: "mutation", phonetic: "/mjuːˈteɪ.ʃən/", type: "noun", tr: "mutasyon, genetik sapma", enDef: "the changing of the structure of a gene", example: "Targeted editing corrects pathogenic mutations responsible for cystic fibrosis.", exampleTr: "Hedefe yönelik düzenleme kistik fibrozise neden olan patojenik mutasyonları düzeltir." },
  { id: "v24_7", word: "therapy", phonetic: "/ˈθer.ə.pi/", type: "noun", tr: "terapi, tedavi", enDef: "treatment intended to relieve or heal a disorder", example: "Cellular gene therapy offers hope to individuals with sickle cell anemia.", exampleTr: "Hücresel gen terapisi orak hücre anemisi olan bireylere umut sunuyor." },
  { id: "v24_8", word: "agronomy", phonetic: "/əˈɡrɑː.nə.mi/", type: "noun", tr: "tarım bilimi, agronomi", enDef: "the science of soil management and crop production", example: "Biotech agronomy focuses on engineering bio-fortified staple grains.", exampleTr: "Biyoteknolojik tarım bilimi biyolojik olarak zenginleştirilmiş temel tahıllar üretmeye odaklanır." },
  { id: "v24_9", word: "insertion", phonetic: "/ɪnˈsɝː.ʃən/", type: "noun", tr: "araya ekleme, gen yerleştirme", enDef: "the action of inserting something", example: "Precise gene insertion prevents disruptive off-target cellular consequences.", exampleTr: "Hassas gen ekleme hedef dışı hücresel aksaklıkları önler." },
  { id: "v24_10", word: "precision", phonetic: "/prəˈsɪʒ.ən/", type: "noun", tr: "kesinlik, hassasiyet", enDef: "the fact of being exact and accurate", example: "CRISPR platforms deliver base-pair editing with surgical precision.", exampleTr: "CRISPR platformları cerrahi hassasiyetle baz çifti düzenlemesi sağlar." },

  // Day 25: Hydrothermal Vents & Extremophile Biology
  { id: "v25_1", word: "chemosynthesis", phonetic: "/ˌkiː.moʊˈsɪn.θə.sɪs/", type: "noun", tr: "kemosentez (kimyasal enerjiyle besin üretimi)", enDef: "the biological synthesis of organic compounds from chemical energy", example: "Abyssal microbes sustain food webs solely through chemosynthesis.", exampleTr: "Abisal mikroplar besin ağlarını yalnızca kemosentez yoluyla ayakta tutarlar." },
  { id: "v25_2", word: "geothermal", phonetic: "/ˌdʒiː.oʊˈθɝː.məl/", type: "adj", tr: "jeotermal, yer altı ısısına ait", enDef: "relating to or produced by the internal heat of the earth", example: "Geothermal ocean chimneys eject scorching, mineral-dense water.", exampleTr: "Jeotermal okyanus bacaları kaynar, mineralce zengin su püskürtür." },
  { id: "v25_3", word: "abyss", phonetic: "/əˈbɪs/", type: "noun", tr: "abis, dipsiz derinlik", enDef: "a deep or seemingly bottomless chasm or ocean depth", example: "Strange bioluminescent species thrive in the pitch-black abyss.", exampleTr: "Karanlık abiste tuhaf biyolüminesans canlılar yaşam sürer." },
  { id: "v25_4", word: "venting", phonetic: "/ˈvent.ɪŋ/", type: "noun", tr: "fışkırma, bacadan çıkış", enDef: "the release of gas or liquid through an opening", example: "Subsea hydrothermal venting enriches deep water with sulfur and copper.", exampleTr: "Denizaltı hidrotermal çıkışları derin suları kükürt ve bakırla zenginleştirir." },
  { id: "v25_5", word: "benthic", phonetic: "/ˈben.θɪk/", type: "adj", tr: "bentik, deniz tabanına ait", enDef: "relating to the lowest level of a body of water", example: "Benthic crab colonies gather around warm sulfur spires.", exampleTr: "Bentik yengeç kolonileri ılık kükürt kuleleri etrafında toplanırlar." },
  { id: "v25_6", word: "symbiotic", phonetic: "/ˌsɪm.baɪˈɑː.t̬ɪk/", type: "adj", tr: "simbiyotik, ortakyaşar", enDef: "involving interaction between two different organisms living in close association", example: "Giant tube worms host symbiotic sulfur-oxidizing bacteria in their plumes.", exampleTr: "Dev tüp solucanları püsküllerinde kükürt oksitleyen ortakyaşar bakteriler barındırır." },
  { id: "v25_7", word: "microbial", phonetic: "/maɪˈkroʊ.bi.əl/", type: "adj", tr: "mikrobiyal, mikroplara ait", enDef: "relating to or characteristic of a microorganism", example: "Thick microbial mats cover the basalt volcanic seafloor.", exampleTr: "Kalın mikrobiyal örtüler bazalt volkanik deniz tabanını kaplar." },
  { id: "v25_8", word: "toxicity", phonetic: "/tɑːkˈsɪs.ə.t̬i/", type: "noun", tr: "toksisite, zehirlilik derecesi", enDef: "the quality of being toxic or poisonous", example: "Extremophiles neutralize heavy metal toxicity through protective enzymes.", exampleTr: "Ekstremofiller ağır metal toksisitesini koruyucu enzimler aracılığıyla etkisiz hale getirir." },
  { id: "v25_9", word: "pressurization", phonetic: "/ˌpreʃ.ɚ.aɪˈzeɪ.ʃən/", type: "noun", tr: "basınç altında olma", enDef: "the act of maintaining pressure within a container or system", example: "Extreme hydrostatic pressurization crushes unreinforced titanium submersibles.", exampleTr: "Aşırı hidrostatik basınç güçlendirilmemiş titanyum denizaltıları ezer." },
  { id: "v25_10", word: "mineral", phonetic: "/ˈmɪn.ər.əl/", type: "noun", tr: "mineral", enDef: "a solid, naturally occurring inorganic substance", example: "Black smokers precipitate rich polymetallic mineral deposits.", exampleTr: "Kara bacalar zengin polimetalik mineral birikintileri çöktürür." },

  // Day 26: Glaciology & Antarctic Ice Sheet Dynamics
  { id: "v26_1", word: "accumulation", phonetic: "/əˌkjuː.mjəˈleɪ.ʃən/", type: "noun", tr: "birikim, toplanma", enDef: "the acquisition or gradual gathering of something", example: "Annual snow accumulation fails to replenish peripheral glacier loss.", exampleTr: "Yıllık kar birikimi çevre buzul kayıplarını telafi edemiyor." },
  { id: "v26_2", word: "calving", phonetic: "/ˈkæv.ɪŋ/", type: "noun", tr: "buzul kopması (buzdağı oluşumu)", enDef: "the breaking off of masses of ice from a glacier or iceberg", example: "Spectacular iceberg calving events reshape polar fjord coastlines.", exampleTr: "Görkemli buzdağı kopma olayları kutup fiyort kıyı şeritlerini yeniden şekillendiriyor." },
  { id: "v26_3", word: "meltwater", phonetic: "/ˈmeltˌwɔː.t̬ɚ/", type: "noun", tr: "eriyen buzul suyu", enDef: "water formed by the melting of snow and ice", example: "Subglacial meltwater accelerates outlet glacier flow toward the sea.", exampleTr: "Buzul altı eriyen su çıkış buzulunun denize doğru akışını hızlandırır." },
  { id: "v26_4", word: "retreat", phonetic: "/rɪˈtriːt/", type: "noun", tr: "geri çekilme, küçülme", enDef: "the act of withdrawing or diminishing", example: "The rapid retreat of the Thwaites Glacier alarms oceanographers.", exampleTr: "Thwaites Buzulu'nun hızlı geri çekilmesi oşinografları telaşlandırıyor." },
  { id: "v26_5", word: "equilibrium", phonetic: "/ˌiː.kwəˈlɪb.ri.əm/", type: "noun", tr: "denge hali", enDef: "a state of physical balance", example: "Antarctic mass equilibrium depends on atmospheric precipitation rates.", exampleTr: "Antarktika kütle dengesi atmosferik yağış oranlarına bağlıdır." },
  { id: "v26_6", word: "fracture", phonetic: "/ˈfræk.tʃɚ/", type: "noun", tr: "çatlak, kırılma", enDef: "the cracking or breaking of a hard object or material", example: "Transverse fractures propagate rapidly across unpinned ice shelves.", exampleTr: "Enlemesine çatlaklar dayanağı olmayan buz sahanlıkları boyunca hızla yayılır." },
  { id: "v26_7", word: "crevasse", phonetic: "/krəˈvæs/", type: "noun", tr: "buzul yarığı", enDef: "a deep open crack, especially one in a glacier", example: "Glaciologists navigate hazardous crevasse fields with ground-penetrating radar.", exampleTr: "Buzulbilimciler tehlikeli buzul yarığı alanlarında yer radarıyla yol alır." },
  { id: "v26_8", word: "surge", phonetic: "/sɝːdʒ/", type: "noun", tr: "ani yükseliş, fışkırma, taşma", enDef: "a sudden powerful forward or upward movement", example: "Tidewater glaciers periodically surge forward by tens of meters daily.", exampleTr: "Gelgit buzulları periyodik olarak günde onlarca metre ileriye doğru aniden taşar." },
  { id: "v26_9", word: "satellite", phonetic: "/ˈsæt̬.əl.aɪt/", type: "noun", tr: "uydu", enDef: "an artificial body placed in orbit round the earth", example: "Interferometric satellite radar tracks millimeter-scale ice velocity shifts.", exampleTr: "Girişimölçer uydu radarı milimetre ölçeğinde buz hızı değişimlerini izler." },
  { id: "v26_10", word: "velocity", phonetic: "/vəˈlɑː.sə.t̬i/", type: "noun", tr: "hız, sürat", enDef: "the speed of something in a given direction", example: "Ice stream velocity increases as basal friction is eliminated.", exampleTr: "Taban sürtünmesi ortadan kalktıkça buz akıntısı hızı artar." },

  // Day 27: Bioethics & Artificial Intelligence in Healthcare
  { id: "v27_1", word: "consent", phonetic: "/kənˈsent/", type: "noun", tr: "rıza, onay", enDef: "permission for something to happen or agreement to do something", example: "Informed consent must be secured before patients undergo clinical trials.", exampleTr: "Hastalar klinik deneylere girmeden önce bilgilendirilmiş rıza alınmalıdır." },
  { id: "v27_2", word: "autonomy", phonetic: "/ɑːˈtɑː.nə.mi/", type: "noun", tr: "özerklik, kendi kaderini tayin etme", enDef: "the right or condition of self-government; freedom from external control", example: "Medical ethics prioritize patient autonomy over paternalistic directives.", exampleTr: "Tıp etiği hasta özerkliğini paternalist yönlendirmelerin önünde tutar." },
  { id: "v27_3", word: "fiduciary", phonetic: "/fɪˈduː.ʃi.er.i/", type: "adj", tr: "güvene dayalı, vekalet sorumluluğu taşıyan", enDef: "involving trust, especially with regard to the relationship between a trustee and a beneficiary", example: "Physicians maintain a sacred fiduciary duty toward their patients.", exampleTr: "Hekimler hastalarına karşı kutsal bir güvene dayalı vekalet görevi taşırlar." },
  { id: "v27_4", word: "bias", phonetic: "/ˈbaɪ.əs/", type: "noun", tr: "önyargı, yanlılık", enDef: "prejudice in favor of or against one thing, person, or group", example: "Algorithmic bias in diagnostic software can disadvantage minority populations.", exampleTr: "Tanı yazılımındaki algoritmik yanlılık azınlık popülasyonlarını dezavantajlı duruma düşürebilir." },
  { id: "v27_5", word: "transparency", phonetic: "/trænˈspær.ən.si/", type: "noun", tr: "şeffaflık", enDef: "the condition of being easy to perceive or detect; open to scrutiny", example: "Clinical AI platforms must exhibit algorithmic transparency.", exampleTr: "Klinik yapay zeka platformları algoritmik şeffaflık sergilemelidir." },
  { id: "v27_6", word: "beneficence", phonetic: "/bəˈnef.ə.səns/", type: "noun", tr: "yararlılık, iyilik etme ilkesi", enDef: "the quality of doing good; active kindness or charity", example: "The principle of beneficence requires doctors to act in the patient's best interest.", exampleTr: "Yararlılık ilkesi doktorların hastanın en üstün yararına hareket etmesini gerektirir." },
  { id: "v27_7", word: "algorithmic", phonetic: "/ˌæl.ɡəˈrɪð.mɪk/", type: "adj", tr: "algoritmik", enDef: "relating to or using a process or set of rules", example: "Algorithmic recommendations should remain subservient to professional clinical judgment.", exampleTr: "Algoritmik tavsiyeler profesyonel klinik muhakemenin emrinde kalmalıdır." },
  { id: "v27_8", word: "protocol", phonetic: "/ˈproʊ.t̬ə.kɑːl/", type: "noun", tr: "protokol, kural dizisi", enDef: "the official procedure or system of rules governing affairs of state or ethics", example: "Strict hospital protocols govern the handling of identifiable genomic data.", exampleTr: "Sıkı hastane protokolleri tanımlanabilir genomik verilerin işlenmesini yönetir." },
  { id: "v27_9", word: "accountability", phonetic: "/əˌkaʊn.t̬əˈbɪl.ə.t̬i/", type: "noun", tr: "hesap verebilirlik, sorumluluk", enDef: "the fact or condition of being accountable; responsibility", example: "Software engineers must accept moral accountability for diagnostic errors.", exampleTr: "Yazılım mühendisleri tanı hataları konusunda ahlaki hesap verebilirliği kabul etmelidir." },
  { id: "v27_10", word: "oversight", phonetic: "/ˈoʊ.vɚ.saɪt/", type: "noun", tr: "denetim, gözetim", enDef: "the action of overseeing something; regulatory supervision", example: "Institutional review boards provide rigorous ethical oversight for novel therapies.", exampleTr: "Kurumsal inceleme kurulları yeni tedaviler için titiz etik denetim sağlar." }
];


window.CURRICULUM_DAYS_DATABASE = {
  1: {
    day: 1,
    isCheckpoint: false,
    theme: "Marine Biology: Coral Bleaching & Ocean Acidification",
    titleTr: "1. Gün: Present Simple & Mercan Resifleri ve Deniz Ekosistemi",
    grammar: window.ALL_TENSES_LIST[0],
    words: window.ACADEMIC_VOCABULARY_POOL.slice(0, 10),
    reading: {
      title: "The Fragile Equilibrium of Coral Reef Ecosystems",
      titleTr: "Mercan Resifi Ekosistemlerinin Kırılgan Dengesi",
      sentences: [
        {
          id: "d1_s1",
          en: "Tropical coral reefs support extraordinary marine biodiversity, yet ongoing climate fluctuations trigger severe habitat degradation across equatorial waters.",
          tr: "Tropikal mercan resifleri olağanüstü bir denizel biyoçeşitliliği destekler, ancak süregelen iklim dalgalanmaları ekvator sularında şiddetli yaşam alanı tahribatını tetikler.",
          analysis: "Present Simple ('support', 'trigger') genel bilimsel gerçekleri aktarır; 'biodiversity' ve 'degradation' hedef akademik kelimelerdir."
        },
        {
          id: "d1_s2",
          en: "Industrial carbon emission alters seawater chemistry because excess carbon dioxide drives oceanic acidification and causes fragile reef structures to deteriorate rapidly.",
          tr: "Sanayi kaynaklı karbon salınımı deniz suyu kimyasını değiştirir; çünkü aşırı karbondioksit okyanus asitlenmesine yol açarak kırılgan resif yapılarının hızla kötüleşmesine neden olur.",
          analysis: "'emission' tekil öznesi ile 'alters' fiili 3. tekil şahıs '-s' kuralını örnekler; 'deteriorate' fiili bozulmayı ifade eder."
        },
        {
          id: "d1_s3",
          en: "When commercial trawlers deplete local fish stocks and chemical contamination poisons lagoons, the entire coastal ecosystem loses its natural resilience.",
          tr: "Ticari trol gemileri yerel balık stoklarını tükettiğinde ve kimyasal kirlenme lagünleri zehirlediğinde, tüm kıyı ekosistemi doğal direncini kaybeder.",
          analysis: "Zaman bağlacı 'when' ile kurulan geniş zaman cümlesinde 'deplete', 'contamination' ve 'ecosystem' kelimeleri sentezlenmiştir."
        },
        {
          id: "d1_s4",
          en: "Consequently, marine biologists strive to conserve vulnerable maritime sanctuaries through sustainable aquaculture protocols.",
          tr: "Sonuç olarak, deniz biyologları sürdürülebilir su ürünleri yetiştiriciliği protokolleri aracılığıyla savunmasız deniz koruma alanlarını korumaya çabalarlar.",
          analysis: "'strive to conserve' ve 'sustainable' kelimeleri bilimsel amaç ve yöntem bildiren Present Simple yapısıyla sunulmuştur."
        },
        {
          id: "d1_s5",
          en: "Without urgent global intervention, scientists predict catastrophic collapses in reef fisheries that directly sustain coastal communities.",
          tr: "Acil küresel müdahale olmaksızın bilim insanları, kıyı topluluklarını doğrudan besleyen resif balıkçılığında felaket niteliğinde çöküşler öngörmektedir.",
          analysis: "'scientists predict' ve 'directly sustain' ifadeleriyle 'catastrophic' hedef kelimesi akademik bir uyarı tonunda kullanılmıştır."
        }
      ],
      wordDictionary: {
        "biodiversity": "biyoçeşitlilik",
        "degradation": "bozulma, tahribat",
        "emission": "salınım",
        "conserve": "korumak, muhafaza etmek",
        "sustainable": "sürdürülebilir",
        "deplete": "tüketmek, azaltmak",
        "contamination": "kirlenme, bulaşma",
        "catastrophic": "felaket niteliğinde, yıkıcı",
        "ecosystem": "ekosistem",
        "deteriorate": "kötüleşmek, bozulmak",
        "reefs": "resifler",
        "sanctuaries": "koruma alanları, sığınaklar",
        "acidification": "asitlenme",
        "resilience": "dayanıklılık, toparlanma gücü"
      }
    }
  },

  2: {
    day: 2,
    isCheckpoint: false,
    theme: "AI & Clinical Robotics in Modern Medicine",
    titleTr: "2. Gün: Present Continuous & Tıbbi Tanı Laboratuvarlarında Yapay Zeka",
    grammar: window.ALL_TENSES_LIST[1],
    words: window.ACADEMIC_VOCABULARY_POOL.slice(10, 20),
    reading: {
      title: "The Digital Transformation of Medical Diagnostic Laboratories",
      titleTr: "Tıbbi Tanı Laboratuvarlarının Dijital Dönüşümü",
      sentences: [
        {
          id: "d2_s1",
          en: "Modern biomedical engineers are working tirelessly to revolutionize hospital diagnostics through innovative neural networks.",
          tr: "Modern biyomedikal mühendisleri, yenilikçi yapay sinir ağları aracılığıyla hastane teşhislerinde devrim yaratmak için yorulmadan çalışıyorlar.",
          analysis: "Present Continuous ('are working') günümüzde devam eden teknolojik süreci ifade eder; 'revolutionize' ve 'innovative' hedef kelimelerdir."
        },
        {
          id: "d2_s2",
          en: "Top research universities are currently developing sophisticated robotic instruments that automate repetitive pathology testing with unmatched precision.",
          tr: "Önde gelen araştırma üniversiteleri, tekrarlayan patoloji testlerini benzersiz bir hassasiyetle otomatikleştiren gelişmiş robotik aygıtları şu anda geliştirmektedir.",
          analysis: "'are currently developing' zaman zarfıyla şimdiki süreci vurgular; 'sophisticated' ve 'automate' organik olarak kullanılmıştır."
        },
        {
          id: "d2_s3",
          en: "Clinicians are witnessing a major breakthrough as deep-learning algorithms facilitate early tumor detection in radiology wards.",
          tr: "Derin öğrenme algoritmaları radyoloji servislerinde erken tümör tespitini kolaylaştırırken, klinisyenler büyük bir çığır açılışına tanıklık ediyorlar.",
          analysis: "'are witnessing' ve 'facilitate' fiilleri güncel eğilimi belgeler; 'breakthrough' akademik başarıyı niteler."
        },
        {
          id: "d2_s4",
          en: "Meanwhile, hospitals are replacing obsolete paper records as each handheld wireless device is actively monitoring vital signs in real time.",
          tr: "Bu sırada, el tipi kablosuz her bir cihaz hayati belirtileri gerçek zamanlı olarak aktif biçimde izlerken hastaneler kullanımdan kalkmış kağıt kayıtları değiştirmektedir.",
          analysis: "'are replacing' ve 'is actively monitoring' eşzamanlı devam eden iki dijitalleşme sürecini 'obsolete' ve 'device' ile birleştirir."
        },
        {
          id: "d2_s5",
          en: "Worldwide healthcare networks are increasingly discovering how artificial intelligence is transforming preventive medicine and patient management.",
          tr: "Dünya çapındaki sağlık ağları, yapay zekanın koruyucu hekimliği ve hasta yönetimini nasıl dönüştürdüğünü giderek artan bir hızla keşfediyor.",
          analysis: "'are increasingly discovering' ve 'is transforming' çift Present Continuous yapısıyla 'artificial' kelimesini bağlar."
        }
      ],
      wordDictionary: {
        "revolutionize": "devrim yaratmak",
        "innovative": "yenilikçi, inovatif",
        "sophisticated": "gelişmiş, karmaşık",
        "breakthrough": "büyük buluş, çığır açma",
        "automate": "otomatikleştirmek",
        "obsolete": "kullanımdan kalkmış, demode",
        "facilitate": "kolaylaştırmak",
        "device": "cihaz, aygıt",
        "transform": "dönüştürmek",
        "artificial": "yapay, suni",
        "diagnostics": "tanı bilimi, teşhisler",
        "pathology": "patoloji",
        "radiology": "radyoloji"
      }
    }
  },

  3: {
    day: 3,
    isCheckpoint: false,
    theme: "Historical Evolution of University Curricula",
    titleTr: "3. Gün: Past Simple & Yükseköğretim Müfredatının Evrimi",
    grammar: window.ALL_TENSES_LIST[2],
    words: window.ACADEMIC_VOCABULARY_POOL.slice(20, 30),
    reading: {
      title: "Pedagogical Shifts in Nineteenth-Century Universities",
      titleTr: "19. Yüzyıl Üniversitelerinde Pedagojik Dönüşümler",
      sentences: [
        {
          id: "d3_s1",
          en: "During the nineteenth century, European universities modernized their core curriculum to incorporate empirical scientific investigation.",
          tr: "On dokuzuncu yüzyılda Avrupa üniversiteleri, deneysel bilimsel araştırmayı dahil etmek amacıyla temel müfredatlarını modernize etti.",
          analysis: "Past Simple ('modernized') belirli bir geçmiş tarih aralığını anlatır; 'curriculum' hedef akademik kelimedir."
        },
        {
          id: "d3_s2",
          en: "Scholars realized that students needed to acquire scientific literacy rather than merely memorizing classical theological texts.",
          tr: "Akademisyenler, öğrencilerin sadece klasik ilahiyat metinlerini ezberlemek yerine bilimsel okuryazarlık edinmeleri gerektiğini fark etti.",
          analysis: "'realized' ve 'needed to acquire' geçmişte tamamlanmış idraki; 'literacy' ise hedeflenen akademik beceriyi ifade eder."
        },
        {
          id: "d3_s3",
          en: "Reformers introduced progressive pedagogy and established comprehensive seminar systems that aimed to cultivate critical analytical competence.",
          tr: "Reformcular ilerici pedagojiyi tanıttı ve eleştirel analitik yetkinliği geliştirmeyi amaçlayan kapsamlı seminer sistemleri kurdu.",
          analysis: "Düzenli ('introduced', 'aimed') ve düzensiz geçmiş yapılar ('cultivate competence', 'comprehensive pedagogy') dengelenmiştir."
        },
        {
          id: "d3_s4",
          en: "Although high tuition fees initially restricted access to affluent families, public endowments gradually expanded opportunities across every academic discipline.",
          tr: "Yüksek öğretim harçları başlangıçta erişimi varlıklı ailelerle sınırlandırsa da, kamu bağışları fırsatları her akademik disiplinde kademeli olarak genişletti.",
          analysis: "'restricted' ve 'expanded' zıtlığıyla 'tuition' ve 'discipline' kelimeleri tarihsel ekonomi bağlamında işlenmiştir."
        },
        {
          id: "d3_s5",
          en: "Faculty boards standardized rigorous examination formats, which marked the historic debut of objective standardized assessment in higher education.",
          tr: "Fakülte kurulları titiz sınav formatlarını standartlaştırdı; bu da yükseköğretimde nesnel standart değerlendirmenin tarihi başlangıcını simgeledi.",
          analysis: "'standardized' ve 'marked' fiilleri 'assessment' kavramının akademik tarihteki doğuşunu Past Simple ile belgeler."
        }
      ],
      wordDictionary: {
        "curriculum": "öğretim programı, müfredat",
        "acquire": "edinmek, kazanmak",
        "literacy": "okuryazarlık, yetkinlik",
        "pedagogy": "öğretim yöntemi, pedagoji",
        "comprehensive": "kapsamlı, etraflı",
        "cultivate": "geliştirmek, beslemek",
        "competence": "yetkinlik, yeterlilik",
        "tuition": "öğretim ücreti, harç",
        "discipline": "akademik dal, disiplin",
        "assessment": "değerlendirme, ölçme",
        "endowments": "vakıf gelirleri, bağışlar",
        "empirical": "deneysel, görgül"
      }
    }
  },

  4: {
    day: 4,
    isCheckpoint: false,
    theme: "Epidemics & Public Health Responses in Industrial Cities",
    titleTr: "4. Gün: Past Continuous & Kentsel Hijyen ve 19. Yüzyıl Salgınları",
    grammar: window.ALL_TENSES_LIST[3],
    words: window.ACADEMIC_VOCABULARY_POOL.slice(30, 40),
    reading: {
      title: "Urban Sanitation and the Battle Against Nineteenth-Century Epidemics",
      titleTr: "Kentsel Hijyen ve 19. Yüzyıl Salgınlarıyla Mücadele",
      sentences: [
        {
          id: "d4_s1",
          en: "In Victorian London, a devastating cholera epidemic was spreading rapidly while municipal engineers were still constructing subterranean drainage tunnels.",
          tr: "Viktorya dönemi Londra'sında belediye mühendisleri henüz yer altı kanalizasyon tünellerini inşa ederken, yıkıcı bir kolera salgını hızla yayılıyordu.",
          analysis: "Past Continuous ('was spreading', 'were constructing') geçmişte eşzamanlı süren kriz ve inşaat sürecini 'while' ile bağlar."
        },
        {
          id: "d4_s2",
          en: "Medical staff were noticing that factory laborers living sedentary indoor lifestyles without nutritious food suffered persistent chronic ailments.",
          tr: "Sağlık personeli, besleyici gıdadan yoksun ve kapalı alanlarda hareketsiz bir yaşam süren fabrika işçilerinin sürekli kronik hastalıklardan muzdarip olduğunu fark ediyordu.",
          analysis: "'were noticing' arka plan gözlemini aktarırken 'sedentary', 'nutritious' ve 'chronic' kelimeleri sağlık şartlarını betimler."
        },
        {
          id: "d4_s3",
          en: "While pioneering doctors were attempting to prescribe preventative sanitary guidelines, most apothecaries were relying on traditional herbal remedy concoctions.",
          tr: "Öncü doktorlar önleyici sıhhi kurallar reçete etmeye çalışırken, çoğu eczacı geleneksel bitkisel çare karışımlarına güveniyordu.",
          analysis: "'were attempting to prescribe' ve 'were relying' geçmişteki zıt tıbbi yaklaşımları 'preventative' ve 'remedy' ile sentezler."
        },
        {
          id: "d4_s4",
          en: "Epidemiologist John Snow was formulating an accurate waterborne diagnosis while impoverished slums were proving exceptionally susceptible to toxic well water.",
          tr: "Epidemiyolog John Snow doğru bir su kaynaklı bulaşma teşhisi formüle ederken, yoksul gecekondular zehirli kuyu suyuna karşı olağanüstü derecede duyarlı çıkıyordu.",
          analysis: "'was formulating' ve 'were proving' süreçleri 'diagnosis' ve 'susceptible' kelimelerini tarihsel vaka analizinde birleştirir."
        },
        {
          id: "d4_s5",
          en: "Volunteer nurses were establishing field infirmaries to rehabilitate contaminated patients while the public health board was debating emergency quarantines.",
          tr: "Halk sağlığı kurulu acil durum karantinalarını tartışırken, gönüllü hemşireler zehirlenmiş hastaları rehabilite etmek için sahra revirleri kurmaktaydı.",
          analysis: "'were establishing' ve 'was debating' Past Continuous formları 'rehabilitate' hedef kelimesiyle tarihi sahneyi tamamlar."
        }
      ],
      wordDictionary: {
        "epidemic": "salgın hastalık",
        "sedentary": "hareketsiz, masa başı",
        "nutritious": "besleyici",
        "chronic": "kronik, sürekli",
        "prescribe": "reçete etmek, buyurmak",
        "preventative": "önleyici, koruyucu",
        "diagnosis": "teşhis, tanı",
        "rehabilitate": "rehabilite etmek, iyileştirmek",
        "susceptible": "duyarlı, hassas, savunmasız",
        "remedy": "çare, deva, tedavi",
        "infirmaries": "revirler",
        "subterranean": "yer altı"
      }
    }
  },

  5: {
    day: 5,
    isCheckpoint: false,
    theme: "Urban Infrastructure & Socio-Economic Disparity",
    titleTr: "5. Gün: Present Perfect & Küresel Kentleşme ve Altyapı Uçurumu",
    grammar: window.ALL_TENSES_LIST[4],
    words: window.ACADEMIC_VOCABULARY_POOL.slice(40, 50),
    reading: {
      title: "Global Urbanization: The Widening Infrastructure Divide",
      titleTr: "Küresel Kentleşme: Genişleyen Altyapı Uçurumu",
      sentences: [
        {
          id: "d5_s1",
          en: "Over the past three decades, rapid global urbanization has placed unprecedented pressure on municipal infrastructure around the world.",
          tr: "Son otuz yılda hızlı küresel kentleşme, dünya çapındaki belediye altyapısı üzerinde eşi görülmemiş bir baskı oluşturmuştur.",
          analysis: "Present Perfect ('has placed') geçmişten günümüze uzanan süreci 'over the past three decades' zaman zarfıyla ve 'infrastructure' ile aktarır."
        },
        {
          id: "d5_s2",
          en: "Although metropolitan commercial centers have generated immense financial prosperity, the widening socio-economic disparity has alarmed urban sociologists.",
          tr: "Büyükşehir ticaret merkezleri muazzam bir mali refah yaratmış olsa da, genişleyen sosyo-ekonomik uçurum kent sosyologlarını tedirgin etmiştir.",
          analysis: "'have generated' ve 'has alarmed' fiilleri 'prosperity' ve 'disparity' kelimeleri arasındaki tezatı ortaya koyar."
        },
        {
          id: "d5_s3",
          en: "Several progressive city councils have decided to subsidize public transit to stimulate local economic mobility despite escalating inflation.",
          tr: "Birkaç ilerici belediye meclisi, tırmanan enflasyona rağmen yerel ekonomik hareketliliği canlandırmak için toplu taşımayı sübvanse etmeye karar vermiştir.",
          analysis: "'have decided to subsidize' ve 'stimulate inflation' yapıları Present Perfect'in güncel politika sonuçlarını vurgular."
        },
        {
          id: "d5_s4",
          en: "Unchecked corporate conglomerates have established a virtual utility monopoly, which has driven consumer energy costs to record peaks.",
          tr: "Denetlenmeyen kurumsal devler, tüketici enerji maliyetlerini rekor seviyelere çıkaran fiili bir kamu hizmeti tekeli kurmuştur.",
          analysis: "'have established' ve 'has driven' eylemleri 'monopoly' kelimesinin piyasa üzerindeki kalıcı etkisini açıklar."
        },
        {
          id: "d5_s5",
          en: "Volatile global commodity prices have boosted corporate revenue in export hubs, but real wages have remained largely stagnant for average factory workers.",
          tr: "Dalgalı küresel emtia fiyatları ihracat merkezlerindeki şirket gelirlerini artırmıştır, ancak reel ücretler ortalama fabrika işçileri için büyük ölçüde durgun kalmıştır.",
          analysis: "'have boosted' ve 'have remained stagnant' Present Perfect formları 'commodity' ve 'revenue' kelimeleriyle ekonomik analiz sunar."
        }
      ],
      wordDictionary: {
        "infrastructure": "altyapı",
        "prosperity": "refah, zenginlik",
        "disparity": "eşitsizlik, uçurum",
        "subsidize": "sübvanse etmek, mali desteklemek",
        "inflation": "enflasyon",
        "monopoly": "tekel, monopol",
        "stimulate": "canlandırmak, teşvik etmek",
        "commodity": "ticari mal, hammadde, emtia",
        "revenue": "gelir, hasılat",
        "stagnant": "durgun, durağan",
        "conglomerates": "büyük şirketler grubu",
        "urbanization": "kentleşme"
      }
    }
  },

  6: {
    day: 6,
    isCheckpoint: false,
    theme: "Mass Media, Cultural Heritage & Indigenous Communities",
    titleTr: "6. Gün: Present Perfect Continuous & Küreselleşme ve Yerli Miras",
    grammar: window.ALL_TENSES_LIST[5],
    words: window.ACADEMIC_VOCABULARY_POOL.slice(50, 60),
    reading: {
      title: "Preserving Intangible Indigenous Traditions Against Globalization",
      titleTr: "Küreselleşmeye Karşı Somut Olmayan Yerli Mirasın Korunması",
      sentences: [
        {
          id: "d6_s1",
          en: "For years, digital sociologists have been monitoring the pervasive influence of social media algorithms on contemporary public discourse.",
          tr: "Yıllardır dijital sosyologlar, sosyal medya algoritmalarının çağdaş kamusal söylem üzerindeki her yana yayılan etkisini izlemektedirler.",
          analysis: "Present Perfect Continuous ('have been monitoring') geçmişten bugüne kesintisiz süren araştırmayı 'pervasive' ile ifade eder."
        },
        {
          id: "d6_s2",
          en: "Media watchdogs have been reporting that partisan platforms routinely manipulate public sentiment, which has severely undermined journalistic credibility.",
          tr: "Medya denetleme kuruluşları, taraflı platformların kamuoyu duyarlılığını düzenli olarak manipüle ettiğini ve bunun gazetecilik güvenilirliğini zedelediğini bildirmektedir.",
          analysis: "'have been reporting' ve 'manipulate credibility' kalıbı kesintisiz süren medya eleştirisini aktarır."
        },
        {
          id: "d6_s3",
          en: "Journalists have been resisting state censorship while striving to maintain an impartial editorial stance under extreme political pressure.",
          tr: "Gazeteciler aşırı siyasi baskı altında tarafsız bir editoryal duruş sergilemeye çabalarken, devlet sansürüne karşı direnmektedirler.",
          analysis: "'have been resisting' yapısı 'censorship' ve 'impartial' hedef sıfatı ile süregelen mücadeleyi gösterir."
        },
        {
          id: "d6_s4",
          en: "Anthropologists have been working tirelessly alongside tribal elders to protect intangible cultural heritage from international commercial exploitation.",
          tr: "Antropologlar somut olmayan kültürel mirası uluslararası ticari sömürüden korumak için kabile büyükleriyle birlikte yorulmadan çalışmaktadırlar.",
          analysis: "'have been working' eylemi 'heritage' ve 'commercial exploitation' kelimelerini uzun soluklu bir koruma çabasıyla bağlar."
        },
        {
          id: "d6_s5",
          en: "Indigenous elders have been documenting authentic oral folklore to preserve ancestral languages while educational policies have been pressuring youth to assimilate.",
          tr: "Eğitim politikaları gençleri asimile olmaya zorlarken, yerli büyükler ata dillerini korumak amacıyla özgün sözlü folkloru belgelemektedirler.",
          analysis: "'have been documenting' ve 'have been pressuring' iki zıt süreci 'indigenous', 'authentic' ve 'assimilate' ile işler."
        }
      ],
      wordDictionary: {
        "pervasive": "her yana yayılan, sinen",
        "manipulate": "manipüle etmek, yönlendirmek",
        "credibility": "güvenilirlik, inandırıcılık",
        "censorship": "sansür, denetim",
        "impartial": "tarafsız, yansız",
        "heritage": "kültürel/tarihi miras",
        "authentic": "otantik, özgün, hakiki",
        "commercialize": "ticarileştirmek",
        "indigenous": "yerli, o toprağa özgü",
        "assimilate": "asimile olmak/etmek, özümsemek",
        "intangible": "somut olmayan, manevi",
        "watchdogs": "denetim organları"
      }
    }
  },

  8: {
    day: 8,
    isCheckpoint: false,
    theme: "Archaeology & The Decline of Mesopotamian Irrigation",
    titleTr: "8. Gün: Past Perfect & Mezopotamya Yerleşimlerinin Çöküşü",
    grammar: window.ALL_TENSES_LIST[6],
    words: window.ACADEMIC_VOCABULARY_POOL.slice(60, 70),
    reading: {
      title: "Soil Salinization and the Decline of Mesopotamian Settlements",
      titleTr: "Toprak Tuzlanması ve Mezopotamya Yerleşimlerinin Çöküşü",
      sentences: [
        {
          id: "d8_s1",
          en: "By the time twentieth-century archaeologists began to excavate the Mesopotamian basin, the ancient civilization had already vanished beneath shifting desert sands.",
          tr: "Yirminci yüzyıl arkeologları Mezopotamya havzasını kazmaya başladıklarında, kadim uygarlık yer değiştiren çöl kumlarının altında çoktan yok olmuştu.",
          analysis: "Past Perfect ('had already vanished'), 'began to excavate' eyleminden daha önce tamamlanmış geçmiş olayını vurgular; 'civilization' ana kelimedir."
        },
        {
          id: "d8_s2",
          en: "Centuries before external conquerors attacked, an elite priesthood hierarchy had concentrated political power within the monumental temple complexes.",
          tr: "Dış fatihler saldırmadan yüzyıllar önce, seçkin bir rahipler hiyerarşisi siyasi gücü anıtsal tapınak kompleksleri içinde toplamıştı.",
          analysis: "'had concentrated' geçmişin geçmişini anlatır; 'hierarchy' ve 'monumental' mimari ve sosyal düzeni tanımlar."
        },
        {
          id: "d8_s3",
          en: "Historical sedimentary cores revealed that the agricultural settlement had expanded continuously until prolonged drought had parched the river valleys.",
          tr: "Tarihsel tortu sondajları, uzayan kuraklık nehir vadilerini kavurana kadar tarımsal yerleşimin kesintisiz şekilde genişlemiş olduğunu ortaya koydu.",
          analysis: "'had expanded' ve 'had parched' ikili Past Perfect yapısıyla 'settlement' ve 'drought' arasındaki sebep-sonuç ilişkisini kurar."
        },
        {
          id: "d8_s4",
          en: "Farmers had engineered an intricate irrigation canal network, but severe soil salinization had poisoned the arable fields decades before the societal collapse.",
          tr: "Çiftçiler karmaşık bir sulama kanalı ağı tasarlamışlardı, ancak şiddetli toprak tuzlanması toplumsal çöküşten onlarca yıl önce ekilebilir tarlaları zehirlemişti.",
          analysis: "'had engineered' ve 'had poisoned' eylemleri 'irrigation' ve 'collapse' kelimelerini tarımsal felaket kronolojisine yerleştirir."
        },
        {
          id: "d8_s5",
          en: "Tribal inhabitants had completely abandoned their ancestral stone citadel long before modern descendants re-established nomadic encampments along the riverbanks.",
          tr: "Modern torunlar nehir kıyılarında göçebe kamplarını yeniden kurmadan çok önce, kabile sakinleri atalarından kalma taş kaleyi tamamen terk etmişlerdi.",
          analysis: "'had completely abandoned' yapısı 'abandon' ve 'descendants' kelimeleriyle nihai terki ve zaman sıralamasını gösterir."
        }
      ],
      wordDictionary: {
        "excavate": "kazmak, kazı yapmak",
        "civilization": "uygarlık, medeniyet",
        "hierarchy": "hiyerarşi, katmanlı düzen",
        "settlement": "yerleşim yeri",
        "collapse": "çöküş, çökme",
        "abandon": "terk etmek",
        "irrigation": "sulama",
        "monumental": "anıtsal, devasa",
        "drought": "kuraklık",
        "descendant": "torun, soyundan gelen",
        "salinization": "tuzlanma",
        "citadel": "kale, hisar"
      }
    }
  },

  9: {
    day: 9,
    isCheckpoint: false,
    theme: "Renaissance Astronomy & The Heliocentric Revolution",
    titleTr: "9. Gün: Past Perfect Continuous & Rönesans Astronomisi ve Güneş Sistemi",
    grammar: window.ALL_TENSES_LIST[7],
    words: window.ACADEMIC_VOCABULARY_POOL.slice(70, 80),
    reading: {
      title: "The Copernican Shift: Rethinking Celestial Dynamics",
      titleTr: "Kopernik Devrimi: Göksel Dinamikleri Yeniden Düşünmek",
      sentences: [
        {
          id: "d9_s1",
          en: "Before Galileo pointed his optical telescope toward Jupiter in 1610, medieval natural philosophers had been studying celestial bodies through naked-eye observations.",
          tr: "Galileo 1610'da optik teleskobunu Jüpiter'e çevirmeden önce, ortaçağ doğa filozofları göksel cisimleri çıplak gözle yapılan gözlemlerle incelemekteydiler.",
          analysis: "Past Perfect Continuous ('had been studying') 1610 yılındaki keşfe kadar yüzyıllarca süren kesintisiz gözlemi; 'telescope' ve 'celestial' hedeflerini vurgular."
        },
        {
          id: "d9_s2",
          en: "Astronomers had been calculating planetary orbits using geocentric epicycles for generations until Copernican geometry offered a far simpler trajectory.",
          tr: "Kopernik geometrisi çok daha basit bir hareket yörüngesi sunana kadar gökbilimciler, nesiller boyu yer merkezli episikller kullanarak gezegen yörüngelerini hesaplamaktaydılar.",
          analysis: "'had been calculating' süregelen matematiksel çabayı anlatır; 'orbit' ve 'trajectory' ana terimlerdir."
        },
        {
          id: "d9_s3",
          en: "Navigators had been relying on stellar navigation for transoceanic voyages long before modern physics explained how orbital gravity governed tides.",
          tr: "Modern fizik yörüngesel yerçekiminin gelgitleri nasıl yönettiğini açıklamadan çok önce, denizciler okyanus aşırı seferler için yıldızlara dayalı seyrüsefere güvenmekteydiler.",
          analysis: "'had been relying' eylemi 'navigation' ve 'gravity' kavramlarını tarihsel denizcilik pratiğinde buluşturur."
        },
        {
          id: "d9_s4",
          en: "Early theorists had been contemplating the infinite mysteries of the cosmos and dreaming of extraterrestrial life centuries prior to modern rocketry.",
          tr: "Modern roket biliminden yüzyıllar önce ilk teorisyenler, kozmosun sonsuz gizemleri üzerine kafa yormakta ve dünya dışı yaşamın hayalini kurmaktaydılar.",
          analysis: "'had been contemplating' entelektüel geçmişi resmeder; 'cosmos' ve 'extraterrestrial' kavramlarını bir araya getirir."
        },
        {
          id: "d9_s5",
          en: "Scientists had been experimenting with mathematical models of mechanical propulsion well before human engineers launched the first artificial satellite into low orbit.",
          tr: "İnsan mühendisler alçak yörüngeye ilk yapay uyduyu fırlatmadan çok önce, bilim insanları mekanik itme gücünün matematiksel modellerini denemekteydiler.",
          analysis: "'had been experimenting' geçmişte süregelen araştırmayı 'propulsion' ve 'satellite' kelimeleriyle aktarır."
        }
      ],
      wordDictionary: {
        "celestial": "göksel, semavi",
        "orbit": "yörünge",
        "trajectory": "yörünge eğrisi, hareket yolu",
        "telescope": "teleskop",
        "extraterrestrial": "dünya dışı",
        "propulsion": "itme gücü, sevk",
        "cosmos": "evren, kozmos",
        "navigation": "seyrüsefer, yön bulma",
        "gravity": "yerçekimi, çekim kuvveti",
        "satellite": "uydu",
        "epicycles": "ilave yörüngeler, episikller",
        "geocentric": "yer merkezli"
      }
    }
  },

  10: {
    day: 10,
    isCheckpoint: false,
    theme: "Grid Decarbonization & Renewable Energy Transition",
    titleTr: "10. Gün: Future Simple & Karbonsuz Şebekeler ve Yenilenebilir Enerji",
    grammar: window.ALL_TENSES_LIST[8],
    words: window.ACADEMIC_VOCABULARY_POOL.slice(80, 90),
    reading: {
      title: "Grid Decarbonization and Renewable Energy Integration",
      titleTr: "Şebeke Karbonsuzlaştırması ve Yenilenebilir Enerji Entegrasyonu",
      sentences: [
        {
          id: "d10_s1",
          en: "According to environmental projections, international utility consortia will install advanced photovoltaic arrays across millions of rooftops by 2035.",
          tr: "Çevre projeksiyonlarına göre, uluslararası kamu hizmeti konsorsiyumları 2035 yılına kadar milyonlarca çatıya gelişmiş fotovoltaik paneller kuracaktır.",
          analysis: "Future Simple ('will install') resmi projeksiyon bildiriminde 'photovoltaic' anahtar kelimesiyle kullanılmıştır."
        },
        {
          id: "d10_s2",
          en: "Engineers are going to modernize the continental electricity grid because wind and solar energy supplies fluctuate unpredictably throughout the seasons.",
          tr: "Mühendisler kıtasal elektrik şebekesini modernize edecekler; çünkü rüzgar ve güneş enerjisi kaynakları mevsimler boyunca öngörülemez şekilde dalgalanmaktadır.",
          analysis: "'are going to modernize' planlanmış teknik müdahaleyi anlatır; 'grid' ve 'fluctuate' hedef kelimelerdir."
        },
        {
          id: "d10_s3",
          en: "Nations with active volcanic geology will harness deep geothermal reservoirs to substitute depleted fossil-fuel baseload plants.",
          tr: "Aktif volkanik jeolojiye sahip ülkeler, tükenmiş fosil yakıtlı baz santrallerin yerine geçmesi için derin jeotermal rezervuarlardan yararlanacaktır.",
          analysis: "'will harness' ve 'to substitute' kalıpları 'geothermal' enerjinin gelecekteki rolünü netleştirir."
        },
        {
          id: "d10_s4",
          en: "Governments are going to offer attractive tax incentive packages to prove the financial feasibility and market viability of high-capacity storage batteries.",
          tr: "Hükümetler, yüksek kapasiteli depolama pillerinin mali uygulanabilirliğini ve pazar yaşayabilirliğini kanıtlamak için cazip vergi teşvik paketleri sunacaklar.",
          analysis: "'are going to offer' politik kararı; 'incentive', 'feasibility' ve 'viability' akademik iktisat terimlerini bağlar."
        },
        {
          id: "d10_s5",
          en: "Energy analysts confirm that expanding offshore turbine capacity will permanently slash industrial carbon footprints across major industrialized economies.",
          tr: "Enerji analistleri, açık deniz türbin kapasitesini artırmanın büyük sanayileşmiş ekonomilerde endüstriyel karbon ayak izlerini kalıcı olarak azaltacağını doğrulamaktadır.",
          analysis: "'will permanently slash' tahmin cümlesi 'capacity' terimiyle Future Simple yapısını sergiler."
        }
      ],
      wordDictionary: {
        "photovoltaic": "fotovoltaik, güneş enerjili",
        "grid": "elektrik şebekesi",
        "geothermal": "jeotermal, yer ısısı",
        "feasibility": "uygulanabilirlik, fizibilite",
        "fluctuate": "dalgalanmak, inip çıkmak",
        "harness": "yararlanmak, enerjisini kullanmak",
        "substitute": "yerine koymak, ikame etmek",
        "incentive": "teşvik, özendirici",
        "viability": "yaşayabilirlik, ticari sürdürülebilirlik",
        "capacity": "kapasite, üretim gücü",
        "decarbonization": "karbonsuzlaştırma",
        "baseload": "baz yük"
      }
    }
  },

  // Day 11: Future Continuous Tense
  11: {
    day: 11,
    isCheckpoint: false,
    theme: "Deep Space Exploration & Orbital Observatories",
    titleTr: "11. Gün: Future Continuous & Derin Uzay Keşfi",
    grammar: window.ALL_TENSES_LIST[9], // Future Continuous
    words: window.ACADEMIC_VOCABULARY_POOL.slice(90, 100),
    reading: {
      title: "Orbital Observatories: Mapping Deep Space Frontiers",
      titleTr: "Yörünge Gözlemevleri: Derin Uzay Sınırlarını Haritalandırmak",
      sentences: [
        {
          id: "d11_s1",
          en: "Throughout the upcoming decade, international space consortiums will be deploying next-generation infrared observatories into deep cosmic orbits.",
          tr: "Önümüzdeki on yıl boyunca, uluslararası uzay konsorsiyumları yeni nesil kızılötesi gözlemevlerini derin kozmik yörüngelere yerleştiriyor olacaklar.",
          analysis: "'will be deploying' yapısı gelecekte belirli bir dönem boyunca kesintisiz sürecek eylemi (Future Continuous) ifade eder."
        },
        {
          id: "d11_s2",
          en: "Ground telemetry stations will be monitoring delicate payload sensors around the clock to detect any magnetic anomaly.",
          tr: "Yer telemetri istasyonları, herhangi bir manyetik anomaliyi tespit etmek için hassas faydalı yük sensörlerini günün her saati izliyor olacaklar.",
          analysis: "'will be monitoring' gelecekte devam edecek operasyonu gösterirken 'anomaly' ve 'telemetry' akademik terimlerini organik biçimde kullanır."
        },
        {
          id: "d11_s3",
          en: "As the robotic probe accelerates along its gravitational trajectory, high-efficiency ion propulsion will be generating continuous thrust without depleting chemical propellant reserves.",
          tr: "Robotik sonda yerçekimsel yörünge izi boyunca hızlanırken, yüksek verimli iyon sevk sistemi kimyasal yakıt rezervlerini tüketmeden sürekli itme kuvveti üretiyor olacak.",
          analysis: "İki eşzamanlı süreç 'as' ile bağlanmış, gelecekteki itme eylemi 'will be generating' ile vurgulanmıştır."
        },
        {
          id: "d11_s4",
          en: "Simultaneously, astrophysicists will be analyzing exoplanetary light spectrum readings to identify biosignature gases in habitable solar zones.",
          tr: "Eşzamanlı olarak astrofizikçiler, yaşanabilir güneş bölgelerindeki biyo-imza gazlarını belirlemek için ötegezegen ışık tayfı okumalarını analiz ediyor olacaklar.",
          analysis: "'will be analyzing' bilimsel araştırma sürecini vurgulayan Future Continuous çekimidir; 'spectrum' anahtar kelimedir."
        },
        {
          id: "d11_s5",
          en: "Autonomous star-tracker navigation platforms will be guiding exploratory probes safely across interstellar thresholds.",
          tr: "Otonom yıldız takip seyrüsefer platformları, keşif sondalarını yıldızlararası eşikler boyunca güvenle yönlendiriyor olacak.",
          analysis: "'will be guiding' yapısı, 'autonomous navigation' ve 'interstellar' kelimeleriyle yüksek band IELTS akademik metin tarzını tamamlar."
        }
      ],
      wordDictionary: {
        "telemetry": "telemetri, uzaktan ölçüm verisi aktarımı",
        "propulsion": "sevk gücü, itici sistem",
        "payload": "faydalı yük, bilimsel kargo",
        "interstellar": "yıldızlararası",
        "anomaly": "anomali, olağandışılık, sapma",
        "navigation": "seyrüsefer, yön bulma",
        "deploy": "konuşlandırmak, devreye sokmak",
        "spectrum": "tayf, spektrum",
        "trajectory": "yörünge çizgisi, izlenen rota",
        "cosmic": "kozmik, evrensel",
        "consortium": "konsorsiyum, ortak girişim grubu",
        "exoplanetary": "ötegezegene ait",
        "biosignature": "biyolojik yaşam izi",
        "propellant": "roket yakıtı, itici yakıt"
      }
    }
  },

  // Day 12: Future Perfect Tense
  12: {
    day: 12,
    isCheckpoint: false,
    theme: "Global Decarbonization & 2050 Energy Milestones",
    titleTr: "12. Gün: Future Perfect & Küresel Karbonsuzlaşma",
    grammar: window.ALL_TENSES_LIST[10], // Future Perfect
    words: window.ACADEMIC_VOCABULARY_POOL.slice(100, 110),
    reading: {
      title: "The Clean Power Milestone: Envisioning 2050 Energy Grids",
      titleTr: "Temiz Güç Dönüm Noktası: 2050 Enerji Şebekelerini Öngörmek",
      sentences: [
        {
          id: "d12_s1",
          en: "By the middle of the twenty-first century, developed economies will have decarbonized the vast majority of their centralized power grids.",
          tr: "Yirmi birinci yüzyılın ortalarına kadar, gelişmiş ekonomiler merkezi elektrik şebekelerinin büyük çoğunluğunu karbonsuzlaştırmış olacaklar.",
          analysis: "'By + future time' zarfı ile 'will have decarbonized' (Future Perfect) kullanımı, belirli bir gelecekteki tamamlanma hedefini ifade eder."
        },
        {
          id: "d12_s2",
          en: "Technological engineers will have integrated utility-scale battery storage to resolve the intermittent generation shortcomings of wind and photovoltaic farms.",
          tr: "Teknoloji mühendisleri, rüzgar ve fotovoltaik çiftliklerin kesintili üretim eksikliklerini gidermek için şebeke ölçeğinde batarya depolamasını entegre etmiş olacaklar.",
          analysis: "'will have integrated' gelecekte tamamlanacak teknik entegrasyonu belirtirken 'intermittent' ve 'photovoltaic' hedeflenen kelimelerdir."
        },
        {
          id: "d12_s3",
          en: "Municipalities will have overhauled transmission infrastructure to accommodate rapidly expanding industrial electric vehicle charging capacity.",
          tr: "Belediyeler, hızla genişleyen endüstriyel elektrikli araç şarj kapasitesini karşılamak üzere iletim altyapısını baştan aşağı yenilemiş olacaklar.",
          analysis: "'will have overhauled' eylemi altyapının ('infrastructure') yenileneceğini kesinleştiren Future Perfect yapıdır."
        },
        {
          id: "d12_s4",
          en: "Long before fossil fuel reserves expire, national parliaments will have phased out coal subsidies as renewable generation efficiency will have surpassed thermal benchmarks.",
          tr: "Fosil yakıt rezervleri tükenmeden çok önce, yenilenebilir üretim verimliliği termal kıstasları aşmış olacağından, ulusal parlamentolar kömür sübvansiyonlarını aşamalı olarak kaldırmış olacaklar.",
          analysis: "'will have phased out' ve 'will have surpassed' iki paralel tamamlanmış gelecek eylemini IELTS Task 2 projeksiyon üslubuyla aktarır."
        },
        {
          id: "d12_s5",
          en: "Through consistent long-term investment, humanity will have terminated its historical reliance on polluting hydrocarbon extraction.",
          tr: "İstikrarlı uzun vadeli yatırımlar sayesinde insanlık, kirletici hidrokarbon çıkarımına olan tarihsel bağımlılığına son vermiş olacak.",
          analysis: "'will have terminated' gelecekte varılacak nihai zaferi vurgular; 'reliance' ve 'transition' temayı tamamlar."
        }
      ],
      wordDictionary: {
        "decarbonize": "karbonsuzlaştırmak, karbon salınımını sıfırlamak",
        "photovoltaic": "fotovoltaik, güneş elektriği üreten",
        "infrastructure": "altyapı sistemleri",
        "intermittent": "kesintili, aralıklı",
        "capacity": "kapasite, üretim hacmi",
        "subsidy": "devlet desteği, sübvansiyon",
        "transition": "dönüşüm süreci, geçiş",
        "surpass": "aşmak, geride bırakmak",
        "efficiency": "verimlilik, randıman",
        "reliance": "bağımlılık, itimat",
        "overhaul": "kapsamlı yenilemek, revize etmek",
        "consortium": "ortaklık birliği",
        "hydrocarbon": "hidrokarbon (petrol/gaz)"
      }
    }
  },

  // Day 13: Future Perfect Continuous
  13: {
    day: 13,
    isCheckpoint: false,
    theme: "Soil Degradation & Regenerative Agriculture",
    titleTr: "13. Gün: Future Perfect Continuous & Toprak Bozunumu",
    grammar: window.ALL_TENSES_LIST[11], // Future Perfect Continuous
    words: window.ACADEMIC_VOCABULARY_POOL.slice(110, 120),
    reading: {
      title: "Sustaining the Earth: Combating Agricultural Soil Loss",
      titleTr: "Toprağı Yaşatmak: Tarımsal Toprak Kaybıyla Mücadele",
      sentences: [
        {
          id: "d13_s1",
          en: "By next decade, leading agronomy research institutes will have been monitoring global topsoil erosion rates for over half a century.",
          tr: "Önümüzdeki on yıla gelindiğinde, önde gelen tarım bilimi araştırma enstitüleri yarım yüzyıldan uzun bir süredir küresel üst toprak erozyonu oranlarını izliyor olmuş olacaklar.",
          analysis: "'will have been monitoring' gelecekteki bir noktada (by next decade) eylemin ne kadar süredir (for over half a century) kesintisiz sürdüğünü vurgular."
        },
        {
          id: "d13_s2",
          en: "Farms relying solely on chemical fertilizer will have been accelerating nutrient depletion across vulnerable arable plains.",
          tr: "Yalnızca kimyasal gübreye bağımlı olan çiftlikler, kırılgan ekilebilir ovalarda besin tükenmesini hızlandırıyor olmuş olacaklar.",
          analysis: "'will have been accelerating' süregelen olumsuz trendi vurgular; 'fertilizer', 'depletion' ve 'arable' ana kelimelerdir."
        },
        {
          id: "d13_s3",
          en: "In contrast, forward-thinking agriculturalists will have been cultivating organic cover crops to revitalize the subterranean soil microbiome.",
          tr: "Buna karşılık, ileri görüşlü tarımcılar yeraltı toprak mikrobiyomunu canlandırmak için organik örtücü bitkileri ekiyor olmuş olacaklar.",
          analysis: "'will have been cultivating' eylemi onarıcı tarım sürecinin süresini aktarır; 'microbiome' ve 'cultivate' vurgulanır."
        },
        {
          id: "d13_s4",
          en: "Without modernization, conventional furrow irrigation will have been inducing dangerous salinization along major river floodplains.",
          tr: "Modernizasyon yapılmadığı takdirde, geleneksel karık sulama büyük nehir taşkın ovaları boyunca tehlikeli tuzlanmaya yol açıyor olmuş olacaktır.",
          analysis: "'will have been inducing' yapısı, 'irrigation' ve 'salinization' süreçlerinin uzun vadeli birikimsel zararını anlatır."
        },
        {
          id: "d13_s5",
          en: "By that turning point, sustainability initiatives will have been demonstrating that biological crop management preserves global grain yield far more reliably.",
          tr: "O dönüm noktasına varıldığında, sürdürülebilirlik girişimleri biyolojik mahsul yönetiminin küresel tahıl verimini çok daha güvenilir biçimde koruduğunu kanıtlıyor olmuş olacaktır.",
          analysis: "'will have been demonstrating' yapısı gelecekteki bilimsel birikimin süresini belirtir; 'sustainability' ve 'yield' kilit kelimelerdir."
        }
      ],
      wordDictionary: {
        "erosion": "erozyon, toprak aşınması",
        "arable": "ekilebilir, tarıma elverişli",
        "salinization": "tuzlanma",
        "cultivate": "ekip biçmek, yetiştirmek",
        "fertilizer": "gübre",
        "yield": "ürün verimi, rekolte",
        "sustainability": "sürdürülebilirlik",
        "depletion": "tükenme, azalma",
        "microbiome": "mikrobiyom, mikroorganizma örtüsü",
        "irrigation": "sulama",
        "agronomy": "tarım bilimi",
        "floodplain": "taşkın ovası",
        "tillage": "toprak sürme"
      }
    }
  },

  // Day 15: Passive Voice (Present & Past)
  15: {
    day: 15,
    isCheckpoint: false,
    theme: "Advanced Manufacturing & Industrial Robotics",
    titleTr: "15. Gün: Passive Voice (Temel) & Endüstriyel Robotik",
    grammar: window.ALL_TENSES_LIST[12], // Passive Voice Present & Past
    words: window.ACADEMIC_VOCABULARY_POOL.slice(120, 130),
    reading: {
      title: "Automated Precision: The Evolution of Industrial Assembly Lines",
      titleTr: "Otomatik Hassasiyet: Endüstriyel Montaj Hatlarının Evrimi",
      sentences: [
        {
          id: "d15_s1",
          en: "In contemporary smart factories, intricate electronic circuit boards are assembled with micron-level precision by multi-axis robotic arms.",
          tr: "Çağdaş akıllı fabrikalarda karmaşık elektronik devre kartları, çok eksenli robot kollar tarafından mikron düzeyinde hassasiyetle monte edilir.",
          analysis: "'are assembled' (Present Simple Passive) bilimsel ve teknik üretim süreçlerinde odağın eylemi yapandan ziyade ürüne çekilmesini sağlar."
        },
        {
          id: "d15_s2",
          en: "Fabrication workflows are continuously optimized by centralized machine-learning algorithms to maximize factory throughput.",
          tr: "Üretim iş akışları, fabrika debisini en üst düzeye çıkarmak için merkezi makine öğrenimi algoritmaları tarafından sürekli olarak optimize edilir.",
          analysis: "'are continuously optimized' edilgen yapısı endüstriyel verimlilik parametrelerinin otomatik ayarlandığını gösterir."
        },
        {
          id: "d15_s3",
          en: "Historically, specialized machine tools were calibrated manually by guild craftsmen before standardized manufacturing metrics were established.",
          tr: "Tarihsel olarak, standartlaştırılmış üretim ölçütleri belirlenmeden önce özel takım tezgahları lonca zanaatkarları tarafından elle kalibre edilirdi.",
          analysis: "'were calibrated' ve 'were established' (Past Simple Passive) sanayi tarihçesini nesnel bir üslupla aktarır."
        },
        {
          id: "d15_s4",
          en: "Infrared thermal sensors are deployed along conveyor belts so that microscopic surface defects are detected within milliseconds.",
          tr: "Kızılötesi termal sensörler konveyör bantları boyunca konuşlandırılır, böylece mikroskobik yüzey kusurları milisaniyeler içinde tespit edilir.",
          analysis: "'are deployed' ve 'are detected' arka arkaya kullanılarak süreç diyagramı (Process Diagram) akademik dili oluşturulmuştur."
        },
        {
          id: "d15_s5",
          en: "Operational protocols were standardized across multinational automotive facilities to guarantee uniform structural integrity.",
          tr: "Tek tip yapısal bütünlüğü güvence altına almak için operasyonel protokoller çokuluslu otomotiv tesislerinde standartlaştırıldı.",
          analysis: "'were standardized' geçmişte gerçekleştirilen kurumsal reformu vurgulayan Past Passive örneğidir."
        }
      ],
      wordDictionary: {
        "assembly": "montaj, montaj hattı",
        "automation": "otomasyon, otomatik kontrol",
        "precision": "hassasiyet, kesinlik",
        "fabrication": "imalat, üretim",
        "optimize": "optimize etmek, en uygun hale getirmek",
        "throughput": "üretim debisi, işlem hacmi",
        "calibrate": "kalibre etmek, hassas ayar yapmak",
        "defect": "kusur, imalat hatası",
        "sensor": "sensör, algılayıcı",
        "standardize": "standartlaştırmak",
        "multi-axis": "çok eksenli",
        "integrity": "bütünlük, sağlamlık"
      }
    }
  },

  // Day 16: Passive Voice (Modals & Perfects)
  16: {
    day: 16,
    isCheckpoint: false,
    theme: "Forensic Anthropology & Paleogenomics",
    titleTr: "16. Gün: Passive Voice (İleri) & Adli Paleogenomik",
    grammar: window.ALL_TENSES_LIST[13], // Passive Voice Modals & Perfects
    words: window.ACADEMIC_VOCABULARY_POOL.slice(130, 140),
    reading: {
      title: "Unlocking Antiquity: Genomic Reconstruction from Skeletal Remains",
      titleTr: "Antik Çağı Çözmek: İskelet Kalıntılarından Genomik Yeniden Canlandırma",
      sentences: [
        {
          id: "d16_s1",
          en: "Prehistoric hominid specimens must be handled under ultra-sterile laboratory conditions so that modern bacterial contamination can be avoided.",
          tr: "Tarih öncesi insansı numuneleri, modern bakteriyel bulaşmanın önlenebilmesi için aşırı steril laboratuvar koşulları altında tutulmalıdır.",
          analysis: "'must be handled' ve 'can be avoided' Modal Passive yapılarıdır; akademik kuralları ve zorunlulukları tarafsız aktarır."
        },
        {
          id: "d16_s2",
          en: "Fragile skeletal fragments have been excavated from submerged limestone caves where mineral conditions remained exceptionally stable.",
          tr: "Mineral koşullarının olağanüstü derecede kararlı kaldığı su altı kireçtaşı mağaralarından kırılgan iskelet parçaları çıkarılmıştır.",
          analysis: "'have been excavated' (Present Perfect Passive) yakın zamanda tamamlanmış kazı çalışmalarının bilimsel değerini vurgular."
        },
        {
          id: "d16_s3",
          en: "Crucial isotopic biomarkers have been preserved within fossilized dental enamel despite millennia of intense geochemical degradation.",
          tr: "Bin yıllar süren şiddetli jeokimyasal bozulmaya rağmen, fosilleşmiş diş minesi içinde hayati izotopik biyo-belirteçler korunmuştur.",
          analysis: "'have been preserved' edilgen zamanı, 'biomarker', 'isotope' ve 'degradation' kelimelerini güçlü bir bağlamda birleştirir."
        },
        {
          id: "d16_s4",
          en: "Extinct hominin lineages can be reconstructed with unprecedented accuracy once ancestral mitochondrial DNA has been sequenced successfully.",
          tr: "Atalardan kalma mitokondriyal DNA başarıyla dizilendikten sonra, soyu tükenmiş insansı soy hatları benzeri görülmemiş bir doğrulukla yeniden yapılandırılabilir.",
          analysis: "'can be reconstructed' ve 'has been sequenced' birleşik yapısı IELTS Band 7.5+ bilimsel şart ve sonuç kurgusudur."
        },
        {
          id: "d16_s5",
          en: "Damaged forensic specimens should be scanned using high-resolution computed tomography before physical drilling is attempted.",
          tr: "Fiziksel delme işlemine girişilmeden önce hasarlı adli numuneler yüksek çözünürlüklü bilgisayarlı tomografi kullanılarak taranmalıdır.",
          analysis: "'should be scanned' ve 'is attempted' tavsiye ve prosedür edilgenleridir; 'forensic' ve 'specimen' kilit terimlerdir."
        }
      ],
      wordDictionary: {
        "forensic": "adli, adli tıbba veya bilime ait",
        "excavate": "kazmak, kazıyla ortaya çıkarmak",
        "specimen": "örnek, numune",
        "biomarker": "biyo-işaretleyici, biyolojik belirteç",
        "degradation": "bozulma, kimyasal çözünme",
        "lineage": "soy hattı, köken",
        "isotope": "izotop",
        "contamination": "bulaşma, dış kirlenme",
        "skeletal": "iskeletsel, iskelete ait",
        "reconstruct": "yeniden canlandırmak, inşa etmek",
        "hominid": "insansı",
        "enamel": "diş minesi"
      }
    }
  },

  // Day 17: Modal Verbs (Deduction & Speculation)
  17: {
    day: 17,
    isCheckpoint: false,
    theme: "Cognitive Ethology & Cetacean Communication",
    titleTr: "17. Gün: Modallar & Hayvan Bilişi ve İletişimi",
    grammar: window.ALL_TENSES_LIST[14], // Modals
    words: window.ACADEMIC_VOCABULARY_POOL.slice(140, 150),
    reading: {
      title: "Acoustic Intelligence: Deciphering Marine Mammal Dialects",
      titleTr: "Akustik Zeka: Deniz Memelilerinin Lehçelerini Çözümlemek",
      sentences: [
        {
          id: "d17_s1",
          en: "Marine biologists argue that idiosyncratic acoustic clicks recorded in matriarchal whale pods must indicate cultural transmission rather than mere genetic inheritance.",
          tr: "Deniz biyologları, anaerkil balina sürülerinde kaydedilen kendine özgü akustik tıkırtıların salt genetik kalıtımdan ziyade kültürel aktarımı gösteriyor olması gerektiğini savunmaktadır.",
          analysis: "'must indicate' (Modal of strong logical deduction) mevcut kanıtlara dayalı güçlü mantıksal çıkarım bildirir."
        },
        {
          id: "d17_s2",
          en: "Such intricate vocalization sequences cannot be dismissed as primitive reflexes triggered by accidental environmental stimuli.",
          tr: "Böylesine karmaşık ses çıkarma dizilimleri, tesadüfi çevresel uyaranların tetiklediği ilkel refleksler olarak bir kenara atılamaz.",
          analysis: "'cannot be dismissed' (Modal of impossibility / negative deduction) kesin imkansızlık çıkarımını edilgen yapıyla sunar."
        },
        {
          id: "d17_s3",
          en: "Field observations suggest that isolated pods might develop distinct acoustic dialects to coordinate cooperative foraging maneuvers in deep trenches.",
          tr: "Saha gözlemleri, yalıtılmış sürülerin derin çukurlarda işbirlikçi yiyecek arama manevralarını koordine etmek için belirgin akustik lehçeler geliştiriyor olabileceğini öne sürmektedir.",
          analysis: "'might develop' (Modal of cautious possibility / hedging) akademik ihtiyatlılık üslubunu temsil eder."
        },
        {
          id: "d17_s4",
          en: "Captive dolphins could mimic synthetic frequency modulations with remarkable precision, confirming their exceptional auditory perception.",
          tr: "Tutsak yunuslar sentetik frekans modülasyonlarını olağanüstü bir hassasiyetle taklit edebilmiş, bu da onların istisnai işitsel algılarını doğrulamıştır.",
          analysis: "'could mimic' geçmiş yetenek/kapasite modaldır; 'mimic' ve 'perception' hedef kelimelerdir."
        },
        {
          id: "d17_s5",
          en: "Comparative ethologists conclude that advanced cetacean cognition may well surpass the mental capabilities previously attributed to non-human species.",
          tr: "Karşılaştırmalı etologlar, gelişmiş deniz memelisi bilişinin daha önce insan dışı türlere atfedilen zihinsel yetenekleri pekala aşabileceği sonucuna varmaktadır.",
          analysis: "'may well surpass' yüksek olasılıklı akademik iddiadır; 'cognition' ana kavramdır."
        }
      ],
      wordDictionary: {
        "cognition": "biliş, zihinsel kavrayış",
        "vocalization": "seslendirme, ses çıkarma",
        "acoustic": "akustik, sesle ilgili",
        "dialect": "lehçe, yerel şive",
        "perception": "algı, duyusal farkındalık",
        "stimulus": "uyaran, dürtü",
        "innate": "doğuştan gelen, fıtri",
        "mimic": "taklit etmek",
        "foraging": "yiyecek arama faaliyeti",
        "pod": "balina/yunus sürüsü",
        "ethology": "hayvan davranışı bilimi",
        "matriarchal": "anaerkil"
      }
    }
  },

  // Day 18: Conditionals (Zero, 1st & 2nd)
  18: {
    day: 18,
    isCheckpoint: false,
    theme: "Ocean Circulation & Climate Tipping Points",
    titleTr: "18. Gün: Temel Şart Cümleleri & Okyanus Dolaşımı",
    grammar: window.ALL_TENSES_LIST[15], // Conditionals Zero, 1st & 2nd
    words: window.ACADEMIC_VOCABULARY_POOL.slice(150, 160),
    reading: {
      title: "The Atlantic Conveyor: Ocean Salinity and Global Climate Stability",
      titleTr: "Atlantik Taşıyıcı Kuşağı: Okyanus Tuzluluğu ve Küresel İklim Dengesi",
      sentences: [
        {
          id: "d18_s1",
          en: "Whenever polar sea surface temperatures rise excessively, ocean salinity decreases rapidly and deep thermohaline circulation slows down.",
          tr: "Kutup deniz yüzeyi sıcaklıkları aşırı yükseldiğinde, okyanus tuzluluğu hızla azalır ve derin termohalin dolaşım yavaşlar.",
          analysis: "Zero Conditional (Whenever/If + Present Simple, Present Simple) bilimsel fizik kurallarını ve değişmez doğa yasalarını ifade eder."
        },
        {
          id: "d18_s2",
          en: "If melting sub-polar glaciers continue discharging colossal volumes of freshwater, the North Atlantic conveyor will experience catastrophic disruption.",
          tr: "Şayet eriyen kutup altı buzulları muazzam miktarda tatlı su akıtmaya devam ederse, Kuzey Atlantik taşıyıcı kuşağı yıkıcı bir aksama yaşayacaktır.",
          analysis: "First Conditional (If + Present Continuous, will + V1) gelecekte gerçekleşmesi son derece muhtemel bilimsel senaryoları betimler."
        },
        {
          id: "d18_s3",
          en: "If this massive circulation system collapsed completely, Northern Europe would encounter severe sub-arctic temperature drops within a single generation.",
          tr: "Şayet bu devasa dolaşım sistemi tamamen çökecek olsaydı, Kuzey Avrupa tek bir nesil içinde şiddetli kutup altı sıcaklık düşüşleriyle karşılaşırdı.",
          analysis: "Second Conditional (If + Past Simple, would + V1) mevcut durumda varsayımsal (hypothetical) bir senaryonun teorik sonucunu anlatır."
        },
        {
          id: "d18_s4",
          en: "If national governments enacted coordinated emission mitigation policies today, humanity would avoid crossing irreversible environmental tipping points.",
          tr: "Ulusal hükümetler bugün koordineli emisyon azaltım politikaları uygulasaydı, insanlık geri döndürülemez çevresel kırılma noktalarını aşmaktan kaçınmış olurdu.",
          analysis: "Second Conditional yapısı politika önerilerini ve reform tavsiyelerini akademik düzeyde formüle eder."
        },
        {
          id: "d18_s5",
          en: "If oceanic currents redistribute equatorial thermal energy equitably, hemispheric ecological equilibrium remains stable.",
          tr: "Okyanus akıntıları ekvatoral termal enerjiyi dengeli bir şekilde yeniden dağıtırsa, yarıkürelerin ekolojik dengesi istikrarlı kalır.",
          analysis: "'redistribute' ve 'equilibrium' kilit kelimelerdir; genel doğa dengesini anlatan Type 0 kurgusudur."
        }
      ],
      wordDictionary: {
        "circulation": "dolaşım, sirkülasyon",
        "salinity": "tuzluluk derecesi",
        "equilibrium": "denge, istikrar hali",
        "conveyor": "taşıyıcı akıntı kuşağı",
        "redistribute": "yeniden dağıtmak",
        "disruption": "aksama, kesinti, bozulma",
        "tipping point": "kırılma noktası, eşik",
        "glacier": "buzul",
        "collapse": "çökmek, çöküş",
        "mitigate": "hafifletmek, azaltmak",
        "thermohaline": "ısı ve tuzluluğa bağlı derin deniz akıntısı"
      }
    }
  },

  // Day 19: Third & Mixed Conditionals
  19: {
    day: 19,
    isCheckpoint: false,
    theme: "Technological Revolutions: From Steam to Microchips",
    titleTr: "19. Gün: Geçmiş Varsayım Şart Cümleleri & Sanayi Devrimleri",
    grammar: window.ALL_TENSES_LIST[16], // Third & Mixed Conditionals
    words: window.ACADEMIC_VOCABULARY_POOL.slice(160, 170),
    reading: {
      title: "Pivotal Inventions: Historical Turning Points in Industry",
      titleTr: "Dönüm Noktası İcatlar: Sanayideki Tarihsel Kırılmalar",
      sentences: [
        {
          id: "d19_s1",
          en: "If early nineteenth-century engineers had not mastered steam mechanization, textile manufacturing productivity would never have soared to unprecedented heights.",
          tr: "Erken on dokuzuncu yüzyıl mühendisleri buhar makineleşmesinde ustalaşmamış olsalardı, tekstil üretim verimliliği asla benzeri görülmemiş zirvelere ulaşamazdı.",
          analysis: "Third Conditional (If + had not mastered, would never have soared) geçmişte yaşanmış bir olayın zıttını kurgulayarak sebep-sonuç ilişkisini gösterir."
        },
        {
          id: "d19_s2",
          en: "If Bell Laboratories had not invented the semiconductor transistor in 1947, our contemporary digital computing paradigm would not exist today.",
          tr: "Bell Laboratuvarları 1947'de yarı iletken transistörü icat etmemiş olsaydı, bugünkü çağdaş dijital bilişim paradigmalarımız günümüzde var olmazdı.",
          analysis: "Mixed Conditional (If + had not invented [geçmiş], would not exist today [şimdiki zaman]) geçmiş eylemin bugüne uzanan sonucunu kurar."
        },
        {
          id: "d19_s3",
          en: "The solid-state microprocessor acted as a decisive catalyst; without it, industrial automation would have remained prohibitively cumbersome.",
          tr: "Katı hal mikroişlemcisi belirleyici bir katalizör işlevi gördü; o olmasaydı, endüstriyel otomasyon son derece hantal kalmış olurdu.",
          analysis: "'without it, would have remained' kalıbı örtük şart (implied conditional) yapısıyla Third Conditional anlamı taşır."
        },
        {
          id: "d19_s4",
          en: "If the agrarian workforce had refused technological transformation, urban factories could not have expanded at such a breakneck pace.",
          tr: "Şayet tarımsal işgücü teknolojik dönüşümü reddetmiş olsaydı, şehir fabrikaları bu denli baş döndürücü bir hızla genişleyemezdi.",
          analysis: "'could not have expanded' olasılık ve yetenek bildiren Third Conditional varyasyonudur; 'workforce' ve 'transformation' anahtar kelimelerdir."
        },
        {
          id: "d19_s5",
          en: "Had traditional manufacturing workshops embraced innovative tooling earlier, their specialized manual trades would not have become obsolete.",
          tr: "Geleneksel üretim atölyeleri yenilikçi takım tezgahlarını daha önce benimsemiş olsalardı, özel el sanatları tedavülden kalkmış olmazdı.",
          analysis: "Inverted Conditional ('Had traditional workshops embraced...') 'if' bağlacını atarak devrik kurgulanan ve IELTS'te 8.0+ getiren üst düzey yapıdır."
        }
      ],
      wordDictionary: {
        "mechanization": "makineleşme süreci",
        "productivity": "üretkenlik, verimlilik",
        "transistor": "transistör, yarı iletken devre elemanı",
        "catalyst": "katalizör, tetikleyici unsur",
        "paradigm": "paradigma, model, temel anlayış",
        "workforce": "işgücü, çalışan nüfus",
        "transformation": "köklü dönüşüm",
        "innovative": "yenilikçi, çığır açan",
        "semiconductor": "yarı iletken",
        "obsolete": "tedavülden kalkmış, modası geçmiş, köhne"
      }
    }
  },

  // Day 20: Relative Clauses
  20: {
    day: 20,
    isCheckpoint: false,
    theme: "Seismic Architecture & Base Isolation Engineering",
    titleTr: "20. Gün: İlgi Cümlecikleri & Deprem Mimarisi",
    grammar: window.ALL_TENSES_LIST[17], // Relative Clauses
    words: window.ACADEMIC_VOCABULARY_POOL.slice(170, 180),
    reading: {
      title: "Engineering Resilience: Modern Architecture Against Seismic Shocks",
      titleTr: "Direnci İnşa Etmek: Sismik Şoklara Karşı Çağdaş Mimari",
      sentences: [
        {
          id: "d20_s1",
          en: "Megastructures that incorporate computerized mass dampers can withstand high-magnitude seismic oscillations without suffering critical structural failure.",
          tr: "Bilgisayarlı kütle sönümleyicilerini bünyesinde barındıran dev yapılar, kritik yapısal hasara uğramaksızın yüksek büyüklükteki sismik salınımlara direnebilirler.",
          analysis: "Defining Relative Clause ('that incorporate...') hangi yapıların bu özelliğe sahip olduğunu tanımlar."
        },
        {
          id: "d20_s2",
          en: "Elastomeric base bearings, which decouple a superstructure from its shaking foundation, dissipate destructive lateral energy safely.",
          tr: "Bir üst yapıyı sarsılan temelinden ayıran elastomerik taban yalıtım yatakları, yıkıcı yanal enerjiyi güvenli bir şekilde dağıtır.",
          analysis: "Non-defining Relative Clause (', which decouple...') iki virgül arasında ana özne hakkında tamamlayıcı akademik bilgi verir."
        },
        {
          id: "d20_s3",
          en: "Geotechnical engineers whose designs account for soil liquefaction install reinforced subterranean pilings that anchor deep into bedrock.",
          tr: "Tasarımları zemin sıvılaşmasını hesaba katan geoteknik mühendisleri, ana kayanın derinliklerine demirleyen güçlendirilmiş yeraltı kazıkları yerleştirir.",
          analysis: "'whose designs account for...' iyelik bildiren relative clause yapısıdır; 'liquefaction' hedef terimdir."
        },
        {
          id: "d20_s4",
          en: "Historic brick monuments, which were erected long before modern elasticity thresholds were codified, require urgent seismic retrofitting.",
          tr: "Modern esneklik eşikleri yasalara girmeden çok önce inşa edilmiş olan tarihi tuğla anıtlar, acil sismik güçlendirme gerektirmektedir.",
          analysis: "Non-defining clause tarihi binaların neden risk altında olduğunu açıklar; 'elasticity' ve 'retrofit' hedeflenmiştir."
        },
        {
          id: "d20_s5",
          en: "Urban planning bureaus prioritize structural resilience across earthquake zones wherein population density continues to escalate.",
          tr: "Şehir planlama büroları, nüfus yoğunluğunun tırmanmaya devam ettiği deprem bölgelerinde yapısal dayanıklılığı önceliklendirir.",
          analysis: "'wherein population density...' yer belirten edebi relative adveb (where/wherein) örneğidir; 'resilience' ve 'structural' ana kelimelerdir."
        }
      ],
      wordDictionary: {
        "oscillation": "salınım, titreşim hareketi",
        "magnitude": "büyüklük, şiddet (deprem)",
        "liquefaction": "sıvılaşma (zemin davranışı)",
        "foundation": "temel, bina temeli",
        "structural": "yapısal, strüktürel",
        "dampening": "sönümleme, darbe emme",
        "retrofit": "güçlendirmek, sonradan donatmak",
        "resilience": "dayanıklılık, esnek toparlanma gücü",
        "elasticity": "esneklik kabiliyeti",
        "lateral": "yanal, enine kuvvet",
        "decouple": "birbirinden ayırmak, bağını koparmak",
        "piling": "kazık, temel kazığı"
      }
    }
  },


  // Day 22: Gerunds & Infinitives
  22: {
    day: 22,
    isCheckpoint: false,
    theme: "Developmental Psychology & Child Linguistics",
    titleTr: "22. Gün: İsim Fiiller ve Mastarlar & Dil Edinimi",
    grammar: window.ALL_TENSES_LIST[18], // Gerunds & Infinitives
    words: window.ACADEMIC_VOCABULARY_POOL.slice(180, 190),
    reading: {
      title: "The Syntax Engine: Investigating Early Infant Speech Development",
      titleTr: "Sözdizim Motoru: Bebeklerde Erken Konuşma Gelişimini Araştırmak",
      sentences: [
        {
          id: "d22_s1",
          en: "Acquiring grammatical syntax requires human infants to process rhythmic cadences embedded in adult vocalization.",
          tr: "Dilbilgisel sözdizimini edinmek, insan bebeklerinin yetişkin seslendirmelerine gömülü ritmik ahenkleri işlemesini gerektirir.",
          analysis: "'Acquiring grammatical syntax' (Gerund as subject) güçlü bir akademik özne oluştururken, 'requires ... to process' (verb + object + infinitive) kuralını örnekler."
        },
        {
          id: "d22_s2",
          en: "Young children begin babbling in order to exercise vocal tract articulation long before producing coherent vocabulary.",
          tr: "Küçük çocuklar, tutarlı kelimeler üretmeden çok önce ses yolu telaffuzunu çalıştırmak amacıyla agulamaya başlarlar.",
          analysis: "'begin babbling' (verb + gerund) ve 'in order to exercise' (infinitive of purpose) iki temel kullanımı yan yana gösterir."
        },
        {
          id: "d22_s3",
          en: "Regular linguistic exposure enables toddlers to expand their mental lexicon exponentially throughout early developmental stages.",
          tr: "Düzenli dilsel maruziyet, yeni yürüyen çocukların erken gelişim aşamaları boyunca zihinsel söz dağarcıklarını katlanarak genişletmelerini sağlar.",
          analysis: "'enables toddlers to expand' (verb + object + to-infinitive) kalıbı 'lexicon' ve 'developmental' kelimelerini pekiştirir."
        },
        {
          id: "d22_s4",
          en: "Psycholinguists avoid defining comprehension simply as an innate tendency to imitate parental utterances uncritically.",
          tr: "Psikolinguistler kavramayı yalnızca ebeveyn ifadelerini eleştirmeksizin taklit etmeye yönelik doğuştan gelen bir eğilim olarak tanımlamaktan kaçınırlar.",
          analysis: "'avoid defining' (avoid + gerund) ve 'tendency to imitate' (noun + to-infinitive) akademik tartışma dilinde sıkça görülür."
        },
        {
          id: "d22_s5",
          en: "Achieving cognitive mastery in communication motivates children to articulate complex abstract thoughts independently.",
          tr: "İletişimde bilişsel yetkinliğe ulaşmak, çocukları karmaşık soyut düşünceleri bağımsızca ifade etmeye motive eder.",
          analysis: "'Achieving cognitive mastery' cümle öznesi konumundaki gerund öbeğidir; 'motivates ... to articulate' ile tamamlanır."
        }
      ],
      wordDictionary: {
        "acquisition": "edinme, kazanım süreci",
        "syntax": "sözdizimi, cümle yapısı kuralları",
        "lexicon": "söz dağarcığı, kelime haznesi",
        "comprehension": "kavrama yetisi, anlama",
        "babbling": "agudama, heceleme (bebek dili)",
        "developmental": "gelişimsel",
        "cognitive": "bilişsel, zihinsel",
        "exposure": "maruz kalma, temas etme",
        "mastery": "ustalık, tam yetkinlik",
        "imitate": "taklit etmek",
        "articulate": "açıkça telaffuz etmek / dile getirmek",
        "cadence": "ritmik iniş çıkış, ahenk"
      }
    }
  },

  // Day 23: Academic Reporting Verbs & Indirect Speech
  23: {
    day: 23,
    isCheckpoint: false,
    theme: "Environmental Summits & Diplomatic Protocols",
    titleTr: "23. Gün: Dolaylı Aktarım & Uluslararası İklim Zirveleri",
    grammar: window.ALL_TENSES_LIST[19], // Academic Reporting Verbs
    words: window.ACADEMIC_VOCABULARY_POOL.slice(190, 200),
    reading: {
      title: "Diplomatic Consensus: The Mechanics of International Climate Accords",
      titleTr: "Diplomatik Uzlaşı: Uluslararası İklim Anlaşmalarının İşleyişi",
      sentences: [
        {
          id: "d23_s1",
          en: "Environmental delegates maintained that legally binding multilateral treaties were indispensable to halt irreversible planetary deforestation.",
          tr: "Çevre delegeleri, geri döndürülemez gezegensel ormansızlaşmayı durdurmak için yasal olarak bağlayıcı çok taraflı antlaşmaların vazgeçilmez olduğunu savundular.",
          analysis: "'maintained that ... were' akademik aktarım fiiliyle (reporting verb) resmi diplomatik tezi aktarır; 'treaty' ve 'binding' temel kelimelerdir."
        },
        {
          id: "d23_s2",
          en: "Summit negotiators announced that participating states had finally achieved consensus regarding industrial carbon taxation schedules.",
          tr: "Zirve müzakerecileri, katılımcı devletlerin sanayi karbon vergisi takvimleri konusunda nihayet uzlaşıya vardıklarını duyurdular.",
          analysis: "'announced that ... had achieved' (Reporting verb + Past Perfect) olaylar arasındaki zaman sıralamasını dolaylı anlatımla kurar."
        },
        {
          id: "d23_s3",
          en: "Developing economies contended that bilateral aid agreements lacked the fiscal mandate necessary to support comprehensive renewable infrastructure.",
          tr: "Gelişmekte olan ekonomiler, iki taraflı yardım anlaşmalarının kapsamlı yenilenebilir altyapıyı desteklemek için gereken mali yetkiden yoksun olduğunu ileri sürdüler.",
          analysis: "'contended that' eleştirel akademik aktarım fiilidir; 'bilateral' ve 'mandate' kavramları vurgulanır."
        },
        {
          id: "d23_s4",
          en: "Legal analysts questioned whether voluntary global conventions could enforce strict economic sanctions against non-compliant fossil conglomerates.",
          tr: "Hukuk analistleri, gönüllü küresel sözleşmelerin kurallara uymayan fosil holdinglerine karşı katı ekonomik yaptırımlar uygulayıp uygulayamayacağını sorguladılar.",
          analysis: "'questioned whether ... could enforce' dolaylı soru (indirect question) biçiminde akademik kuşkuyu yansıtır; 'sanction' ve 'convention' hedeftir."
        },
        {
          id: "d23_s5",
          en: "The plenary council confirmed that national parliamentary ratification remained an unavoidable prerequisite before the treaty became enforceable.",
          tr: "Genel kurul konseyi, antlaşma yürürlüğe girmeden önce ulusal parlamento onayının kaçınılmaz bir ön koşul olmaya devam ettiğini teyit etti.",
          analysis: "'confirmed that ... remained' kurumsal kesinliği aktaran resmi rapordur; 'ratification' ve 'consensus' temayı tamamlar."
        }
      ],
      wordDictionary: {
        "treaty": "antlaşma, uluslararası sözleşme",
        "consensus": "uzlaşı, oybirliği, mutabakat",
        "mandate": "yetki, resmi görev talimatı",
        "ratification": "onaylama, meclis tasdiki",
        "bilateral": "iki taraflı, iki yanlı",
        "multilateral": "çok taraflı, çok uluslu",
        "compromise": "uzlaşma, karşılıklı taviz",
        "sanction": "yaptırım, cezai tedbir",
        "convention": "konvansiyon, sözleşme",
        "binding": "yasal bağlayıcılığı olan",
        "plenary": "genel kurul, tam katılımlı",
        "prerequisite": "ön koşul"
      }
    }
  },

  // Day 24: Causative Structures
  24: {
    day: 24,
    isCheckpoint: false,
    theme: "Biotechnology & CRISPR Gene Editing",
    titleTr: "24. Gün: Ettirgen Çatı & Biyoteknoloji ve Gen Düzenleme",
    grammar: window.ALL_TENSES_LIST[20], // Causative Structures
    words: window.ACADEMIC_VOCABULARY_POOL.slice(200, 210),
    reading: {
      title: "Molecular Editing: Agricultural and Clinical Gene Therapies",
      titleTr: "Moleküler Düzenleme: Tarımsal ve Klinik Gen Terapileri",
      sentences: [
        {
          id: "d24_s1",
          en: "Biotechnologists have benign viral vectors deliver therapeutic gene sequences directly into defective patient tissue nuclei.",
          tr: "Biyoteknologlar, tedavi edici gen dizilimlerini doğrudan kusurlu hasta doku çekirdeklerine zararsız viral vektörler aracılığıyla ilettirirler.",
          analysis: "'have + agent + deliver (V1)' aktif Causative yapısıdır; uzmanların bir mekanizma vasıtasıyla eylemi gerçekleştirdiğini belirtir."
        },
        {
          id: "d24_s2",
          en: "Agricultural geneticists get specialized endonuclease enzymes to excise detrimental crop mutations without harming surrounding plant DNA.",
          tr: "Tarımsal genetikçiler, etraftaki bitki DNA'sına zarar vermeksizin zararlı ürün mutasyonlarını özel endonükleaz enzimlerine kestirirler.",
          analysis: "'get + agent + to excise (to-infinitive)' ettirgen kalıbıdır; 'enzyme' ve 'mutation' hedeflenmiştir."
        },
        {
          id: "d24_s3",
          en: "Stringent regulatory oversight boards make pharmaceutical firms conduct exhaustive clinical trials before authorizing commercial gene therapy.",
          tr: "Sıkı düzenleyici denetim kurulları, ticari gen terapisini onaylamadan önce ilaç şirketlerine kapsamlı klinik deneyler yaptırır.",
          analysis: "'make + object + conduct (bare verb)' zorunlu kıldırma bildiren Causative kuralıdır; 'therapy' hedef kelimedir."
        },
        {
          id: "d24_s4",
          en: "Modern agronomy research centers had drought-resistant gene modifications inserted into staple cereal crops to withstand climate volatility.",
          tr: "Modern tarım bilimi araştırma merkezleri, iklim dalgalanmalarına direnmek için temel tahıl ürünlerine kuraklığa dayanıklı gen modifikasyonları eklettirdi.",
          analysis: "'had + object + inserted (V3)' pasif Causative yapısıdır; odak yapılan modifikasyonun kendisindedir ('agronomy', 'modification', 'insertion')."
        },
        {
          id: "d24_s5",
          en: "Medical researchers aspire to have inherited metabolic pathology corrected permanently through atomic-scale CRISPR precision.",
          tr: "Tıbbi araştırmacılar, kalıtsal metabolik patolojinin atomik ölçekli CRISPR hassasiyeti sayesinde kalıcı olarak düzeltilmesini sağlamayı arzulamaktadır.",
          analysis: "'have + object + corrected (V3)' geleceğe dönük tıbbi umutları aktaran pasif ettirgen ifadedir; 'precision' kilit terimdir."
        }
      ],
      wordDictionary: {
        "modification": "genetik değişiklik, modifikasyon",
        "vector": "taşıyıcı araç, gen aktarım vektörü",
        "enzyme": "enzim, biyolojik katalizör",
        "pathogen": "hastalık etkeni, patojen",
        "sequence": "genetik dizilim, sıra",
        "mutation": "mutasyon, genetik sapma",
        "therapy": "terapi, tedavi",
        "agronomy": "tarım bilimi",
        "insertion": "araya ekleme, gen sokma",
        "precision": "hassasiyet, cerrahi kesinlik",
        "endonuclease": "endonükleaz (DNA kesen enzim)",
        "pathology": "hastalık bilimi, marazi durum"
      }
    }
  },

  // Day 25: Inversion & Emphatic Structures
  25: {
    day: 25,
    isCheckpoint: false,
    theme: "Deep-Sea Hydrothermal Vents & Extremophile Biology",
    titleTr: "25. Gün: Devrik Cümleler & Hidrotermal Bacalar ve Ekstremofiller",
    grammar: window.ALL_TENSES_LIST[21], // Inversion
    words: window.ACADEMIC_VOCABULARY_POOL.slice(210, 220),
    reading: {
      title: "Abyssal Oases: Chemosynthetic Life Around Hydrothermal Vents",
      titleTr: "Abisal Vahalar: Hidrotermal Bacalar Etrafındaki Kemosentetik Yaşam",
      sentences: [
        {
          id: "d25_s1",
          en: "Never does photosynthetic sunlight reach the abyssal ocean floor where volcanic hydrothermal chimneys eject scalding, mineral-rich plumes.",
          tr: "Volkanik hidrotermal bacaların kaynar ve mineralce zengin duman bulutları püskürttüğü abisal okyanus tabanına fotosentetik güneş ışığı asla ulaşmaz.",
          analysis: "Negative Inversion ('Never does sunlight reach...') cümleyi dramatik biçimde vurgular ve IELTS Writing Task 2'de Band 8.5 üslup kazandırır."
        },
        {
          id: "d25_s2",
          en: "Seldom do complex biological organisms tolerate such tremendous hydrostatic pressurization alongside acute chemical toxicity without specialized enzymes.",
          tr: "Karmaşık biyolojik organizmalar, özel enzimler olmaksızın bu denli muazzam hidrostatik basınç ve şiddetli kimyasal toksisiteye nadiren tahammül edebilir.",
          analysis: "'Seldom do complex organisms tolerate...' devrik yapısı biyolojik istisnayı vurgular; 'pressurization' ve 'toxicity' hedeftir."
        },
        {
          id: "d25_s3",
          en: "Only through bacterial chemosynthesis can benthic tube worm colonies synthesize vital nutrients completely decoupled from terrestrial ecosystems.",
          tr: "Bentik tüp solucanı kolonileri, ancak bakteriyel kemosentez yoluyla karasal ekosistemlerden tamamen bağımsız olarak hayati besinleri sentezleyebilir.",
          analysis: "'Only through ... can colonies synthesize' kısıtlayıcı ön ekle kurulan Inversion kuralıdır; 'chemosynthesis' ve 'benthic' terimlerini işler."
        },
        {
          id: "d25_s4",
          en: "Rarely have deep-sea oceanographers documented such dense symbiotic microbial communities thriving in scorching geothermal venting fields.",
          tr: "Derin deniz oşinografları, kavurucu jeotermal püskürme alanlarında serpilen bu denli yoğun ortakyaşar mikrobiyal toplulukları nadiren belgelemişlerdir.",
          analysis: "'Rarely have oceanographers documented...' devrik Present Perfect yapısı bilimsel hayranlığı aktarır; 'symbiotic', 'geothermal' ve 'microbial' kilit kelimelerdir."
        },
        {
          id: "d25_s5",
          en: "Under no circumstances should international commercial mining consortia disrupt fragile abyss mineral deposits without comprehensive conservation audits.",
          tr: "Uluslararası ticari madencilik konsorsiyumları, kapsamlı koruma denetimleri olmaksızın kırılgan abis mineral birikintilerini hiçbir koşul altında tahrip etmemelidir.",
          analysis: "'Under no circumstances should ... disrupt' kesin yasaklama ve kurumsal etik uyarı bildiren klasik akademik Inversion kalıbıdır."
        }
      ],
      wordDictionary: {
        "chemosynthesis": "kemosentez (kimyasal yolla besin üretimi)",
        "geothermal": "jeotermal, yer altı ısısına ait",
        "abyss": "abis, dipsiz okyanus derinliği",
        "venting": "bacadan fışkırma, püskürme",
        "benthic": "bentik, deniz tabanında yaşayan",
        "symbiotic": "ortakyaşar, simbiyotik",
        "microbial": "mikrobiyal, mikroorganizmalara ait",
        "toxicity": "toksisite, zehirlilik derecesi",
        "pressurization": "basınç altında bulunma",
        "mineral": "mineral, inorganik madde",
        "scalding": "kaynar, yakıcı derecede sıcak",
        "hydrostatic": "su basıncına dayalı"
      }
    }
  },

  // Day 26: Participle Clauses
  26: {
    day: 26,
    isCheckpoint: false,
    theme: "Glaciology & Antarctic Ice Sheet Dynamics",
    titleTr: "26. Gün: Kısaltılmış Ulaç Cümlecikleri & Buzulbilim",
    grammar: window.ALL_TENSES_LIST[22], // Participle Clauses
    words: window.ACADEMIC_VOCABULARY_POOL.slice(220, 230),
    reading: {
      title: "Shrinking Giants: Monitoring Antarctic Ice Shelf Calving",
      titleTr: "Küçülen Devler: Antarktika Buz Sahanlığı Kopmalarını İzlemek",
      sentences: [
        {
          id: "d26_s1",
          en: "Accelerating relentlessly toward the Southern Ocean, outlet glaciers lubricate their bedrock interface with pressurized subglacial meltwater.",
          tr: "Güney Okyanusu'na doğru durmaksızın hızlanan çıkış buzulları, ana kaya temas yüzeylerini basınçlı buzul altı eriyik suyuyla kayganlaştırırlar.",
          analysis: "Present Participle Clause ('Accelerating relentlessly...') ana cümlenin öznesinin eşzamanlı hareketini zarf gibi niteleyerek cümleye akıcılık katar."
        },
        {
          id: "d26_s2",
          en: "Having analyzed orbital satellite radar records for over three decades, glaciologists report dramatic surges in coastal ice velocity.",
          tr: "Otuz yılı aşkın bir süre boyunca yörünge uydu radar kayıtlarını analiz etmiş olan buzulbilimciler, kıyı buz hızında çarpıcı ani yükselişler bildirmektedir.",
          analysis: "Perfect Participle Clause ('Having analyzed ... for three decades') eylemin ana cümleden önce tamamlandığını gösterir; 'satellite' ve 'velocity' ana kelimelerdir."
        },
        {
          id: "d26_s3",
          en: "Severely undermined by warm circumpolar currents, massive coastal ice shelves experience unprecedented catastrophic iceberg calving.",
          tr: "Ilık kutup çevresi akıntıları tarafından altı ciddi şekilde oyulan devasa kıyı buz sahanlıkları, benzeri görülmemiş felaket niteliğinde buzdağı kopmaları yaşar.",
          analysis: "Past Participle Clause ('Severely undermined by...') edilgen neden-sonuç kısaltmasıdır; 'calving' hedef terimdir."
        },
        {
          id: "d26_s4",
          en: "Weakened by deep structural crevasses, seaward ice tongues fracture abruptly and trigger rapid inland glacial retreat.",
          tr: "Derin yapısal buzul yarıklarıyla zayıflayan denize doğru uzanan buz dilleri aniden çatlar ve hızlı bir iç buzul geri çekilmesini tetikler.",
          analysis: "'Weakened by ... crevasses' kısaltması, 'crevasse', 'fracture' ve 'retreat' sözcüklerini zarif bir sözdizimiyle bağlar."
        },
        {
          id: "d26_s5",
          en: "Preserving overall polar mass equilibrium requires seasonal interior snow accumulation to counterbalance accelerating perimeter ice loss.",
          tr: "Kutuptaki genel kütle dengesini korumak, hızlanan çevre buz kaybını dengelemek için mevsimsel iç kesim kar birikimini gerektirir.",
          analysis: "'equilibrium' ve 'accumulation' kavramları, IELTS Reading akademik çevre pasajlarının özünü oluşturur."
        }
      ],
      wordDictionary: {
        "accumulation": "birikme, toplanma (kar/buz)",
        "calving": "kopma, buzdağı ayrılması",
        "meltwater": "eriyik buzul suyu",
        "retreat": "geri çekilme, küçülme",
        "equilibrium": "kütle dengesi, istikrar",
        "fracture": "çatlamak, kırılmak / çatlak",
        "crevasse": "buzul yarığı",
        "surge": "ani yükselme, taşma",
        "satellite": "uydu",
        "velocity": "hız, akış sürati",
        "subglacial": "buzul altı",
        "undermine": "altını oymak, temelini zayıflatmak"
      }
    }
  },

  // Day 27: Subjunctive Mood & Advanced Hypotheticals
  27: {
    day: 27,
    isCheckpoint: false,
    theme: "Bioethics & Artificial Intelligence in Healthcare",
    titleTr: "27. Gün: İstek Kipi & Sağlıkta Biyoetik ve Yapay Zeka",
    grammar: window.ALL_TENSES_LIST[23], // Subjunctive Mood
    words: window.ACADEMIC_VOCABULARY_POOL.slice(230, 240),
    reading: {
      title: "Algorithmic Ethics: Safeguarding Patient Autonomy in Digital Medicine",
      titleTr: "Algoritmik Etik: Dijital Tıpta Hasta Özerkliğini Korumak",
      sentences: [
        {
          id: "d27_s1",
          en: "Medical bioethicists demand that every autonomous diagnostic platform operate with complete algorithmic transparency.",
          tr: "Tıbbi biyoetikçiler, her otonom tanı platformunun tam algoritmik şeffaflıkla çalışmasını talep etmektedir.",
          analysis: "Subjunctive Mood ('demand that every platform operate [yalın fiil]') resmi gereklilik ve talep cümlelerinde 3. tekil şahısta '-s' almayan üst düzey yapıdır."
        },
        {
          id: "d27_s2",
          en: "International clinical protocols recommend that automated treatment suggestions remain strictly subordinate to independent human physician oversight.",
          tr: "Uluslararası klinik protokoller, otomatik tedavi önerilerinin bağımsız hekim gözetimine kesinlikle tabi kalmasını tavsiye etmektedir.",
          analysis: "'recommend that suggestions remain' Subjunctive kalıbıdır; 'protocol' ve 'oversight' anahtar terimlerdir."
        },
        {
          id: "d27_s3",
          en: "It is imperative that software developers eliminate systemic demographic bias to protect vulnerable patient populations from diagnostic disparities.",
          tr: "Savunmasız hasta popülasyonlarını tanı eşitsizliklerinden korumak için yazılım geliştiricilerin sistemsel demografik önyargıları ortadan kaldırması zorunludur.",
          analysis: "'It is imperative that developers eliminate' resmi gereklilik bildiren Subjunctive formülasyonudur; 'bias' hedef kelimedir."
        },
        {
          id: "d27_s4",
          en: "Legal scholars insist that informed patient consent be secured prior to the transmission of sensitive genomic datasets.",
          tr: "Hukuk bilimcileri, hassas genomik veri setlerinin aktarımından önce bilgilendirilmiş hasta rızasının güvence altına alınmasında ısrar etmektedirler.",
          analysis: "'insist that consent be secured (Passive Subjunctive: be + V3)' IELTS Writing Task 2'de üst düzey resmiyet sağlayan yapıdır; 'consent' hedeflenmiştir."
        },
        {
          id: "d27_s5",
          en: "Were healthcare systems to compromise on patient autonomy and fiduciary beneficence, institutional trust in computational diagnostics would deteriorate irrecoverably.",
          tr: "Şayet sağlık sistemleri hasta özerkliğinden ve vekalete dayalı iyilikseverlikten taviz verecek olursa, bilgisayarlı teşhislere yönelik kurumsal güven onarılamaz biçimde sarsılırdı.",
          analysis: "Inverted Subjunctive ('Were healthcare systems to compromise...') 'if' bağlacını kaldırarak kurulan en ileri düzey varsayım yapısıdır; 'autonomy' ve 'beneficence' kilit kavramlardır."
        }
      ],
      wordDictionary: {
        "consent": "bilgilendirilmiş rıza, resmi onay",
        "autonomy": "özerklik, kendi kaderini tayin hakkı",
        "fiduciary": "vekalet sorumluluğu taşıyan, güvene dayalı",
        "bias": "önyargı, sistemsel taraflılık",
        "transparency": "şeffaflık, denetlenebilirlik",
        "beneficence": "yararlılık, hastanın iyiliğini gözetme ilkesi",
        "algorithmic": "algoritmik",
        "protocol": "klinik protokol, kural dizisi",
        "accountability": "hesap verebilirlik, sorumluluk",
        "oversight": "denetim, gözetim",
        "disparity": "eşitsizlik, uçurum",
        "subordinate": "bağımlı, ikincil derecede"
      }
    }
  }
};


// Checkpoint Days Generator (Day 7, 14, 21, 28)
window.getCheckpointDayData = function(dayNumber) {
  const weekNumber = Math.floor(dayNumber / 7);
  const checkpoints = {
    1: {
      week: 1,
      summary: "Tebrikler! 1. Haftayı tamamladınız. Bu gün, ilk 6 günde öğrenilen 60 akademik kelimeyi (Biyoçeşitlilik, Yapay Zeka, Eğitim Tarihi, Salgınlar, Kentleşme ve Medya) ve temel tenseleri ölçen IELTS Academic Mini Deneme günüdür.",
      readingPassage: {
        title: "Academic Review: Multidisciplinary Frontiers in Contemporary Science (Week 1)",
        titleTr: "Akademik İnceleme: Çağdaş Bilimde Disiplinlerarası Ufuklar (1. Hafta)",
        text: "In recent years, the scientific community has witnessed a paradigm shift toward multidisciplinary collaboration. Marine biologists and climate scientists are discovering that coral reefs deteriorate rapidly when carbon emissions remain unchecked, threatening oceanic biodiversity. Concurrently, medical laboratories have revolutionized diagnosis by deploying sophisticated deep-learning algorithms, which achieve unprecedented diagnostic accuracy. However, historical analyses demonstrate that without public sanitary infrastructure and ethical regulatory oversight, technological innovation alone cannot prevent societal crises. Therefore, modern academic curricula are actively integrating empirical methodologies with civic responsibility to prepare scholars for twenty-first-century global challenges.",
        textTr: "Son yıllarda bilim camiası, disiplinlerarası işbirliğine doğru bir paradigma değişimine tanık olmuştur. Deniz biyologları ve iklim bilimcileri, karbon salınımları kontrol altına alınmadığında mercan resiflerinin hızla bozulduğunu ve okyanus biyoçeşitliliğini tehdit ettiğini keşfetmektedirler. Eşzamanlı olarak tıp laboratuvarları, benzeri görülmemiş teşhis doğruluğuna ulaşan gelişmiş derin öğrenme algoritmalarını devreye sokarak tanıyı kökten değiştirmiştir. Bununla birlikte tarihsel analizler, kamusal sıhhi altyapı ve etik düzenleyici denetim olmaksızın, teknolojik yeniliğin tek başına toplumsal krizleri önleyemeyeceğini göstermektedir. Bu nedenle modern akademik müfredatlar, araştırmacıları yirmi birinci yüzyılın küresel zorluklarına hazırlamak için deneysel metodolojileri sivil sorumlulukla aktif bir şekilde bütünleştirmektedir."
      },
      quizQuestions: [
        {
          q: "Metne göre mercan resiflerinin bozulmasına (deteriorate) ve biyoçeşitliliğin tehdit edilmesine ne sebep olmaktadır?",
          options: ["Kontrolsüz karbon salınımları (unchecked carbon emissions)", "Aşırı tıbbi yapay zeka kullanımı", "Eğitim müfredatındaki eksiklikler", "Denizaltı kazıları"],
          correct: 0,
          analysis: "Metindeki 'when carbon emissions remain unchecked, threatening oceanic biodiversity' ifadesi doğrudan doğru cevabı verir."
        },
        {
          q: "Paragraftaki 'have revolutionized' fiili hangi dilbilgisi kuralını temsil eder?",
          options: ["Present Perfect Tense (Yakın Geçmiş / Etkisi Süren Zaman)", "Past Continuous", "Past Simple", "Future Continuous"],
          correct: 0,
          analysis: "'have/has + V3' yapısı Present Perfect Tense formülüdür ve geçmişte başlayıp etkisi süren devrimi belirtir."
        },
        {
          q: "'accuracy' kelimesi bağlam içinde ne anlama gelmektedir?",
          options: ["Doğruluk, kesinlik derecesi", "Hız, sürat", "Maliyet, masraf", "Gecikme süresi"],
          correct: 0,
          analysis: "'Accuracy' kelimesi tam doğruluk ve hassasiyet anlamına gelir; yapay zekanın teşhisteki hatasızlığını vurgular."
        },
        {
          q: "Yazar metinde teknolojik gelişmelerle ilgili neyi savunmaktadır?",
          options: ["Sıhhi altyapı ve etik denetim olmadan teknolojinin tek başına krizleri önleyemeyeceğini", "Laboratuvarların tamamen kapatılması gerektiğini", "Mercan resiflerinin kurtarılamayacağını", "Tüm üniversitelerin tıp fakültesine dönüştürülmesini"],
          correct: 0,
          analysis: "'without public sanitary infrastructure and ethical regulatory oversight, technological innovation alone cannot prevent societal crises' cümlesinde açıkça ifade edilmiştir."
        },
        {
          q: "Metindeki 'empirical' kelimesinin Türkçe karşılığı nedir?",
          options: ["Deneysel, gözleme ve kanıta dayalı", "Hayali, kurgusal", "Geleneksel, ezbere dayalı", "Tehlikeli ve yasaklanmış"],
          correct: 0,
          analysis: "'Empirical' bilimsel yöntemde deneye, somut gözleme ve ölçüme dayalı anlamına gelir."
        }
      ]
    },
    2: {
      week: 2,
      summary: "2. Hafta Mini Denemesi: Geçmişin derinlikleri (Arkeoloji, Çöküş Teorileri), Göksel Mekanik ve Geleceğin Temiz Enerji Şebekelerini içeren IELTS Academic Deneme Sınavı.",
      readingPassage: {
        title: "Academic Review: Ancient Civilizations to Extraterrestrial Horizons (Week 2)",
        titleTr: "Akademik Değerlendirme: Kadim Uygarlıklardan Dünya Dışı Ufuklara (2. Hafta)",
        text: "Long before modern climatologists developed predictive models, ancient agricultural settlements had collapsed because prolonged drought and canal salinization had poisoned their irrigation base. For centuries, traditional scholars had been calculating celestial movements without realizing that the solar system orbits a common galactic center. Today, as contemporary engineers design future power networks, renewable utilities will harness deep geothermal reserves and photovoltaic arrays to phase out fossil fuel reliance permanently. By synthesizing historical archaeology with forward-looking space telemetry, future planetary explorers will be expanding human settlement while balancing technical viability with ecological prudence.",
        textTr: "Modern iklimbilimciler tahmin modelleri geliştirmeden çok önce, kadim tarım yerleşimleri çökmüştü; zira uzun süren kuraklık ve kanal tuzlanması sulama tabanlarını zehirlemişti. Yüzyıllar boyunca geleneksel bilginler, güneş sisteminin ortak bir galaktik merkez etrafında döndüğünü fark etmeksizin göksel hareketleri hesaplamaktaydılar. Bugün çağdaş mühendisler geleceğin enerji ağlarını tasarlarken, yenilenebilir hizmet sağlayıcılar fosil yakıt bağımlılığını kalıcı olarak sonlandırmak için derin jeotermal rezervlerden ve fotovoltaik panellerden yararlanacaktır. Tarihsel arkeolojiyi ileriye dönük uzay telemetrisiyle sentezleyerek geleceğin gezegen kaşifleri, teknik uygulanabilirlik ile ekolojik sağduyuyu dengelerken insan yerleşimini genişletiyor olacaklar."
      },
      quizQuestions: [
        {
          q: "Kadim yerleşimlerin çöküş nedeni olarak metinde ne gösterilmiştir?",
          options: ["Uzun süreli kuraklık ve kanal tuzlanmasının sulamayı zehirlemesi", "Göktaşı çarpması", "Yenilenebilir enerjinin yetersizliği", "Uzay sondalarının arızalanması"],
          correct: 0,
          analysis: "'prolonged drought and canal salinization had poisoned its irrigation base' ifadesi açıkça belirtir."
        },
        {
          q: "Paragraftaki 'had been calculating' fiil yapısı hangi Tense kuralıdır?",
          options: ["Past Perfect Continuous (Geçmişte Süregelen Zaman)", "Present Perfect", "Future Continuous", "Past Simple"],
          correct: 0,
          analysis: "'had been + V-ing' yapısı Past Perfect Continuous Tense'dir."
        },
        {
          q: "'will harness deep geothermal reserves' cümlesindeki 'harness' fiili ne anlama gelir?",
          options: ["Yararlanmak, enerjisini dizginleyip kullanmak", "Yok etmek", "Ertelemek", "Görmezden gelmek"],
          correct: 0,
          analysis: "'Harness' doğal bir kaynaktan yararlanmak, enerji üretmek için kontrol altına almak demektir."
        },
        {
          q: "Metindeki 'photovoltaic' terimi hangi enerji kaynağıyla ilgilidir?",
          options: ["Güneş enerjisi (Solar)", "Kömür enerjisi", "Nükleer fisyon", "Rüzgar enerjisi"],
          correct: 0,
          analysis: "'Photovoltaic' ışığı doğrudan elektriğe dönüştüren güneş paneli teknolojisidir."
        },
        {
          q: "Yazar metnin sonunda neyi vurgulamaktadır?",
          options: ["Teknik uygulanabilirlik ile ekolojik sağduyunun dengelenmesi gerektiğini", "Tarihsel kazıların durdurulmasını", "Fosil yakıtların artırılmasını", "Uzay çalışmalarının gereksizliğini"],
          correct: 0,
          analysis: "Son cümledeki 'balancing technical viability with ecological prudence' ana fikirdir."
        }
      ]
    },
    3: {
      week: 3,
      summary: "3. Hafta Mini Denemesi: Edilgen Çatı (Passive Voice), Modallar, Şart Cümleleri (Conditionals) ve Bilişsel Nörobilim metinlerini içeren kapsamlı IELTS seviye tespit sınavı.",
      readingPassage: {
        title: "Academic Review: Cognition, Algorithmic Media and Biosphere Stewardship (Week 3)",
        titleTr: "Akademik Değerlendirme: Biliş, Algoritmik Medya ve Biyosfer Koruyuculuğu (3. Hafta)",
        text: "In contemporary society, vast volumes of information are disseminated instantaneously through algorithmic feeds, which frequently exacerbates ideological polarization. Neurological studies demonstrate that sleep deprivation directly impairs synaptic consolidation, proving that cognitive resilience requires adequate rest. Furthermore, environmental economists warn that if coastal nations fail to implement proactive climate adaptation guidelines, rising sea levels will inundate fragile coastal deltas and displace millions of vulnerable citizens. To prevent irreversible catastrophe, rigorous bioethics oversight and community stewardship must be established across all technological and ecological domains.",
        textTr: "Çağdaş toplumda muazzam miktarda bilgi, ideolojik kutuplaşmayı sıklıkla artıran algoritmik akışlar aracılığıyla anında yayılmaktadır. Nörolojik çalışmalar, uyku yoksunluğunun sinaptik pekiştirmeyi doğrudan bozduğunu göstererek bilişsel dayanıklılığın yeterli dinlenme gerektirdiğini kanıtlamaktadır. Dahası, çevre ekonomistleri kıyı ülkelerinin önleyici iklim uyum yönergelerini uygulamaması durumunda, yükselen deniz seviyelerinin kırılgan kıyı deltalarını sular altında bırakacağı ve milyonlarca savunmasız vatandaşı yerinden edeceği konusunda uyarmaktadır. Geri döndürülemez felaketleri önlemek için, tüm teknolojik ve ekolojik alanlarda titiz biyoetik denetimi ve topluluk koruyuculuğu tesis edilmelidir."
      },
      quizQuestions: [
        {
          q: "Metne göre uyku yoksunluğu neye yol açmaktadır?",
          options: ["Sinaptik pekiştirmenin doğrudan bozulmasına", "Karbon salınımının artmasına", "Ekonomik büyümeye", "Algoritmaların hızlanmasına"],
          correct: 0,
          analysis: "'sleep deprivation directly impairs synaptic consolidation' cümlesinde doğrudan belirtilmiştir."
        },
        {
          q: "'are disseminated' fiili hangi dilbilgisi yapısındadır?",
          options: ["Passive Voice (Present Simple Edilgen)", "Active Voice", "Past Continuous", "Present Perfect"],
          correct: 0,
          analysis: "'am/is/are + V3' yapısı Present Simple Passive Voice formülüdür."
        },
        {
          q: "'inundate' kelimesinin anlamı nedir?",
          options: ["Sular altında bırakmak, basmak", "Kuraklaştırmak", "Satın almak", "İnşa etmek"],
          correct: 0,
          analysis: "'Inundate' sel veya yükselen deniz suyuyla bir alanı sular altında bırakmak demektir."
        },
        {
          q: "Paragraftaki 'if coastal nations fail to implement...' cümlesi hangi kuralı örneklendirir?",
          options: ["First Conditional (Tip 1 Şart Cümlesi)", "Third Conditional", "Past Perfect", "Inversion"],
          correct: 0,
          analysis: "'If + Present Simple, will + V1' kalıbı First Conditional yapısıdır."
        },
        {
          q: "Yazar metnin ana fikri olarak neyi savunmaktadır?",
          options: ["Teknolojik ve ekolojik alanlarda etik denetim ve koruyuculuğun şart olduğunu", "Sosyal medyanın tamamen yasaklanmasını", "Uykunun akademik başarıyı etkilemediğini", "Kıyı bölgelerinin tamamen terk edilmesini"],
          correct: 0,
          analysis: "Son cümledeki 'rigorous bioethics oversight and community stewardship must be established' ifadesi ana fikirdir."
        }
      ]
    },
    4: {
      week: 4,
      summary: "4. Hafta Mini Denemesi (Aylık Kapsamlı Deneme): Devrik Cümleler (Inversion), Ettirgen Yapılar (Causatives), Karşılaştırmalar ve Biyomimikri konularını kapsayan IELTS Band 6.0-6.5 Hazırlık Sınavı.",
      readingPassage: {
        title: "Academic Review: High-Speed Logistics, Biomimicry and Marine Conservation (Week 4)",
        titleTr: "Akademik Değerlendirme: Hızlı Ulaşım Lojistiği, Biyomimikri ve Deniz Koruma (4. Hafta)",
        text: "Comparative transport studies confirm that electrified high-speed rail corridors provide far greater energy efficiency and higher freight throughput than domestic aviation routes. Simultaneously, architectural engineers are applying biomimicry to model building ventilation on termite mounds, thereby creating sustainable urban structures that minimize environmental footprints. In pelagic marine zones, seldom do synthetic plastic polymers degrade naturally; rather, toxic microplastics accumulate throughout oceanic food chains. Therefore, national policymakers must have rigorous conservation regulations enforced to substitute single-use petrochemicals with biodegradable alternatives.",
        textTr: "Karşılaştırmalı ulaşım çalışmaları, elektrikli yüksek hızlı tren koridorlarının iç hat havacılık rotalarından çok daha fazla enerji verimliliği ve daha yüksek yük kapasitesi sağladığını doğrulamaktadır. Eşzamanlı olarak, mimarlık mühendisleri bina havalandırmasını termit yuvalarına modellemek için biyomimikriden yararlanmakta, böylece çevresel ayak izlerini en aza indiren sürdürülebilir kentsel yapılar yaratmaktadır. Açık deniz bölgelerinde sentetik plastik polimerler nadiren doğal olarak çözünür; bunun yerine toksik mikroplastikler okyanus besin zincirleri boyunca birikir. Bu nedenle, tek kullanımlık petrokimyasalları biyolojik olarak parçalanabilir alternatiflerle ikame etmek için ulusal politika yapıcıların titiz koruma yönetmeliklerini uygulatması şarttır."
      },
      quizQuestions: [
        {
          q: "Yüksek hızlı tren hatları iç hat uçuşlarına kıyasla hangi avantaja sahiptir?",
          options: ["Daha yüksek enerji verimliliği ve daha büyük yük taşıma kapasitesi", "Daha yüksek bilet fiyatları", "Daha yavaş ulaşım", "Daha fazla plastik kullanımı"],
          correct: 0,
          analysis: "'provide far greater energy efficiency and higher freight throughput than domestic aviation' ifadesinde belirtilmiştir."
        },
        {
          q: "'seldom do synthetic plastic polymers degrade' cümlesinde hangi dilbilgisi kuralı kullanılmıştır?",
          options: ["Inversion (Devrik Cümle Yapısı)", "Passive Voice", "Past Continuous", "Second Conditional"],
          correct: 0,
          analysis: "Cümlenin 'seldom' zarfı ile başlayıp 'do + subject + verb' şeklinde devrilmesi Inversion kuralıdır."
        },
        {
          q: "Mühendisler bina havalandırmasını tasarlarken nereden ilham almaktadır?",
          options: ["Termit (karınca) yuvalarından (biyomimikri)", "Fosil yakıt santrallerinden", "Uçak motorlarından", "Kutup buzullarından"],
          correct: 0,
          analysis: "'model building ventilation on termite mounds, thereby creating sustainable urban structures' ifadesinde açıkça belirtilmiştir."
        },
        {
          q: "'must have rigorous conservation regulations enforced' cümlesindeki yapı nedir?",
          options: ["Causative (Ettirgen) Yapı", "Simple Past", "Future Continuous", "Third Conditional"],
          correct: 0,
          analysis: "'have + object + V3' (bir şeyi başkasına yaptırmak/uygulatmak) Causative kalıbıdır."
        },
        {
          q: "Paragraftaki 'biodegradable' kelimesi ne anlama gelir?",
          options: ["Doğada biyolojik olarak çözünüp parçalanabilen", "Plastikten daha sert", "Geri dönüştürülemeyen", "Zehirli kimyasal içeren"],
          correct: 0,
          analysis: "'Biodegradable' çevreye zarar vermeden mikroorganizmalar tarafından doğal yolla parçalanabilen demektir."
        }
      ]
    }
  };

  const cp = checkpoints[weekNumber] || checkpoints[((weekNumber - 1) % 4) + 1];

  return {
    day: dayNumber,
    isCheckpoint: true,
    theme: `Haftalık Mini Deneme ${weekNumber} (Weekly Checkpoint)`,
    titleTr: `${dayNumber}. Gün: Haftalık IELTS Mini Deneme & İlerleme Kontrolü (Hafta ${weekNumber})`,
    checkpoint: cp
  };
};

// Main function to fetch or dynamically build ANY day in the infinite curriculum
window.getCurriculumDay = function(dayNumber) {
  // Checkpoint Day check (every 7th day: 7, 14, 21, 28, 35...)
  if (dayNumber % 7 === 0) {
    return window.getCheckpointDayData(dayNumber);
  }

  // Pre-authored Curated Day check (Days 1 to 27 except checkpoints)
  if (window.CURRICULUM_DAYS_DATABASE[dayNumber]) {
    return window.CURRICULUM_DAYS_DATABASE[dayNumber];
  }

  // Infinite Cyclic Resolver for days beyond 28:
  // Maps dynamically to the 24 pre-authored authentic IELTS days
  const learningDays = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27];
  const mappedDay = learningDays[(dayNumber - 1) % learningDays.length];
  const baseData = window.CURRICULUM_DAYS_DATABASE[mappedDay];

  return {
    ...baseData,
    day: dayNumber,
    isCheckpoint: false,
    titleTr: `${dayNumber}. Gün: ${baseData.grammar.name.split('(')[0].trim()} & ${baseData.theme.split(':')[0].trim()}`
  };
};

// Backwards compatibility array for initial 28 days list
window.CURRICULUM_DATA = [];
for (let d = 1; d <= 28; d++) {
  window.CURRICULUM_DATA.push(window.getCurriculumDay(d));
}


// IELTS Academic Master - Application Logic (Version 2.0)
// Infinite Learning Curriculum, Weekly Checkpoints, Spaced Repetition Engine,
// Deep Grammar Tree with Live Search, 50+ Roots & Affixes, Text-to-Speech

document.addEventListener('DOMContentLoaded', () => {
  // --- WORD DICTIONARY CACHE & BUILT-IN ACADEMIC MAPPING (FIX #1) ---
  const wordTranslationCache = JSON.parse(localStorage.getItem('ielts_word_cache') || '{}');

  const BUILTIN_COMMON_DICTIONARY = {
    // Reading Passage & Academic Core Verbs
    "investigate": { tr: "araştırmak, soruşturmak", enDef: "to carry out a systematic or formal inquiry to discover facts" },
    "investigates": { tr: "araştırır, inceler", enDef: "inquires into something systematically" },
    "investigating": { tr: "araştırarak, inceleyen", enDef: "carrying out research" },
    "investigated": { tr: "araştırılmış, incelendi", enDef: "past inquiry" },
    "influence": { tr: "etkilemek, tesir etmek", enDef: "have an influence on; impact" },
    "influences": { tr: "etkiler, tesir eder", enDef: "exerts influence" },
    "influencing": { tr: "etkileyerek", enDef: "affecting" },
    "influenced": { tr: "etkilenmiş", enDef: "impacted" },
    "warn": { tr: "uyarmak, ikaz etmek", enDef: "inform someone in advance of an impending risk" },
    "warns": { tr: "uyarır", enDef: "gives warning" },
    "warning": { tr: "uyarı, ikaz", enDef: "a statement or event that indicates a possible danger" },
    "warned": { tr: "uyardı", enDef: "informed of danger" },
    "fail": { tr: "başarısız olmak, yetersiz kalmak", enDef: "be unsuccessful in achieving a goal" },
    "fails": { tr: "başarısız olur", enDef: "is unsuccessful" },
    "failing": { tr: "başarısız olma, aksama", enDef: "not succeeding" },
    "failed": { tr: "başarısız oldu", enDef: "did not succeed" },
    "prioritize": { tr: "öncelik vermek", enDef: "treat something as being very important" },
    "prioritizes": { tr: "öncelik verir", enDef: "gives priority to" },
    "prioritizing": { tr: "önceliklendirerek", enDef: "giving priority" },
    "prioritized": { tr: "önceliklendirilmiş", enDef: "treated as a priority" },
    "face": { tr: "yüzleşmek, karşılaşmak", enDef: "confront and deal with a difficult situation" },
    "faces": { tr: "yüzleşir, karşı karşıya kalır", enDef: "confronts" },
    "facing": { tr: "karşı karşıya olan", enDef: "confronting" },
    "faced": { tr: "karşılaştı", enDef: "confronted" },
    "enhance": { tr: "artırmak, geliştirmek, yükseltmek", enDef: "intensify, increase, or further improve quality" },
    "enhances": { tr: "artırır, geliştirir", enDef: "improves quality or value" },
    "enhancing": { tr: "geliştirerek, artıran", enDef: "improving" },
    "enhanced": { tr: "geliştirilmiş, artırılmış", enDef: "improved" },
    "transform": { tr: "dönüştürmek, değiştirmek", enDef: "make a marked change in form, nature, or appearance" },
    "transforms": { tr: "dönüştürür", enDef: "converts or changes fundamentally" },
    "transforming": { tr: "dönüştürerek", enDef: "changing fundamentally" },
    "transformed": { tr: "dönüştürülmüş", enDef: "fundamentally changed" },
    "encourage": { tr: "teşvik etmek, cesaretlendirmek", enDef: "give support, confidence, or hope" },
    "encourages": { tr: "teşvik eder", enDef: "promotes or supports" },
    "encouraging": { tr: "cesaret verici, teşvik eden", enDef: "giving encouragement" },
    "encouraged": { tr: "teşvik edildi", enDef: "inspired or supported" },
    "adopt": { tr: "benimsemek, uygulamaya koymak", enDef: "choose to take up, follow, or use" },
    "adopts": { tr: "benimser", enDef: "accepts or implements" },
    "adopting": { tr: "benimseyerek", enDef: "implementing" },
    "adopted": { tr: "benimsenmiş", enDef: "taken up or accepted" },
    "balance": { tr: "dengelemek, denge", enDef: "keep or put in a steady position" },
    "balancing": { tr: "dengeleyerek, dengeleme", enDef: "keeping equal or balanced" },
    "balanced": { tr: "dengeli", enDef: "in a state of equilibrium" },
    "establish": { tr: "kurmak, tesis etmek, oluşturmak", enDef: "set up on a firm or permanent basis" },
    "establishes": { tr: "tesis eder, kurar", enDef: "sets up or institutes" },
    "establishing": { tr: "kurarak", enDef: "instituting" },
    "established": { tr: "yerleşik, köklü, kurulmuş", enDef: "having been in existence for a long time" },
    "require": { tr: "gerektirmek, ihtiyaç duymak", enDef: "need for a particular purpose" },
    "requires": { tr: "gerektirir", enDef: "demands" },
    "requiring": { tr: "gerektirerek", enDef: "demanding" },
    "required": { tr: "gerekli, zorunlu", enDef: "necessary" },
    "provide": { tr: "sağlamak, temin etmek", enDef: "make available for use; supply" },
    "provides": { tr: "sağlar, sunar", enDef: "supplies" },
    "providing": { tr: "sağlayarak", enDef: "supplying" },
    "provided": { tr: "sağlanan, temin edilmiş", enDef: "supplied" },
    "support": { tr: "desteklemek, destek", enDef: "give assistance to" },
    "supports": { tr: "destekler", enDef: "assists" },
    "supporting": { tr: "destekleyerek", enDef: "giving support" },
    "supported": { tr: "desteklenmiş", enDef: "assisted" },
    "benefit": { tr: "fayda sağlamak, yararlanmak", enDef: "gain an advantage, profit from" },
    "benefits": { tr: "faydalar, yararlar", enDef: "advantages" },
    "benefiting": { tr: "yararlanarak", enDef: "profiting from" },
    "benefited": { tr: "yararlandı", enDef: "gained advantage" },
    "develop": { tr: "geliştirmek, gelişmek", enDef: "grow or cause to become more mature" },
    "develops": { tr: "gelişir, geliştirir", enDef: "advances" },
    "developing": { tr: "gelişmekte olan", enDef: "progressing" },
    "developed": { tr: "gelişmiş", enDef: "advanced" },
    "create": { tr: "yaratmak, oluşturmak", enDef: "bring something into existence" },
    "creates": { tr: "yaratır, üretir", enDef: "brings about" },
    "creating": { tr: "oluşturarak", enDef: "bringing about" },
    "created": { tr: "oluşturulmuş", enDef: "produced" },
    "allow": { tr: "izin vermek, olanak sağlamak", enDef: "give the necessary opportunity for" },
    "allows": { tr: "olanak sağlar", enDef: "enables" },
    "allowing": { tr: "olanak tanıyarak", enDef: "permitting" },
    "allowed": { tr: "izin verilen", enDef: "permitted" },
    "enable": { tr: "olanak tanımak, mümkün kılmak", enDef: "give the authority or means to do something" },
    "enables": { tr: "mümkün kılar", enDef: "makes possible" },
    "enabling": { tr: "olanak sağlayarak", enDef: "making possible" },
    "enabled": { tr: "etkinleştirilmiş, olanak tanınmış", enDef: "made possible" },
    "improve": { tr: "iyileştirmek, geliştirmek", enDef: "make or become better" },
    "improves": { tr: "iyileştirir", enDef: "enhances" },
    "improving": { tr: "iyileşerek", enDef: "getting better" },
    "improved": { tr: "iyileştirilmiş", enDef: "made better" },
    "increase": { tr: "artmak, artırmak", enDef: "become or make greater in size or amount" },
    "increases": { tr: "artırır", enDef: "makes greater" },
    "increasing": { tr: "artan, artış gösteren", enDef: "growing" },
    "increased": { tr: "artmış", enDef: "elevated" },
    "reduce": { tr: "azaltmak, düşürmek", enDef: "make smaller or less in amount or degree" },
    "reduces": { tr: "azaltır", enDef: "lessens" },
    "reducing": { tr: "azaltarak", enDef: "lessening" },
    "reduced": { tr: "azaltılmış", enDef: "diminished" },
    "maintain": { tr: "sürdürmek, korumak", enDef: "cause or enable a state to continue" },
    "maintains": { tr: "sürdürür", enDef: "keeps up" },
    "maintaining": { tr: "sürdürerek", enDef: "keeping in existence" },
    "maintained": { tr: "korunan, sürdürülen", enDef: "kept in existence" },
    "indicate": { tr: "belirtmek, göstermek", enDef: "point out; show" },
    "indicates": { tr: "gösterir, işaret eder", enDef: "shows" },
    "suggest": { tr: "önermek, ileri sürmek, göstermek", enDef: "put forward for consideration" },
    "suggests": { tr: "ileri sürer, gösterir", enDef: "proposes" },
    "consider": { tr: "düşünmek, hesaba katmak", enDef: "think carefully about" },
    "considers": { tr: "göz önüne alır", enDef: "thinks about" },
    "remain": { tr: "kalmak, varlığını korumak", enDef: "continue to exist" },
    "remains": { tr: "kalır, sürdürür", enDef: "stays" },

    // Reading Passage & Academic Core Nouns
    "institution": { tr: "kurum, kuruluş", enDef: "an organization founded for an educational or social purpose" },
    "institutions": { tr: "kurumlar, kuruluşlar", enDef: "established organizations" },
    "scholar": { tr: "akademisyen, bilgin", enDef: "a specialist in a particular branch of study" },
    "scholars": { tr: "akademisyenler, araştırmacılar", enDef: "learned academics" },
    "society": { tr: "toplum", enDef: "people living together in a community" },
    "societies": { tr: "toplumlar", enDef: "groups of communities" },
    "societal": { tr: "toplumsal", enDef: "relating to society or social relations" },
    "stability": { tr: "istikrar, denge", enDef: "the state of being stable" },
    "system": { tr: "sistem, düzen", enDef: "a set of things working together" },
    "systems": { tr: "sistemler", enDef: "interconnected mechanisms" },
    "tool": { tr: "araç, gereç", enDef: "a device or implement used to carry out a function" },
    "tools": { tr: "araçlar, gereçler", enDef: "instruments or mechanisms" },
    "workflow": { tr: "iş akışı", enDef: "the sequence of processes in work" },
    "workflows": { tr: "iş akışları", enDef: "sequences of tasks" },
    "program": { tr: "program, plan", enDef: "a planned series of future events or activities" },
    "programs": { tr: "programlar", enDef: "planned initiatives" },
    "citizen": { tr: "vatandaş, yurttaş", enDef: "a recognized subject or national of a state" },
    "citizens": { tr: "vatandaşlar", enDef: "inhabitants of a state" },
    "method": { tr: "yöntem, metot", enDef: "a particular procedure for accomplishing something" },
    "methods": { tr: "yöntemler", enDef: "systematic approaches" },
    "habit": { tr: "alışkanlık", enDef: "a regular tendency or practice" },
    "habits": { tr: "alışkanlıklar", enDef: "regular routines" },
    "progress": { tr: "ilerleme, gelişim", enDef: "forward movement toward improvement" },
    "respect": { tr: "saygı", enDef: "a feeling of deep admiration or consideration" },
    "prosperity": { tr: "refah, zenginlik", enDef: "the state of flourishing, thriving, or well-being" },
    "degradation": { tr: "bozulma, gerileme, aşınma", enDef: "the process in which quality is degraded" },
    "efficiency": { tr: "verimlilik, etkililik", enDef: "the state of achieving maximum productivity" },
    "community": { tr: "topluluk", enDef: "a group of people having a characteristic in common" },
    "communities": { tr: "topluluklar", enDef: "social groups" },
    "education": { tr: "eğitim", enDef: "systematic instruction or learning" },
    "environment": { tr: "çevre, ortam", enDef: "the surroundings in which organisms operate" },
    "technology": { tr: "teknoloji", enDef: "application of scientific knowledge" },
    "research": { tr: "araştırma", enDef: "systematic investigation of materials and sources" },
    "policy": { tr: "politika, ilke", enDef: "a course of action adopted by a government or organization" },
    "policies": { tr: "politikalar", enDef: "courses of action" },
    "evidence": { tr: "kanıt, delil", enDef: "facts indicating whether a belief is true" },
    "data": { tr: "veri, bilgiler", enDef: "facts and statistics for analysis" },
    "analysis": { tr: "analiz, çözümleme", enDef: "detailed examination of elements" },
    "process": { tr: "süreç, işlem", enDef: "a series of actions taken to achieve an end" },
    "challenge": { tr: "zorluk, meydan okuma", enDef: "a demanding task or problem" },
    "resource": { tr: "kaynak", enDef: "a supply of materials, money, or assets" },
    "resources": { tr: "kaynaklar", enDef: "supplies of assets or materials" },
    "impact": { tr: "etki, tesir", enDef: "a marked effect or influence" },
    "trend": { tr: "eğilim, akım", enDef: "a general direction of development" },
    "issue": { tr: "sorun, mesele", enDef: "an important topic or problem" },
    "culture": { tr: "kültür", enDef: "customs and social behavior of a society" },
    "economy": { tr: "ekonomi", enDef: "wealth and resources of a region" },
    "future": { tr: "gelecek", enDef: "the time that is to come" },

    // Core Adjectives & Adverbs
    "modern": { tr: "modern, çağdaş", enDef: "relating to the present or recent times" },
    "global": { tr: "küresel, evrensel", enDef: "relating to the whole world; worldwide" },
    "sustainable": { tr: "sürdürülebilir", enDef: "able to be maintained at a steady rate without depleting resources" },
    "critical": { tr: "kritik, çok önemli, hayati", enDef: "of the greatest importance to the outcome" },
    "severe": { tr: "şiddetli, ağır, sert", enDef: "very great, intense, or strict" },
    "technological": { tr: "teknolojik", enDef: "relating to or using technology" },
    "traditional": { tr: "geleneksel", enDef: "existing in or as part of a tradition" },
    "daily": { tr: "günlük", enDef: "done, produced, or occurring every day" },
    "ultimately": { tr: "nihayetinde, sonuç olarak", enDef: "finally, in the end" },
    "innovative": { tr: "yenilikçi, inovatif", enDef: "featuring new methods; advanced and original" },
    "deep": { tr: "derin, esaslı", enDef: "profound or extensive" },
    "lasting": { tr: "kalıcı, uzun ömürlü", enDef: "enduring or continuing for a long time" },
    "furthermore": { tr: "dahası, ayrıca, üstelik", enDef: "in addition; moreover" },
    "consequently": { tr: "sonuç olarak, bu nedenle", enDef: "as a result" },
    "significant": { tr: "önemli, kayda değer", enDef: "sufficiently great or important to be worthy of attention" },
    "essential": { tr: "gerekli, elzem, temel", enDef: "absolutely necessary; extremely important" },
    "crucial": { tr: "hayati, can alıcı, çok önemli", enDef: "decisive or critical" },
    "effective": { tr: "etkili, verimli", enDef: "successful in producing an intended result" },
    "potential": { tr: "potansiyel, olası", enDef: "having the capacity to develop in the future" },
    "primary": { tr: "birincil, temel, ana", enDef: "of chief importance; principal" },
    "complex": { tr: "karmaşık", enDef: "consisting of many connected parts" },
    "diverse": { tr: "çeşitli, farklı", enDef: "showing a great deal of variety" },
    "academic": { tr: "akademik", enDef: "relating to education and scholarship" },
    "scientific": { tr: "bilimsel", enDef: "based on the principles of science" },
    "digital": { tr: "dijital, sayısal", enDef: "involving computer technology" },
    "economic": { tr: "ekonomik", enDef: "relating to economics or the economy" },
    "environmental": { tr: "çevresel", enDef: "relating to the natural world" },
    "social": { tr: "sosyal, toplumsal", enDef: "relating to society or its organization" },
    "however": { tr: "ancak, oysa, yine de", enDef: "introducing a contrasting statement" },
    "therefore": { tr: "bu sebeple, dolayısıyla", enDef: "for that reason; consequently" },
    "moreover": { tr: "ayrıca, bundan başka", enDef: "as a further matter; besides" },
    "nevertheless": { tr: "yine de, buna rağmen", enDef: "in spite of that" },
    "meanwhile": { tr: "bu sırada, bu esnada", enDef: "in the intervening period of time" },

    // Connectors & Grammar Words
    "how": { tr: "nasıl", enDef: "in what way or by what method" },
    "and": { tr: "ve", enDef: "used to connect words or clauses" },
    "that": { tr: "şu, o, -ki, olduğunu", enDef: "used to identify a specific thing or clause" },
    "if": { tr: "eğer, şayet", enDef: "introducing a conditional clause" },
    "to": { tr: "-e, -a, mek/mak için", enDef: "infinitive marker or preposition of direction" },
    "might": { tr: "olabilir, -ebilirdi (ihtimal)", enDef: "expressing possibility" },
    "can": { tr: "-ebilir, yeteneği olmak", enDef: "able to" },
    "in": { tr: "içinde, -de/-da", enDef: "preposition indicating location or enclosure" },
    "their": { tr: "onların", enDef: "belonging to people previously mentioned" },
    "with": { tr: "ile, beraber", enDef: "accompanied by" },
    "for": { tr: "için, amacıyla", enDef: "with the purpose of" },
    "will": { tr: "-ecek, -acak (gelecek zaman)", enDef: "expressing future intention or certainty" }
  };

  // Asynchronous API Fetcher for unknown words (Free Dictionary & MyMemory API)
  async function fetchOnlineTranslation(word, titleEl, meaningEl, defEl) {
    if (wordTranslationCache[word]) {
      const cached = wordTranslationCache[word];
      meaningEl.textContent = cached.tr;
      defEl.textContent = cached.enDef || 'İngilizce - Türkçe Karşılık';
      return;
    }

    try {
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|tr`);
      if (!res.ok) throw new Error('API network response error');
      const data = await res.json();
      if (data && data.responseData && data.responseData.translatedText) {
        let trText = data.responseData.translatedText.trim();
        if (trText.toLowerCase() === word.toLowerCase()) {
          trText = 'Akademik İngilizce kelime';
        }
        wordTranslationCache[word] = { tr: trText, enDef: 'Çevrimiçi Sözlük Çevirisi' };
        try { localStorage.setItem('ielts_word_cache', JSON.stringify(wordTranslationCache)); } catch(e){}

        if (titleEl && titleEl.getAttribute('data-active-word') === word) {
          meaningEl.textContent = trText;
          defEl.textContent = 'Çevrimiçi Sözlük Çevirisi';
        }
        return;
      }
    } catch (e) {
      // Fallback: Free Dictionary API for English definition
      try {
        const dictRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
        if (dictRes.ok) {
          const dictData = await dictRes.json();
          if (Array.isArray(dictData) && dictData[0] && dictData[0].meanings && dictData[0].meanings[0]) {
            const firstMeaning = dictData[0].meanings[0];
            const defText = firstMeaning.definitions[0]?.definition || 'İngilizce Tanım';
            const pos = firstMeaning.partOfSpeech || 'kelime';
            const result = { tr: `(${pos}) terim`, enDef: defText };
            wordTranslationCache[word] = result;
            try { localStorage.setItem('ielts_word_cache', JSON.stringify(wordTranslationCache)); } catch(err){}
            if (titleEl && titleEl.getAttribute('data-active-word') === word) {
              meaningEl.textContent = result.tr;
              defEl.textContent = result.enDef;
            }
            return;
          }
        }
      } catch (err) {}
    }

    if (titleEl && titleEl.getAttribute('data-active-word') === word) {
      meaningEl.textContent = 'Akademik Metin Kelimesi';
      defEl.textContent = 'Telaffuz için hoparlöre tıklayın';
    }
  }

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
    // Force cache bust & update check for Version 3.2.0
    const CURRENT_APP_VERSION = 'v4.0.0';
    if (localStorage.getItem('ielts_app_version') !== CURRENT_APP_VERSION) {
      localStorage.setItem('ielts_app_version', CURRENT_APP_VERSION);
      if ('caches' in window) {
        caches.keys().then(keys => {
          keys.forEach(k => caches.delete(k));
        });
      }
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js?v=3.2.0')
          .then((reg) => {
            reg.update();
            console.log('IELTS Master: Service Worker Registered & Updated (v3.2.0)');
          })
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
        let dayData = window.getCurriculumDay(state.currentDay);
    if (!dayData || !dayData.reading || !dayData.reading.sentences || !dayData.reading.sentences[0] || dayData.reading.sentences[0].en.includes('Modern institutions') || dayData.reading.sentences[0].en.startsWith(' Modern')) {
      console.warn('[IELTS GUARD] Stale or corrupted reading detected, restoring authentic Day ' + state.currentDay);
      dayData = window.CURRICULUM_DAYS_DATABASE[state.currentDay] || window.getCurriculumDay(state.currentDay);
    }
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

          <!-- Quick Jump & Infinite Day Input & Cache Refresh -->
          <div class="flex items-center gap-2 flex-wrap justify-end">
            <button id="force-cache-refresh-btn" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 text-xs font-bold transition flex items-center gap-1.5" title="Önbelleği Temizle & Yeni Müfredatı Zorla Yükle">
              <i class="fas fa-sync-alt text-xs"></i> <span>Müfredatı Yenile</span>
            </button>
            <div class="flex items-center gap-1">
              <label class="text-xs font-semibold uppercase tracking-wider text-slate-400">Güne Atla:</label>
              <input type="number" id="quick-day-input" min="1" value="${state.currentDay}" class="w-16 px-2 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 border-none text-slate-800 dark:text-white text-sm font-bold text-center focus:ring-2 focus:ring-indigo-500">
              <button id="quick-day-go-btn" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition">Git</button>
            </div>
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
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                <i class="fas fa-book-reader mr-1"></i> İnteraktif Okuma Paragrafı
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                ${dayData.day}. Gün Özel Metni
              </span>
            </div>
            <h3 class="text-xl font-black text-slate-900 dark:text-white mt-1.5">${dayData.reading.title}</h3>
            <p class="text-xs font-medium text-slate-500 dark:text-slate-400">${dayData.reading.titleTr}</p>
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

        <!-- Sentence Translation Feature (Fix #2) -->
        <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
          <button id="toggle-full-translation-btn" class="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition flex items-center gap-2 border border-indigo-200/70 dark:border-slate-600 shadow-xs cursor-pointer">
            <i class="fas fa-language text-base text-indigo-600 dark:text-indigo-400"></i>
            <span>🇹🇷 Tüm Çeviriyi Göster / Gizle</span>
          </button>
          <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <i class="fas fa-info-circle text-indigo-500"></i> Cümleye tıklayarak Türkçe çevirisini açıp kapatabilirsiniz
          </span>
        </div>

        <!-- Full Translation Collapsible Box -->
        <div id="full-translation-box" class="hidden mt-4 p-4 rounded-xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-900/90 border border-indigo-200/80 dark:border-slate-700 space-y-3 animate-fade-in shadow-xs">
          <div class="text-xs font-bold text-indigo-800 dark:text-indigo-300 flex items-center justify-between pb-2 border-b border-indigo-100 dark:border-slate-800">
            <span class="flex items-center gap-2"><i class="fas fa-file-alt text-indigo-600 dark:text-indigo-400"></i> Paragrafın Türkçe Tam Çevirisi (Cümle Cümle)</span>
            <span class="text-[11px] font-normal text-slate-400">Toplam ${dayData.reading.sentences.length} Cümle</span>
          </div>
          ${dayData.reading.sentences.map((sent, idx) => `
            <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/80 space-y-1">
              <div class="flex items-start justify-between gap-2">
                <div class="text-xs font-bold text-slate-800 dark:text-slate-200"><span class="text-indigo-600 mr-1">${idx + 1}.</span>${sent.en}</div>
                <button class="speak-btn text-slate-400 hover:text-indigo-600 p-1 flex-shrink-0" data-speak="${encodeURIComponent(sent.en)}" title="Dinle"><i class="fas fa-volume-up text-xs"></i></button>
              </div>
              <div class="text-xs font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/40 p-2 rounded-lg">
                🇹🇷 ${sent.tr}
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pl-1">
                ${sent.analysis}
              </div>
            </div>
          `).join('')}
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

    // Force Cache Refresh Button
    const refreshBtn = container.querySelector('#force-cache-refresh-btn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', async () => {
        showToast('Önbellek temizleniyor ve yeni müfredat zorla indiriliyor...', 'info');
        try {
          localStorage.removeItem('ielts_app_build');
          localStorage.removeItem('ielts_word_cache');
          if ('caches' in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(k => caches.delete(k)));
          }
          if ('serviceWorker' in navigator) {
            const regs = await navigator.serviceWorker.getRegistrations();
            await Promise.all(regs.map(r => r.unregister()));
          }
        } catch (e) {
          console.warn('Cache purge note:', e);
        }
        setTimeout(() => {
          window.location.replace(window.location.pathname + '?v=4.0.0&force_reload=' + Date.now());
        }, 300);
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

    // Toggle full sentence translations (Fix #2)
    const toggleTranslationBtn = container.querySelector('#toggle-full-translation-btn');
    const fullTranslationBox = container.querySelector('#full-translation-box');
    if (toggleTranslationBtn && fullTranslationBox) {
      toggleTranslationBtn.addEventListener('click', () => {
        fullTranslationBox.classList.toggle('hidden');
        const isHidden = fullTranslationBox.classList.contains('hidden');
        toggleTranslationBtn.innerHTML = isHidden 
          ? '<i class="fas fa-language text-base text-indigo-600 dark:text-indigo-400"></i> <span>🇹🇷 Tüm Çeviriyi Göster / Gizle</span>'
          : '<i class="fas fa-times text-base text-rose-500"></i> <span>🇹🇷 Çeviriyi Gizle</span>';
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
    const cleanWord = (rawWord || '').toLowerCase().replace(/[^a-z]/g, '');
    if (!cleanWord) return;

    const titleEl = popup.querySelector('#word-popup-title');
    const meaningEl = popup.querySelector('#word-popup-meaning');
    const defEl = popup.querySelector('#word-popup-def');
    const speakBtn = popup.querySelector('#word-popup-speak');

    titleEl.setAttribute('data-active-word', cleanWord);

    // 1. Direct target vocabulary in today's lesson
    const targetVocab = (dayData.words || []).find(w => w.word.toLowerCase() === cleanWord);
    
    // 2. Reading specific dictionary
    const dictMeaning = (dayData.reading && dayData.reading.wordDictionary) 
      ? (dayData.reading.wordDictionary[cleanWord] || dayData.reading.wordDictionary[rawWord.toLowerCase()]) 
      : null;

    // 3. Cache
    const cached = wordTranslationCache[cleanWord];

    // 4. Builtin common dictionary or global academic vocabulary pool
    const poolWord = (window.ACADEMIC_VOCABULARY_POOL || []).find(w => w.word.toLowerCase() === cleanWord);
    const builtinWord = BUILTIN_COMMON_DICTIONARY[cleanWord];

    // Helper to find root / lemma if ending with s, es, ed, ing, ly
    let lemmaWord = null;
    if (!targetVocab && !dictMeaning && !cached && !poolWord && !builtinWord) {
      const candidates = [];
      if (cleanWord.endsWith('ies')) candidates.push(cleanWord.slice(0, -3) + 'y');
      if (cleanWord.endsWith('es')) candidates.push(cleanWord.slice(0, -2));
      if (cleanWord.endsWith('s')) candidates.push(cleanWord.slice(0, -1));
      if (cleanWord.endsWith('ing')) {
        candidates.push(cleanWord.slice(0, -3));
        candidates.push(cleanWord.slice(0, -3) + 'e');
      }
      if (cleanWord.endsWith('ed')) {
        candidates.push(cleanWord.slice(0, -2));
        candidates.push(cleanWord.slice(0, -1));
      }
      if (cleanWord.endsWith('ly')) candidates.push(cleanWord.slice(0, -2));

      for (const cand of candidates) {
        const pMatch = (window.ACADEMIC_VOCABULARY_POOL || []).find(w => w.word.toLowerCase() === cand);
        const bMatch = BUILTIN_COMMON_DICTIONARY[cand];
        if (pMatch) {
          lemmaWord = { word: cand, tr: pMatch.tr, enDef: pMatch.enDef };
          break;
        }
        if (bMatch) {
          lemmaWord = { word: cand, tr: bMatch.tr, enDef: bMatch.enDef };
          break;
        }
      }
    }

    if (targetVocab) {
      titleEl.textContent = `${targetVocab.word} (${targetVocab.type})`;
      meaningEl.textContent = targetVocab.tr;
      defEl.textContent = targetVocab.enDef;
      speakBtn.onclick = () => speak(targetVocab.word);
    } else if (dictMeaning) {
      titleEl.textContent = cleanWord;
      meaningEl.textContent = dictMeaning;
      defEl.textContent = 'Paragraftaki akademik kelime';
      speakBtn.onclick = () => speak(cleanWord);
    } else if (cached) {
      titleEl.textContent = cleanWord;
      meaningEl.textContent = cached.tr;
      defEl.textContent = cached.enDef || 'İngilizce - Türkçe Sözlük';
      speakBtn.onclick = () => speak(cleanWord);
    } else if (poolWord) {
      titleEl.textContent = `${poolWord.word} (${poolWord.type})`;
      meaningEl.textContent = poolWord.tr;
      defEl.textContent = poolWord.enDef;
      speakBtn.onclick = () => speak(poolWord.word);
    } else if (builtinWord) {
      titleEl.textContent = cleanWord;
      meaningEl.textContent = builtinWord.tr;
      defEl.textContent = builtinWord.enDef;
      speakBtn.onclick = () => speak(cleanWord);
    } else if (lemmaWord) {
      titleEl.textContent = `${cleanWord} (Kök: ${lemmaWord.word})`;
      meaningEl.textContent = lemmaWord.tr;
      defEl.textContent = lemmaWord.enDef;
      speakBtn.onclick = () => speak(cleanWord);
    } else {
      // Show loading and fetch online translation asynchronously (Fix #1)
      titleEl.textContent = cleanWord;
      meaningEl.textContent = 'Çevriliyor... ⏳';
      defEl.textContent = 'Sözlükten getiriliyor...';
      speakBtn.onclick = () => speak(cleanWord);

      fetchOnlineTranslation(cleanWord, titleEl, meaningEl, defEl);
    }

    const rect = targetElement.getBoundingClientRect();
    const parent = targetElement.closest('.relative') || document.body;
    const parentRect = parent.getBoundingClientRect();
    popup.style.top = `${rect.bottom - parentRect.top + 8}px`;
    popup.style.left = `${Math.min(Math.max(10, rect.left - parentRect.left), parentRect.width - 260)}px`;
    popup.classList.remove('hidden');

    speak(cleanWord, 0.95);
  }

  function selectSentence(sentenceId, dayData, container) {
    const card = container.querySelector('#sentence-analysis-card');

    // Toggle off if clicking the already active sentence (Fix #2)
    if (state.activeSentenceId === sentenceId) {
      state.activeSentenceId = null;
      container.querySelectorAll('.interactive-sentence').forEach(el => el.classList.remove('active-sentence'));
      if (card) card.classList.add('hidden');
      return;
    }

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

    if (card) {
      card.innerHTML = `
        <div class="flex items-start justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
              <i class="fas fa-language"></i>
            </span>
            <span class="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">Cümlenin Türkçe Çevirisi</span>
          </div>
          <div class="flex items-center gap-2">
            <button class="speak-btn text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 p-1 cursor-pointer" data-speak="${encodeURIComponent(sent.en)}" title="Cümleyi Dinle">
              <i class="fas fa-volume-up"></i>
            </button>
            <button id="close-sentence-card-btn" class="text-slate-400 hover:text-rose-500 p-1 cursor-pointer" title="Kapat">
              <i class="fas fa-times text-xs"></i>
            </button>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-indigo-100/70 dark:bg-indigo-950/50 text-sm font-bold text-indigo-950 dark:text-indigo-100 mb-2 leading-relaxed border border-indigo-200 dark:border-indigo-900/60">
          🇹🇷 "${sent.tr}"
        </div>
        <div class="p-2.5 rounded-lg bg-white/80 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
          <strong class="text-indigo-700 dark:text-indigo-300">Gramer & Yapı:</strong> ${sent.analysis}
        </div>
      `;
      card.classList.remove('hidden');
      card.querySelector('.speak-btn').addEventListener('click', () => speak(sent.en));
      const closeBtn = card.querySelector('#close-sentence-card-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          state.activeSentenceId = null;
          container.querySelectorAll('.interactive-sentence').forEach(el => el.classList.remove('active-sentence'));
          card.classList.add('hidden');
        });
      }
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
    if (!cardObj || cardObj.matched) return;

    // Fix #5: If clicked card is already the first selected card, cancel selection
    if (state.firstSelectedCard && state.firstSelectedCard.el === cardEl) {
      cardEl.classList.remove('selected');
      state.firstSelectedCard = null;
      return;
    }

    if (cardEl.classList.contains('selected')) return;

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

    // Disable all options and remove conflicting background classes
    const allBtns = container.querySelectorAll('.quiz-option-btn');
    allBtns.forEach(b => {
      b.disabled = true;
      b.style.pointerEvents = 'none';
      b.classList.remove('bg-white', 'dark:bg-slate-900/50', 'hover:border-indigo-500');

      // Highlight the correct option in emerald
      if (b.getAttribute('data-option') === q.correctMeaning) {
        b.classList.remove('border-slate-200', 'dark:border-slate-700', 'text-slate-800', 'dark:text-slate-200');
        b.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600', 'shadow-md');
        const icon = b.querySelector('i');
        if (icon) icon.className = 'fas fa-check-circle text-white';
      }
    });

    if (isCorrect) {
      state.quizScore += 10;
    } else {
      // Selected option was wrong: turn rose
      selectedBtn.classList.remove('border-slate-200', 'dark:border-slate-700', 'text-slate-800', 'dark:text-slate-200');
      selectedBtn.classList.add('bg-rose-500', 'text-white', 'border-rose-600', 'shadow-md');
      const icon = selectedBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-times-circle text-white';
    }

    // Exactly 1-second (1000ms) delay before moving to next question
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
    }, 1000);
  }

  // --- SUB-VIEW 4: WORDS LIST WITH SRS BADGES (FIX #4 FOCUS PRESERVED) ---
  function renderWordsList(container, filteredWords, allWords) {
    container.innerHTML = `
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div class="relative w-full sm:w-72">
            <i class="fas fa-search absolute left-3.5 top-3.5 text-slate-400 text-sm"></i>
            <input type="text" id="bank-search-input" value="${state.bankSearch}" placeholder="Kelime veya Türkçe anlam ara..." class="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm dark:text-white">
          </div>

          <div class="flex items-center gap-2 overflow-x-auto w-full sm:w-auto" id="bank-filter-group">
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}" data-filter="all">Tümü (${allWords.length})</button>
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'due' ? 'bg-rose-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}" data-filter="due">Tekrarı Gelenler</button>
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'struggling' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}" data-filter="struggling">Zorlanılanlar</button>
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'mastered' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}" data-filter="mastered">Ustalaşılanlar</button>
            <button class="bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.bankFilter === 'favorites' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}" data-filter="favorites">Favoriler</button>
          </div>
        </div>

        <div id="bank-words-container" class="space-y-3"></div>
      </div>
    `;

    const wordsContainer = container.querySelector('#bank-words-container');
    const searchInput = container.querySelector('#bank-search-input');
    const filterBtns = container.querySelectorAll('.bank-filter-btn');

    function getFilteredWordsList() {
      const now = Date.now();
      const q = state.bankSearch.toLowerCase().trim();
      return allWords.filter(w => {
        const sr = getWordSRInfo(w.id);
        const matchesSearch = !q || w.word.toLowerCase().includes(q) || w.tr.toLowerCase().includes(q);
        if (!matchesSearch) return false;

        if (state.bankFilter === 'due') return sr.nextReview <= now || sr.level === 1;
        if (state.bankFilter === 'struggling') return sr.wrongCount >= 1;
        if (state.bankFilter === 'mastered') return sr.level >= 4;
        if (state.bankFilter === 'favorites') return state.favoriteWords.includes(w.id);
        return true;
      });
    }

    function updateWordsListDom() {
      const words = getFilteredWordsList();
      if (words.length === 0) {
        wordsContainer.innerHTML = `<div class="p-8 text-center text-xs text-slate-400 bg-slate-50/50 dark:bg-slate-900/40 rounded-xl">Aramaya veya filtreye uygun kelime bulunamadı.</div>`;
        return;
      }

      wordsContainer.innerHTML = words.map(w => {
        const sr = getWordSRInfo(w.id);
        const isFav = state.favoriteWords.includes(w.id);
        return `
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-start gap-3">
              <button class="fav-toggle-btn text-base ${isFav ? 'text-amber-500' : 'text-slate-300 hover:text-amber-500'}" data-word-id="${w.id}">
                <i class="${isFav ? 'fas' : 'far'} fa-star"></i>
              </button>
              <div>
                <div class="flex items-baseline gap-2 flex-wrap">
                  <span class="font-bold text-base text-slate-900 dark:text-white">${w.word}</span>
                  <span class="text-xs text-slate-400 font-mono">${w.phonetic}</span>
                  <span class="text-[11px] px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${w.type}</span>
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
      }).join('');

      wordsContainer.querySelectorAll('.speak-btn').forEach(btn => {
        btn.addEventListener('click', () => speak(decodeURIComponent(btn.getAttribute('data-speak'))));
      });
      wordsContainer.querySelectorAll('.fav-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          toggleFavoriteWord(btn.getAttribute('data-word-id'));
          updateWordsListDom();
        });
      });
    }

    searchInput.addEventListener('input', (e) => {
      state.bankSearch = e.target.value;
      updateWordsListDom();
    });

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        state.bankFilter = btn.getAttribute('data-filter');
        filterBtns.forEach(b => {
          const filter = b.getAttribute('data-filter');
          if (filter === state.bankFilter) {
            const activeColor = filter === 'due' ? 'bg-rose-600 text-white' : (filter === 'struggling' ? 'bg-amber-600 text-white' : (filter === 'mastered' ? 'bg-emerald-600 text-white' : (filter === 'favorites' ? 'bg-amber-600 text-white' : 'bg-indigo-600 text-white')));
            b.className = `bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${activeColor}`;
          } else {
            b.className = `bank-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300`;
          }
        });
        updateWordsListDom();
      });
    });

    updateWordsListDom();
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
  // 5. IRREGULAR VERBS & GAME (FIX #3 & FIX #4)
  // =========================================================================
  function renderIrregularVerbs(container) {
    const data = window.IRREGULAR_VERBS_DATA;
    let filteredVerbs = data.verbs.filter(v => {
      const q = state.irregularSearch.toLowerCase().trim();
      return !q || v.v1.toLowerCase().includes(q) || v.v2.toLowerCase().includes(q) || v.v3.toLowerCase().includes(q) || v.tr.toLowerCase().includes(q);
    });

    function renderIrregularRowsHtml(verbs) {
      if (verbs.length === 0) {
        return `<tr><td colspan="6" class="p-4 text-center text-slate-400">Aranan kritere uygun fiil bulunamadı.</td></tr>`;
      }
      return verbs.map(v => `
        <tr>
          <td class="p-2 font-bold text-indigo-600 dark:text-indigo-400">${v.v1}</td>
          <td class="p-2 font-semibold text-slate-800 dark:text-slate-200">${v.v2}</td>
          <td class="p-2 font-semibold text-slate-800 dark:text-slate-200">${v.v3}</td>
          <td class="p-2 text-slate-700 dark:text-slate-300 font-medium">${v.tr}</td>
          <td class="p-2 text-slate-400 italic">"${v.example}"</td>
          <td class="p-2"><button class="speak-btn text-slate-400 hover:text-indigo-600 cursor-pointer" data-speak="${v.v1}, ${v.v2}, ${v.v3}"><i class="fas fa-volume-up"></i></button></td>
        </tr>
      `).join('');
    }

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in pb-16">
        <!-- Game Box -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/40 dark:from-slate-800 dark:via-slate-800 dark:to-indigo-950/30 border border-indigo-100 dark:border-slate-700 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">Boşluk Doldurma Oyunu</span>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">Doğru Düzensiz Fiil Formunu Seçin</h3>
            </div>
            <span id="irr-streak-badge" class="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-xs font-bold">
              🔥 Seri: ${state.irregularStreak}
            </span>
          </div>
          <div id="irregular-game-box" class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80"></div>
        </div>

        <!-- Table -->
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white">Düzensiz Fiiller Kütüphanesi <span id="irr-count">(${filteredVerbs.length})</span></h3>
            <input type="text" id="irr-search-input" value="${state.irregularSearch}" placeholder="Fiil veya anlam ara..." class="w-full sm:w-64 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs dark:text-white focus:ring-2 focus:ring-indigo-500">
          </div>
          <div class="overflow-x-auto max-h-96">
            <table class="w-full text-left text-xs">
              <thead class="border-b border-slate-200 dark:border-slate-700 text-slate-400">
                <tr><th class="p-2">V1</th><th class="p-2">V2</th><th class="p-2">V3</th><th class="p-2">Anlamı</th><th class="p-2">Örnek</th><th class="p-2">Ses</th></tr>
              </thead>
              <tbody id="irr-tbody" class="divide-y divide-slate-100 dark:divide-slate-800">
                ${renderIrregularRowsHtml(filteredVerbs)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    function bindTbodySpeak() {
      container.querySelectorAll('#irr-tbody .speak-btn').forEach(btn => {
        btn.addEventListener('click', () => speak(decodeURIComponent(btn.getAttribute('data-speak'))));
      });
    }

    // Fix #4: Only update table rows on search input, keeping input focused
    container.querySelector('#irr-search-input').addEventListener('input', (e) => {
      state.irregularSearch = e.target.value;
      const q = state.irregularSearch.toLowerCase().trim();
      const matched = data.verbs.filter(v => {
        return !q || v.v1.toLowerCase().includes(q) || v.v2.toLowerCase().includes(q) || v.v3.toLowerCase().includes(q) || v.tr.toLowerCase().includes(q);
      });
      container.querySelector('#irr-count').textContent = `(${matched.length})`;
      container.querySelector('#irr-tbody').innerHTML = renderIrregularRowsHtml(matched);
      bindTbodySpeak();
    });

    bindTbodySpeak();
    renderIrregularQuestion(container.querySelector('#irregular-game-box'), data.gameQuestions);
  }

  // Fix #3: Irregular Verbs 1-Second Visual Feedback Delay
  function renderIrregularQuestion(box, questions) {
    const q = questions[state.irregularQuizIndex % questions.length];
    if (!q) return;

    box.innerHTML = `
      <div>
        <div class="text-xs text-slate-400 mb-1">İstenen Form: <strong class="uppercase text-indigo-600 dark:text-indigo-400">${q.requiredForm}</strong> (Fiil: ${q.baseVerb})</div>
        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">${q.sentence.replace('______', '<span class="text-amber-500 underline font-mono">______</span>')}</h4>
        <p class="text-xs text-slate-500 italic mb-4">${q.tr}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2" id="irr-options-container">
          ${q.options.map(opt => `
            <button class="irr-option-btn p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-xs hover:border-indigo-500 transition text-slate-800 dark:text-slate-200 cursor-pointer" data-val="${opt}">${opt}</button>
          `).join('')}
        </div>
      </div>
    `;

    box.querySelectorAll('.irr-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const allBtns = box.querySelectorAll('.irr-option-btn');
        // Disable all buttons to prevent multiple clicks during delay
        allBtns.forEach(b => {
          b.disabled = true;
          b.style.pointerEvents = 'none';
        });

        const selectedVal = btn.getAttribute('data-val');
        const isCorrect = selectedVal === q.answer;

        if (isCorrect) {
          state.irregularStreak++;
          btn.className = 'irr-option-btn p-3 rounded-xl border border-green-600 bg-green-500 text-white font-bold text-xs shadow-md transition';
        } else {
          state.irregularStreak = 0;
          btn.className = 'irr-option-btn p-3 rounded-xl border border-red-600 bg-red-500 text-white font-bold text-xs shadow-md transition';

          // Correct option also turns green so user learns the right answer
          allBtns.forEach(b => {
            if (b.getAttribute('data-val') === q.answer) {
              b.className = 'irr-option-btn p-3 rounded-xl border border-green-600 bg-green-500 text-white font-bold text-xs shadow-md transition';
            }
          });
        }

        const streakBadge = document.getElementById('irr-streak-badge');
        if (streakBadge) {
          streakBadge.textContent = `🔥 Seri: ${state.irregularStreak}`;
        }

        // 1-second delay (1000ms) before advancing to next question
        setTimeout(() => {
          state.irregularQuizIndex++;
          renderIrregularQuestion(box, questions);
        }, 1000);
      });
    });
  }

  // =========================================================================
  // 6. ENGLISH GRAMMAR TREE & ENCYCLOPEDIA (FIX #4 INPUT FOCUS PRESERVED)
  // =========================================================================
  function renderStudyGuide(container) {
    const categories = window.STUDY_GUIDE_DATA.categories;

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
          
          <!-- LEFT: Branching Tree Navigator (5 cols) -->
          <div id="guide-tree-container" class="lg:col-span-5 space-y-3 max-h-[700px] overflow-y-auto pr-1"></div>

          <!-- RIGHT: Detailed Topic Content View (7 cols) -->
          <div id="guide-detail-container" class="lg:col-span-7"></div>

        </div>
      </div>
    `;

    const treeContainer = container.querySelector('#guide-tree-container');
    const detailContainer = container.querySelector('#guide-detail-container');
    const searchInput = container.querySelector('#grammar-search-input');

    function updateGuideViews() {
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

      // Render Tree HTML
      if (filteredCategories.length === 0) {
        treeContainer.innerHTML = `<div class="p-6 text-center text-xs text-slate-400 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">Aramanıza uygun dilbilgisi konusu bulunamadı.</div>`;
      } else {
        treeContainer.innerHTML = filteredCategories.map(cat => {
          const isExpanded = state.expandedCategories.has(cat.id);
          return `
            <div class="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-sm">
              <div class="tree-category-header p-3.5 flex items-center justify-between bg-slate-50/70 dark:bg-slate-900/40 cursor-pointer select-none" data-cat-id="${cat.id}">
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
                    <div class="tree-topic-item p-2.5 rounded-lg text-xs font-semibold cursor-pointer transition ${isActive ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}" data-topic-id="${t.id}">
                      ${t.title}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('');

        // Bind Category Toggle without re-rendering search input
        treeContainer.querySelectorAll('.tree-category-header').forEach(header => {
          header.addEventListener('click', () => {
            const catId = header.getAttribute('data-cat-id');
            if (state.expandedCategories.has(catId)) {
              state.expandedCategories.delete(catId);
            } else {
              state.expandedCategories.add(catId);
            }
            updateGuideViews();
          });
        });

        // Bind Topic Selection without re-rendering search input
        treeContainer.querySelectorAll('.tree-topic-item').forEach(item => {
          item.addEventListener('click', () => {
            state.activeTopicId = item.getAttribute('data-topic-id');
            updateGuideViews();
          });
        });
      }

      // Render Topic Detail View
      if (activeTopic) {
        detailContainer.innerHTML = renderTopicDetailCard(activeTopic);
        detailContainer.querySelectorAll('.speak-btn').forEach(btn => {
          btn.addEventListener('click', () => speak(decodeURIComponent(btn.getAttribute('data-speak'))));
        });
      } else {
        detailContainer.innerHTML = `
          <div class="p-8 text-center text-slate-400 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">Lütfen bir konu seçin.</div>
        `;
      }
    }

    // Fix #4: Input event updates only tree and detail, preserving search input focus and mobile keyboard
    searchInput.addEventListener('input', (e) => {
      state.guideSearch = e.target.value;
      updateGuideViews();
    });

    updateGuideViews();
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
