import { AboutMeData } from './../shared/interfaces';

const yearsSince = new Date().getFullYear() - 2019 - 1;

const aboutMeData: AboutMeData = {
  brief: [
    `Over the past ${yearsSince} years, I've been implementing user friendly UIs and experiences. I've tackled a diverse range of projects spanning e-commerce, agri-tech, edtech, and SaaS products. Throughout my work, I've collaborated with fellow engineers and product designers to bring these experiences to life. It's been a wild ride, but an incredibly rewarding one!`,
    "When I'm not writing code, you'll find me either listening to music, writing (usually unpublished rants and or poems 🙃), or visiting family.",
  ],
  workExperience: [
    {
      workType: 'Hubtel Limited (Full-Time, Remote - Ghana)',
      title: 'Frontend Engineer',
      duration: 'November 2023 – Present',
    },
    {
      workType: 'Sommalife Limited (Contract, Remote - Ghana)',
      title: 'Lead Frontend Engineer',
      duration: 'June 2022 – November 2023',
    },
    {
      workType: 'Scynett Deutschland GmbH (Full time, Remote - Germany/Ghana)',
      title: 'Software Engineer',
      duration: 'March 2021 – July 2023',
    },
    {
      workType: 'Kauri Africa (Accra, Ghana)',
      title: 'Co-Founder, Lead Software Engineer',
      duration: 'September 2020 – January 2022',
    },
    {
      workType: 'GOSANET Foundation (Ho, Ghana)',
      title: 'Web Developer (Freelance)',
      duration: 'November 2018 – January 2021',
    },
  ],
  education: [
    {
      schoolName: 'University of Education, Winneba, Ghana',
      programme: 'BSc. Information and Communication Technology',
    },
  ],
  skills: [],
  certifications: [
    {
      title:
        'Android Development Certificate, Google Africa Developer Training Program',
      link: 'https://adscerts.com/scholar/544518FBC4F2873C',
    },
  ],
  tools: [
    'Figma',
    'React JS',
    'Next JS',
    'JavaScript/TypeScript',
    'TailWind CSS',
    'Bootstrap',
    'Dart/Flutter',
    'C#/.Net Blazor',
    'MySQL',
    'SQLite',
    'Firebase/NoSql',
    'Supabase/PostgreSql',
    'gRPC Web',
    'Vercel',
    'Digital Ocean',
    'Azure',
    'Docker',
  ],
};

export default aboutMeData;
