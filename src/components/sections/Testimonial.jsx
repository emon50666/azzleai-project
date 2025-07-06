import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    name: "John Doe",
    designation: "CEO, Example Inc.",
    rating: 5,
    description: "“This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.”",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    name: "Jane Smith",
    designation: "Product Manager, TechCo",
    rating: 5,
    description: "“It answers immediately, and we've seen a significant reduction in response time. Our customers love it and so do we!”",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    name: "Alex Johnson",
    designation: "CTO, DevWorks",
    rating: 5,
    description: "“It is accurate, fast and supports multiple languages support. It is a must for any international business success.”",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    name: "Alex Johnson",
    designation: "CTO, DevWorks",
    rating: 5,
    description: "“Security is a top concern for us, and AI SaaS takes it seriously. It's a reassuring layer of protection for our organization.”",
  },
  {
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    name: "Alex Johnson",
    designation: "CTO, DevWorks",
    rating: 5,
    description: "“We were concerned about integrating their APIs were well documented, and their support team was super cool.”",
  },
];

function Testimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative py-16  px-4 bg-[#05060c] text-white">
      <h2 className="text-center text-2xl md:text-7xl font-black mb-8">Positive feedback dfds  <br />from our users</h2>

      {/* Arrows */}
      <div className="absolute left-70 bottom-[30%] transform   z-10">
        <button ref={prevRef} className="bg-[#1a1e2e] p-3 rounded-full hover:bg-white hover:text-black transition">
          <IoIosArrowBack size={24} />
        </button>
      </div>
      <div className="absolute right-70 bottom-[30%] transform   z-10">
        <button ref={nextRef} className="bg-[#1a1e2e] p-3 rounded-full hover:bg-white hover:text-black transition">
          <IoIosArrowForward size={24} />
        </button>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Fix for navigation not working on first load
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
        className="mySwiper max-w-xl mx-auto h-[320px] items-center my-auto"
      >
        {testimonials.map((review, index) => (
          <SwiperSlide
            key={index}
            className="   bg-gradient-to-br from-[#1d2633] to-[#000000] my-auto border border-gray-900  rounded-2xl p-6 shadow-xl text-left flex flex-col items-center transition-all duration-500 ease-in-out  scale-85    "
          >
            
           
            <div className="flex items-center text-yellow-400 text-2xl mb-3">
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} />
              ))}
            </div>
             <p className="text-xl text-gray-200 text-start mb-4">"{review.description}"</p>

          <div className="flex  gap-4 items-center">
             <div>
                <img src={review.image} alt="" className="w-20 h-20 rounded-full" />
             </div>
             <div>
                 <h4 className="font-semibold text-white text-lg">{review.name}</h4>
            <p className=" text-gray-100  text-md">{review.designation}</p>
             </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;  