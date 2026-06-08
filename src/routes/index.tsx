import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { academyClasses } from "@/data/academy";
import { testimonials } from "@/data/testimonials";
import { stats } from "@/data/stats";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ransem Studios - Where Passion Poses with Professionalism" },
      {
        name: "description",
        content:
          "Ransem Studios offers photography, videography, livestreaming, aerial coverage, graphic design, and media skills training from Kabarak, Nakuru City.",
      },
      { property: "og:title", content: "Ransem Studios - Where Passion Poses with Professionalism" },
      {
        property: "og:description",
        content:
          "Photography, videography, livestreaming, aerial coverage, graphic design, and media skills training.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <section className="relative flex min-h-[calc(100vh-89px)] items-center overflow-hidden px-6 py-20 md:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Ransem Studios event media production"
            className="h-full w-full object-cover object-center"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/75 to-brand-black/20" />
          <div className="absolute inset-0 bg-brand-black/25" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-2">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.4em] text-brand-gold">
            Kabarak, Nakuru City
          </span>
          <h1 className="mb-8 font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
            Ransem Studios.
            <br />
            <span className="italic text-brand-gold">Where passion poses with professionalism.</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-brand-white/70">
            Guided by the visionary leadership of director David Kituyi, our mission is to empower and mentor
            emerging talents in photography, videography, and live streaming.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-brand-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-brand-black transition-colors hover:bg-brand-white md:px-10"
            >
              Book
            </Link>
            <Link
              to="/about"
              className="border border-brand-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-brand-white transition-colors hover:border-brand-gold md:px-10"
            >
              Know Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-white px-6 py-24 text-brand-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">Greetings</span>
              <h2 className="mb-6 font-serif text-4xl">Welcome to Ransem Studios</h2>
              <p className="text-brand-black/70">
                We believe in fostering an environment where young talents can flourish, express their unique
                perspectives, and contribute to the vibrant tapestry of the visual arts.
              </p>
            </div>
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">
                Framing moments in time
              </span>
              <h2 className="mb-6 font-serif text-4xl">Through the Lens of Our Journey</h2>
              <p className="text-brand-black/70">
                Over the years, Ransem Studios has cultivated a team of skilled professionals specializing in event
                coverage for weddings, funerals, corporate functions, graduations, birthdays, and more.
              </p>
            </div>
          </div>

          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-brand-gold">Our Services</span>
              <h2 className="mb-4 font-serif text-4xl">Our goal is to ensure your satisfaction.</h2>
              <div className="h-1 w-20 bg-brand-gold" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <Link key={service.id} to="/services" className="group relative aspect-[3/4] overflow-hidden bg-brand-black">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1067}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-black to-transparent p-8 text-brand-white">
                  <h3 className="mb-2 font-serif text-xl">{service.title}</h3>
                  <p className="mb-4 text-xs text-brand-white/60 opacity-0 transition-opacity group-hover:opacity-100">
                    {service.subtitle}
                  </p>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">See Details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">Join Our Classes</span>
            <h2 className="mb-4 font-serif text-4xl">Ransem Media Skills Academy</h2>
            <p className="mx-auto max-w-3xl text-brand-white/50">
              Our structured curriculum, held at Ransem Studio within Kabarak University Student Centre and online,
              takes students from foundational media principles to advanced techniques in sound engineering, lighting,
              and drone piloting.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {academyClasses.map((cls) => (
              <div
                key={cls.id}
                className={`flex flex-col border p-8 transition-colors ${
                  cls.popular ? "border-2 border-brand-gold bg-brand-gold/5" : "border-brand-white/10 hover:border-brand-gold"
                }`}
              >
                <span className={`mb-4 text-xs uppercase tracking-widest ${cls.popular ? "text-brand-gold" : "text-brand-gold/50"}`}>
                  {cls.level}
                </span>
                <h3 className="mb-4 font-serif text-2xl">{cls.title}</h3>
                <p className="mb-8 text-sm text-brand-white/60">{cls.description}</p>
                <ul className="mb-10 space-y-3 text-xs text-brand-white/80">
                  {cls.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="size-1 bg-brand-gold" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="mb-6 font-serif text-2xl">{cls.price}</div>
                  <Link
                    to="/academy"
                    className={`block w-full py-4 text-center text-xs font-bold uppercase tracking-widest transition-all ${
                      cls.popular
                        ? "bg-brand-gold text-brand-black"
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

      <section className="border-y border-brand-white/10 bg-brand-black px-6 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mb-2 font-serif text-4xl text-brand-gold md:text-5xl">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-brand-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-black px-6 py-32 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-12 font-serif text-5xl text-brand-gold">"</div>
          <blockquote className="mb-10 font-serif text-3xl leading-tight italic md:text-5xl">
            {testimonials[0].quote}
          </blockquote>
          <div className="text-xs uppercase tracking-[0.2em]">
            <span className="font-bold text-brand-white">{testimonials[0].name}</span>
            <span className="text-brand-white/50"> - {testimonials[0].title}</span>
          </div>
        </div>
      </section>

      <section className="bg-brand-white px-6 py-24 text-brand-black md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 font-serif text-4xl md:text-5xl">
              Embark on a visual <span className="italic text-brand-gold">adventure with us.</span>
            </h2>
            <p className="mb-8 text-brand-black/70">
              Partner with Ransem Studios, where creativity, mentorship, and professionalism converge to create lasting
              memories.
            </p>
            <div className="space-y-4 text-sm">
              <p>
                <strong>Studio:</strong> Kabarak, Nakuru City
              </p>
              <p>
                <strong>Email:</strong> vransem@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +254724740854
              </p>
            </div>
          </div>
          <div className="bg-brand-black p-8 text-brand-white md:p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.2em]">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b border-brand-white/20 bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-brand-white/20 focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.2em]">Service Required</label>
                <select className="w-full border-b border-brand-white/20 bg-transparent py-2 text-sm outline-none transition-colors focus:border-brand-gold">
                  <option className="bg-brand-black">Photography</option>
                  <option className="bg-brand-black">Videography</option>
                  <option className="bg-brand-black">Livestreaming</option>
                  <option className="bg-brand-black">Aerial Coverage</option>
                  <option className="bg-brand-black">Graphic Design</option>
                  <option className="bg-brand-black">Academy Enrollment</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.2em]">Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision..."
                  className="w-full border-b border-brand-white/20 bg-transparent py-2 text-sm outline-none transition-colors placeholder:text-brand-white/20 focus:border-brand-gold"
                />
              </div>
              <Link
                to="/contact"
                className="block w-full bg-brand-gold py-4 text-center text-xs font-bold uppercase tracking-widest text-brand-black transition-colors hover:bg-brand-white"
              >
                Contact Us
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
