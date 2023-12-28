import { StaticImageData } from "next/image"

export interface TabProps {
    label: string;
    skills: SkillProps[];
}

interface SkillProps {
    name: string;
    description?: string;
    color: string,
    progress: number,
    image: StaticImageData;
}