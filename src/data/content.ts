export const services = [
  {
    icon: '⬡',
    name: 'Diseño de Logo',
    desc: 'Un logo que cuente tu historia, sea memorable y funcione en cualquier formato. Incluye versiones primaria, secundaria y variaciones de color.',
    price: '$45 USD',
  },
  {
    icon: '◈',
    name: 'Branding Completo',
    desc: 'Identidad visual de marca completa: logo, paleta de colores, tipografías, manual de marca y piezas básicas de aplicación.',
    price: '$180 USD',
  },
  {
    icon: '▦',
    name: 'Contenido para Redes',
    desc: 'Pack de publicaciones, historias y piezas gráficas optimizadas para Instagram, Facebook, TikTok y LinkedIn que generan engagement real.',
    price: '$35 USD',
  },
  {
    icon: '◉',
    name: 'Marketing Visual',
    desc: 'Piezas para campañas publicitarias, banners digitales, flyers, catálogos y materiales de ventas que convierten miradas en clientes.',
    price: '$25 USD',
  },
  {
    icon: '⬟',
    name: 'Edición de Imágenes',
    desc: 'Retoque fotográfico profesional, corrección de color, composición creativa y manipulación digital para productos, personas y marcas.',
    price: '$15 USD',
  },
  {
    icon: '★',
    name: 'Pack Premium',
    desc: 'Todo lo anterior integrado: branding, contenido mensual para redes, marketing visual y soporte prioritario. Tu equipo de diseño a tiempo completo.',
    price: '$350 USD',
  },
]

export type Project = {
  id: number
  tag: string
  title: string
  cat: string
  filter: string
  client: string
  year: string
  deliverables: string
  desc: string
  gradient: string
}

export const projects: Project[] = [
  {
    id: 0,
    tag: 'Branding',
    title: 'Identidad Aurum Coffee',
    cat: 'Branding Completo',
    filter: 'branding',
    client: 'Aurum Coffee Co.',
    year: '2024',
    deliverables: 'Logo, manual de marca, packaging, redes sociales',
    desc: 'Aurum Coffee necesitaba una identidad que transmitiera sofisticación y calidez al mismo tiempo. Desarrollé un sistema visual completo con tipografías serif doradas, paleta tierra-oro y un isotipo basado en la geometría sagrada del grano de café. El resultado: +60% en reconocimiento de marca en 3 meses.',
    gradient: 'from-[#1a1208] via-[#2a1f0a] to-[#1a1208]',
  },
  {
    id: 1,
    tag: 'Logo',
    title: 'Nova Tech Studio',
    cat: 'Diseño de Logo',
    filter: 'logo',
    client: 'Nova Tech Studio',
    year: '2024',
    deliverables: 'Logo primario, secundario, favicon, versiones monocromo',
    desc: 'Un studio de desarrollo de software que buscaba proyectar innovación y confianza. El logo resultante combina una forma hexagonal abstracta con tipografía geométrica. El sistema incluye 6 variaciones para distintos contextos digitales.',
    gradient: 'from-[#0a0a1a] via-[#121230] to-[#0a0a1a]',
  },
  {
    id: 2,
    tag: 'Redes Sociales',
    title: 'Campaña Verano Viva',
    cat: 'Contenido para Redes',
    filter: 'social',
    client: 'Viva Moda',
    year: '2023',
    deliverables: '30 piezas Instagram, 10 stories, highlights covers',
    desc: 'Campaña estival para una marca de moda con enfoque en juventud y color. Se desarrollaron 30 piezas para feed, 10 historias animadas y portadas de highlights. La campaña logró un engagement del 8.4%, triplicando el promedio del sector.',
    gradient: 'from-[#1a0a0a] via-[#2a1212] to-[#1a0a0a]',
  },
  {
    id: 3,
    tag: 'Logo',
    title: 'Natura Spa & Wellness',
    cat: 'Diseño de Logo',
    filter: 'logo',
    client: 'Natura Wellness Center',
    year: '2023',
    deliverables: 'Logo, paleta cromática, guía básica de uso',
    desc: 'Un centro de bienestar que necesitaba transmitir calma, naturaleza y profesionalismo. El diseño usa formas orgánicas inspiradas en hojas y agua, con una paleta verde-salvia que evoca lo natural. Funciona perfectamente tanto en productos físicos como en digital.',
    gradient: 'from-[#0a1a0a] via-[#0f2a0f] to-[#0a1a0a]',
  },
  {
    id: 4,
    tag: 'Marketing Visual',
    title: 'Campaña Black Friday',
    cat: 'Marketing Visual',
    filter: 'marketing',
    client: 'MegaStore Online',
    year: '2023',
    deliverables: 'Banners digitales, flyers, plantillas WhatsApp, posts',
    desc: 'Campaña de alto impacto para una tienda online con ventas en 5 países. 40 piezas gráficas para web, redes sociales y WhatsApp Business. La campaña generó un CTR del 12.3% en banners digitales, récord de la marca.',
    gradient: 'from-[#1a0e0a] via-[#291510] to-[#1a0e0a]',
  },
  {
    id: 5,
    tag: 'Branding',
    title: 'Estudio Nocturno Records',
    cat: 'Branding Completo',
    filter: 'branding',
    client: 'Nocturno Records',
    year: '2024',
    deliverables: 'Identidad completa, aplicaciones, mockups, RRSS',
    desc: 'Un sello discográfico independiente que quería una imagen tan poderosa como su música. Identidad oscura y elegante: tipografía display condensada, geometría nocturna y un sistema visual que funciona en merch, digital y prensa.',
    gradient: 'from-[#0d0a1a] via-[#18122a] to-[#0d0a1a]',
  },
]

export const testimonials = [
  {
    stars: 5,
    body: '"Edinson transformó completamente la imagen de mi negocio. El logo y la identidad visual que creó superaron todas mis expectativas. Mis clientes lo notan y comentan inmediatamente."',
    name: 'María Castellanos',
    role: 'CEO, Castellanos Boutique',
    initials: 'MC',
  },
  {
    stars: 5,
    body: '"Contraté a Edinson para el contenido de mis redes sociales y en 2 meses mis seguidores aumentaron un 40%. Entiende la marca mejor que nadie y entrega siempre antes del plazo."',
    name: 'Jorge Ramírez',
    role: 'Fundador, FitLife Studio',
    initials: 'JR',
  },
  {
    stars: 5,
    body: '"Profesional, creativo y con ojo clínico para lo que una marca necesita. El branding de mi restaurante se convirtió en nuestra ventaja competitiva más grande. Vale cada peso invertido."',
    name: 'Laura Peña',
    role: 'Propietaria, La Mesa Dorada',
    initials: 'LP',
  },
]
