"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const galleryImages = [
  {
    src: "/images/barranquilla-carnaval.jpg",
    alt: "Carnaval de Barranquilla",
    title: "Carnaval de Barranquilla",
    description: "La fiesta más grande de Colombia, Patrimonio de la Humanidad",
  },
  {
    src: "/images/barranquilla-food.jpg",
    alt: "Gastronomía Barranquillera",
    title: "Sabores del Caribe",
    description: "Mariscos frescos, arroz con coco y platos tradicionales",
  },
  {
    src: "/images/barranquilla-music.jpg",
    alt: "Música Colombiana",
    title: "Ritmos que Enamoran",
    description: "Cumbia, vallenato y champeta que mueven el alma",
  },
  {
    src: "/images/barranquilla-malecon.jpg",
    alt: "Malecón del Río",
    title: "Malecón del Río",
    description: "Atardeceres inolvidables junto al Río Magdalena",
  },
  {
    src: "/images/barranquilla-centro.jpg",
    alt: "Centro Histórico",
    title: "Centro Histórico",
    description: "Arquitectura colonial y tradición barranquillera",
  },
  {
    src: "/images/barranquilla-hero.jpg",
    alt: "Vista de Barranquilla",
    title: "La Puerta de Oro",
    description: "Ciudad vibrante y acogedora del Caribe colombiano",
  },
  {
    src: "/images/barranquilla-artesanias.jpg",
    alt: "Artesanías Colombianas",
    title: "Arte Popular",
    description: "Mochilas, sombreros vueltiaos y tradición artesanal",
  },
  {
    src: "/images/barranquilla-playa.jpg",
    alt: "Playas del Caribe",
    title: "Playas Paradisíacas",
    description: "Puerto Colombia y sus aguas cristalinas",
  },
  {
    src: "/images/barranquilla-danza.jpg",
    alt: "Danzas Tradicionales",
    title: "Danzas Folclóricas",
    description: "La elegancia de la cumbia y nuestras tradiciones",
  },
  {
    src: "/images/barranquilla-estadio.jpg",
    alt: "Estadio Metropolitano",
    title: "Pasión Deportiva",
    description: "El Metropolitano, casa del fútbol barranquillero",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    if (!isDragging) {
      setSelectedImage(index);
    }
  };
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () =>
    setSelectedImage((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : 0
    );
  const prevImage = () =>
    setSelectedImage((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : 0
    );

  const scrollCarousel = useCallback((direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === "left"
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (!isAutoPlaying || selectedImage !== null) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        if (carouselRef.current.scrollLeft >= maxScroll - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollCarousel("right");
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, selectedImage, scrollCarousel]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Track scroll position to update active indicator
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const scrollPosition = carouselRef.current.scrollLeft;
    const cardWidth = 384 + 24; // w-96 (384px) + gap-6 (24px)
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(newIndex, galleryImages.length - 1));
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section id="galeria" className="relative py-24 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Galería
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            <span className="text-balance">Momentos que </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              capturan el alma
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada imagen cuenta una historia de nuestra tierra, nuestra gente y nuestras tradiciones.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-lg border border-white/50 dark:border-white/10 text-foreground hover:bg-white/90 dark:bg-black/90 transition-all shadow-lg shadow-primary/5"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span className="text-sm font-medium">Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Reproducir</span>
                </>
              )}
            </button>
            <span className="text-sm text-muted-foreground ml-2">
              {galleryImages.length} fotos
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollCarousel("left")}
              className="p-3 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-lg border border-white/50 dark:border-white/10 text-foreground hover:bg-white/90 dark:bg-black/90 hover:scale-105 transition-all shadow-lg shadow-primary/5"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="p-3 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-lg border border-white/50 dark:border-white/10 text-foreground hover:bg-white/90 dark:bg-black/90 hover:scale-105 transition-all shadow-lg shadow-primary/5"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-8 pb-4 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative flex-shrink-0 w-72 sm:w-80 lg:w-96 aspect-[4/5] overflow-hidden rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                draggable={false}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm text-white/90 text-xs font-medium mb-3">
                    {String(index + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-semibold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Glass border effect */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 dark:border-white/10 group-hover:border-white/40 dark:border-white/10 transition-colors" />

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (carouselRef.current) {
                const cardWidth = 384 + 24; // w-96 + gap-6
                carouselRef.current.scrollTo({
                  left: index * cardWidth,
                  behavior: "smooth"
                });
                setActiveIndex(index);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                ? "w-8 bg-primary"
                : "w-2 bg-primary/30 hover:bg-primary/50"
              }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 text-white hover:bg-white/20 dark:bg-black/20 transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 p-4 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 text-white hover:bg-white/20 dark:bg-black/20 hover:scale-110 transition-all z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 p-4 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 text-white hover:bg-white/20 dark:bg-black/20 hover:scale-110 transition-all z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-6xl aspect-[16/10] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-3">
                  {String(selectedImage + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white mb-3">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/80 text-lg">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all ${index === selectedImage
                    ? "ring-2 ring-white scale-110"
                    : "opacity-50 hover:opacity-100"
                  }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
