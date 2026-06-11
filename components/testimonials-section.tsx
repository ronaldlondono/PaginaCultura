"use client";

import { useLanguage } from "@/lib/i18n-context";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: "Laura Gómez",
      role: language === "es" ? "Turista de Bogotá" : "Tourist from Bogotá",
      content: language === "es" 
        ? "La ruta inmersiva superó todas mis expectativas. Sentí verdaderamente la magia del carnaval, los guías son excelentes y las proyecciones visuales te transportan." 
        : "The immersive route exceeded all my expectations. I truly felt the magic of the carnival, the guides are excellent and the visual projections transport you.",
      rating: 5,
      avatar: "LG"
    },
    {
      name: "Carlos Mendoza",
      role: language === "es" ? "Visitante Local" : "Local Visitor",
      content: language === "es"
        ? "Una experiencia que todo colombiano debería vivir. La organización es impecable y aprendí mucho más sobre nuestras raíces caribeñas de una forma muy divertida."
        : "An experience every Colombian should live. The organization is impeccable and I learned so much more about our Caribbean roots in a very fun way.",
      rating: 5,
      avatar: "CM"
    },
    {
      name: "Sarah Jenkins",
      role: language === "es" ? "Turista Internacional" : "International Tourist",
      content: language === "es"
        ? "Amazing! A must-do if you visit Barranquilla. The whole team made us feel so welcome and the cultural deep-dive was fascinating."
        : "Amazing! A must-do if you visit Barranquilla. The whole team made us feel so welcome and the cultural deep-dive was fascinating.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-primary" />
            {language === "es" ? "Testimonios" : "Testimonials"}
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            {language === "es" ? "Lo que dicen nuestros visitantes" : "What our visitors say"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "es" 
              ? "Descubre por qué miles de personas han calificado nuestras experiencias con 5 estrellas." 
              : "Discover why thousands of people have rated our experiences with 5 stars."}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="h-full p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <Avatar>
                        <AvatarFallback className="bg-primary/20 text-primary font-bold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:flex justify-center mt-8 gap-4">
              <CarouselPrevious className="position-static transform-none mr-2" />
              <CarouselNext className="position-static transform-none" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
