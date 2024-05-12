import Link from "next/link"
import projectsData from "../../../services/projectsData"
import Image from "next/image"
import { IconUpRight } from "../../../components/Icons"

const Projects: React.FC = () => {
    return (
        <section id="projects" className="flex w-full justify-center px-3 py-8 lg:px-6 lg:py-16">
            <div className="w-full max-w-[1224px]">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(90%,1fr))] gap-6 sm:grid-cols-3">
                    {projectsData.projects.map((project, index) => (
                        <Link key={index} href={project.link} target="_blank" className="group max-w-[392px]" aria-label={project.title}>
                            <div className="relative overflow-hidden rounded-lg">
                                <Image src={project.image} alt={project.title} loading="lazy" />
                                <div className="absolute left-0 top-0 z-10 size-full transition-all group-hover:bg-[#1B1B1B]/50" /> 
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-[#1B1B1B]">{project.title}</p>
                                <IconUpRight width="22px" height="22px" className="fill-none stroke-[#1B1B1B] stroke-[1.5px]" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects