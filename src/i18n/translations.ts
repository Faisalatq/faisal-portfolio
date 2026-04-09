export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Welcome to my portfolio",
      headline: "Hi, I'm",
      name: "Faisal",
      subheadline:
        "Transforming complex challenges into strategic wins through strong leadership, problem-solving, and impactful project management.",
      cta1: "View My Work",
      cta2: "Download CV",
    },
    about: {
      badge: "About Me",
      title: "Building the future,\none project at a time.",
      desc: "Computer Science student with a strong interest in consulting and project management. Recognized for analytical thinking, structured problem-solving, and leading teams of 40+ members. Contributed over 100 volunteer hours, demonstrating commitment, initiative, and impact-driven execution. Passionate about turning complex challenges into practical, scalable solutions.",
      skills: [
        { title: "Team Leadership", desc: "Leading cross-functional teams to deliver ambitious projects on time and within scope." },
        { title: "Strategic Planning", desc: "Translating complex requirements into actionable roadmaps and measurable outcomes." },
        { title: "Problem Solving", desc: "Applying analytical thinking and technical expertise to overcome challenging obstacles." },
      ],
    },
    experience: {
      badge: "Experience",
      title: "Leadership & Growth",
      items: [
        {
          period: "2024 — Present",
          title: "Committee Leader",
          org: "University Student Council",
          desc: "Managed 40+ members, handled budgeting exceeding $50K, and secured strategic partnerships with industry leaders.",
        },
        {
          period: "2023 — 2024",
          title: "Project Manager",
          org: "KSU CROWN eSports",
          desc: "Organized large-scale eSports tournaments, coordinating logistics, sponsorships, and cross-team collaboration.",
        },
        {
          period: "2022 — 2023",
          title: "Technical Consultant",
          org: "Freelance",
          desc: "Provided consulting services for startups, focusing on system architecture, process optimization, and digital strategy.",
        },
      ],
    },
    projects: {
      badge: "Portfolio",
      title: "Featured Projects",
      items: [
        {
          title: "ProPlay Hub",
          desc: "An eSports platform concept designed to connect gamers, teams, and tournaments in one unified ecosystem.",
          tags: ["React", "Node.js", "UI/UX"],
        },
        {
          title: "KSU CROWN",
          desc: "Full-scale eSports tournament organization — branding, logistics, live production, and participant management.",
          tags: ["Project Mgmt", "Branding", "Operations"],
        },
        {
          title: "Tuwaiq Car Rental",
          desc: "A comprehensive system case study analyzing car rental workflows, database design, and user experience.",
          tags: ["Case Study", "SQL", "Systems Design"],
        },
      ],
    },
    resume: {
      badge: "Resume",
      title: "Core Competencies",
      desc: "A snapshot of my professional toolkit — built through hands-on experience and continuous learning.",
      competencies: ["Software Development", "Project Management", "CS Fundamentals", "Strategic Consulting"],
      cta: "Download Full Resume (PDF)",
    },
    contact: {
      badge: "Contact",
      title: "Let's Work Together",
      desc: "Have a project in mind or just want to connect? Drop me a message and I'll get back to you.",
      email: "Email:",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
      },
    },
    footer: "© 2026 Faisal. All rights reserved.",
  },

  ar: {
    nav: {
      about: "عني",
      experience: "الخبرات",
      projects: "المشاريع",
      contact: "تواصل",
    },
    hero: {
      badge: "مرحباً بك في معرض أعمالي",
      headline: "أهلاً، أنا",
      name: "فيصل",
      subheadline:
        "خريج علوم حاسب يحوّل التحديات المعقدة إلى إنجازات استراتيجية — أقود الفرق، وأطلق مبادرات عالية الأثر، وأبني حلولاً تصنع الفارق.",
      cta1: "تصفح أعمالي",
      cta2: "تحميل السيرة الذاتية",
    },
    about: {
      badge: "عني",
      title: "أبني المستقبل،\nمشروعاً تلو الآخر.",
      desc: "خريج علوم حاسب شغوف بقيادة الفرق، والتفاوض، وإدارة المبادرات الكبيرة. أعمل عند نقطة التقاء التقنية والاستراتيجية — لتحويل الأفكار إلى حلول مؤثرة.",
      skills: [
        { title: "قيادة الفريق", desc: "قيادة فرق متعددة التخصصات لتنفيذ مشاريع طموحة في الوقت المحدد وضمن النطاق." },
        { title: "التخطيط الاستراتيجي", desc: "تحويل المتطلبات المعقدة إلى خطط عمل واضحة ونتائج قابلة للقياس." },
        { title: "حل المشكلات", desc: "تطبيق التفكير التحليلي والخبرة التقنية لتجاوز العقبات الصعبة." },
      ],
    },
    experience: {
      badge: "الخبرات",
      title: "القيادة والنمو",
      items: [
        {
          period: "٢٠٢٤ — الحالي",
          title: "رئيس لجنة",
          org: "مجلس الطلاب الجامعي",
          desc: "إدارة أكثر من 40 عضواً، والتعامل مع ميزانيات تتجاوز 50 ألف دولار، وتأمين شراكات استراتيجية مع قادة الصناعة.",
        },
        {
          period: "٢٠٢٣ — ٢٠٢٤",
          title: "مدير مشروع",
          org: "KSU CROWN للرياضات الإلكترونية",
          desc: "تنظيم بطولات رياضات إلكترونية واسعة النطاق، وتنسيق الخدمات اللوجستية والرعايات والتعاون بين الفرق.",
        },
        {
          period: "٢٠٢٢ — ٢٠٢٣",
          title: "مستشار تقني",
          org: "عمل حر",
          desc: "تقديم خدمات استشارية للشركات الناشئة، مع التركيز على هندسة الأنظمة وتحسين العمليات والاستراتيجية الرقمية.",
        },
      ],
    },
    projects: {
      badge: "معرض الأعمال",
      title: "المشاريع المميزة",
      items: [
        {
          title: "ProPlay Hub",
          desc: "منصة رياضات إلكترونية مصممة لربط اللاعبين والفرق والبطولات في منظومة واحدة.",
          tags: ["React", "Node.js", "UI/UX"],
        },
        {
          title: "KSU CROWN",
          desc: "تنظيم بطولات الرياضات الإلكترونية — الهوية البصرية، الخدمات اللوجستية، البث المباشر، وإدارة المشاركين.",
          tags: ["إدارة مشاريع", "هوية بصرية", "عمليات"],
        },
        {
          title: "Tuwaiq Car Rental",
          desc: "دراسة حالة شاملة لنظام تأجير سيارات تحلل سير العمل وتصميم قاعدة البيانات وتجربة المستخدم.",
          tags: ["دراسة حالة", "SQL", "تصميم أنظمة"],
        },
      ],
    },
    resume: {
      badge: "السيرة الذاتية",
      title: "الكفاءات الأساسية",
      desc: "لمحة عن أدواتي المهنية — بُنيت من خلال الخبرة العملية والتعلم المستمر.",
      competencies: ["تطوير البرمجيات", "إدارة المشاريع", "أساسيات علوم الحاسب", "الاستشارات الاستراتيجية"],
      cta: "تحميل السيرة الذاتية الكاملة (PDF)",
    },
    contact: {
      badge: "تواصل",
      title: "لنعمل معاً",
      desc: "لديك مشروع في ذهنك أو تريد التواصل؟ أرسل لي رسالة وسأرد عليك.",
      email: "البريد الإلكتروني:",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        send: "إرسال",
      },
    },
    footer: "© ٢٠٢٦ فيصل. جميع الحقوق محفوظة.",
  },
} as const;
