import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Recycle, Droplets, Wind, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>Inovação Sustentável</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Transformando o Futuro do <span className="text-primary">Meio Ambiente</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              Desenvolvemos soluções inovadoras para preservação ambiental, combinando tecnologia de ponta com práticas
              sustentáveis para criar um planeta mais saudável para as próximas gerações.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/servicos">
                <Button size="lg" className="text-base group">
                  Conheça Nossos Serviços
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/sobre">
                <Button size="lg" variant="outline" className="text-base bg-transparent">
                  Nossa Equipe
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Por Que Nosso Projeto é Diferente?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Combinamos inovação tecnológica com consciência ambiental
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Leaf className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sustentável</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Práticas 100% sustentáveis em todos os processos
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Recycle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reciclagem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sistema inteligente de reciclagem e reutilização
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Conservação</h3>
                  <p className="text-muted-foreground leading-relaxed">Preservação de recursos hídricos e naturais</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Wind className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Energia Limpa</h3>
                  <p className="text-muted-foreground leading-relaxed">Uso de fontes renováveis de energia</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Nossa Missão é Proteger o Planeta</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Acreditamos que a tecnologia e a natureza podem trabalhar em harmonia. Nosso projeto desenvolve
                  soluções práticas e escaláveis para os principais desafios ambientais do século XXI.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Com uma equipe dedicada de especialistas, implementamos estratégias que reduzem o impacto ambiental e
                  promovem a sustentabilidade em diversos setores.
                </p>
                <Link href="/sobre">
                  <Button size="lg" variant="outline">
                    Conheça Nossa Equipe
                  </Button>
                </Link>
              </div>

              <div className="relative h-96 lg:h-full min-h-[400px]">
                <img
                  src="/sustainable-technology-innovation-green-energy-sol.jpg"
                  alt="Inovação Sustentável"
                  className="rounded-2xl object-cover w-full h-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">

        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Pronto Para Fazer Parte da Mudança?</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Junte-se a nós na missão de criar um futuro mais sustentável
            </p>
            <Link href="/registro">
              <Button size="lg" className="text-base">
                Cadastre-se Agora
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
