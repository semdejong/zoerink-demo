type PegProps = {
  className?: string;
  size?: "sm" | "md";
};

export default function Peg({ className = "", size = "md" }: PegProps) {
  const width = size === "sm" ? 12 : 16;
  const height = size === "sm" ? 28 : 40;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="0" width="10" height="6" fill="#B8E33C" />
      <rect x="4" y="6" width="8" height="24" fill="#6A3B10" />
      <polygon points="4,30 12,30 8,40" fill="#4A2808" />
    </svg>
  );
}
