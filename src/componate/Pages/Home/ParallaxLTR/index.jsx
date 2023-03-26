import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion"
import styles from "./styles.module.css";
import img1 from "../../../../assets/images/Babor.png";
import img2 from "../../../../assets/images/madLab.png";
import img3 from "../../../../assets/images/img3.jpeg";
import img4 from "../../../../assets/images/more.png";
import img5 from "../../../../assets/images/job.png";
import img6 from "../../../../assets/images/des.png"


const Reactspring = () => {

  const { scrollYProgress } = useScroll();
  

  return (
    <motion.div className={styles.container}   >
      <div className={styles.page}>
        <div
          className={styles.parallaxLayer}
          style={{
            backgroundImage: `url(${img4})`,
            filter: "grayscale(60%)",
          }}
        >
          <div className={styles.textOverlay}>
            <span className={styles.text}>Movie Project</span>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div
          className={styles.parallaxLayer}
          style={{
            backgroundImage: `url(${img6})`,
            filter: "grayscale(60%)",
          }}
        >
          <div className={styles.textOverlay}>
            <span className={styles.text}>Babor Auction Project</span>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div
          className={styles.parallaxLayer}
          style={{
            backgroundImage: `url(${img2})`,
            filter: "grayscale(30%)",
          }}
        >
          <div className={styles.textOverlay}>
            <span className={styles.text}>Wazeef Job Project</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reactspring;

