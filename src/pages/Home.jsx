import Features from "../components/sections/Features";
import HeroSection from "../components/sections/HeroSection";
import AudienceSection from "../components/sections/AudienceSection";
import VideoPlayer from "../components/sections/VideoPlayer";
import PricingSection from "../components/sections/PricingSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import Testimonial from "../components/sections/Testimonial";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <AudienceSection />
      <VideoPlayer isGradient={true} />
      <PricingSection />
      <Testimonial/>
      <TestimonialSection />
    </>
  );
};
export default Home;
