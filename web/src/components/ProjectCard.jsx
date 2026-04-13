import { motion } from "framer-motion";

export function ProjectCard({ project, index }) {
  const img = encodeURI(project.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 4) * 0.05, duration: 0.5 }}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-cyber-bg2/70 shadow-card backdrop-blur-card transition duration-300 hover:border-neon-cyan/25 hover:shadow-[0_0_40px_-12px_rgba(0,229,255,0.28)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/25 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-content-primary">{project.title}</h3>
        <p className="font-body mt-2 flex-1 text-sm font-normal leading-relaxed text-content-secondary">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 font-body text-xs font-medium text-neon-cyan/95"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="font-body inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-cyan-500 px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-cyber-bg shadow-glow-cyan transition hover:brightness-110 sm:flex-none"
            >
              Voir le projet
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="font-body inline-flex flex-1 items-center justify-center rounded-full border border-white/[0.12] bg-transparent px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-content-primary transition hover:border-neon-violet/40 hover:shadow-glow-violet sm:flex-none"
            >
              Voir le code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
