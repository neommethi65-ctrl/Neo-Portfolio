# Neo Mmethi — Personal Portfolio

This is my personal portfolio website, built with React and Tailwind CSS as part of my React Fundamentals assignment.

## What it does

A one-page site with:
- A home section with my intro and photo
- An about section
- My current skills
- My projects, with links to each GitHub repo
- A contact form and links to my GitHub and LinkedIn

## Built with

- React
- Vite
- Tailwind CSS
- lucide-react (icons)

## Running it locally

1. Clone this repo
2. Install dependencies:
3. Start the dev server:
4. Open the localhost link it gives you in your browser

## Project structure
src/
├── assets/images/ → project screenshots and my profile photo
├── components/ → small reusable pieces (Navbar, ProjectCard, ContactForm, Footer, icons)
├── sections/ → the main page sections (Home, About, Skills, Projects, Contact)
├── data/
│ └── projects.js → all my project info in one place
├── App.jsx → puts all the sections together
├── main.jsx → entry point
└── utils.js → smooth-scroll helper


## What I learned

Building this taught me how to break a page into components, pass data between them using props, and use `useState` to handle things like the mobile menu and the contact form.

## Still to improve

- Connect the contact form to an actual email service (it's UI-only right now)
- Add more projects as I build them