import React from "react";

/**
 * Official Greentech logo:
 * - Gray "G" shape (C-shaped bracket with horizontal bar at top)
 * - Diagonal green stripe forming the "R" arm (teal-to-lime gradient)
 * - Lime-green diagonal "R" leg
 */
export default function Logo({ className = "w-10 h-10", showWordmark = false }) {
  return (
    <div className={`flex items-center gap-2.5`}>
      <svg
        viewBox="0 0 80 80"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Greentech logo"
      >
        {/* Gray G - top horizontal bar */}
        <rect x="4" y="4" width="52" height="14" fill="#7A7B81" />
        {/* Gray G - left vertical column */}
        <rect x="4" y="4" width="14" height="72" fill="#7A7B81" />
        {/* Gray G - bottom horizontal shelf */}
        <rect x="4" y="62" width="30" height="14" fill="#7A7B81" />
        {/* Gray G - inner horizontal ledge (middle right) */}
        <rect x="18" y="18" width="20" height="12" fill="#7A7B81" />

        {/* Green diagonal stripe - R arm (teal to green gradient) */}
        <polygon
          points="22,32 56,32 50,44 22,44"
          fill="url(#gt-logo-grad)"
        />

        {/* Lime green diagonal - R leg */}
        <polygon
          points="34,46 52,46 44,72 26,72"
          fill="#8DB92E"
        />

        <defs>
          <linearGradient id="gt-logo-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1B9B7A" />
            <stop offset="100%" stopColor="#8DB92E" />
          </linearGradient>
        </defs>
      </svg>

      {showWordmark && (
        <div className="leading-tight">
          <div className="font-display font-bold text-lg tracking-tight">
            <span className="text-zinc-600">GREEN</span>
            <span className="text-brand-600">TECH</span>
          </div>
        </div>
      )}
    </div>
  );
}
