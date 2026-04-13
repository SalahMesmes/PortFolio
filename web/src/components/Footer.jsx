import { publicAsset } from "../lib/publicAsset.js";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-cyber-bg py-12 text-center">
      <p className="font-display text-sm font-semibold text-content-primary">
        MESTAOUI Salah{" "}
        <img
          src={publicAsset("/assets/icons/paws.png")}
          alt=""
          className="inline h-5 w-5 align-text-bottom opacity-75"
        />
      </p>
      <p className="font-body mt-3 text-xs font-medium text-content-secondary">
        © {new Date().getFullYear()} — Tous droits réservés
      </p>
    </footer>
  );
}
