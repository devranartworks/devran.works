import { ProjectsProps } from "../types/projectTypes"
import helvaci from "../assets/images/helvaci.png"
import finance from "../assets/images/finance.png"
import voidap from "../assets/images/voidap.jpg"
import blockchain1 from "../assets/images/425318079_323111736816946_6054574089857207142_n.jpg"

const projectsData: { projects: ProjectsProps[] } = {
    projects: [
        {
            link: "https://www.behance.net/gallery/198411561/Finance-App-UI-UX?",
            image: finance,
            title: "Finance App - UI & UX",
        },
        {
            link: "https://www.behance.net/gallery/198412143/Helvac-Hamdi-UI-UX-design?",
            image: helvaci,
            title: "Helvacı - UI & UX",
        },
        {
            link: "https://www.behance.net/gallery/198710159/Void-App-UI-UX",
            image: voidap,
            title: "Void App - UI & UX",
        },
        {
            link: "https://www.behance.net/gallery/198710553/Anonim-Blockchain-Project-UI-UX?",
            image: blockchain1,
            title: "Blockchain Project - UI & UX",
        },
    ],
}

export default projectsData
