import { createFileRoute } from "@tanstack/react-router";
import { Benefits, CTASection, FeatureSection, Footer, Hero, MoreCarousel, StickyCTA, TopBar } from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bada Bing! — Grupo Privado +18" },
      { name: "description", content: "Grupo privado e exclusivo para maiores de 18 anos. Conteúdo inédito todos os dias." },
      { property: "og:title", content: "Bada Bing! — Grupo Privado +18" },
      { property: "og:description", content: "Acesso restrito a conteúdo exclusivo, atualizado diariamente." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="page-bg min-h-screen overflow-x-hidden">
      <TopBar />
      <main>
        <Hero />
        <Benefits />
        <FeatureSection />
        <MoreCarousel />
        <CTASection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
