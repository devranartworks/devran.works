import { ProjectsProps } from "../types/projectTypes"
import helvaci from "../assets/images/helvaci.png"
import finance from "../assets/images/finance.png"

const projectsData: { projects: ProjectsProps[] } = {
    projects: [
        {
            link: "https://www.behance.net/gallery/198412143/Helvac-Hamdi-UI-UX-design?",
            image: helvaci,
            title: "Helvacı - UI & UX",
        },
        {
            link: "https://www.behance.net/gallery/198411561/Finance-App-UI-UX?",
            image: finance,
            title: "Finance App - UI & UX",
        },
    ],
}

export default projectsData
