import logo from "../../assets/icons/Logo.png";
import arrowRight from "../../assets/icons/arrowwhite.svg";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import FooterTop from "./FooterTop";
import { footerPrimaryPages } from "../../utils/constants";
import { footerUtilitiesPages } from "../../utils/constants";
import { footerLegalPages } from "../../utils/constants";
import { footerGetInvolvedPages } from "../../utils/constants";




const Footer = () => {
  return (
    <footer className="relative z-[1] -mt-[150px] overflow-hidden rounded-tl-[30px] rounded-tr-[35px] bg-[#f2f8ff] lg:rounded-tl-[50px] lg:rounded-tr-[38px]">
      {/* Footer top */}
      <FooterTop />

      {/* Footer Main Content */}
      <MaxWidthWrapper>
        <div>
          <div className="h-[1px] w-full bg-[#f2f8ff]"></div>
          <div className="lg grid grid-cols-1 gap-10 py-[60px] lg:grid-cols-5 md:grid-cols-3 xl:grid-cols-5 xl:gap-20 xl:py-[100px]">
            {/* Logo & Description */}
            <div className="flex flex-col gap-y-6">
              <a href="/" className="inline-block">
                <img src={logo} alt="logo" width={96} height={24} />
              </a>
              <p className="text-lg font-primary">
               At Harvest AI, we are building a future where every voice is valued, every action is rewarded, and every user owns their digital identity.

              </p>
              {/* <p className="text-lg font-primary">
                Website: <a href="/">www.example.com</a>
              </p> */}
            </div>

            {/* Primary Pages */}
            <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black font-secondary">
                Platform 
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                {footerPrimaryPages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.path}
                      className="transition-all duration-300 ease-linear hover:text-[#298DED] text-lg font-primary"
                    >
                      {item.page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility Pages */}
            <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black font-secondary">
                Ecosystem 
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                {footerUtilitiesPages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.path}
                      className="transition-all duration-300 ease-linear hover:text-[#298DED] text-lg font-primary"
                    >
                      {item.page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

              {/* legal  */}
             <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black font-secondary">
                Legal  
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                {footerLegalPages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.path}
                      className="transition-all duration-300 ease-linear hover:text-[#298DED] text-lg font-primary"
                    >
                      {item.page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>



              {/* Get Involved   */}
             <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black font-secondary">
                Get Involved   
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                {footerGetInvolvedPages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.path}
                      className="transition-all duration-300 ease-linear hover:text-[#298DED] text-lg font-primary"
                    >
                      {item.page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>

          <div className="h-[1px] w-full bg-[#DBD6CF]"></div>

          {/* Copyright */}
          <div className="py-9 text-center text-lg font-primary">
            <p>© Copyright 2025, All Rights Reserved by Mthemeus</p>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* Gradient Backgrounds */}
      <div className="orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-full"></div>
      <div className="orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-full"></div>
    </footer>
  );
};

export default Footer;
