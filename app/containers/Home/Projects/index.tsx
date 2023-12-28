import Link from "next/link"
import projectsData from "../../../services/projectsData"

const Projects: React.FC = () => {
    return (
        <section id="projects" className="mb-0 md:mb-12 w-full px-3 py-8 lg:px-6 lg:py-16">
            <div className="mb-3">
                <div className="mb-3 lg:mb-6 flex items-center justify-center gap-4 text-center font-apple-color-emoji text-4xl lg:text-5xl">
                    <p>🌐</p>
                    <p>📂</p>
                </div>
                <h2 className="mb-8 text-center text-3xl lg:text-4xl text-stone-700">Projelerim</h2>
            </div>
            <div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectsData.projects.map((project, index) => (
                            <Link key={index} href={project.link} target="_blank" className="flex h-auto w-full max-w-sm flex-col rounded-xl border border-gray-100 bg-white p-6" aria-label={project.title}>
                                <span className="font-medium text-stone-700 mb-2">{project.title}</span>
                                <p className="leading-[1.6rem] text-stone-500">{project.description}</p>
                                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                                    {project.used.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="rounded-full border border-gray-100 bg-white px-3 py-1.5">
                                            <p className="text-sm text-stone-500">{skill.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects