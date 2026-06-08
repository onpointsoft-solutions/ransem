export interface AcademyClass {
  id: string;
  level: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const academyClasses: AcademyClass[] = [
  {
    id: "foundation",
    level: "Level 01",
    title: "Foundation Class",
    description:
      "A practical entry point into media skills for young creators building confidence in photography, videography, storytelling, and studio discipline.",
    duration: "Foundational training",
    price: "Apply Online",
    features: ["Photography Basics", "Videography Basics", "Storytelling", "Practical Studio Sessions", "Portfolio Foundations"],
  },
  {
    id: "intermediate",
    level: "Level 02",
    title: "Intermediate Class",
    description:
      "Hands-on learning for students ready to grow into stronger media creators through scriptwriting, live streaming, graphic design, and social media marketing.",
    duration: "Hands-on projects",
    price: "Apply Online",
    features: ["Scriptwriting", "Live Streaming", "Graphic Design", "Social Media Marketing", "Collaborative Projects"],
    popular: true,
  },
  {
    id: "advanced",
    level: "Level 03",
    title: "Advanced Masterclass",
    description:
      "Advanced mentorship in sound engineering, lighting, drone piloting, and real-world production so students leave with a polished portfolio.",
    duration: "Advanced mentorship",
    price: "Apply Online",
    features: ["Sound Engineering", "Lighting", "Drone Piloting", "Real-World Projects", "Portfolio Review"],
  },
];
