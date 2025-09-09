import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Internships from "./components/Internships"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Leadership from "./components/Leadership"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-28 space-y-24">
        <Hero />
        <About />
        <Skills />
        <Internships />
        <Projects />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
