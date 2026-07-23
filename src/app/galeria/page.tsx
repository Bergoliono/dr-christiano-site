import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MessageCircle } from "lucide-react";
import { GalleryViewer } from "./gallery-viewer";
import { galleryCategories } from "../site-content";

const WHATSAPP_URL = "https://wa.me/5534991054002";

export const metadata = {
  title: "Galeria | Dr. Christiano Marinho Correia",
  description:
    "Acervo visual autorizado do consultório do Dr. Christiano Marinho Correia, com registros de ambiente, pacientes, bastidores e procedimentos.",
};

export default function GalleryPage() {
  const totalImages = galleryCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <main className="min-h-screen bg-[#303030] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#303030]/92 backdrop-blur-xl">
        <div className="container-page flex items-center justify-between gap-4 py-5">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-black text-white/82 transition hover:text-white">
            <ChevronLeft size={18} />
            Voltar ao site
          </Link>
          <a
            href={WHATSAPP_URL}
            data-analytics-event="click_whatsapp"
            data-analytics-label="gallery_header"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#303030] transition hover:-translate-y-0.5"
          >
            Agendar <MessageCircle size={16} />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <Image
          src="/images/marinho/gallery/marinho-58.webp"
          alt="Recepção e identidade visual do consultório"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-38"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#303030]/74 via-[#303030]/92 to-[#303030]" />
        <div className="container-page relative py-10 md:py-14">
          <p className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#303030]">
            Acervo autorizado
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h1 className="mobile-safe-text max-w-4xl text-4xl font-black leading-[1] tracking-[-0.05em] md:text-6xl">
              Galeria clínica em formato de acervo visual.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/72 lg:justify-self-end">
              {totalImages} registros organizados por categoria, com navegação por foto em destaque e miniaturas horizontais.
            </p>
          </div>
        </div>
      </section>

      <GalleryViewer categories={galleryCategories} />
    </main>
  );
}
