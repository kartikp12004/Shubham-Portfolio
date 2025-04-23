// Update this file with your personal information to customize your portfolio.
// Place all images in the "img" folder inside the "public" directory and reference them using the path: "/img/FILE_NAME".

import { FiHome, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaFigma,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";

// List your technical skills below
export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "ExpressJS", icon: SiExpress, color: "#C9D1D9" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "C++", icon: FaCuttlefish, color: "#00599C" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};
export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: "#", // Replace "#" with your LinkedIn profile URL.
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: "#", // Replace "#" with your Github profile URL.
    size: "18px",
  },
];

// Add your projects here with their descriptions, features, and tech stack.
export const projects = [
  {
    name: "Sample Project 1",
    description: "Description about sample project 1",
    points: [
      "Feature 1 of the sample project.",
      "Feature 2 of the sample project.",
      "Feature 3 of the sample project.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },
  {
    name: "Sample Project 2",
    description: "Description about sample project 2",
    points: [
      "Feature 1 of the sample project.",
      "Feature 2 of the sample project.",
      "Feature 3 of the sample project.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },
  {
    name: "Sample Project 3",
    description: "Description about sample project 3",
    points: [
      "Feature 1 of the sample project.",
      "Feature 2 of the sample project.",
      "Feature 3 of the sample project.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },
  {
    name: "Sample Project 4",
    description: "Description about sample project 4",
    points: [
      "Feature 1 of the sample project.",
      "Feature 2 of the sample project.",
      "Feature 3 of the sample project.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Context API", icon: FaServer, color: "#6366F1" },
      { name: "OpenWeather API", icon: FaDatabase, color: "#0064a5" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },
];

// Update your personal information
export const personalInfo = {
  pfp: "/img/profilepic.webp",
  alt: "Sample Profile Pic",
  summary:
    "I'm a passionate Full-Stack Developer who enjoys building and exploring new technologies. Always learning and creating innovative solutions.",
  location: "Sample City, Sample Country",
};

// Update your education details
export const education = {
  college: "Sample University",
  course: "Master of Computer Applications",
  cgpa: "8.5",
  duration: "2020 - 2023",
};

// Update your work experience
export const experience = {
  companyName: "Sample Tech Company",
  title: "Front-End Developer Intern",
  duration: "Jan 2023 - July 2023",
  location: "Remote",
  points: [
    "Developed a key feature that improved user engagement.",
    "Collaborated with cross-functional teams to enhance UI/UX.",
    "Fixed critical bugs, improving performance.",
  ],
};
