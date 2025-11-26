"use client"

import { Brain, Zap, Shield, Clock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "IA Conversacional Avanzada",
      description: "Conversaciones naturales y contextuales que se adaptan a tu personalidad y necesidades.",
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Siempre está aquí para escucharte, sin importar la hora o tu zona horaria.",
    },
    {
      icon: Zap,
      title: "Respuestas Instantáneas",
      description: "Obtén respuestas rápidas y útiles a tus preguntas en tiempo real.",
    },
    {
      icon: Shield,
      title: "Privacidad Garantizada",
      description: "Tus conversaciones son confidenciales y encriptadas end-to-end.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Características Poderosas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para tener conversaciones significativas y apoyo constante
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-accent transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Icon size={24} className="text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
