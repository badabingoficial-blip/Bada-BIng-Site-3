import { GROUP_URL } from "@/lib/landing-config";
import { Icon } from "./Icon";

export function CTAButton({ label = "Entrar no grupo VIP", className = "" }: { label?: string; className?: string }) {
  return (
    <a href={GROUP_URL} target="_blank" rel="noopener noreferrer" className={`btn-cta ${className}`}>
      {label}
      <Icon name="arrow" className="h-5 w-5" />
    </a>
  );
}
