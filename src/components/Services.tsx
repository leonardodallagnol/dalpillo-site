import { Truck, Package, Wrench } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Fornecimento Industrial",
    description:
      "Atendemos pedidos em grande escala para construtoras e indústrias. Estoque garantido e prazos cumpridos.",
  },
  {
    icon: Wrench,
    title: "Suporte ao Serralheiro",
    description:
      "Somos o parceiro certo para o serralheiro profissional. Peças específicas, orientação técnica e variedade de itens.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description:
      "Logística eficiente para que seus projetos não parem. Enviamos para todo o Brasil com rastreamento em tempo real.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F5C518] text-sm font-bold tracking-[0.25em] uppercase mb-3">
            O que Oferecemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Serviços feitos para{" "}
            <span className="text-gradient">quem produz</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Muito além de vender peças — somos o parceiro completo do profissional
            que trabalha com metal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-[#1C1C1C] rounded-2xl p-6 border border-white/5 hover:border-[#F5C518]/20 card-hover"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#F5C518]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#F5C518]/20 transition-colors">
                  <Icon size={22} className="text-[#F5C518]" />
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-[#F5C518] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
