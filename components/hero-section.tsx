"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { motion } from "framer-motion";

export function HeroSection() {
  const { t } = useLanguage();
  
  const whatsappUrl = "https://wa.me/573000000000?text=Hola,%20me%20gustaría%20información%20sobre%20la%20preventa%20de%20boletas%20para%20rutas%20inmersivas.";

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
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/10 text-white text-sm mb-6">
              <MapPin className="w-4 h-4" />
              <span>{t("hero_location")}</span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-7xl font-semibold text-white leading-tight mb-6 tracking-tight">
              <span className="block text-balance">{t("hero_title_1")}</span>
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                {t("hero_title_2")}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-full px-8 py-4 text-lg font-medium shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t("hero_btn_primary")}
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg bg-white/10 dark:bg-black/10 backdrop-blur-lg border-white/30 dark:border-white/10 text-white hover:bg-white/20 dark:bg-black/20 hover:text-white transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                {t("hero_btn_secondary")}
              </Button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { number: t("hero_stat_1_val"), label: t("hero_stat_1_lbl") },
              { number: t("hero_stat_2_val"), label: t("hero_stat_2_lbl") },
              { number: t("hero_stat_3_val"), label: t("hero_stat_3_lbl") },
              { number: t("hero_stat_4_val"), label: t("hero_stat_4_lbl") },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 text-center hover:bg-white/20 dark:bg-black/20 transition-all duration-300 hover:scale-105 group"
              >
                <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white group-hover:text-secondary transition-colors">
                  {stat.number}
                </p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-primary text-sm font-medium">{t("scroll_down")}</span>
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
}
