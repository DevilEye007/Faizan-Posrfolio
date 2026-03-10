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
  <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-red-600/40 via-transparent to-red-600/40 h-full">
    <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-6 border border-white/5 h-full flex flex-col justify-between transition duration-300 group-hover:-translate-y-1">

      {/* User */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-14 h-14 rounded-full border-2 border-red-500 object-cover shadow-md"
        />

        <div className="text-left">
          <h3 className="text-lg font-semibold text-red-400">
            {review.name}
          </h3>

          <p className="text-sm text-gray-400">
            {review.title}
          </p>
        </div>
      </div>

      {/* Review */}
      <p className="text-sm text-gray-300 italic leading-relaxed mb-5 relative pl-6 before:content-['“'] before:absolute before:left-0 before:text-3xl before:text-red-500 before:top-[-6px]">
        {review.review}
      </p>

      {/* Stars */}
      <div className="flex">
        {Array.from({ length: review.rating }, (_, i) => (
          <FaStar
            key={i}
            className="text-yellow-400 mr-1 transition-transform duration-300 group-hover:scale-110"
          />
        ))}
      </div>
    </div>
  </div>
);

const CustomerReview = () => {
  return (
    <section
      id="reviews"
      className="relative py-20 px-4 bg-black text-white overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 blur-[120px]" />

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto text-center">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Hear what our clients say about working with us on high-impact
            web and design projects.
          </p>

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
            className="pb-6"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="flex items-stretch">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="custom-swiper-pagination mt-8 flex justify-center gap-2" />

        </div>
      </RevealOnScroll>
    </section>
  );
};

export default CustomerReview;