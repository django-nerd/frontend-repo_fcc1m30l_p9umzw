import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900"
        >
          Interactive portfolio for modern teams and playful minds
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 max-w-2xl text-lg text-gray-700"
        >
          Crafting delightful digital experiments, installations and interfaces. Exploring the edge of tech with clean aesthetics and motion.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-black transition-colors">
            See work
          </a>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white ring-1 ring-gray-300 text-gray-900 hover:bg-gray-50">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
