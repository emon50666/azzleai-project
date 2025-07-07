import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Button = ({ className, children }) => {
  return (
    <motion.button
      whileHover="hover"
      initial="initial"
      className={cn(
        "relative overflow-hidden rounded-[50px] border px-6 py-2 font-bold text-lg text-primary group transition-colors duration-300 cursor-pointer ",
        className
      )}
      // variants={{
      //   initial: { borderColor: "rgb(127 137 149)" }, // original gray border
      //   hover: { borderColor: "rgb(254 51 10)" }, // your desired red color
      // }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Background animation */}
 <motion.span
  className="absolute inset-0 z-0"
  style={{
    background: "linear-gradient(to right, #2C8FED, #0268E3)",
  }}
  variants={{
    initial: { y: "-100%" },
    hover: { y: "0%" },
  }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
/>


      {/* Button text */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
