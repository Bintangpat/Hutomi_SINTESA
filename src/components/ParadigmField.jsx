import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

/**
 * Signature visual: a field of points begins as a rigid, obedient grid
 * ("paradigm lama" — order for order's sake) and resolves into a
 * loose, wave-like formation ("paradigma baru") as the page loads.
 * This is the one deliberate Three.js risk on the page — everything
 * else stays quiet so this reads clearly.
 */
export default function ParadigmField({ className }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = mount.clientWidth
    let height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, 0, 9)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    // ---- build grid (old) + wave (new) position sets ----
    const COLS = 26
    const ROWS = 16
    const COUNT = COLS * ROWS
    const spacingX = 0.62
    const spacingY = 0.62

    const gridPos = new Float32Array(COUNT * 3)
    const wavePos = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)

    const red = new THREE.Color('#e2241b')
    const white = new THREE.Color('#ffffff')
    const navyAccent = new THREE.Color('#4a5a6b')

    let i = 0
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const gx = (c - (COLS - 1) / 2) * spacingX
        const gy = (r - (ROWS - 1) / 2) * spacingY
        gridPos[i * 3 + 0] = gx
        gridPos[i * 3 + 1] = gy
        gridPos[i * 3 + 2] = 0

        // wave / dispersed target: organic offset based on sine field + noise-ish jitter
        const angle = (c / COLS) * Math.PI * 2
        const radiusJitter = 1 + 0.9 * Math.sin(r * 1.7 + c * 0.6)
        const wx = gx * (1.05 + 0.18 * Math.sin(r * 0.8))
        const wy = gy * (1.05 + 0.18 * Math.cos(c * 0.7)) + Math.sin(c * 0.5 + r * 0.3) * 0.8
        const wz = Math.sin(gx * 0.8 + gy * 0.6) * 1.6 * radiusJitter * 0.6

        wavePos[i * 3 + 0] = wx
        wavePos[i * 3 + 1] = wy
        wavePos[i * 3 + 2] = wz

        const t = Math.random()
        const mixed =
          t < 0.72 ? navyAccent.clone().lerp(white, 0.15) : red.clone().lerp(white, 0.1)
        colors[i * 3 + 0] = mixed.r
        colors[i * 3 + 1] = mixed.g
        colors[i * 3 + 2] = mixed.b

        i++
      }
    }

    const geometry = new THREE.BufferGeometry()
    const livePos = new Float32Array(gridPos) // current positions, mutated each frame
    geometry.setAttribute('position', new THREE.BufferAttribute(livePos, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.052,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // thin connecting lines for a subtle "network" feel
    const lineGeo = new THREE.BufferGeometry()
    const lineIdx = []
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS - 1; c++) {
        lineIdx.push(r * COLS + c, r * COLS + c + 1)
      }
    }
    lineGeo.setAttribute('position', new THREE.BufferAttribute(livePos, 3))
    lineGeo.setIndex(lineIdx)
    const lineMat = new THREE.LineBasicMaterial({
      color: '#3a4653',
      transparent: true,
      opacity: 0.16,
    })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // ---- animation state ----
    const progress = { t: 0 }
    const rotation = { x: 0, y: 0 }
    const mouse = { x: 0, y: 0 }

    function applyProgress() {
      const posAttr = geometry.getAttribute('position')
      for (let idx = 0; idx < COUNT; idx++) {
        const gx = gridPos[idx * 3], gy = gridPos[idx * 3 + 1], gz = gridPos[idx * 3 + 2]
        const wx = wavePos[idx * 3], wy = wavePos[idx * 3 + 1], wz = wavePos[idx * 3 + 2]
        posAttr.array[idx * 3 + 0] = gx + (wx - gx) * progress.t
        posAttr.array[idx * 3 + 1] = gy + (wy - gy) * progress.t
        posAttr.array[idx * 3 + 2] = gz + (wz - gz) * progress.t
      }
      posAttr.needsUpdate = true
      lineGeo.getAttribute('position').needsUpdate = true
      lineMat.opacity = 0.16 * (1 - progress.t) // network dissolves as it disperses
    }

    applyProgress()

    const tl = gsap.timeline({ delay: 0.15 })
    tl.to(progress, {
      t: 1,
      duration: prefersReduced ? 0.001 : 2.6,
      ease: 'power3.inOut',
      onUpdate: applyProgress,
    })

    function onPointerMove(e) {
      const r = mount.getBoundingClientRect()
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2
      mouse.y = ((e.clientY - r.top) / r.height - 0.5) * 2
    }
    window.addEventListener('pointermove', onPointerMove)

    let raf
    const clock = new THREE.Clock()
    function tick() {
      raf = requestAnimationFrame(tick)
      const elapsed = clock.getElapsedTime()
      if (!prefersReduced) {
        rotation.y += (mouse.x * 0.35 - rotation.y) * 0.02
        rotation.x += (-mouse.y * 0.2 - rotation.x) * 0.02
        points.rotation.y = rotation.y + Math.sin(elapsed * 0.08) * 0.05
        points.rotation.x = rotation.x
        lines.rotation.y = points.rotation.y
        lines.rotation.x = points.rotation.x
      }
      renderer.render(scene, camera)
    }
    tick()

    function onResize() {
      width = mount.clientWidth
      height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      tl.kill()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)
      geometry.dispose()
      lineGeo.dispose()
      material.dispose()
      lineMat.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className={className} aria-hidden="true" />
}
