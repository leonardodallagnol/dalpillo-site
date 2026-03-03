import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contato"
      className="py-24 relative overflow-hidden bg-[#111111]"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,197,24,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,197,24,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/90 via-transparent to-[#111111]/90 z-0" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5C518]/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
          <span className="text-[#F5C518] text-xs font-semibold tracking-widest uppercase">
            Atendimento Rápido
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Pronto para elevar{" "}
          <span className="text-gradient">a qualidade</span>
          <br />
          dos seus projetos?
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Fale com nossos especialistas agora. Receba um orçamento personalizado,
          tire suas dúvidas técnicas e descubra os melhores produtos para o seu
          trabalho.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="tel:+5500000000000"
            className="inline-flex items-center gap-3 bg-[#F5C518] hover:bg-[#D4A017] text-black font-black text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-[#F5C518]/30 hover:-translate-y-0.5"
          >
            <Phone size={20} />
            Ligar Agora
          </a>
          <a
            href="https://wa.me/5500000000000?text=Olá! Vim pelo site da Dalpillo e gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-[#25D366]/25 hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#F5C518]/50 text-white hover:text-[#F5C518] font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
          >
            Ver Catálogo
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Contact info strip */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
          <span>📍 Rua das Ferragens, 123 — Centro</span>
          <span>🕐 Seg–Sex: 8h–18h | Sáb: 8h–12h</span>
          <span>📧 contato@dalpillo.com.br</span>
        </div>
      </div>
    </section>
  );
}
