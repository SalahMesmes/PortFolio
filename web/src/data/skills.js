import { publicAsset } from "../lib/publicAsset.js";

/** Compétences avec niveau affiché sur les barres (0–100) */
export const skillGroups = [
  {
    label: "Langages & frameworks",
    items: [
      { name: "HTML / CSS", level: 92, icon: publicAsset("/assets/icons/skills/html5.svg") },
      { name: "JavaScript", level: 78, icon: publicAsset("/assets/icons/skills/javascript.svg") },
      { name: "PHP", level: 82, icon: publicAsset("/assets/icons/skills/php.svg") },
      { name: "Java", level: 75, icon: publicAsset("/assets/icons/skills/java.svg") },
      { name: "Angular", level: 68, icon: publicAsset("/assets/icons/skills/angular.svg") },
    ],
  },
  {
    label: "Données & outils",
    items: [
      { name: "MySQL", level: 80, icon: publicAsset("/assets/icons/skills/mysql.svg") },
      { name: "Git", level: 85, icon: publicAsset("/assets/icons/skills/git.svg") },
      { name: "GitHub", level: 88, icon: publicAsset("/assets/icons/skills/github.svg") },
      { name: "VS Code", level: 95, icon: publicAsset("/assets/icons/skills/vscode.svg") },
      { name: "XAMPP", level: 72, icon: publicAsset("/assets/icons/skills/xampp.svg") },
    ],
  },
  {
    label: "Transversal",
    items: [{ name: "Microsoft Office", level: 70, icon: publicAsset("/assets/icons/skills/office.svg") }],
  },
];
