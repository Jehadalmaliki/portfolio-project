import * as React from "react";
import { motion, useTransform } from "framer-motion";
import { styles } from "./SplitScreenOverride.styles";
import SplitScreen from "./SplitScreen";
import { ErrorBoundary } from "./ErrorBoundary";
import { Navbar } from "../RTL/NavbarRTL/NavbarRtl";
import { NavbarLft } from "../LTR/NavbarLTR/NavbarLtr";
import { useState } from "react";
// import ParallaxBackground from "./ParallaxBackground";
// import Parall from "./Parall";
import Reactspring from "../LTR/ParallaxLTR/Reactspring";

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
              initial={{  x: 20 }}  
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
         
          <Reactspring/>
                <NavbarLft />
            </motion.div>
          }
          right={
            <motion.div
              style={{ marginRight: "10px", opacity: 0 }}
              initial={{  x: -12 }}  
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
           
              <Navbar />
              <div style={{ color:"#43ee61" ,display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div className={styles.title}>
        <span style={{ fontSize: 60, textTransform: 'capitalize' }}>Jehad Ali</span>
      </div>
      </div>
            </motion.div>
          }
        />
      )}
    </ErrorBoundary>
  );
}
