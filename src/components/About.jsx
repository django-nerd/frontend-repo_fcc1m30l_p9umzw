import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            I design and build playful digital experiences that blend art and technology. My work spans interactive websites, installations, and identity systems — always with a focus on motion and clarity.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Available for collaborations, commissions, and freelance projects.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1600&auto=format&fit=crop" alt="Portrait" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
