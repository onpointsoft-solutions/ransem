import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import ransemLogo from "@/assets/ransem-logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "Our Team" },
    { to: "/academy", label: "Academy" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Gallery" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-white/10 bg-brand-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3 text-2xl font-serif font-bold tracking-tighter">
          <img src={ransemLogo} alt="RANSEM STUDIOS" className="h-12 w-auto" />
          <span className="text-brand-gold">RANSEM</span>
          <span className="text-brand-white">STUDIOS</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                isActive(link.to) ? "text-brand-gold" : "text-brand-white hover:text-brand-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 border border-brand-gold text-brand-gold text-xs uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-brand-black transition-all"
          >
            Book Session
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-brand-gold p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-brand-white/10 bg-brand-black px-6 py-8 space-y-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                isActive(link.to) ? "text-brand-gold" : "text-brand-white hover:text-brand-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block px-6 py-2.5 border border-brand-gold text-brand-gold text-xs uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-brand-black transition-all"
          >
            Book Session
          </Link>
        </div>
      )}
    </nav>
  );
}
