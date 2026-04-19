import { IContNavbar, ILinksPage } from "@/interfaces";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
