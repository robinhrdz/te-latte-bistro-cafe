export function Wave({ containerClass, fillClass }: { containerClass: string; fillClass: string }) {
  return (
    <div className={containerClass}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className={`w-full h-14 ${fillClass}`}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0,28 C180,56 360,0 540,28 C720,56 900,0 1080,28 C1260,56 1380,14 1440,28 L1440,56 L0,56 Z" />
      </svg>
    </div>
  );
}
