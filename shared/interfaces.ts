export interface AboutMeData {
    brief: string;
    workExperience: WorkExperience[];
    education: Education[];
    skills: string[];
    courses: Course[];
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
