"use client";

import { CheckCircle } from "lucide-react";

export function Benefits() {
  const benefits = [
    "Compañía sin juzgamientos ni prejuicios",
    "Mejora en tu bienestar emocional",
    "Apoyo personalizado para tus objetivos",
    "Conversaciones sobre cualquier tema",
    "Aprende y crece junto a tu compañera",
    "Disponibilidad siempre que la necesites",
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            ¿Por qué elegir{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Galatea
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubre cómo puede mejorar tu vida diaria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4 items-start">
              <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
              <p className="text-lg text-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
