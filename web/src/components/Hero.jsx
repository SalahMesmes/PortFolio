import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { publicAsset } from "../lib/publicAsset.js";
import { GlowButton } from "./ui/GlowButton";

const imgHero = encodeURI(publicAsset("/assets/img/accueil-hero.png"));

export function Hero() {
  const subtitle =
    "Développement web & applications — BTS SIO option SLAM, rigueur, veille et méthodes agiles.";
  const { display: typed, done: typingDone } = useTypewriter(subtitle, 26, 800);

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-cyber-bg"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" aria-hidden />
      <div
        className="animate-grid-drift animate-shimmer-slow pointer-events-none absolute inset-0 opacity-40 [background-size:48px_48px] bg-grid-cyber"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-cover bg-left bg-no-repeat opacity-90"
        style={{
          backgroundImage: `linear-gradient(105deg, rgba(5,8,22,0.92) 0%, rgba(15,23,42,0.55) 45%, rgba(5,8,22,0.35) 100%), url(${imgHero})`,
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-neon-cyan/10 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-1/4 h-64 w-64 rounded-full bg-neon-violet/10 blur-[90px]" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-body mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-neon-cyan/90 sm:text-sm">
            Développeur web & logiciel
          </p>
          <h1 className="font-display text-hero text-balance text-content-primary">
            MESTAOUI Salah
          </h1>
          <p className="font-body mt-6 max-w-2xl text-base font-normal leading-relaxed text-content-secondary sm:text-lg md:text-xl">
            {typed}
            {!typingDone && (
              <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-neon-cyan align-middle" />
            )}
          </p>
          <p className="font-body mt-4 max-w-xl text-sm font-medium text-content-secondary/90">
            Conception, maintenance et évolution d&apos;applications — stack moderne, travail en équipe,
            qualité de code.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <GlowButton href="#profil" variant="cyan">
              Découvrir mon parcours
            </GlowButton>
            <GlowButton href="#xpPro" variant="outline">
              Voir les réalisations
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
