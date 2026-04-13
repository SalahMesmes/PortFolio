/**
 * Titre de section — Poppins, hiérarchie cohérente avec la charte Cyber Blue.
 */
export function SectionTitle({ title, subtitle, align = "center", className = "" }) {
  const alignCls = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignCls} ${className}`}>
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-content-primary sm:text-4xl md:text-[2.75rem] md:leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`font-body mt-4 max-w-2xl text-base font-normal leading-relaxed text-content-secondary sm:text-lg ${
            align === "center" ? "md:mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden
      />
    </div>
  );
}
