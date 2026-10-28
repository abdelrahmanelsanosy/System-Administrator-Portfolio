// Project data with full bilingual case studies
// EN + AR translations baked in

// Shared formatting helpers (used by components and resume.js)
(function () {
  const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const toLang = (str, lang) => lang === 'ar' ? String(str).replace(/\d/g, d => AR_DIGITS[d]) : String(str);

  // Zero-padded two-digit number, Arabic-Indic digits for 'ar'
  window.fmtNum = (n, lang) => toLang(String(n).padStart(2, '0'), lang);

  // "2026-07" -> "Jul 2026" / "يوليو ٢٠٢٦"; "present" is left for the caller to label
  const MONTHS = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
  };
  window.fmtDate = (ym, lang) => {
    const [y, m] = ym.split('-');
    return `${MONTHS[lang][Number(m) - 1]} ${toLang(y, lang)}`;
  };
})();

window.PROJECTS = [
  {
    id: "octoberrent",
    num: "01",
    year: "2022",
    type: { en: "Graduation Project · Mobile App", ar: "مشروع تخرج · تطبيق جوال" },
    name: { en: ["October", "Rent"], ar: ["إيجار", "أكتوبر"] },
    nameItalic: 1,
    tagline: {
      en: "A cross-platform apartment rental platform: Android and iOS apps plus an admin dashboard, with separate flows for renters and property owners.",
      ar: "منصة لتأجير الشقق متعددة المنصات: تطبيقا أندرويد وiOS مع لوحة تحكم إدارية، ومسارات منفصلة للمستأجرين وملّاك العقارات."
    },
    tags: ["Flutter", "Dart", "Firebase", "FCM"],
    role: { en: "Developer", ar: "مطور" },
    duration: { en: "Oct 2021 – Jun 2022 · Grade A+", ar: "أكتوبر ٢٠٢١ – يونيو ٢٠٢٢ · التقدير A+" },
    stack: "Flutter · Dart · Firebase",
    repo: null, // TODO: add repo URL
    chapters: [
      {
        label: { en: "The Brief", ar: "المهمة" },
        body: {
          en: "<p>My graduation project: an <strong>apartment rental platform</strong> that works for both sides of the market — people looking for a place to rent, and the property owners who list it.</p><p>It had to run on <strong>Android and iOS</strong>, with a separate admin dashboard on the web.</p>",
          ar: "<p>مشروع تخرجي: <strong>منصة لتأجير الشقق</strong> تخدم طرفي السوق — من يبحث عن مكان للإيجار، ومالك العقار الذي يعرضه.</p><p>كان لا بد أن تعمل على <strong>أندرويد وiOS</strong>، مع لوحة تحكم إدارية على الويب.</p>"
        }
      },
      {
        label: { en: "Approach", ar: "النهج" },
        body: {
          en: "<p>I built the cross-platform apps with <strong>Flutter and Dart</strong> and backed them with Firebase:</p><ul><li><strong>Firebase Authentication</strong> for sign-in and <strong>Firestore</strong> as the real-time database</li><li><strong>Firebase Storage</strong> for property images and <strong>FCM</strong> for push notifications</li><li>A dual-role system for <strong>renters and property owners</strong></li><li>Property listing, image management, advanced search filters, and offer management</li></ul>",
          ar: "<p>بنيت التطبيقات متعددة المنصات بـ <strong>Flutter وDart</strong> وربطتها بخدمات Firebase:</p><ul><li><strong>Firebase Authentication</strong> لتسجيل الدخول و<strong>Firestore</strong> كقاعدة بيانات لحظية</li><li><strong>Firebase Storage</strong> لصور العقارات و<strong>FCM</strong> للإشعارات الفورية</li><li>نظام بدورين: <strong>المستأجر ومالك العقار</strong></li><li>عرض العقارات وإدارة الصور وفلاتر بحث متقدمة وإدارة العروض</li></ul>"
        }
      },
      {
        label: { en: "Outcome", ar: "النتيجة" },
        body: {
          en: "<p>Delivered <strong>Android and iOS applications</strong> alongside an <strong>admin dashboard web application</strong>, and received a grade of <strong>A+</strong>.</p>",
          ar: "<p>سلّمت <strong>تطبيقي أندرويد وiOS</strong> مع <strong>تطبيق ويب للوحة التحكم الإدارية</strong>، وحصلت على تقدير <strong>A+</strong> في المشروع.</p>"
        }
      }
    ]
  },

  {
    id: "advancedreact",
    num: "02",
    year: "2024",
    type: { en: "React Application", ar: "تطبيق رياكت" },
    name: { en: ["Advanced", "React"], ar: ["رياكت", "المتقدم"] },
    nameItalic: 1,
    tagline: {
      en: "A production-grade personal portfolio with form validation, scroll-aware navigation, and a polished component system.",
      ar: "بورتفوليو شخصي بمستوى إنتاجي مع تحقق من النماذج، تنقل متفاعل مع التمرير، ونظام مكونات مصقول."
    },
    tags: ["React", "Chakra UI", "Formik", "Yup"],
    role: { en: "Frontend Developer", ar: "مطور واجهات" },
    duration: { en: "Meta Capstone", ar: "مشروع تخرج Meta" },
    stack: "React 18 · Chakra · Formik",
    repo: "github.com/abdelrahmanelsanosy/advancedreact",
    chapters: [
      {
        label: { en: "The Brief", ar: "المهمة" },
        body: {
          en: "<p>The capstone for Meta's <strong>Advanced React</strong> course — build a complete portfolio site that demonstrates mastery of hooks, context, form state, and accessibility. Not a static page. An interactive, validated, responsive product.</p><p>The shape was given. The execution had to prove I could ship.</p>",
          ar: "<p>مشروع التخرج لمساق <strong>Advanced React</strong> من Meta — بناء موقع بورتفوليو كامل يثبت إتقان الـ hooks والـ context وحالة النماذج وإمكانية الوصول. ليس صفحة ثابتة، بل منتجاً تفاعلياً متجاوباً.</p><p>الشكل كان محدداً. التنفيذ كان عليه أن يثبت أنني أستطيع التسليم.</p>"
        }
      },
      {
        label: { en: "Approach", ar: "النهج" },
        body: {
          en: "<p>I built around <strong>Chakra UI</strong> for the component primitives, layering custom logic on top:</p><ul><li>A scroll-aware header that hides on scroll-down and reveals on scroll-up, driven by a <strong>useRef</strong> + scroll listener</li><li><strong>Formik + Yup</strong> for the contact form — typed validation, error states, async submit simulation</li><li>A global <strong>alertContext</strong> for toast-style feedback after form submission</li><li>FontAwesome icons composed with Chakra's HStack for the social bar</li></ul>",
          ar: "<p>بنيت كل شيء حول <strong>Chakra UI</strong> للمكونات الأساسية، مع طبقة منطق مخصص فوقها:</p><ul><li>هيدر متفاعل مع التمرير يختفي عند النزول ويظهر عند الصعود</li><li><strong>Formik و Yup</strong> لنموذج التواصل — تحقق مكتوب وحالات أخطاء</li><li>سياق <strong>alertContext</strong> عام لتغذية راجعة على شكل توست</li><li>أيقونات FontAwesome مع HStack من Chakra لشريط التواصل</li></ul>"
        }
      },
      {
        label: { en: "Code", ar: "الكود" },
        code: {
          file: "ContactMeSection.js",
          lines: [
            { html: '<span class="kw">const</span> <span class="fn">formik</span> = <span class="fn">useFormik</span>({' },
            { html: '  <span class="pn">initialValues</span>: { <span class="pn">firstName</span>: <span class="str">""</span>, <span class="pn">email</span>: <span class="str">""</span>, <span class="pn">type</span>: <span class="str">"hireMe"</span>, <span class="pn">comment</span>: <span class="str">""</span> },' },
            { html: '  <span class="pn">onSubmit</span>: (<span class="pn">values</span>) => <span class="fn">submit</span>(<span class="str">"/api"</span>, <span class="pn">values</span>),' },
            { html: '  <span class="pn">validationSchema</span>: <span class="fn">Yup</span>.<span class="fn">object</span>({' },
            { html: '    <span class="pn">firstName</span>: <span class="fn">Yup</span>.<span class="fn">string</span>().<span class="fn">required</span>(<span class="str">"Required"</span>),' },
            { html: '    <span class="pn">email</span>: <span class="fn">Yup</span>.<span class="fn">string</span>().<span class="fn">email</span>().<span class="fn">required</span>(),' },
            { html: '    <span class="pn">comment</span>: <span class="fn">Yup</span>.<span class="fn">string</span>().<span class="fn">min</span>(<span class="str">25</span>).<span class="fn">required</span>(),' },
            { html: '  }),' },
            { html: '});' }
          ]
        }
      },
      {
        label: { en: "Outcome", ar: "النتيجة" },
        body: {
          en: "<p>Passed peer review on the first submission. The patterns from this project — <strong>context for global UI state</strong>, <strong>custom hooks for async</strong>, and <strong>scroll-driven animations without libraries</strong> — became the foundation for every React project that followed.</p>",
          ar: "<p>اجتاز المراجعة من النظراء في التسليم الأول. الأنماط من هذا المشروع أصبحت الأساس لكل مشروع رياكت تلاه.</p>"
        }
      }
    ]
  },

  {
    id: "tour",
    num: "03",
    year: "2024",
    type: { en: "Travel Booking Site", ar: "موقع حجز سياحي" },
    name: { en: ["Wander", "Atlas"], ar: ["أطلس", "الرحلات"] },
    nameItalic: 0,
    tagline: {
      en: "A cinematic travel-discovery experience with video-backed search, animated destination grid, and immersive scroll choreography.",
      ar: "تجربة اكتشاف سفر سينمائية مع بحث مدعوم بالفيديو وشبكة وجهات متحركة."
    },
    tags: ["React", "SCSS", "AOS", "react-icons"],
    role: { en: "Frontend Developer", ar: "مطور واجهات" },
    duration: { en: "Self-initiated", ar: "مشروع شخصي" },
    stack: "React · SCSS · AOS",
    repo: "github.com/abdelrahmanelsanosy/tour",
    chapters: [
      {
        label: { en: "The Brief", ar: "المهمة" },
        body: {
          en: "<p>Take the conventions of a travel-booking landing page — video hero, search filters, destination grid — and make them feel like a luxury brochure rather than a Skyscanner clone.</p><p>The win condition: a first-frame that makes the user want to stay and a grid that animates with intent, not noise.</p>",
          ar: "<p>أخذ تقاليد صفحة هبوط حجز السفر وجعلها تشبه كتيب فاخر لا نسخة عادية.</p><p>شرط النجاح: لقطة أولى تجعل المستخدم يريد البقاء، وشبكة تتحرك بقصد لا بضوضاء.</p>"
        }
      },
      {
        label: { en: "Approach", ar: "النهج" },
        body: {
          en: "<p>I composed the experience in four parts: a <strong>Navbar</strong>, a <strong>Home</strong> hero with autoplaying muted video plus a glass-card search panel, a <strong>Main</strong> destination grid with nine hand-picked locations (Bora Bora, Machu Picchu, Pyramids of Giza, and more), and a <strong>Footer</strong> with newsletter capture.</p><ul><li>Styled with <strong>SCSS</strong> using nested selectors and variables for the warm earthy palette</li><li>Motion via <strong>AOS</strong> — fade-up triggers tuned per-section for staggered reveals</li><li>Iconography from <strong>react-icons</strong> with consistent stroke weight across families</li><li>Responsive grid that collapses gracefully from 3-up to single column</li></ul>",
          ar: "<p>كوّنت التجربة من أربعة أجزاء: شريط التنقل، هيرو بفيديو مع بطاقة بحث، شبكة وجهات بتسع مواقع مختارة، وفوتر. التنسيق بـ SCSS والحركة عبر AOS.</p>"
        }
      },
      {
        label: { en: "Detail", ar: "تفصيل" },
        body: {
          en: "<p>The hero is the whole pitch. A muted full-bleed video loops behind a centered <em>Search Your Holiday</em> headline. Below it sits a four-cell control: <strong>destination</strong>, <strong>date</strong>, <strong>max price</strong> (range slider, $1k–$5k), and <strong>filters</strong>. Each cell animates in with a staggered <code>fade-up</code>.</p><p>The destination grid uses a data-driven map over a <code>Data</code> array, rendering each card with image, title, location pin, grade chip, fee, description, and a <em>Details</em> CTA.</p>",
          ar: "<p>الهيرو هو العرض كله. فيديو صامت يملأ الشاشة خلف عنوان مركزي، وتحكم رباعي للوجهة والتاريخ والسعر والفلاتر.</p>"
        }
      },
      {
        label: { en: "Outcome", ar: "النتيجة" },
        body: {
          en: "<p>Shipped as a portfolio piece. The component decomposition became my <strong>standard React architecture</strong> for any single-page marketing site since.</p>",
          ar: "<p>تم تسليمه كقطعة بورتفوليو. تقسيم المكونات أصبح معماري الافتراضي.</p>"
        }
      }
    ]
  },

  {
    id: "amazon",
    num: "04",
    year: "2024",
    type: { en: "E-commerce Recreation", ar: "إعادة بناء متجر" },
    name: { en: ["Amazon", "Egypt"], ar: ["أمازون", "مصر"] },
    nameItalic: 1,
    tagline: {
      en: "Pixel-faithful recreation of Amazon.eg — header navigation, category nav, hero slider, and four banner sections — built with vanilla HTML and CSS.",
      ar: "إعادة بناء دقيقة لصفحة أمازون مصر بـ HTML و CSS فقط."
    },
    tags: ["HTML", "CSS", "Responsive", "Vanilla"],
    role: { en: "Frontend Developer", ar: "مطور واجهات" },
    duration: { en: "Practice", ar: "تدريب" },
    stack: "HTML5 · CSS3",
    repo: "github.com/abdelrahmanelsanosy/e-commerce-website",
    chapters: [
      {
        label: { en: "The Brief", ar: "المهمة" },
        body: {
          en: "<p>Recreate Amazon Egypt's home page from memory and reference — no frameworks, no libraries, just <strong>HTML and CSS</strong>. The exercise wasn't about novelty. It was about <em>fidelity discipline</em>: matching spacing, type hierarchy, color, dropdown behavior, grid alignment of an interface most users see daily.</p>",
          ar: "<p>إعادة بناء صفحة أمازون مصر الرئيسية بـ <strong>HTML و CSS</strong> فقط. التمرين كان عن <em>انضباط الدقة</em>: مطابقة المسافات والألوان والسلوك.</p>"
        }
      },
      {
        label: { en: "Approach", ar: "النهج" },
        body: {
          en: "<p>I structured the page into six layout regions, each with its own CSS scope:</p><ul><li><strong>Header</strong> — logo, location, search bar with category select, language dropdown, account dropdown, cart with badge</li><li><strong>Categories nav</strong> — horizontal scroll list</li><li><strong>Hero banner</strong> — slider with prev/next chevrons</li><li><strong>Banner section</strong> — four cards in a responsive grid</li><li><strong>Footer</strong></li></ul><p>Every dropdown is a pure-CSS <code>:hover</code> reveal — no JS. The hardest part was the <strong>category card grid</strong>: a 2-up of 2×2 image grids, each with a label below the image, all aligned to a baseline.</p>",
          ar: "<p>قسّمت الصفحة لست مناطق تخطيط: الهيدر، تنقل الفئات، بانر الهيرو، قسم البانر بأربع بطاقات، والفوتر. كل قائمة منسدلة هي :hover من CSS بحت — بلا JS.</p>"
        }
      },
      {
        label: { en: "Outcome", ar: "النتيجة" },
        body: {
          en: "<p>Forty-plus hours, twenty-two images, one stylesheet at ~9.5KB. What I took from it: <strong>CSS Grid for the macro layout, Flexbox for the row alignment, no shortcuts on responsiveness</strong>.</p>",
          ar: "<p>أكثر من أربعين ساعة وورقة تنسيق بحجم ~9.5KB. ما خرجت به: <strong>CSS Grid للتخطيط الكلي، Flexbox لمحاذاة الصفوف</strong>.</p>"
        }
      }
    ]
  },

  {
    id: "gharbia",
    num: "05",
    year: "2024",
    type: { en: "Client Work · Live Site", ar: "عمل عميل · موقع منشور" },
    name: { en: ["Gharbia", "Company"], ar: ["شركة", "غربية"] },
    nameItalic: 0,
    tagline: {
      en: "A delivered freelance portfolio for Attia Mohamed at Gharbia Company — single-page, served as gharbia.net with a companion Play Store app linked from the same surface.",
      ar: "بورتفوليو حر مُسلَّم لعطية محمد في شركة غربية — صفحة واحدة منشورة على gharbia.net."
    },
    tags: ["HTML", "CSS", "Client", "Shipped"],
    role: { en: "Designer + Developer", ar: "مصمم + مطور" },
    duration: { en: "Delivered 2024", ar: "سُلِّم 2024" },
    stack: "HTML5 · CSS3 · FontAwesome",
    repo: "github.com/abdelrahmanelsanosy/Portfolio",
    chapters: [
      {
        label: { en: "The Brief", ar: "المهمة" },
        body: {
          en: "<p>The client is an admin secretary at Gharbia Company, in Beheira. He needed a clean, mobile-first single-pager that introduced him, displayed contact channels prominently (WhatsApp, Facebook, phone, email, location pin), and linked to the company's existing site and Play Store app.</p><p>Constraint: it had to load instantly on Egyptian mobile networks and look <em>trustworthy</em>, not flashy.</p>",
          ar: "<p>العميل سكرتير إداري في شركة غربية، في البحيرة. احتاج موقعاً مرتباً بصفحة واحدة يعرض قنوات التواصل بوضوح ويربط بموقع الشركة وتطبيقها.</p>"
        }
      },
      {
        label: { en: "Approach", ar: "النهج" },
        body: {
          en: "<p>One HTML file, one CSS file, one hero image. Three sections: a fixed header with logo + nav anchors, a full-bleed hero with the company building behind <em>Hello, I'm ATTIA MOHAMED — Admin Secretary, Gharbia Company</em>, a contact card row (location / phone / mail), and a services row with two clickable tiles — website + mobile app.</p><ul><li>Blue accent <code>#3a6cf4</code> picked to match the company's existing brand</li><li>Poppins for everything — single typeface keeps the file light</li><li>Three media queries: 1023px, 641px, 300px</li><li>FontAwesome 6 via CDN for the icon set</li></ul>",
          ar: "<p>ملف HTML واحد، ملف CSS واحد، صورة هيرو واحدة. ثلاثة أقسام: هيدر ثابت، هيرو يملأ الشاشة، صف بطاقات تواصل، وصف خدمات بمربعين قابلين للنقر.</p>"
        }
      },
      {
        label: { en: "Outcome", ar: "النتيجة" },
        body: {
          en: "<p>Shipped to <strong>gharbia.net</strong>. The client could send one link and prospects could call, message, navigate, or download the app from a single screen.</p><p>This was the project that taught me <strong>boring requirements don't need boring code</strong>.</p>",
          ar: "<p>سُلِّم على <strong>gharbia.net</strong>. هذا المشروع علّمني أن <strong>المتطلبات المملة لا تحتاج كوداً مملاً</strong>.</p>"
        }
      }
    ]
  }
];

// Skills mirror the CV categories exactly. The CV gives no proficiency levels.
window.SKILLS = [
  {
    cat: { en: "Systems & Infrastructure", ar: "الأنظمة والبنية التحتية" },
    items: [
      { name: "Windows Server" },
      { name: "Active Directory" },
      { name: "Domain Controller" },
      { name: "Group Policy" },
      { name: "DNS" },
      { name: "DHCP" },
      { name: "VMware ESXi" },
      { name: "SCCM (Configuration Manager)" },
      { name: "Infrastructure Administration" }
    ]
  },
  {
    cat: { en: "Networking", ar: "الشبكات" },
    items: [
      { name: "Cisco Switches" },
      { name: "VLANs" },
      { name: "LAN/WAN" },
      { name: "Network Configuration" },
      { name: "MikroTik Routing" },
      { name: "Network Troubleshooting" },
      { name: "TCP/IP" }
    ]
  },
  {
    cat: { en: "Network Security", ar: "أمن الشبكات" },
    items: [
      { name: "Sophos Firewall" },
      { name: "pfSense Firewall" },
      { name: "Firewall Administration" },
      { name: "Access Control" },
      { name: "Network Security" },
      { name: "Remote Access" }
    ]
  },
  {
    cat: { en: "IT Operations & Leadership", ar: "العمليات وقيادة تقنية المعلومات" },
    items: [
      { name: "IT Support Team Leadership" },
      { name: "Task Distribution" },
      { name: "Incident Escalation" },
      { name: "IT Operations" },
      { name: "Technical Documentation" },
      { name: "IT Reporting" },
      { name: "Infrastructure Monitoring" }
    ]
  },
  {
    cat: { en: "Enterprise Applications", ar: "تطبيقات المؤسسات" },
    items: [
      { name: "ERP System Administration" },
      { name: "CRM Systems" },
      { name: "Data Exchange Platforms" },
      { name: "Enterprise Software Deployment" }
    ]
  },
  {
    cat: { en: "Storage & Hardware", ar: "التخزين والعتاد" },
    items: [
      { name: "QNAP" },
      { name: "NAS Storage" },
      { name: "Server Hardware Deployment" },
      { name: "Hardware Troubleshooting" },
      { name: "System Upgrades" }
    ]
  },
  {
    cat: { en: "Engineering Software", ar: "البرمجيات الهندسية" },
    items: [
      { name: "AutoCAD" },
      { name: "Revit" },
      { name: "Civil 3D" },
      { name: "InfraWorks" },
      { name: "Navisworks" }
    ]
  },
  {
    cat: { en: "Tools & Platforms", ar: "الأدوات والمنصات" },
    items: [
      { name: "Git" },
      { name: "RESTful APIs" },
      { name: "Firebase (Auth, Firestore, Storage, FCM)" }
    ]
  },
  {
    cat: { en: "Development (Supporting)", ar: "التطوير (داعم)" },
    items: [
      { name: "Dart/Flutter" },
      { name: "JavaScript" },
      { name: "Clean Architecture" },
      { name: "OOP" }
    ]
  }
];

// Work history. start/end are "YYYY-MM" or "present" (see window.fmtDate).
// Kemet and Alamir both read "present" exactly as on the CV.
window.EXPERIENCE = [
  {
    id: "alameer",
    title: { en: "IT Section Head / System Administrator", ar: "رئيس قسم تقنية المعلومات / مسؤول أنظمة" },
    company: "Alamir Group",
    location: { en: "Egypt", ar: "مصر" },
    mode: { en: "On-site", ar: "من الموقع" },
    start: "2026-07",
    end: "present",
    bullets: {
      en: [
        "Lead the IT Support team and coordinate daily operations: task distribution, prioritization, follow-up and escalation of incidents, acting as a senior escalation point for complex network, server, security, application and infrastructure issues.",
        "Administer and support the enterprise network, including Cisco switches, VLAN configuration, network segmentation, connectivity troubleshooting and access management.",
        "Configure, administer and troubleshoot Sophos and pfSense firewalls, including firewall policies, access control, network security and remote connectivity.",
        "Manage Windows Server and Domain Controller services: Active Directory administration, user accounts, security groups, Group Policy, DNS, DHCP and domain-related issues.",
        "Administer and support ERP systems (user access, configuration, troubleshooting, availability, coordination with business departments) and monitor core infrastructure, applying corrective actions to keep systems available.",
        "Prepare regular technical and operational reports for the IT Manager on incidents, infrastructure status, completed and pending tasks and required corrective actions, and maintain IT procedures, technical documentation and troubleshooting guidelines to improve support consistency and reduce resolution time."
      ],
      ar: [
        "قيادة فريق الدعم الفني وتنسيق العمليات اليومية: توزيع المهام وتحديد الأولويات والمتابعة وتصعيد الحوادث، مع العمل كنقطة تصعيد عليا للمشكلات المعقدة في الشبكات والخوادم والأمان والتطبيقات والبنية التحتية.",
        "إدارة ودعم شبكة المؤسسة، بما يشمل مبدّلات Cisco وإعداد VLAN وتقسيم الشبكة وحل مشكلات الاتصال وإدارة الصلاحيات.",
        "إعداد وإدارة واستكشاف أخطاء جدران الحماية Sophos وpfSense، بما يشمل سياسات الجدار الناري والتحكم في الوصول وأمن الشبكة والاتصال عن بُعد.",
        "إدارة خوادم Windows Server وخدمات Domain Controller: إدارة Active Directory وحسابات المستخدمين ومجموعات الأمان وGroup Policy وDNS وDHCP ومشكلات النطاق.",
        "إدارة ودعم أنظمة ERP (صلاحيات المستخدمين والإعدادات واستكشاف الأخطاء وتوافر النظام والتنسيق مع الإدارات)، ومراقبة البنية التحتية الأساسية وتنفيذ إجراءات تصحيحية للحفاظ على جاهزية الأنظمة.",
        "إعداد تقارير فنية وتشغيلية دورية لمدير تقنية المعلومات عن الحوادث وحالة البنية التحتية والمهام المنجزة والمعلّقة والإجراءات التصحيحية المطلوبة، مع إعداد وتحديث إجراءات العمل والتوثيق الفني وأدلة استكشاف الأخطاء لتوحيد الدعم وتقليل زمن الحل."
      ]
    }
  },
  {
    id: "kemet",
    title: { en: "System Administrator", ar: "مسؤول أنظمة" },
    company: "Kemet Corporation",
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    mode: { en: "On-site", ar: "من الموقع" },
    start: "2024-04",
    end: "present",
    bullets: {
      en: [
        "Administer IT infrastructure supporting 1,000+ users, serving as the primary escalation point for application, hardware, and access issues.",
        "Deploy and maintain the enterprise Autodesk suite (AutoCAD, Revit, Civil 3D, InfraWorks, Navisworks) across engineering departments, coordinating licensing, updates, and configuration.",
        "Manage and configure core server infrastructure including VMware ESXi hypervisor, Domain Controller, SCCM (Configuration Manager), CRM, and Data Exchange platforms.",
        "Resolve critical server access and application issues, maintaining service continuity across production environments.",
        "Author and maintain IT procedural documentation to standardize support workflows and reduce repeat incident response time."
      ],
      ar: [
        "إدارة البنية التحتية لتقنية المعلومات لأكثر من ١٬٠٠٠ مستخدم، والعمل كنقطة التصعيد الأولى لمشكلات التطبيقات والأجهزة والصلاحيات.",
        "نشر وصيانة حزمة Autodesk للمؤسسة (AutoCAD وRevit وCivil 3D وInfraWorks وNavisworks) في الإدارات الهندسية، مع تنسيق التراخيص والتحديثات والإعدادات.",
        "إدارة وإعداد البنية الأساسية للخوادم، بما يشمل VMware ESXi وDomain Controller وSCCM (Configuration Manager) وأنظمة CRM ومنصات تبادل البيانات.",
        "حل مشكلات الوصول إلى الخوادم والتطبيقات الحرجة مع الحفاظ على استمرارية الخدمة في بيئات الإنتاج.",
        "إعداد وتحديث وثائق إجراءات تقنية المعلومات لتوحيد سير عمل الدعم وتقليل زمن الاستجابة للحوادث المتكررة."
      ]
    }
  },
  {
    id: "gharbia-co",
    title: { en: "IT Specialist", ar: "أخصائي تقنية معلومات" },
    company: "Gharbia Company",
    location: { en: "Egypt", ar: "مصر" },
    mode: { en: "On-site", ar: "من الموقع" },
    start: "2023-08",
    end: "2024-03",
    bullets: {
      en: [
        "Reduced unplanned downtime by 80% by leading an infrastructure upgrade project covering cloud storage expansion and remote access provisioning.",
        "Administered Active Directory for 300+ users, managing GPOs, user accounts, OU structure, and security group policies.",
        "Configured and maintained MikroTik routers for inter-office network routing and access control.",
        "Delivered day-to-day technical support, resolving hardware, software, and connectivity issues across all departments."
      ],
      ar: [
        "خفض التوقف غير المخطط له بنسبة ٨٠٪ عبر قيادة مشروع ترقية للبنية التحتية شمل توسعة التخزين السحابي وتوفير الوصول عن بُعد.",
        "إدارة Active Directory لأكثر من ٣٠٠ مستخدم، بما يشمل GPOs وحسابات المستخدمين وهيكل OU وسياسات مجموعات الأمان.",
        "إعداد وصيانة أجهزة MikroTik لتوجيه الشبكة بين المكاتب والتحكم في الوصول.",
        "تقديم الدعم الفني اليومي وحل مشكلات الأجهزة والبرمجيات والاتصال في جميع الإدارات."
      ]
    }
  },
  {
    id: "raya",
    title: { en: "IT Specialist", ar: "أخصائي تقنية معلومات" },
    company: "Raya",
    location: { en: "Egypt", ar: "مصر" },
    mode: { en: "On-site", ar: "من الموقع" },
    start: "2022-07",
    end: "2023-07",
    bullets: {
      en: [
        "Provided end-to-end IT support to 1,200+ users across multiple departments, handling hardware procurement, software installation, and system upgrades.",
        "Conducted system diagnostics and performance reviews, identifying bottlenecks and recommending corrective action.",
        "Resolved complex application and OS-level issues, maintaining stable desktop and server environments."
      ],
      ar: [
        "تقديم دعم تقني متكامل لأكثر من ١٬٢٠٠ مستخدم في عدة إدارات، شمل شراء الأجهزة وتثبيت البرمجيات وترقية الأنظمة.",
        "إجراء تشخيص للأنظمة ومراجعات للأداء، وتحديد نقاط الاختناق والتوصية بالإجراءات التصحيحية.",
        "حل مشكلات التطبيقات ونظام التشغيل المعقدة للحفاظ على استقرار بيئات أجهزة المستخدمين والخوادم."
      ]
    }
  }
];

window.CREDENTIALS = {
  education: [
    {
      degree: { en: "B.Sc., Computer Science", ar: "بكالوريوس علوم الحاسب" },
      school: { en: "October 6 University, Giza, Egypt", ar: "جامعة ٦ أكتوبر، الجيزة، مصر" },
      graduated: "2022-06",
      gpa: { en: "GPA 3.1 / 4.0 (Very Good)", ar: "المعدل ٣٫١ / ٤٫٠ (جيد جداً)" }
    }
  ],
  // TODO: confirm each certification is earned and add dates/IDs
  certifications: [
    { name: "CCNA", full: "Cisco Certified Network Associate" },
    { name: "CCNP", full: "Cisco Certified Network Professional" },
    { name: "MCSA", full: "Microsoft Certified Solutions Associate" },
    { name: "MCSE", full: "Microsoft Certified Solutions Expert" }
  ],
  languages: [
    { name: { en: "Arabic", ar: "العربية" }, level: { en: "Native", ar: "اللغة الأم" } },
    { name: { en: "English", ar: "الإنجليزية" }, level: { en: "Upper-Intermediate / B2", ar: "فوق المتوسط / B2" } }
  ]
};
