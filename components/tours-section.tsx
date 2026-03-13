"use client";

import { Button } from "@/components/ui/button";
import { Check, Star, Clock, Users, MapPin } from "lucide-react";

const tours = [
  {
    name: "Tour Esencial",
    price: "150.000",
    duration: "3 horas",
    groupSize: "Hasta 8 personas",
    description: "Conoce los puntos emblemáticos de Barranquilla con un guía local experto.",
    features: [
      "Recorrido por el centro histórico",
      "Visita al Malecón del Río",
      "Degustación de snacks típicos",
      "Guía bilingüe",
      "Transporte incluido",
    ],
    popular: false,
  },
  {
    name: "Experiencia Completa",
    price: "280.000",
    duration: "6 horas",
    groupSize: "Hasta 10 personas",
    description: "Una inmersión total en la cultura barranquillera con gastronomía y música.",
    features: [
      "Todo lo del Tour Esencial",
      "Almuerzo típico completo",
      "Clase de cumbia básica",
      "Taller de artesanías",
      "Visita a mercado local",
      "Fotos profesionales",
    ],
    popular: true,
  },
  {
    name: "Tour Premium",
    price: "450.000",
    duration: "8 horas",
    groupSize: "Hasta 6 personas",
    description: "Experiencia exclusiva y personalizada con acceso VIP a lugares únicos.",
    features: [
      "Todo lo de Experiencia Completa",
      "Acceso VIP a sitios exclusivos",
      "Cena gourmet caribeña",
      "Show privado de música",
      "Transporte premium",
      "Souvenirs exclusivos",
      "Conserje personal",
    ],
    popular: false,
  },
];

export function ToursSection() {
  return (
    <section id="tours" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Nuestros Tours
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            <span className="text-balance">Elige tu </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              aventura perfecta
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Diseñamos cada experiencia pensando en ti. Desde recorridos express hasta inmersiones culturales completas.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl p-1 transition-all duration-500 hover:scale-[1.02] ${
                tour.popular
                  ? "bg-gradient-to-br from-primary via-accent to-primary"
                  : "bg-gradient-to-br from-border via-transparent to-border"
              }`}
            >
              {tour.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium shadow-lg shadow-primary/30 flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-current" />
                  Más Popular
                </div>
              )}

              <div className="h-full rounded-[22px] bg-card/95 backdrop-blur-xl p-6 lg:p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground mb-2">
                    {tour.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tour.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">COP</span>
                    <span className="text-4xl font-bold text-foreground">
                      {tour.price}
                    </span>
                    <span className="text-muted-foreground">/persona</span>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {tour.groupSize}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tour.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full rounded-xl py-6 text-base font-medium transition-all duration-300 ${
                    tour.popular
                      ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50"
                      : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
                  }`}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Reservar Ahora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground mt-12">
          ¿Necesitas algo especial?{" "}
          <a href="#contacto" className="text-primary hover:underline font-medium">
            Contáctanos
          </a>{" "}
          para tours personalizados.
        </p>
      </div>
    </section>
  );
}
