import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    display: "block",
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: { duration: 0.2 },
    transitionEnd: { display: "none" },
  },
};

const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);
  const toggleHoverMenu = () => setIsHover(true);
  const closeHoverMenu = () => setIsHover(false);

  const hasSubMenu = Array.isArray(menu?.subMenu) && menu.subMenu.length > 0;

  return (
    <motion.li
      className="relative group/link"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={closeHoverMenu}
    >
      <Link
        to={menu.path || "#"}
        onClick={closeHoverMenu}
        className="flex items-center gap-1 px-4 py-2 font-semibold rounded-md transition-all duration-200 font-primary"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            className="mt-[1px] transition-transform group-hover/link:rotate-270"
            size={18}
          />
        )}
      </Link>

      {hasSubMenu && (
        <motion.div
          className={`absolute top-full left-0 z-50 bg-white shadow-xl rounded-lg mt-3 px-4 py-3 grid grid-cols-${
            menu.gridCols || 1
          } gap-4 min-w-[200px] border border-gray-200 
          before:content-[''] before:absolute before:top-[-12px] before:left-[22px] 
          before:w-0 before:h-0 before:border-l-[12px] before:border-r-[12px] 
          before:border-b-[12px] before:border-l-transparent before:border-r-transparent 
          before:border-b-white before:z-50`}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {menu.subMenu.map((sub, index) => (
            <NestedSubMenu item={sub} key={index} closeAll={closeHoverMenu} />
          ))}
        </motion.div>
      )}
    </motion.li>
  );
};

const NestedSubMenu = ({ item, closeAll }) => {
  const [isSubHover, setIsSubHover] = useState(false);
  const hasSubMenu = Array.isArray(item?.subMenu) && item.subMenu.length > 0;

  return (
    <div
      className="relative group/sub"
      onMouseEnter={() => setIsSubHover(true)}
      onMouseLeave={() => setIsSubHover(false)}
    >
      <Link
        to={item.path || "#"}
        onClick={closeAll}
        className="flex items-center justify-between text-primary hover:text-[#2C8FED] px-2 py-1 rounded-md transition-all duration-200 whitespace-nowrap font-secondary font-semibold"
      >
        {item.name}
        {hasSubMenu && <ChevronRight size={16} />}
      </Link>

      {hasSubMenu && (
        <motion.div
          className="absolute top-0 left-full ml-3 w-[200px] bg-white shadow-lg rounded-lg p-3 z-50 border border-gray-200"
          initial="exit"
          animate={isSubHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {item.subMenu.map((child, i) => (
            <NestedSubMenu key={i} item={child} closeAll={closeAll} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DesktopMenu;
