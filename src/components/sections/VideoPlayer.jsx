
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import bg_1 from "../../assets/images/bg-1.jpg"
import bg_2 from "../../assets/images/bg-2.png"
import bg_3 from "../../assets/images/bg-3.png"


const slides = [
  {
    id: 1,
    title: "Decentralized Onboarding",
    description:
      "Users can connect with any EVM-compatible Web3 wallet. Initial setup ensures transparency and control from day one. % of people onboarded till now . % of people using social media.",
    image:bg_1,
  },
  {
    id: 2,
    title: "Intelligent Content Creation ",
    description:
      "AI-enhanced content creation and sharing. AI-enhanced content creation and sharing",
    image: bg_2,
  },
  {
    id: 3,
    title: "Trustworthy Reward & Monetization",
    description:
      "HVT enables direct, authentic creator compensation. No intermediaries; users keep full rewards",
    image: bg_3,
  },
  {
    id: 4,
    title: "Continuous Governance & Growth",
    description:
      "Users propose and vote via decentralized governance. Ecosystem grows through user participation and value",
    image: bg_1,
  },
];

const VideoPlayer = () => {
  return (
    <section className="bg-black container rounded-4xl mt-10 mx-auto relative overflow-hidden py-20 lg:py-32">
      {/* Gradient Background */}
      {/* <div className="orange-gradient-1 absolute top-[400px] h-[400px] w-[250px] -rotate-[-9.022deg] rounded-[400px] z-2 hidden lg:block"></div>
      <div className="orange-gradient-1 absolute top-[300px] h-[600px] w-[250px] -rotate-[-9.022deg] rounded-[400px] z-2 hidden lg:block"></div> */}

      {/* Swiper Slider */}
      <Swiper
       
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
           
        }}
        loop={true}
        className="w-full max-w-5xl mx-auto px-4"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col px-5 md:flex-row items-center gap-10">
              {/* Text Content */}
              <div className="w-full md:w-1/2 text-white">
                <div className="text-sm font-medium bg-transparent text-gray-500 border border-gray-800 rounded-md w-fit px-3 py-1 mb-4">
                  {String(slide.id).padStart(2, "0")}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  {slide.title}
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {slide.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VideoPlayer;
