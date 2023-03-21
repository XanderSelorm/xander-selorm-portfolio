export interface IProject {
    id: string;
    name: string;
    url: string | null;
    description: string;
    image: string;
    stack: string;
    linkText?: string;
    page?: string;
}

export interface AboutMeData {
    brief: string[];
    workExperience: WorkExperience[];
    education: Education[];
    skills: string[];
    certifications: Course[];
    techStacks: string[];
}

export interface WorkExperience {
    workType: string;
    title: string;
    duration: string;
}

export interface Education {
    schoolName: string;
    programme: string;
}

export interface Course {
    title: string;
    link: string;
}
