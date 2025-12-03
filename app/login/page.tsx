import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
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
              <CardTitle className="text-2xl font-bold">Bem-vindo de volta</CardTitle>
              <CardDescription>Entre com suas credenciais para acessar sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Entrar
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Não tem uma conta?</span>{" "}
                <Link href="/registro" className="text-primary hover:underline font-medium">
                  Cadastre-se
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
