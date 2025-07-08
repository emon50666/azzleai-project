import Button from "../shared/Button";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Banner from "../../assets/images/banner.webp";
import LogoTicker from "./LogoTicker";
import { Link } from "react-router-dom";
import AnimatonVariants from "../shared/AnimatonVariants";

const HeroSection = () => {
  return (
    <section className="py-20 bg-[#f2f8ff] relative overflow-clip rounded-b-[50px] md:rounded-b-0 z-5">
      <div className="orange-gradient-1 absolute -right-[150px] top-[300px] -z-[1] h-[500px] w-[500px] rounded-[500px]"></div>
      <div className="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] rounded-[450px]"></div>
      <MaxWidthWrapper className="lg:px-8">
        <h1 className="text-[48px] text-center font-bold tracking-tight font-secondary leading-[48px] lg:text-[120px] lg:leading-[120px] sm:text-7xl sm:leading-[70px]">
         AI Blockchain for <br /> Social Media 
        </h1>
        <div className="sm:max-w-4xl mx-auto">
          <p className="text-center text-primary font-secondary tracking-tight mt-5 font-medium text-xl md:font-semibold">
           An innovative ecosystem that combines artificial intelligence (AI) and blockchain technology. We offer users a platform where they can engage in activities like creating quality content, engaging, interacting with others, and earning rewards. 
          </p>
        </div>
        <div className="flex items-center flex-col gap-4 mt-6 sm:flex-row justify-center lg:mt-10">
          <Link to="/contact">
            <Button className=" bg-black text-white text-lg py-4  font-semibold font-primary">
              download now play store app store 
            </Button>
          </Link>
          <Link to="/about">
            <Button className="px-5 py-4 font-primary">Learn more</Button>
          </Link>
        </div>
        <div className="mt-15">
          <AnimatonVariants animation="zoom" delay={0.5}>
            <img
              src={Banner}
              alt=""
              height={640}
              className="h-auto w-full rounded-2xl lg:rounded-4xl sm:w-full"
            />
          </AnimatonVariants>
        </div>
        <div class="my-10 h-[1px] w-full bg-[#DBD6CF]lg:my-16 xl:my-20"></div>
        <AnimatonVariants>
          <p className="sm:text-sm text-xl font-primary text-center text-primary md:text-lg">
          Fueling intelligence. Enabling decentralized innovation.

          </p>
          <LogoTicker />
        </AnimatonVariants>
      </MaxWidthWrapper>
    </section>
  );
};
export default HeroSection;
