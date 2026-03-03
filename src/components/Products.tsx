import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Roldanas",
    description:
      "Roldanas industriais e residenciais em nylon e diversas ligas metálicas. Ideal para portões, cancelas e sistemas de transporte. Alta capacidade de carga e baixo atrito.",
    image: "https://placehold.co/600x400/1C1C1C/F5C518?text=Roldanas",
    tag: "Mais Vendido",
    features: ["Nylon Reforçado", "Alta Carga", "Baixo Atrito"],
  },
  {
    title: "Dobradiças",
    description:
      "Linha completa de dobradiças para portas, janelas e estruturas metálicas. Resistência superior e acabamento preciso para qualquer aplicação.",
    image: "https://placehold.co/600x400/1C1C1C/F5C518?text=Dobradiças",
    tag: "Alta Durabilidade",
    features: ["Com Rolamento", "Alta Resistência", "Diversos Tamanhos"],
  },
  {
    title: "Peças para Pantográfica",
    description:
      "Peças e acessórios específicos para máquinas pantográficas. Componentes de precisão para garantir o melhor desempenho no corte e gravação de matrizes.",
    image: "https://placehold.co/600x400/1C1C1C/F5C518?text=Peças+Pantográfica",
    tag: "Especialidade",
    features: ["Alta Precisão", "Componentes Originais", "Pronta Entrega"],
  },
  {
    title: "Ferragens Gerais",
    description:
      "Amplo catálogo de ferragens para construção civil e indústria. Parafusos, porcas, arruelas, chumbadores e muito mais. Estoque permanente.",
    image: "https://placehold.co/600x400/1C1C1C/F5C518?text=Ferragens",
    tag: "Maior Variedade",
    features: ["Parafusaria", "Chumbadores", "Perfis Metálicos"],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F5C518] text-sm font-bold tracking-[0.25em] uppercase mb-3">
            Nosso Catálogo
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Produtos que <span className="text-gradient">sustentam obras</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Peças metalúrgicas de alta performance para serralheiros, construtores e
            indústria. Cada produto passa por rigoroso controle de qualidade.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((product, i) => (
            <div
              key={i}
              className="group relative bg-[#1C1C1C] rounded-2xl overflow-hidden border border-white/5 hover:border-[#F5C518]/30 card-hover"
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10 bg-[#F5C518] text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                {product.tag}
              </div>

              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2 group-hover:text-[#F5C518] transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-[#F5C518] font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Solicitar Orçamento
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4 text-sm">
            Não encontrou o que procura?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-[#F5C518]/30 hover:border-[#F5C518] text-[#F5C518] font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:bg-[#F5C518]/5"
          >
            Falar com especialista
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
