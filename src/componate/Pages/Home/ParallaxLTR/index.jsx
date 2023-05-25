import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import img1 from "../../../../assets/images/Babor.webp";
import img2 from "../../../../assets/images/madlab.svg";
import img4 from "../../../../assets/images/more.webp";
import img5 from "../../../../assets/images/job.svg";
import img6 from "../../../../assets/images/des.svg";
import img7 from "../../../../assets/images/healing.svg";

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
    <div>
      <div style={{ background: "#dfdfdf" }}>
        
        <Parallax
          className={styles.container}
          ref={parallax}
          pages={6}
          vertical
        >
          <Page offset={0} />
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: "contain",
              width: "49.8vw",
              height: "auto",
              filter: "grayscale(50%)",
            }}
          />
          <ParallaxLayer className={styles.textOverlay} offset={0.1} speed={1}>
          <span className={styles.text}>
              <p> Movie project </p> |
              <a href="https://202212-giz-ye-few.github.io/more-than-one/" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              |
              <a href="https://github.com/202212-GIZ-YE-FEW/more-than-one" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>

            </span>
   
          </ParallaxLayer>

          <Page offset={1} />
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{
              backgroundImage: `url(${img6})`,
              backgroundSize: "contain",
              width: "49.8vw",
              height: "auto",
              filter: "grayscale(50%)",
            }}
          />
          <ParallaxLayer className={styles.textOverlay} offset={1.2} speed={1}>
            <span className={styles.text}>
              <p>FiftyStore project </p> |
              <a href="https://fiftystore.vercel.app/" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              |
              <a href="https://github.com/202212-GIZ-YE-FEW/react-ecommerce-fiftystore" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </span>
          </ParallaxLayer>

          <Page offset={2} />
          <ParallaxLayer
            offset={2}
            speed={0.1}
            style={{
              backgroundImage: `url(${img5})`,
              backgroundSize: "contain",
              width: "49.8vw",
              height: "auto",
              filter: "grayscale(20%)",
            }}
            className={styles.img5}
          />

          <ParallaxLayer className={styles.textOverlay} offset={2.5} speed={1}>
          <dev className={styles.text}>
              <p>Wazeef project</p> |
              <a
                href="https://jehadalmaliki.github.io/Jobwebsite/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              |
              <a href="https://github.com/Jehadalmaliki/-Laravel-project-" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </dev>
          </ParallaxLayer>

          <Page offset={3} />
          <ParallaxLayer
            offset={3}
            speed={0.5}
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "contain",
              width: "49.8vw",
              height: "auto",
              filter: "grayscale(40%)",
            }}
            className={styles.img5}
          />

          <ParallaxLayer className={styles.textOverlay} offset={3} speed={1}>
            <span className={styles.text}>
              <p> Babor project </p> |
              <a href="https://github.com/Jehadalmaliki/Babor" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </span>
          </ParallaxLayer>

          <Page offset={4} />
          <ParallaxLayer
            offset={4}
            speed={0.5}
            style={{
              backgroundImage: `url(${img7})`,
              backgroundSize: "contain",
              width: "49.8vw",
              height: "auto",
              filter: "grayscale(40%)",
            }}
            className={styles.img5}
          />

          <ParallaxLayer className={styles.textOverlay} offset={4.2} speed={1}>
            <dev className={styles.text}>
              <p>Therapist project</p> |
              <a
                href="https://therapistidev.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              |
              <a href="https://github.com/202212-GIZ-YE-FEW/iDev" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </dev>
          </ParallaxLayer>

          <Page offset={5} />
          <ParallaxLayer
            offset={5}
            speed={0.5}
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "contain",
              width: "49.8vw",
              height: "auto",
              filter: "grayscale(30%)",
            }}
            className={styles.img5}
          />

          <ParallaxLayer className={styles.textOverlay} offset={5.2} speed={1}>
           
            <span className={styles.text}>
              <p> MIdLab project </p> |
              <a href="https://202212-giz-ye-few.github.io/mad-libs-tech-titans/" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              |
              <a href="https://github.com/202212-GIZ-YE-FEW/mad-libs-tech-titans" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </span>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default Reactspring;
