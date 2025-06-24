"use client"

import { useEasterEggs, MatrixRain } from "@/hooks/use-easter-eggs"

export function EasterEggHandler() {
  const { showMatrix } = useEasterEggs()

  return <>{showMatrix && <MatrixRain />}</>
}
