export type Language = 'en' | 'id';

export interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  field?: string;
  location: string;
  gpa?: string;
  current?: boolean;
}

export interface SkillItem {
  name: string;
  level: 'Basic' | 'Intermediate';
  category: 'programming' | 'ai-tools' | 'web-foundations';
  description: {
    en: string;
    id: string;
  };
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: {
    en: string;
    id: string;
  };
  category: {
    en: string;
    id: string;
  };
  status: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  features: {
    en: string[];
    id: string[];
  };
  techStack: string[];
  repoUrl: string;
  demoUrl?: string; // Configurable placeholder
  highlights: {
    title: { en: string; id: string };
    desc: { en: string; id: string };
  }[];
}

export interface OrganizationItem {
  name: string;
  abbreviation: string;
  organizationFullName: string;
  role: string;
  division: string;
  period: string;
  location: string;
  description: {
    en: string;
    id: string;
  };
  bulletPoints?: {
    en: string[];
    id: string[];
  };
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: 'Muhammad Rashya Reihansyah',
    displayName: 'Rashya',
    titles: {
      en: [
        'Informatics Engineering Student',
        'Aspiring Software Developer',
        'Technology Enthusiast',
        'Semester 3 Undergraduate',
      ],
      id: [
        'Mahasiswa Teknik Informatika',
        'Calon Pengembang Perangkat Lunak',
        'Antusias Teknologi',
        'Mahasiswa S1 Semester 3',
      ],
    },
    location: 'Sukabumi, West Java, Indonesia',
    university: 'UIN Sunan Gunung Djati Bandung',
    faculty: 'Faculty of Science and Technology',
    major: 'Informatics Engineering (S1)',
    currentSemester: 3,
    gpa: '3.20',
    statusBadge: {
      en: 'Currently Learning & Building',
      id: 'Sedang Belajar & Berkarya',
    },
    photoUrl: '/assets/aistudio/profile_3aa00efe.jpg',
    cvUrl: '/assets/aistudio/CV_Muhammad_Rashya_Reihansyah__13e84e26.pdf',
    intro: {
      en: "I am an Informatics Engineering student at UIN Sunan Gunung Djati Bandung with a strong interest in technology, software development, and artificial intelligence. I am currently developing my programming skills, exploring modern web technologies, and learning how technology can solve real-world problems. I enjoy experimenting with AI-powered tools, building digital projects, and continuously improving my technical abilities.",
      id: "Saya adalah mahasiswa Teknik Informatika di UIN Sunan Gunung Djati Bandung dengan ketertarikan tinggi pada teknologi, pengembangan perangkat lunak, dan kecerdasan buatan. Saat ini saya terus mengembangkan keterampilan pemrograman, mengeksplorasi teknologi web modern, serta mempelajari bagaimana teknologi dapat memecahkan masalah dunia nyata. Saya senang bereksperimen dengan alat berbasis AI, membangun proyek digital, dan terus meningkatkan kemampuan teknis saya.",
    },
    aboutQuote: {
      en: "I believe that becoming a good developer is a continuous process of learning, experimenting, and building.",
      id: "Saya percaya bahwa menjadi pengembang yang baik adalah proses berkelanjutan untuk terus belajar, bereksperimen, dan berkarya.",
    },
    focusAreas: {
      en: ['Programming Fundamentals', 'Web Development', 'Artificial Intelligence & Productivity'],
      id: ['Dasar Pemrograman', 'Pengembangan Web', 'Kecerdasan Buatan & Produktivitas'],
    },
  },

  socials: {
    instagram: {
      handle: '@rshyrhnsy',
      url: 'https://instagram.com/rshyrhnsy',
    },
    github: {
      handle: 'acarashya',
      url: 'https://github.com/acarashya',
    },
    linkedin: {
      handle: 'acarashya',
      url: 'https://linkedin.com/in/acarashya',
    },
    whatsapp: {
      number: '081283181339',
      display: '+62 812-8318-1339',
      url: 'https://wa.me/6281283181339',
    },
    email: 'acarashya14@gmail.com',
  },

  skills: {
    programming: [
      {
        name: 'C++',
        level: 'Basic',
        category: 'programming',
        description: {
          en: 'Understanding basic programming syntax, variables, data types, conditions, loops, and fundamental programming concepts.',
          id: 'Memahami sintaks dasar pemrograman, variabel, tipe data, pengkondisian, perulangan, dan konsep algoritma fundamental.',
        },
        tags: ['Pointers & Memory', 'Control Flow', 'Algorithms', 'Functions'],
      },
      {
        name: 'Java',
        level: 'Basic',
        category: 'programming',
        description: {
          en: 'Learning object-oriented programming (OOP), classes, objects, methods, and basic application development.',
          id: 'Mempelajari pemrograman berorientasi objek (OOP), kelas, objek, metode, dan dasar pembuatan aplikasi.',
        },
        tags: ['OOP Concepts', 'Inheritance', 'Encapsulation', 'Classes & Methods'],
      },
    ] as SkillItem[],

    aiTools: [
      {
        name: 'ChatGPT',
        level: 'Intermediate',
        category: 'ai-tools',
        description: {
          en: 'Comfortable utilizing for accelerated learning, syntax troubleshooting, algorithmic logic brainstorming, and documentation synthesis.',
          id: 'Terbiasa menggunakan ChatGPT untuk mempercepat pemahaman materi, pemecahan masalah sintaks, brainstorming logika, dan sintesis dokumentasi.',
        },
        tags: ['Prompt Engineering', 'Code Debugging', 'Concept Explanation'],
      },
      {
        name: 'Google Gemini',
        level: 'Intermediate',
        category: 'ai-tools',
        description: {
          en: 'Applied for technical research, cross-referencing concepts, and architectural planning for academic web applications.',
          id: 'Diterapkan untuk riset teknis, referensi silang konsep, dan perencanaan arsitektur proyek aplikasi web akademik.',
        },
        tags: ['Research & Synthesis', 'Workflow Assistance', 'Ideation'],
      },
      {
        name: 'Claude',
        level: 'Intermediate',
        category: 'ai-tools',
        description: {
          en: 'Utilized for deep code structuring analysis, clean code patterns explanation, and logical refactoring insights.',
          id: 'Digunakan untuk analisis struktur kode yang mendalam, penjelasan pola clean code, dan wawasan refaktorisasi logika.',
        },
        tags: ['Logic Review', 'Structured Reasoning', 'Documentation'],
      },
      {
        name: 'Zhipu AI',
        level: 'Intermediate',
        category: 'ai-tools',
        description: {
          en: 'Explored for comparative multilingual querying, productivity workflows, and diverse AI model ecosystem evaluation.',
          id: 'Dieksplorasi untuk pembandingan respons model AI, alur produktivitas, dan evaluasi ekosistem AI yang beragam.',
        },
        tags: ['Alternative LLMs', 'Productivity', 'Model Exploration'],
      },
    ] as SkillItem[],

    webTools: [
      {
        name: 'HTML5 & CSS3',
        level: 'Basic',
        category: 'web-foundations',
        description: {
          en: 'Structuring semantic web layouts, responsive styles, and modern UI components.',
          id: 'Menyusun tata letak web semantik, gaya responsif, dan komponen antarmuka modern.',
        },
        tags: ['Semantic HTML', 'Flexbox & Grid', 'Responsive Design'],
      },
      {
        name: 'JavaScript & TypeScript',
        level: 'Basic',
        category: 'web-foundations',
        description: {
          en: 'Implementing DOM manipulation, asynchronous data handling, and type safety fundamentals.',
          id: 'Menerapkan manipulasi DOM, penanganan data asinkron, dan dasar-dasar keamanan tipe data.',
        },
        tags: ['ES6+ Syntax', 'Async/Fetch', 'Type Safety'],
      },
      {
        name: 'React & Vite',
        level: 'Basic',
        category: 'web-foundations',
        description: {
          en: 'Building component-driven interactive interfaces with modern build toolchains and state hooks.',
          id: 'Membangun antarmuka interaktif berbasis komponen dengan toolchain modern dan state management.',
        },
        tags: ['Component Architecture', 'Hooks', 'Vite Build'],
      },
      {
        name: 'Git & GitHub',
        level: 'Basic',
        category: 'web-foundations',
        description: {
          en: 'Version control workflows, commit tracking, branch exploration, and remote repository synchronization.',
          id: 'Alur kerja version control, pencatatan commit, eksplorasi branch, dan sinkronisasi repositori.',
        },
        tags: ['Version Control', 'Repository Management', 'Collaboration'],
      },
    ] as SkillItem[],

    aiProficiencyDisclaimer: {
      en: "Proficiency in AI tools reflects practical daily utilization for learning, brainstorming, problem-solving, coding assistance, and productivity, rather than professional AI engineering or machine learning research.",
      id: "Tingkat kemahiran alat AI mencerminkan penggunaan praktis sehari-hari untuk pendampingan belajar, curah pendapat, pemecahan masalah, asistensi penulisan kode, dan produktivitas, bukan keahlian profesional rekayasa AI atau riset machine learning.",
    },
  },

  // Exactly 1 Project
  featuredProject: {
    id: 'aula-fst',
    title: 'AULA FST',
    subtitle: {
      en: 'Faculty Hall Booking & Availability Management System',
      id: 'Sistem Informasi Pemantauan & Pemesanan Aula Fakultas',
    },
    category: {
      en: 'Academic Project — Web Application Development',
      id: 'Proyek Akademik — Pengembangan Aplikasi Web',
    },
    status: {
      en: 'Academic Project • 1 Featured Project',
      id: 'Proyek Akademik • 1 Proyek Unggulan',
    },
    description: {
      en: 'Aula FST is a web-based application designed to help manage and monitor faculty hall schedules and booking information at the Faculty of Science and Technology, UIN Sunan Gunung Djati Bandung. The project was developed as an academic project to explore web development, application functionality, and digital solutions for campus facility management.',
      id: 'Aula FST adalah aplikasi berbasis web yang dirancang untuk membantu mengelola dan memantau jadwal serta informasi pemesanan aula di Fakultas Sains dan Teknologi, UIN Sunan Gunung Djati Bandung. Proyek ini dikembangkan sebagai proyek akademik untuk mengeksplorasi pengembangan web, fungsionalitas aplikasi, dan solusi digital manajemen fasilitas kampus.',
    },
    features: {
      en: [
        'Hall schedule monitoring with real-time status availability',
        'Booking management and slot reservation handling',
        'JSON-based structured data storage for bookings and hall records',
        'Administrative dashboard interface for schedule management',
        'Progressive Web App (PWA) capability for responsive mobile usage',
        'Clean, accessible responsive user interface designed for student convenience',
      ],
      id: [
        'Pemantauan jadwal ketersediaan aula secara terstruktur',
        'Manajemen pemesanan dan reservasi slot waktu',
        'Penyimpanan data pemesanan terstruktur berbasis JSON',
        'Antarmuka dasbor administratif untuk pengelolaan jadwal',
        'Implementasi Progressive Web App (PWA) yang adaptif di ponsel pintar',
        'Desain antarmuka responsif yang ramah pengguna bagi mahasiswa fakultas',
      ],
    },
    techStack: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'JSON Storage',
      'PWA',
      'Node.js',
    ],
    repoUrl: 'https://github.com/acarashya/Aula-Fakultas-Sains-dan-teknologi',
    demoUrl: undefined, // Configurable placeholder until live URL confirmed
    highlights: [
      {
        title: { en: 'Campus Utility', id: 'Solusi Kampus' },
        desc: {
          en: 'Directly addresses scheduling transparency for faculty halls and student event coordination.',
          id: 'Menjawab kebutuhan transparansi jadwal aula fakultas dan koordinasi kegiatan mahasiswa.',
        },
      },
      {
        title: { en: 'PWA Enabled', id: 'Dukungan PWA' },
        desc: {
          en: 'Installable app-like experience with offline caching capabilities and responsive viewport adaptability.',
          id: 'Pengalaman layaknya aplikasi asli dengan kemampuan caching dan adaptabilitas layar.',
        },
      },
      {
        title: { en: 'Data Architecture', id: 'Arsitektur Data' },
        desc: {
          en: 'Lightweight JSON schema data model for records without external database overhead.',
          id: 'Model data skema JSON ringan untuk pencatatan tanpa kompleksitas basis data eksternal berlebih.',
        },
      },
    ],
  } as ProjectItem,

  organizations: [
    {
      name: 'HIMATIF',
      abbreviation: 'HIMATIF UIN SGD',
      organizationFullName: 'Himpunan Mahasiswa Jurusan Teknik Informatika — UIN Sunan Gunung Djati Bandung',
      role: 'Member',
      division: 'Kajian Strategis dan Advokasi (KASTRAD)',
      period: '2026 – Present',
      location: 'Bandung, Indonesia',
      description: {
        en: 'Participating in student organizational activities focused on strategic studies, advocacy, and student-related issues.',
        id: 'Berpartisipasi aktif dalam kegiatan keorganisasian mahasiswa yang berfokus pada kajian strategis, advokasi aspirasi, dan isu-isu kemahasiswaan.',
      },
      bulletPoints: {
        en: [
          'Participate in study sessions and conduct research on issues relevant to campus and the wider student community.',
          'Contribute to recurring issue-analysis content and discussion forums addressing issues both within and outside campus.',
        ],
        id: [
          'Mengikuti sesi kajian dan riset isu-isu relevan di lingkungan kampus maupun masyarakat.',
          'Berkontribusi dalam penyusunan konten analisis isu serta forum diskusi mahasiswa.',
        ],
      },
    },
    {
      name: 'IKMADA BANDUNG',
      abbreviation: 'IKMADA Bandung',
      organizationFullName: 'Ikatan Keluarga Mahasiswa Yaspida Bandung',
      role: 'Board Member',
      division: 'Pengembangan Aparatur Organisasi (PAO)',
      period: '2026 – Present',
      location: 'Bandung, Indonesia',
      description: {
        en: 'Contributing to organizational development and supporting activities related to member development and organizational management.',
        id: 'Berkontribusi pada pengembangan organisasi dan mendukung berbagai agenda terkait pembinaan aparatur serta tata kelola organisasi.',
      },
      bulletPoints: {
        en: [
          'Facilitate membership engagement and professional development programs.',
          'Support internal structural governance and alumni networking initiatives.',
        ],
        id: [
          'Memfasilitasi kegiatan pengembangan kapasitas anggota serta kepengurusan.',
          'Mendukung tata kelola keorganisasian dan jaringan silaturahmi alumni Yaspida.',
        ],
      },
    },
  ] as OrganizationItem[],

  campusActivities: [
    {
      title: 'ITFair XIV Vol.2',
      year: '2026',
      division: 'Field Coordinator Division (Koordinator Lapangan)',
    },
    {
      title: 'Musga Ikmada',
      year: '2026',
      division: 'Event Division (Divisi Acara)',
    },
    {
      title: 'Pelantikan Pengurus Ikmada',
      year: '2026',
      division: 'Event Division (Divisi Acara)',
    },
    {
      title: 'Swift 2026',
      year: '2026',
      division: 'Secretariat and Public Relations Division (Humas & Kesekretariatan)',
    },
    {
      title: 'Monitor 2026',
      year: '2026',
      division: 'Disciplinary Committee Division (Komisi Disiplin)',
    },
  ],

  certifications: [
    {
      name: 'Masa Orientasi Mahasiswa (Monitor)',
      year: '2025',
      institution: 'UIN Sunan Gunung Djati Bandung',
    },
    {
      name: 'Moderasi Beragama (Religious Moderation)',
      year: '2026',
      institution: 'Kementerian Agama RI / UIN SGD',
    },
    {
      name: 'Latihan Kepemimpinan Mahasiswa (LKM) 3',
      year: '2026',
      institution: 'FST UIN Sunan Gunung Djati Bandung',
    },
  ],

  educationTimeline: [
    {
      year: '2019',
      institution: 'SDN 12 Cibadak',
      degree: 'Primary Education',
      location: 'Sukabumi, West Java',
    },
    {
      year: '2022',
      institution: 'SMP IT Yaspida Sukabumi',
      degree: 'Junior High School',
      location: 'Sukabumi, West Java',
    },
    {
      year: '2025',
      institution: 'MAN 1 Sukabumi',
      degree: 'Senior High School',
      field: 'Mathematics and Natural Sciences (MIPA)',
      location: 'Sukabumi, West Java',
    },
    {
      year: '2025 – Present',
      institution: 'UIN Sunan Gunung Djati Bandung',
      degree: "Bachelor's Degree (S1) in Informatics Engineering",
      field: 'Faculty of Science and Technology • Semester 3',
      location: 'Bandung, West Java',
      gpa: '3.20',
      current: true,
    },
  ] as EducationItem[],

  interests: [
    {
      id: 'soft-dev',
      title: { en: 'Software Development', id: 'Pengembangan Perangkat Lunak' },
      description: {
        en: 'Exploring modern programming patterns, software architecture fundamentals, and clean code principles.',
        id: 'Mengeksplorasi pola pemrograman modern, dasar arsitektur perangkat lunak, dan prinsip clean code.',
      },
      icon: 'code-xml',
    },
    {
      id: 'web-dev',
      title: { en: 'Web Development', id: 'Pengembangan Web' },
      description: {
        en: 'Building responsive web interfaces, Progressive Web Apps, and component-based applications.',
        id: 'Membangun antarmuka web responsif, Progressive Web Apps, dan aplikasi berbasis komponen.',
      },
      icon: 'globe',
    },
    {
      id: 'ai-tech',
      title: { en: 'Artificial Intelligence', id: 'Kecerdasan Buatan' },
      description: {
        en: 'Experimenting with generative AI tools, prompt workflows, and AI integration for real-world utilities.',
        id: 'Bereksperimen dengan alat AI generatif, alur kerja prompt, dan integrasi AI untuk kebutuhan praktis.',
      },
      icon: 'sparkles',
    },
    {
      id: 'prog-fund',
      title: { en: 'Programming Fundamentals', id: 'Dasar Pemrograman' },
      description: {
        en: 'Strengthening algorithmic thinking, data structures, and memory concepts through C++ and Java.',
        id: 'Memperkuat logika berpikir algoritmik, struktur data, dan konsep memori melalui C++ dan Java.',
      },
      icon: 'cpu',
    },
    {
      id: 'dig-inno',
      title: { en: 'Digital Innovation', id: 'Inovasi Digital' },
      description: {
        en: 'Discovering how digital tools and automated systems can solve practical student and organizational challenges.',
        id: 'Mencari cara bagaimana perkakas digital dan otomasi dapat memecahkan tantangan mahasiswa dan organisasi.',
      },
      icon: 'lightbulb',
    },
    {
      id: 'tech-prod',
      title: { en: 'Technology & Productivity', id: 'Teknologi & Produktivitas' },
      description: {
        en: 'Optimizing developer developer workflow, terminal utilities, modular study systems, and tech automation.',
        id: 'Mengoptimalkan alur kerja pengembang, utilitas terminal, sistem belajar modular, dan efisiensi teknologi.',
      },
      icon: 'zap',
    },
  ],
};
