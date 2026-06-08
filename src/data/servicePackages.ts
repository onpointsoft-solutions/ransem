export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  summary: string;
  featured?: boolean;
  features: string[];
}

export const servicePackages: ServicePackage[] = [
  {
    id: "classic",
    name: "Classic Package",
    price: "Ksh 45,000",
    summary: "Essential wedding photo and video coverage.",
    features: [
      "1 Photographer",
      "2 Videographers",
      "Unlimited Edited Photos",
      "Wedding Highlight Video",
      "Full Edited Wedding Video",
      "1 Mounted Photo (A4 Size)",
      "Photo Album (50 photos)",
      "8GB Flash Drive with all Photos & Videos",
    ],
  },
  {
    id: "deluxe",
    name: "Deluxe Package",
    price: "Ksh 60,000",
    summary: "Expanded coverage with drone shots and invitation design.",
    features: [
      "2 Photographers",
      "2 Videographers",
      "Drone Coverage",
      "Unlimited Edited Photos",
      "Wedding Trailer",
      "Full Edited Wedding Video",
      "E-card Invitation Design",
      "1 Mounted Photo (A3 Size)",
      "Photo Album (100 photos)",
      "16GB Flash Drive with all Photos & Videos",
    ],
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "Ksh 90,000",
    summary: "Full wedding production with livestreaming and pre-wedding coverage.",
    featured: true,
    features: [
      "2 Photographers",
      "3 Videographers",
      "Drone Coverage",
      "Live Streaming on YouTube/Facebook",
      "Unlimited Edited Photos",
      "Wedding Trailer",
      "Full Edited Wedding Video",
      "Pre-Wedding Photoshoot",
      "E-card Invitation Design",
      "2 Mounted Photos (A3 & A2 Sizes)",
      "Deluxe Photobook (15 Pages)",
      "32GB Flash Drive with all Photos & Videos",
    ],
  },
  {
    id: "royal",
    name: "Royal Package",
    price: "Ksh 120,000",
    summary: "Complete premium coverage for the full wedding experience.",
    features: [
      "3 Photographers",
      "3 Videographers",
      "Drone Coverage",
      "Live Streaming on YouTube/Facebook",
      "Unlimited Edited Photos",
      "Cinematic Wedding Trailer",
      "Full Edited Wedding Film",
      "Pre-Wedding Photoshoot",
      "E-card Invitation Design (Video Option)",
      "3 Mounted Photos (A3, A2 & A1 Sizes)",
      "Premium Photobook (30 Pages)",
      "64GB Flash Drive with all Photos & Videos",
    ],
  },
];
