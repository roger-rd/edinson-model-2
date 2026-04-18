# Edinson Valera — Portfolio & Landing Page

Sitio web profesional para diseñador gráfico freelance.  
Stack: **React + Vite + TypeScript + Tailwind CSS + Framer Motion**

---

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## Build para producción

```bash
npm run build
npm run preview
```

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Cursor.tsx          ← Cursor personalizado con trail dorado
│   ├── Navbar.tsx          ← Navegación fija con CTA
│   ├── Hero.tsx            ← Pantalla principal con animaciones
│   ├── Marquee.tsx         ← Banda de especialidades animada
│   ├── About.tsx           ← Historia + habilidades
│   ├── Services.tsx        ← 6 servicios con precios y hover
│   ├── Portfolio.tsx       ← Grid filtrable con modal detallado
│   ├── PortfolioModal.tsx  ← Modal de proyecto con AnimatePresence
│   ├── Testimonials.tsx    ← 3 testimonios de clientes
│   └── Footer.tsx          ← CTA final + footer
├── data/
│   └── content.ts          ← Todos los textos, proyectos y servicios
├── hooks/
│   ├── useScrollReveal.ts  ← IntersectionObserver para animaciones al scroll
│   └── useCursor.ts        ← Lógica del cursor personalizado
├── App.tsx
├── main.tsx
└── index.css               ← Variables CSS + Tailwind base
```

---

## Personalización

### Cambiar datos del diseñador

Edita `src/data/content.ts`:
- `services` → nombres, descripciones y precios de servicios
- `projects` → proyectos del portafolio con descripciones
- `testimonials` → testimonios de clientes

### Cambiar contacto

En `src/components/Footer.tsx`, actualiza:
- Número de WhatsApp en el enlace `wa.me/...`
- Email en el `mailto:...`
- Handle de Instagram

### Agregar imágenes reales al portafolio

1. Coloca las imágenes en `public/portfolio/`
2. En `src/data/content.ts`, reemplaza `gradient` por `image: '/portfolio/nombre.jpg'`
3. En `Portfolio.tsx` y `PortfolioModal.tsx`, usa `<img>` en lugar del div con gradient

### Colores

Las variables principales están en `src/index.css`:
```css
--gold: #c9a96e;      /* Dorado principal */
--cream: #f5f2ee;     /* Texto claro */
--black: #0a0a0a;     /* Fondo principal */
```

---

## Checklist antes de publicar

- [ ] Actualizar número de WhatsApp real
- [ ] Actualizar email real
- [ ] Agregar imágenes reales del portafolio
- [ ] Actualizar estadísticas del Hero (proyectos, años de exp.)
- [ ] Revisar y personalizar textos de servicios y precios
- [ ] Agregar Google Analytics o similar
- [ ] Configurar dominio personalizado

---

## Deploy recomendado

**Vercel** (gratis y automático):
```bash
npm install -g vercel
vercel
```

**Netlify** (también gratis):
```bash
npm run build
# Arrastra la carpeta /dist a netlify.com/drop
```
