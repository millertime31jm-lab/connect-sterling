"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imageRoot = "/images/sterling/golden ticket";

const events = [
  {
    title: "Spurs & Sparkles",
    caption: "Country elegance, local spirits, and vibrant evening connections.",
    images: ["spurs.and.sparkles.1.jpg", "spurs.and.sparkles.2.jpg", "spurs.and.sparkles.3.jpg"],
  },
  {
    title: "Wine & Wedges",
    caption: "Gourmet wine pairings, outdoor lawn games, and summer conversations.",
    images: ["wine.and.wedges.1.jpeg", "wine.and.wedges.2.jpg", "wine.and.wedges.3.jpg", "wine.and.wedges.4.jpg", "wine.and.wedges.5.jpg"],
  },
  {
    title: "Golden Hour",
    caption: "Sunset drinks, warm community atmospheres, and memorable local nights.",
    images: ["golden.hour.1.jpg", "golden.hour.2.jpg", "golden.hour.3.jpg"],
  },
  {
    title: "Willy Wonka Game Night",
    caption: "Immersive themed game nights, curated trivia, and interactive fun.",
    images: ["willy.wonka.game.night.1.jpg", "willy.wonka.game.night.2.jpg"],
  },
];

export default function EventGallery() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const gallery = activeEvent === null ? null : events[activeEvent];

  function openGallery(eventIndex: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActiveEvent(eventIndex);
    setActiveImage(0);
  }

  function closeGallery() {
    setActiveEvent(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  function showNext() {
    if (!gallery) return;
    setActiveImage((current) => (current + 1) % gallery.images.length);
  }

  function showPrevious() {
    if (!gallery) return;
    setActiveImage((current) => (current - 1 + gallery.images.length) % gallery.images.length);
  }

  useEffect(() => {
    if (activeEvent === null) return;

    const imageCount = events[activeEvent].images.length;
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveEvent(null);
        window.setTimeout(() => triggerRef.current?.focus(), 0);
      }
      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % imageCount);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((current) => (current - 1 + imageCount) % imageCount);
      }

      if (event.key === "Tab" && dialogRef.current) {
        const controls = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
          ),
        );
        if (!controls.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeEvent]);

  return (
    <>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {events.map((event, eventIndex) => (
          <button
            key={event.title}
            type="button"
            onClick={(clickEvent) => openGallery(eventIndex, clickEvent.currentTarget)}
            className="group overflow-hidden rounded-[2rem] bg-[#f7f1e4] text-left shadow-sm ring-1 ring-amber-900/10 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
            aria-label={`Open ${event.title} gallery, ${event.images.length} photos`}
          >
            <div className="relative h-80 overflow-hidden bg-stone-200">
              <Image
                src={`${imageRoot}/${event.images[0]}`}
                alt={`${event.title} Golden Ticket gathering`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/85 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                {event.images.length} Photos • Click to view gallery
              </span>
            </div>
            <span className="block p-7">
              <span className="block text-2xl font-bold">{event.title}</span>
              <span className="mt-3 block text-sm leading-6 text-slate-600">{event.caption}</span>
            </span>
          </button>
        ))}
      </div>

      {gallery ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-sm motion-safe:animate-[golden-ticket-fade_.2s_ease-out] sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            tabIndex={-1}
            className="relative flex h-full max-h-[56rem] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-[#081512] text-white shadow-2xl outline-none ring-1 ring-white/15"
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
              if (Math.abs(distance) > 50) {
                if (distance < 0) showNext();
                else showPrevious();
              }
              touchStartX.current = null;
            }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
              <div>
                <h3 id="gallery-title" className="text-lg font-bold sm:text-xl">{gallery.title}</h3>
                <p className="text-xs text-slate-400" aria-live="polite">Image {activeImage + 1} of {gallery.images.length}</p>
              </div>
              <button type="button" onClick={closeGallery} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-amber-300" aria-label="Close gallery">×</button>
            </div>

            <div className="relative min-h-0 flex-1 bg-black/30">
              <Image
                key={gallery.images[activeImage]}
                src={`${imageRoot}/${gallery.images[activeImage]}`}
                alt={`${gallery.title} photo ${activeImage + 1} of ${gallery.images.length}`}
                fill
                sizes="100vw"
                className="object-contain motion-safe:animate-[golden-ticket-fade_.2s_ease-out]"
                priority
              />
              <button type="button" onClick={showPrevious} className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/75 text-4xl leading-none text-white transition hover:bg-slate-950 focus-visible:outline-2 focus-visible:outline-amber-300 sm:left-5" aria-label="Previous image">‹</button>
              <button type="button" onClick={showNext} className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/75 text-4xl leading-none text-white transition hover:bg-slate-950 focus-visible:outline-2 focus-visible:outline-amber-300 sm:right-5" aria-label="Next image">›</button>
            </div>

            <div className="border-t border-white/10 px-4 py-3 text-center text-xs text-slate-400 sm:px-6">
              Use arrow keys or swipe to browse
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
