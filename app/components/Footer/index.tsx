import React from "react"
import Link from "next/link"
import socialData from "../../services/socialData"

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-center w-full">
            <div className="max-w-[1120px] px-5 py-8 w-full">
                <div className="flex justify-between items-center gap-16">
                    <p className="text-stone-500 font-medium">Tasarım ve Geliştirme <b className="font-semibold">Yılmaz Ev</b> <span className="font-apple-color-emoji text-lg mx-1">🤌🏻</span> 2023</p>
                    <ul className="flex items-center gap-1 md:gap-3 justify-end">
                        {socialData.socialLink.map((social, index) => (
                            <li key={index} className="transition duration-200 border-b-2 border-transparent md:hover:border-stone-500">
                                <Link href={social.link} target="_blank" className="block w-full h-full" aria-label={social.label}>
                                    <p className="text-stone-500 font-medium hidden md:block">{social.platform}</p>
                                    <div className="flex justify-center items-center md:hidden w-9 h-9 hover:bg-stone-200 rounded-full">
                                        {social.icon && React.createElement(social.icon, {
                                            ...social.IconProps,
                                            className: "fill-stone-600"
                                        })}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer