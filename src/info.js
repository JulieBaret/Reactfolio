const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Julie Baret',
  role: 'Software developer',
  description:
    "Développeuse full-stack en cours de formation, riche d'expériences dans les médias et la génération de contenus digitaux, je recherche une alternance de 12 mois à compter de mars 2023.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/juliebaret',
    github: 'https://github.com/JulieBaret',
  },
}

const bio = {
  text: "Développeuse en cours de formation, j'ai travaillé plusieurs années dans les médias avant de démarrer une reconversion professionnelle vers l’informatique. À Ada Tech School, école de programmation inclusive, je réalise des projets de groupe en suivant les méthodes Agile. Cette pédagogie « par le faire » me permet d'améliorer mes compétences techniques full-stack ainsi que mes qualités en gestion de projet, en cohésion d'équipe et en communication. Je souhaite mettre mon expérience de journaliste et mes compétences acquises en développement au service d’outils numériques ayant un impact positif sur la société."
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Panda vs. Trump',
    picture: 'https://raw.githubusercontent.com/JulieBaret/Panda-vs-Trump/master/img/game.png',
    type: 'Jeu vidéo',
    pitch: "Jeu vidéo rétro développé en Lua sur le logiciel Pico-8.",
    description:
      "Dans ce jeu en 2D, le·la player peut se déplacer, ramasser des items et jeter des projectiles sur des bots aux déplacements aléatoires.",
    stack: ['Lua', 'Pico-8'],
    repo: 'https://github.com/JulieBaret/Panda-vs-Trump',
    demo: 'https://www.lexaloffle.com/bbs/?tid=49844',
  },
  {
    name: 'Poké-Astro',
    picture: 'https://raw.githubusercontent.com/JulieBaret/pokeastro/master/img/home.png',
    type: 'Visualisation de données',
    pitch:
      "Site responsive combinant l’astrologie et l’univers de Pokémon.",
    description: "Sur ce site interactif mutlipages, il vous suffit de rentrer un jour et un mois de naissance pour découvrir votre signe astrologique (emplacement du Soleil à la naissance) ainsi que le Pokémon qui lui associé !",
    stack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'API', 'Miro'],
    repo: 'https://github.com/JulieBaret/pokeastro',
    demo: 'https://juliebaret.github.io/pokeastro/',
  },
  {
    name: 'ReSoc - Le Réseau Social',
    picture: 'https://raw.githubusercontent.com/JulieBaret/socialnetwork/master/img/home.png',
    type: 'BDD & PHP',
    pitch: "Sur ce site, on peut poster des messages, en liker, s'abonner aux autres users, etc.",
    description:
      "Reprise de l'architecture et ajout d'une connexion à une base de données et des features suivantes : inscription et authentification d'un user, publication d'un message, accès au mur de publication d'autres users, possibilité de liker les posts d’autres users, possibilité de réaliser des recherches par mots-clés, possibilité de s'abonner à d’autres users",
    stack: ['HTML', 'CSS', 'PHP', 'SQL', 'MySQL', 'MAMP', 'Git', 'GitHub', 'Miro'],
    repo: 'https://github.com/JulieBaret/socialnetwork',
  },
  {
    name: 'Fear Of Missing Out',
    picture: 'https://raw.githubusercontent.com/JulieBaret/FOMO/master/img/popup.png',
    type: 'Extension navigateur',
    pitch: "Extension Google Chrome de veille informationnelle",
    description:
      "Cette extension navigateur vous permet de vous tenir à jour de vos sujets favoris. Entrez un mot-clé recevez par notifications les trois derniers articles de presse relatifs à celui-ci.",
    stack: ['HTML', 'CSS', 'JavaScript', 'API', 'Git', 'GitHub', 'Figma'],
    repo: 'https://github.com/JulieBaret/FOMO'
  },
  // {
  //   name: 'Anciens meubles pour une nouvelle vie',
  //   type: 'E-commerce',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['React', 'Node JS', 'Bootstrap', 'Express JS', 'MongoDB', 'Mongoose'],
  //   repo: 'https://github.com',
  //   demo: 'https://github.com',
  // },
  {
    name: 'Random kitty',
    picture: 'https://raw.githubusercontent.com/JulieBaret/kitty-mood/main/img/screens/screen1.png',
    type: 'Visualisation de données',
    pitch: "Juste une petite dose de good vibes...",
    description:
      "Ce site responsive d’une seule page affiche aléatoirement des images de chats à chaque rafraîchissement, grâce à l’API thecatapi.com.",
    stack: ['HTML', 'CSS', 'JavaScript', 'API'],
    repo: 'https://github.com',
    demo: 'https://github.com',
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jem.baret@gmail.com',
}

export { about, projects, contact, bio }
