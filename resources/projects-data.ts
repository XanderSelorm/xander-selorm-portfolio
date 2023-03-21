import { IProject } from "shared/interfaces";

const projectsData: IProject[] = [
        {
        id: "vizitors-log",
        name: "Maintaining a record of all the visitors in the workplace",
            url: "https://www.vizitorslog.com",
        description: `Vizitorslog streamlines the process of screening, validating, and monitoring individuals/customers across all your business locations, while ensuring compliance with privacy and safety regulations.`,
            image: "/imgs/vizitors-log-project.png",
        stack: "React JS | TypeScript | TailwindCSS",
        page: "/projects/vizitors-log",
        },
        {
            id: "tailors-note",
            name: "A productivity tool for the modern day couture",
            url: "https://www.tailorsnote.com",
            page: "/projects/tailors-note",
            description: "Tailorsnote offers a novel solution for fashion designers to efficiently manage measurement details, tasks, and customers' data and communications.",
            image: "/imgs/tailors-note-project.png",
            stack: "Flutter | Firebase | HTML/CSS",
            // linkText:""
        },
        {
            id: "urcook",
            name: "Order your favorite meals from your favorite chefs!",
            url: "https://play.google.com/store/apps/details?id=com.arbutus.urcook",
            description: "This is a customer facing apllication which brings cutomers directly in touch with their favorite chefs for their favorite meals.",
            image: "/imgs/urcook-project.png",
            stack: "Flutter | Firebase",
            page: "/projects/urcook",
        },
        {
            id: "treesyt",
            name: "Treesyt Website & Dashboard",
            url: null,
            description: "An innovative agri-tech platform",
            image: "/imgs/treesyt-project.png",
            stack: "Next JS | TypeScript | TailwindCSS",
        },
        {
            id: "tbd",
            name: "The Business Directory",
            url: "https://www.wedeyvolta.com",
            description: "An innovative platform to bring businesses to the general public. at no cost!",
            image: "/imgs/business-directory-project.png",
            stack: "React JS | Firebase",
            page: "/projects/tbd",
        },
        {
            id: "devspool",
            name: "Bye bye to sending job application emails!",
            url: null,
            description: "A platform to help streamline the recruiting process for Human Resource Managers and applicants seeking to join Scynett.",
            image: "/imgs/devs-pool-project.png",
            stack: "React JS | TypeScript | TailwindCSS",
        }
    ];

export default projectsData;
