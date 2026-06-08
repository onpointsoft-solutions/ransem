import { useState } from "react";
import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Ransem Studios" },
      {
        name: "description",
        content:
          "Contact Ransem Studios in Kabarak, Nakuru City for photography, videography, livestreaming, aerial coverage, graphic design, or academy enrollment.",
      },
      { property: "og:title", content: "Contact - Ransem Studios" },
      { property: "og:description", content: "Reach Ransem Studios at vransem@gmail.com or +254724740854." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">Contact</span>
          <h1 className="mb-6 font-serif text-5xl md:text-7xl">Embark on a visual adventure with us.</h1>
          <p className="max-w-xl text-brand-white/60">
            Partner with Ransem Studios, where creativity, mentorship, and professionalism converge to create lasting
            memories.
          </p>
        </div>
      </section>

      <section className="bg-brand-white px-6 py-24 text-brand-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="space-y-10">
              <div>
                <h2 className="mb-8 font-serif text-4xl md:text-5xl">
                  Join us where passion meets <span className="italic text-brand-gold">professionalism.</span>
                </h2>
                <p className="text-brand-black/70">
                  Your talents are not just recognized but celebrated. Director David Kituyi and the Ransem team help
                  young talents explore the possibilities of photography, videography, and live streaming.
                </p>
              </div>
              <div className="space-y-6">
                <ContactItem number="01" title="Location">
                  Kabarak, Nakuru City
                </ContactItem>
                <ContactItem number="02" title="Email">
                  vransem@gmail.com
                </ContactItem>
                <ContactItem number="03" title="Phone">
                  +254724740854
                </ContactItem>
                <ContactItem number="04" title="Social">
                  Facebook, YouTube, Instagram, and Twitter
                </ContactItem>
              </div>
            </div>

            <div className="bg-brand-black p-8 text-brand-white md:p-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-6 text-6xl text-brand-gold">&#10003;</div>
                  <h3 className="mb-4 font-serif text-2xl">Message Sent</h3>
                  <p className="mb-8 text-sm text-brand-white/60">
                    Thank you for reaching out. The Ransem Studios team will get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-brand-white/20 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:border-brand-gold hover:text-brand-gold"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-brand-white/40">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full border-b border-brand-white/20 bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-brand-white/20 focus:border-brand-gold"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-brand-white/40">Phone</label>
                      <input
                        type="tel"
                        className="w-full border-b border-brand-white/20 bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-brand-white/20 focus:border-brand-gold"
                        placeholder="+254..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-brand-white/40">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full border-b border-brand-white/20 bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-brand-white/20 focus:border-brand-gold"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-brand-white/40">
                      What are you interested in?
                    </label>
                    <select className="w-full border-b border-brand-white/20 bg-transparent py-2 text-sm outline-none transition-colors focus:border-brand-gold">
                      <option className="bg-brand-black">Photography</option>
                      <option className="bg-brand-black">Videography</option>
                      <option className="bg-brand-black">Livestreaming</option>
                      <option className="bg-brand-black">Aerial Coverage</option>
                      <option className="bg-brand-black">Graphic Design</option>
                      <option className="bg-brand-black">Ransem Media Skills Academy</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-brand-white/40">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full border-b border-brand-white/20 bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-brand-white/20 focus:border-brand-gold"
                      placeholder="Tell us about your event, class interest, or project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-gold py-4 text-xs font-bold uppercase tracking-widest text-brand-black transition-colors hover:bg-brand-white"
                  >
                    Contact Us
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="pt-1 text-xs font-bold text-brand-gold">{number}</div>
      <div>
        <h4 className="mb-1 text-sm font-bold uppercase tracking-widest">{title}</h4>
        <p className="text-sm text-brand-black/60">{children}</p>
      </div>
    </div>
  );
}
