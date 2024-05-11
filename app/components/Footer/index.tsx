import React from "react"
import Link from "next/link"

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="flex w-full justify-center bg-[#2B2B2B]">
            <div className="w-full max-w-[1236px] py-8">
                <div className="flex items-center justify-between gap-16 px-3">
                    <p className="text-[#FCF7EE]">
                        <span className="text-[#9B958B]">{currentYear} ©</span>
                        &nbsp;
                        Design by <b className="font-semibold">Devran Düzgün</b> and Development by <Link href="https://yilmazev.dev" target="_blank" className="font-semibold">Yılmaz Ev</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer