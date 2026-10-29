"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const locales = [
  "ar", "bg", "ca", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "en", "fi",
  "fr", "gl", "de", "el", "hu", "id", "it", "ja", "ko", "nb", "fa", "pl",
  "pt", "ro", "ru", "sk", "es", "sv", "tr", "uk", "vi",
] as const;

export type Locale = (typeof locales)[number];
export type LanguagePreference = Locale | "system";

type LocaleContextValue = {
  locale: Locale;
  preference: LanguagePreference;
  setPreference: (preference: LanguagePreference) => void;
};

const english = {
  navDownload: "Download",
  navWhy: "Why Debian",
  navReleases: "Releases",
  navNews: "News",
  navCommunity: "Community & Docs",
  universalOS: "Universal OS",
  heroUniversal: "The Universal Operating System",
  home: "Debian home",
  searchPage: "Search this page",
  search: "Search",
  enterSearch: "Enter a search term.",
  noSections: "No sections found for “{query}”.",
  showing: "Showing {heading}.",
  lightTheme: "Switch to light theme",
  darkTheme: "Switch to dark theme",
  openMenu: "Open mobile menu",
  closeMenu: "Close mobile menu",
  getDebian: "Get Debian 13.7",
  heroBadge: 'Debian 13.7 "Trixie" is the Current Stable Release',
  heroStart: "The Rock-Solid Foundation for",
  heroEnd: "Your Digital Freedom",
  heroDescription:
    "Empowering servers, desktops, cloud infrastructure, and embedded devices worldwide. Free, open, and community-driven since 1993.",
  heroDownload: "Download Debian",
  statPackages: "Software Packages",
  statArchitectures: "Architectures Supported",
  statFree: "Free & Open Source",
  statStability: "Proven Stability",
  statYears: "years since 1993",
  selectorTitle: "Quick Download Selector",
  selectorDescription:
    "Find the exact Debian image tailored for your hardware and use case.",
  releaseField: "1. Release Branch",
  architectureField: "2. Architecture",
  installerField: "3. Installer / Desktop",
  stableOption: "Stable 13.7 (Trixie) - Recommended",
  testingOption: "Testing (Forky) - Next Gen",
  unstableOption: "Unstable (Sid) - Rolling",
  pc64: "64-bit PC (amd64 / x86_64)",
  arm64: "ARM64 / AArch64 (Raspberry Pi, Apple M-series VM)",
  pc32: "32-bit PC (i386, amd64 co-installation)",
  armel: "ARM EABI (armel, upgrades only)",
  armhf: "ARM hard-float (armhf)",
  s390x: "IBM System z (s390x)",
  power: "POWER Processors (ppc64el)",
  riscV: "RISC-V 64-bit (riscv64)",
  netinst: "Standard Netinst (Minimal ISO)",
  gnome: "Live ISO with GNOME Desktop",
  kde: "Live ISO with KDE Plasma",
  xfce: "Live ISO with XFCE Light",
  lxde: "Live ISO with LXDE",
  lxqt: "Live ISO with LXQt",
  mate: "Live ISO with MATE",
  cinnamon: "Live ISO with Cinnamon",
  size: "Size:",
  downloadISO: "Download ISO",
  resolvingDownload: "Resolving the latest Debian image...",
  downloadResolveError: "Unable to resolve this Debian download. Please try again.",
  featureEyebrow: "Built for Performance & Freedom",
  featureTitle: "Why Millions Choose Debian",
  featureStableTitle: "Unmatched Stability",
  featureStableDescription:
    "Debian undergoes rigorous testing before any release. Choose Debian for critical infrastructure where uptime and reliability are non-negotiable.",
  featureFreeTitle: "100% Free Software",
  featureFreeDescription:
    "Guided by the Debian Free Software Guidelines (DFSG), Debian guarantees true software independence, user privacy, and open collaboration.",
  featureHardwareTitle: "Universal Hardware",
  featureHardwareDescription:
    "Run Debian on almost anything—from modern 64-bit servers and ARM microcontrollers to legacy 32-bit platforms and cloud VMs.",
  releaseEyebrow: "Flexible Release Model",
  releaseTitle: "Choose Your Distribution Flavor",
  recommended: "Recommended",
  stableTitle: "Debian Stable",
  stableVersion: 'Version 13.7 "Trixie" (Current Stable)',
  stableDescription:
    "Thoroughly tested, rock-solid security updates. Ideal for production environments, web servers, and enterprise workstations.",
  stableAction: "Get Stable 13.7",
  testingTitle: "Debian Testing",
  testingVersion: 'Codename "Forky"',
  testingDescription:
    "Features newer software packages while preparing for the next stable release. Great for modern desktop enthusiasts.",
  testingAction: "Explore Testing",
  unstableTitle: "Debian Unstable",
  unstableVersion: 'Codename "Sid"',
  unstableDescription:
    "Rolling release development branch with cutting-edge packages. Designed for developers and Linux contributors.",
  unstableAction: "Explore Sid",
  newsFrom: "From the Debian Project",
  newsTitle: "Project News",
  allNews: "All Debian news",
  news1Title: "Debian 13.7 released",
  news1Description:
    "The latest point release for Debian 13 includes security fixes and corrections for important issues.",
  news2Title: "Debian 11 support reaches end of life",
  news2Description:
    "The Bullseye Long Term Support period has ended. Debian 11 users should plan an upgrade.",
  news3Title: "DebConf26 closes; DebConf27 announced",
  news3Description:
    "The annual Debian contributors conference wrapped up, with the next edition announced.",
  readAnnouncement: "Read announcement",
  communityTitle: "Community & Ecosystem",
  communityDescription:
    "Join thousands of volunteers, developers, and users powering the Debian project.",
  wikiTitle: "Debian Wiki",
  wikiDescription:
    "Official guides, configuration manuals, and troubleshooting documentation.",
  forumsTitle: "User Forums",
  forumsDescription:
    "Ask questions, share advice, and connect with global Debian users.",
  bugsTitle: "Bug Tracking",
  bugsDescription:
    "Report issues, track bug fixes, and help improve package quality.",
  developerTitle: "Developer Corner",
  developerDescription:
    "Learn how to maintain packages, contribute code, and sponsor infrastructure.",
  communityLinksTitle: "The Community",
  communityPeople: "People",
  communityPeopleDescription: "Who we are and what we do",
  communityPhilosophy: "Our philosophy",
  communityPhilosophyDescription: "Why and how we do it",
  communityContribute: "Get involved, contribute",
  communityContributeDescription: "How you can join in",
  communityMore: "More",
  communityMoreDescription: "More information about the Debian community",
  operatingSystemTitle: "The Operating System",
  whyDebian: "Why Debian",
  whyDebianDescription: "What makes Debian special",
  userSupport: "User support",
  userSupportDescription: "Get help and documentation",
  securityUpdates: "Security updates",
  securityUpdatesDescription: "Debian Security Advisories (DSA)",
  operatingSystemMoreDescription: "More links about downloads and software",
  communityGalleryTitle: "The Debian community in pictures",
  previousPhotos: "Previous photos",
  nextPhotos: "Next photos",
  photoSlide: "slide",
  photoPosition: "{index} of {total}",
  showPhoto: "Show photo {index}: {title}",
  footerProject: "Debian Project",
  trademark:
    "Debian is a registered trademark owned by Software in the Public Interest, Inc.",
  legalLinks: "Legal links",
  privacy: "Privacy Policy",
  socialContract: "Social Contract",
  donate: "Donate",
  closeDialog: "Close download dialog",
  modalTitle: "Download Debian ISO",
  modalSubtitle: "Direct download mirror simulator",
  selectedTarget: "Selected Target:",
  mirrorLocation: "Mirror Location:",
  autoMirror: "Global Fast CDN (Auto-detected)",
  downloadCompleteFolder: "Download Complete! Check Downloads folder.",
  downloading: "Downloading ISO...",
  downloadProgress: "Download progress",
  downloadComplete: "Download Complete",
  startDownload: "Start Download",
  cancel: "Cancel",
} as const;

const localeHeroAndHistory: Record<
  Locale,
  { heroUniversal: string; statYears: string }
> = {
  ar: { heroUniversal: "نظام التشغيل الشامل", statYears: "عامًا منذ 1993" },
  bg: { heroUniversal: "Универсалната операционна система", statYears: "години от 1993 г." },
  ca: { heroUniversal: "El sistema operatiu universal", statYears: "anys des de 1993" },
  "zh-CN": { heroUniversal: "通用操作系统", statYears: "年（自 1993 年起）" },
  "zh-TW": { heroUniversal: "通用作業系統", statYears: "年（自 1993 年起）" },
  hr: { heroUniversal: "Univerzalni operacijski sustav", statYears: "godina od 1993." },
  cs: { heroUniversal: "Univerzální operační systém", statYears: "let od roku 1993" },
  da: { heroUniversal: "Det universelle styresystem", statYears: "år siden 1993" },
  nl: { heroUniversal: "Het universele besturingssysteem", statYears: "jaar sinds 1993" },
  en: { heroUniversal: "The Universal Operating System", statYears: "years since 1993" },
  fi: { heroUniversal: "Universaali käyttöjärjestelmä", statYears: "vuotta vuodesta 1993" },
  fr: { heroUniversal: "Le système d’exploitation universel", statYears: "ans depuis 1993" },
  gl: { heroUniversal: "O sistema operativo universal", statYears: "anos desde 1993" },
  de: { heroUniversal: "Das universelle Betriebssystem", statYears: "Jahre seit 1993" },
  el: { heroUniversal: "Το καθολικό λειτουργικό σύστημα", statYears: "χρόνια από το 1993" },
  hu: { heroUniversal: "Az univerzális operációs rendszer", statYears: "év 1993 óta" },
  id: { heroUniversal: "Sistem operasi universal", statYears: "tahun sejak 1993" },
  it: { heroUniversal: "Il sistema operativo universale", statYears: "anni dal 1993" },
  ja: { heroUniversal: "万能オペレーティングシステム", statYears: "1993年から" },
  ko: { heroUniversal: "범용 운영 체제", statYears: "1993년부터" },
  nb: { heroUniversal: "Det universelle operativsystemet", statYears: "år siden 1993" },
  fa: { heroUniversal: "سیستم‌عامل همه‌منظوره", statYears: "سال از ۱۹۹۳" },
  pl: { heroUniversal: "Uniwersalny system operacyjny", statYears: "lata od 1993 roku" },
  pt: { heroUniversal: "O sistema operativo universal", statYears: "anos desde 1993" },
  ro: { heroUniversal: "Sistemul de operare universal", statYears: "de ani din 1993" },
  ru: { heroUniversal: "Универсальная операционная система", statYears: "лет с 1993 года" },
  sk: { heroUniversal: "Univerzálny operačný systém", statYears: "rokov od roku 1993" },
  es: { heroUniversal: "El sistema operativo universal", statYears: "años desde 1993" },
  sv: { heroUniversal: "Det universella operativsystemet", statYears: "år sedan 1993" },
  tr: { heroUniversal: "Evrensel işletim sistemi", statYears: "1993'ten beri yıl" },
  uk: { heroUniversal: "Універсальна операційна система", statYears: "років з 1993 року" },
  vi: { heroUniversal: "Hệ điều hành phổ dụng", statYears: "năm kể từ 1993" },
};

export type MessageKey = keyof typeof english;
type TranslationCatalog<Keys extends readonly MessageKey[]> = Partial<
  Record<
    Exclude<Locale, "en">,
    { [Index in keyof Keys]: string }
  >
>;

const coreKeys = [
  "navDownload", "navWhy", "navReleases", "navNews", "navCommunity",
  "universalOS", "searchPage", "search", "enterSearch", "lightTheme",
  "darkTheme", "openMenu", "closeMenu", "getDebian", "heroDownload",
  "selectorTitle", "releaseField", "architectureField", "installerField",
  "downloadISO", "featureTitle", "releaseTitle", "recommended", "newsTitle",
  "allNews", "readAnnouncement", "communityTitle", "wikiTitle", "forumsTitle",
  "bugsTitle", "developerTitle", "footerProject", "privacy", "socialContract",
  "donate", "closeDialog", "modalTitle", "modalSubtitle", "selectedTarget",
  "mirrorLocation", "downloadCompleteFolder", "downloading", "downloadProgress",
  "downloadComplete", "startDownload", "cancel",
] as const;

const coreTranslations: TranslationCatalog<typeof coreKeys> = {
  ar: ["تنزيل", "لماذا ديبيان", "الإصدارات", "الأخبار", "المجتمع والوثائق", "نظام التشغيل الشامل", "ابحث في هذه الصفحة", "بحث", "أدخل عبارة للبحث.", "التبديل إلى المظهر الفاتح", "التبديل إلى المظهر الداكن", "فتح قائمة الهاتف", "إغلاق قائمة الهاتف", "احصل على ديبيان 13", "تنزيل ديبيان 13", "اختيار التنزيل السريع", "فرع الإصدار", "المعمارية", "المثبت / سطح المكتب", "تنزيل ISO", "لماذا يختار الملايين ديبيان", "اختر إصدار التوزيعة", "موصى به", "أخبار المشروع", "كل أخبار ديبيان", "اقرأ الإعلان", "المجتمع والنظام البيئي", "ويكي ديبيان", "منتديات المستخدمين", "تتبع الأخطاء", "ركن المطورين", "مشروع ديبيان", "سياسة الخصوصية", "العقد الاجتماعي", "تبرع", "إغلاق حوار التنزيل", "تنزيل Debian ISO", "محاكاة مرآة التنزيل المباشر", "الهدف المحدد:", "موقع المرآة:", "اكتمل التنزيل! تحقق من مجلد التنزيلات.", "جارٍ تنزيل ISO...", "تقدم التنزيل", "اكتمل التنزيل", "بدء التنزيل", "إلغاء"],
  bg: ["Изтегляне", "Защо Debian", "Издания", "Новини", "Общност и документация", "Универсална операционна система", "Търсене в страницата", "Търсене", "Въведете дума за търсене.", "Светла тема", "Тъмна тема", "Отвори мобилното меню", "Затвори мобилното меню", "Вземете Debian 13", "Изтеглете Debian 13", "Бърз избор за изтегляне", "Клон на изданието", "Архитектура", "Инсталатор / работен плот", "Изтегли ISO", "Защо милиони избират Debian", "Изберете вариант на дистрибуцията", "Препоръчително", "Новини по проекта", "Всички новини за Debian", "Прочетете съобщението", "Общност и екосистема", "Уики на Debian", "Потребителски форуми", "Проследяване на грешки", "Кът за разработчици", "Проектът Debian", "Политика за поверителност", "Социален договор", "Дарете", "Затваряне на прозореца за изтегляне", "Изтегляне на Debian ISO", "Симулатор на директно огледало за изтегляне", "Избрана цел:", "Местоположение на огледалото:", "Изтеглянето завърши! Проверете папката за изтегляния.", "Изтегляне на ISO...", "Напредък на изтеглянето", "Изтеглянето завърши", "Започни изтегляне", "Отказ"],
  ca: ["Baixa", "Per què Debian", "Versions", "Notícies", "Comunitat i documentació", "Sistema operatiu universal", "Cerca en aquesta pàgina", "Cerca", "Introdueix un terme de cerca.", "Canvia al tema clar", "Canvia al tema fosc", "Obre el menú mòbil", "Tanca el menú mòbil", "Obtén Debian 13", "Baixa Debian 13", "Selector de baixada ràpida", "Branca de la versió", "Arquitectura", "Instal·lador / escriptori", "Baixa ISO", "Per què milions trien Debian", "Tria una variant de distribució", "Recomanat", "Notícies del projecte", "Totes les notícies de Debian", "Llegeix l'anunci", "Comunitat i ecosistema", "Viqui de Debian", "Fòrums d'usuaris", "Seguiment d'errors", "Espai de desenvolupadors", "Projecte Debian", "Política de privadesa", "Contracte social", "Dona", "Tanca el diàleg de baixada", "Baixa la ISO de Debian", "Simulador de rèplica de baixada directa", "Objectiu seleccionat:", "Ubicació de la rèplica:", "Baixada completada! Consulta la carpeta Baixades.", "Baixant la ISO...", "Progrés de la baixada", "Baixada completada", "Inicia la baixada", "Cancel·la"],
  "zh-CN": ["下载", "为什么选择 Debian", "发行版", "新闻", "社区与文档", "通用操作系统", "搜索此页面", "搜索", "请输入搜索词。", "切换到浅色主题", "切换到深色主题", "打开移动菜单", "关闭移动菜单", "获取 Debian 13", "下载 Debian 13", "快速下载选择器", "发行分支", "体系结构", "安装程序 / 桌面", "下载 ISO", "数百万用户选择 Debian 的原因", "选择发行版类型", "推荐", "项目新闻", "全部 Debian 新闻", "阅读公告", "社区与生态系统", "Debian 维基", "用户论坛", "错误跟踪", "开发者专区", "Debian 项目", "隐私政策", "社会契约", "捐赠", "关闭下载对话框", "下载 Debian ISO", "直接下载镜像模拟器", "所选目标：", "镜像位置：", "下载完成！请查看下载文件夹。", "正在下载 ISO...", "下载进度", "下载完成", "开始下载", "取消"],
  "zh-TW": ["下載", "為什麼選擇 Debian", "版本", "新聞", "社群與文件", "通用作業系統", "搜尋此頁面", "搜尋", "請輸入搜尋詞。", "切換至淺色主題", "切換至深色主題", "開啟行動版選單", "關閉行動版選單", "取得 Debian 13", "下載 Debian 13", "快速下載選擇器", "發行分支", "架構", "安裝程式 / 桌面", "下載 ISO", "數百萬人選擇 Debian 的原因", "選擇發行版類型", "推薦", "專案新聞", "所有 Debian 新聞", "閱讀公告", "社群與生態系統", "Debian 維基", "使用者論壇", "錯誤追蹤", "開發者專區", "Debian 專案", "隱私權政策", "社會契約", "捐款", "關閉下載對話框", "下載 Debian ISO", "直接下載鏡像模擬器", "選取目標：", "鏡像位置：", "下載完成！請查看下載資料夾。", "正在下載 ISO...", "下載進度", "下載完成", "開始下載", "取消"],
  hr: ["Preuzmi", "Zašto Debian", "Izdanja", "Vijesti", "Zajednica i dokumentacija", "Univerzalni operacijski sustav", "Pretraži ovu stranicu", "Pretraži", "Unesite pojam za pretraživanje.", "Svijetla tema", "Tamna tema", "Otvori mobilni izbornik", "Zatvori mobilni izbornik", "Preuzmi Debian 13", "Preuzmi Debian 13", "Brzi odabir preuzimanja", "Grana izdanja", "Arhitektura", "Instalacijski program / radna površina", "Preuzmi ISO", "Zašto milijuni biraju Debian", "Odaberite varijantu distribucije", "Preporučeno", "Vijesti projekta", "Sve Debianove vijesti", "Pročitaj objavu", "Zajednica i ekosustav", "Debian Wiki", "Korisnički forumi", "Praćenje grešaka", "Kutak za razvojne programere", "Projekt Debian", "Pravila privatnosti", "Društveni ugovor", "Doniraj", "Zatvori dijalog preuzimanja", "Preuzmi Debian ISO", "Simulator izravnog zrcalnog poslužitelja", "Odabrani cilj:", "Lokacija zrcalnog poslužitelja:", "Preuzimanje je dovršeno! Provjerite mapu Preuzimanja.", "Preuzimanje ISO-a...", "Napredak preuzimanja", "Preuzimanje dovršeno", "Pokreni preuzimanje", "Odustani"],
  cs: ["Stáhnout", "Proč Debian", "Vydání", "Novinky", "Komunita a dokumentace", "Univerzální operační systém", "Hledat na této stránce", "Hledat", "Zadejte hledaný výraz.", "Přepnout na světlý motiv", "Přepnout na tmavý motiv", "Otevřít mobilní nabídku", "Zavřít mobilní nabídku", "Získat Debian 13", "Stáhnout Debian 13", "Rychlý výběr ke stažení", "Větev vydání", "Architektura", "Instalátor / pracovní plocha", "Stáhnout ISO", "Proč si miliony lidí volí Debian", "Vyberte variantu distribuce", "Doporučeno", "Novinky projektu", "Všechny novinky Debianu", "Přečíst oznámení", "Komunita a ekosystém", "Debian Wiki", "Uživatelská fóra", "Sledování chyb", "Koutek vývojářů", "Projekt Debian", "Zásady ochrany soukromí", "Společenská smlouva", "Přispět", "Zavřít dialog stahování", "Stáhnout Debian ISO", "Simulátor přímého zrcadla stahování", "Vybraný cíl:", "Umístění zrcadla:", "Stahování dokončeno! Zkontrolujte složku Stažené.", "Stahování ISO...", "Průběh stahování", "Stahování dokončeno", "Zahájit stahování", "Zrušit"],
  da: ["Download", "Hvorfor Debian", "Udgivelser", "Nyheder", "Fællesskab og dokumentation", "Universelt operativsystem", "Søg på denne side", "Søg", "Indtast et søgeord.", "Skift til lyst tema", "Skift til mørkt tema", "Åbn mobilmenu", "Luk mobilmenu", "Hent Debian 13", "Hent Debian 13", "Hurtigt downloadvalg", "Udgivelsesgren", "Arkitektur", "Installationsprogram / skrivebord", "Hent ISO", "Derfor vælger millioner Debian", "Vælg distributionsvariant", "Anbefalet", "Projektnyt", "Alle Debian-nyheder", "Læs meddelelsen", "Fællesskab og økosystem", "Debian-wiki", "Brugerfora", "Fejlsporing", "Udviklerhjørnet", "Debian-projektet", "Privatlivspolitik", "Social kontrakt", "Donér", "Luk downloaddialog", "Hent Debian ISO", "Simulator til direkte downloadspejl", "Valgt mål:", "Spejlplacering:", "Download fuldført! Se mappen Overførsler.", "Downloader ISO...", "Downloadforløb", "Download fuldført", "Start download", "Annuller"],
  nl: ["Downloaden", "Waarom Debian", "Uitgaven", "Nieuws", "Community en documentatie", "Universeel besturingssysteem", "Zoek op deze pagina", "Zoeken", "Voer een zoekterm in.", "Licht thema inschakelen", "Donker thema inschakelen", "Mobiel menu openen", "Mobiel menu sluiten", "Debian 13 ophalen", "Debian 13 downloaden", "Snelle downloadkiezer", "Uitgavevertakking", "Architectuur", "Installatieprogramma / bureaublad", "ISO downloaden", "Waarom miljoenen Debian kiezen", "Kies een distributievariant", "Aanbevolen", "Projectnieuws", "Al het Debian-nieuws", "Aankondiging lezen", "Community en ecosysteem", "Debian-wiki", "Gebruikersforums", "Bugtracker", "Ontwikkelaarshoek", "Debian-project", "Privacybeleid", "Sociaal contract", "Doneren", "Downloadvenster sluiten", "Debian ISO downloaden", "Simulator voor directe downloadspiegel", "Geselecteerd doel:", "Spiegellocatie:", "Download voltooid! Controleer de map Downloads.", "ISO downloaden...", "Downloadvoortgang", "Download voltooid", "Download starten", "Annuleren"],
  fi: ["Lataa", "Miksi Debian", "Julkaisut", "Uutiset", "Yhteisö ja ohjeet", "Yleiskäyttöinen käyttöjärjestelmä", "Hae tältä sivulta", "Hae", "Kirjoita hakusana.", "Vaihda vaaleaan teemaan", "Vaihda tummaan teemaan", "Avaa mobiilivalikko", "Sulje mobiilivalikko", "Hanki Debian 13", "Lataa Debian 13", "Pikavalinta lataukseen", "Julkais haara", "Arkkitehtuuri", "Asennusohjelma / työpöytä", "Lataa ISO", "Miksi miljoonat valitsevat Debianin", "Valitse jakelun versio", "Suositeltu", "Projektin uutiset", "Kaikki Debian-uutiset", "Lue ilmoitus", "Yhteisö ja ekosysteemi", "Debian-wiki", "Käyttäjäfoorumit", "Vikaseuranta", "Kehittäjänurkkaus", "Debian-projekti", "Tietosuojakäytäntö", "Sosiaalinen sopimus", "Lahjoita", "Sulje latausikkuna", "Lataa Debian ISO", "Suoran latauspeilin simulaattori", "Valittu kohde:", "Peilin sijainti:", "Lataus valmis! Tarkista Lataukset-kansio.", "Ladataan ISOa...", "Latauksen edistyminen", "Lataus valmis", "Aloita lataus", "Peruuta"],
  fr: ["Télécharger", "Pourquoi Debian", "Versions", "Actualités", "Communauté et documentation", "Système d’exploitation universel", "Rechercher dans cette page", "Rechercher", "Saisissez un terme de recherche.", "Passer au thème clair", "Passer au thème sombre", "Ouvrir le menu mobile", "Fermer le menu mobile", "Obtenir Debian 13", "Télécharger Debian 13", "Sélecteur de téléchargement rapide", "Branche de version", "Architecture", "Installateur / bureau", "Télécharger l’ISO", "Pourquoi des millions de personnes choisissent Debian", "Choisissez votre variante", "Recommandé", "Actualités du projet", "Toutes les actualités Debian", "Lire l’annonce", "Communauté et écosystème", "Wiki Debian", "Forums utilisateurs", "Suivi des bogues", "Espace développeurs", "Projet Debian", "Politique de confidentialité", "Contrat social", "Faire un don", "Fermer la fenêtre de téléchargement", "Télécharger l’ISO Debian", "Simulateur de miroir de téléchargement direct", "Cible sélectionnée :", "Emplacement du miroir :", "Téléchargement terminé ! Consultez le dossier Téléchargements.", "Téléchargement de l’ISO…", "Progression du téléchargement", "Téléchargement terminé", "Démarrer le téléchargement", "Annuler"],
  gl: ["Descargar", "Por que Debian", "Versións", "Novas", "Comunidade e documentación", "Sistema operativo universal", "Buscar nesta páxina", "Buscar", "Introduce un termo de busca.", "Cambiar ao tema claro", "Cambiar ao tema escuro", "Abrir o menú móbil", "Pechar o menú móbil", "Obter Debian 13", "Descargar Debian 13", "Selector de descarga rápida", "Rama da versión", "Arquitectura", "Instalador / escritorio", "Descargar ISO", "Por que millóns de persoas escollen Debian", "Escolle unha variante", "Recomendado", "Novas do proxecto", "Todas as novas de Debian", "Ler o anuncio", "Comunidade e ecosistema", "Wiki de Debian", "Foros de usuarios", "Seguimento de erros", "Espazo de desenvolvemento", "Proxecto Debian", "Política de privacidade", "Contrato social", "Doar", "Pechar o diálogo de descarga", "Descargar ISO de Debian", "Simulador de espello de descarga directa", "Destino seleccionado:", "Localización do espello:", "Descarga completada! Consulta o cartafol Descargas.", "Descargando ISO...", "Progreso da descarga", "Descarga completada", "Iniciar descarga", "Cancelar"],
  de: ["Herunterladen", "Warum Debian", "Versionen", "Neuigkeiten", "Community & Dokumentation", "Universelles Betriebssystem", "Diese Seite durchsuchen", "Suchen", "Suchbegriff eingeben.", "Zum hellen Design wechseln", "Zum dunklen Design wechseln", "Mobiles Menü öffnen", "Mobiles Menü schließen", "Debian 13 holen", "Debian 13 herunterladen", "Schnellauswahl für Downloads", "Veröffentlichungszweig", "Architektur", "Installationsprogramm / Desktop", "ISO herunterladen", "Warum sich Millionen für Debian entscheiden", "Distributionsvariante wählen", "Empfohlen", "Projektneuigkeiten", "Alle Debian-Nachrichten", "Ankündigung lesen", "Community & Ökosystem", "Debian-Wiki", "Benutzerforen", "Fehlerverfolgung", "Entwicklerecke", "Debian-Projekt", "Datenschutz", "Gesellschaftsvertrag", "Spenden", "Downloaddialog schließen", "Debian-ISO herunterladen", "Simulator für direkten Downloadspiegel", "Ausgewähltes Ziel:", "Spiegelserver-Standort:", "Download abgeschlossen! Prüfen Sie den Downloads-Ordner.", "ISO wird heruntergeladen...", "Downloadfortschritt", "Download abgeschlossen", "Download starten", "Abbrechen"],
  el: ["Λήψη", "Γιατί Debian", "Εκδόσεις", "Νέα", "Κοινότητα και τεκμηρίωση", "Καθολικό λειτουργικό σύστημα", "Αναζήτηση σε αυτή τη σελίδα", "Αναζήτηση", "Εισαγάγετε έναν όρο αναζήτησης.", "Εναλλαγή σε φωτεινό θέμα", "Εναλλαγή σε σκοτεινό θέμα", "Άνοιγμα μενού κινητού", "Κλείσιμο μενού κινητού", "Λήψη Debian 13", "Λήψη Debian 13", "Γρήγορη επιλογή λήψης", "Κλάδος έκδοσης", "Αρχιτεκτονική", "Πρόγραμμα εγκατάστασης / επιφάνεια εργασίας", "Λήψη ISO", "Γιατί εκατομμύρια επιλέγουν το Debian", "Επιλέξτε παραλλαγή διανομής", "Προτείνεται", "Νέα έργου", "Όλα τα νέα του Debian", "Διαβάστε την ανακοίνωση", "Κοινότητα και οικοσύστημα", "Wiki Debian", "Φόρουμ χρηστών", "Παρακολούθηση σφαλμάτων", "Γωνιά προγραμματιστών", "Έργο Debian", "Πολιτική απορρήτου", "Κοινωνικό συμβόλαιο", "Δωρεά", "Κλείσιμο διαλόγου λήψης", "Λήψη Debian ISO", "Προσομοιωτής άμεσου καθρέφτη λήψης", "Επιλεγμένος στόχος:", "Τοποθεσία καθρέφτη:", "Η λήψη ολοκληρώθηκε! Ελέγξτε τον φάκελο Λήψεις.", "Λήψη ISO...", "Πρόοδος λήψης", "Η λήψη ολοκληρώθηκε", "Έναρξη λήψης", "Ακύρωση"],
  hu: ["Letöltés", "Miért a Debian", "Kiadások", "Hírek", "Közösség és dokumentáció", "Univerzális operációs rendszer", "Keresés ezen az oldalon", "Keresés", "Adjon meg egy keresőkifejezést.", "Váltás világos témára", "Váltás sötét témára", "Mobilmenü megnyitása", "Mobilmenü bezárása", "Debian 13 beszerzése", "Debian 13 letöltése", "Gyors letöltésválasztó", "Kiadási ág", "Architektúra", "Telepítő / asztali környezet", "ISO letöltése", "Miért választják milliók a Debiant", "Válasszon disztribúcióváltozatot", "Ajánlott", "Projekt hírei", "Minden Debian-hír", "Közlemény olvasása", "Közösség és ökoszisztéma", "Debian Wiki", "Felhasználói fórumok", "Hibakövetés", "Fejlesztői sarok", "Debian projekt", "Adatvédelmi szabályzat", "Társadalmi szerződés", "Adományozás", "Letöltési párbeszédablak bezárása", "Debian ISO letöltése", "Közvetlen letöltési tükör szimulátora", "Kiválasztott cél:", "Tükör helye:", "A letöltés kész! Ellenőrizze a Letöltések mappát.", "ISO letöltése...", "Letöltés állapota", "Letöltés kész", "Letöltés indítása", "Mégse"],
  id: ["Unduh", "Mengapa Debian", "Rilis", "Berita", "Komunitas & Dokumentasi", "Sistem Operasi Universal", "Cari halaman ini", "Cari", "Masukkan kata pencarian.", "Beralih ke tema terang", "Beralih ke tema gelap", "Buka menu seluler", "Tutup menu seluler", "Dapatkan Debian 13", "Unduh Debian 13", "Pemilih Unduhan Cepat", "Cabang Rilis", "Arsitektur", "Pemasang / Desktop", "Unduh ISO", "Mengapa Jutaan Orang Memilih Debian", "Pilih varian distribusi", "Disarankan", "Berita Proyek", "Semua berita Debian", "Baca pengumuman", "Komunitas & Ekosistem", "Wiki Debian", "Forum Pengguna", "Pelacakan Bug", "Ruang Pengembang", "Proyek Debian", "Kebijakan Privasi", "Kontrak Sosial", "Donasi", "Tutup dialog unduhan", "Unduh ISO Debian", "Simulator cermin unduhan langsung", "Target yang dipilih:", "Lokasi cermin:", "Unduhan selesai! Periksa folder Unduhan.", "Mengunduh ISO...", "Progres unduhan", "Unduhan Selesai", "Mulai Unduh", "Batal"],
  it: ["Scarica", "Perché Debian", "Rilasci", "Notizie", "Comunità e documentazione", "Sistema operativo universale", "Cerca in questa pagina", "Cerca", "Inserisci un termine di ricerca.", "Passa al tema chiaro", "Passa al tema scuro", "Apri il menu mobile", "Chiudi il menu mobile", "Ottieni Debian 13", "Scarica Debian 13", "Selettore rapido di download", "Ramo di rilascio", "Architettura", "Programma d'installazione / desktop", "Scarica ISO", "Perché milioni di persone scelgono Debian", "Scegli una variante", "Consigliato", "Notizie del progetto", "Tutte le notizie Debian", "Leggi l'annuncio", "Comunità ed ecosistema", "Wiki Debian", "Forum utenti", "Monitoraggio bug", "Angolo sviluppatori", "Progetto Debian", "Informativa sulla privacy", "Contratto sociale", "Dona", "Chiudi la finestra di download", "Scarica ISO Debian", "Simulatore di mirror per il download diretto", "Destinazione selezionata:", "Posizione del mirror:", "Download completato! Controlla la cartella Download.", "Download ISO in corso...", "Avanzamento del download", "Download completato", "Avvia il download", "Annulla"],
  ja: ["ダウンロード", "Debianを選ぶ理由", "リリース", "ニュース", "コミュニティとドキュメント", "ユニバーサルOS", "このページを検索", "検索", "検索語を入力してください。", "ライトテーマに切り替え", "ダークテーマに切り替え", "モバイルメニューを開く", "モバイルメニューを閉じる", "Debian 13を入手", "Debian 13をダウンロード", "クイックダウンロード選択", "リリースブランチ", "アーキテクチャ", "インストーラー / デスクトップ", "ISOをダウンロード", "多くの人がDebianを選ぶ理由", "ディストリビューションの種類を選択", "おすすめ", "プロジェクトニュース", "Debianのすべてのニュース", "告知を読む", "コミュニティとエコシステム", "Debian Wiki", "ユーザーフォーラム", "バグ追跡", "開発者コーナー", "Debianプロジェクト", "プライバシーポリシー", "社会契約", "寄付", "ダウンロードダイアログを閉じる", "Debian ISOをダウンロード", "直接ダウンロードミラーのシミュレーター", "選択した対象:", "ミラーの場所:", "ダウンロード完了！ダウンロードフォルダーを確認してください。", "ISOをダウンロード中...", "ダウンロードの進行状況", "ダウンロード完了", "ダウンロード開始", "キャンセル"],
  ko: ["다운로드", "Debian을 선택하는 이유", "릴리스", "뉴스", "커뮤니티 및 문서", "범용 운영 체제", "이 페이지 검색", "검색", "검색어를 입력하세요.", "밝은 테마로 전환", "어두운 테마로 전환", "모바일 메뉴 열기", "모바일 메뉴 닫기", "Debian 13 받기", "Debian 13 다운로드", "빠른 다운로드 선택기", "릴리스 브랜치", "아키텍처", "설치 프로그램 / 데스크톱", "ISO 다운로드", "수백만 명이 Debian을 선택하는 이유", "배포판 종류 선택", "권장", "프로젝트 뉴스", "모든 Debian 뉴스", "공지 읽기", "커뮤니티 및 생태계", "Debian 위키", "사용자 포럼", "버그 추적", "개발자 공간", "Debian 프로젝트", "개인정보 보호정책", "사회 계약", "기부", "다운로드 대화 상자 닫기", "Debian ISO 다운로드", "직접 다운로드 미러 시뮬레이터", "선택한 대상:", "미러 위치:", "다운로드 완료! 다운로드 폴더를 확인하세요.", "ISO 다운로드 중...", "다운로드 진행률", "다운로드 완료", "다운로드 시작", "취소"],
  nb: ["Last ned", "Hvorfor Debian", "Utgivelser", "Nyheter", "Fellesskap og dokumentasjon", "Universelt operativsystem", "Søk på denne siden", "Søk", "Skriv inn et søkeord.", "Bytt til lyst tema", "Bytt til mørkt tema", "Åpne mobilmeny", "Lukk mobilmeny", "Hent Debian 13", "Last ned Debian 13", "Hurtigvalg for nedlasting", "Utgivelsesgren", "Arkitektur", "Installerer / skrivebord", "Last ned ISO", "Hvorfor millioner velger Debian", "Velg distribusjonsvariant", "Anbefalt", "Prosjektnytt", "Alle Debian-nyheter", "Les kunngjøringen", "Fellesskap og økosystem", "Debian-wiki", "Brukerfora", "Feilsporing", "Utviklerhjørnet", "Debian-prosjektet", "Personvernerklæring", "Sosial kontrakt", "Doner", "Lukk nedlastingsdialogen", "Last ned Debian ISO", "Simulator for direkte nedlastingsspeil", "Valgt mål:", "Speilplassering:", "Nedlasting fullført! Se i Nedlastinger-mappen.", "Laster ned ISO...", "Nedlastingsfremdrift", "Nedlasting fullført", "Start nedlasting", "Avbryt"],
  fa: ["دریافت", "چرا دبیان", "انتشارها", "اخبار", "انجمن و مستندات", "سیستم‌عامل همگانی", "جستجو در این صفحه", "جستجو", "یک عبارت برای جستجو وارد کنید.", "تغییر به پوسته روشن", "تغییر به پوسته تیره", "باز کردن منوی موبایل", "بستن منوی موبایل", "دریافت دبیان ۱۳", "بارگیری دبیان ۱۳", "گزینش‌گر سریع بارگیری", "شاخه انتشار", "معماری", "نصب‌کننده / میزکار", "بارگیری ISO", "چرا میلیون‌ها نفر دبیان را انتخاب می‌کنند", "گونه توزیع را انتخاب کنید", "پیشنهادی", "اخبار پروژه", "همه اخبار دبیان", "خواندن اطلاعیه", "انجمن و زیست‌بوم", "ویکی دبیان", "تالارهای کاربران", "پیگیری اشکال", "گوشه توسعه‌دهندگان", "پروژه دبیان", "سیاست حریم خصوصی", "پیمان اجتماعی", "کمک مالی", "بستن پنجره بارگیری", "بارگیری ISO دبیان", "شبیه‌ساز آینه بارگیری مستقیم", "هدف انتخاب‌شده:", "مکان آینه:", "بارگیری کامل شد! پوشه بارگیری‌ها را بررسی کنید.", "در حال بارگیری ISO...", "پیشرفت بارگیری", "بارگیری کامل شد", "شروع بارگیری", "لغو"],
  pl: ["Pobierz", "Dlaczego Debian", "Wydania", "Aktualności", "Społeczność i dokumentacja", "Uniwersalny system operacyjny", "Szukaj na tej stronie", "Szukaj", "Wpisz wyszukiwane hasło.", "Przełącz na jasny motyw", "Przełącz na ciemny motyw", "Otwórz menu mobilne", "Zamknij menu mobilne", "Pobierz Debiana 13", "Pobierz Debiana 13", "Szybki wybór pobierania", "Gałąź wydania", "Architektura", "Instalator / pulpit", "Pobierz ISO", "Dlaczego miliony wybierają Debiana", "Wybierz wariant dystrybucji", "Zalecane", "Wiadomości projektu", "Wszystkie wiadomości Debiana", "Przeczytaj ogłoszenie", "Społeczność i ekosystem", "Wiki Debiana", "Forum użytkowników", "Śledzenie błędów", "Kącik programistów", "Projekt Debian", "Polityka prywatności", "Umowa społeczna", "Przekaż darowiznę", "Zamknij okno pobierania", "Pobierz ISO Debiana", "Symulator bezpośredniego serwera lustrzanego", "Wybrany cel:", "Lokalizacja serwera:", "Pobieranie zakończone! Sprawdź folder Pobrane.", "Pobieranie ISO...", "Postęp pobierania", "Pobieranie zakończone", "Rozpocznij pobieranie", "Anuluj"],
  pt: ["Transferir", "Por que Debian", "Lançamentos", "Notícias", "Comunidade e documentação", "Sistema operativo universal", "Pesquisar nesta página", "Pesquisar", "Introduza um termo de pesquisa.", "Mudar para tema claro", "Mudar para tema escuro", "Abrir menu móvel", "Fechar menu móvel", "Obter Debian 13", "Transferir Debian 13", "Seletor rápido de transferência", "Ramo de lançamento", "Arquitetura", "Instalador / ambiente de trabalho", "Transferir ISO", "Por que milhões escolhem Debian", "Escolha uma variante", "Recomendado", "Notícias do projeto", "Todas as notícias Debian", "Ler anúncio", "Comunidade e ecossistema", "Wiki Debian", "Fóruns de utilizadores", "Rastreamento de erros", "Espaço do programador", "Projeto Debian", "Política de privacidade", "Contrato social", "Doar", "Fechar diálogo de transferência", "Transferir ISO Debian", "Simulador de espelho de transferência direta", "Destino selecionado:", "Localização do espelho:", "Transferência concluída! Consulte a pasta Transferências.", "A transferir ISO...", "Progresso da transferência", "Transferência concluída", "Iniciar transferência", "Cancelar"],
  ro: ["Descarcă", "De ce Debian", "Lansări", "Știri", "Comunitate și documentație", "Sistem de operare universal", "Caută în această pagină", "Caută", "Introdu un termen de căutare.", "Comută la tema luminoasă", "Comută la tema întunecată", "Deschide meniul mobil", "Închide meniul mobil", "Obține Debian 13", "Descarcă Debian 13", "Selector rapid de descărcare", "Ramura lansării", "Arhitectură", "Program de instalare / desktop", "Descarcă ISO", "De ce milioane de oameni aleg Debian", "Alege o variantă de distribuție", "Recomandat", "Noutăți despre proiect", "Toate știrile Debian", "Citește anunțul", "Comunitate și ecosistem", "Wiki Debian", "Forumuri pentru utilizatori", "Urmărirea erorilor", "Colțul dezvoltatorilor", "Proiectul Debian", "Politica de confidențialitate", "Contract social", "Donează", "Închide dialogul de descărcare", "Descarcă ISO Debian", "Simulator de oglindă pentru descărcare directă", "Țintă selectată:", "Locația oglinzii:", "Descărcare completă! Verifică dosarul Descărcări.", "Se descarcă ISO...", "Progresul descărcării", "Descărcare completă", "Începe descărcarea", "Anulează"],
  ru: ["Скачать", "Почему Debian", "Выпуски", "Новости", "Сообщество и документация", "Универсальная операционная система", "Поиск на этой странице", "Поиск", "Введите поисковый запрос.", "Переключить на светлую тему", "Переключить на тёмную тему", "Открыть мобильное меню", "Закрыть мобильное меню", "Получить Debian 13", "Скачать Debian 13", "Быстрый выбор загрузки", "Ветка выпуска", "Архитектура", "Установщик / рабочий стол", "Скачать ISO", "Почему миллионы выбирают Debian", "Выберите вариант дистрибутива", "Рекомендуется", "Новости проекта", "Все новости Debian", "Читать объявление", "Сообщество и экосистема", "Вики Debian", "Форумы пользователей", "Отслеживание ошибок", "Уголок разработчика", "Проект Debian", "Политика конфиденциальности", "Общественный договор", "Пожертвовать", "Закрыть окно загрузки", "Скачать Debian ISO", "Симулятор прямого зеркала загрузки", "Выбранная цель:", "Расположение зеркала:", "Загрузка завершена! Проверьте папку «Загрузки».", "Загрузка ISO...", "Ход загрузки", "Загрузка завершена", "Начать загрузку", "Отмена"],
  sk: ["Stiahnuť", "Prečo Debian", "Vydania", "Novinky", "Komunita a dokumentácia", "Univerzálny operačný systém", "Hľadať na tejto stránke", "Hľadať", "Zadajte hľadaný výraz.", "Prepnúť na svetlý motív", "Prepnúť na tmavý motív", "Otvoriť mobilnú ponuku", "Zavrieť mobilnú ponuku", "Získať Debian 13", "Stiahnuť Debian 13", "Rýchly výber sťahovania", "Vetva vydania", "Architektúra", "Inštalátor / pracovná plocha", "Stiahnuť ISO", "Prečo si milióny vyberajú Debian", "Vyberte variant distribúcie", "Odporúčané", "Novinky projektu", "Všetky novinky Debianu", "Prečítať oznámenie", "Komunita a ekosystém", "Debian Wiki", "Používateľské fóra", "Sledovanie chýb", "Kútik vývojárov", "Projekt Debian", "Zásady ochrany súkromia", "Spoločenská zmluva", "Prispieť", "Zavrieť dialóg sťahovania", "Stiahnuť Debian ISO", "Simulátor priameho zrkadla sťahovania", "Vybraný cieľ:", "Umiestnenie zrkadla:", "Sťahovanie dokončené! Skontrolujte priečinok Stiahnuté.", "Sťahuje sa ISO...", "Priebeh sťahovania", "Sťahovanie dokončené", "Spustiť sťahovanie", "Zrušiť"],
  es: ["Descargar", "Por qué Debian", "Versiones", "Noticias", "Comunidad y documentación", "Sistema operativo universal", "Buscar en esta página", "Buscar", "Introduce un término de búsqueda.", "Cambiar al tema claro", "Cambiar al tema oscuro", "Abrir menú móvil", "Cerrar menú móvil", "Obtener Debian 13", "Descargar Debian 13", "Selector rápido de descarga", "Rama de la versión", "Arquitectura", "Instalador / escritorio", "Descargar ISO", "Por qué millones eligen Debian", "Elige una variante", "Recomendado", "Noticias del proyecto", "Todas las noticias de Debian", "Leer anuncio", "Comunidad y ecosistema", "Wiki de Debian", "Foros de usuarios", "Seguimiento de errores", "Espacio para desarrolladores", "Proyecto Debian", "Política de privacidad", "Contrato social", "Donar", "Cerrar diálogo de descarga", "Descargar ISO de Debian", "Simulador de espejo de descarga directa", "Destino seleccionado:", "Ubicación del espejo:", "¡Descarga completada! Consulta la carpeta Descargas.", "Descargando ISO...", "Progreso de la descarga", "Descarga completada", "Iniciar descarga", "Cancelar"],
  sv: ["Ladda ner", "Varför Debian", "Utgåvor", "Nyheter", "Gemenskap och dokumentation", "Universellt operativsystem", "Sök på den här sidan", "Sök", "Ange en sökterm.", "Byt till ljust tema", "Byt till mörkt tema", "Öppna mobilmenyn", "Stäng mobilmenyn", "Hämta Debian 13", "Ladda ner Debian 13", "Snabbväljare för nedladdning", "Utgåvegren", "Arkitektur", "Installationsprogram / skrivbord", "Ladda ner ISO", "Varför miljontals människor väljer Debian", "Välj distributionsvariant", "Rekommenderas", "Projektets nyheter", "Alla Debian-nyheter", "Läs tillkännagivandet", "Gemenskap och ekosystem", "Debian-wiki", "Användarforum", "Felspårning", "Utvecklarhörnan", "Debian-projektet", "Integritetspolicy", "Socialt kontrakt", "Donera", "Stäng nedladdningsdialogen", "Ladda ner Debian ISO", "Simulator för direkt nedladdningsspegel", "Valt mål:", "Spegelplats:", "Nedladdningen är klar! Kontrollera mappen Hämtade filer.", "Laddar ner ISO...", "Nedladdningsförlopp", "Nedladdningen är klar", "Starta nedladdning", "Avbryt"],
  tr: ["İndir", "Neden Debian", "Sürümler", "Haberler", "Topluluk ve Belgeler", "Evrensel İşletim Sistemi", "Bu sayfada ara", "Ara", "Bir arama terimi girin.", "Açık temaya geç", "Koyu temaya geç", "Mobil menüyü aç", "Mobil menüyü kapat", "Debian 13'ü edin", "Debian 13'ü indir", "Hızlı İndirme Seçici", "Sürüm dalı", "Mimari", "Kurulum aracı / Masaüstü", "ISO indir", "Milyonlarca kişi neden Debian'ı seçiyor", "Dağıtım çeşidini seçin", "Önerilen", "Proje Haberleri", "Tüm Debian haberleri", "Duyuruyu oku", "Topluluk ve Ekosistem", "Debian Viki", "Kullanıcı Forumları", "Hata Takibi", "Geliştirici Köşesi", "Debian Projesi", "Gizlilik Politikası", "Toplumsal Sözleşme", "Bağış yap", "İndirme iletişim kutusunu kapat", "Debian ISO'sunu indir", "Doğrudan indirme yansısı simülatörü", "Seçilen hedef:", "Yansı konumu:", "İndirme tamamlandı! İndirilenler klasörünü kontrol edin.", "ISO indiriliyor...", "İndirme ilerlemesi", "İndirme tamamlandı", "İndirmeyi başlat", "İptal"],
  uk: ["Завантажити", "Чому Debian", "Випуски", "Новини", "Спільнота й документація", "Універсальна операційна система", "Пошук на цій сторінці", "Пошук", "Введіть пошуковий запит.", "Перемкнути на світлу тему", "Перемкнути на темну тему", "Відкрити мобільне меню", "Закрити мобільне меню", "Отримати Debian 13", "Завантажити Debian 13", "Швидкий вибір завантаження", "Гілка випуску", "Архітектура", "Інсталятор / стільниця", "Завантажити ISO", "Чому мільйони обирають Debian", "Оберіть варіант дистрибутива", "Рекомендовано", "Новини проєкту", "Усі новини Debian", "Читати оголошення", "Спільнота й екосистема", "Вікі Debian", "Форуми користувачів", "Відстеження помилок", "Куточок розробника", "Проєкт Debian", "Політика конфіденційності", "Суспільний договір", "Підтримати", "Закрити діалог завантаження", "Завантажити ISO Debian", "Симулятор прямого дзеркала завантаження", "Вибрана ціль:", "Розташування дзеркала:", "Завантаження завершено! Перевірте теку Завантаження.", "Завантаження ISO...", "Перебіг завантаження", "Завантаження завершено", "Почати завантаження", "Скасувати"],
  vi: ["Tải xuống", "Tại sao chọn Debian", "Các bản phát hành", "Tin tức", "Cộng đồng & Tài liệu", "Hệ điều hành phổ dụng", "Tìm kiếm trang này", "Tìm kiếm", "Nhập từ khóa tìm kiếm.", "Chuyển sang giao diện sáng", "Chuyển sang giao diện tối", "Mở menu di động", "Đóng menu di động", "Tải Debian 13", "Tải Debian 13", "Bộ chọn tải xuống nhanh", "Nhánh phát hành", "Kiến trúc", "Trình cài đặt / Máy tính", "Tải ISO", "Vì sao hàng triệu người chọn Debian", "Chọn phiên bản phân phối", "Được đề xuất", "Tin tức dự án", "Tất cả tin Debian", "Đọc thông báo", "Cộng đồng & Hệ sinh thái", "Wiki Debian", "Diễn đàn người dùng", "Theo dõi lỗi", "Góc nhà phát triển", "Dự án Debian", "Chính sách quyền riêng tư", "Khế ước xã hội", "Quyên góp", "Đóng hộp thoại tải xuống", "Tải ISO Debian", "Trình mô phỏng máy nhân bản tải trực tiếp", "Mục tiêu đã chọn:", "Vị trí máy nhân bản:", "Đã tải xong! Kiểm tra thư mục Tải xuống.", "Đang tải ISO...", "Tiến trình tải xuống", "Tải xuống hoàn tất", "Bắt đầu tải xuống", "Hủy"],
};

const secondaryKeys = [
  "heroBadge", "heroStart", "heroEnd", "heroDescription", "selectorDescription",
  "statPackages", "statArchitectures", "statFree", "statStability",
  "featureEyebrow", "releaseEyebrow", "home", "enterSearch", "noSections", "showing",
] as const;

const secondaryTranslations: TranslationCatalog<typeof secondaryKeys> = {
  ar: ["ديبيان 13 «تريكسي» هو الإصدار المستقر الحالي", "الأساس المتين لـ", "حريتك الرقمية", "تمكين الخوادم وأجهزة سطح المكتب والبنية السحابية والأجهزة المضمنة حول العالم. مجاني ومفتوح وتقوده المجتمعات منذ 1993.", "اعثر على صورة ديبيان المناسبة تمامًا لجهازك واحتياجاتك.", "حزمة برمجية", "معمارية مدعومة", "حر ومفتوح المصدر", "استقرار مثبت", "مصمم للأداء والحرية", "نموذج إصدارات مرن", "صفحة ديبيان الرئيسية", "أدخل عبارة للبحث.", "لم يتم العثور على أقسام لـ «{query}».", "عرض {heading}."],
  bg: ["Debian 13 „Trixie“ е текущото стабилно издание", "Стабилната основа за", "вашата дигитална свобода", "Поддържа сървъри, настолни компютри, облачна инфраструктура и вградени устройства по целия свят. Свободен, отворен и движен от общността от 1993 г.", "Намерете точния образ на Debian за вашия хардуер и употреба.", "Софтуерни пакети", "Поддържани архитектури", "Свободен софтуер с отворен код", "Доказана стабилност", "Създаден за производителност и свобода", "Гъвкав модел на издания", "Начална страница на Debian", "Въведете дума за търсене.", "Няма намерени раздели за „{query}“.", "Показване на {heading}."],
  ca: ["Debian 13 «Trixie» és la versió estable actual", "La base sòlida per a", "la teva llibertat digital", "Impulsa servidors, ordinadors, infraestructura al núvol i dispositius integrats arreu del món. Lliure, obert i comunitari des del 1993.", "Troba la imatge de Debian adequada per al teu maquinari i ús.", "Paquets de programari", "Arquitectures compatibles", "Lliure i de codi obert", "Estabilitat demostrada", "Creat per al rendiment i la llibertat", "Model de versions flexible", "Inici de Debian", "Introdueix un terme de cerca.", "No s'han trobat seccions per a «{query}».", "Es mostra {heading}."],
  "zh-CN": ["Debian 13“ Trixie”是当前稳定版", "坚如磐石的基础，", "成就数字自由", "为全球服务器、桌面、云基础设施和嵌入式设备提供动力。自 1993 年以来始终自由、开放并由社区驱动。", "查找适合您的硬件和用途的 Debian 镜像。", "软件包", "支持的体系结构", "自由与开源", "久经考验的稳定性", "为性能与自由而构建", "灵活的发行模式", "Debian 首页", "请输入搜索词。", "未找到包含“{query}”的部分。", "正在显示{heading}。"],
  "zh-TW": ["Debian 13「Trixie」是目前的穩定版", "堅實可靠的基礎，", "成就數位自由", "為全球伺服器、桌面、雲端基礎架構與嵌入式裝置提供動力。自 1993 年起自由、開放並由社群推動。", "尋找符合您硬體與用途的 Debian 映像檔。", "軟體套件", "支援的架構", "自由與開放原始碼", "久經考驗的穩定性", "為效能與自由而打造", "彈性的發行模式", "Debian 首頁", "請輸入搜尋詞。", "找不到包含「{query}」的區段。", "正在顯示{heading}。"],
  hr: ["Debian 13 „Trixie” trenutačno je stabilno izdanje", "Čvrst temelj za", "vašu digitalnu slobodu", "Pokreće poslužitelje, računala, infrastrukturu u oblaku i ugrađene uređaje diljem svijeta. Slobodan, otvoren i vođen zajednicom od 1993.", "Pronađite Debianovu sliku prilagođenu vašem hardveru i namjeni.", "Softverski paketi", "Podržane arhitekture", "Slobodan softver otvorenog koda", "Dokazana stabilnost", "Izgrađen za performanse i slobodu", "Fleksibilan model izdanja", "Debianova početna stranica", "Unesite pojam za pretraživanje.", "Nema odjeljaka za „{query}”.", "Prikazuje se {heading}."],
  cs: ["Debian 13 „Trixie“ je aktuální stabilní vydání", "Pevný základ pro", "vaši digitální svobodu", "Podporuje servery, počítače, cloudovou infrastrukturu i vestavěná zařízení po celém světě. Svobodný, otevřený a komunitní od roku 1993.", "Najděte obraz Debianu přesně pro svůj hardware a způsob použití.", "Softwarové balíčky", "Podporované architektury", "Svobodný software s otevřeným zdrojovým kódem", "Ověřená stabilita", "Vytvořeno pro výkon a svobodu", "Flexibilní model vydávání", "Domovská stránka Debianu", "Zadejte hledaný výraz.", "Pro „{query}“ nebyly nalezeny žádné sekce.", "Zobrazuje se {heading}."],
  da: ["Debian 13 “Trixie” er den aktuelle stabile udgave", "Det solide fundament for", "din digitale frihed", "Driver servere, computere, cloudinfrastruktur og indlejrede enheder verden over. Fri, åben og fællesskabsdrevet siden 1993.", "Find det Debian-billede, der passer til dit udstyr og behov.", "Softwarepakker", "Understøttede arkitekturer", "Fri og open source", "Dokumenteret stabilitet", "Skabt til ydeevne og frihed", "Fleksibel udgivelsesmodel", "Debians startside", "Indtast et søgeord.", "Ingen sektioner fundet for “{query}”.", "Viser {heading}."],
  nl: ["Debian 13 “Trixie” is de huidige stabiele uitgave", "De rotsvaste basis voor", "jouw digitale vrijheid", "Wereldwijd voor servers, desktops, cloudinfrastructuur en ingebedde apparaten. Vrij, open en door de gemeenschap gedragen sinds 1993.", "Vind de juiste Debian-image voor jouw hardware en gebruik.", "Softwarepakketten", "Ondersteunde architecturen", "Vrije en open source", "Bewezen stabiliteit", "Gebouwd voor prestaties en vrijheid", "Flexibel uitgavemodel", "Debian-startpagina", "Voer een zoekterm in.", "Geen secties gevonden voor “{query}”.", "Weergeven: {heading}."],
  fi: ["Debian 13 ”Trixie” on nykyinen vakaa julkaisu", "Vankka perusta", "digitaaliselle vapaudellesi", "Palvelee palvelimia, työpöytiä, pilvi-infrastruktuuria ja sulautettuja laitteita kaikkialla maailmassa. Vapaa, avoin ja yhteisön kehittämä vuodesta 1993.", "Löydä laitteistollesi ja käyttötarkoitukseesi sopiva Debian-levykuva.", "Ohjelmistopakettia", "Tuettua arkkitehtuuria", "Vapaa ja avoin lähdekoodi", "Todistettua vakautta", "Rakennettu suorituskykyä ja vapautta varten", "Joustava julkaisumalli", "Debianin etusivu", "Kirjoita hakusana.", "Osioita haulle ”{query}” ei löytynyt.", "Näytetään {heading}."],
  fr: ["Debian 13 « Trixie » est la version stable actuelle", "Le socle inébranlable de", "votre liberté numérique", "Au service des serveurs, postes de travail, infrastructures cloud et appareils embarqués du monde entier. Libre, ouvert et communautaire depuis 1993.", "Trouvez l’image Debian adaptée à votre matériel et à vos besoins.", "Paquets logiciels", "Architectures prises en charge", "Libre et open source", "Stabilité éprouvée", "Conçu pour la performance et la liberté", "Modèle de publication flexible", "Accueil Debian", "Saisissez un terme de recherche.", "Aucune section trouvée pour « {query} ».", "Affichage de {heading}."],
  gl: ["Debian 13 «Trixie» é a versión estable actual", "A base sólida para", "a túa liberdade dixital", "Impulsa servidores, escritorios, infraestrutura na nube e dispositivos integrados en todo o mundo. Libre, aberto e comunitario desde 1993.", "Atopa a imaxe de Debian axeitada para o teu equipo e uso.", "Paquetes de software", "Arquitecturas compatibles", "Libre e de código aberto", "Estabilidade probada", "Feito para o rendemento e a liberdade", "Modelo de versión flexible", "Inicio de Debian", "Introduce un termo de busca.", "Non se atoparon seccións para «{query}».", "Amosando {heading}."],
  de: ["Debian 13 „Trixie“ ist die aktuelle stabile Veröffentlichung", "Das solide Fundament für", "deine digitale Freiheit", "Für Server, Desktops, Cloud-Infrastruktur und eingebettete Geräte weltweit. Frei, offen und gemeinschaftlich seit 1993.", "Finde das passende Debian-Abbild für deine Hardware und deinen Einsatzzweck.", "Softwarepakete", "Unterstützte Architekturen", "Frei und Open Source", "Bewährte Stabilität", "Für Leistung und Freiheit entwickelt", "Flexibles Veröffentlichungsmodell", "Debian-Startseite", "Suchbegriff eingeben.", "Keine Abschnitte für „{query}“ gefunden.", "{heading} wird angezeigt."],
  el: ["Το Debian 13 «Trixie» είναι η τρέχουσα σταθερή έκδοση", "Η στέρεη βάση για", "την ψηφιακή σας ελευθερία", "Υποστηρίζει διακομιστές, επιτραπέζιους υπολογιστές, υποδομές cloud και ενσωματωμένες συσκευές παγκοσμίως. Ελεύθερο, ανοικτό και με ισχυρή κοινότητα από το 1993.", "Βρείτε την κατάλληλη εικόνα Debian για το υλικό και τη χρήση σας.", "Πακέτα λογισμικού", "Υποστηριζόμενες αρχιτεκτονικές", "Ελεύθερο λογισμικό ανοικτού κώδικα", "Αποδεδειγμένη σταθερότητα", "Σχεδιασμένο για απόδοση και ελευθερία", "Ευέλικτο μοντέλο εκδόσεων", "Αρχική σελίδα Debian", "Εισαγάγετε έναν όρο αναζήτησης.", "Δεν βρέθηκαν ενότητες για «{query}».", "Εμφάνιση: {heading}."],
  hu: ["A Debian 13 „Trixie” a jelenlegi stabil kiadás", "A sziklaszilárd alap", "a digitális szabadságodhoz", "Világszerte szervereket, asztali gépeket, felhő-infrastruktúrát és beágyazott eszközöket működtet. Szabad, nyílt és közösségi 1993 óta.", "Találd meg a hardveredhez és felhasználásodhoz illő Debian-lemezképet.", "Szoftvercsomag", "Támogatott architektúra", "Szabad és nyílt forráskódú", "Bizonyított stabilitás", "Teljesítményre és szabadságra építve", "Rugalmas kiadási modell", "Debian-kezdőlap", "Adjon meg egy keresőkifejezést.", "Nincs találat erre: „{query}”.", "{heading} megjelenítése."],
  id: ["Debian 13 “Trixie” adalah rilis Stabil saat ini", "Fondasi kokoh untuk", "kebebasan digital Anda", "Mendukung server, desktop, infrastruktur cloud, dan perangkat tertanam di seluruh dunia. Bebas, terbuka, dan digerakkan komunitas sejak 1993.", "Temukan image Debian yang sesuai dengan perangkat keras dan kebutuhan Anda.", "Paket perangkat lunak", "Arsitektur yang didukung", "Bebas & Sumber Terbuka", "Stabilitas Teruji", "Dibangun untuk kinerja dan kebebasan", "Model Rilis Fleksibel", "Beranda Debian", "Masukkan kata pencarian.", "Tidak ada bagian ditemukan untuk “{query}”.", "Menampilkan {heading}."],
  it: ["Debian 13 “Trixie” è l'attuale versione stabile", "La base solida per", "la tua libertà digitale", "Alimenta server, desktop, infrastrutture cloud e dispositivi integrati in tutto il mondo. Libero, aperto e guidato dalla comunità dal 1993.", "Trova l'immagine Debian adatta al tuo hardware e al tuo utilizzo.", "Pacchetti software", "Architetture supportate", "Libero e open source", "Stabilità comprovata", "Progettato per prestazioni e libertà", "Modello di rilascio flessibile", "Pagina iniziale Debian", "Inserisci un termine di ricerca.", "Nessuna sezione trovata per “{query}”.", "Visualizzazione di {heading}."],
  ja: ["Debian 13「Trixie」は現在の安定版です", "確かな基盤で支える", "デジタルの自由", "世界中のサーバー、デスクトップ、クラウド基盤、組み込み機器を支えます。1993年以来、自由でオープンなコミュニティ主導のOSです。", "ハードウェアや用途に合ったDebianイメージを見つけましょう。", "ソフトウェアパッケージ", "対応アーキテクチャ", "自由でオープンソース", "実証済みの安定性", "性能と自由のために構築", "柔軟なリリースモデル", "Debianホーム", "検索語を入力してください。", "「{query}」に一致するセクションはありません。", "{heading}を表示しています。"],
  ko: ["Debian 13 “Trixie”는 현재 안정 릴리스입니다", "견고한 기반으로 만드는", "디지털 자유", "전 세계의 서버, 데스크톱, 클라우드 인프라와 임베디드 장치를 지원합니다. 1993년부터 자유롭고 개방적이며 커뮤니티가 이끌어 왔습니다.", "하드웨어와 용도에 맞는 Debian 이미지를 찾아보세요.", "소프트웨어 패키지", "지원 아키텍처", "자유 및 오픈 소스", "검증된 안정성", "성능과 자유를 위해 제작", "유연한 릴리스 모델", "Debian 홈", "검색어를 입력하세요.", "“{query}”에 대한 섹션을 찾을 수 없습니다.", "{heading} 표시 중."],
  nb: ["Debian 13 «Trixie» er den gjeldende stabile utgivelsen", "Det bunnsolide grunnlaget for", "din digitale frihet", "Driver servere, skrivebord, skyinfrastruktur og innebygde enheter verden over. Fri, åpen og fellesskapsdrevet siden 1993.", "Finn Debian-avbildningen som passer til maskinvaren og bruken din.", "Programvarepakker", "Støttede arkitekturer", "Fri og åpen kildekode", "Utprøvd stabilitet", "Bygget for ytelse og frihet", "Fleksibel utgivelsesmodell", "Debians startside", "Skriv inn et søkeord.", "Fant ingen seksjoner for «{query}».", "Viser {heading}."],
  fa: ["دبیان ۱۳ «Trixie» نسخه پایدار کنونی است", "پایه‌ای استوار برای", "آزادی دیجیتال شما", "پشتیبان سرورها، رایانه‌ها، زیرساخت ابری و دستگاه‌های نهفته در سراسر جهان. آزاد، باز و جامعه‌محور از سال ۱۹۹۳.", "تصویر دبیان مناسب سخت‌افزار و کاربرد خود را پیدا کنید.", "بسته نرم‌افزاری", "معماری پشتیبانی‌شده", "آزاد و متن‌باز", "پایداری اثبات‌شده", "ساخته‌شده برای کارایی و آزادی", "مدل انتشار انعطاف‌پذیر", "صفحه اصلی دبیان", "یک عبارت برای جستجو وارد کنید.", "بخشی برای «{query}» پیدا نشد.", "نمایش {heading}."],
  pl: ["Debian 13 „Trixie” to obecne wydanie stabilne", "Solidny fundament dla", "Twojej cyfrowej wolności", "Napędza serwery, komputery, infrastrukturę chmurową i urządzenia wbudowane na całym świecie. Wolny, otwarty i tworzony przez społeczność od 1993 roku.", "Znajdź obraz Debiana dopasowany do sprzętu i zastosowania.", "Pakietów oprogramowania", "Obsługiwanych architektur", "Wolny i otwartoźródłowy", "Sprawdzona stabilność", "Stworzony z myślą o wydajności i wolności", "Elastyczny model wydań", "Strona główna Debiana", "Wpisz wyszukiwane hasło.", "Nie znaleziono sekcji dla „{query}”.", "Wyświetlanie: {heading}."],
  pt: ["Debian 13 «Trixie» é a versão estável atual", "A base sólida para", "a sua liberdade digital", "Impulsiona servidores, computadores, infraestrutura na nuvem e dispositivos integrados em todo o mundo. Livre, aberto e comunitário desde 1993.", "Encontre a imagem Debian adequada ao seu hardware e utilização.", "Pacotes de software", "Arquiteturas suportadas", "Livre e de código aberto", "Estabilidade comprovada", "Criado para desempenho e liberdade", "Modelo de lançamento flexível", "Página inicial do Debian", "Introduza um termo de pesquisa.", "Nenhuma secção encontrada para «{query}».", "A mostrar {heading}."],
  ro: ["Debian 13 „Trixie” este versiunea stabilă actuală", "Fundamentul solid pentru", "libertatea ta digitală", "Susține servere, desktopuri, infrastructură cloud și dispozitive integrate din întreaga lume. Liber, deschis și condus de comunitate din 1993.", "Găsește imaginea Debian potrivită pentru hardware-ul și utilizarea ta.", "Pachete software", "Arhitecturi acceptate", "Liber și cu sursă deschisă", "Stabilitate dovedită", "Creat pentru performanță și libertate", "Model flexibil de lansare", "Pagina principală Debian", "Introdu un termen de căutare.", "Nu s-au găsit secțiuni pentru „{query}”.", "Se afișează {heading}."],
  ru: ["Debian 13 «Trixie» — текущий стабильный выпуск", "Надёжная основа для", "вашей цифровой свободы", "Работает на серверах, настольных компьютерах, в облачной инфраструктуре и встроенных устройствах по всему миру. Свободный, открытый и развиваемый сообществом с 1993 года.", "Найдите образ Debian для вашего оборудования и задач.", "Пакетов программ", "Поддерживаемых архитектур", "Свободное ПО с открытым кодом", "Проверенная стабильность", "Создан для производительности и свободы", "Гибкая модель выпусков", "Главная страница Debian", "Введите поисковый запрос.", "Разделы по запросу «{query}» не найдены.", "Показано: {heading}."],
  sk: ["Debian 13 „Trixie“ je aktuálne stabilné vydanie", "Pevný základ pre", "vašu digitálnu slobodu", "Podporuje servery, počítače, cloudovú infraštruktúru aj vstavané zariadenia na celom svete. Slobodný, otvorený a komunitný od roku 1993.", "Nájdite obraz Debianu vhodný pre váš hardvér a použitie.", "Softvérové balíky", "Podporované architektúry", "Slobodný softvér s otvoreným zdrojovým kódom", "Overená stabilita", "Vytvorený pre výkon a slobodu", "Flexibilný model vydávania", "Domovská stránka Debianu", "Zadajte hľadaný výraz.", "Pre „{query}“ sa nenašli žiadne sekcie.", "Zobrazuje sa {heading}."],
  es: ["Debian 13 «Trixie» es la versión estable actual", "La base sólida para", "tu libertad digital", "Impulsa servidores, equipos de escritorio, infraestructura en la nube y dispositivos integrados en todo el mundo. Libre, abierto y comunitario desde 1993.", "Encuentra la imagen de Debian adecuada para tu hardware y uso.", "Paquetes de software", "Arquitecturas compatibles", "Libre y de código abierto", "Estabilidad demostrada", "Creado para el rendimiento y la libertad", "Modelo de versiones flexible", "Inicio de Debian", "Introduce un término de búsqueda.", "No se encontraron secciones para «{query}».", "Mostrando {heading}."],
  sv: ["Debian 13 ”Trixie” är den aktuella stabila utgåvan", "Den stabila grunden för", "din digitala frihet", "Driver servrar, datorer, molninfrastruktur och inbyggda enheter världen över. Fri, öppen och gemenskapsdriven sedan 1993.", "Hitta den Debian-avbildning som passar din maskinvara och användning.", "Programvarupaket", "Arkitekturer som stöds", "Fri och öppen källkod", "Beprövad stabilitet", "Byggt för prestanda och frihet", "Flexibel utgivningsmodell", "Debians startsida", "Ange en sökterm.", "Inga avsnitt hittades för ”{query}”.", "Visar {heading}."],
  tr: ["Debian 13 “Trixie” mevcut Kararlı sürümdür", "Dijital özgürlüğünüz için", "sağlam bir temel", "Dünya çapında sunuculara, masaüstlerine, bulut altyapısına ve gömülü cihazlara güç verir. 1993'ten beri özgür, açık ve topluluk tarafından geliştiriliyor.", "Donanımınıza ve kullanımınıza uygun Debian kalıbını bulun.", "Yazılım paketi", "Desteklenen mimari", "Özgür ve Açık Kaynak", "Kanıtlanmış Kararlılık", "Performans ve özgürlük için tasarlandı", "Esnek Sürüm Modeli", "Debian ana sayfası", "Bir arama terimi girin.", "“{query}” için bölüm bulunamadı.", "{heading} gösteriliyor."],
  uk: ["Debian 13 «Trixie» — поточний стабільний випуск", "Надійна основа для", "вашої цифрової свободи", "Підтримує сервери, настільні комп’ютери, хмарну інфраструктуру та вбудовані пристрої в усьому світі. Вільний, відкритий і створюється спільнотою з 1993 року.", "Знайдіть образ Debian для свого обладнання та завдань.", "Пакетів програм", "Підтримуваних архітектур", "Вільне ПЗ з відкритим кодом", "Перевірена стабільність", "Створено для продуктивності та свободи", "Гнучка модель випусків", "Домашня сторінка Debian", "Введіть пошуковий запит.", "Розділів для «{query}» не знайдено.", "Показано: {heading}."],
  vi: ["Debian 13 “Trixie” là bản Ổn định hiện tại", "Nền tảng vững chắc cho", "tự do số của bạn", "Vận hành máy chủ, máy tính, hạ tầng đám mây và thiết bị nhúng trên toàn thế giới. Tự do, mở và do cộng đồng phát triển từ năm 1993.", "Tìm ảnh Debian phù hợp với phần cứng và mục đích sử dụng của bạn.", "Gói phần mềm", "Kiến trúc được hỗ trợ", "Tự do & Mã nguồn mở", "Ổn định đã được chứng minh", "Được xây dựng vì hiệu năng và tự do", "Mô hình phát hành linh hoạt", "Trang chủ Debian", "Nhập từ khóa tìm kiếm.", "Không tìm thấy mục nào cho “{query}”.", "Đang hiển thị {heading}."],
};

const selectorKeys = [
  "stableOption", "testingOption", "unstableOption", "pc64", "arm64", "pc32",
  "power", "riscV", "netinst", "gnome", "kde", "xfce",
  "featureStableTitle", "featureFreeTitle", "featureHardwareTitle",
  "stableTitle", "testingTitle", "unstableTitle",
] as const;

const selectorTranslations: TranslationCatalog<typeof selectorKeys> = {
  ar: ["مستقر 13 (تريكسي) - موصى به", "اختباري (فوركي) - الجيل التالي", "غير مستقر (سيد) - متجدد", "حاسوب 64 بت (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi، آلة افتراضية Apple M)", "حاسوب 32 بت (i386)", "معالجات POWER (ppc64el)", "RISC-V ‏64 بت (riscv64)", "Netinst قياسي (ISO مصغر)", "ISO مباشر بسطح مكتب GNOME", "ISO مباشر بسطح مكتب KDE Plasma", "ISO مباشر بسطح مكتب XFCE خفيف", "استقرار لا مثيل له", "برمجيات حرة 100٪", "عتاد شامل", "ديبيان المستقر", "ديبيان الاختباري", "ديبيان غير المستقر"],
  bg: ["Stable 13 (Trixie) - Препоръчително", "Testing (Forky) - Следващо поколение", "Unstable (Sid) - Текущо", "64-битов компютър (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M VM)", "32-битов компютър (i386)", "POWER процесори (ppc64el)", "RISC-V 64-битов (riscv64)", "Стандартен Netinst (минимален ISO)", "Live ISO с работна среда GNOME", "Live ISO с KDE Plasma", "Live ISO с лек XFCE", "Ненадмината стабилност", "100% свободен софтуер", "Универсален хардуер", "Debian Stable", "Debian Testing", "Debian Unstable"],
  ca: ["Estable 13 (Trixie) - Recomanat", "Testing (Forky) - Nova generació", "Inestable (Sid) - Continu", "PC de 64 bits (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "PC de 32 bits (i386)", "Processadors POWER (ppc64el)", "RISC-V de 64 bits (riscv64)", "Netinst estàndard (ISO mínim)", "ISO Live amb GNOME", "ISO Live amb KDE Plasma", "ISO Live amb XFCE lleuger", "Estabilitat inigualable", "Programari 100% lliure", "Maquinari universal", "Debian estable", "Debian Testing", "Debian inestable"],
  "zh-CN": ["稳定版 13 (Trixie) - 推荐", "测试版 (Forky) - 新一代", "不稳定版 (Sid) - 滚动更新", "64 位 PC (amd64 / x86_64)", "ARM64 / AArch64（Raspberry Pi、Apple M 虚拟机）", "32 位 PC (i386)", "POWER 处理器 (ppc64el)", "64 位 RISC-V (riscv64)", "标准 Netinst（最小 ISO）", "含 GNOME 桌面的 Live ISO", "含 KDE Plasma 的 Live ISO", "含轻量 XFCE 的 Live ISO", "无与伦比的稳定性", "100% 自由软件", "通用硬件支持", "Debian 稳定版", "Debian 测试版", "Debian 不稳定版"],
  "zh-TW": ["穩定版 13 (Trixie) - 推薦", "測試版 (Forky) - 新世代", "不穩定版 (Sid) - 滾動更新", "64 位元 PC (amd64 / x86_64)", "ARM64 / AArch64（Raspberry Pi、Apple M 虛擬機）", "32 位元 PC (i386)", "POWER 處理器 (ppc64el)", "64 位元 RISC-V (riscv64)", "標準 Netinst（最小 ISO）", "含 GNOME 桌面的 Live ISO", "含 KDE Plasma 的 Live ISO", "含輕量 XFCE 的 Live ISO", "無可比擬的穩定性", "100% 自由軟體", "通用硬體支援", "Debian 穩定版", "Debian 測試版", "Debian 不穩定版"],
  hr: ["Stable 13 (Trixie) - Preporučeno", "Testing (Forky) - Nova generacija", "Unstable (Sid) - Kontinuirano", "64-bitno računalo (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M VM)", "32-bitno računalo (i386)", "POWER procesori (ppc64el)", "RISC-V 64-bitni (riscv64)", "Standardni Netinst (minimalni ISO)", "Live ISO s GNOME radnom površinom", "Live ISO s KDE Plasma", "Live ISO s laganim XFCE-om", "Nenadmašna stabilnost", "100 % slobodan softver", "Univerzalni hardver", "Debian Stable", "Debian Testing", "Debian Unstable"],
  cs: ["Stable 13 (Trixie) – Doporučeno", "Testing (Forky) – Nová generace", "Unstable (Sid) – Průběžná", "64bitový počítač (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M VM)", "32bitový počítač (i386)", "Procesory POWER (ppc64el)", "64bitový RISC-V (riscv64)", "Standardní Netinst (minimální ISO)", "Live ISO s GNOME", "Live ISO s KDE Plasma", "Live ISO s lehkým XFCE", "Bezkonkurenční stabilita", "100% svobodný software", "Univerzální hardware", "Debian Stable", "Debian Testing", "Debian Unstable"],
  da: ["Stable 13 (Trixie) - Anbefalet", "Testing (Forky) - Næste generation", "Unstable (Sid) - Rullende", "64-bit pc (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M VM)", "32-bit pc (i386)", "POWER-processorer (ppc64el)", "RISC-V 64-bit (riscv64)", "Standard Netinst (minimal ISO)", "Live-ISO med GNOME-skrivebord", "Live-ISO med KDE Plasma", "Live-ISO med let XFCE", "Uovertruffen stabilitet", "100 % fri software", "Universel hardware", "Debian Stable", "Debian Testing", "Debian Unstable"],
  nl: ["Stable 13 (Trixie) - Aanbevolen", "Testing (Forky) - Volgende generatie", "Unstable (Sid) - Rolling", "64-bits pc (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M-VM)", "32-bits pc (i386)", "POWER-processors (ppc64el)", "64-bits RISC-V (riscv64)", "Standaard Netinst (minimale ISO)", "Live-ISO met GNOME-desktop", "Live-ISO met KDE Plasma", "Live-ISO met lichte XFCE", "Ongeëvenaarde stabiliteit", "100% vrije software", "Universele hardware", "Debian Stable", "Debian Testing", "Debian Unstable"],
  fi: ["Vakaa 13 (Trixie) – Suositus", "Testing (Forky) – Seuraava sukupolvi", "Epävakaa (Sid) – Jatkuva", "64-bittinen PC (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M -virtuaalikone)", "32-bittinen PC (i386)", "POWER-suorittimet (ppc64el)", "64-bittinen RISC-V (riscv64)", "Tavallinen Netinst (pieni ISO)", "Live-ISO ja GNOME-työpöytä", "Live-ISO ja KDE Plasma", "Live-ISO ja kevyt XFCE", "Verraton vakaus", "100 % vapaita ohjelmistoja", "Yleiskäyttöinen laitteisto", "Debian Stable", "Debian Testing", "Debian Unstable"],
  fr: ["Stable 13 (Trixie) - Recommandé", "Testing (Forky) - Nouvelle génération", "Unstable (Sid) - Continu", "PC 64 bits (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "PC 32 bits (i386)", "Processeurs POWER (ppc64el)", "RISC-V 64 bits (riscv64)", "Netinst standard (ISO minimale)", "ISO Live avec bureau GNOME", "ISO Live avec KDE Plasma", "ISO Live avec XFCE léger", "Stabilité inégalée", "Logiciel 100 % libre", "Matériel universel", "Debian stable", "Debian Testing", "Debian Unstable"],
  gl: ["Estable 13 (Trixie) - Recomendado", "Testing (Forky) - Nova xeración", "Inestable (Sid) - Continuo", "PC de 64 bits (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "PC de 32 bits (i386)", "Procesadores POWER (ppc64el)", "RISC-V de 64 bits (riscv64)", "Netinst estándar (ISO mínima)", "ISO Live con GNOME", "ISO Live con KDE Plasma", "ISO Live con XFCE lixeiro", "Estabilidade sen igual", "Software 100% libre", "Hardware universal", "Debian estable", "Debian Testing", "Debian inestable"],
  de: ["Stable 13 (Trixie) – Empfohlen", "Testing (Forky) – Nächste Generation", "Unstable (Sid) – Rolling", "64-Bit-PC (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple-M-VM)", "32-Bit-PC (i386)", "POWER-Prozessoren (ppc64el)", "64-Bit-RISC-V (riscv64)", "Standard-Netinst (minimales ISO)", "Live-ISO mit GNOME-Desktop", "Live-ISO mit KDE Plasma", "Live-ISO mit leichtem XFCE", "Unübertroffene Stabilität", "100 % freie Software", "Universelle Hardware", "Debian Stable", "Debian Testing", "Debian Unstable"],
  el: ["Stable 13 (Trixie) - Προτείνεται", "Testing (Forky) - Επόμενη γενιά", "Unstable (Sid) - Κυλιόμενη", "Υπολογιστής 64-bit (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "Υπολογιστής 32-bit (i386)", "Επεξεργαστές POWER (ppc64el)", "RISC-V 64-bit (riscv64)", "Τυπικό Netinst (ελάχιστο ISO)", "Live ISO με GNOME", "Live ISO με KDE Plasma", "Live ISO με ελαφρύ XFCE", "Απαράμιλλη σταθερότητα", "100% ελεύθερο λογισμικό", "Καθολικό υλικό", "Debian Stable", "Debian Testing", "Debian Unstable"],
  hu: ["Stable 13 (Trixie) – Ajánlott", "Testing (Forky) – Következő generáció", "Unstable (Sid) – Folyamatos", "64 bites PC (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M virtuális gép)", "32 bites PC (i386)", "POWER processzorok (ppc64el)", "64 bites RISC-V (riscv64)", "Szokásos Netinst (minimális ISO)", "Live ISO GNOME asztali környezettel", "Live ISO KDE Plasmával", "Live ISO könnyű XFCE-vel", "Páratlan stabilitás", "100%-ban szabad szoftver", "Univerzális hardver", "Debian Stable", "Debian Testing", "Debian Unstable"],
  id: ["Stable 13 (Trixie) - Disarankan", "Testing (Forky) - Generasi Berikutnya", "Unstable (Sid) - Bergulir", "PC 64-bit (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "PC 32-bit (i386)", "Prosesor POWER (ppc64el)", "RISC-V 64-bit (riscv64)", "Netinst Standar (ISO Minimal)", "Live ISO dengan Desktop GNOME", "Live ISO dengan KDE Plasma", "Live ISO dengan XFCE Ringan", "Stabilitas Tak Tertandingi", "100% Perangkat Lunak Bebas", "Perangkat Keras Universal", "Debian Stable", "Debian Testing", "Debian Unstable"],
  it: ["Stable 13 (Trixie) - Consigliato", "Testing (Forky) - Nuova generazione", "Unstable (Sid) - Rolling", "PC a 64 bit (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "PC a 32 bit (i386)", "Processori POWER (ppc64el)", "RISC-V a 64 bit (riscv64)", "Netinst standard (ISO minima)", "ISO Live con desktop GNOME", "ISO Live con KDE Plasma", "ISO Live con XFCE leggero", "Stabilità senza pari", "Software libero al 100%", "Hardware universale", "Debian Stable", "Debian Testing", "Debian Unstable"],
  ja: ["安定版 13 (Trixie) - 推奨", "テスト版 (Forky) - 次世代", "不安定版 (Sid) - ローリング", "64ビット PC (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi、Apple M 仮想マシン)", "32ビット PC (i386)", "POWER プロセッサー (ppc64el)", "64ビット RISC-V (riscv64)", "標準 Netinst (最小 ISO)", "GNOME デスクトップの Live ISO", "KDE Plasma の Live ISO", "軽量 XFCE の Live ISO", "比類ない安定性", "100% フリーソフトウェア", "幅広いハードウェア", "Debian 安定版", "Debian テスト版", "Debian 不安定版"],
  ko: ["안정판 13 (Trixie) - 권장", "테스트 (Forky) - 차세대", "불안정 (Sid) - 롤링", "64비트 PC (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M VM)", "32비트 PC (i386)", "POWER 프로세서 (ppc64el)", "64비트 RISC-V (riscv64)", "표준 Netinst (최소 ISO)", "GNOME 데스크톱 Live ISO", "KDE Plasma Live ISO", "가벼운 XFCE Live ISO", "비할 데 없는 안정성", "100% 자유 소프트웨어", "범용 하드웨어", "Debian 안정판", "Debian 테스트", "Debian 불안정판"],
  nb: ["Stable 13 (Trixie) - Anbefalt", "Testing (Forky) - Neste generasjon", "Unstable (Sid) - Rullerende", "64-bit PC (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M VM)", "32-bit PC (i386)", "POWER-prosessorer (ppc64el)", "RISC-V 64-bit (riscv64)", "Standard Netinst (minimal ISO)", "Live-ISO med GNOME-skrivebord", "Live-ISO med KDE Plasma", "Live-ISO med lett XFCE", "Uovertruffen stabilitet", "100 % fri programvare", "Universell maskinvare", "Debian Stable", "Debian Testing", "Debian Unstable"],
  fa: ["پایدار ۱۳ (Trixie) - پیشنهادی", "آزمایشی (Forky) - نسل بعد", "ناپایدار (Sid) - پیوسته", "رایانه ۶۴ بیتی (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi، ماشین مجازی Apple M)", "رایانه ۳۲ بیتی (i386)", "پردازنده‌های POWER (ppc64el)", "RISC-V ‏۶۴ بیتی (riscv64)", "Netinst استاندارد (ISO کمینه)", "Live ISO با میزکار GNOME", "Live ISO با KDE Plasma", "Live ISO با XFCE سبک", "پایداری بی‌نظیر", "نرم‌افزار ۱۰۰٪ آزاد", "سخت‌افزار همگانی", "دبیان پایدار", "دبیان آزمایشی", "دبیان ناپایدار"],
  pl: ["Stable 13 (Trixie) – Zalecane", "Testing (Forky) – Nowa generacja", "Unstable (Sid) – Ciągłe", "64-bitowy PC (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "32-bitowy PC (i386)", "Procesory POWER (ppc64el)", "64-bitowy RISC-V (riscv64)", "Standardowy Netinst (minimalne ISO)", "Live ISO z GNOME", "Live ISO z KDE Plasma", "Live ISO z lekkim XFCE", "Niezrównana stabilność", "100% wolnego oprogramowania", "Uniwersalny sprzęt", "Debian Stable", "Debian Testing", "Debian Unstable"],
  pt: ["Estável 13 (Trixie) - Recomendado", "Testing (Forky) - Próxima geração", "Instável (Sid) - Contínuo", "PC de 64 bits (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "PC de 32 bits (i386)", "Processadores POWER (ppc64el)", "RISC-V de 64 bits (riscv64)", "Netinst padrão (ISO mínima)", "ISO Live com GNOME", "ISO Live com KDE Plasma", "ISO Live com XFCE leve", "Estabilidade incomparável", "Software 100% livre", "Hardware universal", "Debian Estável", "Debian Testing", "Debian Instável"],
  ro: ["Stable 13 (Trixie) - Recomandat", "Testing (Forky) - Noua generație", "Unstable (Sid) - Continuu", "PC pe 64 de biți (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "PC pe 32 de biți (i386)", "Procesoare POWER (ppc64el)", "RISC-V pe 64 de biți (riscv64)", "Netinst standard (ISO minim)", "ISO Live cu GNOME", "ISO Live cu KDE Plasma", "ISO Live cu XFCE ușor", "Stabilitate de neegalat", "Software 100% liber", "Hardware universal", "Debian Stable", "Debian Testing", "Debian Unstable"],
  ru: ["Stable 13 (Trixie) — рекомендуется", "Testing (Forky) — следующее поколение", "Unstable (Sid) — rolling", "64-разрядный ПК (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, ВМ Apple M)", "32-разрядный ПК (i386)", "Процессоры POWER (ppc64el)", "64-разрядный RISC-V (riscv64)", "Стандартный Netinst (минимальный ISO)", "Live ISO с GNOME", "Live ISO с KDE Plasma", "Live ISO с лёгким XFCE", "Непревзойдённая стабильность", "100% свободное ПО", "Универсальное оборудование", "Debian Stable", "Debian Testing", "Debian Unstable"],
  sk: ["Stable 13 (Trixie) – Odporúčané", "Testing (Forky) – Nová generácia", "Unstable (Sid) – Priebežná", "64-bitový počítač (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "32-bitový počítač (i386)", "Procesory POWER (ppc64el)", "RISC-V 64-bit (riscv64)", "Štandardný Netinst (minimálne ISO)", "Live ISO s GNOME", "Live ISO s KDE Plasma", "Live ISO s ľahkým XFCE", "Bezkonkurenčná stabilita", "100 % slobodný softvér", "Univerzálny hardvér", "Debian Stable", "Debian Testing", "Debian Unstable"],
  es: ["Estable 13 (Trixie) - Recomendado", "Testing (Forky) - Próxima generación", "Inestable (Sid) - Continuo", "PC de 64 bits (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "PC de 32 bits (i386)", "Procesadores POWER (ppc64el)", "RISC-V de 64 bits (riscv64)", "Netinst estándar (ISO mínima)", "ISO Live con escritorio GNOME", "ISO Live con KDE Plasma", "ISO Live con XFCE ligero", "Estabilidad inigualable", "Software 100 % libre", "Hardware universal", "Debian estable", "Debian Testing", "Debian inestable"],
  sv: ["Stable 13 (Trixie) - Rekommenderas", "Testing (Forky) - Nästa generation", "Unstable (Sid) - Rullande", "64-bitars PC (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M VM)", "32-bitars PC (i386)", "POWER-processorer (ppc64el)", "RISC-V 64-bit (riscv64)", "Standard Netinst (minimal ISO)", "Live-ISO med GNOME-skrivbord", "Live-ISO med KDE Plasma", "Live-ISO med lätt XFCE", "Oöverträffad stabilitet", "100 % fri programvara", "Universell maskinvara", "Debian Stable", "Debian Testing", "Debian Unstable"],
  tr: ["Kararlı 13 (Trixie) - Önerilen", "Testing (Forky) - Yeni Nesil", "Unstable (Sid) - Sürekli", "64-bit PC (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, Apple M VM)", "32-bit PC (i386)", "POWER İşlemciler (ppc64el)", "RISC-V 64-bit (riscv64)", "Standart Netinst (Minimal ISO)", "GNOME Masaüstü ile Live ISO", "KDE Plasma ile Live ISO", "Hafif XFCE ile Live ISO", "Eşsiz Kararlılık", "%100 Özgür Yazılım", "Evrensel Donanım", "Debian Kararlı", "Debian Testing", "Debian Kararsız"],
  uk: ["Stable 13 (Trixie) — рекомендовано", "Testing (Forky) — наступне покоління", "Unstable (Sid) — rolling", "64-бітний ПК (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, ВМ Apple M)", "32-бітний ПК (i386)", "Процесори POWER (ppc64el)", "64-бітний RISC-V (riscv64)", "Стандартний Netinst (мінімальний ISO)", "Live ISO з GNOME", "Live ISO з KDE Plasma", "Live ISO з легким XFCE", "Неперевершена стабільність", "100% вільне програмне забезпечення", "Універсальне обладнання", "Debian Stable", "Debian Testing", "Debian Unstable"],
  vi: ["Ổn định 13 (Trixie) - Được đề xuất", "Testing (Forky) - Thế hệ tiếp theo", "Unstable (Sid) - Cuốn chiếu", "PC 64-bit (amd64 / x86_64)", "ARM64 / AArch64 (Raspberry Pi, VM Apple M)", "PC 32-bit (i386)", "Bộ xử lý POWER (ppc64el)", "RISC-V 64-bit (riscv64)", "Netinst tiêu chuẩn (ISO tối thiểu)", "Live ISO với GNOME", "Live ISO với KDE Plasma", "Live ISO với XFCE nhẹ", "Độ ổn định vượt trội", "100% Phần mềm Tự do", "Phần cứng phổ dụng", "Debian Ổn định", "Debian Testing", "Debian Không ổn định"],
};

const detailKeys = ["size", "autoMirror", "trademark"] as const;
const detailTranslations: TranslationCatalog<typeof detailKeys> = {
  ar: ["الحجم:", "شبكة توصيل عالمية سريعة (اكتشاف تلقائي)", "ديبيان علامة تجارية مسجلة مملوكة لشركة Software in the Public Interest, Inc."],
  bg: ["Размер:", "Глобална бърза CDN мрежа (автоматично откриване)", "Debian е регистрирана търговска марка на Software in the Public Interest, Inc."],
  ca: ["Mida:", "CDN global ràpida (detecció automàtica)", "Debian és una marca registrada propietat de Software in the Public Interest, Inc."],
  "zh-CN": ["大小：", "全球高速 CDN（自动检测）", "Debian 是 Software in the Public Interest, Inc. 拥有的注册商标。"],
  "zh-TW": ["大小：", "全球高速 CDN（自動偵測）", "Debian 是 Software in the Public Interest, Inc. 擁有的註冊商標。"],
  hr: ["Veličina:", "Globalni brzi CDN (automatski otkriven)", "Debian je registrirani zaštitni znak u vlasništvu Software in the Public Interest, Inc."],
  cs: ["Velikost:", "Globální rychlá CDN (automaticky zjištěno)", "Debian je registrovaná ochranná známka společnosti Software in the Public Interest, Inc."],
  da: ["Størrelse:", "Globalt hurtigt CDN (automatisk registreret)", "Debian er et registreret varemærke tilhørende Software in the Public Interest, Inc."],
  nl: ["Grootte:", "Wereldwijd snel CDN (automatisch gedetecteerd)", "Debian is een geregistreerd handelsmerk van Software in the Public Interest, Inc."],
  fi: ["Koko:", "Maailmanlaajuinen nopea CDN (tunnistetaan automaattisesti)", "Debian on Software in the Public Interest, Inc:n omistama rekisteröity tavaramerkki."],
  fr: ["Taille :", "CDN mondial rapide (détection automatique)", "Debian est une marque déposée appartenant à Software in the Public Interest, Inc."],
  gl: ["Tamaño:", "CDN global rápido (detección automática)", "Debian é unha marca rexistrada propiedade de Software in the Public Interest, Inc."],
  de: ["Größe:", "Weltweit schnelles CDN (automatisch erkannt)", "Debian ist eine eingetragene Marke von Software in the Public Interest, Inc."],
  el: ["Μέγεθος:", "Παγκόσμιο γρήγορο CDN (αυτόματος εντοπισμός)", "Το Debian είναι σήμα κατατεθέν της Software in the Public Interest, Inc."],
  hu: ["Méret:", "Globális gyors CDN (automatikus felismerés)", "A Debian a Software in the Public Interest, Inc. bejegyzett védjegye."],
  id: ["Ukuran:", "CDN cepat global (terdeteksi otomatis)", "Debian adalah merek dagang terdaftar milik Software in the Public Interest, Inc."],
  it: ["Dimensione:", "CDN globale veloce (rilevamento automatico)", "Debian è un marchio registrato di proprietà di Software in the Public Interest, Inc."],
  ja: ["サイズ:", "グローバル高速 CDN（自動検出）", "Debian は Software in the Public Interest, Inc. が所有する登録商標です。"],
  ko: ["크기:", "전 세계 고속 CDN (자동 감지)", "Debian은 Software in the Public Interest, Inc.의 등록 상표입니다."],
  nb: ["Størrelse:", "Globalt raskt CDN (automatisk oppdaget)", "Debian er et registrert varemerke som tilhører Software in the Public Interest, Inc."],
  fa: ["اندازه:", "شبکه توزیع محتوای سریع جهانی (تشخیص خودکار)", "دبیان علامت تجاری ثبت‌شده متعلق به Software in the Public Interest, Inc. است."],
  pl: ["Rozmiar:", "Globalna szybka sieć CDN (wykrywana automatycznie)", "Debian jest zastrzeżonym znakiem towarowym należącym do Software in the Public Interest, Inc."],
  pt: ["Tamanho:", "CDN global rápida (deteção automática)", "Debian é uma marca registada propriedade da Software in the Public Interest, Inc."],
  ro: ["Dimensiune:", "CDN global rapid (detectat automat)", "Debian este o marcă înregistrată deținută de Software in the Public Interest, Inc."],
  ru: ["Размер:", "Глобальная быстрая CDN (автоопределение)", "Debian — зарегистрированный товарный знак Software in the Public Interest, Inc."],
  sk: ["Veľkosť:", "Globálna rýchla CDN (automaticky zistené)", "Debian je registrovaná ochranná známka spoločnosti Software in the Public Interest, Inc."],
  es: ["Tamaño:", "CDN global rápida (detección automática)", "Debian es una marca registrada propiedad de Software in the Public Interest, Inc."],
  sv: ["Storlek:", "Globalt snabbt CDN (identifieras automatiskt)", "Debian är ett registrerat varumärke som ägs av Software in the Public Interest, Inc."],
  tr: ["Boyut:", "Küresel Hızlı CDN (Otomatik algılandı)", "Debian, Software in the Public Interest, Inc. şirketine ait tescilli bir ticari markadır."],
  uk: ["Розмір:", "Глобальна швидка CDN (автовизначення)", "Debian — зареєстрована торгова марка Software in the Public Interest, Inc."],
  vi: ["Kích thước:", "CDN tốc độ cao toàn cầu (tự động phát hiện)", "Debian là nhãn hiệu đã đăng ký thuộc sở hữu của Software in the Public Interest, Inc."],
};

const releaseNewsKeys = [
  "stableVersion", "stableAction", "testingVersion", "testingAction",
  "unstableVersion", "unstableAction", "newsFrom", "news1Title", "news2Title",
  "news3Title", "legalLinks",
] as const;
const releaseNewsTranslations: TranslationCatalog<typeof releaseNewsKeys> = {
  ar: ['الإصدار 13 "Trixie" (المستقر الحالي)', "احصل على المستقر 13", 'الاسم الرمزي "Forky"', "استكشف الاختباري", 'الاسم الرمزي "Sid"', "استكشف Sid", "من مشروع ديبيان", "إصدار Debian 13.7", "انتهاء دعم Debian 11", "اختتام DebConf26 والإعلان عن DebConf27", "روابط قانونية"],
  bg: ['Версия 13 „Trixie“ (текуща стабилна)', "Вземете Stable 13", 'Кодово име „Forky“', "Разгледайте Testing", 'Кодово име „Sid“', "Разгледайте Sid", "От проекта Debian", "Излезе Debian 13.7", "Поддръжката на Debian 11 приключва", "DebConf26 приключи; обявен е DebConf27", "Правна информация"],
  ca: ['Versió 13 «Trixie» (estable actual)', "Obtén l'estable 13", 'Nom en clau «Forky»', "Explora Testing", 'Nom en clau «Sid»', "Explora Sid", "Del projecte Debian", "Publicat Debian 13.7", "Finalitza el suport de Debian 11", "DebConf26 acaba; s'anuncia DebConf27", "Enllaços legals"],
  "zh-CN": ['版本 13 “Trixie”（当前稳定版）', "获取稳定版 13", '代号“Forky”', "探索测试版", '代号“Sid”', "探索 Sid", "来自 Debian 项目", "Debian 13.7 已发布", "Debian 11 支持结束", "DebConf26 闭幕；DebConf27 公布", "法律链接"],
  "zh-TW": ['版本 13「Trixie」（目前穩定版）', "取得穩定版 13", '代號「Forky」', "探索測試版", '代號「Sid」', "探索 Sid", "來自 Debian 專案", "Debian 13.7 已發布", "Debian 11 支援到期", "DebConf26 閉幕；DebConf27 公布", "法律連結"],
  hr: ['Verzija 13 „Trixie” (trenutačno stabilno)', "Preuzmi Stable 13", 'Kodnog imena „Forky”', "Istraži Testing", 'Kodnog imena „Sid”', "Istraži Sid", "Iz projekta Debian", "Objavljen Debian 13.7", "Podrška za Debian 11 završava", "DebConf26 završio; najavljen DebConf27", "Pravne poveznice"],
  cs: ['Verze 13 „Trixie“ (aktuální stabilní)', "Získat Stable 13", 'Kódové označení „Forky“', "Prozkoumat Testing", 'Kódové označení „Sid“', "Prozkoumat Sid", "Z projektu Debian", "Vyšel Debian 13.7", "Podpora Debianu 11 končí", "DebConf26 skončil; oznámen DebConf27", "Právní odkazy"],
  da: ['Version 13 “Trixie” (aktuel stabil)', "Hent Stable 13", 'Kodenavn “Forky”', "Udforsk Testing", 'Kodenavn “Sid”', "Udforsk Sid", "Fra Debian-projektet", "Debian 13.7 udgivet", "Debian 11-support ophører", "DebConf26 afsluttet; DebConf27 annonceret", "Juridiske links"],
  nl: ['Versie 13 “Trixie” (huidige stabiele versie)', "Stable 13 ophalen", 'Codenaam “Forky”', "Testing verkennen", 'Codenaam “Sid”', "Sid verkennen", "Van het Debian-project", "Debian 13.7 uitgebracht", "Ondersteuning voor Debian 11 stopt", "DebConf26 afgesloten; DebConf27 aangekondigd", "Juridische links"],
  fi: ['Versio 13 ”Trixie” (nykyinen vakaa)', "Hanki Stable 13", 'Koodinimi ”Forky”', "Tutustu Testing-versioon", 'Koodinimi ”Sid”', "Tutustu Sidiin", "Debian-projektilta", "Debian 13.7 julkaistu", "Debian 11:n tuki päättyy", "DebConf26 päättyi; DebConf27 julkistettu", "Lakilinkit"],
  fr: ['Version 13 « Trixie » (stable actuelle)', "Obtenir Stable 13", 'Nom de code « Forky »', "Découvrir Testing", 'Nom de code « Sid »', "Découvrir Sid", "Du projet Debian", "Debian 13.7 est disponible", "Fin du support de Debian 11", "Fin de DebConf26 ; annonce de DebConf27", "Liens juridiques"],
  gl: ['Versión 13 «Trixie» (estable actual)', "Obter Estable 13", 'Nome en clave «Forky»', "Explorar Testing", 'Nome en clave «Sid»', "Explorar Sid", "Do proxecto Debian", "Publicado Debian 13.7", "Remata o soporte de Debian 11", "Pecha DebConf26; anúnciase DebConf27", "Ligazóns legais"],
  de: ['Version 13 „Trixie“ (aktuell stabil)', "Stable 13 holen", 'Codename „Forky“', "Testing erkunden", 'Codename „Sid“', "Sid erkunden", "Vom Debian-Projekt", "Debian 13.7 veröffentlicht", "Support für Debian 11 endet", "DebConf26 beendet; DebConf27 angekündigt", "Rechtliche Links"],
  el: ['Έκδοση 13 «Trixie» (τρέχουσα σταθερή)', "Λήψη Stable 13", 'Κωδική ονομασία «Forky»', "Εξερεύνηση Testing", 'Κωδική ονομασία «Sid»', "Εξερεύνηση Sid", "Από το έργο Debian", "Κυκλοφόρησε το Debian 13.7", "Λήξη υποστήριξης Debian 11", "Ολοκληρώθηκε το DebConf26· ανακοινώθηκε το DebConf27", "Νομικοί σύνδεσμοι"],
  hu: ['13. verzió „Trixie” (jelenlegi stabil)', "Stable 13 letöltése", '„Forky” kódnevű', "Testing felfedezése", '„Sid” kódnevű', "Sid felfedezése", "A Debian projekttől", "Megjelent a Debian 13.7", "A Debian 11 támogatása véget ér", "A DebConf26 lezárult; bejelentették a DebConf27-et", "Jogi hivatkozások"],
  id: ['Versi 13 “Trixie” (Stabil saat ini)', "Dapatkan Stable 13", 'Nama kode “Forky”', "Jelajahi Testing", 'Nama kode “Sid”', "Jelajahi Sid", "Dari Proyek Debian", "Debian 13.7 dirilis", "Dukungan Debian 11 berakhir", "DebConf26 ditutup; DebConf27 diumumkan", "Tautan Hukum"],
  it: ['Versione 13 “Trixie” (stabile attuale)', "Ottieni Stable 13", 'Nome in codice “Forky”', "Esplora Testing", 'Nome in codice “Sid”', "Esplora Sid", "Dal progetto Debian", "Rilasciato Debian 13.7", "Termina il supporto a Debian 11", "DebConf26 si conclude; annunciato DebConf27", "Link legali"],
  ja: ['バージョン 13「Trixie」（現在の安定版）', "安定版 13 を入手", 'コードネーム「Forky」', "テスト版を見る", 'コードネーム「Sid」', "Sid を見る", "Debian プロジェクトより", "Debian 13.7 リリース", "Debian 11 のサポート終了", "DebConf26 閉幕、DebConf27 発表", "法的リンク"],
  ko: ['버전 13 “Trixie” (현재 안정판)', "안정판 13 받기", '코드명 “Forky”', "테스트 살펴보기", '코드명 “Sid”', "Sid 살펴보기", "Debian 프로젝트 소식", "Debian 13.7 출시", "Debian 11 지원 종료", "DebConf26 폐막 및 DebConf27 발표", "법적 링크"],
  nb: ['Versjon 13 «Trixie» (gjeldende stabil)', "Hent Stable 13", 'Kodenavn «Forky»', "Utforsk Testing", 'Kodenavn «Sid»', "Utforsk Sid", "Fra Debian-prosjektet", "Debian 13.7 utgitt", "Støtten for Debian 11 avsluttes", "DebConf26 avsluttet; DebConf27 annonsert", "Juridiske lenker"],
  fa: ['نسخه ۱۳ «Trixie» (پایدار کنونی)', "دریافت پایدار ۱۳", 'نام رمز «Forky»', "کاوش نسخه آزمایشی", 'نام رمز «Sid»', "کاوش Sid", "از پروژه دبیان", "انتشار Debian 13.7", "پایان پشتیبانی Debian 11", "پایان DebConf26؛ اعلام DebConf27", "پیوندهای حقوقی"],
  pl: ['Wersja 13 „Trixie” (obecna stabilna)', "Pobierz Stable 13", 'Nazwa kodowa „Forky”', "Poznaj Testing", 'Nazwa kodowa „Sid”', "Poznaj Sid", "Z projektu Debian", "Wydano Debian 13.7", "Koniec wsparcia Debian 11", "DebConf26 zakończony; ogłoszono DebConf27", "Linki prawne"],
  pt: ['Versão 13 «Trixie» (estável atual)', "Obter Estável 13", 'Nome de código «Forky»', "Explorar Testing", 'Nome de código «Sid»', "Explorar Sid", "Do Projeto Debian", "Debian 13.7 lançado", "Fim do suporte ao Debian 11", "DebConf26 termina; DebConf27 anunciado", "Ligações legais"],
  ro: ['Versiunea 13 „Trixie” (stabilă actuală)', "Obține Stable 13", 'Nume de cod „Forky”', "Explorează Testing", 'Nume de cod „Sid”', "Explorează Sid", "Din proiectul Debian", "Lansat Debian 13.7", "Suportul pentru Debian 11 se încheie", "DebConf26 s-a încheiat; DebConf27 a fost anunțat", "Legături juridice"],
  ru: ['Версия 13 «Trixie» (текущая стабильная)', "Получить Stable 13", 'Кодовое имя «Forky»', "Изучить Testing", 'Кодовое имя «Sid»', "Изучить Sid", "От проекта Debian", "Выпущен Debian 13.7", "Поддержка Debian 11 завершена", "DebConf26 завершилась; объявлена DebConf27", "Юридические ссылки"],
  sk: ['Verzia 13 „Trixie“ (aktuálna stabilná)', "Získať Stable 13", 'Kódové označenie „Forky“', "Preskúmať Testing", 'Kódové označenie „Sid“', "Preskúmať Sid", "Z projektu Debian", "Vydaný Debian 13.7", "Podpora Debianu 11 sa končí", "DebConf26 sa skončil; oznámený DebConf27", "Právne odkazy"],
  es: ['Versión 13 «Trixie» (estable actual)', "Obtener Estable 13", 'Nombre en clave «Forky»', "Explorar Testing", 'Nombre en clave «Sid»', "Explorar Sid", "Del proyecto Debian", "Publicado Debian 13.7", "Finaliza el soporte de Debian 11", "DebConf26 termina; se anuncia DebConf27", "Enlaces legales"],
  sv: ['Version 13 ”Trixie” (aktuell stabil)', "Hämta Stable 13", 'Kodnamn ”Forky”', "Utforska Testing", 'Kodnamn ”Sid”', "Utforska Sid", "Från Debian-projektet", "Debian 13.7 har släppts", "Supporten för Debian 11 upphör", "DebConf26 avslutas; DebConf27 tillkännages", "Juridiska länkar"],
  tr: ['Sürüm 13 “Trixie” (Mevcut Kararlı)', "Kararlı 13'ü Edin", 'Kod adı “Forky”', "Testing'i Keşfet", 'Kod adı “Sid”', "Sid'i Keşfet", "Debian Projesinden", "Debian 13.7 yayımlandı", "Debian 11 desteği sona eriyor", "DebConf26 sona erdi; DebConf27 duyuruldu", "Yasal Bağlantılar"],
  uk: ['Версія 13 «Trixie» (поточна стабільна)', "Отримати Stable 13", 'Кодова назва «Forky»', "Ознайомитися з Testing", 'Кодова назва «Sid»', "Ознайомитися із Sid", "Від проєкту Debian", "Випущено Debian 13.7", "Підтримка Debian 11 завершується", "DebConf26 завершено; оголошено DebConf27", "Юридичні посилання"],
  vi: ['Phiên bản 13 “Trixie” (Ổn định hiện tại)', "Tải bản Ổn định 13", 'Tên mã “Forky”', "Khám phá Testing", 'Tên mã “Sid”', "Khám phá Sid", "Từ Dự án Debian", "Debian 13.7 được phát hành", "Debian 11 hết thời hạn hỗ trợ", "DebConf26 bế mạc; công bố DebConf27", "Liên kết pháp lý"],
};

const descriptionKeys = [
  "featureStableDescription", "featureFreeDescription", "featureHardwareDescription",
  "stableDescription", "testingDescription", "unstableDescription",
  "news1Description", "news2Description", "news3Description", "communityDescription",
  "wikiDescription", "forumsDescription", "bugsDescription", "developerDescription",
] as const;
const descriptionTranslations: TranslationCatalog<typeof descriptionKeys> = {
  ar: ["اختبارات صارمة وتحديثات موثوقة للبنية التحتية الحساسة.", "إرشادات DFSG تضمن الحرية والخصوصية والتعاون المفتوح.", "من الخوادم الحديثة إلى الأجهزة القديمة والسحابة.", "تحديثات أمنية مختبرة للإنتاج والخوادم ومحطات العمل.", "حزم أحدث استعدادًا للإصدار المستقر التالي.", "فرع تطوير متجدد للمطورين ومساهمي لينكس.", "تحديث نقطي جديد مع إصلاحات أمنية ومهمة.", "انتهى دعم Bullseye طويل الأمد؛ خطط للترقية.", "اختتم المؤتمر السنوي وأُعلن عن الدورة التالية.", "انضم إلى المتطوعين والمطورين والمستخدمين لدعم ديبيان.", "أدلة رسمية وإعدادات وحلول للمشكلات.", "اطرح الأسئلة وشارك النصائح وتواصل مع المستخدمين.", "أبلغ عن المشكلات وتابع إصلاحها وحسّن الحزم.", "تعلم صيانة الحزم والمساهمة ورعاية البنية التحتية."],
  bg: ["Строги тестове и надеждни актуализации за критична инфраструктура.", "DFSG гарантира свобода, поверителност и открито сътрудничество.", "От модерни сървъри до стар хардуер и облак.", "Тествани защитни актуализации за сървъри и работни станции.", "По-нови пакети в подготовка за следващото стабилно издание.", "Текущ клон за разработчици и Linux сътрудници.", "Нова точкова версия със защитни и важни корекции.", "Дългосрочната поддръжка на Bullseye приключи; планирайте надстройка.", "Годишната конференция приключи и следващата е обявена.", "Присъединете се към доброволците и потребителите на Debian.", "Официални ръководства, настройки и помощ за проблеми.", "Задавайте въпроси и обменяйте съвети с потребителите.", "Докладвайте проблеми и помагайте за подобряване на пакетите.", "Научете поддръжка на пакети и принос към проекта."],
  ca: ["Proves rigoroses i actualitzacions fiables per a sistemes crítics.", "La DFSG garanteix llibertat, privadesa i col·laboració oberta.", "Des de servidors moderns fins a equips antics i el núvol.", "Actualitzacions de seguretat provades per a producció i servidors.", "Paquets nous mentre es prepara la propera versió estable.", "Branca contínua per a desenvolupadors i col·laboradors de Linux.", "Nova versió puntual amb correccions de seguretat i errors importants.", "El suport LTS de Bullseye ha acabat; planifica una actualització.", "La conferència anual ha acabat i s'ha anunciat la següent.", "Uneix-te als voluntaris, desenvolupadors i usuaris de Debian.", "Guies oficials, configuració i resolució de problemes.", "Fes preguntes, comparteix consells i connecta amb usuaris.", "Informa d'errors i ajuda a millorar els paquets.", "Aprèn a mantenir paquets, contribuir i donar suport a la infraestructura."],
  "zh-CN": ["严格测试与可靠更新，适用于关键基础设施。", "DFSG 保障软件自由、用户隐私与开放协作。", "支持现代服务器、旧设备和云端环境。", "经过测试的安全更新，适用于生产环境和服务器。", "提供较新的软件包，为下一个稳定版做准备。", "面向开发者和 Linux 贡献者的滚动开发分支。", "最新维护版包含安全修复和重要问题更正。", "Bullseye 长期支持已结束；Debian 11 用户应计划升级。", "年度会议已结束，并公布了下一届会议。", "加入志愿者、开发者和用户，共同支持 Debian。", "官方指南、配置手册和故障排除文档。", "提问、分享建议并联系全球 Debian 用户。", "报告问题、跟踪修复并提升软件包质量。", "了解软件包维护、代码贡献和基础设施支持。"],
  "zh-TW": ["嚴謹測試與可靠更新，適用於關鍵基礎架構。", "DFSG 保障軟體自由、使用者隱私與開放協作。", "支援現代伺服器、舊型裝置與雲端環境。", "經過測試的安全更新，適用於正式環境與伺服器。", "提供較新的套件，為下一個穩定版做準備。", "面向開發者與 Linux 貢獻者的持續開發分支。", "最新維護版本包含安全修正與重要問題更正。", "Bullseye 長期支援已結束；Debian 11 使用者應規劃升級。", "年度會議已結束，並公布下一屆會議。", "加入志工、開發者與使用者，一同支持 Debian。", "官方指南、設定手冊與疑難排解文件。", "提問、分享建議並與全球 Debian 使用者交流。", "回報問題、追蹤修正並改善套件品質。", "學習維護套件、貢獻程式碼及支援基礎架構。"],
  hr: ["Stroga testiranja i pouzdane nadogradnje za kritičnu infrastrukturu.", "DFSG jamči slobodu softvera, privatnost i otvorenu suradnju.", "Od modernih poslužitelja do starih uređaja i oblaka.", "Provjerene sigurnosne nadogradnje za produkciju i poslužitelje.", "Noviji paketi u pripremi sljedećeg stabilnog izdanja.", "Kontinuirana razvojna grana za programere i Linux suradnike.", "Najnovije izdanje donosi sigurnosne i važne ispravke.", "Bullseye LTS podrška završila je; planirajte nadogradnju.", "Godišnja konferencija završila je, a sljedeća je najavljena.", "Pridružite se volonterima, programerima i korisnicima Debiana.", "Službeni vodiči, konfiguracije i dokumentacija za rješavanje problema.", "Postavljajte pitanja i razmjenjujte savjete s korisnicima.", "Prijavite probleme i pomozite poboljšati pakete.", "Naučite održavati pakete, doprinositi kodom i infrastrukturi."],
  cs: ["Přísné testování a spolehlivé aktualizace pro kritickou infrastrukturu.", "DFSG zaručuje svobodu softwaru, soukromí a otevřenou spolupráci.", "Od moderních serverů po starší zařízení a cloud.", "Ověřené bezpečnostní aktualizace pro produkci a servery.", "Novější balíčky při přípravě dalšího stabilního vydání.", "Průběžná vývojová větev pro vývojáře a přispěvatele Linuxu.", "Nové opravné vydání přináší bezpečnostní a důležité opravy.", "Dlouhodobá podpora Bullseye skončila; naplánujte upgrade.", "Výroční konference skončila a další ročník byl oznámen.", "Připojte se k dobrovolníkům, vývojářům a uživatelům Debianu.", "Oficiální příručky, konfigurace a řešení problémů.", "Ptejte se, sdílejte rady a propojte se s uživateli.", "Hlášením chyb a sledováním oprav pomáháte zlepšit balíčky.", "Naučte se spravovat balíčky, přispívat kódem a podporovat infrastrukturu."],
  da: ["Grundige test og pålidelige opdateringer til kritisk infrastruktur.", "DFSG sikrer softwarefrihed, privatliv og åbent samarbejde.", "Fra moderne servere til ældre enheder og skyen.", "Afprøvede sikkerhedsopdateringer til produktion og servere.", "Nyere pakker forbereder den næste stabile udgave.", "Rullende udviklingsgren for udviklere og Linux-bidragydere.", "Seneste punktudgivelse indeholder sikkerhedsrettelser og vigtige fejlrettelser.", "Bullseye-LTS-supporten er slut; planlæg en opgradering.", "Den årlige konference sluttede, og næste udgave blev annonceret.", "Bliv en del af frivillige, udviklere og Debian-brugere.", "Officielle vejledninger, konfiguration og fejlfinding.", "Stil spørgsmål, del råd og mød andre brugere.", "Rapportér problemer og hjælp med at forbedre pakker.", "Lær at vedligeholde pakker, bidrage med kode og støtte infrastruktur."],
  nl: ["Grondige tests en betrouwbare updates voor kritieke infrastructuur.", "DFSG waarborgt vrijheid, privacy en open samenwerking.", "Van moderne servers tot oudere apparaten en de cloud.", "Geteste beveiligingsupdates voor productie en servers.", "Nieuwere pakketten ter voorbereiding op de volgende stabiele uitgave.", "Doorlopende ontwikkelversie voor ontwikkelaars en Linux-bijdragers.", "Nieuwste puntuitgave met beveiligings- en belangrijke correcties.", "De Bullseye-LTS-ondersteuning is beëindigd; plan een upgrade.", "De jaarlijkse conferentie is afgelopen en de volgende aangekondigd.", "Sluit je aan bij vrijwilligers, ontwikkelaars en Debian-gebruikers.", "Officiële gidsen, configuratiehandleidingen en probleemoplossing.", "Stel vragen, deel advies en ontmoet Debian-gebruikers.", "Meld problemen en help de pakketkwaliteit verbeteren.", "Leer pakketten onderhouden, code bijdragen en infrastructuur steunen."],
  fi: ["Tiukka testaus ja luotettavat päivitykset kriittisiin järjestelmiin.", "DFSG turvaa vapauden, yksityisyyden ja avoimen yhteistyön.", "Uusista palvelimista vanhoihin laitteisiin ja pilveen.", "Testatut tietoturvapäivitykset tuotantoon ja palvelimille.", "Uudempia paketteja seuraavaa vakaata julkaisua valmisteltaessa.", "Jatkuva kehityshaara kehittäjille ja Linux-yhteisölle.", "Uusin pistejulkaisu sisältää tietoturva- ja tärkeitä korjauksia.", "Bullseye LTS -tuki on päättynyt; suunnittele päivitys.", "Vuosittainen konferenssi päättyi ja seuraava ilmoitettiin.", "Liity Debianin vapaaehtoisiin, kehittäjiin ja käyttäjiin.", "Virallisia oppaita, määrityksiä ja vianmääritysohjeita.", "Kysy, jaa neuvoja ja verkostoidu käyttäjien kanssa.", "Ilmoita vioista ja auta parantamaan pakettien laatua.", "Opi ylläpitämään paketteja, osallistumaan koodiin ja tukemaan infrastruktuuria."],
  fr: ["Tests rigoureux et mises à jour fiables pour les systèmes critiques.", "La DFSG garantit liberté logicielle, vie privée et collaboration ouverte.", "Des serveurs modernes aux anciens appareils et au cloud.", "Mises à jour de sécurité testées pour les serveurs et la production.", "Des paquets plus récents en préparation de la prochaine stable.", "Branche de développement continue pour développeurs et contributeurs Linux.", "Dernière mise à jour avec correctifs de sécurité et corrections importantes.", "Le support LTS de Bullseye est terminé ; planifiez une mise à niveau.", "La conférence annuelle s'est achevée et la prochaine est annoncée.", "Rejoignez les bénévoles, développeurs et utilisateurs Debian.", "Guides officiels, manuels de configuration et dépannage.", "Posez vos questions et échangez avec les utilisateurs.", "Signalez des problèmes et contribuez à améliorer les paquets.", "Apprenez à maintenir des paquets, contribuer au code et soutenir l'infrastructure."],
  gl: ["Probas rigorosas e actualizacións fiables para sistemas críticos.", "A DFSG garante liberdade, privacidade e colaboración aberta.", "Desde servidores modernos ata equipos antigos e a nube.", "Actualizacións de seguridade probadas para produción e servidores.", "Paquetes recentes preparando a seguinte versión estable.", "Rama continua para desenvolvedores e colaboradores de Linux.", "A última versión puntual inclúe correccións de seguridade e importantes.", "Rematou o soporte LTS de Bullseye; planifica unha actualización.", "Rematou a conferencia anual e anunciouse a seguinte edición.", "Únete ás persoas voluntarias, desenvolvedoras e usuarias de Debian.", "Guías oficiais, configuración e documentación para resolver problemas.", "Pregunta, comparte consellos e conecta con usuarios.", "Informa de problemas e axuda a mellorar os paquetes.", "Aprende a manter paquetes, contribuír código e apoiar infraestrutura."],
  de: ["Gründliche Tests und zuverlässige Updates für kritische Systeme.", "Die DFSG sichert Freiheit, Datenschutz und offene Zusammenarbeit.", "Von modernen Servern bis zu älteren Geräten und der Cloud.", "Geprüfte Sicherheitsupdates für Produktion und Server.", "Neuere Pakete zur Vorbereitung der nächsten stabilen Veröffentlichung.", "Fortlaufender Entwicklungszweig für Entwickler und Linux-Beitragende.", "Neueste Zwischenversion mit Sicherheits- und wichtigen Fehlerkorrekturen.", "Die Bullseye-LTS-Unterstützung ist beendet; planen Sie ein Upgrade.", "Die jährliche Konferenz ist beendet, die nächste wurde angekündigt.", "Unterstütze Debian gemeinsam mit Freiwilligen, Entwicklern und Nutzern.", "Offizielle Anleitungen, Konfigurationshandbücher und Fehlerbehebung.", "Stelle Fragen, teile Ratschläge und tausche dich mit Nutzern aus.", "Melde Probleme und hilf, die Paketqualität zu verbessern.", "Lerne Paketpflege, Codebeiträge und die Unterstützung der Infrastruktur."],
  el: ["Αυστηρές δοκιμές και αξιόπιστες ενημερώσεις για κρίσιμα συστήματα.", "Το DFSG εγγυάται ελευθερία, ιδιωτικότητα και ανοικτή συνεργασία.", "Από σύγχρονους διακομιστές έως παλιές συσκευές και cloud.", "Δοκιμασμένες ενημερώσεις ασφαλείας για παραγωγή και διακομιστές.", "Νεότερα πακέτα ενόψει της επόμενης σταθερής έκδοσης.", "Κυλιόμενος κλάδος ανάπτυξης για προγραμματιστές και συνεισφέροντες.", "Η νεότερη έκδοση περιλαμβάνει διορθώσεις ασφαλείας και σημαντικών ζητημάτων.", "Η υποστήριξη LTS του Bullseye έληξε· προγραμματίστε αναβάθμιση.", "Το ετήσιο συνέδριο ολοκληρώθηκε και ανακοινώθηκε το επόμενο.", "Συμμετάσχετε στους εθελοντές, προγραμματιστές και χρήστες του Debian.", "Επίσημοι οδηγοί, εγχειρίδια ρυθμίσεων και αντιμετώπιση προβλημάτων.", "Κάντε ερωτήσεις και ανταλλάξτε συμβουλές με χρήστες.", "Αναφέρετε προβλήματα και βοηθήστε στη βελτίωση πακέτων.", "Μάθετε συντήρηση πακέτων, συνεισφορά κώδικα και υποστήριξη υποδομών."],
  hu: ["Szigorú tesztelés és megbízható frissítések kritikus rendszerekhez.", "A DFSG biztosítja a szabadságot, adatvédelmet és együttműködést.", "Modern szerverektől régi eszközökig és felhőig.", "Tesztelt biztonsági frissítések éles rendszerekhez és szerverekhez.", "Újabb csomagok a következő stabil kiadás előkészítéséhez.", "Folyamatos fejlesztési ág fejlesztőknek és Linux-közreműködőknek.", "A legújabb pontkiadás biztonsági és fontos javításokat tartalmaz.", "A Bullseye LTS támogatása véget ért; tervezzen frissítést.", "Az éves konferencia lezárult, a következő bejelentve.", "Csatlakozz a Debian önkénteseihez, fejlesztőihez és felhasználóihoz.", "Hivatalos útmutatók, beállítási kézikönyvek és hibaelhárítás.", "Tegyél fel kérdéseket és ossz meg tanácsokat.", "Jelents hibákat és segíts a csomagok minőségének javításában.", "Tanulj csomagkarbantartást, kódhozzájárulást és infrastruktúra-támogatást."],
  id: ["Pengujian ketat dan pembaruan andal untuk sistem penting.", "DFSG menjamin kebebasan, privasi, dan kolaborasi terbuka.", "Dari server modern hingga perangkat lama dan cloud.", "Pembaruan keamanan teruji untuk server dan lingkungan produksi.", "Paket lebih baru untuk mempersiapkan rilis stabil berikutnya.", "Cabang pengembangan bergulir bagi pengembang dan kontributor Linux.", "Rilis poin terbaru berisi perbaikan keamanan dan masalah penting.", "Masa dukungan Bullseye LTS berakhir; rencanakan peningkatan.", "Konferensi tahunan berakhir dan edisi berikutnya diumumkan.", "Bergabunglah dengan relawan, pengembang, dan pengguna Debian.", "Panduan resmi, manual konfigurasi, dan dokumentasi pemecahan masalah.", "Ajukan pertanyaan, berbagi saran, dan terhubung dengan pengguna.", "Laporkan masalah dan bantu meningkatkan kualitas paket.", "Pelajari pemeliharaan paket, kontribusi kode, dan dukungan infrastruktur."],
  it: ["Test rigorosi e aggiornamenti affidabili per sistemi critici.", "La DFSG garantisce libertà, privacy e collaborazione aperta.", "Dai server moderni ai dispositivi legacy e al cloud.", "Aggiornamenti di sicurezza testati per server e produzione.", "Pacchetti più recenti in preparazione della prossima versione stabile.", "Ramo di sviluppo continuo per sviluppatori e collaboratori Linux.", "L'ultimo aggiornamento include correzioni di sicurezza e problemi importanti.", "Il supporto LTS di Bullseye è terminato; pianifica l'aggiornamento.", "La conferenza annuale è terminata ed è stata annunciata la prossima.", "Unisciti a volontari, sviluppatori e utenti Debian.", "Guide ufficiali, manuali di configurazione e risoluzione dei problemi.", "Fai domande, condividi consigli e connettiti con gli utenti.", "Segnala problemi e contribuisci a migliorare i pacchetti.", "Impara a mantenere pacchetti, contribuire al codice e sostenere l'infrastruttura."],
  ja: ["厳格なテストと信頼できる更新で重要なシステムを支えます。", "DFSGに基づき自由、プライバシー、オープンな協力を保証。", "最新サーバーから旧型機器、クラウドまで対応。", "本番環境やサーバー向けに検証済みのセキュリティ更新。", "次の安定版に向けて新しいパッケージを提供。", "開発者やLinux貢献者向けの継続開発ブランチ。", "最新のポイントリリースには重要な修正とセキュリティ修正を収録。", "Bullseyeの長期サポートは終了しました。アップグレードを計画してください。", "年次カンファレンスが終了し、次回開催が発表されました。", "ボランティア、開発者、ユーザーとしてDebianに参加しましょう。", "公式ガイド、設定マニュアル、トラブルシューティング。", "質問やアドバイスを共有し、ユーザーと交流できます。", "問題を報告し、パッケージ品質の向上に協力できます。", "パッケージ保守、コード貢献、インフラ支援を学べます。"],
  ko: ["엄격한 테스트와 신뢰할 수 있는 업데이트로 핵심 시스템을 지원합니다.", "DFSG에 따라 자유, 개인정보 보호, 열린 협업을 보장합니다.", "최신 서버부터 구형 장치와 클라우드까지 지원합니다.", "운영 환경과 서버를 위한 검증된 보안 업데이트입니다.", "다음 안정 릴리스를 준비하며 최신 패키지를 제공합니다.", "개발자와 Linux 기여자를 위한 롤링 개발 브랜치입니다.", "최신 포인트 릴리스에는 보안 및 주요 수정 사항이 포함됩니다.", "Bullseye 장기 지원이 종료되었습니다. 업그레이드를 계획하세요.", "연례 컨퍼런스가 마무리되고 다음 행사가 발표되었습니다.", "자원봉사자, 개발자, 사용자로 Debian 프로젝트에 참여하세요.", "공식 안내서, 설정 설명서 및 문제 해결 문서입니다.", "질문하고 조언을 나누며 사용자와 소통하세요.", "문제를 보고하고 패키지 품질 향상을 도와주세요.", "패키지 관리, 코드 기여, 인프라 후원을 알아보세요."],
  nb: ["Grundige tester og pålitelige oppdateringer for kritiske systemer.", "DFSG sikrer programvarefrihet, personvern og åpent samarbeid.", "Fra moderne servere til eldre utstyr og skyen.", "Testede sikkerhetsoppdateringer for produksjon og servere.", "Nyere pakker mens neste stabile utgivelse forberedes.", "Rullerende utviklingsgren for utviklere og Linux-bidragsytere.", "Nyeste punktutgivelse inneholder sikkerhets- og viktige rettelser.", "Bullseye LTS-støtte er avsluttet; planlegg en oppgradering.", "Den årlige konferansen ble avsluttet, og neste utgave annonsert.", "Bli med frivillige, utviklere og Debian-brukere.", "Offisielle guider, konfigurasjonsmanualer og feilsøking.", "Still spørsmål, del råd og kontakt andre brukere.", "Rapporter problemer og bidra til bedre pakker.", "Lær pakkevedlikehold, kodebidrag og infrastrukturstøtte."],
  fa: ["آزمایش‌های دقیق و به‌روزرسانی‌های مطمئن برای زیرساخت حساس.", "DFSG آزادی نرم‌افزار، حریم خصوصی و همکاری باز را تضمین می‌کند.", "از سرورهای جدید تا دستگاه‌های قدیمی و ابر.", "به‌روزرسانی امنیتی آزموده‌شده برای سرورها و محیط تولید.", "بسته‌های جدیدتر در آماده‌سازی نسخه پایدار بعدی.", "شاخه توسعه پیوسته برای توسعه‌دهندگان و مشارکت‌کنندگان لینوکس.", "آخرین انتشار نقطه‌ای شامل اصلاحات امنیتی و مهم است.", "پشتیبانی بلندمدت Bullseye پایان یافت؛ برای ارتقا برنامه‌ریزی کنید.", "همایش سالانه پایان یافت و دوره بعد اعلام شد.", "به داوطلبان، توسعه‌دهندگان و کاربران دبیان بپیوندید.", "راهنماهای رسمی، دفترچه تنظیمات و مستندات عیب‌یابی.", "پرسش کنید، راهنمایی به اشتراک بگذارید و با کاربران ارتباط بگیرید.", "اشکال‌ها را گزارش دهید و به بهبود بسته‌ها کمک کنید.", "نگهداری بسته، مشارکت کد و پشتیبانی زیرساخت را بیاموزید."],
  pl: ["Rygorystyczne testy i niezawodne aktualizacje systemów krytycznych.", "DFSG gwarantuje wolność, prywatność i otwartą współpracę.", "Od nowoczesnych serwerów po starsze urządzenia i chmurę.", "Testowane aktualizacje bezpieczeństwa dla serwerów i produkcji.", "Nowsze pakiety przygotowują kolejne wydanie stabilne.", "Ciągła gałąź rozwojowa dla programistów i współtwórców Linuksa.", "Najnowsze wydanie punktowe zawiera poprawki bezpieczeństwa i ważnych błędów.", "Wsparcie LTS Bullseye dobiegło końca; zaplanuj aktualizację.", "Coroczna konferencja dobiegła końca i ogłoszono następną.", "Dołącz do wolontariuszy, programistów i użytkowników Debiana.", "Oficjalne poradniki, konfiguracja i dokumentacja rozwiązywania problemów.", "Zadawaj pytania, dziel się poradami i poznawaj użytkowników.", "Zgłaszaj problemy i pomagaj poprawiać jakość pakietów.", "Poznaj utrzymanie pakietów, wkład w kod i wsparcie infrastruktury."],
  pt: ["Testes rigorosos e atualizações fiáveis para sistemas críticos.", "A DFSG garante liberdade, privacidade e colaboração aberta.", "De servidores modernos a dispositivos antigos e à nuvem.", "Atualizações de segurança testadas para servidores e produção.", "Pacotes recentes enquanto se prepara a próxima versão estável.", "Ramo contínuo para programadores e contribuidores Linux.", "A versão pontual inclui correções de segurança e problemas importantes.", "O suporte LTS do Bullseye terminou; planeie uma atualização.", "A conferência anual terminou e a próxima edição foi anunciada.", "Junte-se aos voluntários, programadores e utilizadores Debian.", "Guias oficiais, configuração e documentação de resolução de problemas.", "Faça perguntas, partilhe conselhos e contacte utilizadores.", "Relate problemas e ajude a melhorar a qualidade dos pacotes.", "Aprenda a manter pacotes, contribuir código e apoiar infraestrutura."],
  ro: ["Testare riguroasă și actualizări fiabile pentru sisteme critice.", "DFSG garantează libertatea software-ului, confidențialitatea și colaborarea.", "De la servere moderne la dispozitive vechi și cloud.", "Actualizări de securitate testate pentru servere și producție.", "Pachete noi pentru pregătirea următoarei versiuni stabile.", "Ramură continuă de dezvoltare pentru colaboratorii Linux.", "Ultima versiune punctuală include remedieri de securitate și importante.", "Suportul LTS Bullseye s-a încheiat; planifică o actualizare.", "Conferința anuală s-a încheiat și următoarea a fost anunțată.", "Alătură-te voluntarilor, dezvoltatorilor și utilizatorilor Debian.", "Ghiduri oficiale, manuale de configurare și depanare.", "Pune întrebări, împărtășește sfaturi și conectează-te cu utilizatorii.", "Raportează probleme și ajută la îmbunătățirea pachetelor.", "Învață întreținerea pachetelor, contribuția la cod și infrastructură."],
  ru: ["Тщательное тестирование и надёжные обновления для критических систем.", "DFSG гарантирует свободу ПО, приватность и открытое сотрудничество.", "От современных серверов до старых устройств и облака.", "Проверенные обновления безопасности для серверов и production-систем.", "Новые пакеты в подготовке следующего стабильного выпуска.", "Развивающаяся ветка для разработчиков и участников Linux.", "Последнее обновление содержит исправления безопасности и важных ошибок.", "Долгосрочная поддержка Bullseye завершена; запланируйте обновление.", "Ежегодная конференция завершилась, объявлена следующая.", "Присоединяйтесь к добровольцам, разработчикам и пользователям Debian.", "Официальные руководства, настройка и устранение неполадок.", "Задавайте вопросы, делитесь советами и общайтесь с пользователями.", "Сообщайте о проблемах и помогайте улучшать пакеты.", "Узнайте о сопровождении пакетов, вкладе в код и поддержке инфраструктуры."],
  sk: ["Prísne testovanie a spoľahlivé aktualizácie pre kritické systémy.", "DFSG zaručuje slobodu softvéru, súkromie a otvorenú spoluprácu.", "Od moderných serverov po staršie zariadenia a cloud.", "Testované bezpečnostné aktualizácie pre produkciu a servery.", "Novšie balíky pri príprave ďalšieho stabilného vydania.", "Priebežná vývojová vetva pre vývojárov a prispievateľov Linuxu.", "Najnovšia opravná verzia obsahuje bezpečnostné a dôležité opravy.", "Dlhodobá podpora Bullseye sa skončila; naplánujte aktualizáciu.", "Výročná konferencia sa skončila a ďalšia bola oznámená.", "Pridajte sa k dobrovoľníkom, vývojárom a používateľom Debianu.", "Oficiálne príručky, konfigurácia a riešenie problémov.", "Pýtajte sa a zdieľajte rady s používateľmi.", "Nahlasujte problémy a pomáhajte zlepšovať balíky.", "Naučte sa spravovať balíky, prispievať kódom a podporovať infraštruktúru."],
  es: ["Pruebas rigurosas y actualizaciones fiables para sistemas críticos.", "La DFSG garantiza libertad, privacidad y colaboración abierta.", "Desde servidores modernos hasta equipos antiguos y la nube.", "Actualizaciones de seguridad probadas para producción y servidores.", "Paquetes más nuevos mientras se prepara la próxima versión estable.", "Rama de desarrollo continua para desarrolladores y colaboradores de Linux.", "La última versión incluye correcciones de seguridad y problemas importantes.", "El soporte LTS de Bullseye terminó; planifica una actualización.", "La conferencia anual terminó y se anunció la próxima edición.", "Únete a voluntarios, desarrolladores y usuarios de Debian.", "Guías oficiales, configuración y documentación para resolver problemas.", "Pregunta, comparte consejos y conecta con usuarios de Debian.", "Informa de problemas y ayuda a mejorar la calidad de los paquetes.", "Aprende a mantener paquetes, contribuir código y apoyar infraestructura."],
  sv: ["Noggranna tester och tillförlitliga uppdateringar för kritiska system.", "DFSG garanterar frihet, integritet och öppet samarbete.", "Från moderna servrar till äldre enheter och molnet.", "Testade säkerhetsuppdateringar för produktion och servrar.", "Nyare paket förbereds inför nästa stabila utgåva.", "Rullande utvecklingsgren för utvecklare och Linux-bidragsgivare.", "Senaste punktutgåvan innehåller säkerhetsfixar och viktiga rättelser.", "Bullseye LTS-supporten har upphört; planera en uppgradering.", "Den årliga konferensen avslutades och nästa utgåva tillkännagavs.", "Gå med bland Debians volontärer, utvecklare och användare.", "Officiella guider, konfigurationsmanualer och felsökning.", "Ställ frågor, dela råd och få kontakt med användare.", "Rapportera problem och hjälp till att förbättra paketkvaliteten.", "Lär dig paketunderhåll, kodbidrag och infrastrukturstöd."],
  tr: ["Kritik sistemler için titiz testler ve güvenilir güncellemeler.", "DFSG özgürlüğü, gizliliği ve açık işbirliğini güvence altına alır.", "Modern sunuculardan eski cihazlara ve buluta kadar.", "Üretim ve sunucular için test edilmiş güvenlik güncellemeleri.", "Sonraki kararlı sürüm hazırlanırken daha yeni paketler.", "Geliştiriciler ve Linux katkıcıları için sürekli geliştirme dalı.", "Son nokta sürümü güvenlik ve önemli sorun düzeltmeleri içerir.", "Bullseye LTS desteği sona erdi; yükseltme planlayın.", "Yıllık konferans sona erdi ve sonraki etkinlik duyuruldu.", "Gönüllülere, geliştiricilere ve Debian kullanıcılarına katılın.", "Resmî kılavuzlar, yapılandırma ve sorun giderme belgeleri.", "Soru sorun, önerilerinizi paylaşın ve kullanıcılarla bağlantı kurun.", "Sorunları bildirin ve paket kalitesini iyileştirmeye yardım edin.", "Paket bakımını, kod katkısını ve altyapı desteğini öğrenin."],
  uk: ["Ретельне тестування та надійні оновлення для критичних систем.", "DFSG гарантує свободу, приватність і відкриту співпрацю.", "Від сучасних серверів до старих пристроїв і хмари.", "Перевірені оновлення безпеки для серверів і робочих систем.", "Новіші пакунки під час підготовки наступного стабільного випуску.", "Гілка розробки для розробників і учасників Linux.", "Останній випуск містить виправлення безпеки та важливих проблем.", "Довгострокову підтримку Bullseye завершено; заплануйте оновлення.", "Щорічна конференція завершилася, наступну оголошено.", "Долучайтеся до волонтерів, розробників і користувачів Debian.", "Офіційні посібники, налаштування та усунення проблем.", "Ставте запитання, діліться порадами й спілкуйтеся з користувачами.", "Повідомляйте про проблеми та допомагайте покращувати пакунки.", "Дізнайтеся про супровід пакунків, внесок у код та інфраструктуру."],
  vi: ["Kiểm thử nghiêm ngặt và cập nhật đáng tin cậy cho hệ thống trọng yếu.", "DFSG bảo đảm tự do phần mềm, quyền riêng tư và hợp tác mở.", "Từ máy chủ hiện đại đến thiết bị cũ và đám mây.", "Cập nhật bảo mật đã kiểm thử cho máy chủ và môi trường sản xuất.", "Gói phần mềm mới hơn trong khi chuẩn bị bản Ổn định tiếp theo.", "Nhánh phát triển liên tục dành cho nhà phát triển và cộng tác viên Linux.", "Bản cập nhật điểm mới nhất gồm sửa lỗi bảo mật và lỗi quan trọng.", "Hỗ trợ dài hạn Bullseye đã kết thúc; hãy lên kế hoạch nâng cấp.", "Hội nghị thường niên đã bế mạc và kỳ tiếp theo được công bố.", "Tham gia cùng tình nguyện viên, nhà phát triển và người dùng Debian.", "Hướng dẫn chính thức, cấu hình và tài liệu xử lý sự cố.", "Đặt câu hỏi, chia sẻ lời khuyên và kết nối người dùng.", "Báo cáo vấn đề và giúp cải thiện chất lượng gói.", "Tìm hiểu cách duy trì gói, đóng góp mã và hỗ trợ hạ tầng."],
};

const communityKeys = [
  "communityLinksTitle", "communityPeople", "communityPeopleDescription",
  "communityPhilosophy", "communityPhilosophyDescription", "communityContribute",
  "communityContributeDescription", "communityMore", "communityMoreDescription",
  "operatingSystemTitle", "whyDebian", "whyDebianDescription", "userSupport",
  "userSupportDescription", "securityUpdates", "securityUpdatesDescription",
  "operatingSystemMoreDescription", "communityGalleryTitle", "previousPhotos",
  "nextPhotos", "photoSlide", "photoPosition", "showPhoto",
] as const;
const communityTranslations: TranslationCatalog<typeof communityKeys> = {
  ar: ["المجتمع", "الأشخاص", "من نحن وماذا نفعل", "فلسفتنا", "لماذا وكيف نعمل", "شارك وساهم", "كيف يمكنك الانضمام", "المزيد", "مزيد من المعلومات عن مجتمع ديبيان", "نظام التشغيل", "لماذا ديبيان", "ما الذي يميز ديبيان", "دعم المستخدمين", "احصل على المساعدة والوثائق", "تحديثات الأمان", "تنبيهات أمان ديبيان (DSA)", "مزيد من الروابط حول التنزيلات والبرامج", "مجتمع ديبيان بالصور", "الصور السابقة", "الصور التالية", "شريحة", "{index} من {total}", "عرض الصورة {index}: {title}"],
  bg: ["Общността", "Хората", "Кои сме и какво правим", "Нашата философия", "Защо и как го правим", "Включете се и допринесете", "Как можете да се присъедините", "Още", "Още за общността на Debian", "Операционната система", "Защо Debian", "Какво прави Debian специален", "Потребителска поддръжка", "Помощ и документация", "Актуализации на сигурността", "Известия за сигурността на Debian (DSA)", "Още връзки за изтегляния и софтуер", "Общността на Debian в снимки", "Предишни снимки", "Следващи снимки", "слайд", "{index} от {total}", "Покажи снимка {index}: {title}"],
  ca: ["La comunitat", "Les persones", "Qui som i què fem", "La nostra filosofia", "Per què i com ho fem", "Participa i contribueix", "Com t'hi pots unir", "Més", "Més informació sobre la comunitat Debian", "El sistema operatiu", "Per què Debian", "Què fa especial Debian", "Suport als usuaris", "Ajuda i documentació", "Actualitzacions de seguretat", "Avisos de seguretat de Debian (DSA)", "Més enllaços sobre baixades i programari", "La comunitat Debian en imatges", "Imatges anteriors", "Imatges següents", "diapositiva", "{index} de {total}", "Mostra la imatge {index}: {title}"],
  "zh-CN": ["社区", "成员", "我们是谁以及我们做什么", "我们的理念", "我们为何以及如何行动", "参与并贡献", "如何加入我们", "更多", "了解更多 Debian 社区信息", "操作系统", "为什么选择 Debian", "Debian 的独特之处", "用户支持", "获取帮助和文档", "安全更新", "Debian 安全公告（DSA）", "更多下载和软件相关链接", "Debian 社区照片", "上一张照片", "下一张照片", "幻灯片", "{index}/{total}", "显示照片 {index}：{title}"],
  "zh-TW": ["社群", "成員", "我們是誰以及我們做什麼", "我們的理念", "我們為何以及如何行動", "參與並貢獻", "如何加入我們", "更多", "深入了解 Debian 社群", "作業系統", "為什麼選擇 Debian", "Debian 的特別之處", "使用者支援", "取得協助與文件", "安全性更新", "Debian 安全公告（DSA）", "更多下載與軟體相關連結", "Debian 社群照片", "上一張照片", "下一張照片", "投影片", "{index}/{total}", "顯示照片 {index}：{title}"],
  hr: ["Zajednica", "Ljudi", "Tko smo i što radimo", "Naša filozofija", "Zašto i kako to radimo", "Uključite se i doprinesite", "Kako se možete pridružiti", "Više", "Više o Debianovoj zajednici", "Operacijski sustav", "Zašto Debian", "Po čemu je Debian poseban", "Korisnička podrška", "Pomoć i dokumentacija", "Sigurnosne nadogradnje", "Debianova sigurnosna upozorenja (DSA)", "Više poveznica za preuzimanja i softver", "Debianova zajednica u slikama", "Prethodne slike", "Sljedeće slike", "slajd", "{index} od {total}", "Prikaži sliku {index}: {title}"],
  cs: ["Komunita", "Lidé", "Kdo jsme a co děláme", "Naše filozofie", "Proč a jak to děláme", "Zapojte se a přispějte", "Jak se můžete připojit", "Více", "Více informací o komunitě Debianu", "Operační systém", "Proč Debian", "Čím je Debian výjimečný", "Uživatelská podpora", "Nápověda a dokumentace", "Bezpečnostní aktualizace", "Bezpečnostní upozornění Debianu (DSA)", "Další odkazy ke stažení a softwaru", "Komunita Debianu na fotografiích", "Předchozí fotografie", "Další fotografie", "snímek", "{index} z {total}", "Zobrazit fotografii {index}: {title}"],
  da: ["Fællesskabet", "Mennesker", "Hvem vi er, og hvad vi gør", "Vores filosofi", "Hvorfor og hvordan vi gør det", "Deltag og bidrag", "Sådan kan du være med", "Mere", "Mere om Debian-fællesskabet", "Operativsystemet", "Hvorfor Debian", "Det særlige ved Debian", "Brugersupport", "Få hjælp og dokumentation", "Sikkerhedsopdateringer", "Debians sikkerhedsmeddelelser (DSA)", "Flere links om downloads og software", "Debian-fællesskabet i billeder", "Forrige billeder", "Næste billeder", "dias", "{index} af {total}", "Vis billede {index}: {title}"],
  nl: ["De gemeenschap", "Mensen", "Wie we zijn en wat we doen", "Onze filosofie", "Waarom en hoe we dat doen", "Doe mee en draag bij", "Zo kun je meedoen", "Meer", "Meer informatie over de Debian-gemeenschap", "Het besturingssysteem", "Waarom Debian", "Wat Debian bijzonder maakt", "Gebruikersondersteuning", "Hulp en documentatie", "Beveiligingsupdates", "Debian-beveiligingsadviezen (DSA)", "Meer links over downloads en software", "De Debian-gemeenschap in beeld", "Vorige foto's", "Volgende foto's", "dia", "{index} van {total}", "Foto {index} tonen: {title}"],
  fi: ["Yhteisö", "Ihmiset", "Keitä olemme ja mitä teemme", "Filosofiamme", "Miksi ja miten toimimme", "Osallistu ja auta", "Näin pääset mukaan", "Lisää", "Lisätietoja Debian-yhteisöstä", "Käyttöjärjestelmä", "Miksi Debian", "Mikä tekee Debianista erityisen", "Käyttäjätuki", "Ohjeita ja dokumentaatiota", "Tietoturvapäivitykset", "Debianin tietoturvatiedotteet (DSA)", "Lisää linkkejä latauksiin ja ohjelmistoihin", "Debian-yhteisö kuvina", "Edelliset kuvat", "Seuraavat kuvat", "dia", "{index}/{total}", "Näytä kuva {index}: {title}"],
  fr: ["La communauté", "Les personnes", "Qui nous sommes et ce que nous faisons", "Notre philosophie", "Pourquoi et comment nous agissons", "Participer et contribuer", "Comment nous rejoindre", "Plus", "En savoir plus sur la communauté Debian", "Le système d’exploitation", "Pourquoi Debian", "Ce qui rend Debian unique", "Assistance aux utilisateurs", "Obtenir de l’aide et de la documentation", "Mises à jour de sécurité", "Avis de sécurité Debian (DSA)", "Plus de liens sur les téléchargements et les logiciels", "La communauté Debian en images", "Photos précédentes", "Photos suivantes", "diapositive", "{index} sur {total}", "Afficher la photo {index} : {title}"],
  gl: ["A comunidade", "As persoas", "Quen somos e que facemos", "A nosa filosofía", "Por que e como o facemos", "Participa e contribúe", "Como podes unirte", "Máis", "Máis información sobre a comunidade Debian", "O sistema operativo", "Por que Debian", "Que fai especial Debian", "Axuda ás persoas usuarias", "Axuda e documentación", "Actualizacións de seguridade", "Avisos de seguridade de Debian (DSA)", "Máis ligazóns sobre descargas e software", "A comunidade Debian en imaxes", "Imaxes anteriores", "Imaxes seguintes", "diapositiva", "{index} de {total}", "Amosar imaxe {index}: {title}"],
  de: ["Die Gemeinschaft", "Menschen", "Wer wir sind und was wir tun", "Unsere Philosophie", "Warum und wie wir es tun", "Mitmachen und beitragen", "So kannst du mitmachen", "Mehr", "Weitere Informationen zur Debian-Gemeinschaft", "Das Betriebssystem", "Warum Debian", "Was Debian besonders macht", "Benutzerunterstützung", "Hilfe und Dokumentation", "Sicherheitsaktualisierungen", "Debian-Sicherheitsmitteilungen (DSA)", "Weitere Links zu Downloads und Software", "Die Debian-Gemeinschaft in Bildern", "Vorherige Fotos", "Nächste Fotos", "Folie", "{index} von {total}", "Foto {index} anzeigen: {title}"],
  el: ["Η κοινότητα", "Άνθρωποι", "Ποιοι είμαστε και τι κάνουμε", "Η φιλοσοφία μας", "Γιατί και πώς το κάνουμε", "Συμμετέχετε και συνεισφέρετε", "Πώς μπορείτε να συμμετάσχετε", "Περισσότερα", "Περισσότερα για την κοινότητα Debian", "Το λειτουργικό σύστημα", "Γιατί Debian", "Τι κάνει το Debian ξεχωριστό", "Υποστήριξη χρηστών", "Βοήθεια και τεκμηρίωση", "Ενημερώσεις ασφάλειας", "Ανακοινώσεις ασφάλειας Debian (DSA)", "Περισσότεροι σύνδεσμοι για λήψεις και λογισμικό", "Η κοινότητα Debian σε εικόνες", "Προηγούμενες φωτογραφίες", "Επόμενες φωτογραφίες", "διαφάνεια", "{index} από {total}", "Εμφάνιση φωτογραφίας {index}: {title}"],
  hu: ["A közösség", "Emberek", "Kik vagyunk és mit teszünk", "Filozófiánk", "Miért és hogyan tesszük", "Csatlakozz és járulj hozzá", "Így csatlakozhatsz", "Továbbiak", "További információ a Debian közösségéről", "Az operációs rendszer", "Miért a Debian", "Mitől különleges a Debian", "Felhasználói támogatás", "Segítség és dokumentáció", "Biztonsági frissítések", "Debian biztonsági közlemények (DSA)", "További hivatkozások letöltésekhez és szoftverekhez", "A Debian közösség képekben", "Előző képek", "Következő képek", "dia", "{index}/{total}", "{index}. kép megjelenítése: {title}"],
  id: ["Komunitas", "Orang-orang", "Siapa kami dan apa yang kami lakukan", "Filosofi kami", "Mengapa dan bagaimana kami melakukannya", "Ikut terlibat dan berkontribusi", "Cara bergabung", "Lainnya", "Informasi lebih lanjut tentang komunitas Debian", "Sistem Operasi", "Mengapa Debian", "Keistimewaan Debian", "Dukungan pengguna", "Bantuan dan dokumentasi", "Pembaruan keamanan", "Penasihat Keamanan Debian (DSA)", "Tautan lain tentang unduhan dan perangkat lunak", "Komunitas Debian dalam gambar", "Foto sebelumnya", "Foto berikutnya", "slide", "{index} dari {total}", "Tampilkan foto {index}: {title}"],
  it: ["La comunità", "Le persone", "Chi siamo e cosa facciamo", "La nostra filosofia", "Perché e come lo facciamo", "Partecipa e contribuisci", "Come puoi unirti", "Altro", "Altre informazioni sulla comunità Debian", "Il sistema operativo", "Perché Debian", "Cosa rende Debian speciale", "Supporto utenti", "Aiuto e documentazione", "Aggiornamenti di sicurezza", "Avvisi di sicurezza Debian (DSA)", "Altri link su download e software", "La comunità Debian in immagini", "Foto precedenti", "Foto successive", "diapositiva", "{index} di {total}", "Mostra foto {index}: {title}"],
  ja: ["コミュニティ", "人々", "私たちについて、そして活動内容", "私たちの理念", "活動の理由と方法", "参加して貢献する", "参加方法", "もっと見る", "Debianコミュニティの詳細", "オペレーティングシステム", "Debianを選ぶ理由", "Debianの特長", "ユーザーサポート", "ヘルプとドキュメント", "セキュリティ更新", "Debianセキュリティ勧告（DSA）", "ダウンロードとソフトウェアに関するリンク", "写真で見るDebianコミュニティ", "前の写真", "次の写真", "スライド", "{total}枚中{index}枚目", "写真{index}を表示：{title}"],
  ko: ["커뮤니티", "사람들", "우리는 누구이며 무엇을 하는가", "우리의 철학", "우리가 하는 이유와 방법", "참여하고 기여하기", "참여하는 방법", "더 보기", "Debian 커뮤니티에 대한 자세한 정보", "운영 체제", "Debian을 선택하는 이유", "Debian을 특별하게 만드는 것", "사용자 지원", "도움말 및 문서", "보안 업데이트", "Debian 보안 권고(DSA)", "다운로드 및 소프트웨어 관련 추가 링크", "사진으로 보는 Debian 커뮤니티", "이전 사진", "다음 사진", "슬라이드", "{total}개 중 {index}", "사진 {index} 표시: {title}"],
  nb: ["Fellesskapet", "Mennesker", "Hvem vi er og hva vi gjør", "Vår filosofi", "Hvorfor og hvordan vi gjør det", "Bli med og bidra", "Slik kan du bli med", "Mer", "Mer informasjon om Debian-fellesskapet", "Operativsystemet", "Hvorfor Debian", "Hva som gjør Debian spesielt", "Brukerstøtte", "Hjelp og dokumentasjon", "Sikkerhetsoppdateringer", "Debians sikkerhetsmeldinger (DSA)", "Flere lenker om nedlastinger og programvare", "Debian-fellesskapet i bilder", "Forrige bilder", "Neste bilder", "lysbilde", "{index} av {total}", "Vis bilde {index}: {title}"],
  fa: ["جامعه", "افراد", "ما که هستیم و چه می‌کنیم", "فلسفه ما", "چرا و چگونه این کار را انجام می‌دهیم", "مشارکت و همکاری", "چگونه می‌توانید همراه شوید", "بیشتر", "اطلاعات بیشتر درباره جامعه دبیان", "سیستم‌عامل", "چرا دبیان", "چه چیزی دبیان را ویژه می‌کند", "پشتیبانی کاربران", "دریافت راهنما و مستندات", "به‌روزرسانی‌های امنیتی", "اطلاعیه‌های امنیتی دبیان (DSA)", "پیوندهای بیشتر درباره دریافت و نرم‌افزار", "جامعه دبیان در تصاویر", "تصاویر قبلی", "تصاویر بعدی", "اسلاید", "{index} از {total}", "نمایش تصویر {index}: {title}"],
  pl: ["Społeczność", "Ludzie", "Kim jesteśmy i czym się zajmujemy", "Nasza filozofia", "Dlaczego i jak to robimy", "Dołącz i wnieś swój wkład", "Jak możesz do nas dołączyć", "Więcej", "Więcej informacji o społeczności Debiana", "System operacyjny", "Dlaczego Debian", "Co wyróżnia Debiana", "Pomoc dla użytkowników", "Pomoc i dokumentacja", "Aktualizacje bezpieczeństwa", "Komunikaty bezpieczeństwa Debiana (DSA)", "Więcej odnośników do pobierania i oprogramowania", "Społeczność Debiana na zdjęciach", "Poprzednie zdjęcia", "Następne zdjęcia", "slajd", "{index} z {total}", "Pokaż zdjęcie {index}: {title}"],
  pt: ["A comunidade", "As pessoas", "Quem somos e o que fazemos", "A nossa filosofia", "Por que e como o fazemos", "Participe e contribua", "Como pode juntar-se", "Mais", "Mais informações sobre a comunidade Debian", "O sistema operativo", "Porquê Debian", "O que torna Debian especial", "Apoio ao utilizador", "Ajuda e documentação", "Atualizações de segurança", "Avisos de segurança Debian (DSA)", "Mais ligações sobre transferências e software", "A comunidade Debian em imagens", "Imagens anteriores", "Imagens seguintes", "diapositivo", "{index} de {total}", "Mostrar imagem {index}: {title}"],
  ro: ["Comunitatea", "Oamenii", "Cine suntem și ce facem", "Filosofia noastră", "De ce și cum facem acest lucru", "Implică-te și contribuie", "Cum te poți alătura", "Mai multe", "Mai multe despre comunitatea Debian", "Sistemul de operare", "De ce Debian", "Ce face Debian special", "Asistență pentru utilizatori", "Ajutor și documentație", "Actualizări de securitate", "Alerte de securitate Debian (DSA)", "Mai multe linkuri despre descărcări și software", "Comunitatea Debian în imagini", "Fotografiile anterioare", "Fotografiile următoare", "diapozitiv", "{index} din {total}", "Afișează fotografia {index}: {title}"],
  ru: ["Сообщество", "Люди", "Кто мы и чем занимаемся", "Наша философия", "Почему и как мы это делаем", "Присоединяйтесь и участвуйте", "Как к нам присоединиться", "Ещё", "Подробнее о сообществе Debian", "Операционная система", "Почему Debian", "Чем Debian отличается", "Поддержка пользователей", "Помощь и документация", "Обновления безопасности", "Оповещения о безопасности Debian (DSA)", "Другие ссылки о загрузках и программном обеспечении", "Сообщество Debian в фотографиях", "Предыдущие фотографии", "Следующие фотографии", "слайд", "{index} из {total}", "Показать фото {index}: {title}"],
  sk: ["Komunita", "Ľudia", "Kto sme a čo robíme", "Naša filozofia", "Prečo a ako to robíme", "Zapojte sa a prispejte", "Ako sa môžete zapojiť", "Viac", "Viac informácií o komunite Debianu", "Operačný systém", "Prečo Debian", "Čím je Debian výnimočný", "Podpora používateľov", "Pomoc a dokumentácia", "Bezpečnostné aktualizácie", "Bezpečnostné upozornenia Debianu (DSA)", "Ďalšie odkazy na stiahnutie a softvér", "Komunita Debianu na fotografiách", "Predchádzajúce fotografie", "Nasledujúce fotografie", "snímka", "{index} z {total}", "Zobraziť fotografiu {index}: {title}"],
  es: ["La comunidad", "Las personas", "Quiénes somos y qué hacemos", "Nuestra filosofía", "Por qué y cómo lo hacemos", "Implícate y contribuye", "Cómo puedes unirte", "Más", "Más información sobre la comunidad Debian", "El sistema operativo", "Por qué Debian", "Qué hace especial a Debian", "Soporte a usuarios", "Obtener ayuda y documentación", "Actualizaciones de seguridad", "Avisos de seguridad de Debian (DSA)", "Más enlaces sobre descargas y software", "La comunidad Debian en imágenes", "Imágenes anteriores", "Imágenes siguientes", "diapositiva", "{index} de {total}", "Mostrar imagen {index}: {title}"],
  sv: ["Gemenskapen", "Människorna", "Vilka vi är och vad vi gör", "Vår filosofi", "Varför och hur vi gör det", "Engagera dig och bidra", "Så här kan du delta", "Mer", "Mer information om Debian-gemenskapen", "Operativsystemet", "Varför Debian", "Vad som gör Debian speciellt", "Användarsupport", "Hjälp och dokumentation", "Säkerhetsuppdateringar", "Debians säkerhetsbulletiner (DSA)", "Fler länkar om hämtning och programvara", "Debian-gemenskapen i bilder", "Föregående bilder", "Nästa bilder", "bild", "{index} av {total}", "Visa bild {index}: {title}"],
  tr: ["Topluluk", "İnsanlar", "Biz kimiz ve ne yapıyoruz", "Felsefemiz", "Bunu neden ve nasıl yapıyoruz", "Katılın ve katkıda bulunun", "Bize nasıl katılabilirsiniz", "Daha fazla", "Debian topluluğu hakkında daha fazla bilgi", "İşletim Sistemi", "Neden Debian", "Debian'ı özel kılan nedir", "Kullanıcı desteği", "Yardım ve belgeler", "Güvenlik güncellemeleri", "Debian Güvenlik Duyuruları (DSA)", "İndirmeler ve yazılım hakkında daha fazla bağlantı", "Fotoğraflarla Debian topluluğu", "Önceki fotoğraflar", "Sonraki fotoğraflar", "slayt", "{total} içinde {index}", "{index}. fotoğrafı göster: {title}"],
  uk: ["Спільнота", "Люди", "Хто ми і чим займаємося", "Наша філософія", "Чому і як ми це робимо", "Долучайтеся та допомагайте", "Як ви можете долучитися", "Більше", "Докладніше про спільноту Debian", "Операційна система", "Чому Debian", "Що вирізняє Debian", "Підтримка користувачів", "Допомога й документація", "Оновлення безпеки", "Повідомлення безпеки Debian (DSA)", "Більше посилань про завантаження та програмне забезпечення", "Спільнота Debian у світлинах", "Попередні світлини", "Наступні світлини", "слайд", "{index} з {total}", "Показати світлину {index}: {title}"],
  vi: ["Cộng đồng", "Mọi người", "Chúng tôi là ai và làm gì", "Triết lý của chúng tôi", "Vì sao và cách chúng tôi thực hiện", "Tham gia và đóng góp", "Cách bạn có thể tham gia", "Thêm", "Tìm hiểu thêm về cộng đồng Debian", "Hệ điều hành", "Vì sao chọn Debian", "Điều làm Debian đặc biệt", "Hỗ trợ người dùng", "Trợ giúp và tài liệu", "Cập nhật bảo mật", "Thông báo bảo mật Debian (DSA)", "Thêm liên kết về tải xuống và phần mềm", "Cộng đồng Debian qua ảnh", "Ảnh trước", "Ảnh tiếp theo", "trang chiếu", "{index}/{total}", "Hiển thị ảnh {index}: {title}"],
};

function validateCatalogs(
  keys: readonly MessageKey[],
  translations: Partial<Record<Locale, readonly string[]>>,
) {
  for (const [locale, values] of Object.entries(translations)) {
    if (values?.length !== keys.length) {
      throw new Error(`Invalid ${locale} translation catalog: expected ${keys.length} entries.`);
    }
  }
}

validateCatalogs(coreKeys, coreTranslations);
validateCatalogs(secondaryKeys, secondaryTranslations);
validateCatalogs(selectorKeys, selectorTranslations);
validateCatalogs(detailKeys, detailTranslations);
validateCatalogs(releaseNewsKeys, releaseNewsTranslations);
validateCatalogs(descriptionKeys, descriptionTranslations);
validateCatalogs(communityKeys, communityTranslations);
const localeCatalogs: Array<Partial<Record<Locale, readonly string[]>>> = [
  coreTranslations,
  secondaryTranslations,
  selectorTranslations,
  detailTranslations,
  releaseNewsTranslations,
  descriptionTranslations,
  communityTranslations,
];
for (const locale of locales) {
  if (locale !== "en" && localeCatalogs.some((catalog) => !catalog[locale])) {
    throw new Error(`Missing local translation catalog for ${locale}.`);
  }
}

const directionLocales = new Set<Locale>(["ar", "fa"]);

function detectLocale(): Locale {
  const candidates = [...(navigator.languages ?? []), navigator.language];
  for (const candidate of candidates) {
    const normalized = candidate.toLowerCase();
    if (normalized.startsWith("zh-hant") || normalized.startsWith("zh-tw")) {
      return "zh-TW";
    }
    if (normalized.startsWith("zh")) return "zh-CN";
    const match = locales.find(
      (locale) => locale !== "zh-CN" && locale !== "zh-TW" &&
        normalized.split("-")[0] === locale.toLowerCase(),
    );
    if (match) return match;
  }
  return "en";
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  preference: "system",
  setPreference: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [preference, setPreferenceState] =
    useState<LanguagePreference>("system");

  useEffect(() => {
    const savedPreference = window.localStorage.getItem("locale");
    const savedLocale = locales.find((supported) => supported === savedPreference);

    if (savedPreference === "system") {
      setPreferenceState("system");
    } else if (savedLocale) {
      setPreferenceState(savedLocale);
      setLocale(savedLocale);
      return;
    }

    setLocale(detectLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = directionLocales.has(locale) ? "rtl" : "ltr";
    document.title = `Debian — ${localeHeroAndHistory[locale].heroUniversal}`;
  }, [locale]);

  function setPreference(nextPreference: LanguagePreference) {
    setPreferenceState(nextPreference);
    window.localStorage.setItem("locale", nextPreference);
    setLocale(nextPreference === "system" ? detectLocale() : nextPreference);
  }

  return (
    <LocaleContext.Provider
      value={{ locale, preference, setPreference }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const { locale, preference, setPreference } = useContext(LocaleContext);
  const messages = useMemo(() => {
    const catalogLocale = locale === "en" ? null : locale;
    const localized = catalogLocale ? coreTranslations[catalogLocale] : undefined;
    const result = { ...english } as Record<MessageKey, string>;
    if (localized) {
      coreKeys.forEach((key, index) => {
        if (localized[index]) result[key] = localized[index];
      });
    }
    const secondary = catalogLocale
      ? secondaryTranslations[catalogLocale]
      : undefined;
    if (secondary) {
      secondaryKeys.forEach((key, index) => {
        if (secondary[index]) result[key] = secondary[index];
      });
    }
    const selector = catalogLocale
      ? selectorTranslations[catalogLocale]
      : undefined;
    if (selector) {
      selectorKeys.forEach((key, index) => {
        if (selector[index]) result[key] = selector[index];
      });
    }
    const details = catalogLocale ? detailTranslations[catalogLocale] : undefined;
    if (details) {
      detailKeys.forEach((key, index) => {
        if (details[index]) result[key] = details[index];
      });
    }
    const releaseNews = catalogLocale
      ? releaseNewsTranslations[catalogLocale]
      : undefined;
    if (releaseNews) {
      releaseNewsKeys.forEach((key, index) => {
        if (releaseNews[index]) result[key] = releaseNews[index];
      });
    }
    const descriptions = catalogLocale
      ? descriptionTranslations[catalogLocale]
      : undefined;
    if (descriptions) {
      descriptionKeys.forEach((key, index) => {
        if (descriptions[index]) result[key] = descriptions[index];
      });
    }
    const community = catalogLocale
      ? communityTranslations[catalogLocale]
      : undefined;
    if (community) {
      communityKeys.forEach((key, index) => {
        if (community[index]) result[key] = community[index];
      });
    }
    return {
      locale,
      t: (key: MessageKey, values?: Record<string, string>) => {
        let value =
          key === "heroUniversal" || key === "statYears"
            ? localeHeroAndHistory[locale][key]
            : result[key];
        if (key === "heroDownload") {
          value = value.replace(/\s*13(?:\.7)?/g, "");
        }
        if (
          locale !== "en" &&
          [
            "getDebian",
            "heroBadge",
            "stableOption",
            "stableVersion",
            "stableAction",
          ].includes(key)
        ) {
          value = value.replaceAll("13", "13.7");
        }
        Object.entries(values ?? {}).forEach(([name, replacement]) => {
          value = value.replaceAll(`{${name}}`, replacement);
        });
        return value;
      },
    };
  }, [locale]);
  return { ...messages, preference, setPreference };
}

export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  bg: "Български",
  ca: "Català",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  hr: "Hrvatski",
  cs: "Čeština",
  da: "Dansk",
  nl: "Nederlands",
  en: "English",
  fi: "Suomi",
  fr: "Français",
  gl: "Galego",
  de: "Deutsch",
  el: "Ελληνικά",
  hu: "Magyar",
  id: "Bahasa Indonesia",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  nb: "Norsk bokmål",
  fa: "فارسی",
  pl: "Polski",
  pt: "Português",
  ro: "Română",
  ru: "Русский",
  sk: "Slovenčina",
  es: "Español",
  sv: "Svenska",
  tr: "Türkçe",
  uk: "Українська",
  vi: "Tiếng Việt",
};

export const systemLanguageLabels: Record<Locale, string> = {
  ar: "لغة النظام",
  bg: "Системен език",
  ca: "Idioma del sistema",
  "zh-CN": "系统语言",
  "zh-TW": "系統語言",
  hr: "Jezik sustava",
  cs: "Jazyk systému",
  da: "Systemsprog",
  nl: "Systeemtaal",
  en: "System language",
  fi: "Järjestelmän kieli",
  fr: "Langue du système",
  gl: "Idioma do sistema",
  de: "Systemsprache",
  el: "Γλώσσα συστήματος",
  hu: "Rendszernyelv",
  id: "Bahasa sistem",
  it: "Lingua di sistema",
  ja: "システムの言語",
  ko: "시스템 언어",
  nb: "Systemspråk",
  fa: "زبان سیستم",
  pl: "Język systemu",
  pt: "Idioma do sistema",
  ro: "Limba sistemului",
  ru: "Язык системы",
  sk: "Jazyk systému",
  es: "Idioma del sistema",
  sv: "Systemspråk",
  tr: "Sistem dili",
  uk: "Мова системи",
  vi: "Ngôn ngữ hệ thống",
};

export const languageControlLabels: Record<Locale, string> = {
  ar: "تغيير اللغة",
  bg: "Промяна на езика",
  ca: "Canvia l’idioma",
  "zh-CN": "更改语言",
  "zh-TW": "變更語言",
  hr: "Promijeni jezik",
  cs: "Změnit jazyk",
  da: "Skift sprog",
  nl: "Taal wijzigen",
  en: "Change language",
  fi: "Vaihda kieltä",
  fr: "Changer de langue",
  gl: "Cambiar o idioma",
  de: "Sprache ändern",
  el: "Αλλαγή γλώσσας",
  hu: "Nyelv módosítása",
  id: "Ubah bahasa",
  it: "Cambia lingua",
  ja: "言語を変更",
  ko: "언어 변경",
  nb: "Bytt språk",
  fa: "تغییر زبان",
  pl: "Zmień język",
  pt: "Alterar idioma",
  ro: "Schimbă limba",
  ru: "Изменить язык",
  sk: "Zmeniť jazyk",
  es: "Cambiar idioma",
  sv: "Byt språk",
  tr: "Dili değiştir",
  uk: "Змінити мову",
  vi: "Đổi ngôn ngữ",
};

export const localizedNewsDates: Record<Locale, readonly string[]> = Object.fromEntries(
  locales.map((locale) => [
    locale,
    ["2026-09-12", "2026-08-31", "2026-08-07"].map((date) =>
      new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
        .format(new Date(`${date}T12:00:00Z`)),
    ),
  ]),
) as unknown as Record<Locale, readonly string[]>;
