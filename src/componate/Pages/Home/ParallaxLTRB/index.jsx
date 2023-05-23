import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import img1 from "../../../../assets/images/Babor.png";
import img2 from "../../../../assets/images/madLab.png";
import img4 from "../../../../assets/images/more.png";
import img6 from "../../../../assets/images/des.png"
import img7 from"../../../../assets/images/healing.png"



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
          pages={5}
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
          <span className={styles.text} >
            Movie project |<p></p><a href="">Demo</a>|<a href="">GitHub</a>

            </span>
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
          <span className={styles.text} >
            FiveStore project |<p></p><a href="">Demo</a>|<a href="">GitHub</a>

            </span>
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
          <span className={styles.text} >
         MIdLab project |<p></p><a href="" >Demo</a>|<a href="">GitHub</a>

            </span>
          </ParallaxLayer>

          <Page offset={3} />
          <ParallaxLayer
            offset={3}
            speed={0.5}
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "contain",
              width: "97vw",
              height:"auto",
              filter: "grayscale(50%)",
            
                
            }}
            className={styles.img5}
          />

          <ParallaxLayer className={styles.textOverlay} offset={3} speed={1}>
          <span className={styles.text} >
         Babor project |<p></p><a href="" >GitHub</a>

            </span>
          </ParallaxLayer>
          <Page offset={4} />
          <ParallaxLayer
            offset={4}
            speed={0.5}
            style={{
              backgroundImage: `url(${img7})`,
              backgroundSize: "contain",
              width: "97vw",
              height:"auto",
              filter: "grayscale(50%)",
            
                
            }}
            className={styles.img5}
          />

          <ParallaxLayer className={styles.textOverlay} offset={4} speed={1}>
          <span className={styles.text} >
       Therapist project |<p></p><a href="https://therapistidev.netlify.app/" >Demo</a>|<a href="">GitHub</a>

            </span>
          </ParallaxLayer>

        
        </Parallax>
      </div>
    </div>
  );
};

export default ReactspringB;

