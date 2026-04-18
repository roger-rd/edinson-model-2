import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('ev-cursor')
    const trail = document.getElementById('ev-cursor-trail')
    if (!cursor || !trail) return

    let mx = 0, my = 0, tx = 0, ty = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    const interval = setInterval(() => {
      tx += (mx - tx) * 0.15
      ty += (my - ty) * 0.15
      trail.style.left = tx + 'px'
      trail.style.top = ty + 'px'
    }, 16)

    const grow = () => { cursor.style.width = '24px'; cursor.style.height = '24px'; cursor.style.opacity = '0.5' }
    const shrink = () => { cursor.style.width = '10px'; cursor.style.height = '10px'; cursor.style.opacity = '1' }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => { document.removeEventListener('mousemove', onMove); clearInterval(interval) }
  }, [])

  return (
    <>
      <div
        id="ev-cursor"
        style={{
          position: 'fixed', width: 10, height: 10, background: '#c9a96e',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
      <div
        id="ev-cursor-trail"
        style={{
          position: 'fixed', width: 36, height: 36,
          border: '1px solid rgba(201,169,110,0.35)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.12s ease-out, top 0.12s ease-out',
        }}
      />
    </>
  )
}
