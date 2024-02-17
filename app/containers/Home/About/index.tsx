"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Player } from "@lottiefiles/react-lottie-player"
import { IconFile, IconGithub } from "../../../components/Icons"
import LottieConfetti from "../../../assets/lottie/confetti.json"

const About: React.FC = () => {
    const [ isExploding, setIsExploding ] = useState<boolean>(false)

    const router = useRouter()

    return (
        <section id="about" className="mb-3 flex w-full justify-center px-3 py-8 md:mb-12 lg:px-6 lg:py-16">
            <div className="flex max-w-3xl flex-col sm:items-center">
                <div className="mb-3 sm:mb-6">
                    <h1 className="text-center text-2xl font-light text-stone-700 md:text-3xl lg:text-4xl">Hello <span className="ml-2.5 text-[1.6rem] sm:text-[2rem] md:text-[2.5rem]">👋🏻</span></h1>
                </div>
                <p className="text-center text-2xl font-light leading-[2.3rem] text-stone-700 sm:leading-[2.6rem] md:text-3xl md:leading-[3rem] lg:text-4xl lg:leading-[3.5rem]">I'm <b className="font-semibold">Yılmaz Ev</b>, a front-end developer passionate about creating beautiful user interfaces and impressive experiences.</p>
                <div className="mb-4 mt-8 flex flex-col items-center sm:flex-row md:mt-12">
                    <div className="flex flex-col items-center font-normal text-stone-700 sm:flex-row">
                        <p className="text-center text-xl md:text-2xl lg:text-3xl">Get in touch</p>
                        <span className="ml-2 mr-3 hidden text-[2rem] sm:block">👉🏻</span>
                        <span className="my-3 ml-2 mr-3 block text-[2rem] sm:hidden">👇🏻</span>
                    </div>
                    <Link href="mailto:yilmaz.ev@outlook.com" className="w-fit text-xl font-normal text-stone-700 shadow-[0_2px_0_#292524] md:text-2xl md:shadow-[0_3px_0_#292524] lg:text-3xl" aria-label="yilmaz.ev@outlook.com ile iletişime geç">yilmaz.ev@outlook.com</Link>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link href="https://github.com/yilmazev" target="_blank" className="mt-5 flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-5 py-3.5 transition duration-200 hover:bg-gray-100" aria-label="Yılmaz Github hesabı">
                        <IconGithub width="22px" height="22px" className="fill-zinc-900" />
                        <p className="text-stone-700">Github</p>
                    </Link>
                    <div className="relative">
                        <div onClick={() => setIsExploding(true)} className="mt-5 flex cursor-pointer items-center gap-1.5 rounded-full border border-gray-100 bg-white px-5 py-3.5 transition duration-200 hover:bg-gray-100">
                            <IconFile width="22px" height="22px" className="fill-none stroke-zinc-900 stroke-[1.5px]" />
                            <p className="text-stone-700">CV</p>
                        </div>
                        {isExploding &&
                            <Player
                                onEvent={e => {
                                    if (e === "complete") {
                                        router.push("/resume-en.pdf")
                                        setIsExploding(false)
                                    };
                                }}
                                autoplay
                                src={LottieConfetti}
                                className="absolute left-[-120px] top-[-175px] z-10 h-96 w-96 bg-black"
                            />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About