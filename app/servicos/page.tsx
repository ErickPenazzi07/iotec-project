import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Recycle, Droplets, Wind, TreePine, BarChart3, GraduationCap, Lightbulb, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Recycle,
    title: "Gestão Inteligente de Resíduos",
    description: "Sistema completo para coleta, separação e reciclagem de resíduos com tecnologia IoT",
    features: [
      "Monitoramento em tempo real de coletores",
      "Otimização de rotas de coleta",
      "Dashboard com métricas de reciclagem",
      "Integração com cooperativas locais",
    ],
    example: "Redução de 65% no tempo de coleta em condomínios",
  },
  {
    icon: Droplets,
    title: "Conservação de Recursos Hídricos",
    description: "Soluções para monitoramento e economia de água em ambientes urbanos e rurais",
    features: [
      "Sensores de vazamento inteligentes",
      "Sistema de captação de água da chuva",
      "Análise de qualidade da água",
      "Relatórios de consumo detalhados",
    ],
    example: "Economia de 40% no consumo de água em empresas",
  },
  {
    icon: Wind,
    title: "Energia Renovável",
    description: "Implementação de sistemas de energia limpa e sustentável",
    features: [
      "Instalação de painéis solares",
      "Turbinas eólicas de pequeno porte",
      "Sistema de baterias inteligentes",
      "Monitoramento de geração energética",
    ],
    example: "Redução de 80% na conta de energia em residências",
  },
  {
    icon: TreePine,
    title: "Reflorestamento Urbano",
    description: "Projetos de plantio e manutenção de áreas verdes em centros urbanos",
    features: [
      "Seleção de espécies nativas",
      "Planejamento de áreas verdes",
      "Manutenção programada",
      "Educação ambiental comunitária",
    ],
    example: "Mais de 10.000 árvores plantadas em 2024",
  },
  {
    icon: BarChart3,
    title: "Análise de Impacto Ambiental",
    description: "Relatórios detalhados sobre pegada de carbono e impacto ambiental",
    features: [
      "Cálculo de emissões de CO2",
      "Identificação de oportunidades de melhoria",
      "Certificações ambientais",
      "Planos de neutralização de carbono",
    ],
    example: "Empresas neutralizam 100% das emissões em 12 meses",
  },
  {
    icon: GraduationCap,
    title: "Educação Ambiental",
    description: "Programas educacionais para escolas, empresas e comunidades",
    features: [
      "Workshops e palestras",
      "Material didático interativo",
      "Projetos práticos de sustentabilidade",
      "Certificação em práticas sustentáveis",
    ],
    example: "Mais de 5.000 pessoas capacitadas anualmente",
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">
              Nossos Serviços
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Soluções Completas Para <span className="text-primary">Sustentabilidade</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos e implementamos projetos ambientais que geram impacto real e mensurável para empresas,
              comunidades e o planeta
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Como Funciona Nosso Projeto</h2>
              <p className="text-muted-foreground text-lg">
                Um processo estruturado para garantir resultados excepcionais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-2">Diagnóstico</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Análise completa da situação atual e identificação de oportunidades
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-2">Planejamento</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Desenvolvimento de estratégia personalizada e cronograma de ações
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-2">Implementação</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Execução das soluções com acompanhamento técnico especializado
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-2">Monitoramento</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Análise contínua de resultados e otimização de processos
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-muted-foreground text-lg">Soluções completas para cada necessidade ambiental</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium mb-1">Exemplo de Sucesso:</p>
                          <p className="text-sm text-muted-foreground">{service.example}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 lg:h-full min-h-[400px]">
                <img
                  src="/placeholder.svg?key=s7k4m"
                  alt="Benefícios Ambientais"
                  className="rounded-2xl object-cover w-full h-full shadow-2xl"
                />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
                  Benefícios de Investir em Sustentabilidade
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Economia Financeira</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Redução significativa de custos operacionais através de eficiência energética e gestão de
                        recursos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Imagem Corporativa</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Fortalecimento da marca e reputação junto a clientes e stakeholders
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Conformidade Legal</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Adequação às legislações ambientais e obtenção de certificações
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Impacto Positivo</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Contribuição real para a preservação do meio ambiente e futuro sustentável
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Pronto Para Transformar Seu Negócio?</h2>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90">
              Entre em contato conosco e descubra como nossas soluções podem ajudar sua empresa a ser mais sustentável e
              lucrativa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registro">
                <Button size="lg" variant="secondary" className="text-base">
                  Começar Agora
                </Button>
              </Link>
              <Link href="/sobre">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Falar com a Equipe
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
