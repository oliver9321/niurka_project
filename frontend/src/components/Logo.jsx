import React from "react";
import logoSrc from "@/img/logoGreen.png";

export default function Logo({ className = "h-10", showWordmark = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logoSrc}
        alt="Greentech logo"
        className={`object-contain ${className}`}
      />
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
