"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#galeria", label: "Galería" },
    { href: "#tours", label: "Tours" },
    { href: "#equipo", label: "Equipo" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-white/20"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
                <span className="text-primary-foreground font-serif font-bold text-xl">B</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent/80 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground tracking-tight">
                Magic Culture
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Centro Cultural</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-white/50 backdrop-blur-lg rounded-full px-2 py-2 border border-white/30 shadow-lg shadow-primary/5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-full px-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              Reservar Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/30 text-foreground hover:bg-white/70 transition-all"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${isMobileMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="mx-4 mt-2 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl shadow-primary/10">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-xl transition-all font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl">
              Reservar Tour
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
