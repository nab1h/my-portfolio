import { IContNavbar, ILinksPage } from "@/interfaces";
import { FaFacebook, FaGithub, FaLaravel, FaLinkedin, FaPhp, FaSync } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiChakraui,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiVuedotjs,
  SiMysql,
  SiAxios,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiJquery,
  SiVite,
} from "react-icons/si";
import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiPostman,
} from "react-icons/si";


// Navbar
export const iconNavbar: IContNavbar[] = [
  {
    icon: FaGithub,
    href: "https://github.com/nab1h",
    label: "Github",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nab1h/",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/nab1h2",
    label: "Facebook",
  },
];
// Link Page
export const LinksPage: ILinksPage[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];
// About Page 
export const skillsAboutPage = [
  "React",
  "Laravel",
  "Next.js",
  "Vue",
  "TypeScript",
  "Chakra UI",
  "Figma",
];
// Projects Page
export const projectsData = [
  {
    title: "Medical Management System & Dental Clinic Platform",
    description:
      "A specialized healthcare platform developed with Laravel and Blade, designed for dental clinics to manage their digital presence and patient interactions. The project features a custom CMS for managing medical services and clinic information, alongside an integrated Appointment Booking System. It focuses on providing a professional user experience with a responsive design, interactive service galleries, and seamless communication channels via WhatsApp and direct call integration.",
    image: "/projects/dentosmile.png",
    tools: [SiPhp, SiLaravel, SiBootstrap, SiMysql],
    liveUrl: "https://dentosmile.online/",
    githubUrl: "https://github.com/nab1h/dentosmile.git",
  },
  {
    title:
      "Modern Service-Based Web Application for Construction & Maintenance",
    description:
      "A high-performance, responsive landing page developed for a construction and maintenance firm in Dubai. Built with Vue.js to ensure a smooth, reactive user experience. The project focuses on conversion-driven design, featuring categorized service sections, interactive contact elements (WhatsApp & Direct Call), and a clean, professional UI optimized for local SEO and lead generation.",
    image: "/projects/construction.png",
    tools: [SiVuedotjs, SiJavascript, SiBootstrap, SiHtml5],
    liveUrl: "https://aleslamya.com/",
    githubUrl: "https://github.com/nab1h/construction-services.git",
  },
  {
    title: "Full-Stack Creative Portfolio with Custom CMS",
    description:
      "A comprehensive web solution developed using Laravel and Blade engine for robust backend logic, combined with a sleek, responsive frontend built with Bootstrap. The project features a custom-built Content Management System (CMS), allowing the artist to seamlessly manage their gallery, update project milestones, and maintain professional content without touching the code.",
    image: "/projects/portfolio.png",
    tools: [SiPhp, SiLaravel, SiBootstrap, SiJavascript],
    liveUrl: "https://mahmoud-othman.online/",
    githubUrl: "https://github.com/nab1h/mahmoud-elagooz-portfolio.git",
  },
  {
    title: "DentoSmile: Advanced Multi-Clinic Management System (SaaS Ready)",
    description:
      "A robust, high-performance SaaS-ready platform for dental clinics, engineered with a Decoupled Architecture. The frontend is a sophisticated Single Page Application (SPA) built with React and TypeScript, styled with Tailwind CSS for a modern, responsive UI. It consumes a secure Laravel RESTful API backend, handling complex data flows via Axios. Features include real-time appointment scheduling, patient review systems, and a comprehensive management dashboard, all focused on type-safety, scalability, and seamless user interaction.",
    image: "/projects/saas.png",
    tools: [SiTypescript, SiReact, SiLaravel, SiTailwindcss, SiAxios],
    liveUrl: "https://nabih-alashmawy.online/",
    liveUrlOne: "https://cliniccore.online/dentosmile/",
    liveUrlTwo: "https://cliniccore.online/elsabail/",
    githubUrl: "https://github.com/nab1h/saas-clininc.git",
  },
  {
    title: "Coffee-Shop: High-End E-commerce Platform with Full Dashboard",
    description:
      "A feature-rich E-commerce solution built as a Decoupled System. The frontend is a high-performance React SPA strictly typed with TypeScript, utilizing Redux Toolkit for sophisticated state management (Cart logic, Dark/Light modes, User sessions). Styled with Shadcn UI for a premium look. The backend is a robust Laravel API secured by Laravel Passport (OAuth2) for safe authentication. It includes a custom CMS Dashboard for real-time inventory management, order tracking, and sales analytics.",
    image: "/projects/ecommerce.png",
    tools: [SiTypescript, SiReact, SiRedux, SiLaravel, SiShadcnui],
    liveUrl: "https://cliniccore.online/dentosmile/",
    githubUrl: "https://github.com/nab1h/saas-clininc.git",
  },
];
// Skills
export const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Php", icon: FaPhp, color: "#3776AB" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Laravel", icon: FaLaravel, color: "#F05032" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
      { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      {
        name: "AJAX",
        icon: FaSync,
        color: "#F7DF1E",
      },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
];