export type Project = {
  number: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  details: string;
  stack: string[];
  image: string;
  link: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "ai-powered-telegram-chatbot",
    title: "AI-Powered Telegram Chatbot",
    type: "AI / AUTOMATION",
    description:
      "Automated hotel review workflow that processes user input and delivers real-time answers via Telegram with measurable business value.",
    details:
      "Built a workflow connecting n8n, Telegram API, OpenAI, and SQL to make customer insight retrieval faster and more structured.",
    stack: ["n8n", "Telegram API", "OpenAI / LLM", "SQL"],
    image: "https://picsum.photos/seed/telegram-ai/1200/840",
    link: "https://t.me/RoboAI_AsistenHotelManager_bot",
  },
  {
    number: "02",
    slug: "nutritrack-healthmap",
    title: "NutriTrack x HealthMap",
    type: "INTEROPERABLE SYSTEM",
    description:
      "An interoperable nutrition monitoring ecosystem that connects two systems through a shared data layer for clearer malnutrition reporting.",
    details:
      "Developed RESTful APIs and real-time data flows to keep both platforms synchronized and easy to analyze.",
    stack: ["REST API", "Shared Database", "State Management"],
    image: "https://picsum.photos/seed/nutritrack/1200/840",
    link: "#contact",
  },
  {
    number: "03",
    slug: "sports-field-rental-system",
    title: "Sports Field Rental System",
    type: "WEB APPLICATION",
    description:
      "A booking platform for sports facilities that simplifies reservation management, schedule tracking, and field availability monitoring.",
    details:
      "Designed the relational schema and integrated frontend and backend logic so booking workflows stay efficient and accurate.",
    stack: ["Laravel", "MySQL", "PHP", "Tailwind", "Alpine JS"],
    image: "https://picsum.photos/seed/sports-field/1200/840",
    link: "https://github.com/luthfiabdllh/skyclub",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
