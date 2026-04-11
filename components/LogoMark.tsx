export default function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      {/* Teal cluster – top-left arc */}
      <rect x="45" y="5"  width="7" height="20" rx="3.5" fill="#00a59c" transform="rotate(-30 48.5 15)" />
      <rect x="45" y="5"  width="7" height="20" rx="3.5" fill="#00a59c" transform="rotate(-10 48.5 15)" />
      <rect x="45" y="5"  width="7" height="20" rx="3.5" fill="#00a59c" transform="rotate(10  48.5 15)" />
      {/* Blue cluster – bottom-right arc */}
      <rect x="45" y="75" width="6" height="18" rx="3"   fill="#2374a6" transform="rotate(160 48 84)" />
      <rect x="45" y="75" width="6" height="18" rx="3"   fill="#2374a6" transform="rotate(180 48 84)" />
      <rect x="45" y="75" width="6" height="18" rx="3"   fill="#2374a6" transform="rotate(200 48 84)" />
      {/* Blue spokes – left side */}
      <rect x="8"  y="45" width="5" height="16" rx="2.5" fill="#2374a6" transform="rotate(270 16 53)" />
      <rect x="18" y="35" width="5" height="15" rx="2.5" fill="#2374a6" transform="rotate(240 20 42)" />
      {/* Teal spoke – right */}
      <rect x="72" y="45" width="5" height="16" rx="2.5" fill="#00a59c" transform="rotate(90  80 53)" />
    </svg>
  )
}
