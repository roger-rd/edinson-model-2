import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { services } from '../data/content'

export default function Services() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="services" className="py-32 px-16 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(201,169,110,0.04), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-20 items-end mb-20">
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
              className="flex items-center gap-3 text-gold text-[10px] tracking-[0.22em] uppercase mb-4"
            >
              Lo que hago
              <span className="w-14 h-px" style={{ background: 'rgba(201,169,110,0.25)' }} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16,1,0.3,1] }}
              className="font-serif text-5xl font-bold leading-tight"
            >
              Servicios diseñados<br />para <em className="text-gold not-italic">resultados</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16,1,0.3,1] }}
            className="text-cream/50 leading-relaxed text-[15px]"
          >
            Cada servicio está pensado para resolver un problema real de tu negocio. No vendo diseño, vendo crecimiento visual.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(201,169,110,0.1)' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.16,1,0.3,1] }}
              className="group relative p-12 overflow-hidden transition-colors duration-300 hover:bg-[#131313]"
              style={{ background: '#0d0d0d' }}
            >
              {/* Bottom gold bar on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
              />

              <div
                className="w-12 h-12 flex items-center justify-center text-xl mb-7 transition-all duration-300 group-hover:border-gold group-hover:bg-[rgba(201,169,110,0.06)]"
                style={{ border: '1px solid rgba(201,169,110,0.2)' }}
              >
                {s.icon}
              </div>

              <h3 className="font-serif text-xl font-bold mb-3.5">{s.name}</h3>
              <p className="text-cream/50 text-sm leading-relaxed">{s.desc}</p>

              <div className="mt-7 pt-6 flex justify-between items-center" style={{ borderTop: '1px solid rgba(201,169,110,0.1)' }}>
                <span className="text-[10px] tracking-wider uppercase text-cream/35">Desde</span>
                <span className="font-serif text-2xl text-gold">{s.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
