import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, Trophy } from "lucide-react";

const badges = [
  { icon: ShieldCheck, text: "Qualidade Garantida" },
  { icon: Clock, text: "+20 Anos de Mercado" },
  { icon: Trophy, text: "Líder Regional" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,197,24,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,197,24,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#111111] via-[#111111]/90 to-[#1C1C1C]" />

      {/* Yellow accent glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F5C518]/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#F5C518]/8 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
              <span className="text-[#F5C518] text-xs font-semibold tracking-widest uppercase">
                Metalúrgica Premium
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Acessórios para{" "}
              <span className="text-gradient">Serralheiros</span>
              <br />
              e serviços de{" "}
              <span className="relative">
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
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#produtos"
                className="inline-flex items-center gap-2 bg-[#F5C518] hover:bg-[#D4A017] text-black font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#F5C518]/25 hover:-translate-y-0.5"
              >
                Ver Produtos
                <ArrowRight size={18} />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#F5C518]/50 text-white hover:text-[#F5C518] font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200"
              >
                Conheça a Dalpillo
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <Icon size={16} className="text-[#F5C518]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative animate-scale-in delay-200 hidden lg:block">
            {/* Main image placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="https://placehold.co/700x500/1C1C1C/F5C518?text=Metalúrgica+Dalpillo"
                alt="Produtos Metalúrgicos Dalpillo"
                width={700}
                height={500}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-6 top-1/4 bg-[#1C1C1C] border border-white/10 rounded-xl p-4 shadow-xl animate-fade-in-up delay-400">
              <p className="text-3xl font-black text-[#F5C518]">+5.000</p>
              <p className="text-xs text-gray-400 font-medium">
                Produtos em Estoque
              </p>
            </div>

            <div className="absolute -right-6 bottom-1/4 bg-[#1C1C1C] border border-white/10 rounded-xl p-4 shadow-xl animate-fade-in-up delay-500">
              <p className="text-3xl font-black text-[#F5C518]">98%</p>
              <p className="text-xs text-gray-400 font-medium">
                Clientes Satisfeitos
              </p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -z-10 top-6 right-6 w-full h-full rounded-2xl border border-[#F5C518]/10" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60H1440V30C1200 60 960 0 720 30C480 60 240 0 0 30V60Z"
            fill="#1C1C1C"
          />
        </svg>
      </div>
    </section>
  );
}
