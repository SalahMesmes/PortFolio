/** Fichiers du dossier `public` — respecte `base` (ex. GitHub Pages `/PortFolio/`). */
export function publicAsset(path) {
  const p = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${p}`;
}
