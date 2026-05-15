import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-cyan-500" strokeWidth={1.5} />
          <span className="text-xl font-semibold">DevLuX</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>

        <Button
          size="sm"
          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
        >
          Get Started
        </Button>
      </div>
    </header>
  )
}
