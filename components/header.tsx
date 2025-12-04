"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <div className="text-2xl font-bold text-accent">
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Galatea
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#features"
              className="text-foreground hover:text-primary transition"
            >
            Galatea's Myth
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-accent transition"
            >
              Características
            </a>
            <a
              href="#benefits"
              className="text-foreground hover:text-accent transition"
            >
              Beneficios
            </a>
            <a
              href="#"
              className="text-foreground hover:text-accent transition"
            >
              Blog
            </a>
            <button className="bg-linear-to-r from-primary to-accent text-white font-semibold px-6 py-2 rounded-full transition cursor-pointer button-shadow">
              Regístrate
            </button>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <a
              href="#features"
              className="block py-2 text-foreground hover:text-accent transition"
            >
              Características
            </a>
            <a
              href="#benefits"
              className="block py-2 text-foreground hover:text-accent transition"
            >
              Beneficios
            </a>
            <a
              href="#pricing"
              className="block py-2 text-foreground hover:text-accent transition"
            >
              Precios
            </a>
            <button className="w-full mt-4 bg-accent text-accent-foreground px-6 py-2 rounded-full hover:opacity-90 transition">
              Comenzar
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
