import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbarstyles } from "./Navbar.styles";
export function Navbar() {
  const navbarVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const ulVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const liVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 }
  };
  return (
    <motion.nav
      style={{ ...Navbarstyles.nav }}
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.ul
        style={{...Navbarstyles.ul }}
        variants={ulVariants}
      >
        <motion.li
          style={{ ...Navbarstyles.li }}
          variants={liVariants}
        >
          <Link to="/">Jehad</Link>
        </motion.li>
        <motion.li
          variants={liVariants}
        >
       
        </motion.li>
      </motion.ul>
      <motion.ul
        style={{ ...Navbarstyles.ul }}
        variants={ulVariants}
      >
        <motion.li
          variants={liVariants}
        >
          <Link to="/contact">Contact</Link>
        </motion.li>
        <motion.li
          style={{ marginLeft: "20px" }}
          variants={liVariants}
        >
          <Link to="/works">Works</Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  )
}