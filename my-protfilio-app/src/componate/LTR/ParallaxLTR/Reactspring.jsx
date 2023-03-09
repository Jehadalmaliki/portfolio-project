import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { animated } from '@react-spring/web'

import styles from './styles.module.css';
import img1 from "../../../assets/images/img1.jpeg";
import img2 from "../../../assets/images/img2.jpeg";
import img3 from "../../../assets/images/img3.jpeg";
import img4 from "../../../assets/images/img4.jpeg";
import img5 from "../../../assets/images/img5.jpeg";


const Page = ({ offset }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.6} >
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
    <div style={{ height: '100vh',}}>
      <div style={{ background: '#dfdfdf' }}>
        <Parallax className={styles.container} ref={parallax} pages={3} vertical>
        <Page offset={0} />
          <ParallaxLayer offset={0} speed={0.5} style={{ backgroundImage: `url(${img1})`, width: '49.8vw', height: '70%' }} />
          <ParallaxLayer className={styles.textOverlay} offset={0.2} speed={1}>
            <span className={styles.text}>Text for Image 1</span>
          </ParallaxLayer>

          <Page offset={1} />
          <ParallaxLayer offset={1} speed={1} style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover',  width: '49.8vw', height: '70%' }} />
          <ParallaxLayer className={styles.textOverlay} offset={1} speed={1}>
            <span className={styles.text}>Text for Image 2</span>
          </ParallaxLayer>


          <Page offset={2}  />
          <ParallaxLayer offset={2} speed={0.5} style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', width: '49.8vw', height: '70%' }} />
          <ParallaxLayer className={styles.textOverlay} offset={2} speed={2}>
            <span className={styles.text}>Text for Image 3</span>
          </ParallaxLayer>

         
        </Parallax>
      </div>
    </div>
  );
};

export default Reactspring;
