import About from "./containers/Home/About"
import Skills from "./containers/Home/Skills"
import Projects from "./containers/Home/Projects"
import Footer from "./components/Footer"

export default function Home() {
    return (
        <main className="flex w-full justify-center">
            <div className="w-full">
                <About />
                <Projects />
                <Skills />
                <Footer />
            </div>
        </main>
    )
}