export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Partner with us at Ransem Studios, where creativity, mentorship, and professionalism converge to create lasting memories.",
    name: "Ransem Studios",
    title: "Creative Team",
    company: "Kabarak, Nakuru City",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Our mission is to empower and mentor emerging talents in photography, videography, and live streaming.",
    name: "David Kituyi",
    title: "Director",
    company: "Ransem Studios",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "We believe in fostering an environment where young talents can flourish and express their unique perspectives.",
    name: "Ransem Media Skills Academy",
    title: "Media Training Program",
    company: "Ransem Studios",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Over the years, Ransem Studios has cultivated a team of skilled professionals specializing in event coverage.",
    name: "Ransem Studios",
    title: "Event Coverage Team",
    company: "Kabarak, Nakuru City",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Join us and turn your passion for media into real-world skills.",
    name: "Ransem Media Skills Academy",
    title: "Foundation, Intermediate, and Advanced Classes",
    company: "Ransem Studios",
    rating: 5,
  },
];
