import type { Translations } from "../types";

export const translations = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'home.title': 'Frontend developer',
  'home.description': "Hello, I'm Ariel! I love to create solutions by using code. I have work experience in Frontend, but I also know about backend, scraping, and creating bots"
} as const satisfies Translations