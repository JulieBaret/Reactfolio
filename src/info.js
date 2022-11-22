const about = {
  name: 'Julie Baret',
  description:
    "Je suis développeuse full-stack en cours de formation, riche d'expériences dans les médias et la génération de contenus digitaux.",
  social: {
    linkedin: 'https://linkedin.com/in/juliebaret',
    github: 'https://github.com/JulieBaret',
  },
}

const bio = {
  paraph1: "Ancienne journaliste vidéo, j'ai décidé de me reconvertir dans la programmation pour développer des outils numériques ayant un impact positif sur la société.",
  paraph2: "Aujourd'hui apprenante à Ada Tech School, école de code guidée par la pédagogie Montessori, je travaille en agilité sur une succession de projets de groupe.",
  paraph3: "Afin de solidifier mes compétences, je recherche une alternance en entreprise de 12 mois au poste de développeuse full-stack.",
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
    type: 'Réseau social PHP & MySQL',
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
    pitch: "Dans ce jeu vidéo rétro, un seul panda doit combattre une armée de clones : les Républicants...",
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
  // {
  //   name: 'Anciens meubles pour une nouvelle vie',
  //   type: 'E-commerce',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['React', 'Node JS', 'Bootstrap', 'Express JS', 'MongoDB', 'Mongoose'],
  //   repo: '',
  // },
]

const contact = {
  email: 'jem.baret@gmail.com',
}

export { about, projects, contact, bio }
