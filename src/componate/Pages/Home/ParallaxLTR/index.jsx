import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated } from "@react-spring/web";

import styles from "./styles.module.css";
import img1 from "../../../../assets/images/Babor.png";
import img2 from "../../../../assets/images/madLab.png";
import img3 from "../../../../assets/images/img3.jpeg";
import img4 from "../../../../assets/images/more.png";
import img5 from "../../../../assets/images/job.png";
import img6 from "../../../../assets/images/des.png"

const Page = ({ offset }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.6}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>
  </>
);
const Reactspring = () => {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div
          className={styles.parallaxLayer}
          style={{
            backgroundImage: `url(${img6})`,
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
            backgroundImage: `url(${img4})`,
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
    </div>
  );
};

export default Reactspring;

