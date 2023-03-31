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

const ReactspringB = () => {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ background: "#dfdfdf" }}>
        <Parallax
          className={styles.container}
          ref={parallax}
          pages={3}
          vertical
        >
          <Page offset={0} />
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: "contain",
              width: "97vw",
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
              width: "97vw",
              height:"auto",
              filter: "grayscale(50%)",
            }}
            
          />
          <ParallaxLayer className={styles.textOverlay} offset={1} speed={1}>
            <span className={styles.text}>Babor Auction Project </span>
          </ParallaxLayer>

          <Page offset={2} />
          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "contain",
              width: "97vw",
              height:"auto",
              filter: "grayscale(50%)",
            
                
            }}
            className={styles.img5}
          />

          <ParallaxLayer className={styles.textOverlay} offset={2} speed={2}>
            <span className={styles.text}>Wazeef Job pROJECT</span>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default ReactspringB;

