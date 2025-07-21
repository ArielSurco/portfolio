export enum SkillTag {
  OVERVIEW = 'overview',
  FRONTEND = 'frontend',
  BACKEND = 'backend'
}

export interface Skill {
  src: string
  title: string
}

const skills = {
  nextjs: {
    src: '/assets/icons/nextjs.svg',
    title: 'NextJS'
  },
  react: {
    src: '/assets/icons/reactjs.svg',
    title: 'React'
  },
  astro: {
    src: '/assets/icons/astro.svg',
    title: 'Astro'
  },
  nestjs: {
    src: '/assets/icons/nestjs.svg',
    title: 'NestJS'
  },
  express: {
    src: '/assets/icons/express.svg',
    title: 'Express'
  },
  nodejs: {
    src: '/assets/icons/nodejs.svg',
    title: 'NodeJS'
  },
  mongodb: {
    src: '/assets/icons/mongo.svg',
    title: 'MongoDB'
  },
  typescript: {
    src: '/assets/icons/typescript.svg',
    title: 'TypeScript'
  },
  javascript: {
    src: '/assets/icons/javascript.svg',
    title: 'JavaScript'
  },
  tailwind: {
    src: '/assets/icons/tailwind.svg',
    title: 'Tailwind'
  },
  sass: {
    src: '/assets/icons/sass.svg',
    title: 'Sass'
  },
  bootstrap: {
    src: '/assets/icons/bootstrap.png',
    title: 'Bootstrap'
  },
  git: {
    src: '/assets/icons/git.svg',
    title: 'Git'
  },
  html: {
    src: '/assets/icons/html.svg',
    title: 'HTML'
  },
  css: {
    src: '/assets/icons/css.svg',
    title: 'CSS'
  },
  postgresql: {
    src: '/assets/icons/postgresql.png',
    title: 'PostgreSQL'
  }
} as const satisfies Record<string, Skill>

export const skillsByTag: Record<SkillTag, Skill[]> = {
  [SkillTag.OVERVIEW]: [
    skills.nextjs,
    skills.react,
    skills.typescript,
    skills.javascript,
    skills.tailwind,
    skills.css,
    skills.html,
    skills.nestjs,
    skills.express,
    skills.nodejs,
    skills.mongodb,
    skills.postgresql,
    skills.git
  ],
  [SkillTag.FRONTEND]: [
    skills.nextjs,
    skills.react,
    skills.astro,
    skills.typescript,
    skills.javascript,
    skills.tailwind,
    skills.css,
    skills.sass,
    skills.html,
    skills.bootstrap,
    skills.git
  ],
  [SkillTag.BACKEND]: [
    skills.nestjs,
    skills.express,
    skills.nodejs,
    skills.mongodb,
    skills.postgresql,
    skills.typescript,
    skills.javascript,
    skills.git
  ],
}