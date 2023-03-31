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
    <div >
      <div style={{ background: "#dfdfdf" }}>
        <Parallax
          className={styles.container}
          ref={parallax}
          pages={4}
          vertical
        >
          <Page offset={0} />
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: "contain",
              width: "49.5vw",
              height:"auto",
              filter: "grayscale(50%)",
             
            }}
            
          />
          <ParallaxLayer className={styles.textOverlay} offset={0.2} speed={1}>
            <span className={styles.text}>Movie Project</span>
          </ParallaxLayer>

          <Page offset={1} />
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{
              backgroundImage: `url(${img6})`,
              backgroundSize: "contain",
              width: "49.5vw",
              height:"auto",
              filter: "grayscale(50%)",
            }}
            
          />
          <ParallaxLayer className={styles.textOverlay} offset={1} speed={3}>
            <span className={styles.text}>Babor  Project </span>
          </ParallaxLayer>

          <Page offset={2} />
          <ParallaxLayer
            offset={2}
            speed={0.1}
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "contain",
              width: "49.5vw",
              height:"auto",
              filter: "grayscale(50%)",
            
                
            }}
            className={styles.img5}
          />

          <ParallaxLayer className={styles.textOverlay} offset={2} speed={2}>
            <span className={styles.text}>Wazeef pROJECT</span>
          </ParallaxLayer>

          <Page offset={3} />
          <ParallaxLayer
            offset={3}
            speed={0.5}
            style={{
              backgroundImage: `url(${img6})`,
              backgroundSize: "contain",
              width: "49.5vw",
              height:"auto",
              filter: "grayscale(50%)",
            
                
            }}
            className={styles.img5}
          />

          <ParallaxLayer className={styles.textOverlay} offset={3} speed={1}>
            <span className={styles.text}>Wazeef pROJECT</span>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default Reactspring;

