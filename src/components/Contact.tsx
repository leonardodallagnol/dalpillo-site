"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#B8860B] text-sm font-bold tracking-[0.25em] uppercase mb-3">
            Fale Conosco
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Entre em <span className="text-gradient">contato</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Solicite um orçamento, tire dúvidas ou conheça nossa linha de produtos. Responderemos rapidamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
            {[
              {
                icon: Phone,
                label: "Telefone / WhatsApp",
                value: "(54) 99636-1908",
              },
              {
                icon: Mail,
                label: "E-mail",
                value: "contato@dalpillo.com.br",
              },
              {
                icon: MapPin,
                label: "Endereço",
                value: "R. Luís Gaviraghi, 1429 — Rio Branco, Caxias do Sul/RS, 95097-520",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5C518]/15 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#D4A017]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-gray-800 font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F5C518]/20 flex items-center justify-center">
                  <Send size={28} className="text-[#D4A017]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mensagem enviada!</h3>
                <p className="text-gray-500">Entraremos em contato em breve. Obrigado!</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="mt-2 text-sm text-[#D4A017] font-semibold underline underline-offset-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700" htmlFor="name">
                      Nome *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700" htmlFor="phone">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(XX) XXXXX-XXXX"
                      className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700" htmlFor="email">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700" htmlFor="message">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descreva sua necessidade, produto de interesse ou dúvida..."
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#F5C518] focus:ring-2 focus:ring-[#F5C518]/20 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#F5C518] hover:bg-[#D4A017] text-black font-bold py-3.5 rounded-xl transition-colors text-sm"
                >
                  <Send size={16} />
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
