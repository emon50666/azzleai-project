import { Link } from "react-router-dom";
import { teamMembers } from "../../utils/constants";
import TeamCard from "../cards/TeamCard";
import Button from "../shared/Button";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import AnimatonVariants from "../shared/AnimatonVariants";

const TeamSection = () => {
  return (
    <section>
      <div className="py-20 xl:py-[130px] overflow-hidden">
        <MaxWidthWrapper>
          <AnimatonVariants animation="fade-up" duration={0.7} delay={0}>
            <div className="mb-10 flex flex-wrap items-center justify-between lg:mb-12 xl:mb-20">
              <div className="max-w-sm lg:max-w-3xl xl:max-w-[715px]">
                <h2 className="text-[40px] leading-[40px] font-bold tracking-tight font-secondary lg:text-[80px] lg:leading-[80px] lg:tracking-normal">
                 A team of creative minds and experts drives our vision.  Join our telegram 

                </h2>
              </div>
              <Link to={""} className="mt-5 hover:text-white" href="/team">
                <Button className="bg-black text-white font-bold font-primary py-4">
                  Join our team
                </Button>
              </Link>
            </div>
          </AnimatonVariants>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <AnimatonVariants
                key={index}
                animation="fade-up"
                duration={0.7}
                delay={0.3 + index * 0.15}
              >
                <TeamCard member={member} />
              </AnimatonVariants>
            ))}
          </ul>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default TeamSection;
