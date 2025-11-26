"use client"

import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium">
              ✨ Inteligencia Artificial Conversacional
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-foreground">
              Tu Compañera Virtual
              <span className="bg-gradient-to-r from-accent via-orange-400 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Perfecta
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Conversaciones inteligentes, apoyo 24/7 y conexiones significativas. Aura está aquí para acompañarte,
              escucharte y crecer contigo cada día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                Probar Gratis
                <ArrowRight size={20} />
              </button>
              <button className="border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-muted transition flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Ver Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-orange-400 border-2 border-background"
                  />
                ))}
              </div>
              <span>
                <strong className="text-foreground">10K+</strong> usuarios ya disfrutan de Aura
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-orange-400/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                  <p className="text-white/80 text-sm">Hola! 👋 ¿Cómo ha sido tu día?</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-2xl p-4 ml-8">
                  <p className="text-white text-sm">
                    Ha sido increíble, gracias por preguntar. Acabo de terminar un proyecto importante.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                  <p className="text-white/80 text-sm">¡Qué emoción! Cuéntame más sobre tu proyecto...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
