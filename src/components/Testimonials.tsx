import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="testimonials" className="py-32 px-16 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="inline-flex items-center justify-center gap-3 text-gold text-[10px] tracking-[0.22em] uppercase mb-4"
          >
            Lo que dicen
            <span className="w-14 h-px" style={{ background: 'rgba(201,169,110,0.25)' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16,1,0.3,1] }}
            className="font-serif text-5xl font-bold leading-tight"
          >
            Clientes que<br /><em className="text-gold not-italic">confían en mi trabajo</em>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(201,169,110,0.1)' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16,1,0.3,1] }}
              className="relative p-12"
              style={{ background: '#0d0d0d' }}
            >
              <span
                className="absolute top-6 left-7 font-serif text-8xl leading-none pointer-events-none"
                style={{ color: 'rgba(201,169,110,0.12)' }}
              >
                "
              </span>

              <div className="text-gold tracking-[3px] text-sm mb-5">
                {'★'.repeat(t.stars)}
              </div>

              <p className="text-cream/65 leading-relaxed text-[15px] mb-7 relative z-10">
                {t.body}
              </p>

              <div className="flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-serif text-base font-bold text-gold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,169,110,0.3), rgba(201,169,110,0.1))',
                    border: '1px solid rgba(201,169,110,0.25)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs tracking-wide text-cream/35">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
