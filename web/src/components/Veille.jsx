import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";

const keywords = ["Veille structurée", "IA & développement", "GitHub Copilot", "Qualité & sécurité"];

export function Veille() {
  return (
    <section id="veille" className="relative border-t border-white/[0.06] bg-cyber-bg2/35 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(236,72,153,0.05),transparent)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
        <Reveal>
          <SectionTitle
            title="Veille technologique"
            subtitle="Méthode, sources et thématiques — rigueur et veille continue sur l’évolution du métier."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {keywords.map((k) => (
            <span
              key={k}
              className="font-body rounded-full border border-neon-cyan/25 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold text-neon-cyan"
            >
              {k}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
              <Card className="h-full p-8">
                <h3 className="font-display text-lg font-semibold text-content-primary">Pourquoi la veille ?</h3>
                <p className="font-body mt-4 text-sm font-normal leading-[1.75] text-content-secondary">
                  La veille permet d&apos;identifier les évolutions d&apos;un secteur, d&apos;anticiper les
                  tendances et d&apos;adapter ses compétences aux exigences du marché.
                </p>
                <p className="font-body mt-4 text-sm font-normal leading-[1.75] text-content-secondary">
                  Dans le cadre de ma formation, je structure une veille sur l&apos;{" "}
                  <span className="font-medium text-neon-violet">intelligence artificielle</span> appliquée au{" "}
                  <span className="font-medium text-neon-cyan">développement logiciel</span>.
                </p>
              </Card>
            </motion.div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
              <Card className="h-full p-8">
                <h3 className="font-display text-lg font-semibold text-content-primary">Organisation</h3>
                <p className="font-body mt-4 text-sm font-normal leading-[1.75] text-content-secondary">
                  J&apos;utilise notamment{" "}
                  <a
                    href="https://feedly.com/i/my/me"
                    className="font-medium text-neon-cyan underline decoration-neon-cyan/40 underline-offset-4 transition hover:text-neon-violet"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Feedly
                  </a>{" "}
                  et des sources spécialisées ; je trie, analyse et synthétise les éléments pertinents chaque
                  semaine (Notion, Drive).
                </p>
              </Card>
            </motion.div>
          </Reveal>
        </div>

        <Reveal className="mt-6" delay={0.12}>
          <Card className="p-8">
            <h3 className="font-display text-lg font-semibold text-content-primary">
              Thème : IA & développement logiciel
            </h3>
            <p className="font-body mt-4 text-sm font-normal leading-[1.75] text-content-secondary">
              Les outils d&apos;assistance (ex.{" "}
              <span className="font-medium text-content-primary">GitHub Copilot</span>) accélèrent la production
              mais imposent une <span className="font-medium text-neon-rose">validation humaine</span>, une
              attention à la <span className="font-medium text-neon-cyan">sécurité</span> et à la{" "}
              <span className="font-medium text-neon-violet">maintenabilité</span> du code.
            </p>
            <p className="font-body mt-4 text-sm font-normal leading-[1.75] text-content-secondary">
              Le développeur se positionne davantage comme superviseur et expert : arbitrage, relecture et
              amélioration continue plutôt que simple saisie ligne à ligne.
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
