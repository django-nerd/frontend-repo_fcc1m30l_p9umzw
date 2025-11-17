import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Playful Web Experiment',
    tags: ['WebGL', 'Motion', 'Interactive'],
    image: 'https://images.unsplash.com/photo-1566883691261-408897b13ff9?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMzNzg3NDh8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Immersive Installation',
    tags: ['Installation', 'Sensors', 'Realtime'],
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Identity & Website',
    tags: ['Brand', 'Frontend', '3D'],
    image: 'https://images.unsplash.com/photo-1664688708942-c77a6b5e6abc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJZGVudGl0eSUyMCUyNiUyMFdlYnNpdGV8ZW58MHwwfHx8MTc2MzM3ODc0OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Selected Work</h2>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">View all →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{p.title}</h3>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 ring-1 ring-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
