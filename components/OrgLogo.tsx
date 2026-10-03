"use client";

import { useState } from "react";

interface OrgLogoProps {
  name: string;
  logo?: string;
  size?: number;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .replace(/^(PT|CV|UD|Fa)\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export function OrgLogo({
  name,
  logo,
  size,
  className = "",
}: OrgLogoProps) {
  const [error, setError] = useState(false);
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const src =
    logo ||
    (slug.includes("gadjahmada") || slug === "ugm"
      ? "/logos/orgs/ugm.svg"
      : `/logos/orgs/${slug}.svg`);

  const sizeStyle = size ? { width: size, height: size } : undefined;
  const defaultSizeClass =
    !size && !className.includes("w-") && !className.includes("h-")
      ? "w-9 h-9"
      : "";

  if (error) {
    return (
      <div
        style={sizeStyle}
        className={`relative shrink-0 flex items-center justify-center rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 font-mono font-bold text-xs select-none shadow-2xs ${defaultSizeClass} ${className}`}
        title={name}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div
      style={sizeStyle}
      className={`relative shrink-0 flex items-center justify-center rounded-xl bg-white border border-zinc-200/80 shadow-2xs overflow-hidden p-1 ${defaultSizeClass} ${className}`}
      title={name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        onError={() => setError(true)}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}
