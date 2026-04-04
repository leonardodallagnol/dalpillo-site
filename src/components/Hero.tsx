import { Download, ShieldCheck, Clock, Trophy } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

const badges = [
  { icon: ShieldCheck, text: "Qualidade Garantida" },
  { icon: Clock, text: "+30 Anos de Mercado" },
  { icon: Trophy, text: "Referência Regional" },
];

const CATALOG_URL =
  "https://drive.google.com/file/d/1yLMhFW6dtq0-33yd6wCKziCUIfDKXpQd/view?usp=sharing";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Yellow accent glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F5C518]/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F5C518]/15 border border-[#F5C518]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
              <span className="text-[#B8860B] text-xs font-semibold tracking-widest uppercase">
                Metalúrgica Premium
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-8 text-gray-900">
              Acessórios para{" "}
              <span className="text-gradient">Serralheiros</span>
              <br />
              e serviços de{" "}
              <span className="relative inline-block">
                usinagem em geral
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 9C50 3 100 1 198 9"
                    stroke="#F5C518"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F5C518] hover:bg-[#D4A017] text-black font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#F5C518]/30 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Baixar Catálogo
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#F5C518] text-gray-700 hover:text-[#B8860B] font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200"
              >
                Conheça a Dalpillo
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-5">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <Icon size={16} className="text-[#D4A017]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="animate-scale-in delay-200">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60H1440V30C1200 60 960 0 720 30C480 60 240 0 0 30V60Z"
            fill="#F8F8F8"
          />
        </svg>
      </div>
    </section>
  );
}
