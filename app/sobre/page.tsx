import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import teamMembers from "@/data/team"


export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">
              Nossa Equipe
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Conheça Quem Está Por Trás do <span className="text-primary">IOTEC</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma equipe multidisciplinar dedicada a criar soluções sustentáveis e inovadoras para os desafios
              ambientais do nosso tempo
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Nossa Missão</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Desenvolver e implementar soluções tecnológicas sustentáveis que promovam a preservação ambiental,
                    eduquem comunidades e inspirem ações concretas para um futuro mais verde e equilibrado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Nossa Visão</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser referência em inovação ambiental, reconhecidos por criar impacto positivo mensurável e por
                    capacitar organizações e indivíduos a adotarem práticas sustentáveis em seu dia a dia.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Team Members */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nossa Equipe</h2>
              <p className="text-muted-foreground text-lg">Profissionais apaixonados por sustentabilidade e inovação</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors overflow-hidden group">
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                        aria-label={`LinkedIn ${member.name}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nossos Valores</h2>
              <p className="text-muted-foreground text-lg">Princípios que guiam cada decisão e ação</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Compromisso com práticas que respeitam o meio ambiente
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-bold mb-2">Inovação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Busca constante por soluções criativas e eficientes
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-2">Colaboração</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trabalho em equipe para resultados extraordinários
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
