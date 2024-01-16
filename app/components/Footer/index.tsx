import React from "react"
import Link from "next/link"
import socialData from "../../services/socialData"

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="flex w-full justify-center">
            <div className="w-full max-w-[1120px] px-5 py-8">
                <div className="flex items-center justify-between gap-16">
                    <p className="font-medium text-stone-500">Tasarım ve Geliştirme <b className="font-semibold">Yılmaz Ev</b> <span className="mx-1 font-apple-color-emoji text-lg">🤌🏻</span> {currentYear}</p>
                    <ul className="flex items-center justify-end gap-1 md:gap-3">
                        {socialData.socialLink.map((social, index) => (
                            <li key={index} className="border-b-2 border-transparent transition duration-200 md:hover:border-stone-500">
                                <Link href={social.link} target="_blank" className="block h-full w-full" aria-label={social.label}>
                                    <p className="hidden font-medium text-stone-500 md:block">{social.platform}</p>
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-stone-200 md:hidden">
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