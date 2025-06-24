"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simple syntax highlighting (you can enhance this with a proper library)
  const highlightCode = (code: string, lang: string) => {
    if (lang === "javascript" || lang === "typescript") {
      return code
        .replace(
          /\b(const|let|var|function|return|if|else|for|while|class|import|export|from)\b/g,
          '<span class="text-purple-400">$1</span>',
        )
        .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
        .replace(/\/\/.*$/gm, '<span class="text-gray-500">$&</span>')
        .replace(/\/\*[\s\S]*?\*\//g, '<span class="text-gray-500">$&</span>')
    }
    return code
  }

  return (
    <div className="relative group">
      <div className="bg-muted border rounded-lg overflow-hidden">
        {filename && (
          <div className="bg-muted-foreground/10 px-4 py-2 border-b flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground">{filename}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        )}
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono" dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }} />
        </pre>
      </div>
    </div>
  )
}
