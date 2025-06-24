"use client"

import { useEffect, useState } from "react"
import { useAchievements } from "./use-achievements"

export function useEasterEggs() {
  const [konamiSequence, setKonamiSequence] = useState<string[]>([])
  const [showMatrix, setShowMatrix] = useState(false)
  const { unlockAchievement } = useAchievements()

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-konamiCode.length)
      setKonamiSequence(newSequence)

      // Check if Konami code is complete
      if (newSequence.length === konamiCode.length && newSequence.every((key, index) => key === konamiCode[index])) {
        unlockAchievement("konami-master", "Konami Master", "Found the secret code", "🎮")
        setShowMatrix(true)
        setTimeout(() => setShowMatrix(false), 5000)
        setKonamiSequence([])
      }

      // Easter egg: Type "vim" anywhere
      if (event.key === "m" && konamiSequence.slice(-2).join("") === "vi") {
        unlockAchievement("vim-lover", "Vim Lover", "Typed 'vim' on the page", "⌨️")
        // Show vim-style message
        const message = document.createElement("div")
        message.textContent = ":wq - Vim user detected!"
        message.className =
          "fixed top-4 left-4 bg-green-600 text-white px-4 py-2 rounded font-mono text-sm z-50 animate-in slide-in-from-left"
        document.body.appendChild(message)
        setTimeout(() => document.body.removeChild(message), 2000)
      }

      // Easter egg: Double-click anywhere
      let clickCount = 0
      const handleDoubleClick = () => {
        clickCount++
        if (clickCount === 1) {
          setTimeout(() => {
            if (clickCount === 2) {
              unlockAchievement("double-clicker", "Double Clicker", "Found the double-click secret", "👆")
              // Add some fun effect
              document.body.style.transform = "rotate(360deg)"
              document.body.style.transition = "transform 1s ease"
              setTimeout(() => {
                document.body.style.transform = ""
                document.body.style.transition = ""
              }, 1000)
            }
            clickCount = 0
          }, 300)
        }
      }

      document.addEventListener("dblclick", handleDoubleClick)
      return () => document.removeEventListener("dblclick", handleDoubleClick)
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [konamiSequence, unlockAchievement])

  return { showMatrix }
}

export function MatrixRain() {
  const [drops, setDrops] = useState<number[]>([])

  useEffect(() => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.zIndex = "9999"
    canvas.style.pointerEvents = "none"
    document.body.appendChild(canvas)

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("")
    const fontSize = 10
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function draw() {
      if (!ctx) return
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0F0"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    setTimeout(() => {
      clearInterval(interval)
      document.body.removeChild(canvas)
    }, 5000)

    return () => {
      clearInterval(interval)
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas)
      }
    }
  }, [])

  return null
}
