/**
 * Conteneur vitré aligné sur la charte (surface-glass dans index.css).
 */
export function Card({ children, className = "", hover = true }) {
  const hoverCls = hover
    ? "transition duration-300 hover:border-white/[0.12] hover:shadow-[0_0_32px_-10px_rgba(0,229,255,0.12)]"
    : "";

  return <div className={`surface-glass ${hoverCls} ${className}`.trim()}>{children}</div>;
}
