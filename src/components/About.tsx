import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skills = [
  'Logos & Marcas', 'Branding Completo', 'Redes Sociales', 'Marketing Visual',
  'Edición de Imagen', 'Diseño Editorial', 'Identidad Visual', 'Brand Strategy',
]
const tools = ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva Pro']

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="about" className="py-32 px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
      {/* Text */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="flex items-center gap-3 text-gold text-[10px] tracking-[0.22em] uppercase mb-4">
          Mi historia
          <span className="w-14 h-px" style={{ background: 'rgba(201,169,110,0.25)' }} />
        </motion.div>

        <motion.h2 variants={fadeUp} transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="font-serif text-5xl font-bold leading-tight mb-7">
          Diseño con <em className="text-gold not-italic">propósito</em>,<br />no solo con estética
        </motion.h2>

        {[
          'Soy Edinson Valera, diseñador gráfico freelance con más de 4 años transformando ideas en identidades visuales poderosas. Empecé con un simple cuaderno de bocetos y hoy ayudo a marcas a construir su presencia visual desde cero.',
          'Mi proceso combina estrategia de marca con creatividad sin límites. No creo logos, creo símbolos. No diseño publicaciones, construyo narrativas visuales que hacen que tu audiencia se detenga, mire y actúe.',
          'Cada proyecto es una conversación entre tu visión y mi experiencia. El resultado: una marca que te representa, conecta con tu cliente ideal y te diferencia de la competencia.',
        ].map((p, i) => (
          <motion.p key={i} variants={fadeUp} transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="text-cream/60 leading-relaxed text-[15px] mb-5">
            {p}
          </motion.p>
        ))}

        <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="font-serif italic text-gold text-3xl mt-8">
          Edinson Valera
        </motion.div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16,1,0.3,1] }}
      >
        <div className="relative p-12" style={{ background: '#141414', border: '1px solid rgba(201,169,110,0.12)' }}>
          <div className="absolute top-0 left-10 right-10 h-0.5 bg-gold" />

          <div className="flex items-center gap-3 text-gold text-[10px] tracking-[0.22em] uppercase mb-5">
            Mis especialidades
            <span className="w-14 h-px" style={{ background: 'rgba(201,169,110,0.25)' }} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {skills.map((s) => (
              <div
                key={s}
                className="group relative px-4 py-3 text-xs tracking-wider uppercase text-cream/60 transition-all duration-300 overflow-hidden hover:text-gold"
                style={{ border: '1px solid rgba(201,169,110,0.18)' }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-2.5" />
                {s}
              </div>
            ))}
          </div>

          <div className="mt-9 pt-9" style={{ borderTop: '1px solid rgba(201,169,110,0.1)' }}>
            <div className="flex items-center gap-3 text-gold text-[10px] tracking-[0.22em] uppercase mb-5">
              Herramientas
            </div>
            <div className="flex gap-3 flex-wrap">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 text-xs text-cream/50 tracking-wide"
                  style={{ background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.15)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
