export interface Link {
  name: string
  href: string
}

export const getLinks = <T extends Function>(t: T): Link[] => [
  {
    name: t('nav.home'),
    href: '#home'
  },
  {
    name: t('nav.experience'),
    href: '#experience'
  },
  {
    name: t('nav.skills'),
    href: '#skills'
  },
  {
    name: t('nav.projects'),
    href: '#projects'
  },
  {
    name: t('nav.about'),
    href: '#about'
  },
]