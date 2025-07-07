import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    name: "John Doe",
    designation: "CEO",
    rating: 5,
    description: "This AI SaaS tool has revolutionized our workflow.",
  },
    {
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    name: "Alex Johnson",
    designation: "CTO",
    rating: 5,
    description: "It’s scalable, fast, and incredibly accurate.",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    name: "Jane Smith",
    designation: "Product Manager",
    rating: 5,
    description: "Customer satisfaction has improved thanks to this tool.",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    name: "Alex Johnson",
    designation: "CTO",
    rating: 5,
    description: "It’s scalable, fast, and incredibly accurate.",
  },

];

function Testimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative py-20 bg-[#05060c] text-white overflow-hidden">
      <h2 className="text-center text-3xl md:text-6xl font-black mb-14 leading-tight">
        Positive feedback <br />
        from our users
      </h2>

      {/* Left Arrow */}
       <div className="absolute left-10 lg:left-70 md:left-10 bottom-[4%] lg::bottom-[30%] md:bottom-[30%] transform   z-10">
        <button ref={prevRef} className="bg-[#1a1e2e] p-3 rounded-full hover:bg-white hover:text-black transition">
          <IoIosArrowBack size={24} />
        </button>
      </div>
      <div className="absolute right-10 lg:right-70 md:right-10 bottom-[4%] lg:bottom-[30%] md:bottom-[30%] transform   z-10">
        <button ref={nextRef} className="bg-[#1a1e2e] p-3 rounded-full hover:bg-white hover:text-black transition">
          <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="w-full max-w-2xl px-4"
      >
        {testimonials.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-gradient-to-b from-[#1f2c42] to-[#000000] rounded-3xl shadow-xl border border-[#2f3a52] max-w-sm p-6 mx-auto text-left transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center h-20 justify-center mb-3 text-yellow-400 text-xl">
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-base md:text-lg text-gray-300 italic mb-6 text-center">
              "{review.description}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-start">
                <h4 className="font-semibold text-white text-lg">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-400">{review.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
