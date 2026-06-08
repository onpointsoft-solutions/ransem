import { useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { portfolioItems, portfolioCategories, type PortfolioCategory } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Gallery - Ransem Studios" },
      { name: "description", content: "Explore Ransem Studios gallery across weddings, graduations, parties, studio shoots, events, and aerial coverage." },
      { property: "og:title", content: "Gallery - Ransem Studios" },
      { property: "og:description", content: "Weddings, graduations, parties, studio shoots, events, and aerial coverage from Ransem Studios." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [
      { rel: "canonical", href: "/portfolio" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = useCallback((image: string, title: string) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">Gallery</span>
          <h1 className="mb-6 font-serif text-5xl md:text-7xl">Ransem Studios Gallery</h1>
          <p className="max-w-xl text-brand-white/60">
            A look through weddings, graduations, parties, studio shoots, aerial coverage, and event moments captured by
            Ransem Studios.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="bg-brand-white px-6 py-24 text-brand-black md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap gap-3">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat.value
                    ? "bg-brand-gold text-brand-black"
                    : "border border-brand-black/20 text-brand-black/60 hover:border-brand-gold hover:text-brand-gold"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => openLightbox(item.image, item.title)}
                className="group relative aspect-[4/5] overflow-hidden bg-brand-black"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-black/80 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="mb-1 text-[10px] uppercase tracking-widest text-brand-gold">{item.category}</span>
                  <h3 className="font-serif text-lg text-brand-white">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/95 p-6"
          onClick={closeLightbox}
        >
          <button
            className="absolute right-6 top-6 text-brand-white/60 hover:text-brand-white"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="8" x2="24" y2="24" />
              <line x1="24" y1="8" x2="8" y2="24" />
            </svg>
          </button>
          <div className="max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt={lightboxTitle} className="max-h-[85vh] w-auto object-contain" />
            <p className="mt-4 text-center text-sm uppercase tracking-widest text-brand-white/60">{lightboxTitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}
