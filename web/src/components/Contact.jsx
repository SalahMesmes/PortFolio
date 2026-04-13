import { Reveal } from "./Reveal";
import { SectionTitle } from "./ui/SectionTitle";
import { GlowButton } from "./ui/GlowButton";

const inputClass =
  "font-body mt-2 w-full rounded-xl border border-white/[0.1] bg-cyber-bg/90 px-4 py-3 text-sm font-normal text-content-primary placeholder:text-content-secondary/50 transition focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/30";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/[0.06] bg-cyber-bg py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyber-bg2/50 to-cyber-bg" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,229,255,0.07),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <SectionTitle
            title="Contact"
            subtitle="Un projet, une alternance ou une question technique — écrivez-moi."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-8" delay={0.05}>
            <div>
              <h3 className="font-display text-lg font-semibold text-content-primary">Coordonnées</h3>
              <p className="font-body mt-2 text-sm text-content-secondary">
                Réponse sous quelques jours ouvrés. Précisez le contexte (offre, sujet technique, etc.).
              </p>
              <div className="mt-8 space-y-6">
                <a
                  href="mailto:mestaouisalaheddine88@gmail.com"
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-cyber-bg2/50 p-5 transition hover:border-neon-cyan/30 hover:shadow-glow-cyan"
                >
                  <span className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-neon-cyan transition group-hover:border-neon-cyan/40">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-content-secondary">
                      Email
                    </p>
                    <p className="font-body mt-1 text-sm font-medium text-content-primary group-hover:text-neon-cyan">
                      mestaouisalaheddine88@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-cyber-bg2/50 p-5">
                  <span className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-neon-violet">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-content-secondary">
                      Localisation
                    </p>
                    <p className="font-body mt-1 text-sm font-medium text-content-primary">Nice</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <GlowButton href="https://profile.indeed.com" variant="outline" external>
                    Indeed
                  </GlowButton>
                  <GlowButton href="https://github.com/SalahMesmes" variant="ghost" external>
                    GitHub
                  </GlowButton>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              action="https://formsubmit.co/7c03e17d26e54a053ac1d06c679c24b0"
              method="POST"
              className="space-y-5 rounded-2xl border border-white/[0.08] bg-cyber-bg2/55 p-8 shadow-card backdrop-blur-card"
            >
              <input type="hidden" name="_subject" value="Nouveau mail depuis le portfolio" />
              <input type="hidden" name="_template" value="table" />
              <label className="font-body block text-sm font-medium text-content-primary">
                Prénom *
                <input type="text" name="prenom" required className={inputClass} placeholder="Votre prénom" />
              </label>
              <label className="font-body block text-sm font-medium text-content-primary">
                Nom *
                <input type="text" name="nom" required className={inputClass} placeholder="Votre nom" />
              </label>
              <label className="font-body block text-sm font-medium text-content-primary">
                Email *
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClass}
                  placeholder="vous@exemple.com"
                />
              </label>
              <label className="font-body block text-sm font-medium text-content-primary">
                Message *
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`${inputClass} resize-y`}
                  placeholder="Votre message"
                />
              </label>
              <GlowButton type="submit" variant="cyan">
                Envoyer le message
              </GlowButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
