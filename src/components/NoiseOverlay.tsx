export function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[10010] opacity-[0.03]"
      style={{
        backgroundImage: 'url("/images/noise.gif")',
        backgroundSize: "200px",
        backgroundRepeat: "repeat",
      }}
      aria-hidden="true"
    />
  );
}
