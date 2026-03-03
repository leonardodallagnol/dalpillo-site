"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-[#F5C518] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M11 2L3 7V15L11 20L19 15V7L11 2Z"
                    fill="#111111"
                    stroke="#111111"
                    strokeWidth="1"
                  />
                  <path
                    d="M11 5L6 8V14L11 17L16 14V8L11 5Z"
                    fill="#F5C518"
                    stroke="#111111"
                    strokeWidth="0.5"
                  />
                  <circle cx="11" cy="11" r="2.5" fill="#111111" />
                </svg>
              </div>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white">
                DALPILLO
              </span>
              <span className="block text-[10px] text-[#F5C518] font-semibold tracking-[0.2em] uppercase leading-none">
                Metalúrgica
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#F5C518] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5C518] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+5500000000000"
              className="hidden md:flex items-center gap-2 bg-[#F5C518] hover:bg-[#D4A017] text-black font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#F5C518]/20"
            >
              <Phone size={15} />
              Orçamento
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-3 text-gray-300 hover:text-[#F5C518] hover:bg-white/5 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5500000000000"
              className="mt-2 flex items-center justify-center gap-2 bg-[#F5C518] text-black font-bold py-3 rounded-lg"
            >
              <Phone size={16} />
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
