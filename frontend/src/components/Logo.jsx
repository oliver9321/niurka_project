import React from "react";

// Stylized logomark inspired by the official Greentech logo:
// a gray "G" with a lime-green "R" inscribed inside the negative space.
export default function Logo({ className = "w-10 h-10", showWordmark = false }) {
  return (
    <div className={`flex items-center gap-2.5 ${showWordmark ? "" : ""}`}>
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Greentech logo"
      >
        {/* Gray G shape (left vertical + top bar + bottom-left foot) */}
        <path
          d="M6 6 H48 V20 H22 V44 H22 L14 56 H6 Z"
          fill="#7A7B81"
        />
        {/* Lime-green middle stripe (the R's horizontal arm) */}
        <path
          d="M24 24 L52 24 L46 34 L24 34 Z"
          fill="url(#gt-grad)"
        />
        {/* Lime-green R leg (diagonal) */}
        <path
          d="M34 36 L48 36 L40 56 L26 56 Z"
          fill="#A4D233"
        />
        <defs>
          <linearGradient id="gt-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A4D233" />
            <stop offset="100%" stopColor="#5BA734" />
          </linearGradient>
        </defs>
      </svg>
      {showWordmark && (
        <div className="leading-tight">
          <div className="font-display font-bold text-zinc-900 text-lg tracking-tight">
            Greentech
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 -mt-0.5">
            Building Solutions
          </div>
        </div>
      )}
    </div>
  );
}
