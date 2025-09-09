import { motion } from "framer-motion"

const projects = [
  {
    title: "Retail Analytics Dashboard",
    stack: "Power BI",
    desc: "Interactive dashboards to track sales, profit, customer trends, and product performance using Power Query and slicers/drill-through.",
    links: [{ label: "Source", href: "https://github.com/swetha7890/Retail-Analytics--PowerBI-Project" }]
  },
  {
    title: "Awareness on Tobacco Website",
    stack: "HTML • CSS • JavaScript",
    desc: "Interactive awareness platform highlighting the risks of tobacco addiction, with responsive UI and JS-based interactivity.",
    links: [{ label: "Source", href: "https://github.com/swetha7890/Tobacco-Awareness-Project" }]
  },
  {
    title: "Portfolio Website",
    stack: "HTML • CSS • JavaScript",
    desc: "Responsive personal portfolio with smooth navigation and animations; deployed for recruiters.",
    links: [{ label: "Source", href: "https://github.com/swetha7890/PORTFOLIO" }]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl border bg-white p-5 shadow-md hover:shadow-lg"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{p.stack}</p>
            <p className="mt-2 text-gray-700">{p.desc}</p>

            {p.links?.length > 0 && (
              <div className="mt-3 flex gap-3">
                {p.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
