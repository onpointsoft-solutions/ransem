import { createFileRoute } from "@tanstack/react-router";
import { stats } from "@/data/stats";
import davidImage from "@/assets/team-director.jpg";
import bonifaceImage from "@/assets/team-bonny.jpg";
import danImage from "@/assets/team-dan.jpg";
import fredImage from "@/assets/team-fred.jpg";
import beatriceImage from "@/assets/team-beatrice.jpg";
import preciousImage from "@/assets/team-preccious.jpg";
import eveImage from "@/assets/team-eve.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Team - Ransem Studios" },
      {
        name: "description",
        content:
          "Meet the Ransem Studios team and learn about the mission led by director David Kituyi in Kabarak, Nakuru City.",
      },
      { property: "og:title", content: "Our Team - Ransem Studios" },
      {
        property: "og:description",
        content: "Meet the creative team behind Ransem Studios photography, videography, livestreaming, and training.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const team = [
    { name: "David Kituyi", role: "Director", image: davidImage },
    { name: "Boniface Ashiono", role: "Producer", image: bonifaceImage },
    { name: "Dan Sitima", role: "Producer", image: danImage },
    { name: "Fred Michael", role: "Photographer", image: fredImage },
    { name: "Beatrice Kungu", role: "Photographer", image: beatriceImage },
    { name: "Precious Mburu", role: "Photographer", image: preciousImage },
    { name: "Everlyne Kimani", role: "Photographer", image: eveImage },
  ];

  return (
    <div className="min-h-screen">
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">Our Team</span>
          <h1 className="mb-6 font-serif text-5xl md:text-7xl">We've got a well-seasoned team at the helm.</h1>
          <p className="max-w-xl text-brand-white/60">
            Ransem Studios brings together producers, photographers, and mentors committed to creativity,
            professionalism, and lasting memories.
          </p>
        </div>
      </section>

      <section className="bg-brand-white px-6 py-24 text-brand-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">Welcome</span>
              <h2 className="mb-8 font-serif text-4xl">Welcome to Ransem Studios</h2>
              <div className="space-y-6 text-brand-black/70">
                <p>
                  Guided by the visionary leadership of director David Kituyi, our mission is to empower and mentor
                  emerging talents brimming with enthusiasm in photography, videography, and live streaming.
                </p>
                <p>
                  At the heart of our endeavor is a commitment to cultivate creativity, nurture skills, and inspire a
                  new generation of visual storytellers.
                </p>
              </div>
            </div>
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">
                Framing moments in time
              </span>
              <h2 className="mb-8 font-serif text-4xl">Through the Lens of Our Journey</h2>
              <p className="text-brand-black/70">
                Over the years, Ransem Studios has cultivated a team of skilled professionals specializing in event
                coverage. With experience across weddings, funerals, corporate functions, graduations, birthdays, and
                more, we are committed to delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-black px-6 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mb-2 font-serif text-4xl text-brand-gold md:text-5xl">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-brand-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-black px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-center text-xs uppercase tracking-[0.3em] text-brand-gold">Meet Our Team</span>
          <h2 className="mb-16 text-center font-serif text-4xl">Ransem Studios</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto mb-6 aspect-square w-full max-w-64 overflow-hidden border border-brand-white/10 bg-brand-white/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                </div>
                <h3 className="mb-1 font-serif text-lg">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-brand-white/40">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
