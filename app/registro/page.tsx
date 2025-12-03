import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Leaf } from "lucide-react"
import Link from "next/link"

export default function RegistroPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16 flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="w-full max-w-md px-4 py-12">
          <Card className="border-2">
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">Crie sua conta</CardTitle>
              <CardDescription>Junte-se a nós na missão de preservar o meio ambiente</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input id="name" type="text" placeholder="João Silva" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar senha</Label>
                  <Input id="confirm-password" type="password" placeholder="••••••••" required />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Eu concordo com os{" "}
                    <Link href="#" className="text-primary hover:underline">
                      termos de serviço
                    </Link>{" "}
                    e{" "}
                    <Link href="#" className="text-primary hover:underline">
                      política de privacidade
                    </Link>
                  </label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Criar conta
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Já tem uma conta?</span>{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Faça login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
