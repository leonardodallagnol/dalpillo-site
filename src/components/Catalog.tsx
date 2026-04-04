import { Download, FileText, ArrowRight } from "lucide-react";

const CATALOG_URL =
  "https://drive.google.com/file/d/1yLMhFW6dtq0-33yd6wCKziCUIfDKXpQd/view?usp=sharing";

export default function Catalog() {
  return (
    <section id="catalogo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#F5C518]/40 bg-[#FFFBEA]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F5C518]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#F5C518]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-8 sm:p-12 lg:p-16">
            {/* Icon */}
            <div className="shrink-0 flex flex-col items-center gap-4">
              <div className="w-28 h-28 sm:w-36 sm:h-36 bg-[#F5C518]/20 border border-[#F5C518]/40 rounded-2xl flex items-center justify-center">
                <FileText size={56} className="text-[#D4A017]" />
              </div>
              <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                PDF disponível
              </span>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-[#B8860B] text-sm font-bold tracking-[0.25em] uppercase mb-3">
                Catálogo Completo
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight text-gray-900">
                Tudo que oferecemos,{" "}
                <span className="text-gradient">em um arquivo</span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Nosso catálogo reúne toda a linha de acessórios para serralheiros,
                peças para pantográfica, dobradiças, roldanas e serviços de usinagem.
                Baixe gratuitamente e consulte quando precisar.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href={CATALOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#F5C518] hover:bg-[#D4A017] text-black font-black text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#F5C518]/30 hover:-translate-y-0.5"
                >
                  <Download size={20} />
                  Baixar Catálogo Grátis
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#F5C518] text-gray-700 hover:text-[#B8860B] font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
                >
                  Falar com especialista
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
