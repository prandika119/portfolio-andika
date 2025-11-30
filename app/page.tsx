import React from "react";
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
} from "lucide-react";

export default function Portfolio() {
    const projects = [
        {
            title: "Website Sistem Informasi Masjid",
            description:
                "Website sistem informasi masjid menggunakan HTML, Bootstrap, library AOS, dan PHP dengan database MySQL",
            tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
            demo: "https://youtu.be/t14VIlV0wYs?si=JQGZkTOq9LQasabd",
            github: "https://github.com/prandika119/WebSistemInformasiMasjid-ProjekUAS2",
        },
        {
            title: "Website Sistem Penyewaan Lapangan",
            description:
                "Aplikasi untuk mengelola penyewaan lapangan olahraga dengan fitur autentikasi, jadwal, transaksi, pelaporan, dan booking online",
            tech: ["Laravel", "PHP", "MySQL", "Laravel Blade"],
            demo: "https://drive.google.com/file/d/1Kbz9B35wLJFrvTejY-BW8c5LI6cxaYky/view",
            github: "https://github.com/luthfiabdllh/skyclub",
            apiRepo: "https://github.com/prandika119/api-skyclub",
        },
        {
            title: "Chatbot AI Telegram (N8N)",
            description:
                "Chatbot berbasis workflow engine yang menjawab pertanyaan terkait review hotel dari berbagai sumber data secara real-time menggunakan n8n, Supabase, Gemini API, dan Ollama",
            tech: ["n8n", "Supabase", "Gemini API", "Ollama"],
            demo: "https://t.me/RoboAI_AsistenHotelManager_bot",
            github: "https://github.com/prandika119/roboai-chatbot-n8n",
        },
    ];

    const experiences = [
        {
            period: "Oktober – November 2025",
            title: "Magang Web Developer",
            company: "PT Jaya Perkasa Mandalika",
            duration: "2 Bulan",
            responsibilities: [
                "Membangun website sistem SaaS multitenant menggunakan Laravel",
                "Mendinamiskan data di website",
                "Berkolaborasi menggunakan Git dan GitHub",
            ],
        },
        {
            period: "Februari – April 2025",
            title: "Magang Web Developer",
            company: "Digital Hero Indonesia",
            duration: "3 Bulan",
            responsibilities: [
                "Membangun website sistem penyewaan menggunakan Laravel",
                "Mengembangkan proyek bersama tim dalam lingkungan kerja berbasis Agile Scrum",
                "Berkolaborasi menggunakan Git dan GitHub",
            ],
        },
        {
            period: "Maret 2024",
            title: "Staf Divisi Media Kreatif / Subdiv IT",
            company: "Ramadhan Di Kampus / RDK 1445H",
            duration: "1 Bulan",
            responsibilities: [
                "Menjalankan live streaming dengan perangkat lunak OBS untuk kajian Ramadhan",
                "Mengatur kamera, audio, dan pencahayaan untuk keperluan live streaming",
            ],
        },
        {
            period: "Oktober 2023 – sekarang",
            title: "Staff Media",
            company: "Jamaah Shalahudin",
            responsibilities: [
                "Mengedit video pendek islami menggunakan software editing",
                "Melakukan take video untuk keperluan konten",
            ],
        },
    ];

    const skills = {
        Backend: ["Laravel", "PHP", "Golang", "JavaScript"],
        Frontend: ["HTML", "CSS", "Bootstrap", "Laravel Blade", "JavaScript"],
        Database: ["MySQL", "Supabase (PostgreSQL)"],
        "Tools & Others": [
            "Git & GitHub",
            "n8n",
            "Docker (Basic)",
            "CI/CD (Basic)",
            "RESTful API",
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header/Hero Section */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Andika Dwi Prasetya
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 text-blue-100">
                        Web Developer | Backend Enthusiast
                    </p>
                    <p className="text-lg mb-8 max-w-3xl text-blue-50">
                        Mahasiswa Vokasi Universitas Gadjah Mada, Program Studi
                        Teknologi Rekayasa Perangkat Lunak. Berpengalaman dalam
                        pengembangan aplikasi web dengan Laravel dan memiliki
                        minat mendalam di backend development.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4 text-sm">
                        <a
                            href="mailto:andika.dwiprasetya119@gmail.com"
                            className="flex items-center gap-2 hover:text-blue-200 transition"
                        >
                            <Mail size={18} />
                            <span>andika.dwiprasetya119@gmail.com</span>
                        </a>
                        <a
                            href="tel:+6289538498610"
                            className="flex items-center gap-2 hover:text-blue-200 transition"
                        >
                            <Phone size={18} />
                            <span>+62 895-3849-86610</span>
                        </a>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>Sleman, Yogyakarta</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-6">
                        <a
                            href="https://github.com/prandika119"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                        >
                            <Github size={20} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/andika-dwi-prasetya-3a529b299"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                        >
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 max-w-5xl py-12">
                {/* Education Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                        Pendidikan
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Sekolah Vokasi, Universitas Gadjah Mada
                                </h3>
                                <span className="text-sm text-gray-600">
                                    2023 – sekarang
                                </span>
                            </div>
                            <p className="text-gray-700">
                                Program Studi Teknologi Rekayasa Perangkat Lunak
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                Semester 5 | Yogyakarta, Indonesia
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    SMA NEGERI 1 Ajibarang
                                </h3>
                                <span className="text-sm text-gray-600">
                                    2020 – 2023
                                </span>
                            </div>
                            <p className="text-gray-700">
                                Jurusan Matematika dan Ilmu Pengetahuan Alam
                                (MIPA)
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                        Pengalaman Profesional
                    </h2>
                    <div className="space-y-6">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-lg shadow-sm"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {exp.title}
                                        </h3>
                                        <p className="text-blue-600 font-medium">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm text-gray-600">
                                            {exp.period}
                                        </span>
                                        {exp.duration && (
                                            <p className="text-sm text-gray-500">
                                                ({exp.duration})
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 mt-3">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                        Proyek
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 mb-4 text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 text-sm">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition"
                                        >
                                            <Github size={16} />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                    {project.apiRepo && (
                                        <a
                                            href={project.apiRepo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition"
                                        >
                                            <Github size={16} />
                                            <span>API Repo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
                        Keahlian
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div
                                key={category}
                                className="bg-white p-6 rounded-lg shadow-sm"
                            >
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <p className="text-gray-300">
                        © 2025 Andika Dwi Prasetya. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </footer>
        </div>
    );
}
