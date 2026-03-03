import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Serralheiro Autônomo",
    text: "Trabalho com a Dalpillo há 8 anos. Os produtos são de outro nível — roldanas que duram o dobro da concorrência e dobradiças que suportam qualquer carga. Nunca vou mudar de fornecedor.",
    stars: 5,
    initials: "CM",
  },
  {
    name: "Fernanda Costa",
    role: "Proprietária de Serralheria",
    text: "O atendimento técnico deles é diferenciado. Quando tenho uma dúvida, eles indicam exatamente o produto certo. Economizei muito dinheiro em retrabalho desde que comecei a comprar com a Dalpillo.",
    stars: 5,
    initials: "FC",
  },
  {
    name: "Roberto Alves",
    role: "Engenheiro Civil",
    text: "Usamos as ferragens da Dalpillo em vários projetos residenciais e comerciais. Qualidade consistente, entrega rápida e preço competitivo. Recomendo sem hesitar para qualquer obra.",
    stars: 5,
    initials: "RA",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F5C518] text-sm font-bold tracking-[0.25em] uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Quem usa <span className="text-gradient">recomenda</span>
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111111] rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-[#F5C518]/20 transition-colors card-hover"
            >
              {/* Quote icon */}
              <Quote
                size={48}
                className="absolute top-4 right-4 text-[#F5C518]/8 group-hover:text-[#F5C518]/15 transition-colors"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-[#F5C518] text-[#F5C518]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5C518]/15 border border-[#F5C518]/30 flex items-center justify-center">
                  <span className="text-[#F5C518] text-xs font-black">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
