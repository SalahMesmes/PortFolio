import { motion } from "framer-motion";

const variants = {
  cyan: "bg-gradient-to-r from-neon-cyan to-cyan-500 text-cyber-bg shadow-glow-cyan hover:brightness-110",
  violet:
    "bg-gradient-to-r from-neon-violet to-violet-500 text-white shadow-glow-violet hover:brightness-110",
  outline:
    "border border-white/[0.12] bg-cyber-bg2/40 text-content-primary backdrop-blur-sm hover:border-neon-cyan/40 hover:shadow-glow-cyan",
  ghost: "border border-white/[0.08] bg-white/[0.04] text-content-primary hover:border-neon-violet/35 hover:shadow-glow-violet",
};

/**
 * Bouton ou lien CTA avec micro-interaction et glow discret.
 */
export function GlowButton({
  children,
  href,
  variant = "cyan",
  className = "",
  type = "button",
  external = false,
}) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold tracking-wide transition duration-300";

  const cls = `${base} ${variants[variant] ?? variants.cyan} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={cls} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}
