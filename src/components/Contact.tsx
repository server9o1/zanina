import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const EMAIL = "ahsanmohammed3343@gmail.com";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/aa_xsan/" },
  { name: "Discord", url: "https://discordapp.com/users/861277171137249302" },
];

function TypingText({ value, active }: { value: string; active: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!active) {
      setI(0);
      return;
    }
    if (i >= value.length) return;
    const t = setTimeout(() => setI(i + 1), 35);
    return () => clearTimeout(t);
  }, [i, value, active]);
  return (
    <span className="font-mono">
      {active ? value.slice(0, i) : value}
      {active && i < value.length && <span className="caret text-code-green">█</span>}
    </span>
  );
}

function SocialLink({ name, url }: { name: string; url: string }) {
  const [hover, setHover] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setWaiting(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setWaiting(false);
      if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
    }, 1500);
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex min-h-11 items-center justify-between rounded-full bg-card/60 border border-border px-5 py-3 font-mono text-sm hover:bg-accent hover:translate-x-1 transition-all overflow-hidden"
    >
      <span className="flex items-center gap-2">
        <span className="text-code-green">→</span>
        <TypingText value={waiting ? "wait for a sec te-he😜" : name} active={hover || waiting} />
      </span>
      <span className="text-muted-foreground">↗</span>
    </a>
  );
}

function EmailRow() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* noop */
    }
  };
  return (
    <div className="group mt-6 sm:mt-10 inline-flex max-w-full items-center gap-2 sm:gap-2.5 rounded-full bg-primary text-primary-foreground font-mono text-xs sm:text-[15px] pl-4 sm:pl-6 pr-2 sm:pr-3 py-2 sm:py-2.5">
      <a href={`mailto:${EMAIL}`} className="hover:opacity-90 transition break-all">
        {EMAIL} ↗
      </a>
      <button
        onClick={copy}
        aria-label="Copy email"
        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-background/20 hover:bg-background/30 text-primary-foreground px-3 py-1 text-[11px]"
      >
        {copied ? "copied ✓" : "copy"}
      </button>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative z-10 px-5 sm:px-6 py-20 sm:py-24 max-w-6xl mx-auto">
      <Reveal>
        <div className="glass-card rounded-3xl p-6 sm:p-14 grid md:grid-cols-2 gap-10 items-center max-w-xl md:max-w-none mx-auto">
          <div className="flex flex-col items-start sm:block">
            <p className="font-mono text-sm font-semibold mb-4">// get_in_touch</p>
            <EmailRow />
          </div>

          <div>
            <p className="font-mono text-sm font-semibold mb-4">// social_links</p>
            <div className="space-y-2">
              {socials.map((s) => (
                <SocialLink key={s.name} name={s.name} url={s.url} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
