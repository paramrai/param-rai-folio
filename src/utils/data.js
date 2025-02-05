import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";

import PROJECT_IMG_1 from "../assets/ai_ss.png";
import PROJECT_IMG_2 from "../assets/ai_ss.png";
import PROJECT_IMG_3 from "../assets/ai_ss.png";
import PROJECT_IMG_4 from "../assets/ai_ss.png";
import PROJECT_IMG_5 from "../assets/ai_ss.png";
import PROJECT_IMG_6 from "../assets/ai_ss.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
  { id: "01", count: "3+", label: `Years of \nExperieance` },
  { id: "03", count: "20+", label: "Happy \nClients" },
  { id: "04", count: "10+", label: "Awards \nReceived" },
  { id: "02", count: "50+", label: "Projects \nCompleted" },
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
    title: "Uber clone ,mern stack app",
    image: PROJECT_IMG_1,
    tags: ["React", "Express.js", "MongoDB", "Node.Js"],
    description:
      "A full-featured Uber clone appli application built using the the MERN stack.",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "MySQL", "Redux"],
    description:
      "An admin dashboard for managing an e-commerce platform, with detailed analytics.",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    image: PROJECT_IMG_3,
    tags: ["Socket.io", "Express", "MongoDB", "React"],
    description:
      "A chat application that supports real-time messaging between users.",
  },
  {
    id: 4,
    title: "Task Management System",
    image: PROJECT_IMG_4,
    tags: ["React", "Firebase", "Material UI"],
    description:
      "A system for managing and tracking tasks, with a sleek Material UI design.",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    image: PROJECT_IMG_5,
    tags: ["React", "Weather API", "CSS3"],
    description:
      "An application that provides weather forecasts and updates using a weather API.",
  },
  {
    id: 6,
    title: "Portfolio Website",
    image: PROJECT_IMG_6,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    description:
      "A personal portfolio website to showcase projects and skills, built with React and Tailwind CSS.",
  },
];
