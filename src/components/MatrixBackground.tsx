/**
 * Subtle gray/black animated background — soft moving radial gradients,
 * no terminal characters, no matrix rain.
 */
export function MatrixBackground() {
  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />
      <div className="bg-orb bg-orb-c" />
      <div className="bg-noise" />
    </div>
  );
}
