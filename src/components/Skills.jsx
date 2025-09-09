import { motion } from "framer-motion"

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-bold">Skills</h2>

      {/* Programming Languages */}
      <h3 className="text-xl font-semibold mt-6">Programming Languages</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {["Python", "Java", "JavaScript"].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-4 text-center shadow-lg bg-white/20 backdrop-blur-lg border border-white/30"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Frontend */}
      <h3 className="text-xl font-semibold mt-8">Frontend Development</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {["HTML", "CSS", "Bootstrap", "ReactJS"].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-4 text-center shadow-lg bg-white/20 backdrop-blur-lg border border-white/30"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Backend */}
      <h3 className="text-xl font-semibold mt-8">Backend Development</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {["NodeJS", "Flask"].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-4 text-center shadow-lg bg-white/20 backdrop-blur-lg border border-white/30"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Databases */}
      <h3 className="text-xl font-semibold mt-8">Databases</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {["SQL", "MongoDB"].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-4 text-center shadow-lg bg-white/20 backdrop-blur-lg border border-white/30"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Data Visualization & Tools */}
      <h3 className="text-xl font-semibold mt-8">Data Visualization & Tools</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {["Power BI", "Tableau", "Excel", "Jupyter Notebook"].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-4 text-center shadow-lg bg-white/20 backdrop-blur-lg border border-white/30"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Version Control */}
      <h3 className="text-xl font-semibold mt-8">Version Control</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {["Git", "GitHub"].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-4 text-center shadow-lg bg-white/20 backdrop-blur-lg border border-white/30"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <h3 className="text-xl font-semibold mt-8">Soft Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {[
          "Problem Solving", 
          "Teamwork", 
          "Communication", 
          "Time Management", 
          "Adaptability", 
          "Quick Learner"
        ].map((soft, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-4 text-center shadow-lg bg-white/20 backdrop-blur-lg border border-white/30"
          >
            {soft}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
