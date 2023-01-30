import dogsPILanding from "../../assets/dogsPILanding.png";
import tpUHome from "../../assets/tpUHome.png";
import finalProjectH from "../../assets/finalProjectH.png";
import moviesProject from "../../assets/moviesProject.png";
import portProject from "../../assets/portProject.png";

const cards = [
  {
    image: dogsPILanding,
    modal: 0,
    paragraphs: {
      en: [
        "Build an App using React, Redux, Node and Sequelize",
        "To affirm and connect the concepts learned in the course",
        "Learn best practices",
        "Learn and practice GIT workflow",
        "Use and practice testing",
      ],
      es: [
        "Construir una App utilizando React, Redux, Node y Sequelize",
        "Para afianzar y conectar los conceptos aprendidos en el curso",
        "Aprender buenas prácticas",
        "Aprender y practicar el flujo de trabajo de GIT",
        "Utilizar y practicar testing",
      ],
    },
    title: {
      en: 'Individual Project "Henry"',
      es: 'Proyecto Individual "Henry"',
    },
    subTitle: {
      en: "Build an App using React and NodeJs",
      es: "Construir una app utilizando React y NodeJs",
    },
    technologies: "React, Redux, Css, NodeJs, Sequelize, Postgres, Morgan",
    links: [
      {
        text: {
          en: "GitHub",
          es: "GitHub",
        },
        url: "https://github.com/johaortiz/Dogs-PI",
      },
      {
        text: {
          en: "Henry",
          es: "Henry",
        },
        url: "https://www.soyhenry.com/",
      },
      {
        text: {
          en: "Project",
          es: "Proyecto",
        },
        url: "http://www.perritosmalvados.com.ar/",
      },
    ],
  },
  {
    image: tpUHome,
    modal: 1,
    paragraphs: {
      en: ["Solve simple matrix problems", "Be able to solve it in code"],
      es: [
        "Resolver problemas simples de matrices",
        "Ser capaz de resolverlo en código",
      ],
    },
    title: {
      en: "University project",
      es: "Proyecto Universitario",
    },
    subTitle: {
      en: "Build an App for some basic matrix calculations",
      es: "Construir una app para resolver algunos cálculos basicos de matrices",
    },
    technologies: "React, JavaScript, DaisyUi, Tailwind",
    links: [
      {
        text: {
          en: "GitHub",
          es: "GitHub",
        },
        url: "https://github.com/johaortiz/matrices.github.io",
      },
      {
        text: {
          en: "University",
          es: "Universidad",
        },
        url: "https://www.ucp.edu.ar/",
      },
      {
        text: {
          en: "Project",
          es: "Proyecto",
        },
        url: "https://matrices-six.vercel.app/",
      },
    ],
  },
  {
    image: finalProjectH,
    modal: 2,
    paragraphs: {
      en: [
        "Build an E-commerce using React, Redux, Node and Sequelize",
        "Learn best practices",
        "Learn and practice GIT-FLOW",
        "Leading a team",
      ],
      es: [
        "Construir un E-commerce utilizando React, Redux, Node y Sequelize",
        "Aprender buenas prácticas",
        "Aprender y practicar GIT-FLOW",
        "Liderar un equipo",
      ],
    },
    title: {
      en: 'Final Project of "Henry"',
      es: 'Proyecto Final de "Henry"',
    },
    subTitle: {
      en: "Build an e-commerce",
      es: "Construir un e-commerce",
    },
    technologies:
      "React, Redux, DaisyUi, Tailwind, Mui, NodeJs, Sequelize, jwt, Postgres, Paypal, Google OAuth2, Cloudinary",
    links: [
      {
        text: {
          en: "GitHub",
          es: "GitHub",
        },
        url: "https://github.com/boogy2207/deployBoggy",
      },
      {
        text: {
          en: "Henry",
          es: "Henry",
        },
        url: "https://www.soyhenry.com/",
      },
      {
        text: {
          en: "Project",
          es: "Proyecto",
        },
        url: "https://www.libroparaiso.com.ar/",
      },
    ],
  },
  {
    image: moviesProject,
    modal: 3,
    paragraphs: {
      en: [
        "Build an App using React and Redux",
        "Learn best practices",
        "Learn about the React ecosystem",
        "Learn about the Redux ecosystem",
        "Learn about React Hooks",
      ],
      es: [
        "Construir una App utilizando React y Redux",
        "Aprender buenas prácticas",
        "Aprender sobre el ecosistema de React",
        "Aprender sobre el ecosistema de Redux",
        "Aprender sobre React Hooks",
      ],
    },
    title: {
      en: 'Project About React "Hooks"',
      es: 'Proyecto Sobre React "Hooks"',
    },
    subTitle: {
      en: "Learn about React Hooks",
      es: "Aprender sobre React Hooks",
    },
    technologies: "React, Redux, Css, NodeJs",
    links: [
      {
        text: {
          en: "GitHub",
          es: "GitHub",
        },
        url: "https://github.com/johaortiz/movies-react",
      },
      {
        text: {
          en: "Project",
          es: "Proyecto",
        },
        url: "https://movies-react-delta.vercel.app/",
      },
    ],
  },
  {
    image: portProject,
    modal: 4,
    paragraphs: {
      en: [
        "Show my skills and achievements",
        "Demonstrate my experience",
        "Communicate my personal style",
        "Help myself to further develop you",
      ],
      es: [
        "Mostrar mis habilidades y logros",
        "Demostrar mi experiencia",
        "Comunicar mi estilo personal",
        "Ayudarme a desarrollarme más",
      ],
    },
    title: {
      en: "This Project (Portfolio)",
      es: "Este Proyecto (Portafolio)",
    },
    subTitle: {
      en: "Show my collection of projects and works",
      es: "Mostrar mi colección de proyectos y trabajos",
    },
    technologies: "Vite-React, Redux, Tailwind, DaisyUi, NodeJs, NodeMailer",
    links: [
      {
        text: {
          en: "GitHub Front",
          es: "GitHub Front",
        },
        url: "https://github.com/johaortiz/new-portfolio",
      },
      {
        text: {
          en: "GitHub Back",
          es: "GitHub Back",
        },
        url: "https://github.com/johaortiz/Back-NodeMailer-To-Port",
      },
      {
        text: {
          en: "Project",
          es: "Proyecto",
        },
        url: "https://www.johaortiz.com.ar/",
      },
    ],
  },
];

export default cards;
