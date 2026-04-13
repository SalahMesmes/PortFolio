import { useState } from "react";
import { motion } from "framer-motion";
import { publicAsset } from "../lib/publicAsset.js";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./ui/SectionTitle";
import { featuredProjects } from "../data/projects";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-cyber-bg2/60 shadow-card backdrop-blur-card transition hover:border-white/[0.12]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="font-display flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-content-primary transition hover:bg-white/[0.03]"
      >
        {title}
        <motion.span animate={{ rotate: open ? 90 : 0 }} className="text-xl text-neon-cyan" aria-hidden>
          ▸
        </motion.span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.06] px-6 py-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Realisations() {
  return (
    <section
      id="xpPro"
      className="relative border-t border-white/[0.06] bg-cyber-bg2/30 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(0,229,255,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(168,85,247,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <SectionTitle
            title="Réalisations"
            subtitle="Projets d’alternance, de stage et de formation — extraits et livrables clés."
          />
          <p className="font-body mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-content-secondary">
            Au cours de ma préparation au BTS SIO option SLAM, j&apos;ai réalisé plusieurs projets en alternance
            et en atelier. Ces réalisations couvrent les blocs de compétences du référentiel.
          </p>
          <div className="mt-8 flex justify-center">
            <motion.a
              href={encodeURI(publicAsset("/assets/docs/épreuve E5.pdf"))}
              target="_blank"
              rel="noreferrer noopener"
              className="font-body inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-content-primary backdrop-blur-sm transition hover:border-neon-cyan/35 hover:shadow-glow-cyan"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Tableau de synthèse — épreuve E5
            </motion.a>
          </div>
        </Reveal>

        <div className="mt-16 space-y-4">
          <Accordion title="Alternance — PRO BTP, Cagnes-sur-Mer">
            <div className="space-y-6 text-justify">
              <div className="flex flex-col gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 md:flex-row md:items-start">
                <img
                  src={encodeURI(publicAsset("/assets/img/logo probtp.png"))}
                  alt="PRO BTP"
                  className="mx-auto h-auto w-36 rounded-xl md:mx-0"
                />
                <div>
                  <h4 className="font-display font-semibold text-neon-cyan">Présentation</h4>
                  <p className="font-body mt-2 text-sm leading-relaxed">
                    PRO BTP est un groupe de protection sociale majeur pour les professionnels du BTP. J&apos;ai
                    intégré la DSADI, département Retraite, pour la maintenance et l&apos;évolution de
                    l&apos;application des individus (Agirc-Arrco), en Agile.
                  </p>
                </div>
              </div>
              <p className="font-body text-sm leading-relaxed">
                <strong className="font-semibold text-content-primary">Projet ESAA — restriction d&apos;accès :</strong>{" "}
                conception d&apos;un service pour bloquer ou débloquer l&apos;accès au portail en cas
                d&apos;incidents VDCP, avec tickets JIRA, Confluence, Spring, Angular et AngularJS.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src={encodeURI(publicAsset("/assets/img/digr.png"))}
                  alt="Organigramme"
                  className="rounded-xl border border-white/[0.08] shadow-lg"
                  loading="lazy"
                />
                <img
                  src={encodeURI(publicAsset("/assets/img/tuile.png"))}
                  alt="Tuile Private Office"
                  className="rounded-xl border border-white/[0.08] shadow-lg"
                  loading="lazy"
                />
              </div>
              <motion.a
                href={publicAsset(
                  "/assets/docs/EB_Service_de_restriction_d_acces_a_ESAA_dans_le_cadre_des_incidents_VDCP_v2 (1) (1).pdf"
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="font-body inline-flex rounded-full bg-gradient-to-r from-neon-violet to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-violet"
                whileHover={{ scale: 1.02 }}
              >
                Expression de besoin (PDF)
              </motion.a>
            </div>
          </Accordion>

          <Accordion title="Stage — CEFOR G, Nice">
            <p className="font-body text-justify leading-relaxed">
              Stage de trois mois : conception d&apos;une application de gestion des stagiaires (suivi,
              utilisateurs, programmes). Découverte du cycle complet de développement en équipe restreinte.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <img
                src={encodeURI(publicAsset("/assets/img/stage1.png"))}
                alt=""
                className="rounded-xl border border-white/[0.08] shadow-md"
                loading="lazy"
              />
              <img
                src={encodeURI(publicAsset("/assets/img/utlisateur.png"))}
                alt=""
                className="rounded-xl border border-white/[0.08] shadow-md"
                loading="lazy"
              />
              <img
                src={encodeURI(publicAsset("/assets/img/programmes1.png"))}
                alt=""
                className="rounded-xl border border-white/[0.08] shadow-md"
                loading="lazy"
              />
            </div>
          </Accordion>

          <Accordion title="Projets de formation" defaultOpen>
            <p className="font-body mb-10 text-center text-content-secondary">
              Sélection de projets — survolez une carte pour l&apos;élévation et le glow.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
