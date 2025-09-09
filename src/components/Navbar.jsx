import { useState } from "react"
import { motion } from "framer-motion"
import { FileDown } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "internships", label: "Internships" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "leadership", label: "Leadership" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b transition-all duration-300 hover:shadow-lg hover:bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo + Portfolio Text */}
        <a href="#home" className="flex items-center gap-2 text-lg font-bold hover:text-blue-600 transition-colors duration-300">
          <img 
            src="/swetha-logo.jpg"   // 👈 place your logo inside public/ folder
            alt="Logo"
            className="w-8 h-8 rounded-full"
          />
          <b>Portfolio</b>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n, i) => (
            <motion.a
              key={n.id}
              href={`#${n.id}`}
              className="hover:text-blue-600 transition-colors duration-300"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              {n.label}
            </motion.a>
          ))}

          <motion.a
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            href="/Swetha-Rayadurgam-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            title="Swetha Rayadurgam Resume"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: nav.length * 0.1, type: "spring", stiffness: 300 }}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            <FileDown size={16} /> Resume
          </motion.a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden border rounded-xl px-3 py-2 hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t px-4 pb-4">
          <div className="flex flex-col gap-3">
            {nav.map((n, i) => (
              <motion.a
                key={n.id}
                href={`#${n.id}`}
                className="hover:text-blue-600 transition-colors duration-300"
                onClick={() => setOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                whileHover={{ x: 5 }}
              >
                {n.label}
              </motion.a>
            ))}

            <motion.a
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 w-max"
              href="/Swetha-Rayadurgam-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              title="Swetha Rayadurgam Resume"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: nav.length * 0.05, type: "spring", stiffness: 300 }}
              whileHover={{ x: 5 }}
            >
              <FileDown size={16} /> Resume
            </motion.a>
          </div>
        </div>
      )}
    </header>
  )
}
