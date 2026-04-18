import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function CTA() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="contact" className="py-44 px-16 relative overflow-hidden text-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,169,110,0.07), transparent 70%)' }}
      />
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ top: '50%', background: 'rgba(201,169,110,0.06)' }}
      />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="text-gold text-[10px] tracking-[0.25em] uppercase mb-5"
        >
          ¿Listo para empezar?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16,1,0.3,1] }}
          className="font-serif font-black leading-none mb-6"
          style={{ fontSize: 'clamp(42px, 6vw, 80px)' }}
        >
          Tu próxima <em className="text-gold not-italic">gran</em><br />marca empieza hoy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16,1,0.3,1] }}
          className="text-cream/55 text-base leading-relaxed max-w-lg mx-auto mb-12"
        >
          Cada día que pasa sin una identidad visual sólida es un cliente que no te recuerda. Hablemos y construyamos algo extraordinario juntos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16,1,0.3,1] }}
          className="flex justify-center gap-5 flex-wrap"
        >
          <a
            href="https://wa.me/573000000000?text=Hola+Edinson,+me+interesa+cotizar+un+proyecto"
            target="_blank"
            rel="noreferrer"
            className="bg-gold text-black text-xs tracking-widest uppercase font-medium px-9 py-4 no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
          >
            Escribir por WhatsApp
          </a>
          <a
            href="mailto:edinson@email.com"
            className="text-cream/70 text-xs tracking-widest uppercase px-8 py-4 no-underline transition-all duration-300 hover:border-gold hover:text-gold"
            style={{ border: '1px solid rgba(245,242,238,0.25)' }}
          >
            Enviar un correo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16,1,0.3,1] }}
          className="flex justify-center gap-16 mt-16 pt-16 flex-wrap"
          style={{ borderTop: '1px solid rgba(201,169,110,0.1)' }}
        >
          {[
            { label: 'Instagram', val: '@ednsn', href: 'https://instagram.com/ednsn' },
            { label: 'WhatsApp', val: '+57 300 000 0000', href: 'https://wa.me/573000000000' },
            { label: 'Email', val: 'edinson@email.com', href: 'mailto:edinson@email.com' },
            { label: 'Disponibilidad', val: '● Disponible ahora', href: '#contact', gold: true },
          ].map(({ label, val, href, gold }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] tracking-[0.2em] uppercase text-cream/30">{label}</span>
              <a
                href={href}
                className={`text-sm no-underline transition-colors duration-300 ${gold ? 'text-gold' : 'text-cream/70 hover:text-gold'}`}
              >
                {val}
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer
      className="px-16 py-10 flex justify-between items-center flex-wrap gap-5"
      style={{ borderTop: '1px solid rgba(201,169,110,0.1)' }}
    >
      <div className="font-serif text-lg font-bold">
        Edinson<span className="text-gold">.</span>
      </div>
      <p className="text-xs text-cream/30 tracking-wide">
        © 2024 Edinson Valera · Diseño Gráfico & Branding · Todos los derechos reservados
      </p>
      <div className="flex gap-5">
        {[
          { label: 'Instagram', href: 'https://instagram.com/ednsn' },
          { label: 'WhatsApp', href: 'https://wa.me/573000000000' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] tracking-wider uppercase text-cream/35 no-underline transition-colors hover:text-gold"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
