import { motion } from "framer-motion"

const internships = [
  {
    org: "Amaravathi Software Innovations Pvt. Ltd., Rajahmundry",
    role: "Assistant Software Developer Intern",
    time: "May 2024 – July 2024",
    bullets: [
      "Analyzed large-scale business datasets to extract actionable insights",
      "Automated recurring data prep with Python & SQL (↓ 25% manual effort)",
      "Built interactive KPI dashboards in Power BI and Excel",
      "Documented workflows and presented findings"
    ],
    offer: "/Offer-Letter1.jpg",   // ✅ your offer letter file
    certificate: "/Certificate1.jpg"  // ✅ your certificate file
  },
  {
    org: "CognoRise Infotech Pvt. Ltd.",
    role: "Data Analytics Intern",
    time: "July 2024 – Sep 2024",
    bullets: [
      "Built Power BI & Tableau dashboards for sales/churn/KPIs",
      "EDA with Pandas/NumPy/Matplotlib/Seaborn to uncover trends",
      "Predictive models (regression & classification) for planning",
      "Automated preprocessing pipelines (↓ ~30% report time)"
    ],
    offer: "/Offer-Letter2.pdf",
    certificate: "/Certificate2.pdf"
  },
  {
    org: "Codsoft Pvt. Ltd.",
    role: "Frontend Developer Intern",
    time: "Dec 2023 – Jan 2024",
    bullets: [
      "Designed & deployed a responsive portfolio website",
      "Built a social media analytics dashboard with dynamic UI",
      "Applied modern animations/transitions for engagement",
      "Optimized performance via CSS best practices & compression"
    ],
    offer: "/Offer-Letter3.pdf",
    certificate: "/Certificate3.pdf"
  }
]

export default function Internships() {
  return (
    <section id="internships" className="py-8">
      <h2 className="text-2xl font-bold">Internships</h2>

      <div className="mt-4 grid gap-6">
        {internships.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl border bg-white p-5 shadow-md hover:shadow-lg"
          >
            {/* Internship Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">{it.role}</h3>
                <p className="text-gray-600">{it.org}</p>
              </div>
              <p className="text-sm text-gray-500">{it.time}</p>
            </div>

            {/* Responsibilities */}
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
              {it.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>

            {/* Offer & Certificate Links */}
            <div className="mt-4 flex flex-wrap gap-4">
              <a 
                href={it.offer} 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-600 hover:underline font-medium"
              >
                📄 Offer Letter
              </a>
              <a 
                href={it.certificate} 
                target="_blank" 
                rel="noreferrer" 
                className="text-green-600 hover:underline font-medium"
              >
                🎓 Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
