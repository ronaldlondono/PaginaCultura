"use client";

import Image from "next/image";
import { Heart, Music, Utensils, Palette, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Heart,
    title: "Hospitalidad Caribeña",
    description: "Te recibimos con los brazos abiertos y la calidez característica de nuestra gente.",
  },
  {
    icon: Music,
    title: "Música y Baile",
    description: "Cumbia, vallenato y champeta. Siente el ritmo que mueve nuestras calles.",
  },
  {
    icon: Utensils,
    title: "Gastronomía Local",
    description: "Sabores únicos del Caribe que despiertan todos tus sentidos.",
  },
  {
    icon: Palette,
    title: "Arte y Tradición",
    description: "Artesanías, carnaval y expresiones culturales que nos definen.",
  },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
              <Image
                src="/images/barranquilla-malecon.jpg"
                alt="Malecón del Río Magdalena"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 p-6 rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl shadow-primary/10 max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ubicación</p>
                  <p className="text-sm text-muted-foreground">Carrera 84, Barranquilla</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                En el corazón de la zona norte, cerca de todo lo que amas.
              </p>
            </div>

            {/* Secondary image */}
            <div className="absolute -top-8 -left-4 lg:-left-8 w-32 h-40 lg:w-40 lg:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
              <Image
                src="/images/barranquilla-carnaval.jpg"
                alt="Carnaval de Barranquilla"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Sobre Nosotros
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6 tracking-tight">
              <span className="text-balance">Un espacio donde la</span>{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                cultura cobra vida
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Somos más que un centro cultural. Somos el punto de encuentro donde 
              locales y visitantes descubren juntos la esencia de Barranquilla. 
              Desde tours guiados hasta experiencias gastronómicas, cada momento 
              aquí está diseñado para dejarte con recuerdos inolvidables.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-sm border border-white/50 dark:border-white/10 hover:bg-white/80 dark:bg-black/80 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
