import { RevealOnScroll } from "../RevealOnScroll";
import { FaStar } from "react-icons/fa";
import Cus from "./Men.png";
import Cus2 from "./Women.png";

// Swiper imports
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
  <div className="w-[90%] sm:w-[85%] md:w-full md:h-[260px] flex flex-col items-center justify-between mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-md border border-red-500/20 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1.5">
    <div className="flex items-center gap-4 mb-3">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-red-500 object-cover bg-white"
      />
      <div className="text-left">
        <h3 className="text-lg font-semibold">{review.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{review.title}</p>
      </div>
    </div>
    <p className="text-sm text-left italic text-gray-700 dark:text-gray-200 mb-3 line-clamp-3 leading-relaxed">
      “{review.review}”
    </p>
    <div className="flex text-sm">
      {Array.from({ length: review.rating }, (_, i) => (
        <FaStar
          key={i}
          className="text-yellow-400 mr-1 transition-transform duration-200 hover:scale-110"
        />
      ))}
    </div>
  </div>
);

const CustomerReview = () => {
  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-100 to-white dark:from-[#0f0f0f] dark:to-[#1a1a1a] text-gray-800 dark:text-white"
      id="reviews"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-transparent bg-clip-text">
            What Clients Say
          </h2>

          <div className="relative">
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
              className="pb-4"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="flex justify-center items-stretch">
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Dots below */}
            <div className="custom-swiper-pagination mt-6 flex justify-center gap-2" />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default CustomerReview;
