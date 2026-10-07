import { useCallback, useEffect, useRef, useState } from "react";
import type { Thumb } from "@/lib/landing-config";

export function VideoCarousel({ items, size = "lg" }: { items: Thumb[]; eager?: boolean; size?: "lg" | "sm" }) {
  const ref = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touched, setTouched] = useState(false);
  const lock = useRef<number | null>(null);

  // Índice do card mais próximo do centro do carrossel
  const nearest = useCallback(() => {
    const root = ref.current;
    if (!root) return 0;
    const center = root.scrollLeft + root.clientWidth / 2;
    let best = 0, bestD = Infinity;
    cards.current.forEach((c, i) => {
      if (!c) return;
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  }, []);

  const goTo = (i: number) => {
    const root = ref.current;
    const card = cards.current[i];
    if (!root || !card) return;
    setCurrentIndex(i);
    if (lock.current) window.clearTimeout(lock.current);
    lock.current = window.setTimeout(() => { lock.current = null; }, 700);
    root.scrollTo({ left: card.offsetLeft + card.offsetWidth / 2 - root.clientWidth / 2, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!touched) setTouched(true);
    if (lock.current) return; // durante clique na seta, o índice já foi definido
    const n = nearest();
    if (n !== currentIndex) setCurrentIndex(n);
  };

  // Só o vídeo ativo toca, e só se o carrossel estiver na tela
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let onScreen = false;
    const sync = () => videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === currentIndex && onScreen) { v.preload = "auto"; v.play().catch(() => {}); } else v.pause();
    });
    const io = new IntersectionObserver((es) => { onScreen = !!es[0]?.isIntersecting; sync(); }, { threshold: 0.3 });
    io.observe(root);
    sync();
    return () => io.disconnect();
  }, [currentIndex]);

  if (items.length === 0) return <div className="carousel" aria-label="Sem vídeos por enquanto" />;

  const w = size === "lg" ? "w-[72vw] max-w-[300px]" : "w-[58vw] max-w-[230px]";

  return (
    <div className="relative">
      <div ref={ref} onScroll={onScroll} className="carousel">
        {items.map((t, i) => (
          <article key={i} data-i={i} ref={(el) => { cards.current[i] = el; }} className={`thumb-card ${w} ${i === currentIndex ? "is-active" : ""}`}>
            {t.video ? (
              <video
                ref={(el) => { videos.current[i] = el; }}
                src={t.video} poster={t.poster}
                muted playsInline loop autoPlay={i === 0} preload={i === 0 ? "auto" : "metadata"}
                disablePictureInPicture controls={false}
                className="thumb-media pointer-events-none"
              />
            ) : (
              <img src={t.poster} alt={t.title ?? "Prévia"} loading={i < 2 ? "eager" : "lazy"} decoding="async" className="thumb-media" />
            )}
            <div className="thumb-overlay" />
            {t.duration && <span className="thumb-duration">{t.duration}</span>}
            {t.title && <span className="absolute bottom-3 left-3 right-16 truncate text-sm font-semibold">{t.title}</span>}
          </article>
        ))}
      </div>
      <button aria-label="Anterior" onClick={() => goTo(Math.max(0, currentIndex - 1))} disabled={currentIndex === 0} className="carousel-arrow left-2 disabled:opacity-20">‹</button>
      <button aria-label="Próximo" onClick={() => goTo(Math.min(items.length - 1, currentIndex + 1))} disabled={currentIndex === items.length - 1} className="carousel-arrow right-2 disabled:opacity-20">›</button>
      <p className={`mt-3 text-center text-xs text-muted-foreground transition-opacity duration-500 ${touched ? "opacity-30" : "opacity-100"}`}>
        Deslize para ver mais →
      </p>
    </div>
  );
}
