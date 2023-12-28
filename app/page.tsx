// import Navbar from "./components/Navbar"
import About from "./containers/Home/About"
import Skills from "./containers/Home/Skills"
import Experience from "./containers/Home/Experience"
import Education from "./containers/Home/Education"
import Projects from "./containers/Home/Projects"
import Footer from "./components/Footer"

export default function Home() {
    return (
        <main className="flex w-full justify-center">
            <div className="flex w-full flex-col items-center">
                {/* <Navbar /> */}
                <div className="w-full max-w-[1120px]">
                    <About />
                    <Skills />
                    <Experience />
                    <Education />
                    <Projects />
                </div>
                <Footer />
            </div>
        </main>
    )
}