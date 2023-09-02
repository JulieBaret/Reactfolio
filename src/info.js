const about = {
  name: 'Julie Baret',
  description:
    "Développeuse full-stack en cours de formation, riche d'expériences dans les médias et la génération de contenus digitaux.",
  social: {
    linkedin: 'https://www.linkedin.com/in/julie-baret/',
    github: 'https://github.com/JulieBaret',
  },
}

const bio = {
  paraph1: "Ancienne journaliste vidéo, j'ai décidé de me reconvertir dans la programmation pour développer des outils numériques ayant un impact positif sur la société.",
  paraph2: "Aujourd'hui apprenante à Ada Tech School, école de code guidée par la pédagogie Montessori, je travaille en agilité sur une succession de projets de groupe.",
  paraph3: "Afin de poursuivre mon apprentissage, je recherche une alternance en entreprise au poste de développeuse full-stack.",
}

const projects = [
  {
    title: 'Poké-Astro',
    picture: '/assets/montage-poke-def.png',
    type: 'Visualisation de données',
    brief:
      "La parfaite combinaison de l’astrologie et de l’univers de Pokémon",
    description: "Sur ce site interactif et responsive, renseignez votre date de naissance pour découvrir votre signe astrologique et le Pokémon qui lui est associé !",
    stack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'API', 'Miro'],
    repo: 'https://github.com/JulieBaret/pokeastro',
    demo: 'https://juliebaret.github.io/pokeastro/',
  },
  {
    title: 'ReSoc',
    picture: '/assets/montage-resoc-def.png',
    type: 'Réseau social',
    brief: "Poster, liker et s'abonner",
    description:
      "À partir d'une architecture PHP, connexion à une base de données relationnelle et implémentation des features suivantes : inscription et authentification, publication de messages, ajout de « J'aime » sur les posts, accès aux murs de publication de chaque user, abonnement aux publications des autres users, recherche de messages par mots-clés.",
    stack: ['HTML', 'CSS', 'PHP', 'SQL', 'MySQL', 'MAMP', 'Git', 'GitHub', 'Miro'],
    repo: 'https://github.com/JulieBaret/socialnetwork',
  },
  {
    title: 'Panda vs. Trump',
    picture: '/assets/montage-panda-def.png',
    type: 'Jeu vidéo',
    brief: "Dans ce jeu vidéo rétro, un seul panda doit combattre une armée de clones nommés Républicants...",
    description:
      "Jeu vidéo en 2D développé en Lua sur le logiciel Pico-8 où le·la player peut se déplacer sur une map, ramasser des items, jeter des projectiles et éviter des bots aux déplacements aléatoires pour conserver ses points de vie.",
    stack: ['Lua', 'Pico-8'],
    repo: 'https://github.com/JulieBaret/Panda-vs-Trump',
    demo: 'https://www.lexaloffle.com/bbs/?tid=49844',
  },
  {
    title: 'Random kitty',
    picture: '/assets/montage-kitty-def.png',
    type: 'Visualisation de données',
    brief: "Juste une petite dose de good vibes",
    description:
      "Cette page web affiche aléatoirement des images de chats à chaque rafraîchissement, grâce à l’API thecatapi.com.",
    stack: ['HTML', 'CSS', 'JavaScript', 'API'],
    repo: 'https://github.com/JulieBaret/kitty-mood',
    demo: 'https://juliebaret.github.io/kitty-mood/',
  },
  {
    title: 'Fear Of Missing Out',
    picture: '/assets/montage-fomo-def.png',
    type: 'Extension navigateur',
    brief: "Un outil de veille informationnelle pour éviter le FOMO",
    description:
      "Grâce à cette extension Google Chrome, ne ratez aucune news concernant vos sujets préférés. Entrez un mot-clé et recevez par notifications les trois derniers articles de presse relatifs à ce sujet.",
    stack: ['HTML', 'CSS', 'JavaScript', 'API', 'Git', 'GitHub', 'Figma'],
    repo: 'https://github.com/JulieBaret/FOMO'
  },
  {
    title: 'Anciens meubles pour une nouvelle vie',
    picture: '/assets/montage-ecommerce-def.gif',
    type: 'E-commerce',
    brief: "Site de vente de meubles d'occasion",
    description:
      "Applications back-end et front-end permettant d'afficher les produits d'une base de données NoSQL. Filtre des résultats par prix, couleur, catégorie ou mot-clé. Inscription et authentification. Possibilité, en tant que simple user, de proposer des objets à la vente. Accès réservé à une page admin pour la gestion des produits.",
    stack: ['React', 'Node JS', 'Bootstrap', 'Express JS', 'MongoDB', 'Mongoose'],
    other: 'En cours de déploiement...',
  },
]

const contact = {
  email: 'jem.baret@gmail.com',
}

const experience = [  
{
  where: "Ada Tech School",
  what: "Concepteur Développeur d'applications",
  when: "Mai 2022 - Mars 2024",
  // more: ["École de code guidée par la pédagogie Montessori", "Succession de projets suivant les méthodes Agile", "Apprentissage des bonnes pratiques du développement", "Seconde partie de l'enseignement réalisé en alternance"],
  more: ["École de code guidée par la pédagogie Montessori", "Succession de projets par sprint de deux semaines en agilité", "Seconde partie de la formation réalisé en alternance"]
},
{
  where: "Mairie de Paris",
  what: "Programmer en Python : s'initier",
  when: "Oct. 2021 - Fév. 2022",
  more: ["Cours du soir pour adultes"]
},
{
  where: "Konbini",
  what: "Journaliste et cheffe de rubrique",
  when: "Mai 2018 - Mai 2022",
  more: ["Création et gestion du programme « Konbini Stories » diffusé sur Snapchat et suivi par 1 million d’abonné·e·s en 2022", "Interviews, cadrage et montage vidéo, graphisme, recherche et rédaction", "Préparation des reportages de Konbini News"],
},
{
  where: "SOS homophobie",
  what: "Rédactrice bénévole",
  when: "Sept. 2020 - Mai 2022",
  more: ["Participation à la rédaction, l’élaboration et la diffusion du Rapport annuel de SOS homophobie qui documente l’évolution des LGBTIphobies en France"],
},
{
  where: "Têtu",
  what: "Journaliste plurimédia",
  when: "Mars 2016 - Fév. 2018",
  more: ["Rédaction quotidienne d’articles pour le site internet tetu.com", "Auteure de chroniques sur l'actualité culturelle et sociétale pour le magazine bimestriel TÊTU"],
},
{
  where: "Institut Français de Presse",
  what: "Sciences des médias",
  when: "2013 - 2016",
  more: ["Master 1 & 2 : Médias, Langages et Société", "Échange universitaire d'un semestre à l'Université Laval à Québec, Canada", "Option Études de genre à l'École des Hautes Études en Sciences Sociales"],
},
{
  where: "Université Paris-Sorbonne",
  what: "Histoire",
  when: "2011 - 2013",
  more: ["Double-Licence 3 : Histoire et Information-Communication", "Licence 1 & Licence 2 : Histoire", "Option Histoire de l’Art"],
},
// {
//   where: "",
//   what: "Baccalauréat scientifique",
//   when: "2011",
//   more: [""],
// },
]

export { about, projects, contact, bio, experience }
