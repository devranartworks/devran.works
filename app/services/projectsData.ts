import { ProjectsProps } from "../types/projectTypes"
import ExampleProject from "../assets/images/example-project.png"

const projectsData: { projects: ProjectsProps[] } = {
    projects: [
        {
            link: "https://domain.com",
            image: ExampleProject,
            title: "Example project",
        },
    ],
}

export default projectsData