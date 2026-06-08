import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="border-t border-brand-white/10 bg-brand-black py-12 px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <Link to="/" className="text-xl font-serif font-bold tracking-tighter">
          <span className="text-brand-gold">RANSEM</span>
          <span className="text-brand-white">STUDIOS</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-brand-white/40">
          <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-gold transition-colors">YouTube</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
        </div>
        <div className="text-center text-[10px] uppercase tracking-widest text-brand-white/30">
          <p>Kabarak, Nakuru City | vransem@gmail.com | +254724740854</p>
          <p className="mt-2 text-brand-white/20">Copyright@2023. All rights served by Stairway Tech</p>
        </div>
      </div>
    </footer>
  );
}
