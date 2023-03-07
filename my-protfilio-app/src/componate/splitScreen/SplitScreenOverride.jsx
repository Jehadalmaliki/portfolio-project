import * as React from "react";
import { motion } from "framer-motion";
import { styles } from "./SplitScreenOverride.styles";
import SplitScreen from "./SplitScreen";
import { ErrorBoundary } from "./ErrorBoundary";
import { Navbar } from "../rtl/navbarRlt/NavbarRtl";
import { NavbarLft } from "../lft/navbarLft/NavbarLft";

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
              style={{  ...styles.leftPane }}
              animate={{ opacity: 1, y: 0 }}
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
              style={{  ...styles.leftPane }}
              animate={{ opacity: 1, x: 0 }}
            >
              <NavbarLft />
            </motion.div>
          }
          right={
            <motion.div
              style={{ marginRight: "20px", opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Navbar />
            </motion.div>
          }
        />
      )}
    </ErrorBoundary>
  );
}
