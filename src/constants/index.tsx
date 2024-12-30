import nextImg from "../public/next.png";
import TailwindImg from "../public/tail.svg";
import tsImg from "../public/ts.svg";
import htmlImg from "../public/html.png";
import cssImg from "../public/css.png";
import jsImg from "../public/js.png";
import reactImg from "../public/react.png";
import nodeImg from "../public/node.png";
import github from "../public/github.png";
import vscode from "../public/vscode.png";
import { Github, Linkedin, Twitter } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export const language = [
  { alt: "html", img: htmlImg },
  { alt: "css", img: cssImg },
  { alt: "js", img: jsImg },
  { alt: "ts", img: tsImg },
];

export const framework = [
  { alt: "react", img: reactImg },
  { alt: "nextjs", img: nextImg },
  { alt: "nodejs", img: nodeImg },
  { alt: "tailwind", img: TailwindImg },
  { alt: "github", img: github },
  { alt: "vscode", img: vscode },
];

export const socialMedia = [
  {
    id: 1,
    img: <Github />,
    link: "https://github.com/abdulrg01",
  },
  {
    id: 2,
    img: <Twitter />,
    link: "https://twitter.com/Abdulra01025525",
  },
  {
    id: 3,
    img: <Linkedin />,
    link: "https://www.linkedin.com/in/abdulrahman-abubakar-b464a72a1",
  },
];

export const footerLinks = [
  {
    title: "Email",
    name: "Write me",
    href: "abdulrg01@gmail.com",
    desc: "Message me via email",
    icon: <MdEmail />,
  },
  {
    title: "LinkedIn",
    name: "Write me",
    href: "https://www.linkedin.com/in/abdulrahman-abubakar-b464a72a1",
    desc: "Linkedin profile",
    icon: <LiaLinkedin />,
  },
  {
    title: "Twitter",
    name: "Write me",
    href: "https://twitter.com/Abdulra01025525",
    desc: "Twitter formerly name X",
    icon: <BsTwitterX />,
  },
  {
    title: "Whatsapp",
    name: "Write me",
    href: "/footer",
    desc: "+2348063610782",
    icon: <BsWhatsapp />,
  },
];

export const experience = [
  { desc: "Years of Experience", num: 3 },
  { desc: "Projects Completed", num: 6 },
  { desc: "Clients", num: 15 },
];
