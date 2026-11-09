type MeetlintProps = {
  numerals?: boolean;
  className?: string;
  label?: string;
};

export default function Meetlint({ numerals = true, className = "", label }: MeetlintProps) {
  const meters = numerals ? Array.from({ length: 64 }, (_, index) => index) : [];
  return (
    <div
      className={`meetlint ${numerals ? "h-7" : "h-[10px]"} ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="meetlint-move absolute inset-y-0 left-0 w-[3200px]">
        <div className={`meetlint-ticks absolute inset-0 ${numerals ? "" : "meetlint-ticks-short"}`} />
        {meters.map((meter) => (
          <span
            key={meter}
            className="absolute top-[13px] font-mono text-[9px] leading-none text-haag"
            style={{ left: meter * 50 + 4 }}
          >
            {meter}
          </span>
        ))}
      </div>
    </div>
  );
}
