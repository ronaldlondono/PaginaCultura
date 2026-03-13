"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cupula.png"
          alt="Vista de Barranquilla"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white text-sm mb-6">
              <MapPin className="w-4 h-4" />
              <span>Carrera 84 - Barranquilla, Colombia</span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-7xl font-semibold text-white leading-tight mb-6 tracking-tight">
              <span className="block text-balance">Descubre la</span>
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Magia del Caribe
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
              Sumérgete en la cultura, tradiciones y alegría de Barranquilla.
              Vive experiencias únicas en el corazón del Caribe colombiano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg bg-white/10 backdrop-blur-lg border-white/30 text-white hover:bg-white/20 hover:text-white transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Conocer Más
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { number: "15+", label: "Años de Experiencia" },
              { number: "50k+", label: "Visitantes Felices" },
              { number: "100+", label: "Tours Realizados" },
              { number: "4.9", label: "Calificación" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white group-hover:text-secondary transition-colors">
                  {stat.number}
                </p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-primary text-sm">Desliza</span>
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
}
