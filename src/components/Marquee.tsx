const items = [
  'Branding', 'Identidad Visual', 'Diseño de Logos', 'Redes Sociales',
  'Marketing Visual', 'Edición de Imágenes', 'Packaging', 'Brand Strategy',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      className="py-6 overflow-hidden border-t border-b"
      style={{ background: '#0d0d0d', borderColor: 'rgba(201,169,110,0.1)' }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 22s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-7 px-7 text-xs tracking-[0.2em] uppercase text-cream/30"
          >
            {item}
            <span className="text-gold text-[8px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
