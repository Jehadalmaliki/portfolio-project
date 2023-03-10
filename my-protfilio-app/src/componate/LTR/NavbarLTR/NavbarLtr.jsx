import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavbarLtlstyles } from "./NavbarLtl.style";
import JehadAliText from "../../RTL/3DText";
export function NavbarLft() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  return (
    <motion.nav style={NavbarLtlstyles.nav}>
        <motion.ul  style={NavbarLtlstyles.ul }>
        <motion.li
          style={
            hovered === 0 || window.location.pathname === "/"
              ? { ...NavbarLtlstyles.li, ...NavbarLtlstyles.liHover }
              : NavbarLtlstyles.li
          }
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Link
            to="/"
           
          >
            <motion.span
            > <JehadAliText/></motion.span>
          </Link>
        </motion.li>
        </motion.ul> 
      <motion.ul  style={NavbarLtlstyles.ul}>      
      </motion.ul>
      
    </motion.nav>
  );
}
