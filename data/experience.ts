import { ExperienceItem } from "@/types/content";

export const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer & AI Engineer Intern",
    company: "PT Parama Data Unit",
    duration: "Feb — Jun 2026",
    location: "Yogyakarta, Indonesia (Hybrid)",
    description:
      "Mengembangkan Sistem Manajemen Dokumen berbasis AI memanfaatkan Retrieval-Augmented Generation (RAG) untuk memfasilitasi pencarian cerdas dan temu kembali informasi secara otomatis dari berbagai dokumen korporat.",
    responsibilities: [
      "Membangun backend performa tinggi dengan FastAPI (Python) untuk menjalankan pipeline RAG dan mengintegrasikan model bahasa lokal (LLM) melalui Ollama secara aman.",
      "Merancang dan mengembangkan antarmuka pengguna yang responsif menggunakan Next.js untuk pengalaman penelusuran dan manajemen dokumen yang mulus.",
      "Menggunakan Express.js untuk orkestrasi siklus hidup request API dan mengoptimalkan jembatan pertukaran data antara frontend dan pipeline inferensi backend.",
      "Mengimplementasikan chunking dokumen semantik, embedding vektor, serta evaluasi kualitas retrieval guna meminimalkan halusinasi LLM.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Ollama",
      "RAG",
      "Vector DB",
      "Express.js",
      "Docker",
    ],
    keyContributions: [
      "Memangkas latensi retrieval dokumen secara signifikan melalui optimasi strategi chunking dan pencarian vektor asinkron.",
      "Membangun pelacakan sitasi (citation tracking) pada pipeline RAG sehingga setiap jawaban AI mencantumkan halaman dokumen sumber secara transparan.",
    ],
    lessonsLearned: [
      "Menyadari bahwa 80% kualitas jawaban RAG ditentukan oleh presisi pemrosesan dokumen dan efektivitas retrieval, bukan semata-mata ukuran model LLM.",
      "Memperoleh pengalaman mendalam dalam mengelola batasan memori (VRAM/RAM) pada inferensi LLM lokal dan penanganan respons streaming.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "PT Jaya Perkasa Mandalika",
    duration: "Okt — Nov 2025",
    location: "Remote, Indonesia",
    description:
      "Mengelola dan mengembangkan platform Software-as-a-Service (SaaS) multi-tenant menggunakan Laravel untuk mendukung manajemen data terpusat bagi berbagai klien bisnis.",
    responsibilities: [
      "Memelihara isolasi database multi-tenant dan sistem kontrol akses berbasis peran (RBAC).",
      "Berkolaborasi dengan tim lintas fungsi melalui Git dan GitHub untuk mengurai bottleneck integrasi data frontend-backend.",
      "Mendiagnosis dan menyelesaikan kendala rendering data dinamis demi menjamin ketersediaan tinggi dan responsivitas aplikasi.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "Git"],
    keyContributions: [
      "Mempercepat proses onboarding klien dengan mengotomatiskan provisi ruang kerja (workspace) tenant.",
      "Menemukan dan memperbaiki potensi kebocoran data (data leakage) antar-organisasi tenant pada query bersama.",
    ],
    lessonsLearned: [
      "Menguasai arsitektur database multi-tenant (shared database dengan tenant discriminator vs isolasi skema terpisah).",
      "Memperkuat alur kolaborasi asinkron melalui peninjauan pull request dan konvensi branch Git yang terstandar.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Digital Hero Indonesia",
    duration: "Jul 2022 — Des 2023",
    location: "Remote, Indonesia",
    description:
      "Mengembangkan Sistem Manajemen Penyewaan Lapangan Olahraga berbasis web menggunakan Laravel dalam kerangka kerja Agile Scrum untuk merilis fitur siap produksi.",
    responsibilities: [
      "Merancang skema database relasional dan logika bisnis untuk penjadwalan booking, ketersediaan fasilitas, serta pencatatan pembayaran.",
      "Berpartisipasi aktif dalam sprint planning, backlog refinement, daily standup, dan sesi evaluasi retrospective.",
      "Mengelola version control kode sumber dan rilis cabang fitur menggunakan Git dan GitHub.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "Git", "Scrum"],
    keyContributions: [
      "Merancang dan merilis deteksi konflik reservasi otomatis yang mencegah terjadinya jadwal booking ganda (double-booking).",
      "Menyelesaikan penugasan fitur tepat waktu pada setiap siklus sprint tanpa kendala kritis di lingkungan produksi.",
    ],
    lessonsLearned: [
      "Membangun fondasi kuat dalam normalisasi skema database dan optimasi query SQL relasional.",
      "Menyadari pentingnya penulisan kode yang bersih dan terdokumentasi (clean code) untuk pemeliharaan jangka panjang tim.",
    ],
  },
];
