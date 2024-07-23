export const SITE_TITLE = 'Filipe Lima'
export const SITE_DESCRIPTION = 'Welcome to my personal website!'

export const NAME = 'Filipe Lima'
export const ROLE = 'Fullstack Software Engineer'
export const BOOKS = ['Clean Code - Robert C. Martin', 'Metamorphosis - Franz Kafka', 'Fahrenheit 451 - Ray Bradbury', 'The Crow and Other Stories - Edgar Allan Poe']
export const HOBBIES = ['Linux customization', 'gaming', 'reading', 'coding']
export const FRONT_STACK = ['TypeScript', 'React', 'JavaScript', 'Next.js', 'Tailwind', 'Vite', 'Astro']
export const BACK_STACK = ['Node.js', 'Go', 'Express', 'PostgreSQL', 'GraphQL', 'Prisma', 'SQL']
export const GET_COMMENT_STRING = (username: string, link: string): string => {
  return `Reading ${link} by ${username}%0A%0AI think... `
}
export const SOCIAL = [
  {
    link: 'https://github.com/datsfilipe',
    name: 'Github'
  },
  {
    link: 'https://twitter.com/datsfilipe1',
    name: 'Twitter'
  },
  {
    link: 'https://www.linkedin.com/in/datsfilipe/',
    name: 'Linkedin'
  },
  {
    link: 'https://www.reddit.com/user/datsfilipe',
    name: 'Reddit'
  },
  {
    link: 'mailto:contato@datsfilipe.dev',
    name: 'Email'
  },
  {
    link: 'https://www.youtube.com/@datsfilipe',
    name: 'Youtube'
  },
  {
    link: 'https://www.tiktok.com/@datsfilipe1',
    name: 'TikTok'
  }
]
export const OTHER_LINKS = [
  {
    name: 'Curriculum Vitae',
    link: '/FILIPE_LIMA-EN.pdf'
  },
  {
    link: 'https://github.com/sponsors/datsfilipe',
    name: 'Sponsor me on GitHub'
  },
  {
    link: 'https://ko-fi.com/datsfilipe',
    name: 'Buy me a coffee'
  }
]