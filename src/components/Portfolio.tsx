import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/content'
import type { Project } from '../data/content'
import PortfolioModal from './PortfolioModal'

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'logo', label: 'Logos' },
  { key: 'branding', label: 'Branding' },
  { key: 'social', label: 'Redes' },
  { key: 'marketing', label: 'Marketing' },
]

export default function Portfolio() {
  const { ref, inView } = useScrollReveal()
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = active === 'all' ? projects : projects.filter(p => p.filter === active)

  return (
    <section id="portfolio" className="py-32 px-16 max-w-6xl mx-auto">
      {/* Header */}
      <div ref={ref} className="flex justify-between items-end mb-12 flex-wrap gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="flex items-center gap-3 text-gold text-[10px] tracking-[0.22em] uppercase mb-4"
          >
            Mi trabajo
            <span className="w-14 h-px" style={{ background: 'rgba(201,169,110,0.25)' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16,1,0.3,1] }}
            className="font-serif text-5xl font-bold leading-tight"
          >
            Proyectos que<br /><em className="text-gold not-italic">hablan por sí solos</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16,1,0.3,1] }}
          className="flex gap-2 flex-wrap"
        >
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2.5 text-xs tracking-wider uppercase transition-all duration-300 bg-transparent font-sans ${
                active === f.key
                  ? 'text-gold border-gold bg-[rgba(201,169,110,0.05)]'
                  : 'text-cream/50 border-cream/20 hover:border-gold hover:text-gold'
              }`}
              style={{ border: `1px solid ${active === f.key ? '#c9a96e' : 'rgba(201,169,110,0.2)'}` }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16,1,0.3,1] }}
        className="grid grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelected(p)}
              data-hover
              className={`group relative overflow-hidden cursor-none transition-transform duration-500 hover:scale-[0.99] ${
                (p.id === 0 || p.id === 4) ? 'col-span-2' : ''
              }`}
              style={{
                aspectRatio: (p.id === 0 || p.id === 4) ? '16/9' : '4/3',
                border: '1px solid rgba(201,169,110,0.08)',
                background: '#141414',
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} transition-transform duration-700 group-hover:scale-105`} />

              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)' }}
              >
                <div className="text-gold text-[10px] tracking-[0.18em] uppercase mb-2">{p.tag}</div>
                <div className="font-serif text-xl font-bold mb-3">{p.title}</div>
                <div className="text-xs tracking-wider uppercase text-cream/50 flex items-center gap-2">
                  Ver proyecto <span className="text-gold">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <PortfolioModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
