import { RevealOnScroll } from "../RevealOnScroll";
import { FaStar } from "react-icons/fa";
import Cus from "./Men.png";
import Cus2 from "./Women.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Jawad Ali",
    title: "Owner, Roucha Cielo",
    review:
      "Amazing work! The team delivered a stunning e-commerce site that exceeded our expectations. Highly recommend!",
    avatar: Cus,
    rating: 5,
  },
  {
    name: "Sadia Imran",
    title: "Owner, Pixel Crafter",
    review:
      "Pixel Crafter's portfolio redesign was a game-changer. Their attention to detail and creativity is unmatched.",
    avatar: Cus2,
    rating: 4,
  },
];

const ReviewCard = ({ review }) => (
  <div className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] hover:-translate-y-2 transition-all duration-300 h-full">
    
    {/* Neomorphic Top Highlight */}
    <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
    
    {/* Neomorphic Inner Glow */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Neomorphic Border Glow on Hover */}
    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
    
    <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1e1e1e] h-full flex flex-col justify-between">

      {/* User with Neomorphic Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          {/* Neomorphic Avatar Frame */}
          <div className="absolute -inset-1 rounded-full bg-[#1a1a1a] shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]"></div>
          <img
            src={review.avatar}
            alt={review.name}
            className="relative w-14 h-14 rounded-full border-2 border-red-500/30 object-cover shadow-lg transition-all duration-300 group-hover:border-red-500 group-hover:scale-105"
          />
          {/* Neomorphic Avatar Glow */}
          <div className="absolute -inset-2 rounded-full bg-red-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="text-left">
          <h3 className="text-lg font-semibold text-red-400 group-hover:text-red-300 transition-colors duration-300">
            {review.name}
          </h3>

          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {review.title}
          </p>
        </div>
      </div>

      {/* Review with Neomorphic Quote */}
      <p className="text-sm text-gray-300 italic leading-relaxed mb-5 relative pl-6 before:content-['“'] before:absolute before:left-0 before:text-4xl before:text-red-500/50 before:top-[-8px] before:font-serif group-hover:before:text-red-400 transition-all duration-300">
        {review.review}
      </p>

      {/* Stars with Neomorphic Effect */}
      <div className="flex gap-1">
        {Array.from({ length: review.rating }, (_, i) => (
          <div key={i} className="relative">
            <FaStar
              className="text-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.3))'
              }}
            />
          </div>
        ))}
        {/* Empty stars */}
        {Array.from({ length: 5 - review.rating }, (_, i) => (
          <FaStar key={`empty-${i}`} className="text-gray-600/50" />
        ))}
      </div>
    </div>
  </div>
);

const CustomerReview = () => {
  return (
    <section
      id="reviews"
      className="relative py-20 px-4 bg-[#1a1a1a] text-white overflow-hidden"
    >

      {/* Neomorphic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        
        {/* Soft Ambient Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full"></div>
        
        {/* Neomorphic Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto text-center relative z-10">

          {/* Title with Neomorphic Design */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                What Clients Say
              </span>
              {/* Neomorphic Underline */}
              <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]"></span>
              <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[2px]"></span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto relative inline-block px-6 py-2 rounded-full
              bg-[#1a1a1a]
              shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]">
              Hear what our clients say about working with us on high-impact
              web and design projects.
            </p>
          </div>

          {/* Neomorphic Swiper Container */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-red-600/20 via-transparent to-red-600/20">
            <div className="rounded-2xl bg-[#1a1a1a] p-4">
              <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".custom-swiper-pagination",
                }}
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
                    <ReviewCard review={review} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Neomorphic Pagination */}
          <div className="custom-swiper-pagination mt-6 flex justify-center gap-3" />

        </div>
      </RevealOnScroll>

      {/* Global Neomorphic Styles */}
      <style jsx>{`
        /* Neomorphic Base */
        .neu-base {
          background: #1a1a1a;
          border-radius: 1rem;
        }
        
        /* Neomorphic Extruded */
        .neu-extruded {
          box-shadow: 8px 8px 20px #0f0f0f, -8px -8px 20px #252525;
        }
        
        /* Neomorphic Inset */
        .neu-inset {
          box-shadow: inset 4px 4px 12px #0f0f0f, inset -4px -4px 12px #252525;
        }
        
        /* Smooth Transitions */
        * {
          transition: box-shadow 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }

        /* Neomorphic Grid Pattern */
        .neu-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }

        /* Custom Swiper Pagination - Neomorphic Style */
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #1a1a1a;
          border-radius: 50%;
          box-shadow: 3px 3px 8px #0f0f0f, -3px -3px 8px #252525;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 4px;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #1a1a1a;
          box-shadow: inset 3px 3px 8px #0f0f0f, inset -3px -3px 8px #252525, 0 0 20px rgba(239, 68, 68, 0.3);
          transform: scale(1.2);
          border: 2px solid rgba(239, 68, 68, 0.3);
        }

        .custom-swiper-pagination .swiper-pagination-bullet:hover {
          transform: scale(1.1);
          box-shadow: 2px 2px 6px #0f0f0f, -2px -2px 6px #252525;
        }

        /* Swiper Container Styling */
        .swiper {
          padding: 8px 4px;
        }

        .swiper-slide {
          height: auto;
          display: flex;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
          box-shadow: inset 1px 1px 3px #0f0f0f, inset -1px -1px 3px #252525;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          box-shadow: 2px 2px 4px #0f0f0f, -2px -2px 4px #252525;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </section>
  );
};

export default CustomerReview;