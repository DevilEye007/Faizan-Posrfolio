import { RevealOnScroll } from "../RevealOnScroll";
import { FaTerminal, FaQuoteRight, FaCheck, FaCodeBranch } from "react-icons/fa";
import Cus from "./Men.png";
import Cus2 from "./Women.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ============ Shared tokens ============ */
const crtScreen = {
  background: "radial-gradient(ellipse at 50% 40%, #0d1a14 0%, #081210 60%, #040808 100%)",
  boxShadow: "inset 0 3px 8px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(255,255,255,0.04), 0 1px 0 rgba(255,255,255,0.05)",
};
const scanlines = {
  backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
};
const glowGreen = { color: "#4ade80", textShadow: "0 0 6px rgba(74,222,128,0.7)" };
const glowAmber = { color: "#fbbf24", textShadow: "0 0 6px rgba(251,191,36,0.7)" };
const glowCyan = { color: "#67e8f9", textShadow: "0 0 6px rgba(103,232,249,0.7)" };
const glowRed = { color: "#f87171", textShadow: "0 0 6px rgba(248,113,113,0.7)" };
const dim = { color: "#6b7c76" };
const bodyText = { color: "#c8d4ce" };

/* ============ LED ============ */
const Led = ({ color = "green", pulse = false }) => {
  const p = {
    green: { hi: "#86efac", mid: "#22c55e", lo: "#14532d", g: "rgba(34,197,94,0.9)" },
    amber: { hi: "#fcd34d", mid: "#f59e0b", lo: "#78350f", g: "rgba(245,158,11,0.9)" },
    cyan: { hi: "#a5f3fc", mid: "#22d3ee", lo: "#155e75", g: "rgba(34,211,238,0.9)" },
    red: { hi: "#ff9a9a", mid: "#ef4444", lo: "#7f1d1d", g: "rgba(239,68,68,0.9)" },
  }[color];
  return (
    <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
      <span className="absolute inset-0 rounded-full bg-black/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]" />
      <span
        className={`relative w-1.5 h-1.5 rounded-full ${pulse ? "animate-pulse" : ""}`}
        style={{ background: `radial-gradient(circle at 30% 30%, ${p.hi}, ${p.mid} 50%, ${p.lo})`, boxShadow: `0 0 5px ${p.g}, inset 0 -1px 1px rgba(0,0,0,0.5)` }}
      />
    </span>
  );
};

/* ============ Rating meter (5 cells) ============ */
const Rating = ({ value }) => (
  <div className="flex items-center gap-1">
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="w-4 h-1.5 rounded-[1px]"
          style={{
            background: i < value
              ? "linear-gradient(90deg, #fbbf24, #f59e0b)"
              : "rgba(255,255,255,0.08)",
            boxShadow: i < value
              ? "0 0 4px rgba(251,191,36,0.8)"
              : "inset 0 1px 1px rgba(0,0,0,0.6)",
          }}
        />
      ))}
    </div>
    <span className="text-[9px] font-mono ml-1" style={glowAmber}>
      {value}.0/5
    </span>
  </div>
);

/* ============ Review card — log entry ============ */
const ReviewCard = ({ review, index }) => (
  <div
    className="relative group h-full rounded-lg overflow-hidden font-mono"
    style={{
      background: "linear-gradient(180deg, #16161a 0%, #101014 100%)",
      border: "1px solid rgba(74,222,128,0.2)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.4)",
      transition: "box-shadow 0.3s ease, transform 0.3s ease",
    }}
  >
    {/* Title bar */}
    <div
      className="flex items-center gap-2 px-3 py-2 border-b"
      style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(0,0,0,0.6)" }}
    >
      <span className="w-2 h-2 rounded-full" style={{ background: "#ef4444", boxShadow: "0 0 3px rgba(239,68,68,0.9)" }} />
      <span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", boxShadow: "0 0 3px rgba(245,158,11,0.7)" }} />
      <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 3px rgba(34,197,94,0.9)" }} />

      <FaTerminal className="w-3 h-3 ml-2" style={glowGreen} />
      <span className="text-[9px] tracking-widest uppercase ml-1" style={dim}>
        review_{String(index + 1).padStart(2, "0")}.log
      </span>

      <div className="ml-auto flex items-center gap-1">
        <Led color="green" pulse />
        <span className="text-[9px] uppercase tracking-wider" style={glowGreen}>ok</span>
      </div>
    </div>

    {/* CRT body */}
    <div className="relative p-5" style={crtScreen}>
      <div className="absolute inset-0 pointer-events-none opacity-20" style={scanlines} />

      {/* User row — engraved header */}
      <div className="relative flex items-center gap-3 mb-3 pb-3 border-b" style={{ borderColor: "rgba(74,222,128,0.1)" }}>
        {/* Avatar well */}
        <div className="relative shrink-0">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(180deg, #0a1410, #050a08)",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(74,222,128,0.15)",
            }}
          />
          <div className="relative p-0.5 rounded-full">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-11 h-11 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ filter: "contrast(1.05) saturate(0.9)" }}
            />
          </div>
          {/* LED status on avatar */}
          <span className="absolute -bottom-0.5 -right-0.5">
            <Led color="green" pulse />
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="text-[13px] font-bold truncate" style={{ color: "#e0f0ea" }}>
            {review.name}
          </h3>
          <p className="text-[10px] truncate" style={dim}>
            // {review.title}
          </p>
        </div>
      </div>

      {/* Review body — terminal output */}
      <div
        className="relative rounded p-3 mb-3 text-[12px] leading-relaxed"
        style={{
          background: "rgba(0,0,0,0.45)",
          border: "1px solid rgba(255,255,255,0.04)",
          color: bodyText,
        }}
      >
        <div className="flex items-start gap-1.5">
          <span style={glowGreen}>&gt;</span>
          <FaQuoteRight className="w-2.5 h-2.5 mt-1 shrink-0" style={{ color: "rgba(103,232,249,0.5)" }} />
          <p className="flex-1 italic">"{review.review}"</p>
        </div>
      </div>

      {/* Footer — rating + verified */}
      <div className="flex items-center justify-between">
        <Rating value={review.rating} />
        <div className="flex items-center gap-1 text-[9px]" style={glowGreen}>
          <FaCheck className="w-2.5 h-2.5" />
          <span className="uppercase tracking-wider">verified</span>
        </div>
      </div>
    </div>

    {/* Status bar */}
    <div
      className="flex items-center justify-between px-3 py-1 text-[8px] border-t"
      style={{ background: "linear-gradient(180deg, #1a1a20, #101014)", borderColor: "rgba(0,0,0,0.6)", color: "#5a6a64" }}
    >
      <span className="flex items-center gap-1">
        <FaCodeBranch className="w-2 h-2" />
        <span>~/reviews/{review.name.toLowerCase().replace(/\s+/g, "-")}</span>
      </span>
      <span>{review.rating}/5 ★</span>
    </div>
  </div>
);

/* ============ Main ============ */
const CustomerReview = () => {
  const reviews = [
    {
      name: "Jawad Ali",
      title: "Owner, Roucha Cielo",
      review: "Amazing work! The team delivered a stunning e-commerce site that exceeded our expectations. Highly recommend!",
      avatar: Cus,
      rating: 5,
    },
    {
      name: "Sadia Imran",
      title: "Owner, Pixel Crafter",
      review: "Pixel Crafter's portfolio redesign was a game-changer. Their attention to detail and creativity is unmatched.",
      avatar: Cus2,
      rating: 4,
    },
  ];

  return (
    <section
      id="reviews"
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #0f1a15 0%, #0a100e 45%, #050807 100%)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(rgba(74,222,128,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Phosphor glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.18), transparent 70%)" }}
      />

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section header */}
          <div className="mb-12 font-mono text-center">
            <div className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.3em]" style={glowGreen}>
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.9)" }} />
              module_04
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold" style={{ color: "#e0f0ea" }}>
              <span style={glowGreen}>$</span> tail -f ./reviews.log
              <span className="inline-block w-[10px] h-[1em] ml-1 align-middle bg-green-400 animate-pulse" />
            </h2>
            <div className="h-px mt-3 bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
            <p className="mt-3 text-[12px]" style={dim}>
              // {reviews.length} verified client logs · auto-refreshing feed
            </p>
          </div>

          {/* Swiper */}
          <div
            className="relative rounded-lg p-[1px]"
            style={{
              background: "linear-gradient(135deg, rgba(74,222,128,0.3), transparent 50%, rgba(103,232,249,0.2))",
            }}
          >
            <div className="rounded-lg p-4" style={{ background: "#0a100e" }}>
              <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                modules={[Pagination, Autoplay]}
                className="pb-10"
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index} className="flex items-stretch">
                    <ReviewCard review={review} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Pagination */}
          <div className="custom-swiper-pagination mt-6 flex justify-center gap-3" />
        </div>
      </RevealOnScroll>

      {/* Styles */}
      <style jsx>{`
        /* Swiper pagination — LED indicators */
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(74,222,128,0.15);
          border-radius: 2px;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 3px !important;
          box-shadow: inset 0 1px 1px rgba(0,0,0,0.6);
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: linear-gradient(90deg, #4ade80, #22c55e);
          box-shadow: 0 0 8px rgba(74,222,128,0.8), inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .custom-swiper-pagination .swiper-pagination-bullet:hover {
          background: rgba(74,222,128,0.4);
        }

        .swiper {
          padding: 4px;
        }
        .swiper-slide {
          height: auto;
          display: flex;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CustomerReview;