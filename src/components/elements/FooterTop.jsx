import { motion } from "motion/react";
import footerIcon from "../../assets/icons/footer-text-slider-icon.svg";

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 16,
        ease: "linear",
      },
    },
  },
};

const FooterTop = () => {
  return (
    <div className="py-[60px] xl:pb-[100px] xl:pt-[130px] overflow-hidden">
      <motion.div
        className="flex w-full gap-x-[60px] whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-x-6 pr-1">
            <img
              src={footerIcon}
              alt="icon"
              className="h-10 w-10 lg:h-[60px] lg:w-[60px] shrink-0"
            />
            <div className="block font-secondary text-4xl font-bold leading-none -tracking-[1px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
             Start engaging, start earning, and start evolving
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FooterTop;
