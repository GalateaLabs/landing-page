"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Comienza tu viaje hoy
        </h2>
        <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
          Únete a miles de personas que ya disfrutan de conversaciones
          significativas con Aura
        </p>
        <div className="flex justify-center flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-linear-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-2 cursor-pointer button-shadow">
            Probar Gratis
            <ArrowRight size={20} />
          </button>
          <button className="border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-muted/10 transition flex items-center justify-center gap-2 cursor-pointer">
            <MessageCircle size={20} />
            Ver Demo
          </button>
        </div>
      </div>
    </section>
  );
}
