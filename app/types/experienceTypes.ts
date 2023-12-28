export interface ExperienceProps {
    title: string;
    company: string;
    description: string;
    workingDate: string;
    skills: SkillProps[];
}

interface SkillProps {
    name: string;
}