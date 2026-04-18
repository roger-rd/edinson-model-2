import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6"
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)' }}
    >
      <div className="font-serif text-xl font-bold text-cream tracking-wide">
        Edinson<span className="text-gold">.</span>
      </div>

      <ul className="hidden md:flex gap-9 list-none">
        {['Sobre mí', 'Servicios', 'Portafolio', 'Contacto'].map((item) => (
          <li key={item}>
            <a
              href={`#${item === 'Sobre mí' ? 'about' : item === 'Servicios' ? 'services' : item === 'Portafolio' ? 'portfolio' : 'contact'}`}
              className="text-xs tracking-widest uppercase text-cream/60 no-underline transition-colors duration-300 hover:text-gold"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="bg-gold text-black text-xs tracking-widest uppercase font-medium px-7 py-3 no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-px"
      >
        Cotizar proyecto
      </a>
    </motion.nav>
  )
}
