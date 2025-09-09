const certifications = [
  {
    name: "Microsoft Certified – Azure Fundamentals",
    file: "/Cert-1.pdf"
  },
  {
    name: "Deloitte Australia Data Analytics Virtual Job Simulation (Forage, 2025)",
    file: "/Cert-2.pdf"
  },
  {
    name: "Coursera – Introduction to Web Development (HTML, CSS, JavaScript)",
    file: "/Cert-3.pdf"
  },
  {
    name: "TCS iON Career Edge – IT for Primer",
    file: "/Cert-4.pdf"
  },
  {
    name: "National Level STTP 2k24 – Java Programming (JNTUA & AICTE, Brainovision)",
    file: "/Cert-5.pdf"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-8">
      <h2 className="text-2xl font-bold">Certifications</h2>

      <ul className="mt-4 space-y-3">
        {certifications.map((cert, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="text-gray-700">{cert.name}</span>
            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              📄 View Certificate
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
