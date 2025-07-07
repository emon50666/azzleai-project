import { Link } from "react-router-dom";
import ContactForm from "../components/shared/ContactForm";
import { InputField } from "../components/shared/InputField";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import PageNavbar from "../components/shared/PageNavbar";
import { contactLinks } from "../utils/constants";
import MapSection from "../components/sections/MapSection";

const Contact = () => {
  return (
    <>
      <PageNavbar pages="Contact Us" page="Contact" />
      <section className="py-20">
        <div className="pb-20 xl:pb-[150px]">
          <MaxWidthWrapper>
            <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-[minmax(0,_1fr)_1.1fr]">
              {/* Text Content */}
              <div className="order-2 flex flex-col md:order-1">
                <div className="mb-8 text-left lg:mb-16 xl:mb-6">
                  <h2 className="text-[36px] leading-10 font-bold font-secondary tracking-tight text-primary lg:text-[80px] lg:leading-[80px] lg:tracking-tight">
                    Reach out to us

                  </h2>
                </div>
                <div className="text-lg leading-[1.4] lg:text-[21px] ">
                  <p className="mb-7 font-primary text-primary">
                   Get connected with us and let’s start the conversation today!

                  </p>
                  <ul className="mt-12 flex flex-col gap-y-8 lg:gap-y-12">
                    <li className="flex flex-col gap-y-4 text-2xl font-extrabold font-inter tracking-tighter text-primary">
                      Send us an email:
                      <h2
                        href="mailto:info@example.com"
                        className="text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl font-primary"
                      >
                        info@example.com
                      </h2>
                    </li>
                    <li className="flex flex-col gap-y-4 text-2xl font-extrabold font-inter tracking-tighter text-primary">
                      Give us a call:
                      <h3
                        href="tel:+880-1345-922210"
                        className="text-2xl font-normal leading-loose hover:text-red-500 lg:text-3xl"
                      >
                        +880 1345-922210
                      </h3>
                    </li>
                    <li className="flex flex-col gap-y-4 text-2xl font-extrabold font-inter tracking-tighter text-primary">
                      Follow us:
                      <ul className="mt-auto flex gap-x-[15px]">
                        {contactLinks.map((platform) => (
                          <li key={platform}>
                            <Link
                              to={platform.path}
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-red-500"
                              target="_blank"
                            >
                              <img src={platform.icon} alt="" className="w-4" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </MaxWidthWrapper>
        </div>
        <MapSection />
      </section>
    </>
  );
};
export default Contact;
