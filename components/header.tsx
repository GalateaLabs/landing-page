"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto w-[92%]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <div className="text-2xl font-bold text-accent flex items-center">
              <img src="/favicon.svg" alt="Galatea Logo" className="w-14 h-auto"/>
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
              The Myth
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition"
            >
              Synthesis
            </a>
            <a
              href="#benefits"
              className="text-foreground hover:text-primary transition"
            >
              The Difference
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition"
            >
              Blog
            </a>
            <button className="bg-linear-to-r from-primary to-accent text-white font-semibold px-6 py-2 rounded-full transition cursor-pointer button-shadow">
              Meet Yours
            </button>


          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed h-screen w-screen p-16 border-t space-y-8 border-border transition top-0 left-0 bg-background shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="space-y-8 grid">
          <a
            href="#features"
            className="text-foreground hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            The Myth
          </a>
          <a
            href="#features"
            className="text-foreground hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Synthesis
          </a>
          <a
            href="#benefits"
            className="text-foreground hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            The Difference
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <button onClick={() => setIsOpen(false)} className="bg-linear-to-r from-primary to-accent text-white font-semibold px-6 py-2 mt-8 rounded-full transition cursor-pointer button-shadow">
            Meet Yours
          </button>
        </nav>
      </div>
    </header>
  );
}
