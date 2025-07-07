import { Link } from "react-router-dom";
import AboutContactImage from "../../assets/images/about-contact-img.jpg";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import AnimatonVariants from "../shared/AnimatonVariants";

const AboutContact = () => {
  return (
    <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px] overflow-hidden">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]">
          {/* Image with fade-right */}
          <AnimatonVariants
            animation="fade-right"
            duration={0.7}
            delay={0.5}
            className="order-2 overflow-hidden rounded-[20px] md:order-1"
          >
            <img
              src={AboutContactImage}
              alt="about-contact-img"
              width="526"
              height="550"
              className="h-auto w-full"
            />
          </AnimatonVariants>

          {/* Text Content with fade-up */}
          <AnimatonVariants
            animation="fade-up"
            duration={0.7}
            delay={0.5}
            className="order-1 md:order-2"
          >
            <div>
              <div className="mb-6">
                <h2 className="text-white text-[36px] leading-10 font-secondary font-bold lg:text-[79px] lg:leading-[80px]">
                  Our goal is to foster meaningful relationships with our users.

                </h2>
              </div>

              <div className="text-left text-lg leading-[1.4] text-white lg:text-[21px] font-primary">
                <p className="mb-7 last:mb-0">
                  AI accessible and beneficial for organizations, and we look
                  forward to partnering with businesses to achieve their AI
                  goals.
                </p>
              </div>

              <ul className="mt-10 flex flex-col gap-6 font-secondary text-[30px] tracking-[1.33] lg:mt-14 lg:gap-y-3 xl:mt-[70px]">
                <li className="flex flex-col gap-x-2 leading-tight text-[#2A8EED] lg:flex-row lg:leading-normal font-bold items-center">
                  Website:
                  <Link
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#2A8EED] mt-1"
                    to="/"
                  >
                    www.example.com
                  </Link>
                </li>
                <li className="flex flex-col gap-x-2 leading-tight text-[#2A8EED] lg:flex-row lg:leading-normal font-bold items-center">
                  Email:
                  <Link to="/" className="text-white hover:text-[#2A8EED] mt-1">
                    yourmail@mail.com
                  </Link>
                </li>
                <li className="flex flex-col gap-x-2 leading-tight text-[#2A8EED] lg:flex-row lg:leading-normal font-bold items-center">
                  Phone:
                  <Link to="/" className="text-white hover:text-[#2A8EED]">
                    +880 1345-922210
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatonVariants>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutContact;
