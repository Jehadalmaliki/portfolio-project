import * as React from "react";
import { motion, useTransform } from "framer-motion";
import styles from "./styles.module.css";
import SplitScreen from "../../../SplitScreen/SplitScreen";
import { ErrorBoundary } from "../../../SplitScreen/ErrorBoundary";
import { Navbar } from "../../../RTL/NavbarRTL/NavbarRtl";
import { NavbarLft } from "../../../LTR/NavbarLTR/NavbarLtr";
import img4 from "../../../../assets/images/jehad.jpg";
import Form from "../Form";

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
              style={{ background: "#031c07" }}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1, x: 0 }}
              className="leftPane"
            >
              {" "}
              <Navbar />
              <img src={img4} alt="Eiffel Tower" width="100%" height="100%" />
            </motion.div>
          }
          right={
            <motion.div
              style={{ opacity: 0, }}
              animate={{ opacity: 1 }}
              className="rightPane"
            >
              <NavbarLft />
              <Form/>
            </motion.div>
          }
        />
      ) : (
        <SplitScreen
          direction="row"
          left={
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="leftPane"
            >
              <NavbarLft />
              <div className={styles.page}>
             
                  <img src={img4} alt="Eiffel Tower" width="100%"  height="100%"/>
         
              </div>
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
              <Form/>
            </motion.div>
          }
        />
      )}
    </ErrorBoundary>
  );
}
