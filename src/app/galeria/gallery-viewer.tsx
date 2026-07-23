"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import type { Slide } from "yet-another-react-lightbox";
import { ChevronLeft, ChevronRight, Images, Maximize2, PlayCircle } from "lucide-react";
import type { GalleryCategory } from "../site-content";

type GalleryViewerProps = {
  categories: GalleryCategory[];
};

export function GalleryViewer({ categories }: GalleryViewerProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const activeCategory = categories[activeCategoryIndex];
  const activeImage = activeCategory.items[activeImageIndex];
  const activePreviewSrc = activeImage.type === "video" ? activeImage.poster : activeImage.src;
  const slides = useMemo<Slide[]>(
    () =>
      activeCategory.items.map((item) => {
        if (item.type === "video") {
          return {
            type: "video",
            poster: item.poster,
            title: item.title,
            description: item.description,
            width: 480,
            height: 848,
            sources: [{ src: item.src, type: "video/mp4" }],
          };
        }

        return {
          type: "image",
          src: item.src,
          alt: item.alt,
          title: item.title,
          description: item.description,
          width: 1600,
          height: 1600,
        };
      }),
    [activeCategory.items],
  );

  function selectCategory(index: number) {
    setActiveCategoryIndex(index);
    setActiveImageIndex(0);
  }

  function showPrevious() {
    setActiveImageIndex((current) => (current === 0 ? activeCategory.items.length - 1 : current - 1));
  }

  function showNext() {
    setActiveImageIndex((current) => (current === activeCategory.items.length - 1 ? 0 : current + 1));
  }

  const categoryTabs = categories.map((category, index) => {
    const isActive = index === activeCategoryIndex;

    return (
      <button
        key={category.id}
        type="button"
        onClick={() => selectCategory(index)}
        className={
          isActive
            ? "shrink-0 rounded-full bg-white px-4 py-2 text-xs font-black text-[#303030] shadow-lg"
            : "shrink-0 rounded-full border border-white/14 px-4 py-2 text-xs font-black text-white/72 transition hover:bg-white/8 hover:text-white"
        }
      >
        {category.label}
      </button>
    );
  });

  const thumbnailButtons = activeCategory.items.map((item, index) => {
    const isActive = index === activeImageIndex;
    const thumbnailSrc = item.type === "video" ? item.poster : item.src;

    return (
      <button
        key={item.src}
        type="button"
        onClick={() => setActiveImageIndex(index)}
        onDoubleClick={() => setIsLightboxOpen(true)}
        aria-label={`Abrir item ${index + 1}`}
        className={
          isActive
            ? "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-white bg-white shadow-lg sm:h-20 sm:w-20 lg:h-24 lg:w-24"
            : "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/12 bg-white/8 opacity-64 transition hover:opacity-100 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
        }
      >
        <Image
          src={thumbnailSrc}
          alt=""
          width={180}
          height={180}
          sizes="96px"
          className="h-full w-full object-cover"
        />
        {item.type === "video" ? (
          <span className="absolute inset-0 flex items-center justify-center bg-black/22 text-white">
            <PlayCircle size={24} />
          </span>
        ) : null}
      </button>
    );
  });

  return (
    <section className="container-page pb-16 md:pb-24">
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#171717] shadow-2xl sm:rounded-[2rem]">
        <div className="border-b border-white/10 p-3 sm:p-4">
          <div className="flex gap-2 overflow-x-auto pb-1">{categoryTabs}</div>

          <div className="mt-3 flex items-center justify-between gap-3 px-1 text-xs font-black uppercase tracking-[0.14em] text-white/54 lg:hidden">
            <span>{activeCategory.label}</span>
            <span>
              {activeImageIndex + 1} / {activeCategory.items.length}
            </span>
          </div>

          <div className="mt-2 overflow-x-auto pb-1 lg:hidden">
            <div className="flex min-w-max gap-2">{thumbnailButtons}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="relative bg-black">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Abrir galeria em tela cheia"
              className="relative block h-[54vh] min-h-[320px] w-full sm:min-h-[420px] lg:h-[68vh]"
            >
              <Image
                key={activePreviewSrc}
                src={activePreviewSrc}
                alt={activeImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) calc(100vw - 520px), 100vw"
                className="object-contain"
              />
              {activeImage.type === "video" ? (
                <span className="absolute inset-0 flex items-center justify-center bg-black/18 text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/58 px-5 py-3 text-sm font-black backdrop-blur">
                    Reproduzir vídeo <PlayCircle size={22} />
                  </span>
                </span>
              ) : null}
            </button>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Ver imagem anterior"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-[#303030] shadow-lg transition hover:scale-105 hover:bg-white sm:left-4 sm:h-11 sm:w-11"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Ver próxima imagem"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-[#303030] shadow-lg transition hover:scale-105 hover:bg-white sm:right-4 sm:h-11 sm:w-11"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-2xl bg-black/58 px-3 py-2 text-white backdrop-blur sm:inset-x-4 sm:bottom-4">
              <div className="min-w-0">
                <p className="hidden truncate text-xs font-black uppercase tracking-[0.14em] text-white/58 sm:block">
                  {activeCategory.label}
                </p>
                <p className="text-sm font-black">
                  {activeImageIndex + 1} / {activeCategory.items.length}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-black text-[#303030]">
                Abrir <Maximize2 size={14} />
              </span>
            </div>
          </div>

          <aside className="hidden border-l border-white/10 bg-[#f7f6f2] p-6 text-[#303030] lg:block">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#77736b]">{activeCategory.eyebrow}</p>
            <h2 className="mobile-safe-text mt-3 text-3xl font-black leading-[1.02] tracking-[-0.04em]">
              {activeCategory.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#625e57]">{activeCategory.description}</p>
            {activeImage.description ? (
              <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#77736b]">Legenda da foto</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#3f3d38]">{activeImage.description}</p>
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#303030] px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-black"
            >
              Abrir em tela cheia <Maximize2 size={16} />
            </button>

            <div className="mt-6 grid gap-2">
              {categories.map((category, index) => {
                const isActive = index === activeCategoryIndex;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => selectCategory(index)}
                    className={
                      isActive
                        ? "rounded-2xl bg-[#303030] px-4 py-3 text-left text-white shadow-lg"
                        : "rounded-2xl border border-black/10 bg-white px-4 py-3 text-left text-[#303030] transition hover:-translate-y-0.5 hover:border-black/20"
                    }
                  >
                    <span className="block text-xs font-black uppercase tracking-[0.14em] opacity-60">{category.label}</span>
                    <span className="mt-1 flex items-center gap-2 text-sm font-black">
                      <Images size={15} /> {category.items.length} itens
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>

        <div className="hidden border-t border-white/10 p-4 lg:block">
          <div className="overflow-x-auto pb-1">
            <div className="flex min-w-max gap-3">{thumbnailButtons}</div>
          </div>
        </div>
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={activeImageIndex}
        slides={slides}
        plugins={[Captions, Counter, Fullscreen, Thumbnails, Video, Zoom]}
        captions={{ descriptionMaxLines: 4, descriptionTextAlign: "center" }}
        video={{ controls: true, playsInline: true, preload: "metadata" }}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: false }}
        thumbnails={{
          position: "bottom",
          width: 88,
          height: 64,
          borderRadius: 10,
          imageFit: "cover",
        }}
        zoom={{
          maxZoomPixelRatio: 2.5,
          scrollToZoom: true,
        }}
        on={{ view: ({ index }) => setActiveImageIndex(index) }}
      />
    </section>
  );
}
