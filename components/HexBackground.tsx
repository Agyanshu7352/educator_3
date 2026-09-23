import React from 'react';

export default function HexBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* Ambient gradient glows on left and right flanks */}
      <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] bg-emerald-400/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/3 w-[500px] h-[500px] bg-blue-500/[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Left side hexagon cluster - extended width */}
      <svg
        className="absolute -left-12 top-0 h-full w-[450px] lg:w-[580px] text-slate-200/80"
        viewBox="0 0 450 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hex-pattern-left-wide"
            width="64"
            height="110"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.9)"
          >
            <path
              d="M32 0L64 18V55L32 73L0 55V18L32 0Z M32 110L64 92V55L32 73L0 55V92L32 110Z"
              stroke="currentColor"
              strokeWidth="1.3"
              fill="none"
            />
          </pattern>
          <linearGradient
            id="fade-left-wide"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="45%" stopColor="white" stopOpacity="0.8" />
            <stop offset="85%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="mask-left-wide">
            <rect width="450" height="900" fill="url(#fade-left-wide)" />
          </mask>
        </defs>
        <rect
          width="450"
          height="900"
          fill="url(#hex-pattern-left-wide)"
          mask="url(#mask-left-wide)"
        />
      </svg>

      {/* Right side hexagon cluster - extended width */}
      <svg
        className="absolute -right-12 top-0 h-full w-[450px] lg:w-[580px] text-slate-200/80"
        viewBox="0 0 450 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hex-pattern-right-wide"
            width="64"
            height="110"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.9)"
          >
            <path
              d="M32 0L64 18V55L32 73L0 55V18L32 0Z M32 110L64 92V55L32 73L0 55V92L32 110Z"
              stroke="currentColor"
              strokeWidth="1.3"
              fill="none"
            />
          </pattern>
          <linearGradient
            id="fade-right-wide"
            x1="100%"
            y1="50%"
            x2="0%"
            y2="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="45%" stopColor="white" stopOpacity="0.8" />
            <stop offset="85%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="mask-right-wide">
            <rect width="450" height="900" fill="url(#fade-right-wide)" />
          </mask>
        </defs>
        <rect
          width="450"
          height="900"
          fill="url(#hex-pattern-right-wide)"
          mask="url(#mask-right-wide)"
        />
      </svg>
    </div>
  );
}
