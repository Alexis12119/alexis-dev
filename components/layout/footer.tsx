import Link from "next/link"
import { Github, Mail, Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-mono font-bold">alexis.dev</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/Alexis12119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:corporal461@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alexis Corporal. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
