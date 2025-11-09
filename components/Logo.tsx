import React from "react";

export function Logo({ size = 96 }: { size?: number }) {
  const s = size;
  return (
    <svg
      className="logoWrap"
      width={s}
      height={s}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="postulinkLogoTitle postulinkLogoDesc"
    >
      <title id="postulinkLogoTitle">PostuLink</title>
      <desc id="postulinkLogoDesc">
        Deux maillons entrelac?s symbolisant le lien candidature-emploi, avec une coche de compatibilit?.
      </desc>
      <defs>
        <linearGradient id="pl-gradient" x1="16" y1="16" x2="112" y2="112" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#22C55E" />
        </linearGradient>
      </defs>

      {/* Interlocked links */}
      <g stroke="url(#pl-gradient)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <path d="M42 78 L64 56 c8-8 21-8 29 0s8 21 0 29l-12 12" />
        <path d="M86 50 L64 72 c-8 8-21 8-29 0s-8-21 0-29l12-12" />
      </g>

      {/* Compatibility check */}
      <path
        d="M50 84 l8 8 20-20"
        stroke="#16A34A"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Logo;
