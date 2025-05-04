const about = {
  name: "Julie Baret",
  description:
    "Développeuse frontend basée à Paris, riche de plusieurs années d'expérience en start-up et d'une première carrière dans les médias",
  social: {
    linkedin: "https://www.linkedin.com/in/julie-baret/",
    github: "https://github.com/JulieBaret",
  },
};

const bio = {
  paraph1:
    "Ancienne journaliste vidéo, je me suis reconvertie dans le développement web en 2022 pour créer des outils numériques concrets et utiles, avec l’envie d’avoir un impact positif.",
  paraph2:
    "Après une formation en développement de deux ans, j’ai travaillé en start-up sur des projets user-centric, autour de la cybersécurité et de la musique.",
  paraph3:
    "Je suis aujourd’hui à la recherche d’une nouvelle équipe pour continuer à progresser techniquement et contribuer à des produits engagés !",
};

const projects = [
  {
    title: "Women in View",
    picture: "/assets/mockups/wiv.png",
    type: "Projet de fin d'études",
    brief: "Le 'Yuka des films' à la sauce féministe",
    description:
      "Cette application web collaborative référence tous les films qui passent ou ne passent pas le test de Bechdel, lequel est composé de trois questions simples mais révélatrices : Y a-t-il au moins deux femmes dans ce film ? Se parlent-elles ? Et, si oui, parlent-elles d'autre chose que des hommes ?",
    stack: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Laravel",
      "SQL",
      "Git",
      "GitHub",
      "Vercel",
      "Docker",
      "Figma",
    ],
    repo: "https://github.com/JulieBaret/Women-In-View-Frontend",
    demo: "https://wiv.adahub.fr/",
  },
  {
    title: "Poké-Astro",
    picture: "/assets/mockups/poke-astro.png",
    type: "Visualisation de données",
    brief: "La parfaite combinaison de l’astrologie et de l’univers de Pokémon",
    description:
      "Sur ce site interactif et responsive, renseignez votre date de naissance pour découvrir votre signe astrologique et le Pokémon qui lui est associé !",
    stack: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "API", "Miro"],
    repo: "https://github.com/JulieBaret/pokeastro",
    demo: "https://juliebaret.github.io/pokeastro/",
  },
  {
    title: "Panda vs. Trump",
    picture: "/assets/mockups/panda-vs-trump.png",
    type: "Jeu vidéo",
    brief:
      "Dans ce jeu vidéo rétro, un seul panda doit combattre une armée de clones nommés Républicants...",
    description:
      "Jeu vidéo en 2D développé en Lua sur le logiciel Pico-8 où le·la player peut se déplacer sur une map, ramasser des items, jeter des projectiles et éviter des bots aux déplacements aléatoires pour conserver ses points de vie.",
    stack: ["Lua", "Pico-8"],
    repo: "https://github.com/JulieBaret/Panda-vs-Trump",
    demo: "https://www.lexaloffle.com/bbs/?tid=49844",
  },
  {
    title: "Random kitty",
    picture: "/assets/mockups/kitty.png",
    type: "Visualisation de données",
    brief: "Juste une petite dose de good vibes",
    description:
      "Cette page web affiche aléatoirement des images de chats à chaque rafraîchissement, grâce à l’API thecatapi.com.",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    repo: "https://github.com/JulieBaret/kitty-mood",
    demo: "https://juliebaret.github.io/kitty-mood/",
  },
  {
    title: "Fear Of Missing Out",
    picture: "/assets/mockups/fomo.png",
    type: "Extension navigateur",
    brief: "Un outil de veille informationnelle pour éviter le FOMO",
    description:
      "Grâce à cette extension Google Chrome, ne ratez aucune news concernant vos sujets préférés. Entrez un mot-clé et recevez par notifications les trois derniers articles de presse relatifs à ce sujet.",
    stack: ["HTML", "CSS", "JavaScript", "API", "Git", "GitHub", "Figma"],
    repo: "https://github.com/JulieBaret/FOMO",
  },
  {
    title: "ReSoc",
    picture: "/assets/mockups/resoc.png",
    type: "Réseau social",
    brief: "Poster, liker et s'abonner",
    description:
      "À partir d'une architecture PHP, connexion à une base de données relationnelle et implémentation des features suivantes : inscription et authentification, publication de messages, ajout de « J'aime » sur les posts, accès aux murs de publication de chaque user, abonnement aux publications des autres users, recherche de messages par mots-clés.",
    stack: [
      "HTML",
      "CSS",
      "PHP",
      "SQL",
      "MySQL",
      "MAMP",
      "Git",
      "GitHub",
      "Miro",
    ],
    repo: "https://github.com/JulieBaret/socialnetwork",
  },
];

const contact = {
  email: "julie.baret@etik.com",
};

const experience = [
  {
    location: "Deezer",
    title: "Frontend engineer",
    date: "Juillet 2024 - Aujourd'hui",
    more: ["Contrat à temps plein"],
  },
  {
    location: "Deezer",
    title: "Frontend engineer",
    date: "Octobre 2023 - Juin 2024",
    more: [
      "Alternance réalisée au sein de l’équipe web dédiée au Core Product et en collaboration avec les équipes Data, Design, Product et Q.A.",
      "Maintien et enrichissement du Design System",
      "Développement d’un outil d’assistance à la création de playlist",
      "Participation à la refactorisation de la recherche catalogue",
      "Réalisation de POC pour les explorations produits",
      "Implémentation d’AB tests et collecte de log",
      "Participation aux rituels Agile et présentations techniques",
    ],
  },
  {
    location: "Kamaé",
    title: "Développeuse full-stack",
    date: "Mars 2023 - Septembre 2023",
    more: [
      "Alternance réalisée dans une start-up early stage et sous la supervision directe du CTO",
      "Design, conception et développement de features destinées à dynamiser la sensibilisation à la cybersécurité",
      "Maintenance et évolution de l’architecture hexagonale du backend",
      "Évolution du schéma de la base de données",
    ],
  },
  {
    location: "Ada Tech School",
    title: "Développement web",
    date: "Mai 2022 - Juillet 2024",
    more: [
      "Formation en 2 ans",
      "Titre Professionnel Concepteur Développeur d'applications (RNCP niveau 6)",
    ],
  },
  {
    location: "Konbini",
    title: "Cheffe de rubrique",
    date: "Mai 2018 - Mai 2022",
    more: [
      "Création et gestion du programme « Konbini Stories » diffusé sur Snapchat et suivi par 1 million d’abonné·e·s en 2022",
      "Interviews, cadrage et montage vidéo, graphisme, recherche et rédaction",
      "Préparation des reportages de Konbini News",
    ],
  },
  {
    location: "SOS homophobie",
    title: "Rédactrice bénévole",
    date: "Sept. 2020 - Mai 2022",
    more: [
      "Participation à la rédaction, l’élaboration et la diffusion du Rapport annuel de SOS homophobie qui documente l’évolution des LGBTIphobies en France",
    ],
  },
  {
    location: "Têtu",
    title: "Journaliste",
    date: "Mars 2016 - Fév. 2018",
    more: [
      "Rédaction quotidienne d’articles pour le site internet tetu.com",
      "Auteure de chroniques sur l'actualité culturelle et sociétale pour le magazine bimestriel TÊTU",
    ],
  },
  {
    location: "Institut Français de Presse",
    title: "Sciences des médias",
    date: "2013 - 2016",
    more: [
      "Master 1 & 2 : Médias, Langages et Société",
      "Échange universitaire d'un semestre à l'Université Laval à Québec, Canada",
      "Option Études de genre à l'École des Hautes Études en Sciences Sociales",
    ],
  },
  {
    location: "Université Paris-Sorbonne",
    title: "Histoire",
    date: "2011 - 2013",
    more: [
      "Double-Licence 3 : Histoire et Information-Communication",
      "Licence 1 & Licence 2 : Histoire",
      "Option Histoire de l’Art",
    ],
  },
];

export { about, projects, contact, bio, experience };
