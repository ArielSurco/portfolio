import type { Translations } from "../types";

export const translations = {
  'nav.home': 'Home',
  'nav.experience': 'Experience',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'home.title': 'Frontend developer',
  'home.description': "Hello, I'm Ariel! I love to create solutions by using code. I have work experience in Frontend, but I also know about backend, scraping, and creating bots",
  'experience.title': 'Experience',
  'about.title': 'About me',
  'skills.title': 'Skills',
  'projects.title': 'Projects',
  'contact.title': 'Contact',
  'contact.github.alt': 'Github profile',
  'contact.linkedin.alt': 'Linkedin profile',
  'contact.download.alt': 'Curriculum',
  'contact.email.alt': 'Email',
  'experience.item-1.jobTitle': 'Frontend Developer',
  'experience.item-1.company': 'Midas Consultores',
  'experience.item-1.description': `Research and implementation of a Micro-Frontends architecture for the reengineering of a set of internal projects for a leading company in the oil sector.\nDevelopment of the reengineering of the web of a fintech specialized in investments and trading in the Stock Market, where I fulfilled the role of technical leader and frontend developer.`
} as const satisfies Translations
