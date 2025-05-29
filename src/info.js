const about = {
  description:
    "Just passionate about 🖤 coding, 📚 reading and petting animals 🦄",
  social: {
    linkedin: "https://www.linkedin.com/in/julie-baret/",
    github: "https://github.com/JulieBaret",
  },
};

const bio = {
  paraph1:
    "I’m a former journalist who spent several years writing about social and cultural topics before deciding to switch gears and dive into software development 🚀",
  paraph2:
    "Since then, I've focused on building meaningful digital tools, turning complex user needs into simple, clear, and functional interfaces",
  paraph3: "Let’s make the web a better place together 🌍💫",
  // paraph3:
  // "Je recherche aujourd'hui une équipe dynamique et collaborative avec laquelle façonner des produits engagés.",
};

const projects = [
  {
    title: "Women in View",
    picture: "/assets/mockups/wiv.png",
    type: "Final year project",
    brief: "The 'Yuka for films' with a feminist twist",
    description:
      "This collaborative web application catalogs films that do or do not pass the 'Bechdel Test', a cinematic analysis tool based on three simple but revealing questions: Are there at least two women in the film? Do they talk to each other? And, if so, do they talk about something other than men?",
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
    demo: "https://wiv.adaschool.fr/",
  },
  {
    title: "Poké-Astro",
    picture: "/assets/mockups/poke-astro.png",
    type: "Dataviz",
    brief: "The ideal mix of astrology and the Pokémon universe",
    description:
      "On this interactive and responsive website, enter your birth date to discover your astrological sign and the Pokémon associated with it!",
    stack: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "API", "Miro"],
    repo: "https://github.com/JulieBaret/pokeastro",
    demo: "https://juliebaret.github.io/pokeastro/",
  },
  {
    title: "Panda vs. Trump",
    picture: "/assets/mockups/panda-vs-trump.png",
    type: "Video game",
    brief:
      "In this retro video game, a lone panda must fight an army of clones called the Republicans...",
    description:
      "2D video game developed in Lua on the Pico-8 software where the player can move, collect items, throw projectiles, and avoid bots to preserve their health points.",
    stack: ["Lua", "Pico-8"],
    repo: "https://github.com/JulieBaret/Panda-vs-Trump",
    demo: "https://www.lexaloffle.com/bbs/?tid=49844",
  },
  {
    title: "Random kitty",
    picture: "/assets/mockups/kitty.png",
    type: "Dataviz",
    brief: "A tiny bit of good vibes",
    description:
      "This web page randomly displays cat pictures on each refresh, thanks to the Cat API",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    repo: "https://github.com/JulieBaret/kitty-mood",
    demo: "https://juliebaret.github.io/kitty-mood/",
  },
  {
    title: "Fear Of Missing Out",
    picture: "/assets/mockups/fomo.png",
    type: "Browser extension",
    brief: "A tool built to avoid the FOMO",
    description:
      "With this Google Chrome extension, you'll never miss any piece of information. Enter a keyword and receive notifications for the three latest articles related to your favorite news topic.",
    stack: ["HTML", "CSS", "JavaScript", "API", "Git", "GitHub", "Figma"],
    repo: "https://github.com/JulieBaret/FOMO",
  },
  {
    title: "ReSoc",
    picture: "/assets/mockups/resoc.png",
    type: "Social Network",
    brief: "Post, like, and subscribe",
    description:
      "PHP website with following features: registration and authentication, posting messages, adding 'Likes' on posts, access to each user's message wall, subscribing to other users' posts, and searching messages by keywords",
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
    date: "October 2023 - Today",
    more: [
      "8-month apprenticeship turned into a full-time job",
      "Integrated to the Core Product team to build interactive experiences",
      "Daily collaboration with Product, Data, Design, Backend and QA team",
      "Worked on the main app, the blindtest journey, 'My Deezer Year'...",
    ],
  },
  {
    location: "Kamaé",
    title: "Full-stack developer",
    date: "Mars 2023 - Septembre 2023",
    more: [
      "Apprenticeship completed in an early-stage startup, under the direct supervision of the CTO",
      "Designed and built features aimed at boosting cybersecurity awareness",
    ],
  },
  {
    location: "Ada Tech School",
    title: "Software engineering",
    date: "May 2022 - July 2024",
    more: [
      "Coding program completed with a professional title in computing science (RNCP 6)",
    ],
  },
  {
    location: "Konbini",
    title: "Section editor",
    date: "May 2018 - May 2022",
    more: [
      "Created and managed the “Konbini Stories” video edition followed by 1 million Snapchat subscribers in 2022",
      "Writing, research, filming and video editing, graphic design, publishing",
    ],
  },
  {
    location: "SOS homophobie",
    title: "Volunteer writer",
    date: "September 2020 - May 2022",
    more: [
      "Contributed to the writing, editing, and release of SOS Homophobie’s Annual Report, a key publication tracking the evolution of LGBTIphobia in France",
    ],
  },
  {
    location: "Têtu",
    title: "Journalist",
    date: "March 2016 - February 2018",
    more: [
      "Permanent writer for both the website and print magazine, covering LGBTQIA+ cultural and political issues",
    ],
  },
  {
    location: "French Press Institute",
    title: "Media studies",
    date: "2013 - 2016",
    more: [
      "Master of Arts (Master 2 Médias, langages et sociétés)",
      "University exchange semester at Université Laval in Québec, Canada",
      "Gender Studies at the École des Hautes Études en Sciences Sociales",
    ],
  },
  // {
  //   location: "Paris-Sorbonne University",
  //   title: "History",
  //   date: "2011 - 2013",
  //   more: [
  //     "Dual Bachelor’s degree (double-licence 3) with Panthéon-Assas University",
  //     "Minor in Art History",
  //   ],
  // },
];

export { about, projects, contact, bio, experience };
