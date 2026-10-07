const paths: Record<string, string> = {
  flame: "M12 2c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-8.5Z",
  lock: "M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5z",
  folder: "M3 6h6l2 2h10v11H3z",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7z",
  play: "M8 5v14l11-7z",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

export function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const filled = name === "play";
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill={filled ? "currentColor" : "none"} stroke={filled ? "none" : "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}
