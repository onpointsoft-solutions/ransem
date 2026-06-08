import portfolioWedding1 from "@/assets/portfolio-wedding-1.jpg";
import portfolioWedding2 from "@/assets/portfolio-wedding-2.jpg";
import portfolioEvent1 from "@/assets/portfolio-event-1.jpg";
import portfolioEvent2 from "@/assets/portfolio-event-2.jpg";
import portfolioDrone1 from "@/assets/portfolio-drone-1.jpg";
import portfolioDrone2 from "@/assets/portfolio-drone-2.jpg";
import portfolioCorporate1 from "@/assets/portfolio-corporate-1.jpg";
import servicePhoto from "@/assets/service-photo.jpg";

export type PortfolioCategory = "all" | "weddings" | "events" | "studio" | "drone";

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  image: string;
}

export const portfolioCategories: { value: PortfolioCategory; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "weddings", label: "Weddings" },
  { value: "events", label: "Events" },
  { value: "studio", label: "Studio Shoots" },
  { value: "drone", label: "Drone" },
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Wedding Coverage", category: "weddings", image: portfolioWedding1 },
  { id: 2, title: "Graduation Coverage", category: "events", image: portfolioEvent1 },
  { id: 3, title: "Aerial Event View", category: "drone", image: portfolioDrone1 },
  { id: 4, title: "Studio Portraits", category: "studio", image: portfolioCorporate1 },
  { id: 5, title: "Traditional Ceremony", category: "weddings", image: portfolioWedding2 },
  { id: 6, title: "Drone Location Film", category: "drone", image: portfolioDrone2 },
  { id: 7, title: "Birthday and Party Coverage", category: "events", image: portfolioEvent2 },
  { id: 8, title: "Creative Studio Shoot", category: "studio", image: servicePhoto },
];
