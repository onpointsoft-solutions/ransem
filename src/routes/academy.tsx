import { createFileRoute, Link } from "@tanstack/react-router";
import { academyClasses } from "@/data/academy";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Ransem Media Skills Academy - Ransem Studios" },
      {
        name: "description",
        content:
          "Ransem Media Skills Academy trains young creators in photography, videography, storytelling, live streaming, design, lighting, sound, and drone piloting.",
      },
      { property: "og:title", content: "Ransem Media Skills Academy - Ransem Studios" },
      { property: "og:description", content: "Media skills training at Ransem Studio within Kabarak University Student Centre and online." },
      { property: "og:url", content: "/academy" },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
  component: AcademyPage,
});

function AcademyPage() {
  return (
    <div className="min-h-screen">
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">Join Our Classes</span>
          <h1 className="mb-6 font-serif text-5xl md:text-7xl">Ransem Media Skills Academy</h1>
          <p className="max-w-2xl text-brand-white/60">
            Ransem Studio's media training program inspires and equips young minds with essential skills in photography,
            videography, storytelling, and more.
          </p>
        </div>
      </section>

      <section className="bg-brand-white px-6 py-24 text-brand-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-4xl">Hands-on media training</h2>
              <p className="text-brand-black/70">
                Our structured curriculum, held at the Ransem Studio within Kabarak University Student Centre and also
                online, takes students from foundational principles in media to advanced techniques in sound
                engineering, lighting, and drone piloting.
              </p>
            </div>
            <div>
              <h2 className="mb-6 font-serif text-4xl">Real-world confidence</h2>
              <p className="text-brand-black/70">
                Through interactive learning, participants explore scriptwriting, live streaming, graphic design, and
                social media marketing. Experienced media professionals emphasize collaboration, mentorship, real
                projects, and polished portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-black px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {academyClasses.map((cls) => (
              <div
                key={cls.id}
                className={`relative flex flex-col border p-8 transition-colors ${
                  cls.popular ? "border-2 border-brand-gold bg-brand-gold/5" : "border-brand-white/10 hover:border-brand-gold"
                }`}
              >
                {cls.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold px-4 py-1 text-[10px] font-bold uppercase tracking-tighter text-brand-black">
                    Featured
                  </div>
                )}
                <span className={`mb-4 text-xs uppercase tracking-widest ${cls.popular ? "text-brand-gold" : "text-brand-gold/50"}`}>
                  {cls.level}
                </span>
                <h3 className="mb-4 font-serif text-2xl">{cls.title}</h3>
                <p className="mb-8 text-sm text-brand-white/60">{cls.description}</p>
                <ul className="mb-10 space-y-3 text-xs text-brand-white/80">
                  {cls.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <div className="size-1 bg-brand-gold" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="mb-2 text-xs uppercase tracking-widest text-brand-white/40">{cls.duration}</div>
                  <div className="mb-6 font-serif text-3xl">{cls.price}</div>
                  <Link
                    to="/contact"
                    className={`block w-full py-4 text-center text-xs font-bold uppercase tracking-widest transition-all ${
                      cls.popular
                        ? "bg-brand-gold text-brand-black hover:bg-brand-white"
                        : "border border-brand-white/20 text-brand-white hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black"
                    }`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
