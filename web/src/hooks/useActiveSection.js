import { useEffect, useState } from "react";

const IDS = ["accueil", "profil", "formation", "xpPro", "skills", "veille", "contact"];

export function useActiveSection() {
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const elements = IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
