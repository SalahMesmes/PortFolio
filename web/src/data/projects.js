import { publicAsset } from "../lib/publicAsset.js";

/** Projets mis en avant — section Réalisations (accordéon formation). */
export const featuredProjects = [
  {
    id: "easycms",
    title: "Easy CMS",
    description:
      "Projet de gestion de contenu : authentification, tableaux de bord et édition structurée des données.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    image: publicAsset("/assets/img/tof easyCMS.png"),
  },
  {
    id: "laravel-app",
    title: "Application web Laravel",
    description:
      "Mise en place du cycle MVC, formulaires, validations et persistance avec une base relationnelle.",
    tech: ["Laravel", "PHP", "Blade"],
    image: publicAsset("/assets/img/apli 1.png"),
  },
  {
    id: "flutter",
    title: "Application mobile",
    description:
      "Découverte du développement mobile : navigation, état local et intégration d’API simples.",
    tech: ["Flutter", "Dart"],
    image: publicAsset("/assets/img/mat.png"),
  },
  {
    id: "scripts-sql",
    title: "Scripts & données",
    description:
      "Requêtes SQL, modélisation et jeux de données pour des ateliers et livrables de formation.",
    tech: ["SQL", "MariaDB"],
    image: publicAsset("/assets/img/scrpitsql.png"),
  },
];
