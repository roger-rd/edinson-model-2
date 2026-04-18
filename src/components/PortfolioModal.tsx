import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../data/content'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function PortfolioModal({ project, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-10"
          style={{ background: 'rgba(5,5,5,0.97)' }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            style={{ background: '#141414', border: '1px solid rgba(201,169,110,0.15)' }}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-2xl text-cream/40 transition-colors hover:text-gold bg-transparent border-none"
            >
              ✕
            </button>

            {/* Hero image placeholder */}
            <div
              className={`w-full bg-gradient-to-br ${project.gradient}`}
              style={{ aspectRatio: '16/9' }}
            />

            <div className="p-12 pb-14">
              <div className="text-gold text-[10px] tracking-[0.2em] uppercase mb-3">{project.tag}</div>
              <h3 className="font-serif text-3xl font-bold mb-5">{project.title}</h3>

              <div className="grid grid-cols-3 gap-6 p-6 mb-8" style={{ border: '1px solid rgba(201,169,110,0.1)' }}>
                <div><label className="block text-[10px] tracking-wider uppercase text-cream/30 mb-1.5">Categoría</label><span className="text-sm text-cream/80">{project.cat}</span></div>
                <div><label className="block text-[10px] tracking-wider uppercase text-cream/30 mb-1.5">Cliente</label><span className="text-sm text-cream/80">{project.client}</span></div>
                <div><label className="block text-[10px] tracking-wider uppercase text-cream/30 mb-1.5">Año</label><span className="text-sm text-cream/80">{project.year}</span></div>
                <div className="col-span-3"><label className="block text-[10px] tracking-wider uppercase text-cream/30 mb-1.5">Entregables</label><span className="text-sm text-cream/80">{project.deliverables}</span></div>
              </div>

              <p className="text-cream/60 leading-relaxed text-[15px] mb-8">{project.desc}</p>

              <a
                href="#contact"
                onClick={onClose}
                className="inline-block bg-gold text-black text-xs tracking-widest uppercase font-medium px-9 py-4 no-underline transition-all duration-300 hover:bg-gold-light"
              >
                Quiero un proyecto similar
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
