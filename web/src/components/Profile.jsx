import { motion } from "framer-motion";
import { publicAsset } from "../lib/publicAsset.js";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";
import { GlowButton } from "./ui/GlowButton";

export function Profile() {
  return (
    <section id="profil" className="relative border-t border-white/[0.06] bg-cyber-bg2/40 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,229,255,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <SectionTitle
            title="Profil"
            subtitle="Parcours, ambitions et expérience — une approche orientée qualité et collaboration."
          />
        </Reveal>

        <Reveal className="mt-16" delay={0.06}>
          <Card hover={false} className="overflow-hidden p-0">
            <div className="flex flex-col gap-10 p-8 md:flex-row md:items-start md:gap-12 md:p-10 lg:p-12">
              <motion.div
                className="relative mx-auto shrink-0 md:mx-0"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-cyan/40 to-neon-violet/40 opacity-80 blur-lg" />
                <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-white/[0.1] bg-cyber-bg shadow-glow-cyan md:h-48 md:w-48">
                  <img
                    src={publicAsset("/assets/img/profile-portrait.png")}
                    alt="Portrait de MESTAOUI Salah"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </motion.div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-2xl font-semibold text-content-primary">À propos de moi</h3>
                <p className="font-body mt-4 text-base leading-[1.75] text-content-secondary">
                  Je m&apos;appelle MESTAOUI Salah et je suis en BTS SIO option SLAM. J&apos;accompagne la
                  conception et l&apos;évolution d&apos;applications web au sein d&apos;un contexte agile, avec
                  une attention portée à la qualité, à la sécurité et à la maintenabilité.
                </p>
                <p className="font-body mt-4 text-base leading-[1.75] text-content-secondary">
                  Mon objectif est de poursuivre en L3 MIAGE pour renforcer mes compétences en ingénierie des
                  systèmes d&apos;information et en gestion de projet, tout en restant proche du terrain
                  technique.
                </p>
                <div className="mt-8">
                  <GlowButton href={publicAsset("/assets/docs/cvCanva.pdf")} variant="violet" external>
                    Consulter le CV (PDF)
                  </GlowButton>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
