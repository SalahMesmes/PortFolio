import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  { id: "accueil", label: "Accueil" },
  { id: "profil", label: "Profil" },
  { id: "formation", label: "Expériences" },
  { id: "xpPro", label: "Réalisations" },
  { id: "skills", label: "Compétences" },
  { id: "veille", label: "Veille" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[1000] transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.08] bg-cyber-bg/80 py-3 shadow-nav backdrop-blur-nav"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex gap-1.5">
            <a
              href="https://profile.indeed.com"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full p-2 text-content-secondary transition hover:bg-white/[0.06] hover:text-neon-cyan"
              title="Indeed"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 256 256" aria-hidden>
                <path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" />
              </svg>
            </a>
            <a
              href="https://github.com/SalahMesmes"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full p-2 text-content-secondary transition hover:bg-white/[0.06] hover:text-neon-violet"
              title="GitHub"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 999.937 999.937" aria-hidden>
                <path d="M0 499.968c0-138.012 48.825-255.843 146.476-353.493C244.125 48.825 361.956 0 499.969 0 637.98 0 755.811 48.825 853.462 146.475c97.649 97.65 146.475 215.481 146.475 353.493s-48.825 255.843-146.475 353.493c-97.65 97.65-215.481 146.476-353.493 146.476-138.013 0-255.844-48.825-353.493-146.476C48.825 755.812 0 637.979 0 499.968z" />
              </svg>
            </a>
          </div>
          <a
            href="#accueil"
            onClick={closeMenu}
            className={`font-display text-base font-bold uppercase tracking-[0.18em] transition sm:text-lg ${
              scrolled ? "text-neon-cyan" : "text-content-primary"
            }`}
          >
            MESTAOUI Salah
          </a>
        </div>

        <button
          type="button"
          className="relative z-[1001] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/[0.1] bg-cyber-bg2/50 backdrop-blur-sm md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 rounded bg-content-primary transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-5 rounded bg-content-primary transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-5 rounded bg-content-primary transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>

        <nav
          className={`fixed inset-x-0 top-[72px] z-[999] mx-4 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-white/[0.08] bg-cyber-bg/95 p-5 shadow-2xl backdrop-blur-nav md:static md:inset-auto md:mx-0 md:max-h-none md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col gap-0.5 md:flex-row md:items-center md:gap-1">
            {links.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    onClick={closeMenu}
                    className={`font-body relative block rounded-xl px-4 py-3 text-sm font-semibold tracking-wide transition md:py-2 ${
                      isActive
                        ? "text-neon-cyan"
                        : "text-content-secondary hover:text-content-primary"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-xl bg-white/[0.06] ring-1 ring-neon-cyan/35 shadow-[0_0_20px_-6px_rgba(0,229,255,0.4)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
