import type { Translations } from "../types";

export const translations = {
  'nav.home': 'Inicio',
  'nav.about': 'Sobre mi',
  'nav.skills': 'Habilidades',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',
  'home.title': 'Frontend developer',
  'home.description': '¡Hola, soy Ariel! Me encanta crear soluciones mediante código. Tengo experiencia laboral en Frontend, pero también tengo conocimientos sobre backend, scraping y creando bots'
} as const satisfies Translations