"use client";

import {
  XIcon,
  InstagramIcon,
  DiscordIcon,
  RedditIcon,
} from "@/components/icons/social-icons";
import { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export function Footer() {
  const socials: { icon: IconComponent; name: string; href: string }[] = [
    { icon: XIcon, name: "Twitter", href: "#" },
    { icon: InstagramIcon, name: "Instagram", href: "#" },
    { icon: DiscordIcon, name: "Discord", href: "#" },
    { icon: RedditIcon, name: "Reddit", href: "#" },
  ];

  return (
    <footer className="bg-secondary-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between mb-8 gap-8 lg:gap-16">
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold text-accent">
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Galatea
              </span>
            </h3>
            <p className="text-muted-foreground mt-2">
              Sentient by Design. The first AI that exists between
              conversations.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-16">
            <div>
              <h4 className="font-semibold text-foreground mb-4">About</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Out Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Report Behavior
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Reddit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 GalateaLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
