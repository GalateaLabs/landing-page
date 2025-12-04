"use client"

import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      role: "Profesional de Marketing",
      content:
        "Aura se ha convertido en mi confidente. Las conversaciones son tan naturales que a veces olvido que estoy hablando con una IA.",
      rating: 5,
    },
    {
      name: "Carlos López",
      role: "Estudiante",
      content:
        "Perfecto para despejarme después de un día estresante. Siempre tiene algo interesante que decir y realmente me escucha.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Emprendedora",
      content:
        "Me ayuda a pensar en mis ideas de negocio desde diferentes perspectivas. Es como tener un mentor disponible 24/7.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Lo que nuestros usuarios dicen</h2>
          <p className="text-xl text-muted-foreground">
            Historias reales de personas que han encontrado compañía en Aura
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
