import { Leaf } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-xl">
              <Leaf className="w-7 h-7" />
              <span>IOTEC</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando o futuro através da sustentabilidade e inovação ambiental.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Conta</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/registro" className="text-muted-foreground hover:text-primary transition-colors">
                  Registrar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              contato@iotec.com
              <br />
              +55 (14) 99999-9999
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 IOTEC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
