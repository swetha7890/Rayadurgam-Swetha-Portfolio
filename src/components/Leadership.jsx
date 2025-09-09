const leadership = [
  {
    role: "Coordinator",
    event: "College Fest 2023",
    desc: "Organized events, managed student participation, and coordinated with faculty to ensure smooth execution."
  },
  {
    role: "Volunteer",
    event: "NSS Activities",
    desc: "Actively participated in social service initiatives like tree plantation, health camps, and awareness programs."
  }
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-8">
      <h2 className="text-2xl font-bold">Leadership & Responsibilities</h2>
      <div className="mt-4 space-y-4">
        {leadership.map((l, i) => (
          <div key={i} className="rounded-xl border bg-white p-4 shadow">
            <h3 className="font-semibold">{l.role} – {l.event}</h3>
            <p className="text-gray-700 mt-1">{l.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
