import React from 'react'
import { motion, useAnimationControls } from "framer-motion";
import { useState } from 'react'
import './styles.css';
export default function TextSpan({ childern }) {

    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);
    
    const rubberBand = () => {
        const times = [0, 0.4, 0.6, 0.7, 0.8, 0.9];
        controls.start({
          transform: [
            "scale3d(1,1,1)",
            "scale3d(1.4,0.55,1)",
            "scale3d(0.75,1.25,1)",
            "scale3d(1.25,0.85,1)",
            "scale3d(0.9,1.05,1)",
            "scale3d(1,1,1)",
          ],
          transition: {
            times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
          
          },
        });
        setIsPlaying(true);
      };
    return (
   
        <motion.span className='TextSpan'

            animate={controls}
            onMouseOver={() => {
                if (!isPlaying)
                    rubberBand()
            }}
            onAnimationComplete={() => setIsPlaying(false)}
            style={{   
                textShadow: "1px 1px #000",
                  transformStyle: "preserve-3d",
                
                }}
            
        >
            {childern === " " ? "\u00A0" : childern}
        </motion.span>
    )
}