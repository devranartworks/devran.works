"use client"

import skillsData from "../../../services/skillsData"
import experienceData from "../../../services/experienceData"
import educationData from "../../../services/educationData"

const Skills: React.FC = () => {
    return (
        <section id="skills" className="flex w-full justify-center border-t border-[#1B1B1B]/20 px-3 py-8 lg:px-6 lg:py-16">
            <div className="flex w-full max-w-[1224px] justify-center">
                <div className="flex w-full flex-col">
                    <div className="flex w-full flex-col justify-start gap-10 md:flex-row md:justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-medium text-[#1B1B1B]/40">Yetenekler</h2>
                            <div className="mt-7 flex flex-col gap-2">
                                {skillsData.skills.map((skill, index) => (
                                    <div key={index}>
                                        <p className="text-[##1B1B1B]">{skill.appName}</p>
                                        <p className="text-[#1B1B1B]/30">{skill.rate}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-medium text-[#1B1B1B]/40">Öğrenim Durumu</h2>
                            <div className="mt-7 flex flex-col gap-2">
                                {educationData.education.map((education, index) => (
                                    <div key={index}>
                                        <p className="text-[##1B1B1B]">{education.fieldOfStudy} ({education.school})</p>
                                        <p className="text-[#1B1B1B]/30">{education.startDate}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-medium text-[#1B1B1B]/40">Deneyim</h2>
                            <div className="mt-7 flex flex-col gap-2">
                                {experienceData.experience.map((experience, index) => (
                                    <div key={index}>
                                        <p className="text-[##1B1B1B]">{experience.title} ({experience.company})</p>
                                        <p className="text-[#1B1B1B]/30">{experience.workingDate}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
