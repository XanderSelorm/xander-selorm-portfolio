import { IProject } from "shared/interfaces";

const projectsData: IProject[] = [
  {
    id: 'treesyt',
    name: 'Treesyt Website & Dashboard',
    url: 'https://www.treesyt.com',
    description: 'An innovative proprietary agri-tech platform',
    image: '/imgs/projects/treesyt-project.png',
    stack: 'NextJS | TypeScript | TailwindCSS',
  },
  {
    id: '1m1s-express',
    name: 'Experience seamless transportation at your fingertips',
    url: 'https://www.1m1sexpress.com/',
    description: `With 1M1S Express, ride-hailing becomes reliable for your convenience. Whether you need a quick ride, want to schedule one ahead of time, or track your trips in real-time, 1M1S Express has you covered`,
    image: '/imgs/projects/1m1s.png',
    stack: 'NextJS | TypeScript | TailwindCSS',
    // page: '/projects/1m1s-express',
  },
  {
    id: 'devspool',
    name: 'Bye bye to sending job application emails!',
    url: 'https://devspool.scynett.com/',
    description:
      'A platform to help streamline the recruiting process for Human Resource Managers and applicants seeking to join Scynett.',
    image: '/imgs/projects/devs-pool-project.png',
    stack: 'React JS | TypeScript | TailwindCSS',
  },
  {
    id: 'vizitors-log',
    name: 'Maintaining a record of all the visitors in the workplace',
    url: 'https://www.vizitorslog.app/',
    description: `Vizitorslog streamlines the process of screening, validating, and monitoring individuals/customers across all your business locations, while ensuring compliance with privacy and safety regulations.`,
    image: '/imgs/projects/vizitors-log-project.png',
    stack: 'React JS | TypeScript | TailwindCSS',
    page: '/projects/vizitors-log',
  },
  {
    id: 'urcook',
    name: 'Order your favorite meals from your favorite chefs!',
    url: 'https://play.google.com/store/apps/details?id=com.arbutus.urcook',
    description:
      'This is a customer facing apllication which brings cutomers directly in touch with their favorite chefs for their favorite meals.',
    image: '/imgs/projects/urcook-project.png',
    stack: 'Flutter | Firebase',
    page: '/projects/urcook',
  },
  {
    id: 'tailors-note',
    name: 'A productivity tool for the modern day couture',
    url: 'https://www.tailorsnote.com',
    page: '/projects/projects/tailors-note',
    description:
      "Tailorsnote offers a novel solution for fashion designers to efficiently manage measurement details, tasks, and customers' data and communications.",
    image: '/imgs/tailors-note-project.png',
    stack: 'Flutter | Firebase | HTML/CSS',
    // linkText:""
  },
  //   {
  //     id: 'tbd',
  //     name: 'The Business Directory',
  //     url: 'https://www.wedeyvolta.com',
  //     description:
  //       'An innovative platform to bring businesses to the general public. at no cost!',
  //     image: '/imgs/business-directory-project.png',
  //     stack: 'React JS | Firebase',
  //     page: '/projects/tbd',
  //   },
];

export default projectsData;
