import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  openai,
  neuronalytics,
  dvant,
  carrent,
  jobit,
  tripguide,
  ai,
  aws,
  pytorch,
  python,
  sql,
  tensorflow,
  typescript,
  docker,
  gcp,
  git,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Subject Matter Expert',
    icon: web,
  },
  {
    title: 'Product Lead',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'AI | ML Developer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Artificial Intelligence',
    icon: ai,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Amazon Web Service',
    icon: aws,
  },
  {
    name: 'Google Cloud Platform',
    icon: gcp,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Subject Matter Expert',
    companyName: 'OpenAI',
    icon: openai,
    iconBg: '#383E56',
    date: 'May 2022 - April 2024',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Applied AI R&D / Product Lead',
    companyName: 'Neuronalytics.AI',
    icon: neuronalytics,
    iconBg: '#E6DEDD',
    date: 'December 2020 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Member Board of Directors',
    companyName: 'Dvant Pharma',
    icon: dvant,
    iconBg: '#383E56',
    date: 'April 2024 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Steven proved me wrong.',
    name: 'Sara Lee',
    designation: 'CEO',
    company: 'John Lai',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Steven does.",
    name: 'David R. Horn',
    designation: 'CFO',
    company: 'Seer',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Steven optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Deepti Juturu',
    designation: 'CEO',
    company: 'PREZENTIUM',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
