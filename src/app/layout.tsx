import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Metalúrgica Dalpillo | Roldanas, Dobradiças e Ferragens",
  description:
    "Há mais de 20 anos fornecendo os melhores produtos metalúrgicos para serralheiros e construtores. Roldanas, dobradiças, ferragens e muito mais com qualidade e resistência garantidas.",
  keywords:
    "metalúrgica, roldana, dobradiça, serralheiro, ferragens, metalurgia, peças metálicas, dalpillo",
  openGraph: {
    title: "Metalúrgica Dalpillo",
    description: "Qualidade em metal para quem constrói o Brasil.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
