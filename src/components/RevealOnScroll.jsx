import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({
  children,
  variant = "line",        // "line" | "fade" | "type"
  delay = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — skip observation, reveal immediately
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  /* ---------- Variant styles ---------- */
  const baseStyle = {
    transitionProperty: "opacity, transform",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDuration: "600ms",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  };

  const variants = {
    line: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(-14px)",
    },
    fade: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
    },
    type: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(6px)",
      filter: visible ? "blur(0)" : "blur(4px)",
    },
  };

  return (
    <div
      ref={ref}
      style={{ ...baseStyle, ...variants[variant] }}
      className="relative"
    >
      {/* Leading prompt — appears on reveal for "line" variant */}
      {variant === "line" && (
        <span
          aria-hidden="true"
          className="absolute -left-4 top-0 font-mono select-none pointer-events-none transition-opacity duration-500"
          style={{
            color: "#4ade80",
            textShadow: visible ? "0 0 6px rgba(74,222,128,0.7)" : "none",
            opacity: visible ? 1 : 0,
            transitionDelay: `${delay + 150}ms`,
          }}
        >
          &gt;
        </span>
      )}

      {children}
    </div>
  );
};