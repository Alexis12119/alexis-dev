"use client"

import { useState, useEffect } from "react"
import axios from "axios"

export function useGithubData() {
  const [data, setData] = useState({ repos: [] as any[], events: [] as any[] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reposRes, eventsRes] = await Promise.all([
          axios.get('https://api.github.com/users/Alexis12119/repos?sort=updated&per_page=100'),
          axios.get('https://api.github.com/users/Alexis12119/events/public')
        ])
        setData({ repos: reposRes.data, events: eventsRes.data })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { data, loading, error }
}