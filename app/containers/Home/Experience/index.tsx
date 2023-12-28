import experienceData from "../../../services/experienceData"

const Experience: React.FC = () => {
    return (
        <section id="experience" className="mb-0 md:mb-12 w-full px-3 py-8 lg:px-6 lg:py-16">
            <div className="mb-3">
                <div className="mb-3 lg:mb-6 flex items-center justify-center gap-4 text-center font-apple-color-emoji text-4xl lg:text-5xl">
                    <p>👨🏻‍💻</p>
                </div>
                <h2 className="mb-8 text-center text-3xl lg:text-4xl text-stone-700">Deneyimlerim</h2>
            </div>
            <div className="flex justify-center">
                <div className="flex w-full max-w-[450px] flex-col items-center gap-6">
                    {experienceData.experience.map((experience, index) => (
                        <div key={index} className="flex h-auto w-full flex-col rounded-xl border border-gray-100 bg-white p-6">
                            <div className="mb-2 flex flex-col sm:flex-row sm:items-center">
                                <span className="font-medium text-stone-700 mb-0.5 sm:mb-0">{experience.company}</span>
                                <span className="px-2 font-light text-stone-500 hidden sm:block">&bull;</span>
                                <span className="text-stone-500">{experience.title}</span>
                            </div>
                            <p className="leading-[1.6rem] text-stone-500">{experience.description}</p>
                            <div className="mt-3 flex flex-wrap items-center gap-1.5">
                                <div className="rounded-full border border-gray-100 bg-white px-3 py-1.5">
                                    <p className="text-sm text-stone-500">{experience.workingDate}</p>
                                </div>
                                {experience.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="rounded-full border border-gray-100 bg-white px-3 py-1.5">
                                        <p className="text-sm text-stone-500">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience