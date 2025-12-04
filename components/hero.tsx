"use client";

import { ArrowRight, MessageCircle, Video } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-foreground">
              Tu Compañera Virtual
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}
                Perfecta
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Conversaciones inteligentes, apoyo 24/7 y conexiones
              significativas. Aura está aquí para acompañarte, escucharte y
              crecer contigo cada día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-linear-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-2 cursor-pointer button-shadow">
                Probar Gratis
                <ArrowRight size={20} />
              </button>
              <button className="border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-muted/10 transition flex items-center justify-center gap-2 cursor-pointer">
                <Video size={20} />
                Ver Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-linear-to-r from-primary to-accent border-2 border-background"
                  />
                ))}
              </div>
              <span>
                <strong className="text-foreground">10K+</strong> usuarios ya
                disfrutan de Aura
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl scale-110" />
            <div className="relative bg-linear-to-r from-primary to-accent rounded-3xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="bg-background/10 backdrop-blur rounded-2xl p-4">
                  <p className="text-white/80 text-sm">
                    Hola! 👋 ¿Cómo ha sido tu día?
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-2xl p-4 ml-8">
                  <p className="text-white text-sm">
                    Ha sido increíble, gracias por preguntar. Acabo de terminar
                    un proyecto importante.
                  </p>
                </div>
                <div className="bg-background/10 backdrop-blur rounded-2xl p-4">
                  <p className="text-white/80 text-sm">
                    ¡Qué emoción! Cuéntame más sobre tu proyecto...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
