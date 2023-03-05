
import * as React from "react";
import { motion } from "framer-motion";
import { styles } from "./styles";
import SplitScreen from "./SplitScreen";
import { ErrorBoundary } from "./ErrorBoundary";

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
                style={{ marginBottom: "20px", ...styles.leftPane}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Left Column
              </motion.div>
            }
            right={
              <motion.div
                style={{ opacity: 0 ,  ...styles.rightPane,}}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Right Column
              </motion.div>
            }
          />
        ) : (
          <SplitScreen
            direction="row"
            left={
              <motion.div
                style={{ marginRight: "20px", ...styles.leftPane, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Left Column
              </motion.div>
            }
  
            right={<motion.div
              style={{ marginRight: "20px", opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
             right Column
            </motion.div>}
          />
        )}
      </ErrorBoundary>
    );
  }
