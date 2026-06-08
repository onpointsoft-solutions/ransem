import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { servicePackages } from "@/data/servicePackages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services and Rates - Ransem Studios" },
      {
        name: "description",
        content:
          "Ransem Studios services include photography, videography, livestreaming, aerial coverage, and graphic design for events and brands.",
      },
      { property: "og:title", content: "Services and Rates - Ransem Studios" },
      {
        property: "og:description",
        content: "Photography, videography, livestreaming, aerial coverage, and graphic design services.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-brand-gold">Our Services</span>
          <h1 className="mb-6 font-serif text-5xl md:text-7xl">Our goal is to ensure your satisfaction.</h1>
          <p className="max-w-xl text-brand-white/60">
            Photography, livestreaming, videography, aerial coverage, and graphic design for moments that deserve
            professional attention.
          </p>
        </div>
      </section>

      <section className="bg-brand-white px-6 py-24 text-brand-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-xs uppercase tracking-[0.3em] text-brand-gold">
                Wedding Packages
              </span>
              <h2 className="max-w-3xl font-serif text-4xl md:text-5xl">
                Photography and videography packages for your day.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-brand-black/60">
              Choose a package by crew size, coverage depth, delivery format, and livestreaming needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {servicePackages.map((pkg) => (
              <article
                key={pkg.id}
                className={`flex min-h-full flex-col border p-6 ${
                  pkg.featured
                    ? "border-brand-gold bg-brand-black text-brand-white"
                    : "border-brand-black/10 bg-brand-white text-brand-black"
                }`}
              >
                <div className="mb-6">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="font-serif text-3xl">{pkg.name}</h3>
                    {pkg.featured && (
                      <span className="shrink-0 bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-black">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className={`mb-5 text-sm ${pkg.featured ? "text-brand-white/60" : "text-brand-black/60"}`}>
                    {pkg.summary}
                  </p>
                  <div className="font-serif text-4xl text-brand-gold">{pkg.price}</div>
                </div>

                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex gap-3 text-sm leading-snug ${
                        pkg.featured ? "text-brand-white/80" : "text-brand-black/75"
                      }`}
                    >
                      <span className="mt-2 size-1.5 shrink-0 bg-brand-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-auto block px-6 py-3 text-center text-xs font-bold uppercase tracking-widest transition-all ${
                    pkg.featured
                      ? "bg-brand-gold text-brand-black hover:bg-brand-white"
                      : "border border-brand-black text-brand-black hover:border-brand-gold hover:bg-brand-gold"
                  }`}
                >
                  Book Package
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white px-6 py-24 text-brand-black md:px-8">
        <div className="mx-auto max-w-7xl space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <span className="mb-2 block text-[10px] uppercase tracking-widest text-brand-black/40">
                  {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
                <h2 className="mb-4 font-serif text-4xl">{service.title}</h2>
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-gold">{service.subtitle}</p>
                <p className="mb-8 text-brand-black/60">{service.description}</p>
                <ul className="mb-8 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-brand-black/80">
                      <div className="size-1.5 bg-brand-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block border border-brand-black px-8 py-3 text-xs font-bold uppercase tracking-widest text-brand-black transition-all hover:border-brand-gold hover:bg-brand-gold"
                >
                  Book Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
