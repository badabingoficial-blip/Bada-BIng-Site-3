import { BENEFITS, BRAND, HERO_THUMBS, MORE_THUMBS, PROFILE_PHOTO, STATUS_TEXT, SUBHEADLINE } from "@/lib/landing-config";
import { CTAButton } from "./CTAButton";
import { Icon } from "./Icon";
import { VideoCarousel } from "./VideoCarousel";

export function TopBar() {
  return null;
}

export function ProfileBlock() {
  return (
    <div className="mx-auto flex w-fit items-center gap-3.5 text-left">
      <img src={PROFILE_PHOTO} alt={`Foto do grupo ${BRAND}`} width={64} height={64} fetchPriority="high" decoding="async" className="profile-photo" />
      <div className="min-w-0">
        <p className="text-xl font-extrabold leading-tight text-foreground">{BRAND}</p>
        <p className="mt-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="live-dot" /> {STATUS_TEXT}
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-7 pb-8 sm:pt-12">
      <div className="container-lp text-center fade-up">
        <ProfileBlock />
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(1.6rem,7.4vw,3.6rem)] leading-[1.05]">
          O maior acervo <span className="text-gradient">confidencial</span> do Telegram 🔥
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">{SUBHEADLINE}</p>
        <CTAButton className="mt-6 w-full sm:w-auto" />
      </div>
      <div className="mt-8 fade-up [animation-delay:120ms]">
        <VideoCarousel items={HERO_THUMBS} />
      </div>
    </section>
  );
}

export function BenefitCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="card-lp flex items-start gap-4 p-4 sm:flex-col">
      <span className="icon-chip"><Icon name={icon} /></span>
      <div className="min-w-0">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

export function Benefits() {
  return (
    <section className="container-lp py-12">
      <h2 className="text-center font-display text-2xl sm:text-3xl">Por que entrar?</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-4">
        {BENEFITS.map((b) => <BenefitCard key={b.title} {...b} />)}
      </div>
    </section>
  );
}

export function FeatureSection() {
  return (
    <section className="container-lp py-6">
      <div className="feature-card p-7 text-center sm:p-12">
        <span className="icon-chip mx-auto"><Icon name="lock" /></span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">Só entra quem é <span className="text-gradient">convidado</span>.</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">Nada aqui é público. O acesso é liberado por link e pode fechar a qualquer momento.</p>
        <CTAButton label="Garantir meu acesso" className="mt-6 w-full sm:w-auto" />
      </div>
    </section>
  );
}

export function MoreCarousel() {
  return (
    <section className="py-12">
      <h2 className="container-lp mb-5 font-display text-2xl sm:text-3xl">Adicionados recentemente</h2>
      <VideoCarousel items={MORE_THUMBS} size="sm" />
    </section>
  );
}

export function CTASection() {
  return (
    <section className="container-lp pb-16 pt-4 text-center">
      <h2 className="font-display text-3xl sm:text-5xl">Pronto para ver <span className="text-gradient">tudo</span>?</h2>
      <p className="mx-auto mt-3 max-w-sm text-muted-foreground">Um clique e você está dentro. Sem complicação.</p>
      <CTAButton label="Entrar agora" className="mt-7 w-full sm:w-auto" />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8 pb-28 text-center text-xs text-muted-foreground sm:pb-8">
      <div className="container-lp space-y-3">
        <p>Conteúdo destinado exclusivamente a maiores de 18 anos.</p>
        <nav className="flex justify-center gap-4">
          <a href="#" className="hover:text-foreground">Termos</a>
        </nav>
        <p>© {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export function StickyCTA() {
  return (
    <div className="sticky-cta sm:hidden">
      <CTAButton label="Entrar no grupo agora" className="w-full" />
    </div>
  );
}
