"use client"

import Image from "next/image"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import skillsData from "../../../services/skillsData"

const Skills: React.FC = () => {
    return (
        <section id="skills" className="mb-0 w-full px-3 py-8 md:mb-12 lg:px-6 lg:py-16">
            <div className="mb-3">
                <div className="mb-3 flex items-center justify-center gap-4 text-center font-apple-color-emoji text-4xl lg:mb-6 lg:text-5xl">
                    <p>🤓</p>
                    <p>💬</p>
                </div>
                <h2 className="mb-8 text-center text-3xl text-stone-700 lg:text-4xl">Yeteneklerim</h2>
            </div>
            <Tabs className="w-full rounded-xl bg-skills-pattern bg-cover bg-center">
                <TabList className="flex flex-wrap justify-center gap-1.5 bg-gradient-to-b from-white via-white to-transparent pb-12">
                    {skillsData.tabs.map((tab, index) => (
                        <Tab key={index} className="cursor-pointer rounded-full border border-gray-100 text-stone-700 outline-none transition duration-200 hover:bg-gray-100" selectedClassName="!bg-stone-800 !border-zinc-950 !text-gray-50 !hover:bg-stone-800">
                            <div className="block h-full w-full px-6 py-2.5 font-normal" aria-label={tab.label}>
                                {tab.label}
                            </div>
                        </Tab>
                    ))}
                </TabList>
                {skillsData.tabs.map((tab, index) => (
                    <TabPanel key={index} className="grid min-w-full grid-cols-1 justify-center gap-12 md:grid-cols-[repeat(auto-fit,minmax(18rem,0fr))]">
                        {tab.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="relative flex w-full gap-3 pb-6 md:w-72">
                                <div className="relative flex w-full gap-3 pb-6">
                                    <div className="relative flex h-24 w-24 items-center justify-center rounded-xl border border-gray-100 bg-white">
                                        <Image src={skill.image} loading="lazy" alt={`${skill.name} ikonu`} width={55} height={55}  />
                                        <div className="absolute left-0 top-0 h-full w-full" />
                                    </div>
                                    <div>
                                        <span className="mb-2.5 text-lg font-semibold text-stone-700">{skill.name}</span>
                                        <p className="text-stone-700">{skill.description}</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-1.5 w-full overflow-hidden rounded-lg bg-slate-200">
                                        <div className={`h-full ${skill.color}`} style={{ width: `${skill.progress}%` }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>
                ))}
                <div className="bg-gradient-to-b from-transparent to-white pb-6" />
            </Tabs>
        </section>
    )
}

export default Skills