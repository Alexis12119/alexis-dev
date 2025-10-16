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
