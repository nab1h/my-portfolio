import { IContNavbar, ILinksPage } from "@/interfaces";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
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
} from "react-icons/si";

export const iconNavbar: IContNavbar[] = [
  {
    icon: FaGithub,
    href: "https://github.com",
    label: "Github",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
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
    liveUrl: "https://cliniccore.online/dentosmile/",
    githubUrl: "https://github.com/nab1h/saas-clininc.git",
  },
];