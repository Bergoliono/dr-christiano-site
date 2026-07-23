import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { AnalyticsEvents } from "./analytics-events";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marinhoctbmf.com.br"),
  title: "Site oficial | Dr. Christiano Marinho Correia | Buco-Maxilo-Facial em Uberaba",
  description:
    "Site institucional do Dr. Christiano Marinho Correia, cirurgião-dentista especialista em Cirurgia e Traumatologia Buco-Maxilo-Facial e Estomatologia em Uberaba/MG.",
  keywords: [
    "cirurgião bucomaxilofacial Uberaba",
    "cirurgia bucal Uberaba",
    "extração de siso Uberaba",
    "bucomaxilo Uberaba",
    "estomatologia Uberaba",
    "Dr Christiano Marinho Correia",
  ],
  openGraph: {
    title: "Site oficial | Dr. Christiano Marinho Correia | Bucomaxilo em Uberaba",
    description:
      "Cirurgia e Traumatologia Buco-Maxilo-Facial, Estomatologia e atendimento com experiência clínica, acadêmica e hospitalar.",
    url: "https://marinhoctbmf.com.br",
    siteName: "Dr. Christiano Marinho Correia",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "https://marinhoctbmf.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
        <AnalyticsEvents />
      </body>
    </html>
  );
}
