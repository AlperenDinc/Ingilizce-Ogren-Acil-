// Comprehensive English Grammar Encyclopedia & Study Guide (Version 2.0)
// Complete Grammar Tree: 12 Tenses, Modals, Passive, Conditionals, Relative Clauses,
// Noun Clauses, Gerunds & Infinitives, Comparatives, Prepositions, Linking Words & IELTS Strategies

window.STUDY_GUIDE_DATA = {
  categories: [
    {
      id: "tenses",
      name: "1. Tenseler (Bütün Zamanlar - 12 Tense)",
      icon: "fa-clock",
      description: "İngilizcedeki tüm 12 zaman kuralı, zaman çizgisi (timeline), formülleri ve IELTS akademik kullanımları.",
      topics: [
        {
          id: "present_simple",
          title: "Present Simple Tense (Geniş Zaman)",
          formula: "(+) S + V1 (s/es) | (-) S + do/does not + V1 | (?) Do/Does + S + V1?",
          summary: "Genel doğrular, bilimsel yasalar, rutinler ve değişmeyen durumlar.",
          b1Explanation: "Alışkanlıklar ve doğa kanunları için kullanılır. 3. tekil şahıslarda (He, She, It) fiile '-s, -es, -ies' takısı eklenir.",
          ieltsSignificance: "IELTS Writing Task 1'de genel şema/harita açıklamalarında, Task 2'de güncel gerçekleri ifade ederken temel çatıdır.",
          commonMistakes: "3. tekil şahıs '-s' takısını unutmak veya olumsuzda 'does not' varken fiile tekrar '-s' eklemek.",
          examples: [
            { en: "The earth rotates on its axis once every twenty-four hours.", tr: "Dünya kendi ekseni etrafında her 24 saatte bir döner." },
            { en: "Renewable energy infrastructure reduces greenhouse gas emissions substantially.", tr: "Yenilenebilir enerji altyapısı sera gazı salınımlarını önemli ölçüde azaltır." },
            { en: "Economic disparity often leads to heightened societal tension.", tr: "Ekonomik uçurum sıklıkla artan toplumsal gerilime yol açar." }
          ]
        },
        {
          id: "present_continuous",
          title: "Present Continuous Tense (Şimdiki Zaman)",
          formula: "(+) S + am/is/are + V-ing | (-) S + am/is/are not + V-ing | (?) Am/Is/Are + S + V-ing?",
          summary: "Şu anda devam eden eylemler ve günümüzde yaşanmakta olan geçici eğilimler/trendler.",
          b1Explanation: "Konuşma anında yapılan veya şu sıralar gerçekleşmekte olan değişimleri anlatır. Durum fiilleri (stative verbs: know, believe, like) genellikle '-ing' almaz.",
          ieltsSignificance: "IELTS Writing ve Speaking'de güncel toplumsal eğilimleri ('A growing number of citizens are adopting...') ifade etmekte kullanılır.",
          commonMistakes: "'am/is/are' yardımcı fiilini atlayıp doğrudan 'He working' demek.",
          examples: [
            { en: "Global temperatures are rising at an alarming pace worldwide.", tr: "Küresel sıcaklıklar dünya genelinde endişe verici bir hızla yükselmektedir." },
            { en: "More students are opting for virtual distance learning platforms.", tr: "Giderek daha fazla öğrenci çevrim içi uzaktan eğitim platformlarını tercih etmektedir." },
            { en: "Urban planners are currently redesigning metropolitan transport grids.", tr: "Şehir plancıları şu anda metropol ulaşım şebekelerini yeniden tasarlamaktadır." }
          ]
        },
        {
          id: "past_simple",
          title: "Past Simple Tense (Geçmiş Zaman)",
          formula: "(+) S + V2 (-ed / irregular) | (-) S + did not + V1 | (?) Did + S + V1?",
          summary: "Geçmişte belirli bir zamanda tamamlanmış kesin eylemler.",
          b1Explanation: "Geçmişte olup bitmiş olaylar. Düzensiz fiiller 2. halini alır (went, saw, wrote). Soru ve olumsuzda fiil V1'e döner.",
          ieltsSignificance: "IELTS Writing Task 1'de geçmişe ait verileri aktarırken (örn: 'In 2010, vehicle sales plummeted') ana zamandır.",
          commonMistakes: "Olumsuz veya soru cümlesinde 'did' kullandıktan sonra fiili tekrar geçmiş zamanda bırakmak (Did you went? YANLIŞ).",
          examples: [
            { en: "The Industrial Revolution initiated monumental technological shifts in Europe.", tr: "Sanayi Devrimi Avrupa'da anıtsal teknolojik dönüşümler başlattı." },
            { en: "Between 2005 and 2015, overseas tourism revenue expanded dramatically.", tr: "2005 ile 2015 yılları arasında denizaşırı turizm geliri dramatik şekilde genişledi." },
            { en: "The government implemented stringent emission regulations last decade.", tr: "Hükümet geçen on yılda sıkı salınım düzenlemeleri uyguladı." }
          ]
        },
        {
          id: "past_continuous",
          title: "Past Continuous Tense (Geçmişte Süregelen Zaman)",
          formula: "(+) S + was/were + V-ing | (-) S + was/were not + V-ing | (?) Was/Were + S + V-ing?",
          summary: "Geçmişte belirli bir anda devam etmekte olan eylemler veya geçmişte başka bir eylemle kesilen süreçler.",
          b1Explanation: "Geçmişte belli bir saatte ne yapıyordunuz? 'When' (ardından Past Simple) ve 'While' (ardından Past Continuous) ile çok sık kullanılır.",
          ieltsSignificance: "Speaking Part 2 hikaye anlatımında arka plan sahnesi kurarken ('While I was preparing for my university exam...') zenginlik katar.",
          commonMistakes: "'When'den sonra Past Continuous getirmek (When I was waking up yerine When I woke up tercih edilir).",
          examples: [
            { en: "While researchers were evaluating the trial data, an anomaly occurred.", tr: "Araştırmacılar deney verilerini değerlendirirken bir anormallik meydana geldi." },
            { en: "The economy was recovering steadily until the sudden commodity crisis struck.", tr: "Ani emtia krizi vurana kadar ekonomi istikrarlı biçimde toparlanıyordu." },
            { en: "Citizens were actively protesting against the proposed environmental degradation.", tr: "Vatandaşlar önerilen çevresel tahribata karşı aktif olarak protesto gösteriyordu." }
          ]
        },
        {
          id: "present_perfect",
          title: "Present Perfect Tense (Yakın Geçmiş / Etkisi Süren Zaman)",
          formula: "(+) S + have/has + V3 | (-) S + have/has not + V3 | (?) Have/Has + S + V3?",
          summary: "Geçmişte başlayıp etkisi günümüze uzanan veya zamanı kesin belirtilmemiş deneyimler ve değişimler.",
          b1Explanation: "Zaman belirtilmez. Anahtar kelimeler: recently, lately, since, for, already, yet, so far, in recent years.",
          ieltsSignificance: "IELTS Writing Task 2 giriş paragraflarında ('In recent years, higher education has witnessed dramatic transformations') en popüler tensetir.",
          commonMistakes: "Kesin geçmiş zaman zarfı (yesterday, in 2010, two days ago) ile kullanmak. Bu zarflarla Past Simple kullanılır!",
          examples: [
            { en: "Technological advancements have revolutionized modern communicative habits.", tr: "Teknolojik gelişmeler modern iletişim alışkanlıklarında devrim yaratmıştır." },
            { en: "Scholars have conducted comprehensive studies on juvenile literacy.", tr: "Akademisyenler genç okuryazarlığı üzerine kapsamlı çalışmalar yürütmüştür." },
            { en: "The municipality has revitalized dilapidated commercial districts since 2018.", tr: "Belediye, 2018'den beri harap haldeki ticari bölgeleri canlandırmıştır." }
          ]
        },
        {
          id: "present_perfect_continuous",
          title: "Present Perfect Continuous (Geçmişten Beri Süregelen Zaman)",
          formula: "(+) S + have/has been + V-ing | (-) S + have/has not been + V-ing | (?) Have/Has + S + been + V-ing?",
          summary: "Geçmişte başlayıp kesintisiz olarak konuşma anına kadar süren ve süresi vurgulanan eylemler.",
          b1Explanation: "Eylemin ne kadar süredir devam ettiği vurgulanır ('for 10 years', 'since morning').",
          ieltsSignificance: "Toplumsal ve çevresel sorunların devam eden sürecini vurgulamak için kullanılır: 'Scientists have been warning leaders for decades.'",
          commonMistakes: "Durum bildiren (stative) fiillerle '-ing' kullanmak (I have been knowing him YANLIŞ -> I have known him DOĞRU).",
          examples: [
            { en: "Ecologists have been monitoring the shrinking polar ice caps for three decades.", tr: "Ekolojistler otuz yıldır küçülen kutup buzullarını gözlemlemektedir." },
            { en: "Urban communities have been struggling with housing inflation since the policy shift.", tr: "Kentsel topluluklar politika değişikliğinden bu yana konut enflasyonu ile mücadele etmektedir." },
            { en: "Researchers have been investigating sustainable energy alternatives tirelessly.", tr: "Araştırmacılar yorulmaksızın sürdürülebilir enerji alternatiflerini araştırmaktadır." }
          ]
        },
        {
          id: "past_perfect",
          title: "Past Perfect Tense (Önceki Geçmiş Zaman)",
          formula: "(+) S + had + V3 | (-) S + had not + V3 | (?) Had + S + V3?",
          summary: "Geçmişteki iki olaydan daha önce gerçekleşmiş olanı belirtmek ('Geçmişin geçmişi').",
          b1Explanation: "Geçmişte iki olay varsa, önce olan 'had + V3', sonra olan 'Past Simple (V2)' ile yazılır.",
          ieltsSignificance: "IELTS Writing ve Speaking'de geçmişteki sebep-sonuç ilişkilerini ve zaman sıralamasını kusursuz kurmayı sağlar.",
          commonMistakes: "Cümlede geçmişte tek bir olay varken durduk yere 'had + V3' kullanmak. Karşılaştırılacak ikinci bir geçmiş an olmalıdır.",
          examples: [
            { en: "Before the government imposed regulations, factories had contaminated the river extensively.", tr: "Hükümet düzenlemeler getirmeden önce fabrikalar nehri yoğun şekilde kirletmişti." },
            { en: "By the time the medical team arrived, the epidemic had spread across three districts.", tr: "Sağlık ekibi varana kadar salgın üç bölgeye yayılmıştı." },
            { en: "They had constructed flood barriers prior to the catastrophic storm.", tr: "Felaket getiren fırtınadan önce taşkın bariyerleri inşa etmişlerdi." }
          ]
        },
        {
          id: "past_perfect_continuous",
          title: "Past Perfect Continuous (Geçmişte Belli Bir Süre Sürmüş Zaman)",
          formula: "(+) S + had been + V-ing | (-) S + had not been + V-ing | (?) Had + S + been + V-ing?",
          summary: "Geçmişteki başka bir olaydan önceye kadar belirli bir süre devam etmiş süreç.",
          b1Explanation: "Geçmişteki bir andan önce ne kadar süre boyunca eylemin sürdüğünü ve geçmişteki yorgunluk/etkiyi anlatır.",
          ieltsSignificance: "C1 seviyesi karmaşık cümlelerde geçmişteki süreci ve arka plan çabalarını anlatırken kullanılır.",
          commonMistakes: "Zaman uyumuna dikkat etmemek, 'has been' ile karıştırmak.",
          examples: [
            { en: "Scientists had been conducting experiments for years before they achieved a breakthrough.", tr: "Bilim insanları bir çığır açmadan önce yıllardır deneyler yürütmekteydi." },
            { en: "The economy had been weakening for months prior to the central bank's intervention.", tr: "Merkez bankasının müdahalesinden önce ekonomi aylardır zayıflamaktaydı." }
          ]
        },
        {
          id: "future_simple",
          title: "Future Simple: Will vs. Be Going to (Gelecek Zaman)",
          formula: "Will + V1 (Tahmin/Karar) | am/is/are going to + V1 (Plan/Kanıt)",
          summary: "Geleceğe yönelik planlar, anlık kararlar, sözler ve kanıta dayalı tahminler.",
          b1Explanation: "Will: anlık kararlar, kesin olmayan tahminler. Be going to: elde kanıt olan durumlar veya önceden yapılmış planlar.",
          ieltsSignificance: "Task 1 gelecek projeksiyon grafiklerinde ('Energy demand will surge until 2040') ve Task 2 çözüm önerilerinde temeldir.",
          commonMistakes: "Zaman bağlaçlarından sonra (when, after, as soon as, if) 'will' kullanmak (When it will rain YANLIŞ -> When it rains DOĞRU).",
          examples: [
            { en: "Clean renewable technologies will dominate global energy generation by mid-century.", tr: "Temiz yenilenebilir teknolojiler yüzyılın ortasına kadar küresel enerji üretimine hakim olacaktır." },
            { en: "Looking at the current statistical trajectory, fossil reserves are going to deplete rapidly.", tr: "Mevcut istatistiki seyre bakıldığında, fosil rezervler hızla tükenecektir." },
            { en: "Governments are going to allocate further subsidies to green agricultural initiatives.", tr: "Hükümetler yeşil tarım girişimlerine daha fazla sübvansiyon tahsis edecekler." }
          ]
        },
        {
          id: "future_continuous",
          title: "Future Continuous Tense (Gelecekte Süregelen Zaman)",
          formula: "(+) S + will be + V-ing | (-) S + will not be + V-ing | (?) Will + S + be + V-ing?",
          summary: "Gelecekte belirli bir anda veya dönemde devam ediyor olacak eylemler.",
          b1Explanation: "Örn: 'This time next year, I will be studying in London' (Gelecek yıl bu zamanlar Londra'da okuyor olacağım).",
          ieltsSignificance: "Writing Task 2 ve Speaking Part 3'te vizyon ve gelecek projeksiyonu sunarken çok yüksek puan getiren ileri düzey bir yapıdır.",
          commonMistakes: "'will be' sonrası V1 kullanmak veya fiile '-ing' takısını unutmak.",
          examples: [
            { en: "In twenty years, millions of professionals will be telecommuting from smart eco-cities.", tr: "Yirmi yıl içinde milyonlarca profesyonel akıllı eko-kentlerden uzaktan çalışıyor olacaktır." },
            { en: "By next decade, autonomous electric shuttles will be operating in major capitals.", tr: "Gelecek on yıla kadar otonom elektrikli servisler büyük başkentlerde çalışıyor olacaktır." }
          ]
        },
        {
          id: "future_perfect",
          title: "Future Perfect Tense (Gelecekte Tamamlanmış Zaman)",
          formula: "(+) S + will have + V3 | (-) S + will not have + V3 | (?) Will + S + have + V3?",
          summary: "Gelecekte belirli bir tarihten önce tamamlanmış/bitmiş olacak eylemler.",
          b1Explanation: "Anahtar ifade: 'By + gelecek zaman' (By 2030, by next year, by tomorrow evening).",
          ieltsSignificance: "IELTS Writing Task 1 gelecek tahmin grafiklerinde (örn: 'By 2050, solar output will have surpassed coal') doğrudan 7.0+ göstergesidir.",
          commonMistakes: "'By' kalıbını gördüğü halde Future Simple (will + V1) yazmak.",
          examples: [
            { en: "By 2040, medical engineers will have developed artificial organs to eliminate transplant waitlists.", tr: "2040 yılına kadar tıp mühendisleri, nakil bekleme listelerini ortadan kaldırmak için yapay organlar geliştirmiş olacaklar." },
            { en: "By the end of the century, urbanization will have encompassed over eighty percent of mankind.", tr: "Yüzyılın sonuna kadar kentleşme insanlığın yüzde sekseninden fazlasını kapsamış olacaktır." }
          ]
        },
        {
          id: "future_perfect_continuous",
          title: "Future Perfect Continuous (Gelecekte Belli Bir Süredir Devam Ediyor Olacak Zaman)",
          formula: "(+) S + will have been + V-ing | (-) S + will not have been + V-ing",
          summary: "Gelecekteki belirli bir noktada bir eylemin ne kadar süredir devam ediyor olacağını vurgular.",
          b1Explanation: "'By next June, I will have been learning English for five years.'",
          ieltsSignificance: "En ileri İngilizce zaman yapısıdır; akademik makalelerde uzun soluklu bilimsel projeleri anlatırken kullanılır.",
          commonMistakes: "Çok karmaşık olduğu için yardımcı fiil sıralamasını karıştırmak (will have been doing).",
          examples: [
            { en: "By next year, the environmental coalition will have been protecting this wetland for three decades.", tr: "Gelecek yıla kadar çevre koalisyonu otuz yıldır bu sulak alanı koruyor olacaktır." }
          ]
        }
      ]
    },
    {
      id: "modals",
      name: "2. Modals (Kipler ve Yardımcı Fiiller)",
      icon: "fa-shield-alt",
      description: "Yetenek, zorunluluk, izin, ihtimal ve geçmiş pişmanlık kipleri.",
      topics: [
        {
          id: "modals_ability",
          title: "Ability & Possibility (Can, Could, Be able to)",
          formula: "Can + V1 (Genel yetenek) | Could + V1 (Geçmiş genel yetenek) | Be able to (Tüm zamanlarda)",
          summary: "Bir şeyi yapabilme becerisi, fiziksel güç veya olanak.",
          b1Explanation: "Geçmişte tek bir seferde zor bir şeyi başardıysak 'could' yerine 'was/were able to' veya 'managed to' kullanılır.",
          ieltsSignificance: "Bireylerin ve kurumların potansiyelini anlatırken kullanılır.",
          commonMistakes: "Can'den sonra 'to' getirmek (Can to do YANLIŞ -> Can do DOĞRU).",
          examples: [
            { en: "Advanced satellite arrays can detect minute shifts in ocean temperatures.", tr: "Gelişmiş uydu dizilimleri okyanus sıcaklıklarındaki ufak değişimleri tespit edebilir." },
            { en: "Through international funding, the municipality was able to restore the historical monument.", tr: "Uluslararası fonlama sayesinde belediye tarihi anıtı restore edebildi." }
          ]
        },
        {
          id: "modals_obligation",
          title: "Obligation & Advice (Must, Have to, Should, Ought to)",
          formula: "Must + V1 (Kişisel/Kuvvetli zorunluluk) | Have to + V1 (Dış kaynaklı kural) | Should / Ought to (Tavsiye)",
          summary: "Zorunluluklar, kurallar ve akademik tavsiyeler.",
          b1Explanation: "Mustn't: YASAKTIR ('You mustn't smoke'). Don't have to: Zorunlu DEĞİLDİR, gerek yoktur ('You don't have to come'). Bu ikisi tamamen farklıdır!",
          ieltsSignificance: "Task 2 öneri paragraflarında 'Governments should enact stricter laws' veya 'Authorities must allocate funds' gibi çözüm sunarken temeldir.",
          commonMistakes: "'Mustn't' ile 'Don't have to'yu karıştırmak.",
          examples: [
            { en: "Industrial enterprises must comply with international environmental benchmarks.", tr: "Sanayi kuruluşları uluslararası çevre standartlarına uymak zorundadır." },
            { en: "Policymakers should prioritize pedagogical investments over military expenditure.", tr: "Politika yapıcılar pedagojik yatırımlara askeri harcamalardan daha çok öncelik vermelidir." }
          ]
        },
        {
          id: "modals_deduction",
          title: "Modals of Deduction (Must, Might, Could, Can't)",
          formula: "Must be (Kesin öyle olmalı - %95) | Might/Could be (Olabilir - %50) | Cannot be (Asla olamaz - %99)",
          summary: "Eldeki kanıtlara dayalı mantıksal çıkarım yapma.",
          b1Explanation: "İmkansızlık durumunda 'mustn't be' KULLANILMAZ; 'can't be' kullanılır! (It can't be true = Doğru olamaz).",
          ieltsSignificance: "Akademik Yumuşatma (Hedging) için elzemdir. Kesin iddialarda bulunmak yerine 'might contribute to' demek band puanını yükseltir.",
          commonMistakes: "İmkansız çıkarımda 'mustn't' kullanmak.",
          examples: [
            { en: "Given the dramatic decline in revenue, the corporation must be facing insolvency.", tr: "Gelirdeki sert düşüş göz önüne alındığında, şirket iflasla yüz yüze olmalıdır." },
            { en: "Such unverified claims cannot be accepted without rigorous empirical validation.", tr: "Böylesi doğrulanmamış iddialar, titiz ampirik doğrulama olmadan kabul edilemez." }
          ]
        },
        {
          id: "past_modals",
          title: "Past Modals & Regrets (Should have, Could have, Must have + V3)",
          formula: "Should have + V3 (Yapmalıydı ama yapmadı) | Must have + V3 (Geçmişe dair güçlü çıkarım) | Could have + V3 (Yapabilirdi ama yapmadı)",
          summary: "Geçmişe yönelik eleştiri, pişmanlık ve geçmiş çıkarımları.",
          b1Explanation: "Örn: 'I should have studied harder' (Daha çok çalışmalıydım - pişmanlık). 'He must have missed the bus' (Otobüsü kaçırmış olmalı - geçmiş çıkarım).",
          ieltsSignificance: "Tarihsel analizler ve geçmiş hataların eleştirisi için kusursuz bir C1 gramer kanıtıdır.",
          commonMistakes: "Should have sonrası V1 yazmak.",
          examples: [
            { en: "Authorities should have implemented flood defenses prior to the monsoon season.", tr: "Yetkililer muson sezonu öncesinde sel bariyerleri uygulamalıydı (ama uygulamadı)." },
            { en: "The ancient civilization must have experienced prolonged severe drought.", tr: "Antik medeniyet uzun süren şiddetli bir kuraklık yaşamış olmalı." }
          ]
        }
      ]
    },
    {
      id: "passive",
      name: "3. Passive Voice & Causatives (Edilgen Çatı)",
      icon: "fa-industry",
      description: "Akademik nesnellik, süreç anlatımı (Process Diagrams) ve ettirgen yapılar.",
      topics: [
        {
          id: "passive_basics",
          title: "Passive Voice Çekimleri ve Mantığı",
          formula: "Present: am/is/are + V3 | Past: was/were + V3 | Perfect: have/has been + V3 | Modal: modal + be + V3",
          summary: "Eylemi kimin yaptığından ziyade eylemin kendisine ve eylemden etkilenene odaklanma.",
          b1Explanation: "Özne eylemi yapan değil, eylemden etkilenendir. 'Be' fiili cümlenin zamanına göre çekimlenir, ana fiil daima 3. haldedir (V3).",
          ieltsSignificance: "IELTS Writing Task 1 süreç (process) anlatımlarında ve Task 2'de kişisel olmayan akademik dil kurmak için ZORUNLUDUR.",
          commonMistakes: "'Be' fiilini unutmak ('The decision taken yesterday' yerine 'The decision was taken' olmalı).",
          examples: [
            { en: "Thousands of clinical trials are conducted by pharmaceutical firms annually.", tr: "Her yıl ilaç firmaları tarafından binlerce klinik deney yürütülmektedir." },
            { en: "Strict nutritional guidelines were established to curb juvenile obesity.", tr: "Gençlik obezitesini dizginlemek için sıkı beslenme yönergeleri belirlendi." },
            { en: "Renewable power grids can be integrated into metropolitan areas seamlessly.", tr: "Yenilenebilir elektrik şebekeleri metropol alanlara sorunsuzca entegre edilebilir." }
          ]
        },
        {
          id: "impersonal_passive",
          title: "Impersonal Passive (Akademik Raporlama)",
          formula: "It is said/believed/thought/argued that + Cümle | OR: S + is said/believed to + V1",
          summary: "'İnanılmaktadır ki...', 'İddia edilmektedir ki...' gibi genel kamuoyu ve bilimsel düşünce aktarımları.",
          b1Explanation: "Örn: 'People say he is rich' yerine 'It is said that he is rich' veya 'He is said to be rich'.",
          ieltsSignificance: "IELTS Writing Task 2'nin ilk cümlelerinde görüş bildirirken ('It is widely acknowledged that...') en prestijli kalıptır.",
          commonMistakes: "'to' sonrasında zaman uyumunu kaçırmak (geçmiş için 'to have V3' kullanılır).",
          examples: [
            { en: "It is widely acknowledged that early childhood education plays a vital role in cognitive growth.", tr: "Erken çocukluk eğitiminin bilişsel gelişimde hayati bir rol oynadığı yaygın biçimde kabul edilmektedir." },
            { en: "Artificial intelligence is predicted to transform the landscape of creative labor.", tr: "Yapay zekanın yaratıcı iş gücü manzarasını dönüştüreceği tahmin edilmektedir." }
          ]
        },
        {
          id: "causatives",
          title: "Causatives (Ettirgen Yapılar: Have / Get something done)",
          formula: "Have / Get + nesne + V3 (Bir şeyi birine yaptırmak) | Have someone do V1 | Get someone to do V1",
          summary: "Bir işi başkasına yaptırma veya bir şeyin yapılmasına vesile olma.",
          b1Explanation: "Örn: 'I cut my hair' (Kendi saçımı kestim) DEĞİL; 'I had my hair cut' (Saçımı kestirdim).",
          ieltsSignificance: "Hükümetlerin ve kurumların hizmetleri özel şirketlere veya uzmanlara yaptırmasını anlatırken kullanılır.",
          commonMistakes: "Get someone sonrası 'to' unutmak (Get someone do yerine Get someone to do).",
          examples: [
            { en: "The municipal council had the historical library renovated by certified conservators.", tr: "Belediye meclisi tarihi kütüphaneyi sertifikalı restoratörlere restore ettirdi." },
            { en: "Authorities will get external consultants to evaluate the public transport blueprint.", tr: "Yetkililer toplu taşıma planını değerlendirmeleri için harici danışmanları görevlendirecek." }
          ]
        }
      ]
    },
    {
      id: "conditionals",
      name: "4. Conditionals & Wish (Şart Cümleleri ve Dilekler)",
      icon: "fa-code-branch",
      description: "Tüm Conditional türleri (Type 0, 1, 2, 3, Mixed), devrik şartlar ve dilek cümleleri.",
      topics: [
        {
          id: "cond_0_1",
          title: "Zero & First Conditional (Gerçekçi Şartlar)",
          formula: "Zero: If + Present Simple, Present Simple | Type 1: If + Present Simple, will/can + V1",
          summary: "Zero: Doğa kanunları ve kesin sonuçlar. Type 1: Gelecekte gerçekleşmesi muhtemel durumlar.",
          b1Explanation: "'If' cümlesinin içine asla 'will' yazılmaz! (If it will rain YANLIŞ -> If it rains DOĞRU).",
          ieltsSignificance: "Writing Task 2'de politika önerileri ve çözümler sunarken en çok başvurulan şart kalıbıdır.",
          commonMistakes: "'If' tarafına 'will' koymak.",
          examples: [
            { en: "If water reaches 100 degrees Celsius, it boils.", tr: "Su 100 santigrat dereceye ulaşırsa kaynar." },
            { en: "If developing nations invest in public healthcare, citizen productivity will accelerate noticeably.", tr: "Gelişmekte olan ülkeler halk sağlığına yatırım yaparsa, vatandaş verimliliği gözle görülür şekilde artacaktır." }
          ]
        },
        {
          id: "cond_2_3",
          title: "Second & Third Conditional (Varsayımsal ve Geçmiş Şartlar)",
          formula: "Type 2: If + Past Simple, would/could + V1 | Type 3: If + Past Perfect, would have + V3",
          summary: "Type 2: Şimdiki zaman için hayali/gerçek dışı varsayım. Type 3: Geçmişte olmuş bitmiş olaylara dair pişmanlık/ihtimal.",
          b1Explanation: "Type 2'de 'if' tarafında tüm özneler için 'were' kullanımı tercih edilir (If I were you). Type 3 geçmişi değiştiremeyeceğimiz durumlar içindir.",
          ieltsSignificance: "Varsayımsal senaryoları tartışırken ve alternatif tarihsel sonuçları analiz ederken kullanılır.",
          commonMistakes: "Type 3'te 'if' tarafına 'would have' yazmak.",
          examples: [
            { en: "If income inequality were eradicated globally, geopolitical stability would flourish.", tr: "Gelir eşitsizliği küresel çapta ortadan kaldırılsaydı, jeopolitik istikrar yeşerirdi." },
            { en: "If policymakers had acted proactively, the catastrophic ecological collapse could have been averted.", tr: "Politika yapıcılar önceden proaktif davransaydı, felaket niteliğindeki ekolojik çöküş önlenebilirdi." }
          ]
        },
        {
          id: "cond_inversion",
          title: "Inversion in Conditionals (Devrik Şart Cümleleri - C1 Seviyesi)",
          formula: "Type 1: Should you need... | Type 2: Were they to invest... | Type 3: Had we known...",
          summary: "'If' kelimesini atarak cümleyi devrik yapmak. Resmi ve akademik İngilizcenin zirve noktasıdır.",
          b1Explanation: "'If you need assistance' yerine 'Should you need assistance' demek.",
          ieltsSignificance: "IELTS Writing'de sınav değerlendiricisine üst düzey dilbilgisi hakimiyeti göstermek için altın değerindedir.",
          commonMistakes: "Soru cümlesi sanıp sonuna soru işareti koymak; bu bir soru değil devrik şart cümlesidir.",
          examples: [
            { en: "Had the administration implemented rigorous fiscal audits, the recession might have been mitigated.", tr: "Yönetim sıkı mali denetimler uygulamış olsaydı, resesyon hafifletilebilirdi." },
            { en: "Were governments to subsidize sustainable agriculture, food sovereignty would increase.", tr: "Hükümetler sürdürülebilir tarımı sübvanse edecek olsaydı, gıda egemenliği artardı." }
          ]
        },
        {
          id: "wish_clauses",
          title: "Wish Clauses & If Only (Dilek Kipi)",
          formula: "Wish + Past Simple (Şu anki dilek) | Wish + Past Perfect (Geçmiş pişmanlık) | Wish + Would + V1 (Şikayet)",
          summary: "Mevcut durumun aksini isteme veya geçmişteki bir hatadan pişmanlık duyma.",
          b1Explanation: "Kendimiz için 'wish + would' kullanılmaz (I wish I would YANLIŞ -> I wish I could DOĞRU).",
          ieltsSignificance: "Speaking sınavında kişisel düşünce ve alternatif durumları betimlerken akıcılık katar.",
          commonMistakes: "Şimdiki zaman dileği için Present Simple kullanmak (I wish I am rich YANLIŞ -> I wish I were rich DOĞRU).",
          examples: [
            { en: "Many citizens wish urban housing were more accessible and affordable.", tr: "Pek çok vatandaş kentsel konutların daha erişilebilir ve uygun fiyatlı olmasını dilemektedir." },
            { en: "Economists wish regulatory boards had addressed the predatory lending earlier.", tr: "Ekonomistler düzenleyici kurulların tefeci kredilerini daha önce ele almış olmasını dilemektedir." }
          ]
        }
      ]
    },
    {
      id: "relative_clauses",
      name: "5. Relative & Participle Clauses (Sıfat Cümlecikleri)",
      icon: "fa-project-diagram",
      description: "Defining, Non-defining, Prepositional Relative Clauses ve Cümle Kısaltmaları (Participles).",
      topics: [
        {
          id: "rel_defining",
          title: "Defining vs. Non-Defining Relative Clauses",
          formula: "Defining: who/which/that (Virgülsüz) | Non-defining: , who / , which , (Virgüllü, 'that' kullanılmaz)",
          summary: "Bir ismi tanımlayan veya o isim hakkında ek bilgi veren sıfat cümlecikleri.",
          b1Explanation: "Defining: Hangi kişiden/nesneden bahsettiğimizi belirtir, cümleden çıkarılamaz. Non-defining: Zaten bilinen bir şeye ekstra bilgi ekler, virgüller arasındadır.",
          ieltsSignificance: "IELTS 6.0+ için 'Complex Sentences' (Karmaşık Cümleler) kriterinin omurgasıdır.",
          commonMistakes: "Non-defining cümlelerde 'that' kullanmak (Google, that was founded... YANLIŞ -> Google, which was founded... DOĞRU).",
          examples: [
            { en: "Students who acquire adaptable technological competencies secure superior careers.", tr: "Uyum sağlayabilir teknolojik yeterlilikler edinen öğrenciler üstün kariyerler elde ederler." },
            { en: "Solar energy, which produces virtually zero carbon emissions, represents the future of power.", tr: "Neredeyse sıfır karbon salınımı üreten güneş enerjisi, elektriğin geleceğini temsil etmektedir." }
          ]
        },
        {
          id: "rel_prepositional",
          title: "Prepositional Relative Clauses (In which, To whom, At which)",
          formula: "İsim + preposition + which/whom",
          summary: "Edatın cümlenin sonundan alınıp zamirin (which/whom) hemen önüne getirilmesi.",
          b1Explanation: "'The city which I live in' yerine akademik olarak 'The city in which I live' demek.",
          ieltsSignificance: "Resmi akademik yazımda üslubu gayriresmi olmaktan çıkarıp profesyonel bir seviyeye taşır.",
          commonMistakes: "Preposition sonrası 'that' kullanmak (in that yer bildirirken sıfat cümleciğinde kullanılmaz, in which olmalı).",
          examples: [
            { en: "The technological era in which we reside demands continuous analytical adaptation.", tr: "İçinde yaşadığımız teknolojik çağ, sürekli analitik adaptasyon talep etmektedir." },
            { en: "Scholars identified several acute environmental challenges to which governments must respond.", tr: "Akademisyenler, hükümetlerin yanıt vermesi gereken birkaç kritik çevresel zorluk belirlediler." }
          ]
        },
        {
          id: "participle_clauses",
          title: "Reduced Relative Clauses / Participle Clauses (Kısaltmalar)",
          formula: "Etken kısaltma: V-ing (who live -> living) | Edilgen kısaltma: V3 (which is produced -> produced)",
          summary: "Relative clause yapısını kısaltarak daha yoğun, akıcı ve akademik bir cümle kurma tekniği.",
          b1Explanation: "'The people who work here' -> 'The people working here'. 'The cars which are manufactured in Japan' -> 'The cars manufactured in Japan'.",
          ieltsSignificance: "Akademik metinlerin en belirgin özelliğidir. Kelime tasarrufu sağlar ve dil hakimiyetini gösterir.",
          commonMistakes: "Etken eyleme V3, edilgen eyleme V-ing kısaltması uygulamak.",
          examples: [
            { en: "Vehicles operating on clean electric batteries emit negligible atmospheric pollution.", tr: "Temiz elektrikli bataryalarla çalışan araçlar ihmal edilebilir atmosfer kirliliği yayar." },
            { en: "Goods manufactured through fair trade practices attract conscientious consumers.", tr: "Adil ticaret uygulamalarıyla üretilen mallar bilinçli tüketicileri cezbeder." }
          ]
        }
      ]
    },
    {
      id: "noun_clauses",
      name: "6. Noun Clauses & Reported Speech (İsim Cümlecikleri)",
      icon: "fa-comments",
      description: "That-clauses, Wh- soru cümlecikleri ve Akademik Aktarım Fiilleri (Reporting Verbs).",
      topics: [
        {
          id: "noun_clause_types",
          title: "Noun Clauses: That, Wh- & Whether/If",
          formula: "That + Cümle (Özne veya Nesne) | Wh- word + S + V | Whether/If + S + V",
          summary: "Bir cümlenin tamamının isim gibi davranarak özne veya nesne konumuna geçmesi.",
          b1Explanation: "Örn: 'What he said is important' (Söylediği şey önemli). 'I don't know whether she will come' (Gelip gelmeyeceğini bilmiyorum).",
          ieltsSignificance: "Tez cümlelerinde ve araştırmacıların bulgularını aktarırken vazgeçilmezdir.",
          commonMistakes: "Noun clause içinde soru dizilimi yapmak (What did he say is important YANLIŞ -> What he said is important DOĞRU).",
          examples: [
            { en: "That fossil fuel depletion poses catastrophic threats is widely accepted by climatologists.", tr: "Fosil yakıt tükenişinin felaket niteliğinde tehditler oluşturduğu gerçeği iklim bilimciler tarafından yaygınca kabul edilmektedir." },
            { en: "Empirical studies investigate how artificial intelligence affects adolescent cognitive development.", tr: "Ampirik çalışmalar yapay zekanın ergen bilişsel gelişimini nasıl etkilediğini araştırmaktadır." }
          ]
        },
        {
          id: "reporting_verbs",
          title: "Academic Reporting Verbs (Akademik Aktarım Fiilleri)",
          formula: "Subject + argues / asserts / emphasizes / acknowledges / claims + that...",
          summary: "'He said' veya 'They think' gibi basit fiiller yerine zengin akademik aktarım fiilleri kullanmak.",
          b1Explanation: "IELTS Writing Task 2'de farklı görüşleri tarafsız ve akademik bir dille aktarmak için kullanılır.",
          ieltsSignificance: "Lexical Resource kriterinde 6.0+'a sıçramak için temel kelime dağarcığıdır.",
          commonMistakes: "Bütün aktarımlarda sadece 'say' veya 'tell' kullanmak.",
          examples: [
            { en: "Prominent sociologists assert that income disparity undermines civic trust.", tr: "Önde gelen sosyologlar gelir eşitsizliğinin sivil güveni sarstığını ileri sürmektedir." },
            { en: "Ecologists emphasize that immediate intervention is indispensable to save marine habitats.", tr: "Ekolojistler deniz yaşam alanlarını kurtarmak için derhal müdahalenin vazgeçilmez olduğunu vurgulamaktadır." }
          ]
        }
      ]
    },
    {
      id: "gerund_infinitive",
      name: "7. Gerunds & Infinitives (İsim-Fiiller ve Mastarlar)",
      icon: "fa-font",
      description: "Cümle başı özneler, fiil listeleri, edatlardan sonraki kurallar ve anlam değiştiren fiiller.",
      topics: [
        {
          id: "gerund_rules",
          title: "Gerunds (Verb-ing): Özne Konumu ve Edat Kuralları",
          formula: "V-ing as Subject | Preposition + V-ing | Specific Verbs (avoid, consider, suggest) + V-ing",
          summary: "Fiilin '-ing' takısı alarak isimleşmesi.",
          b1Explanation: "Cümlenin öznesi bir eylemse '-ing' alır (Smoking is bad). Tüm edatlardan (in, on, at, about, without, by) sonra fiil daima '-ing' alır.",
          ieltsSignificance: "IELTS Writing Task 2'de paragraflara güçlü özneyle başlamak için en zarif yoldur.",
          commonMistakes: "Edattan sonra fiili yalın bırakmak (without force yerine without forcing olmalı).",
          examples: [
            { en: "Preserving historical architectural heritage fosters cultural identity among citizens.", tr: "Tarihi mimari mirası korumak, vatandaşlar arasında kültürel kimliği güçlendirir." },
            { en: "Governments can stimulate green economic growth by subsidizing renewable infrastructure.", tr: "Hükümetler yenilenebilir altyapıyı sübvanse ederek yeşil ekonomik büyümeyi canlandırabilir." }
          ]
        },
        {
          id: "infinitive_rules",
          title: "Infinitives (To + Verb 1): Amaç ve Sıfat Kuralları",
          formula: "To + V1 (Amaç: In order to) | Adjective + To + V1 | Specific Verbs (tend, attempt, fail) + To V1",
          summary: "Fiilin mastar hali.",
          b1Explanation: "Bir eylemin amacını bildirirken ('to learn', 'in order to achieve') veya bir sıfattan sonra ('It is essential to understand') kullanılır.",
          ieltsSignificance: "Amaç bildirme ve gereklilik ifade etmede temel araçtır.",
          commonMistakes: "Amaç bildirirken 'for to' demek (for to learn YANLIŞ -> to learn DOĞRU).",
          examples: [
            { en: "In order to mitigate urban traffic congestion, municipalities have expanded subway networks.", tr: "Kentsel trafik sıkışıklığını hafifletmek amacıyla belediyeler metro ağlarını genişletmiştir." },
            { en: "It is imperative to implement preventative medical care in underprivileged communities.", tr: "Dezavantajlı topluluklarda önleyici sağlık hizmeti uygulamak elzemdir." }
          ]
        },
        {
          id: "meaning_shift_verbs",
          title: "Anlam Değiştiren Fiiller (Stop, Remember, Forget, Regret)",
          formula: "Stop doing (Eylemi bırakmak) vs. Stop to do (Başka bir şey yapmak için durmak)",
          summary: "Ardından Gerund veya Infinitive gelmesine göre anlamı kökten değişen fiiller.",
          b1Explanation: "Remember to lock the door (Kapıyı kitlemeyi hatırla - gelecek görev). I remember locking the door (Kapıyı kilitlediğimi hatırlıyorum - geçmiş anı).",
          ieltsSignificance: "Dilbilgisi sınavlarında ve çeviri sorularında en sık sorulan tuzak noktadır.",
          commonMistakes: "'Stop to smoke' (Sigara içmek için durdu) ile 'Stop smoking'i (Sigarayı bıraktı) birbirine karıştırmak.",
          examples: [
            { en: "The corporation stopped polluting the local river after severe legal penalties.", tr: "Şirket ağır yasal cezaların ardından yerel nehri kirletmeyi bıraktı." },
            { en: "The board paused to evaluate the ecological impact of the pipeline project.", tr: "Yönetim kurulu boru hattı projesinin ekolojik etkisini değerlendirmek için duraksadı." }
          ]
        }
      ]
    },
    {
      id: "comparison",
      name: "8. Comparatives, Superlatives & Adverbs (Kıyaslama)",
      icon: "fa-balance-scale",
      description: "Karşılaştırma kalıpları, pekiştirici zarflar (Modifying Comparatives) ve çift kıyaslama.",
      topics: [
        {
          id: "comp_basics",
          title: "Comparatives & Superlatives (Kıyaslama ve Üstünlük)",
          formula: "Comparative: adj-er than / more + adj + than | Superlative: the + adj-est / the most + adj",
          summary: "İki veya daha çok unsuru özelliklerine göre kıyaslama.",
          b1Explanation: "Kısa sıfatlar '-er/-est' alır; uzun sıfatlar 'more / the most' alır. Düzensizler: good-better-best, bad-worse-worst, far-further-furthest.",
          ieltsSignificance: "IELTS Writing Task 1 grafik analizinin kalbidir ('Category A was significantly higher than Category B').",
          commonMistakes: "Çift kıyaslama ('more better' YANLIŞ) veya superlative önünde 'the' unutmak.",
          examples: [
            { en: "Digital media consumption is substantially higher among adolescents than print readership.", tr: "Dijital medya tüketimi ergenler arasında basılı okuryazarlıktan önemli ölçüde daha yüksektir." },
            { en: "Hydropower remained the most dependable renewable source throughout the past decade.", tr: "Hidroelektrik, son on yıl boyunca en güvenilir yenilenebilir kaynak olmaya devam etti." }
          ]
        },
        {
          id: "comp_modifying",
          title: "Modifying Comparatives (Pekiştirici Zarflar - Task 1 Hazinesi)",
          formula: "Significantly / Substantially / Considerably / Marginally / Slightly + more / higher / lower",
          summary: "Kıyaslamanın derecesini hassas bir şekilde belirten akademik zarflar.",
          b1Explanation: "Sadece 'more' demek yerine 'significantly more' (önemli ölçüde daha çok) veya 'slightly less' (birazcık daha az) demek.",
          ieltsSignificance: "Task 1'de grafik trendlerini tam puanla betimlemek için olmazsa olmazdır.",
          commonMistakes: "Very more demek (Very more YANLIŞ -> Much more veya Far more DOĞRU).",
          examples: [
            { en: "Solar energy installation costs declined considerably over the recorded timeframe.", tr: "Güneş enerjisi kurulum maliyetleri kaydedilen zaman dilimi boyunca kayda değer biçimde azaldı." },
            { en: "Urban air contamination levels were marginally lower in suburban districts.", tr: "Kentsel hava kirliliği seviyeleri banliyö bölgelerinde marjinal olarak daha düşüktü." }
          ]
        },
        {
          id: "double_comparative",
          title: "The More... The More... (Çift Kıyaslama)",
          formula: "The + comparative ..., the + comparative ...",
          summary: "'Ne kadar ... o kadar ...' bağıntısı kuran sofistike bir cümle yapısı.",
          b1Explanation: "Örn: 'The more you practice, the faster you improve' (Ne kadar çok pratik yaparsan, o kadar hızlı gelişirsin).",
          ieltsSignificance: "Task 2'de neden-sonuç bağı kurarken sınav değerlendiricisini en çok etkileyen ileri düzey yapılardandır.",
          commonMistakes: "İkinci kısımda 'the' artikelini unutmak.",
          examples: [
            { en: "The more societies subsidize vocational education, the more resilient their workforces become.", tr: "Toplumlar mesleki eğitimi ne kadar çok sübvanse ederse, iş güçleri o kadar dirençli hale gelir." }
          ]
        }
      ]
    },
    {
      id: "prepositions",
      name: "9. Prepositions & Phrasal Verbs (Edatlar ve Deyimsel Fiiller)",
      icon: "fa-compass",
      description: "Zaman ve mekan edatları, edat öbekleri ve en kritik 30 akademik Phrasal Verb.",
      topics: [
        {
          id: "prep_logic",
          title: "Prepositions of Time & Place (In, On, At)",
          formula: "At: kesin nokta/saat | On: günler, yüzeyler | In: aylar, yıllar, kapalı alanlar",
          summary: "İngilizcede edatların piramit mantığı.",
          b1Explanation: "At (en dar: at 5 PM, at home) -> On (orta: on Monday, on the table) -> In (en geniş: in 2024, in Turkey, in July).",
          ieltsSignificance: "Tarih ve zaman aktarımında basit edat hatalarını sıfırlamak.",
          commonMistakes: "Yılların önüne 'on' yazmak (On 2010 YANLIŞ -> In 2010 DOĞRU).",
          examples: [
            { en: "In 2015, significant diplomatic treaties were signed at the international summit.", tr: "2015 yılında uluslararası zirvede önemli diplomatik anlaşmalar imzalandı." }
          ]
        },
        {
          id: "phrasal_verbs_academic",
          title: "Top Academic Phrasal Verbs (En Kritik Akademik Phrasal Verbler)",
          formula: "Verb + Preposition",
          summary: "Akademik makalelerde ve IELTS dinleme/okuma parçalarında en sık çıkan 10 phrasal verb.",
          b1Explanation: "Carry out (yürütmek), Account for (açıklamak/oluşturmak), Bring about (sebep olmak), Cope with (başa çıkmak), Phase out (kademeli kaldırmak).",
          ieltsSignificance: "Reading parçalarını hızlı çözmek ve Speaking'de doğal konuşmak için şarttır.",
          commonMistakes: "Edatları birbirine karıştırmak (account to yerine account for).",
          examples: [
            { en: "Renewable sources accounted for over thirty percent of domestic power generation.", tr: "Yenilenebilir kaynaklar yerel elektrik üretiminin yüzde otuzundan fazlasını oluşturdu." },
            { en: "Scientists carried out meticulous experiments to validate the vaccine's efficacy.", tr: "Bilim insanları aşının etkinliğini doğrulamak için titiz deneyler yürüttü." },
            { en: "Technological innovation brought about radical enhancements in communication.", tr: "Teknolojik yenilik iletişimde köklü gelişmelere yol açtı." }
          ]
        }
      ]
    },
    {
      id: "linking_words",
      name: "10. Conjunctions & Cohesive Devices (Akademik Bağlaçlar)",
      icon: "fa-link",
      description: "Writing ve Speaking sınavlarında akıcılığı sağlayan bağlaç kütüphanesi.",
      topics: [
        {
          id: "link_adding",
          title: "Adding Information (Furthermore, Moreover, In addition)",
          formula: "Cümle başında: Furthermore, [cümle]. | Noktalı virgül: ; moreover, ...",
          summary: "Bir fikre güçlü bir kanıt veya ek bilgi ilave etme.",
          b1Explanation: "'And' veya 'Also' yerine akademik dilde 'Furthermore' veya 'Moreover' kullanılır.",
          ieltsSignificance: "Coherence & Cohesion kriterinde 6.0+ almak için zorunludur.",
          commonMistakes: "'In addition to'dan sonra cümle getirmek (ardından isim veya V-ing gelmelidir).",
          examples: [
            { en: "Clean solar energy lowers household bills. Furthermore, it creates sustainable green careers.", tr: "Temiz güneş enerjisi hane faturalarını düşürür. Dahası, sürdürülebilir yeşil kariyerler yaratır." }
          ]
        },
        {
          id: "link_contrast",
          title: "Contrasting Ideas (However, In contrast, Whereas, Nevertheless)",
          formula: "However, [cümle]. | Whereas + Cümle 1, Cümle 2 | Despite + Noun/V-ing",
          summary: "İki karşıt görüş veya veriyi zıtlık ilişkisiyle bağlama.",
          b1Explanation: "'Despite / In spite of' ardından cümle almaz, isim veya fiil-ing alır! ('Despite it rained' YANLIŞ -> 'Despite the rain' DOĞRU).",
          ieltsSignificance: "Task 1'de zıt grafik trendlerini ve Task 2'de karşıt fikirleri tartışırken temel araçtır.",
          commonMistakes: "'Despite of' demek ('of' sadece in spite ile kullanılır).",
          examples: [
            { en: "Private school enrollment dropped by 10%. In contrast, public university admissions soared.", tr: "Özel okul kayıtları %10 düştü. Bunun aksine devlet üniversitesi kabulleri fırladı." },
            { en: "Despite heavy initial capital costs, the wind farm proved extraordinarily profitable.", tr: "Ağır ilk sermaye maliyetlerine rağmen rüzgar santrali olağanüstü karlı çıktı." }
          ]
        },
        {
          id: "link_cause_effect",
          title: "Cause and Effect (Consequently, Therefore, Thus, Due to)",
          formula: "Consequently, [cümle]. | Due to + Noun phrase | leads to + Noun",
          summary: "Sebep ve sonuç bağlantıları.",
          b1Explanation: "'Because' cümle alır, 'Due to / Owing to' isim öbeği alır.",
          ieltsSignificance: "Task 2 gövde paragraflarında mantık zinciri (Explanation -> Example -> Result) kurarken kullanılır.",
          commonMistakes: "'Due to because' demek veya 'Due to' sonrası doğrudan fiil getirmek.",
          examples: [
            { en: "The municipality dumped untreated wastewater into the bay. Consequently, marine life perished.", tr: "Belediye arıtılmamış atık suyu koya boşaltti. Sonuç olarak deniz yaşamı yok oldu." }
          ]
        }
      ]
    },
    {
      id: "ielts_strategies",
      name: "11. IELTS Writing & Speaking Altın Stratejileri",
      icon: "fa-award",
      description: "Complex sentence kurma formülü, Akademik Hedging, 4 Paragraf Modeli ve Speaking taktikleri.",
      topics: [
        {
          id: "complex_sentences",
          title: "Complex Sentence (Karmaşık Cümle) Kurma Formülü",
          formula: "Bağlaç + Yan Cümlecik (Zarf/Relative/Noun Clause) + Ana Cümle",
          summary: "5.5 alan öğrencileri 6.0 ve üzerine taşıyan en kritik gramer kriteri.",
          b1Explanation: "Art arda 3 tane kısa ve basit cümle yazmak yerine, onları Relative Clause ve Neden-Sonuç bağlacıyla tek cümlede birleştirmektir.",
          ieltsSignificance: "Grammatical Range kriterinde puanı doğrudan 6.0+'a fırlatır.",
          commonMistakes: "Nokta koymadan upuzun ve anlamsız cümleler kurmak (run-on sentences).",
          examples: [
            { en: "Because metropolitan areas suffer from rampant traffic congestion, which is predominantly caused by private automobiles, municipal authorities are expanding bus rapid transit corridors.", tr: "Metropol alanlar ağırlıklı olarak özel otomobillerden kaynaklanan kontrolsüz trafik sıkışıklığından muzdarip olduğu için, belediye yetkilileri metrobüs koridorlarını genişletmektedir." }
          ]
        },
        {
          id: "academic_hedging",
          title: "Akademik Yumuşatma (Hedging) - Keskin Konuşmaktan Kaçınma",
          formula: "Modal (tends to, appears to, is likely to) + Probable adverbs (frequently, arguably)",
          summary: "Akademisyenlerin iddialarını aşırı genelleme yapmadan, bilimsel bir pay bırakarak savunma tekniği.",
          b1Explanation: "'All cars destroy the planet' demek yerine 'Automobiles tend to contribute to environmental degradation' demek.",
          ieltsSignificance: "IELTS değerlendiricileri kesin ve abartılı genellemeleri sevmez. Hedging yapmak akademik olgunluk göstergesidir.",
          commonMistakes: "'Every person agrees', 'Always', 'Completely impossible' gibi keskin ifadeler kullanmak.",
          examples: [
            { en: "Empirical evidence suggests that excessive screen exposure could potentially heighten anxiety levels.", tr: "Ampirik kanıtlar aşırı ekran maruziyetinin potansiyel olarak kaygı seviyelerini artırabileceğini düşündürmektedir." }
          ]
        },
        {
          id: "task2_template",
          title: "IELTS Writing Task 2: 4 Paragraf Altın Modeli",
          formula: "P1: Intro (Paraphrase + Thesis) | P2: Body 1 | P3: Body 2 | P4: Conclusion",
          summary: "250 kelimelik Task 2 denemesini 40 dakikada kusursuz tamamlamayı garanti eden şablon.",
          b1Explanation: "Girişte soruyu kendi kelimelerinle yeniden yaz ve fikrini net belirt. Gelişmede 2 ana fikir sun. Sonuçta ana fikri özetle, asla yeni fikir ekleme!",
          ieltsSignificance: "Zaman yönetimini garanti eder ve Task Achievement'tan tam puan aldırır.",
          commonMistakes: "5-6 paragraf yazıp yetiştirememek veya sonuca yeni fikir sıkıştırmak.",
          examples: [
            { en: "In conclusion, while technological modernization brings unavoidable disruptions, its educational benefits far outweigh the drawbacks.", tr: "Sonuç olarak teknolojik modernizasyon kaçınılmaz aksaklıklar getirse de eğitimsel faydaları sakıncalarından çok daha ağır basmaktadır." }
          ]
        }
      ]
    }
  ]
};
