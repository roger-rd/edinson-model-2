import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen grid place-items-center px-16 pt-28 pb-16 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,169,110,0.08) 0%, transparent 70%)' }}
      />
      {/* Vertical line */}
      <div
        className="absolute top-0 bottom-0 w-px pointer-events-none"
        style={{ left: '50%', background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.2) 30%, rgba(201,169,110,0.2) 70%, transparent)' }}
      />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Text */}
        <div>
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 text-gold text-xs tracking-[0.2em] uppercase mb-7">
            <span className="w-10 h-px bg-gold" />
            Diseñador Gráfico Freelance
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className="font-serif text-7xl font-black leading-none mb-7">
            Tu marca<br />merece<br /><em className="text-gold not-italic">brillar</em>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-base leading-relaxed text-cream/60 max-w-sm mb-11">
            Creo identidades visuales que comunican, conectan y convierten. Diseño que no solo se ve bien — diseño que vende.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex gap-5 items-center flex-wrap">
            <a
              href="#portfolio"
              className="bg-gold text-black text-xs tracking-widest uppercase font-medium px-9 py-4 no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
            >
              Ver portafolio
            </a>
            <a
              href="#contact"
              className="border border-cream/25 text-cream/70 text-xs tracking-widest uppercase px-8 py-4 no-underline transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Iniciar proyecto
            </a>
          </motion.div>
        </div>

        {/* Visual card */}
        <motion.div {...fadeUp(0.25)}>
          <div
            className="w-full relative border"
            style={{ aspectRatio: '4/5', background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)', borderColor: 'rgba(201,169,110,0.15)' }}
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,169,110,0.07) 0%, transparent 50%, rgba(201,169,110,0.04) 100%)' }} />
            <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }} xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(201,169,110,0.12)" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(201,169,110,0.07)" strokeWidth="0.5" />
              <text x="200" y="215" textAnchor="middle" fontFamily="'Playfair Display',serif" fontSize="64" fontWeight="900" fill="rgba(201,169,110,0.25)">EV</text>
              <line x1="80" y1="200" x2="320" y2="200" stroke="rgba(201,169,110,0.15)" strokeWidth="0.5" />
              <line x1="200" y1="80" x2="200" y2="320" stroke="rgba(201,169,110,0.15)" strokeWidth="0.5" />
              <polygon points="200,120 240,180 200,160 160,180" fill="rgba(201,169,110,0.08)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
            </svg>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-serif text-2xl font-bold mb-1">Edinson Valera</h3>
              <p className="text-xs tracking-[0.15em] uppercase text-gold">Branding & Visual Design</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-px mt-px" style={{ background: 'rgba(201,169,110,0.1)' }}>
            {[
              { num: '+120', label: 'Proyectos' },
              { num: '5★', label: 'Calificación' },
              { num: '4+', label: 'Años exp.' },
              { num: '98%', label: 'Satisfacción' },
            ].map(({ num, label }) => (
              <div key={label} className="bg-dark-bg py-5 text-center">
                <div className="font-serif text-2xl font-bold text-gold">{num}</div>
                <div className="text-[10px] tracking-widest uppercase text-cream/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-16 flex items-center gap-3 text-[10px] tracking-[0.15em] uppercase text-cream/35">
        <span className="w-14 h-px" style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }} />
        Scroll para explorar
      </div>
    </section>
  )
}
