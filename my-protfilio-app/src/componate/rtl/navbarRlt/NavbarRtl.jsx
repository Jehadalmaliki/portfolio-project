import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbarstyles } from "./NavbarRtl.styles";
export function Navbar() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  return (
    <motion.nav style={Navbarstyles.nav}>
        <motion.ul style={Navbarstyles.ul }>
        </motion.ul>
      
      <motion.ul style={Navbarstyles.ul}>
        <motion.li
          style={
            hovered === 1 || window.location.pathname === "/works"
              ? { ...Navbarstyles.li, ...Navbarstyles.liHover }
              : Navbarstyles.li
          }
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Link
            to="/works"
            style={hovered === 1 ? Navbarstyles.aHover : Navbarstyles.a}
          >
   works
            <span
              style={
                hovered === 1 ? Navbarstyles.aHoverBefore : Navbarstyles.aBefore
              }
            ></span>
          </Link>
        </motion.li>
        <motion.li
          style={
            hovered === 2 || window.location.pathname === "/about"
              ? { ...Navbarstyles.li, ...Navbarstyles.liHover }
              : Navbarstyles.li
          }
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Link
            to="/about"
            style={hovered === 2 ? Navbarstyles.aHover : Navbarstyles.a}
          >
     About
            <span
              style={
                hovered === 2 ? Navbarstyles.aHoverBefore : Navbarstyles.aBefore
              }
            ></span>
          </Link>
        </motion.li>
      </motion.ul>
      
    </motion.nav>
  );
}
