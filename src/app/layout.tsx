import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Christiano Marinho Correia | Cirurgia Buco-Maxilo-Facial em Uberaba",
  description:
    "Site institucional do Dr. Christiano Marinho Correia, cirurgião bucomaxilofacial em Uberaba/MG. Atendimento especializado em cirurgia bucal e bucomaxilofacial.",
  keywords: [
    "cirurgião bucomaxilofacial Uberaba",
    "cirurgia bucal Uberaba",
    "extração de siso Uberaba",
    "bucomaxilo Uberaba",
    "Dr Christiano Marinho Correia",
  ],
  openGraph: {
    title: "Dr. Christiano Marinho Correia | Bucomaxilo em Uberaba",
    description:
      "Atendimento especializado em cirurgia bucal e bucomaxilofacial, com abordagem técnica, ética e humanizada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
