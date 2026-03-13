"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Instagram,
  Facebook,
  MessageCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Carrera 84 #51-25", "Barranquilla, Colombia"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+57 315 123 4567", "+57 5 358 1234"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@culturaquilla.com", "tours@culturaquilla.com"],
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lun - Sáb: 8:00 AM - 6:00 PM", "Dom: 9:00 AM - 3:00 PM"],
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Contáctanos
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            <span className="text-balance">¿Listo para tu </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              próxima aventura?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Escríbenos y te ayudaremos a planear una experiencia inolvidable en Barranquilla.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 hover:bg-white/80 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-accent">
              <h3 className="font-semibold text-primary-foreground mb-4">
                Síguenos en redes
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: MessageCircle, label: "WhatsApp" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-white/30 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl shadow-primary/5">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground mb-2">
                Reserva tu Tour
              </h3>
              <p className="text-muted-foreground mb-6">
                Completa el formulario y te contactaremos en menos de 24 horas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="rounded-xl bg-white/50 border-white/50 focus:border-primary focus:ring-primary/20 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="rounded-xl bg-white/50 border-white/50 focus:border-primary focus:ring-primary/20 h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      placeholder="+57 300 123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="rounded-xl bg-white/50 border-white/50 focus:border-primary focus:ring-primary/20 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tour de interés
                    </label>
                    <select
                      value={formData.tour}
                      onChange={(e) =>
                        setFormData({ ...formData, tour: e.target.value })
                      }
                      className="w-full h-12 rounded-xl bg-white/50 border border-white/50 px-4 text-foreground focus:border-primary focus:ring-primary/20 focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona un tour</option>
                      <option value="esencial">Tour Esencial</option>
                      <option value="completo">Experiencia Completa</option>
                      <option value="premium">Tour Premium</option>
                      <option value="personalizado">Tour Personalizado</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos sobre tu viaje, fechas, número de personas..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="rounded-xl bg-white/50 border-white/50 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-xl py-6 text-base font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitud
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3889774823756!2d-74.8254!3d10.9878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d3c797c53ad%3A0x1c4c2b4c00c87d6b!2sCarrera%2084%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del Centro Cultural"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
