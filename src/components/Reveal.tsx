import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "center";

/**
 * Reveal + optional typing effect when scrolled into view.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  typing = false,
  speed = 18,
  from = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  typing?: boolean;
  speed?: number;
  from?: Direction;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            el.classList.add("in");
            setVisible(true);
          }, delay);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!typing || !visible) return;
    const el = ref.current;
    if (!el) return;
    // Collect all text nodes inside this reveal
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes: { node: Text; full: string }[] = [];
    let n: Node | null = walker.nextNode();
    while (n) {
      const t = n as Text;
      const full = t.nodeValue ?? "";
      if (full.trim().length > 0) {
        nodes.push({ node: t, full });
        t.nodeValue = "";
      }
      n = walker.nextNode();
    }
    let cancelled = false;
    let i = 0;
    const tick = (idx: number, pos: number) => {
      if (cancelled || idx >= nodes.length) return;
      const { node, full } = nodes[idx];
      if (pos > full.length) {
        tick(idx + 1, 0);
        return;
      }
      node.nodeValue = full.slice(0, pos);
      setTimeout(() => tick(idx, pos + 1), speed);
    };
    tick(0, 0);
    void i;
    return () => {
      cancelled = true;
      // restore in case unmount mid-typing
      nodes.forEach(({ node, full }) => (node.nodeValue = full));
    };
  }, [typing, visible, speed]);

  return (
    <div ref={ref} className={`reveal reveal-${from} ${className}`}>
      {children}
    </div>
  );
}
