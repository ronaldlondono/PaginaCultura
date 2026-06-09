"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n-context";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: t("nav_home") },
    { href: "#nosotros", label: t("nav_about") },
    { href: "#galeria", label: t("nav_gallery") },
    { href: "#tours", label: t("nav_tours") },
    { href: "#equipo", label: t("nav_team") },
    { href: "#contacto", label: t("nav_contact") },
  ];
  
  const whatsappUrl = "https://wa.me/573000000000?text=Hola,%20me%20gustaría%20información%20sobre%20la%20preventa%20de%20boletas%20para%20rutas%20inmersivas.";

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

          {/* CTA Button and Toggles */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-lg border border-white/30 dark:border-white/10 text-foreground/80 hover:text-primary hover:bg-white/80 dark:hover:bg-white/10 transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
              <button
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-lg border border-white/30 dark:border-white/10 text-foreground/80 hover:text-primary hover:bg-white/80 dark:hover:bg-white/10 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-full px-6 py-2 text-sm font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              {t("cta_reserve")}
            </Link>
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
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-xl transition-all font-medium border border-border"
              >
                {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                Tema
              </button>
              <button
                onClick={() => {
                  setLanguage(language === "es" ? "en" : "es");
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-xl transition-all font-medium border border-border"
              >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
              </button>
            </div>
            <Link 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex justify-center py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-medium"
            >
              {t("cta_reserve")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
