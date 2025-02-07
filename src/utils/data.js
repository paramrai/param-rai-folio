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
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
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

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    type: "frontend",
    skill: "React",
    color: "#61DBFB",
  },
  {
    id: "02",
    icon: FaReact,
    type: "frontend",
    skill: "React Native",
    color: "#a200ff",
  },
  {
    id: "03",
    icon: FaHtml5,
    type: "frontend",
    skill: "HTML5",
    color: "#E34F26",
  },
  {
    id: "04",
    icon: FaCss3,
    type: "frontend",
    skill: "CSS3",
    color: "#1572B6",
  },
  {
    id: "05",
    icon: BiLogoJavascript,
    type: "frontend",
    skill: "JavaScript",
    color: "#F7DF1E",
  },
  {
    id: "06",
    icon: SiMongodb,
    type: "backend",
    skill: "MongoDB",
    color: "#47A248",
  },
  {
    id: "07",
    icon: FaNodeJs,
    type: "backend",
    skill: "Node.js",
    color: "#339933",
  },
  {
    id: "08",
    icon: SiExpress,
    type: "backend",
    skill: "Express.js",
    color: "#000000",
  },
  {
    id: "09",
    icon: SiMysql,
    type: "backend",
    skill: "MySQL",
    color: "#4479A1",
  },
  {
    id: "10",
    icon: SiGit,
    type: "tools",
    skill: "Git",
    color: "#F05032",
  },
  {
    id: "11",
    icon: SiDocker,
    type: "tools",
    skill: "Docker",
    color: "#2496ED",
  },
  {
    id: "12",
    icon: SiKubernetes,
    type: "tools",
    skill: "Kubernetes",
    color: "#326CE5",
  },
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
