import Link from "next/link"
 
export default function NotFound() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex w-full max-w-xl flex-col items-center px-3">
                <div className="mb-5 text-6xl font-semibold text-stone-700/25">404</div>
                <h1 className="mb-3 text-center text-2xl font-semibold leading-[2.3rem] text-stone-700 sm:leading-[2.6rem] md:text-3xl md:leading-[3rem] lg:text-4xl lg:leading-[3.5rem]">Bu sayfaya ulaşılamıyor</h1>
                <p className="text-center leading-[1.6rem] text-stone-500">Bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir. Açmaya çalıştığın bağlantının doğru olup olmadığını kontrol et.</p>
                <Link href="/" className="mt-5 flex cursor-pointer items-center gap-1.5 rounded-full bg-stone-800 px-5 py-3.5 transition duration-200 hover:bg-stone-900" aria-label="Ana Sayfaya Git">
                    <p className="text-white">Ana Sayfaya Git</p>
                </Link>
            </div>
        </div>
    )
}