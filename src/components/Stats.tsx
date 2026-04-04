const stats = [
  { value: "+30", label: "Anos de Experiência", suffix: "" },
  { value: "5.000", label: "Produtos em Estoque", suffix: "+" },
  { value: "2.000", label: "Clientes Atendidos", suffix: "+" },
];

export default function Stats() {
  return (
    <section className="bg-[#F8F8F8] py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-6">
              <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
                {stat.value}
                <span className="text-[#D4A017]">{stat.suffix}</span>
              </div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
