"use client";

import { useState } from "react";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
  showLabel?: boolean;
}

export function TechIcon({
  name,
  size = 18,
  className = "",
  showLabel = false,
}: TechIconProps) {
  const [error, setError] = useState(false);
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  const iconElement = error ? (
    <span
      style={{ width: size, height: size }}
      className={`inline-block rounded-full bg-zinc-300 shrink-0 ${className}`}
    />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/logos/tech/${slug}.svg`}
      alt={name}
      width={size}
      height={size}
      onError={() => setError(true)}
      className={`inline-block object-contain shrink-0 ${className}`}
      loading="lazy"
    />
  );

  if (!showLabel) {
    return iconElement;
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-800 bg-white px-2.5 py-1 rounded-lg border border-zinc-200/80 shadow-2xs hover:border-zinc-300 transition-colors">
      {iconElement}
      <span>{name}</span>
    </span>
  );
}
