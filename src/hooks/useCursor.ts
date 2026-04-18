import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('ev-cursor')
    const trail = document.getElementById('ev-cursor-trail')
    if (!cursor || !trail) return

    let mx = 0, my = 0, tx = 0, ty = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
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

    return () => {
      document.removeEventListener('mousemove', onMove)
      clearInterval(interval)
    }
  }, [])
}
