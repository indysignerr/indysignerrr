import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalShellProps {
  title: string;
  updated?: string;
  children: React.ReactNode;
}

export function LegalShell({ title, updated, children }: LegalShellProps) {
  return (
    <article className="relative">
      <div aria-hidden className="mesh-ocean absolute inset-x-0 top-0 h-[320px] opacity-70" />
      <div className="relative mx-auto max-w-[720px] px-6 md:px-8 pt-24 pb-32 md:pt-32 md:pb-48">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ocean-blue transition-colors hover:text-ocean-deep"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour accueil
        </Link>

        <header className="mt-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
            {title}
          </h1>
          {updated && (
            <p className="mt-4 text-sm text-muted">{updated}</p>
          )}
        </header>

        <div className="prose-legal mt-14 space-y-6 text-base leading-relaxed text-ink-soft">
          {children}
        </div>
      </div>
    </article>
  );
}
