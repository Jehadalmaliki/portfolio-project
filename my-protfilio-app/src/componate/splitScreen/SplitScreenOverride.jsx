import * as React from "react";
import { motion, useTransform } from "framer-motion";
import { styles } from "./SplitScreenOverride.styles";
import SplitScreen from "./SplitScreen";
import { ErrorBoundary } from "./ErrorBoundary";
import { Navbar } from "../RTL/NavbarRTL/NavbarRtl";
import { NavbarLft } from "../LTR/NavbarLTR/NavbarLtr";
import { useState } from "react";
import Reactspring from "../LTR/ParallaxLTR/Reactspring";

import FerrisWheel from "../RTL/FerrisWheel";
// import JehadAliText from "../RTL/3DText";
// import Cube from "../RTL/3DText/Cube";

import Title from "../RTL/Title";
import HText from "../RTL/HText";
import Content from "../RTL/Content/ Content";
import HelloButton from "../RTL/HelloButton";

export function SplitScreenOverride() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ErrorBoundary>
      {isSmallScreen ? (
        <SplitScreen
          direction="column"
          left={
            <motion.div
              style={{ ...styles.leftPane }}
              initial={{ opacity: 0.7}}
            
              animate={{ opacity: 1, x: 0 }}
              
            > 
                <NavbarLft />       
            </motion.div>
          }
          right={
            <motion.div
              style={{ opacity: 0, ...styles.rightPane }}
              animate={{ opacity: 1 }}
            >
              <Navbar />
             
            </motion.div>
          }
        />
      ) : (
        <SplitScreen
          direction="row"
          left={
            <motion.div
              style={{ ...styles.leftPane }}    
              
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
         
          <Reactspring/>
                <NavbarLft />
            </motion.div>
          }
          right={
            <motion.div
              style={{ marginRight: "10px", opacity: 0 }}
              initial={{  x: -40 }}  
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            >
             
    
              <Navbar />
        <Title/>
          
              <HText/>
              <Content/>
              <HelloButton/>
              <FerrisWheel/>
            </motion.div>
          }
        />
      )}
    </ErrorBoundary>
  );
}
