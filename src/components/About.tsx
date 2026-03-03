import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Controle de qualidade em cada produto",
  "Estoque permanente para entrega imediata",
  "Atendimento técnico especializado",
  "Preços justos sem abrir mão da qualidade",
  "Variedade de materiais e acabamentos",
  "Parceria de longo prazo com nossos clientes",
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://placehold.co/700x550/111111/F5C518?text=Nossa+Fábrica"
                alt="Fábrica Metalúrgica Dalpillo"
                width={700}
                height={550}
                className="w-full object-cover"
              />
            </div>

            {/* Decorative accent image */}
            <div className="absolute -bottom-6 -right-6 w-48 h-36 rounded-xl overflow-hidden border-2 border-[#F5C518]/40 shadow-xl hidden md:block">
              <Image
                src="https://placehold.co/300x230/1C1C1C/F5C518?text=Qualidade"
                alt="Controle de Qualidade"
                width={300}
                height={230}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Yellow accent bar */}
            <div className="absolute top-8 -left-3 w-1.5 h-32 bg-[#F5C518] rounded-full hidden md:block" />
          </div>

          {/* Text Side */}
          <div>
            <p className="text-[#F5C518] text-sm font-bold tracking-[0.25em] uppercase mb-3">
              Sobre a Dalpillo
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Mais de 20 anos{" "}
              <span className="text-gradient">forjando confiança</span>
            </h2>
            <div className="section-divider mb-6" />

            <p className="text-gray-400 leading-relaxed mb-4 text-base">
              A Metalúrgica Dalpillo nasceu da paixão por metais e da vontade de
              fornecer produtos que realmente entregam o que prometem. Com décadas de
              experiência no setor, somos referência em qualidade metalúrgica para
              serralheiros, construtoras e indústrias.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-base">
              Nossa linha de produtos abrange desde <strong className="text-white">roldanas de precisão</strong>{" "}
              até <strong className="text-white">dobradiças de alta carga</strong>, com matéria-prima
              selecionada e processos certificados. Porque quem trabalha com metal sabe:
              qualidade não é detalhe, é fundamento.
            </p>

            {/* Values List */}
            <ul className="grid sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#F5C518] shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-gray-300">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
