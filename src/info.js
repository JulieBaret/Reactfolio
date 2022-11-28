const about = {
  name: 'Julie Baret',
  description:
    "Développeuse full-stack en cours de formation, riche d'expériences dans les médias et la génération de contenus digitaux.",
  social: {
    linkedin: 'https://linkedin.com/in/juliebaret',
    github: 'https://github.com/JulieBaret',
  },
}

const bio = {
  paraph1: "Ancienne journaliste vidéo, j'ai décidé de me reconvertir dans la programmation pour développer des outils numériques ayant un impact positif sur la société.",
  paraph2: "Aujourd'hui apprenante à Ada Tech School, école de code guidée par la pédagogie Montessori, je travaille en agilité sur une succession de projets de groupe.",
  paraph3: "Afin de poursuivre mon apprentissage, je recherche une alternance en entreprise de 12 mois au poste de développeuse full-stack.",
}

const projects = [
  {
    name: 'Poké-Astro',
    picture: '/assets/montage-poke-def.png',
    type: 'Visualisation de données',
    pitch:
      "La parfaite combinaison de l’astrologie et de l’univers de Pokémon",
    description: "Sur ce site interactif et responsive, il vous suffit de renseigner votre date de naissance pour découvrir votre signe astrologique (c'est-à-dire l'emplacement du Soleil à la naissance) ainsi que le Pokémon qui lui associé !",
    stack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'API', 'Miro'],
    repo: 'https://github.com/JulieBaret/pokeastro',
    demo: 'https://juliebaret.github.io/pokeastro/',
  },
  {
    name: 'ReSoc',
    picture: '/assets/montage-resoc-def.png',
    type: 'Réseau social',
    pitch: "Poster, liker et s'abonner",
    description:
      "Reprise d'une architecture PHP et ajout d'une connexion à une base de données relationnelle ainsi que des features suivantes : inscription et authentification, publication de messages, ajout d'un « J'aime » sur un post, accès aux murs de publication de chaque user, abonnement aux publications des autres users, recherche de messages par mots-clés.",
    stack: ['HTML', 'CSS', 'PHP', 'SQL', 'MySQL', 'MAMP', 'Git', 'GitHub', 'Miro'],
    repo: 'https://github.com/JulieBaret/socialnetwork',
  },
  {
    name: 'Panda vs. Trump',
    picture: '/assets/montage-panda-def.png',
    type: 'Jeu vidéo',
    pitch: "Dans ce jeu vidéo rétro, un seul panda doit combattre une armée de clones nommés Républicants...",
    description:
      "Jeu vidéo en 2D développé en Lua sur le logiciel Pico-8 où le·la player peut se déplacer sur une map, ramasser des items, jeter des projectiles et éviter des bots aux déplacements aléatoires pour conserver ses poins de vie.",
    stack: ['Lua', 'Pico-8'],
    repo: 'https://github.com/JulieBaret/Panda-vs-Trump',
    demo: 'https://www.lexaloffle.com/bbs/?tid=49844',
  },
  {
    name: 'Random kitty',
    picture: '/assets/montage-kitty-def.png',
    type: 'Visualisation de données',
    pitch: "Juste une petite dose de good vibes",
    description:
      "Cette page web affiche aléatoirement des images de chats à chaque rafraîchissement, grâce à l’API thecatapi.com.",
    stack: ['HTML', 'CSS', 'JavaScript', 'API'],
    repo: 'https://github.com/JulieBaret/kitty-mood',
    demo: 'https://juliebaret.github.io/kitty-mood/',
  },
  {
    name: 'Fear Of Missing Out',
    picture: '/assets/montage-fomo-def.png',
    type: 'Extension navigateur',
    pitch: "Un outil de veille informationnelle pour éviter le FOMO",
    description:
      "Grâce à cette extension Google Chrome, ne ratez aucune news concernant vos sujets préférés. Entrez un mot-clé et recevez par notifications les trois derniers articles de presse relatifs à ce sujet.",
    stack: ['HTML', 'CSS', 'JavaScript', 'API', 'Git', 'GitHub', 'Figma'],
    repo: 'https://github.com/JulieBaret/FOMO'
  },
  {
    name: 'Anciens meubles pour une nouvelle vie',
    picture: '/assets/montage-ecommerce-def.gif',
    type: 'E-commerce',
    pitch: "Site de vente de meubles d'occasion",
    description:
      "Applications back-end et front-end permettant d'afficher les produits d'une base de données NoSQL. Filtre des résultats par prix, couleur, catégorie ou mot-clé. Inscription et authentification. Possibilité, en tant que simple user, de proposer des objets à la vente. Accès réservé à une page admin pour ajouter ou non ces objets au catalogue et gérer les produits.",
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
  when: "Octobre 2021 - Février 2022",
  more: ["Cours du soir pour adultes"]
},
{
  where: "Konbini",
  what: "Journaliste et cheffe de rubrique",
  when: "Mai 2018 - Mai 2022",
  more: ["Création et gestion du programme Konbini Stories diffusé sur Snapchat et suivi par 1 millions d’abonné·e·s en 2022", "Interviews, cadrage et montage vidéo, graphisme, recherche et rédaction", "Préparation des reportages de Konbini News"],
},
{
  where: "SOS homophobie",
  what: "Rédactrice bénévole",
  when: "Septembre 2020 - Mai 2022",
  more: ["Participation à la rédaction, l’élaboration et la diffusion du Rapport annuel de SOS homophobie qui documente l’évolution des LGBTIphobies en France"],
},
{
  where: "Têtu",
  what: "Journaliste plurimédia",
  when: "Mars 2016 - Février 2018",
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
