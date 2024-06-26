export type SocialNetworkType = 'linkedin' | 'github' | 'telegram' | 'unsplash' | 'instagram';
export interface ExperienceItem {
  time: string;
  company: string;
  companyURL?: string;
  location: string;
  title: string;
  startDate: string;
  endData?: string;
  companyLogo?: string;
  content: {
    intro: string;
    list: string[];
    stack?: string[];
  };
  link?: {
    url: string;
    text: string;
  }[];
}

export const SOCIAL_NETWORK_LINKS: Record<SocialNetworkType, string> = {
  linkedin: 'https://linkedin.com/in/thinhtran98/',
  github: 'https://github.com/jimodayne',
  telegram: 'https://t.me/jimtran_hc',
  unsplash: 'https://unsplash.com/@jimcbl',
  instagram: 'https://instagram.com/jimcbl/',
};

export const techStacks: string[] = [
  'React.js',
  'Next.js',
  'Vue.js',
  'Node.js',
  'Python',
  'C#',
  'Java',
  'Ant Design',
  'Google Cloud Platform',
  'Tailwind CSS',
  'Firebase',
  'Typescript',
  'Javascript',
  'HTML',
  'CSS',
  'Postman',
];

export const experienceProps: ExperienceItem[] = [
  {
    time: 'Jul 2023 - Present',
    startDate: '2023-07-01',
    company: 'Hello Clever',
    companyURL: 'https://www.linkedin.com/company/helloclever/',
    location: 'Remote | Sydney, Australia',
    title: 'Growth Support Engineer',
    companyLogo: '/helloclever.jpeg',
    content: {
      intro: "Provided adept technical support for Hello Clever's Payment API integration:",
      list: [
        'Assisted developers to understand the documentation, troubleshoot problems, and optimize their integrations.',
        'Proficiently resolved software issues in complex environments.',
        'Demonstrated strong communication and problem-solving skills',
        'Contributed to a monthly revenue stream in the millions dollar.',
      ],
      stack: [
        'Postman',
        'Notion',
        'Figma',
        'Microsoft Office',
        'Skype',
        'Microsoft Teams',
        'Slack',
        'WordPress',
        'Rest API',
      ],
    },
  },
  {
    time: 'Nov 2022 - Jul 2023',
    startDate: '2022-11-01',
    endData: '2023-07-01',
    company: 'Sassybae',
    companyURL: 'https://www.linkedin.com/company/sassybae/',
    companyLogo: '/sassybae.jpeg',
    location: 'Remote | Sydney, Australia',
    title: 'Software Engineer',
    content: {
      intro: 'Developed the company website and backend service for the mobile application:',
      list: [
        'Constructed the company website using the latest modern stack, incorporating key modules like blogs, waitlist, and policy.',
        'Implemented API cloud functions for tasks such as filtering inappropriate images and retrieving nearby products using geohash for the mobile application.',
        'Attained a performance score of 98/100 for the desktop version and 91/100 for the mobile version through Google Lighthouse measurement.',
      ],
      stack: ['Next.js', 'React.js', 'Tailwind CSS', 'Firebase', 'Typescript', 'Node.js', 'Google Cloud Functions'],
    },
  },
  {
    time: 'Nov 2021 - Aug 2022',
    startDate: '2021-11-01',
    endData: '2022-08-01',
    company: 'LINE Corp',
    companyLogo: '/line.jpeg',
    location: 'Full-time | Ho Chi Minh City, Vietnam',
    companyURL: 'https://www.linkedin.com/company/linecorp/',
    title: 'Software Engineer',
    content: {
      intro:
        'Worked on several projects including LINE Healthcare, LINE Telemedicine and LINE Global Search, which serve over 100 million users a day.',
      list: [
        'Revamped the internal CMS codebase using Typescript to enhance maintainability and efficiency',
        'Developed innovative features and modules for internal content management systems.',
        'Collaborated effectively with a multi-lingual team comprising Japanese product owners, Korean project managers, and Vietnamese backend team.',
        "Actively contributed to the team's code review process, ensuring adherence to coding standards and best practices.",
      ],
      stack: ['Vue.js', 'Vuex', 'Bootstrap', 'Webpack', 'Vite'],
    },
  },
  {
    time: 'Jul 2019 - Oct 2021',
    startDate: '2019-07-01',
    endData: '2021-10-01',
    company: 'Zalo (VNG Corp)',
    location: 'Full-time | Ho Chi Minh City, Vietnam',
    companyLogo: '/zalo.jpeg',
    companyURL: 'https://www.linkedin.com/company/zalocareers/',
    title: 'Associate Software Engineer',
    content: {
      intro: `Spearheaded the development of management tools for Zalo's B2B products, generating millions of USD in annual revenue:`,
      list: [
        'Transformed existing applications with modern design systems, fostering enhanced user experiences and cleaner code.',
        'Pioneered the implementation of a microservices architecture using git submodules, enabling seamless integration and scalability.',
        `Revamped the landing page using NextJs, achieving a significant performance boost (up to +130% Google Lighthouse measurement).`,
        `Assumed leadership responsibilities, managing a team of four frontend developers and assigning tasks as directed by the technical manager.`,
      ],
      stack: ['ReactJs', 'NextJs', 'Ant Design', 'Redux', 'LESS', 'Java'],
    },
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
}

export const personalProjects: ProjectItem[] = [
  {
    title: 'jimcbl.dev',
    description:
      'Personal portfolio website showcasing  my diverse skillset in web development, with a collection of projects and work experiences.',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    url: 'https://github.com/jimodayne/jimcbl.dev',
    image: '/opengraph-image.jpg',
  },
  {
    title: 'Hello Clever Documentation',
    description:
      "Maintained latest documentation for Hello Clever's Payment API integration and merchant's comprehensive guide.",
    stack: ['Docusaurus', 'React.js', 'Postman'],
    url: 'https://docs.helloclever.co/docs/',
    image: '/helloclever-doc.png',
  },
  {
    title: 'Monster Chase',
    description:
      'A simple game to learn about game development. In the game, the player controls a character to void hitting the monster.',
    stack: ['Unity', 'C#'],
    url: 'https://github.com/jimodayne/monster_chase',
    image: '/monster-chase.png',
  },

  {
    title: "Sassybae's Landing Page",
    description: 'A landing page for Sassybae, a toy trading platform for kids.',
    stack: ['Next.js', 'Tailwind CSS', 'Storyblok', 'Node.js', 'Cloud Functions'],
    url: 'https://www.sassybae.com.au/',
    image: '/sassybaeWeb.png',
  },
  {
    title: 'Sturdy Octo Blog',
    description:
      'A full-stack blog application built with Next.js, Tailwind CSS, Ant Design, and Firebase. The application allows users to create, edit, and delete posts.',
    stack: ['Next.js', 'Tailwind CSS', 'Ant Design', 'Firebase', 'Node.js'],
    url: 'https://github.com/jimodayne/sturdy-octo-blog',
    image: '/sturdy-octo-blog.png',
  },

  {
    title: "Zalo Cloud's Landing Page",
    description:
      'A landing page for Zalo, a cloud service provider. The site is used to introduce the company and its services.',
    stack: ['Next.js', 'Tailwind CSS', 'Ant Design'],
    url: 'https://zalo.cloud/',
    image: '/zalo-cloud.png',
  },
];
