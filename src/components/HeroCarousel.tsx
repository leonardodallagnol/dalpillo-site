"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/foto1.png", alt: "Metalúrgica Dalpillo - Roldanas" },
  { src: "/foto2.png", alt: "Metalúrgica Dalpillo - Dobradiças" },
  { src: "/foto3.png", alt: "Metalúrgica Dalpillo - Usinagem" },
  { src: "/foto4.png", alt: "Metalúrgica Dalpillo - Serralheria" },
  { src: "/foto5.png", alt: "Metalúrgica Dalpillo - Produtos" },
  { src: "/foto7.png", alt: "Metalúrgica Dalpillo - Produtos" },
  { src: "/foto8.png", alt: "Metalúrgica Dalpillo - Instalações" },
  { src: "/foto9.png", alt: "Metalúrgica Dalpillo - Fábrica" },
  { src: "/foto10.png", alt: "Metalúrgica Dalpillo - Equipamentos" },
  { src: "/foto11.png", alt: "Metalúrgica Dalpillo - Linha de Produção" },
  { src: "/foto12.png", alt: "Metalúrgica Dalpillo - Produtos" },
  { src: "/foto13.png", alt: "Metalúrgica Dalpillo - Instalações" },
  { src: "/foto15.png", alt: "Metalúrgica Dalpillo - Fábrica" },
  { src: "/foto16.png", alt: "Metalúrgica Dalpillo - Equipamentos" },
  { src: "/foto17.png", alt: "Metalúrgica Dalpillo - Linha de Produção" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-black/10 aspect-[4/3]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
        aria-label="Anterior"
      >
        <ChevronLeft size={18} className="text-gray-800" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
        aria-label="Próximo"
      >
        <ChevronRight size={18} className="text-gray-800" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-6 h-2 bg-[#F5C518]" : "w-2 h-2 bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
