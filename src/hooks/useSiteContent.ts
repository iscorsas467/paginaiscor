import { useState, useEffect } from 'react'
import { SiteContent } from '@/lib/site-content'

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadContent()
  }, [])

  const loadContent = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/site-content')
      if (!response.ok) {
        throw new Error('Failed to load content')
      }
      const data = await response.json()
      setContent(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const saveContent = async (section: string, sectionContent: unknown) => {
    try {
      setError(null)
      const response = await fetch(`/api/site-content/${section}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sectionContent),
      })
      
      if (!response.ok) {
        throw new Error('Failed to save content')
      }

      // Reload content after saving
      await loadContent()
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      return false
    }
  }

  return {
    content,
    loading,
    error,
    saveContent,
    reload: loadContent
  }
}
