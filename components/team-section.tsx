"use client"

import Image from "next/image"
import { Linkedin, Mail, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Luis Ronaldo Londoño Gomez",
    program: "Ingeniero de Sistemas",
    semester: "6vo Semestre",
    image: "/images/team-6.jpg",
    linkedin: "#",
    email: "luis.londono@universidad.edu.co"
  },
  {
    name: "Santiago Blanco Ribero",
    program: "Administración de Empresas",
    semester: "5to Semestre",
    image: "/images/team-2.jpg",
    linkedin: "#",
    email: "santiago.blanco@universidad.edu.co"
  },
  {
    name: "Edgar Regalado Melendez",
    program: "Ingeniero de Sistemas",
    semester: "6to Semestre",
    image: "/images/team-4.jpg",
    linkedin: "#",
    email: "edgar.regalado@universidad.edu.co"
  },
  {
    name: "Luz",
    program: "Ingeniería de Sistemas",
    semester: "9no Semestre",
    image: "/images/team-1.jpg",
    linkedin: "#",
    email: "juan.lopez@universidad.edu.co"
  }
]

export function TeamSection() {
  return (
    <section id="equipo" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm text-emerald-700 text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            Proyecto Universitario
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            Integrantes de la Asociación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Somos un equipo de estudiantes apasionados por la cultura colombiana,
            unidos por el objetivo de preservar y difundir nuestras tradiciones.
          </p>
        </div>

        {/* University Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-emerald-500/5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-foreground">Corporación Universitaria Americana</p>
              <p className="text-sm text-muted-foreground">Barranquilla, Colombia</p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg shadow-emerald-500/5 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 text-center flex flex-col items-center">
                {/* User Icon Placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-white shadow-inner flex items-center justify-center text-emerald-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground mb-3">
                  {member.name}
                </h3>
                <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {member.program}
                  </p>
                  <p className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {member.semester}
                  </p>
                </div>

                {/* Contact Action */}
                <div
                  style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(167, 243, 208, 0.5)' }}
                  className="w-full flex justify-center"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      Contactar
                    </a>
                  </Button>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-[80px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-emerald-500/5">
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground mb-1">Proyecto de Grado</p>
              <p className="font-[family-name:var(--font-display)] font-semibold text-foreground">
                Promoción Cultural y Turística
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground mb-1">Periodo Académico</p>
              <p className="font-[family-name:var(--font-display)] font-semibold text-foreground">
                2026-1
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground mb-1">Profesora</p>
              <p className="font-[family-name:var(--font-display)] font-semibold text-foreground">
                Dra. Oriana Cortés
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
