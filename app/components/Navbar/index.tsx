import Link from "next/link"
import Image from "next/image"
import Avatar from "../../assets/images/blank-avatar.jpg"

const Navbar: React.FC = () => {
    return (
        <nav className="z-50 flex w-full justify-center border-b border-stone-100 bg-white">
            <div className="w-full max-w-[1120px] px-5 py-6">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <div className="overflow-hidden rounded-full">
                            <Image priority={true} src={Avatar} width={48} height={48} alt="Yılmaz Ev profil fotoğrafı" />
                        </div>
                        <div className="mb-1 flex items-center">
                            <span className="font-medium text-stone-700">Yılmaz Ev</span>
                            <span className="px-2 font-light text-zinc-500">&bull;</span>
                            <span className="text-zinc-500">Frontend Developer</span>
                        </div>
                    </div>
                    <ul className="flex items-center gap-1.5">
                        <li className="rounded-xl bg-stone-800">
                            <Link href="#about" scroll={true} className="block h-full w-full px-6 py-2.5 font-normal text-gray-50" aria-label="Ben">Ben</Link>
                        </li>
                        <li className="rounded-xl border border-gray-100 transition duration-200 hover:bg-gray-100">
                            <Link href="#skills" scroll={true} className="block h-full w-full cursor-pointer px-6 py-2.5 font-normal text-stone-700" aria-label="Yetenekler">Yetenekler</Link>
                        </li>
                        <li className="rounded-xl border border-gray-100 transition duration-200 hover:bg-gray-100">
                            <Link href="#experience" scroll={true} className="block h-full w-full cursor-pointer px-6 py-2.5 font-normal text-stone-700" aria-label="Deneyimler">Deneyimler</Link>
                        </li>
                        <li className="rounded-xl border border-gray-100 transition duration-200 hover:bg-gray-100">
                            <Link href="#projects" scroll={true} className="block h-full w-full cursor-pointer px-6 py-2.5 font-normal text-stone-700" aria-label="Projeler">Projeler</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar