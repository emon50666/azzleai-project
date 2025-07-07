import { FeaturesItems } from "../../utils/constants";
import FeatureCard from "../cards/FeatureCard";
import AnimatonVariants from "../shared/AnimatonVariants";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Features = () => {
  return (
    <section className="py-20 bg-white font-secondary overflow-hidden">
      <MaxWidthWrapper>
        <div className="lg:max-w-2xl">
          <AnimatonVariants>
            <h2 className="text-primary text-[36px] leading-[40px]  font-bold lg:text-[72px] lg:leading-[80px] font-secondary">
             Core strengths that set it apart

            </h2>
          </AnimatonVariants>
        </div>
        <AnimatonVariants>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl border-2 border-black">
            {FeaturesItems.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>
        </AnimatonVariants>
      </MaxWidthWrapper>
    </section>
  );
};
export default Features;
