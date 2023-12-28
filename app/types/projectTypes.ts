export interface ProjectsProps {
    link: string;
    title: string;
    description: string;
    used: UsedProps[];
}

interface UsedProps {
    name: string;
}