"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Aura</h3>
            <p className="text-muted-foreground">Tu compañera virtual inteligente</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Producto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Aura. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            Hecho con <Heart size={16} className="text-accent" /> para conectar
          </div>
        </div>
      </div>
    </footer>
  )
}
