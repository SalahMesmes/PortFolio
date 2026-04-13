import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui/SectionTitle";
import { timelineItems } from "../data/timeline";

const TYPE_STYLES = {
  alternance: {
    dot: "bg-neon-cyan shadow-[0_0_16px_rgba(0,229,255,0.45)]",
    badge: "border-neon-cyan/35 bg-neon-cyan/10 text-neon-cyan",
    ring: "ring-1 ring-neon-cyan/20",
  },
  stage: {
    dot: "bg-neon-violet shadow-[0_0_16px_rgba(168,85,247,0.45)]",
    badge: "border-neon-violet/35 bg-neon-violet/10 text-neon-violet",
    ring: "ring-1 ring-neon-violet/20",
  },
  formation: {
    dot: "bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.4)]",
    badge: "border-cyan-400/35 bg-cyan-400/10 text-cyan-200",
    ring: "ring-1 ring-cyan-400/15",
  },
  diplome: {
    dot: "bg-neon-rose shadow-[0_0_16px_rgba(236,72,153,0.4)]",
    badge: "border-neon-rose/35 bg-neon-rose/10 text-neon-rose",
    ring: "ring-1 ring-neon-rose/20",
  },
};

const TYPE_LABEL = {
  alternance: "Alternance",
  stage: "Stage",
  formation: "Formation",
  diplome: "Diplôme",
};

function TimelineCard({ item, index }) {
  const st = TYPE_STYLES[item.type] ?? TYPE_STYLES.formation;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`relative rounded-2xl border border-white/[0.08] bg-cyber-bg2/65 p-6 shadow-card backdrop-blur-card transition duration-300 hover:border-white/[0.14] ${st.ring}`}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <span
          className={`inline-flex rounded-full border px-2.5 py-0.5 font-body text-xs font-semibold uppercase tracking-wide ${st.badge}`}
        >
          {TYPE_LABEL[item.type] ?? item.type}
        </span>
        <span className="font-body text-xs font-medium text-content-secondary">{item.period}</span>
      </div>
      <h3 className="font-display text-lg font-semibold text-content-primary">{item.title}</h3>
      <p className="font-body mt-2 text-sm leading-relaxed text-content-secondary">{item.detail}</p>
    </motion.article>
  );
}

export function Timeline() {
  return (
    <section id="formation" className="relative border-t border-white/[0.06] bg-cyber-bg py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(168,85,247,0.07),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <SectionTitle
            title="Formations & expériences"
            subtitle="Parcours structuré : alternance, stage, formation et diplôme — chaque étape avec son contexte."
          />
        </Reveal>

        {/* Desktop : ligne lumineuse + points */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-8 right-8 top-9 h-[2px] rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-rose opacity-55" />
          <div className="grid grid-cols-4 gap-5 pt-2">
            {timelineItems.map((item, i) => {
              const st = TYPE_STYLES[item.type] ?? TYPE_STYLES.formation;
              return (
                <div key={item.period + item.title} className="flex flex-col items-center">
                  <div
                    className={`z-10 mb-5 h-3.5 w-3.5 shrink-0 rounded-full border-[3px] border-cyber-bg ${st.dot}`}
                  />
                  <TimelineCard item={item} index={i} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablette : grille 2 col */}
        <div className="relative mt-16 hidden gap-6 md:grid md:grid-cols-2 lg:hidden">
          {timelineItems.map((item, i) => (
            <TimelineCard key={item.period + item.title} item={item} index={i} />
          ))}
        </div>

        {/* Mobile : timeline verticale */}
        <div className="relative mt-16 space-y-0 md:hidden">
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-rose opacity-60" />
          <div className="space-y-6">
            {timelineItems.map((item, i) => {
              const st = TYPE_STYLES[item.type] ?? TYPE_STYLES.formation;
              return (
                <div key={item.period + item.title} className="relative pl-10">
                  <div
                    className={`absolute left-0 top-6 z-10 h-3 w-3 rounded-full border-2 border-cyber-bg ${st.dot}`}
                  />
                  <TimelineCard item={item} index={i} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
