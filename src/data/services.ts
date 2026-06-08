import servicePhoto from "@/assets/service-photo.jpg";
import serviceVideo from "@/assets/service-video.jpg";
import serviceStream from "@/assets/service-stream.jpg";
import serviceDrone from "@/assets/service-drone.jpg";
import serviceGraphics from "@/assets/service-graphics.jpg";

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "photography",
    title: "Photography",
    subtitle: "Weddings, graduations, parties, and portraits",
    description:
      "Weddings, graduations, parties, and milestone events trust Ransem Studios for thoughtful photography that frames real moments in time.",
    image: servicePhoto,
    features: ["Wedding Coverage", "Graduations", "Parties", "Portrait Sessions"],
  },
  {
    id: "videography",
    title: "Videography",
    subtitle: "Stories captured with craft",
    description:
      "We like what we do. We do what we know, and we share what we know through polished video coverage for events, brands, and institutions.",
    image: serviceVideo,
    features: ["Event Films", "Brand Stories", "Documentaries", "Highlight Reels"],
  },
  {
    id: "live-streaming",
    title: "Livestreaming",
    subtitle: "Skilled production for shared moments",
    description:
      "Professional livestream coverage for services, meetings, celebrations, and public events, handled by a skilled creative and technical team.",
    image: serviceStream,
    features: ["Multi-Camera Setup", "Real-Time Switching", "Platform Streaming", "Event Audio Support"],
  },
  {
    id: "drone",
    title: "Aerial Coverage",
    subtitle: "Stunning perspectives from above",
    description:
      "Capture stunning aerial footage with drones for events, locations, real estate, and cinematic reveals.",
    image: serviceDrone,
    features: ["Drone Footage", "Location Coverage", "Event Coverage", "Cinematic Reveals"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    subtitle: "Visual communication and branding",
    description:
      "Create visually impactful designs for effective communication, campaigns, and brand enhancement.",
    image: serviceGraphics,
    features: ["Brand Graphics", "Event Posters", "Campaign Design", "Social Media Assets"],
  },
];
