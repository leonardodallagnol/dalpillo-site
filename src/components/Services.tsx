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
    <section id="servicos" className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#B8860B] text-sm font-bold tracking-[0.25em] uppercase mb-3">
            O que Oferecemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Serviços feitos para{" "}
            <span className="text-gradient">quem produz</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Muito além de vender peças — somos o parceiro completo do profissional
            que trabalha com metal.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#F5C518]/50 card-hover shadow-sm"
              >
                <div className="w-12 h-12 bg-[#F5C518]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#F5C518]/25 transition-colors">
                  <Icon size={22} className="text-[#D4A017]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#B8860B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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
