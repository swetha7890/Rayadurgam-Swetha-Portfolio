import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center flex flex-col items-center gap-4"
    >
      <img
        src="\profile1.jpg" // replace with your image later if needed
        alt="Rayadurgam Swetha"
        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-black"
      />

      <h1 className="text-3xl md:text-4xl font-extrabold">
        Hii I am Rayadurgam Swetha<br></br><br></br>
        Aspiring Data Analyst • Frontend Developer
      </h1>
      <p className="mt-2 text-gray-600 max-w-2xl">
        B.Tech CSE Graduate @ JNTUA CEA (CGPA 8.52/10). I build
        data-driven dashboards and clean, responsive web apps.
      </p>

      <div className="flex justify-center gap-5 mt-4">
        <a
          aria-label="email"
          href="mailto:rayadurgamswetha763@gmail.com"
          className="p-2 rounded-xl border hover:bg-gray-100"
        >
          <Mail />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/rayadurgam-swetha-146b91269"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl border hover:bg-gray-100"
        >
          <Linkedin />
        </a>
        <a
          aria-label="github"
          href="https://github.com/swetha7890"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl border hover:bg-gray-100"
        >
          <Github />
        </a>
      </div>
    </motion.section>
  )
}
