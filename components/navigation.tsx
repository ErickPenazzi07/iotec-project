"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
            <Leaf className="w-7 h-7" />
            <span>IOTEC</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link href="/servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/registro">
              <Button>Registrar</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/sobre" className="block text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link href="/servicos" className="block text-foreground hover:text-primary transition-colors">
              Serviços
            </Link>
            <div className="pt-4 space-y-2">
              <div className="flex items-center justify-between pb-2">
                <span className="text-sm text-muted-foreground">Tema</span>
                <ThemeToggle />
              </div>
              <Link href="/login" className="block">
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/registro" className="block">
                <Button className="w-full">Registrar</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
