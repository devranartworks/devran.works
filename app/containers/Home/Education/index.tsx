import educationData from "../../../services/educationData"

const Education: React.FC = () => {
    return (
        <section id="education" className="mb-0 w-full px-3 py-8 md:mb-12 lg:px-6 lg:py-16">
            <div className="mb-3">
                <div className="mb-3 flex items-center justify-center gap-4 text-center text-4xl lg:mb-6 lg:text-5xl">
                    <p>🧑🏻‍🏫</p>
                </div>
                <h2 className="mb-8 text-center text-3xl text-stone-700 lg:text-4xl">Education</h2>
            </div>
            <div className="flex justify-center">
                <div className="flex w-full max-w-[450px] flex-col items-center gap-6">
                    {educationData.education.map((education, index) => (
                        <div key={index} className="flex h-auto w-full flex-col rounded-xl border border-gray-100 bg-white p-6">
                            <div className="mb-3 flex flex-col sm:flex-row sm:items-center">
                                <span className="mb-0.5 font-medium text-stone-700 sm:mb-0">{education.school}</span>
                                <span className="hidden px-2 font-light text-zinc-500 sm:block">&bull;</span>
                                <span className="text-stone-500">{education.faculty}</span>
                            </div>
                            <div className="mb-2 flex items-center">
                                <p className="text-stone-600">{education.degree}, {education.fieldOfStudy}</p>
                                
                            </div>
                            <div className="mt-3 flex flex-wrap items-center gap-1.5">
                                <div className="rounded-full border border-gray-100 bg-white px-3 py-1.5">
                                    <p className="text-sm text-stone-500">{education.startDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education