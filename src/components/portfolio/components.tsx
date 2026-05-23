"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as: As = "div" as ElementType,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}) {
  const MotionComp = motion.create(As as any);
  return (
    <MotionComp
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionComp>
  );
}

export function ContactButton({ label = "Contact Me" }: { label?: string }) {
  return (
    <a
      href="mailto:snehakapilavayi07@gmail.com"
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      {label}
    </a>
  );
}

export function LiveProjectButton({ href = "#" }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors whitespace-nowrap"
    >
      Live Project
    </a>
  );
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  className,
  style,
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const within =
        e.clientX > r.left - padding &&
        e.clientX < r.right + padding &&
        e.clientY > r.top - padding &&
        e.clientY < r.bottom + padding;
      if (within) {
        setActive(true);
        setPos({ x: dx / strength, y: dy / strength });
      } else {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  return (
    <p ref={ref} className={className} style={{ ...style, position: "relative" }}>
      {chars.map((c, i) => (
        <Char key={i} char={c} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}

function Char({ char, index, total, progress }: any) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  );
}
