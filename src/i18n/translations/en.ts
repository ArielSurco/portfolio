import type { Translations } from "../types";

export const translations = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'home.title': 'Frontend developer',
  'home.description': "Hello, I'm Ariel! I love to create solutions by using code. I have work experience in Frontend, but I also know about backend, scraping, and creating bots",
  'about.title': 'About me',
  'skills.title': 'Skills',
  'projects.title': 'Projects',
  'contact.title': 'Contact',
  'contact.github.alt': 'Github profile',
  'contact.linkedin.alt': 'Linkedin profile',
  'contact.download.alt': 'Curriculum',
  'contact.email.alt': 'Email'
} as const satisfies Translations
