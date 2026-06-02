import React, { useState } from "react";

/**
 * Brand logo card with multi-source fallback chain:
 *  1. simple-icons SVG (when `slug` is provided — official brand SVG)
 *  2. Google Favicon API (works for any domain)
 *  3. Styled brand name text fallback
 */
export default function BrandLogo({ name, domain, slug, className = "" }) {
  const sources = [];
  if (slug) {
    sources.push(`https://cdn.simpleicons.org/${slug}/52525B`);
  }
  if (domain) {
    sources.push(
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    );
  }

  const [idx, setIdx] = useState(0);
  const failedAll = idx >= sources.length;
  const currentSrc = !failedAll ? sources[idx] : null;

  return (
    <div
      className={`shrink-0 mx-3 sm:mx-4 md:mx-6 h-14 md:h-16 px-4 sm:px-5 md:px-7 rounded-2xl bg-white border border-zinc-200/80 grid place-items-center hover:border-brand-500 hover:shadow-sm transition-all min-w-[140px] sm:min-w-[160px] ${className}`}
      data-testid={`brand-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {failedAll ? (
        <span className="font-display font-bold text-zinc-700 text-sm sm:text-base md:text-lg whitespace-nowrap tracking-tight">
          {name}
        </span>
      ) : (
        <div className="flex items-center gap-2.5">
          <img
            src={currentSrc}
            alt={name}
            loading="lazy"
            onError={() => setIdx((i) => i + 1)}
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <span className="font-display font-semibold text-zinc-700 text-sm sm:text-base whitespace-nowrap tracking-tight">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}
