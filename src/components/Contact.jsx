import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-900"
        >
          Let’s build something delightful
        </motion.h3>
        <p className="mt-3 text-gray-700">
          Open to commercial work, experiments and collaborations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:hello@olli.works" className="px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-black transition-colors">
            Email
          </a>
          <a href="#" className="px-5 py-2.5 rounded-full bg-white ring-1 ring-gray-300 text-gray-900 hover:bg-gray-50">
            Schedule a call
          </a>
        </div>
        <p className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Olli. All rights reserved.</p>
      </div>
    </section>
  )
}
