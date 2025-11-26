"use client"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent to-orange-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-accent-foreground mb-6">Comienza tu viaje hoy</h2>
        <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
          Únete a miles de personas que ya disfrutan de conversaciones significativas con Aura
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent-foreground text-accent px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            Crear Cuenta Gratis
          </button>
          <button className="border-2 border-accent-foreground text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent-foreground/10 transition">
            Contactar Ventas
          </button>
        </div>
      </div>
    </section>
  )
}
