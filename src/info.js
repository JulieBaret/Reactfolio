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
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Lua', 'Pico-8'],
    repo: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    name: 'Poké-Astro',
    picture: 'https://raw.githubusercontent.com/JulieBaret/pokeastro/master/img/home.png',
    type: 'Visualisation de données',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'API'],
    repo: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    name: 'ReSoc - Le Réseau Social',
    picture: 'https://raw.githubusercontent.com/JulieBaret/socialnetwork/master/img/home.png',
    type: 'BDD & PHP',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['PHP', 'HTML', 'SQL', 'MySQL', 'MAMP', 'Git', 'GitHub'],
    repo: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    name: 'Fear Of Missing Out',
    picture: 'https://raw.githubusercontent.com/JulieBaret/FOMO/master/img/popup.png',
    type: 'Extension navigateur',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com',
    demo: 'https://github.com',
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
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
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
