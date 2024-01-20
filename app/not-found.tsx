import Link from "next/link"
 
export default function NotFound() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center max-w-xl w-full px-3">
                <div className="text-6xl font-semibold text-stone-700/25 mb-5">404</div>
                <h1 className="text-center text-2xl font-semibold leading-[2.3rem] text-stone-700 sm:leading-[2.6rem] md:text-3xl md:leading-[3rem] lg:text-4xl lg:leading-[3.5rem] mb-3">Bu sayfaya ulaşılamıyor</h1>
                <p className="leading-[1.6rem] text-stone-500 text-center">Bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir. Açmaya çalıştığın bağlantının doğru olup olmadığını kontrol et.</p>
                <Link href="/" className="mt-5 flex cursor-pointer items-center gap-1.5 rounded-full bg-stone-800 px-5 py-3.5 transition duration-200 hover:bg-stone-900" aria-label="Ana Sayfaya Git">
                    <p className="text-white">Ana Sayfaya Git</p>
                </Link>
            </div>
        </div>
    )
}