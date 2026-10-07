import profile from "@/assets/media/profile.jpg";
import v1 from "@/assets/media/hero-video-01.mp4";
import v2 from "@/assets/media/hero-video-02.mp4";
import v3 from "@/assets/media/hero-video-03.mp4";
import v4 from "@/assets/media/hero-video-04.mp4";
import v5 from "@/assets/media/hero-video-05.mp4";
import v6 from "@/assets/media/hero-video-06.mp4";
import r1 from "@/assets/media/recent-video-01.mp4";
import r2 from "@/assets/media/recent-video-02.mp4";
import r3 from "@/assets/media/recent-video-03.mp4";
import r4 from "@/assets/media/recent-video-04.mp4";
import r5 from "@/assets/media/recent-video-05.mp4";
import r6 from "@/assets/media/recent-video-06.mp4";

/** Altere aqui o link do grupo */
export const GROUP_URL = "https://telegram.me/BadaBingOficialBot";

export const BRAND = "Bada Bing!";
export const PROFILE_PHOTO = profile;
export const STATUS_TEXT = "Somente +18 · Vagas limitadas";
export const HEADLINE = "O maior acervo confidencial do Telegram";
export const SUBHEADLINE = "Conteúdo inédito, atualizado todos os dias, em um grupo fechado e discreto.";

/**
 * video: URL do arquivo .mp4 (deixe vazio para mostrar só a capa)
 * poster: imagem de capa exibida antes do vídeo carregar
 */
export type Thumb = { video?: string; poster?: string; duration: string; title?: string };

/** Vídeos do primeiro carrossel (parte inicial) — na ordem de envio. */
export const initialVideos: Thumb[] = [
  { video: v1, duration: "" },
  { video: v2, duration: "" },
  { video: v3, duration: "" },
  { video: v4, duration: "" },
  { video: v5, duration: "" },
  { video: v6, duration: "" },
];

/** Vídeos de "Adicionados recentemente" — na ordem de envio. */
export const recentVideos: Thumb[] = [
  { video: r1, duration: "" },
  { video: r2, duration: "" },
  { video: r3, duration: "" },
  { video: r4, duration: "" },
  { video: r5, duration: "" },
  { video: r6, duration: "" },
];

export const HERO_THUMBS: Thumb[] = initialVideos;
export const MORE_THUMBS: Thumb[] = recentVideos;

export const BENEFITS = [
  { icon: "flame", title: "Atualizações diárias", text: "Conteúdo novo todos os dias." },
  { icon: "lock", title: "100% privado", text: "Acesso discreto e restrito." },
  { icon: "folder", title: "Tudo organizado", text: "Encontre rápido o que procura." },
  { icon: "bolt", title: "Acesso imediato", text: "Entrou, já está liberado." },
] as const;
