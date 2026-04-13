import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui/SectionTitle";
import { skillGroups } from "../data/skills";

function SkillRow({ name, level, icon }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-cyber-bg2/55 p-5 shadow-card backdrop-blur-card transition duration-300 hover:border-neon-violet/20 hover:shadow-[0_0_32px_-10px_rgba(168,85,247,0.2)]">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
          <img src={icon} alt="" className="h-8 w-8 object-contain opacity-95" loading="lazy" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex justify-between gap-2">
            <span className="font-body text-sm font-medium text-content-primary">{name}</span>
            <span className="font-body text-xs font-semibold text-neon-cyan/90">{level}%</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-cyan-400 to-neon-violet"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/[0.06] bg-cyber-bg py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_30%_30%,rgba(0,229,255,0.05),transparent)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
        <Reveal>
          <SectionTitle
            title="Compétences"
            subtitle="Stack technique, outils et niveaux de maîtrise — mis à jour avec la pratique en entreprise et en formation."
          />
        </Reveal>

        <div className="mt-16 space-y-14">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.05}>
              <h3 className="font-display mb-6 text-xl font-semibold text-content-primary">{group.label}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.items.map((s) => (
                  <SkillRow key={s.name} {...s} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
