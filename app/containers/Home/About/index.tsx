"use client"

import Link from "next/link"
import { IconBehance, IconDribbble, IconInstagram, IconTwitter } from "../../../components/Icons"
import EmojiStarStruck from "../../../assets/images/emoji-star-struck.svg"
import Image from "next/image"

const About: React.FC = () => {
    return (
        <section id="about" className="flex w-full justify-center px-3 pt-8 lg:px-6 lg:pt-16">
            <div className="flex w-full max-w-[1224px] justify-center">
                <div className="flex w-full flex-col">
                    <div className="mb-4 sm:mb-6">
                        <div className="flex flex-col">
                            <span className="mb-5 text-[1.6rem] sm:text-[2rem] md:text-4xl">
                                <Image src={EmojiStarStruck} alt="Devran Düzgün Portfolyo" />
                            </span>
                            <h1 className="text-2xl text-[#1B1B1B] md:text-3xl lg:text-4xl">
                                Merhaba, ben <b className="font-medium">Devran</b>
                            </h1>
                        </div>
                    </div>
                    <p className="mb-7 text-[#1B1B1B]">
                       Uzun süredir grafik tasarımın çeşitli alanlarında ve arayüz tasarımcılığı alanında hizmet veriyorum, bu alanlarda birçok kişiyle ve şirketle çalıştım. Dilerseniz siz de benimle iletişime geçebilirsiniz.
                        
                        <b className="font-bold">devranartworks@gmail.com</b>
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="https://twitter.com/uidevo" target="_blank" className="flex items-center gap-2 rounded-lg border border-[#B4B4B4] px-4 py-2.5 transition duration-200 hover:bg-[#B4B4B4]/10" aria-label="Devran Düzgün Twitter">
                            <IconTwitter width="22px" height="22px" className="fill-none stroke-[#1B1B1B] stroke-[1.5px]" />
                            <p className="text-[#1B1B1B]">Twitter</p>
                        </Link>
                        <Link href="https://www.instagram.com/devranartworks" target="_blank" className="flex items-center gap-2 rounded-lg border border-[#B4B4B4] px-4 py-2.5 transition duration-200 hover:bg-[#B4B4B4]/10" aria-label="Devran Düzgün Twitter">
                            <IconInstagram width="22px" height="22px" className="fill-none stroke-[#1B1B1B] stroke-[1.5px]" />
                            <p className="text-[#1B1B1B]">Instagram</p>
                        </Link>
                        <Link href="https://www.behance.net/devrandesign" target="_blank" className="flex items-center gap-2 rounded-lg border border-[#B4B4B4] px-4 py-2.5 transition duration-200 hover:bg-[#B4B4B4]/10" aria-label="Devran Düzgün Twitter">
                            <IconBehance width="22px" height="22px" className="fill-[#1B1B1B]" />
                            <p className="text-[#1B1B1B]">Behance</p>
                        </Link>
                        <Link href="https://dribbble.com/devranui" target="_blank" className="flex items-center gap-2 rounded-lg border border-[#B4B4B4] px-4 py-2.5 transition duration-200 hover:bg-[#B4B4B4]/10" aria-label="Devran Düzgün Twitter">
                            <IconDribbble width="22px" height="22px" className="fill-none stroke-[#1B1B1B] stroke-[1.5px]" />
                            <p className="text-[#1B1B1B]">Dribbble</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
