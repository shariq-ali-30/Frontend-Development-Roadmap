import HTMLImage from "./images/HTML.png";
import CSSImage from "./images/CSS.png";
import JavaScriptImage from "./images/JavaScript.png";
import ReactImage from "./images/React.png";
import ToolsAndDeploymentImage from "./images/ToolsAndDeployment.png";

const steps = [
  {
    stepNumber: 1,
    name: "HTML",
    image: HTMLImage,
    description:
      "HTML (HyperText Markup Language) is the foundation of every web page. It provides the basic structure and content of a website.",

    features: [
      {
        icon: "ph-bold ph-layout",
        title: "Structure the Web",
        description:
          "Learn how HTML elements create the structure of a webpage.",
      },
      {
        icon: "ph-bold ph-code",
        title: "Semantic Markup",
        description:
          "Use semantic HTML for better accessibility and SEO.",
      },
      {
        icon: "ph-bold ph-link",
        title: "Links & Media",
        description:
          "Work with links, images, forms and other media.",
      },
    ],

    proTip:
      "Learn the basics of HTML well, it will make your journey easier ahead!",
  },

  {
    stepNumber: 2,
    name: "CSS",
    image: CSSImage,
    description:
      "CSS is used to style and design web pages, making them visually appealing, responsive, and user-friendly.",

    features: [
      {
        icon: "ph-bold ph-palette",
        title: "Style the Web",
        description:
          "Learn how to style HTML elements and create beautiful interfaces.",
      },
      {
        icon: "ph-bold ph-device-mobile",
        title: "Responsive Design",
        description:
          "Build layouts that work well on different screen sizes.",
      },
      {
        icon: "ph-bold ph-sparkle",
        title: "Modern UI",
        description:
          "Use colors, spacing, animations and effects to improve your designs.",
      },
    ],

    proTip:
      "Practice layouts and responsive design to build better user interfaces!",
  },

  {
    stepNumber: 3,
    name: "JavaScript",
    image: JavaScriptImage,
    description:
      "JavaScript adds logic and interactivity to websites, allowing users to interact with dynamic web applications.",

    features: [
      {
        icon: "ph-bold ph-brackets-curly",
        title: "Learn the Basics",
        description:
          "Understand variables, functions, arrays, objects and other fundamentals.",
      },
      {
        icon: "ph-bold ph-cursor-click",
        title: "Add Interactivity",
        description:
          "Make websites interactive using events and user actions.",
      },
      {
        icon: "ph-bold ph-browser",
        title: "Work with the DOM",
        description:
          "Manipulate HTML elements and update webpage content dynamically.",
      },
    ],

    proTip:
      "Build small JavaScript projects to strengthen your problem-solving skills!",
  },

  {
    stepNumber: 4,
    name: "React",
    image: ReactImage,
    description:
      "React is a JavaScript library for building modern, reusable, and interactive user interfaces.",

    features: [
      {
        icon: "ph-bold ph-puzzle-piece",
        title: "Build Components",
        description:
          "Create reusable components to build modern user interfaces.",
      },
      {
        icon: "ph-bold ph-database",
        title: "Manage State",
        description:
          "Learn how to manage changing data and user interactions.",
      },
      {
        icon: "ph-bold ph-stack",
        title: "Create Applications",
        description:
          "Combine components to build complete React applications.",
      },
    ],

    proTip:
      "Focus on understanding components, props and state before moving to advanced React!",
  },

  {
    stepNumber: 5,
    name: "Tools & Deploy",
    image: ToolsAndDeploymentImage,
    description:
      "Learn the essential tools and workflows used to manage, deploy, and share your frontend projects.",

    features: [
      {
        icon: "ph-bold ph-github-logo",
        title: "Git & GitHub",
        description:
          "Learn how to manage your code and collaborate using Git and GitHub.",
      },
      {
        icon: "ph-bold ph-terminal-window",
        title: "Development Tools",
        description:
          "Use browser DevTools and other tools to debug and improve your projects.",
      },
      {
        icon: "ph-bold ph-rocket-launch",
        title: "Deploy Projects",
        description:
          "Publish your projects online and make them accessible to others.",
      },
    ],

    proTip:
      "Keep your projects on GitHub and deploy them to build a strong frontend portfolio!",
  },
]

export default steps