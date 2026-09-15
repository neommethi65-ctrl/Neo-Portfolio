// All project info lives here in one place. Each object becomes the
// "project" prop passed into <ProjectCard /> over in Projects.jsx.
// Every project has an image field — the first three point at real
// screenshot placeholders (swap the files, not this code, once you
// have real screenshots), the rest use a generic placeholder for now.

import wanderlistImg from "../assets/images/wanderlist.png";
import quizBuildersImg from "../assets/images/quiz-builders.png";
import bakeryRevampImg from "../assets/images/bakery-revamp.png";
import devsquadImg from "../assets/images/devsquad-portfolio.png";
import digitalClockImg from "../assets/images/digital-clock.png";
import businessRevampImg from "../assets/images/business-revamp.png";
import diamondTechImg from "../assets/images/diamond-tech.png";

export const projects = [
  {
    title: "Wanderlist",
    desc: "A travel destinations page featuring picks across Africa, Europe, and Asia — Cape Town, Zanzibar, Paris, Rome, Tokyo, and Bali — each with a rating and short description.",
    tags: ["HTML", "CSS", "Solo project"],
    bg: "#F3E4D8",
    url: "https://github.com/neommethi65-ctrl/Janu26-html",
    image: wanderlistImg,
  },
  {
    title: "Quiz Builders",
    desc: "An interactive quiz app with four topics, three difficulty levels each, a countdown timer, and a leaderboard — built as part of a four-person team.",
    tags: ["JavaScript", "HTML", "CSS", "Team project"],
    bg: "#E4E9DE",
    url: "https://github.com/Durandt-Boshoff/Quiz_Builders",
    image: quizBuildersImg,
  },
  {
    title: "Tessa's Bakery — Website Revamp",
    desc: "A redesign of a bakery's website with a refreshed layout, styling, and branding, done collaboratively as a website-revamp exercise.",
    tags: ["HTML", "CSS", "Team project"],
    bg: "#F0DED9",
    url: "https://github.com/lusizosibiya/Revamp-A-Website---Tessa-s-Bakery",
    image: bakeryRevampImg,
  },
  {
    title: "DevSquad Portfolio",
    desc: "A shared team portfolio site with a home page and a contact page, showcasing four teammates' profiles side by side.",
    tags: ["HTML", "CSS", "Team project"],
    bg: "#E6E0ED",
    url: "https://github.com/Aaliyah-Fransman/DevSquad-Portfolio",
    image: devsquadImg,
  },
  {
    title: "Digital Clock",
    desc: "A live digital clock that displays the current time with AM/PM and today's date, updating every second using JavaScript's Date object and setInterval.",
    tags: ["HTML", "CSS", "JavaScript", "Solo project"],
    bg: "#DCE3E8",
    url: "https://github.com/neommethi65-ctrl/digital-clock-project",
    image: digitalClockImg,
  },
  {
    title: "Revamp: Business Website",
    desc: "A redesign of an existing spa/salon business website, rebuilt with Bootstrap to modernize the layout and visuals.",
    tags: ["HTML", "Bootstrap", "Solo project"],
    bg: "#EFE3D0",
    url: "https://github.com/neommethi65-ctrl/Revamp-business-web-",
    image: businessRevampImg,
  },
  {
    title: "Diamond Tech",
    desc: "An HTML and Bootstrap code-along project, built for practice working with Bootstrap's grid and components.",
    tags: ["HTML", "Bootstrap", "Practice"],
    bg: "#E8D9DC",
    url: "https://github.com/neommethi65-ctrl/Diamond-tech",
    image: diamondTechImg,
  },
];

// Skills shown in the "Currently learning" section
export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Git",
  "Responsive Design",
  "Node.js",
];
