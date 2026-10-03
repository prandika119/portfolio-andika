import React from "react";
import Link from "next/link";
import { AlertCircle, AlertTriangle, Info, Lightbulb } from "lucide-react";

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip" | "note";
  title?: string;
}

export function Callout({ children, type = "note", title }: CalloutProps) {
  const configs = {
    info: {
      border: "border-blue-200 bg-blue-50/60 text-blue-900",
      icon: Info,
      defaultTitle: "Information",
    },
    warning: {
      border: "border-amber-200 bg-amber-50/60 text-amber-900",
      icon: AlertTriangle,
      defaultTitle: "Caution",
    },
    tip: {
      border: "border-emerald-200 bg-emerald-50/60 text-emerald-900",
      icon: Lightbulb,
      defaultTitle: "Key Insight",
    },
    note: {
      border: "border-zinc-200 bg-zinc-100/70 text-zinc-800",
      icon: AlertCircle,
      defaultTitle: "Engineering Note",
    },
  };

  const config = configs[type] || configs.note;
  const Icon = config.icon;

  return (
    <div
      className={`my-6 p-4 rounded-xl border-l-4 border ${config.border} space-y-1 text-xs sm:text-sm leading-relaxed`}
    >
      <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider font-mono">
        <Icon size={15} />
        <span>{title || config.defaultTitle}</span>
      </div>
      <div className="pt-0.5">{children}</div>
    </div>
  );
}

export const mdxComponents = {
  Callout,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-8 mb-4"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 mt-10 mb-3 pt-6 border-t border-zinc-200"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 mt-6 mb-2"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-zinc-700 leading-relaxed my-4 text-sm sm:text-base" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 space-y-2 my-4 text-sm sm:text-base text-zinc-700 marker:text-zinc-400" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 space-y-2 my-4 text-sm sm:text-base text-zinc-700 marker:text-zinc-400" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 p-4 rounded-r-xl border-l-4 border-zinc-900 bg-zinc-100/70 text-zinc-800 italic text-sm sm:text-base leading-relaxed"
      {...props}
    />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 border border-zinc-200 rounded-xl">
      <table className="w-full text-left text-sm" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="p-3 bg-zinc-100 font-semibold text-zinc-900 border-b border-zinc-200" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="p-3 border-b border-zinc-100 text-zinc-700" {...props} />
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) {
      return (
        <Link
          href={href}
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors"
        {...props}
      >
        {children}
      </a>
    );
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200 bg-zinc-900 shadow-xs">
      <pre
        className="p-4 text-xs sm:text-sm font-mono leading-relaxed text-zinc-100 !bg-transparent !my-0 !border-0"
        {...props}
      />
    </div>
  ),
  hr: () => <hr className="my-8 border-zinc-200" />,
};
