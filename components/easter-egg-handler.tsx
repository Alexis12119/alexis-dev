"use client"

import { useEasterEggs } from "@/hooks/use-easter-eggs"
import { MatrixRain } from "@/components/matrix-rain"

export function EasterEggHandler() {
  const { showMatrix } = useEasterEggs()

  return <>{showMatrix && <MatrixRain />}</>
}
