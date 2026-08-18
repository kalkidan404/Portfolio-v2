const projects = [
  {
    id: 1,
    title: "Kmedia",
    type: "Full-Stack Social Media",
    description:
      "A social media platform where users can create posts, follow other users, like posts, and comment.",
    whyBuilt:
      "I built Kmedia to challenge myself to build and deploy a complete full-stack application.",
    howBuilt:
      "Built with React on the frontend and Node.js, Express, PostgreSQL, and Prisma on the backend.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    features: [
      "User authentication",
      "User profiles",
      "Create posts",
      "Follow users",
      "Like posts",
      "Comment on posts",
    ],
    github: "https://github.com/kalkidan404/Kmedia",
    live: "https://kmedia-sable.vercel.app/",
  },

  {
    id: 2,
    title: "Blog",
    type: "Full-Stack Blog Platform",
    description:
      "A blog platform with an API-focused backend and separate interfaces for reading and managing content.",
    whyBuilt:
      "I built this project to strengthen my backend development skills and learn how to structure a larger application.",
    howBuilt:
      "Built around a Node.js backend with PostgreSQL and Prisma, with separate frontend experiences for readers and content management.",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    features: [
      "User authentication",
      "Blog posts",
      "Comments",
      "Post management",
      "Database relationships",
      "API architecture",
    ],
    github: "https://github.com/kalkidan404/blogProject",
    live: "https://blog-project-ten-tau.vercel.app/",
  },

  {
    id: 3,
    title: "Telegram Community",
    type: "Community Platform",
    description:
      "A Telegram-inspired community platform designed around conversations, anonymous interaction, and community engagement.",
    whyBuilt:
      "I wanted to experiment with building a community-focused application and explore how messaging and community features could work together.",
    howBuilt:
      "Built as a web application with a focus on user interaction, messaging, and community functionality.",
    stack: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Community interaction",
      "Messaging",
      "Anonymous questions",
      "User accounts",
      "Community-focused design",
    ],
    github: "https://github.com/kalkidan404/messaging-app",
    live: "https://messaging-app-zeta.vercel.app/",
  },
];

export default projects;