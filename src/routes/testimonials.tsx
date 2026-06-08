import { useState, useEffect, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { testimonials } from "@/data/testimonials";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials - Ransem Studios" },
      { name: "description", content: "Client and student reflections about Ransem Studios photography, videography, event coverage, and academy mentorship." },
      { property: "og:title", content: "Testimonials - Ransem Studios" },
      { property: "og:description", content: "Hear what our clients and students say about working with Ransem Studios." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [
      { rel: "canonical", href: "/testimonials" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const currentTestimonial = testimonials[current];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">Client Stories</span>
          <h1 className="mb-6 font-serif text-5xl md:text-7xl">Testimonials</h1>
          <p className="max-w-xl text-brand-white/60">
            Words from the brands, couples, and creators we've had the privilege to work with.
          </p>
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-brand-black px-6 py-32 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-12 font-serif text-6xl text-brand-gold">"</div>
          <blockquote className="mb-10 min-h-[120px] font-serif text-2xl leading-tight italic md:text-4xl">
            {currentTestimonial.quote}
          </blockquote>
          <div className="mb-12">
            <div className="mb-1 text-sm font-bold uppercase tracking-widest text-brand-white">
              {currentTestimonial.name}
            </div>
            <div className="text-xs text-brand-gold">
              {currentTestimonial.title}, {currentTestimonial.company}
            </div>
            <div className="mt-3 flex justify-center gap-1">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#C5A059">
                  <path d="M8 0L9.796 5.528H15.608L10.906 8.944L12.702 14.472L8 11.056L3.298 14.472L5.094 8.944L0.392 5.528H6.204L8 0Z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex size-12 items-center justify-center border border-brand-white/20 text-brand-white transition-colors hover:border-brand-gold hover:text-brand-gold"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 10H5M5 10L10 5M5 10L10 15" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`size-2 rounded-full transition-colors ${
                    i === current ? "bg-brand-gold" : "bg-brand-white/20 hover:bg-brand-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex size-12 items-center justify-center border border-brand-white/20 text-brand-white transition-colors hover:border-brand-gold hover:text-brand-gold"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 10H15M15 10L10 5M15 10L10 15" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="bg-brand-white px-6 py-24 text-brand-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center font-serif text-4xl">All Reviews</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="border border-brand-black/10 p-8 transition-colors hover:border-brand-gold">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#C5A059">
                      <path d="M8 0L9.796 5.528H15.608L10.906 8.944L12.702 14.472L8 11.056L3.298 14.472L5.094 8.944L0.392 5.528H6.204L8 0Z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-sm italic leading-relaxed text-brand-black/70">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-brand-black/50">
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
