"use client";

/**
 * MedHcareSwiss inline SVG logo.
 *
 * The mark is split into two colours:
 *   - Green (#3CAA35)  → cross / plus shape (left part)
 *   - Navy  (#05427B)  → stylised human figure overlapping the cross (right part)
 *
 * The wordmark "medhcareswiss" sits to the right in navy.
 *
 * Props
 * ------
 * size     – controls the icon height in px (wordmark scales proportionally)
 * inverted – when true renders everything in white (for hero / dark BG)
 */

interface LogoProps {
  size?: number;
  inverted?: boolean;
  className?: string;
}

export default function Logo({ size = 44, inverted = false, className = "" }: LogoProps) {
  const green  = inverted ? "#ffffff" : "#3CAA35";
  const navy   = inverted ? "#ffffff" : "#05427B";
  const text   = inverted ? "#ffffff" : "#05427B";

  // The icon viewBox is 60×60; scale everything off `size`
  const iconW = size;
  const iconH = size;

  // Font size for the wordmark — roughly 55 % of icon height feels balanced
  const fs = Math.round(size * 0.52);

  return (
    <span
      className={`inline-flex items-center gap-2 select-none ${className}`}
      aria-label="MedHcareSwiss"
    >
      {/* ── Icon mark ── */}
      <svg
        width={iconW}
        height={iconH}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Green cross / plus */}
        <rect x="20" y="4"  width="14" height="40" rx="3" fill={green} />
        <rect x="4"  y="20" width="40" height="14" rx="3" fill={green} />

        {/* Navy human figure — simple stylised silhouette */}
        {/* Head */}
        <circle cx="38" cy="14" r="7" fill={navy} />
        {/* Body */}
        <path
          d="M26 38 C26 28 50 28 50 38 L50 56 C50 57.1 49.1 58 48 58 L28 58 C26.9 58 26 57.1 26 56 Z"
          fill={navy}
        />
      </svg>

      {/* ── Wordmark ── */}
      <svg
        height={iconH}
        viewBox={`0 0 ${fs * 7.6} ${iconH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        <text
          x="0"
          y="50%"
          dominantBaseline="middle"
          fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
          fontSize={fs}
          fontWeight="700"
          letterSpacing="-0.5"
          fill={text}
        >
          medhcareswiss
        </text>
      </svg>
    </span>
  );
}
