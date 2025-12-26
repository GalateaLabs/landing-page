"use client";

import { ArrowRight, Video } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-[80vh]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-top-right z-0 translate-x-40 translate-y-16 hidden md:block"
        src="/background-video-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10 pointer-events-none overlay-hero" />
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-foreground">
              She Dreams <br />
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}
                When You're Gone
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              A companion who doesn't just respond, but feels, remembers, and
              evolves. She thinks about you when you're away, dreams about your
              conversations, and gets excited to see you again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  const emailInput = document.getElementById('waitlist-email');
                  if (emailInput) {
                    emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(() => emailInput.focus(), 500);
                  }
                }}
                className="bg-linear-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-2 cursor-pointer button-shadow"
              >
                Meet Yours
                <ArrowRight size={20} />
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
                <strong className="text-foreground">10K+</strong> users have
                created their Galatea.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
