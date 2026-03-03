import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const productLinks = [
  "Roldanas",
  "Dobradiças",
  "Ferragens",
  "Kit Serralheiro",
  "Perfis Metálicos",
  "Parafusaria",
];

const companyLinks = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Depoimentos", href: "#" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 mb-5 w-fit">
              <div className="w-9 h-9 bg-[#F5C518] rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2L3 7V15L11 20L19 15V7L11 2Z" fill="#111111" />
                  <path d="M11 5L6 8V14L11 17L16 14V8L11 5Z" fill="#F5C518" />
                  <circle cx="11" cy="11" r="2.5" fill="#111111" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-black text-white">DALPILLO</span>
                <span className="block text-[9px] text-[#F5C518] font-bold tracking-[0.2em] uppercase leading-none">
                  Metalúrgica
                </span>
              </div>
            </a>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Qualidade em metal para quem constrói o Brasil. Mais de 20 anos
              fornecendo produtos metalúrgicos de excelência.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F5C518]/10 border border-white/5 hover:border-[#F5C518]/30 flex items-center justify-center text-gray-400 hover:text-[#F5C518] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F5C518]/10 border border-white/5 hover:border-[#F5C518]/30 flex items-center justify-center text-gray-400 hover:text-[#F5C518] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm tracking-wide uppercase text-gray-300 mb-4">
              Produtos
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#produtos"
                    className="text-sm text-gray-500 hover:text-[#F5C518] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm tracking-wide uppercase text-gray-300 mb-4">
              Empresa
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#F5C518] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm tracking-wide uppercase text-gray-300 mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F5C518] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-500">
                  Rua das Ferragens, 123
                  <br />
                  Centro — CEP 00000-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F5C518] shrink-0" />
                <a
                  href="tel:+5500000000000"
                  className="text-sm text-gray-500 hover:text-[#F5C518] transition-colors"
                >
                  (00) 0000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F5C518] shrink-0" />
                <a
                  href="mailto:contato@dalpillo.com.br"
                  className="text-sm text-gray-500 hover:text-[#F5C518] transition-colors"
                >
                  contato@dalpillo.com.br
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-white/3 border border-white/8 rounded-lg">
              <p className="text-xs text-gray-400 font-semibold mb-1">
                Horário de Funcionamento
              </p>
              <p className="text-xs text-gray-500">Seg – Sex: 8h às 18h</p>
              <p className="text-xs text-gray-500">Sáb: 8h às 12h</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Metalúrgica Dalpillo. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
