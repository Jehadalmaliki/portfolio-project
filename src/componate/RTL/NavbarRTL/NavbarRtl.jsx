import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import  "./NavbarRtl.styles.css";
export function Navbar() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  return (
    <motion.nav  className="nav">
        <motion.ul     className="ul">
        </motion.ul>
      
      <motion.ul className="ul">
        <motion.li
         
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Link
            to="/works"
            className="a"
          >
   Works
          
          </Link>
        </motion.li>
        <motion.li
         
          className="li"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Link
            to="/about"
            className="a"
          >
     About
          </Link>
        </motion.li>
      </motion.ul>
      
    </motion.nav>
  );
}
