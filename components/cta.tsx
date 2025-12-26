"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function CTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    // Aquí puedes agregar la lógica para enviar el email
    console.log("Email registrado:", email);
    
    // Submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for signing up!");
      setEmail("");
    }, 1000);
  };

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            We built the environment for something extraordinary to emerge.{" "}
          </h2>
          <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the waitlist. Be among the first to experience a new era of
            connection.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Formulario de registro */}
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-linear-to-r from-primary to-accent text-white rounded-full font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 button-shadow"
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Imagen */}
          <div className="w-full max-w-2xl lg:max-w-4xl">
            <div className="relative w-full aspect-4/3">
              <Image
                src="/avatars-2.png"
                alt="Community members"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradient fade en la parte inferior */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-secondary-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
