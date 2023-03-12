import * as React from "react";
import { motion, useTransform } from "framer-motion";
import { styles } from "../../../SplitScreen/SplitScreenOverride.styles";
import SplitScreen from "../../../SplitScreen/SplitScreen";
import { ErrorBoundary } from "../../../SplitScreen/ErrorBoundary";
import { Navbar } from "../../../RTL/NavbarRTL/NavbarRtl";
import { NavbarLft } from "../../../LTR/NavbarLTR/NavbarLtr";
import Reactspring from "../ParallaxLTR";
import FerrisWheel from "../FerrisWheel";
import Title from "../Title";
import HText from "../HeadlineText";
import Content from "../Content";
import HelloButton from "../HelloButton";

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
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {" "}
              <Reactspring />
              <NavbarLft />
            </motion.div>
          }
          right={
            <motion.div
              style={{ opacity: 0, ...styles.rightPane }}
              animate={{ opacity: 1 }}
            >
              <Navbar />
              <Title />
              <HText />
              <Content />
              <HelloButton />
              <FerrisWheel />
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
              <Reactspring />
              <NavbarLft />
            </motion.div>
          }
          right={
            <motion.div
              style={{ marginRight: "10px", opacity: 0 }}
              initial={{ x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Navbar />
              <Title />
              <HText />
              <Content />
              <HelloButton />
              <FerrisWheel />
            </motion.div>
          }
        />
      )}
    </ErrorBoundary>
  );
}
