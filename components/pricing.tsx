"use client"

import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Gratuito",
      price: "0",
      description: "Perfecto para probar",
      features: [
        "Acceso limitado a conversaciones",
        "Respuestas estándar",
        "5 conversaciones diarias",
        "Soporte por email",
      ],
      cta: "Comenzar",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "9.99",
      description: "Lo más popular",
      features: [
        "Conversaciones ilimitadas",
        "Respuestas personalizadas avanzadas",
        "Sin límites de chat diarios",
        "Soporte prioritario",
        "Análisis de conversaciones",
      ],
      cta: "Probar 7 días",
      highlighted: true,
    },
    {
      name: "Pro",
      price: "19.99",
      description: "Para usuarios avanzados",
      features: [
        "Todo en Premium",
        "Integración con otras apps",
        "Exportar conversaciones",
        "Acceso a beta features",
        "Sesiones de coaching personalizadas",
      ],
      cta: "Probar 7 días",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Planes Simples y Transparentes</h2>
          <p className="text-xl text-muted-foreground">Elige el plan que mejor se adapte a ti</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 transition-all ${
                plan.highlighted
                  ? "border-accent bg-gradient-to-br from-accent/10 to-orange-400/10 transform scale-105"
                  : "border-border bg-card hover:border-accent/50"
              } p-8`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold mb-4">
                  MÁS POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">/mes</span>
              </div>

              <button
                className={`w-full py-3 rounded-full font-semibold transition mb-8 ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex gap-3 items-start">
                    <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
