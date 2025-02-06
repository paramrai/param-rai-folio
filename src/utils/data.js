import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaLightbulb,
  FaHandsHelping,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaListOl,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiDocker,
  SiJenkins,
  SiGit,
  SiPostgresql,
  SiKubernetes,
  SiNginx,
} from "react-icons/si";

import { FaXTwitter, FaDribbble } from "react-icons/fa6";

import PROJECT_IMG_1 from "../assets/ai_ss.png";
import PROJECT_IMG_2 from "../assets/uber_ss.png";
import PROJECT_IMG_3 from "../assets/vanilla_js.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
  { id: "01", count: "3+", label: `Years of \nExperience` },
  { id: "03", count: "40+", label: "Happy \nClients" },
  { id: "04", count: "10+", label: "Incentives \nReceived" },
  { id: "02", count: "50+", label: "Projects \nCompleted" },
  { id: "07", count: "300+", label: "Cups of \nCoffee" },
  { id: "10", count: "25+", label: "Certificates \nAchieved" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    progress: 95,
    type: "frontend",
    skill: "React",
    description:
      "Expert in React with extensive experience building modern SPAs, managing complex state with Redux/Context, implementing custom hooks, optimizing performance, and creating reusable component libraries. Skilled in React Router DOM",
  },
  {
    id: "02",
    icon: FaReact,
    progress: 50,
    type: "frontend",
    skill: "React Native",
    description:
      "Proficient in React Native, enabling the development of cross-platform mobile applications with a consistent user experience.",
  },
  {
    id: "02",
    icon: FaHtml5,
    progress: 95,
    type: "frontend",
    skill: "HTML5",
    description:
      "Strong foundation in HTML5 with expertise in semantic markup, accessibility standards, and modern web features. Skilled in creating responsive layouts and implementing best practices for SEO.",
  },
  {
    id: "03",
    icon: FaCss3,
    progress: 90,
    type: "frontend",
    skill: "CSS3",
    description:
      "Advanced CSS3 skills including Flexbox, Grid, animations, and responsive design. Experienced with CSS preprocessors like SASS and modern CSS frameworks.",
  },
  {
    id: "04",
    icon: BiLogoJavascript,
    progress: 90,
    type: "frontend",
    skill: "JavaScript",
    description:
      "Proficient in ES6+ features including promises, async/await, modules, and modern array methods. Strong understanding of DOM manipulation and browser APIs.",
  },
  {
    id: "05",
    icon: SiMongodb,
    progress: 85,
    type: "backend",
    skill: "MongoDB",
    description:
      "Experienced in MongoDB database design, CRUD operations, aggregation pipeline, and implementing data models. Skilled with Mongoose ODM for Node.js.",
  },
  {
    id: "06",
    icon: FaNodeJs,
    progress: 88,
    type: "backend",
    skill: "Node.js",
    description:
      "Strong Node.js skills with experience in building scalable server-side applications, REST APIs, and real-time applications using Socket.io.",
  },
  {
    id: "07",
    icon: SiExpress,
    progress: 85,
    type: "backend",
    skill: "Express.js",
    description:
      "Proficient in Express.js framework, building RESTful APIs, implementing middleware, handling authentication, and managing routes effectively.",
  },
  {
    id: "08",
    icon: SiMysql,
    progress: 80,
    type: "backend",
    skill: "MySQL",
    description:
      "Skilled in MySQL database design, complex queries, stored procedures, and optimization. Experience with data modeling and normalization.",
  },
  {
    id: "09",
    icon: FaLightbulb,
    progress: 100,
    type: "soft-skills",
    skill: "Communication",
    description:
      "Excellent verbal and written communication skills, adept at conveying technical information to diverse audiences. Strong listener and collaborative team player.",
  },
  {
    id: "10",
    icon: FaHandsHelping,
    progress: 100,
    type: "soft-skills",
    skill: "Problem Solving",
    description:
      "Creative problem solver with a knack for identifying root causes and implementing effective solutions. Skilled in troubleshooting and debugging.",
  },
  {
    id: "11",
    icon: FaUsers,
    progress: 95,
    type: "soft-skills",
    skill: "Teamwork",
    description:
      "Strong team player with experience working in collaborative environments. Adept at building positive working relationships and fostering a team-oriented culture.",
  },
  {
    id: "14",
    icon: SiGit,
    progress: 90,
    type: "tools",
    skill: "Git",
    description:
      "Skilled in using Git for version control, managing repositories, branching, merging, and collaborating with team members using platforms like GitHub and GitLab.",
  },
  {
    id: "12",
    icon: SiDocker,
    progress: 85,
    type: "tools",
    skill: "Docker",
    description:
      "Proficient in using Docker for containerization, creating and managing Docker images, and orchestrating containers using Docker Compose.",
  },
  {
    id: "15",
    icon: FaClock,
    progress: 90,
    type: "soft-skills",
    skill: "Time Management",
    description:
      "Excellent at prioritizing tasks, managing deadlines, and efficiently utilizing time to achieve project goals. Skilled in using time management tools and techniques.",
  },
  {
    id: "16",
    icon: FaGraduationCap,
    progress: 95,
    type: "soft-skills",
    skill: "Adaptability",
    description:
      "Highly adaptable and capable of quickly learning new technologies and methodologies. Comfortable working in fast-paced and dynamic environments.",
  },
  {
    id: "17",
    icon: FaListOl,
    progress: 90,
    type: "soft-skills",
    skill: "Leadership",
    description:
      "Effective leader with experience guiding teams, mentoring junior developers, and driving project success. Skilled in conflict resolution and team motivation.",
  },
  {
    id: "19",
    icon: SiKubernetes,
    progress: 80,
    type: "tools",
    skill: "Kubernetes",
    description:
      "Experienced in using Kubernetes for container orchestration, managing clusters, deploying applications, and automating scaling and management processes.",
  },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Soft Skills", value: "soft-skills" },
];

export const ABOUT_ME = {
  socialLinks: [
    { id: "01", label: "facebook", icon: FaFacebook, link: "#" },
    { id: "02", label: "instagram", icon: FaInstagram, link: "#" },
    { id: "03", label: "twitter", icon: FaXTwitter, link: "#" },
    { id: "04", label: "linkedin", icon: FaLinkedin, link: "#" },
    { id: "05", label: "dribbble", icon: FaDribbble, link: "#" },
  ],
  email: "paramrai0202@gmail.com",
  phone: "+91 6376645911",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Ai Powered : Collabrative Code editer",
    image: PROJECT_IMG_1,
    github: "https://github.com/paramrai/ai_powered_coding_collab",
    demo: "https://ai-powered-coding-collab.vercel.app/",
    tags: ["React", "Express.js", "MongoDB", "Node.Js"],
    description:
      "A collaborative code editor with AI-powered features including chat prompts for code assistance, AI code edits, and real-time group chat using Socket.io. Users can sign up, create projects, invite collaborators, and code together in real-time. Future updates will include video chat functionality.",
  },
  {
    id: 2,
    title: "Uber clone",
    image: PROJECT_IMG_2,
    github: "https://github.com/paramrai/uberClone",
    demo: "https://uber-like.vercel.app/",
    tags: ["React", "Express.js", "MongoDB", "Node.Js"],
    description:
      "A full-stack Uber like app built with React and MongoDB featuring user authentication for riders and captains, real-time ride booking, geolocation-based navigation, OTP verification system, and ride tracking functionality.",
  },
  {
    id: 3,
    title: "Master Vanilla Js",
    image: PROJECT_IMG_3,
    github: "https://github.com/paramrai/vanillaJs",
    demo: "https://master-vanilla-js.vercel.app/",
    tags: ["React", "Express.js", "MongoDB", "Node.Js"],
    description:
      "A collection of 100+ vanilla JavaScript projects showcasing various web development concepts including DOM manipulation, APIs, animations, games and interactive user interfaces built without any frameworks. More projects are being added continuously.",
  },
];
