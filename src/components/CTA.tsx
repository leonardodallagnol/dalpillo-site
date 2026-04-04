import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-[#F8F8F8]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5C518]/15 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F5C518]/20 border border-[#F5C518]/40 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
          <span className="text-[#B8860B] text-xs font-semibold tracking-widest uppercase">
            Atendimento Rápido
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
          Pronto para elevar{" "}
          <span className="text-gradient">a qualidade</span>
          <br />
          dos seus projetos?
        </h2>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Fale com nossos especialistas agora. Receba um orçamento personalizado,
          tire suas dúvidas técnicas e descubra os melhores produtos para o seu
          trabalho.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="tel:+5554996361908"
            className="inline-flex items-center gap-3 bg-[#F5C518] hover:bg-[#D4A017] text-black font-black text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#F5C518]/30 hover:-translate-y-0.5"
          >
            <Phone size={20} />
            Ligar Agora
          </a>
          <a
            href="https://wa.me/5554996361908?text=Olá! Vim pelo site da Dalpillo e gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#25D366]/25 hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a
            href="https://drive.google.com/file/d/1yLMhFW6dtq0-33yd6wCKziCUIfDKXpQd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#F5C518] text-gray-700 hover:text-[#B8860B] font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
          >
            Baixar Catálogo
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
          <span>📍 R. Luís Gaviraghi, 1429 — Rio Branco, Caxias do Sul/RS</span>
          <span>🕐 Seg–Sex: 8h–18h | Sáb: 8h–12h</span>
          <span>📧 contato@dalpillo.com.br</span>
        </div>
      </div>
    </section>
  );
}
