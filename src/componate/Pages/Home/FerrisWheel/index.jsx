import React from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import reactJsIcon from '../../../../assets/tech-icons/react-js.svg';
import laravelIcon from '../../../../assets/tech-icons/laravel.svg';
import cssIcon from '../../../../assets/tech-icons/css.svg';
import firebaseIcon from '../../../../assets/tech-icons/firebase.svg';
import gitIcon from '../../../../assets/tech-icons/git.svg';
import htmlIcon from '../../../../assets/tech-icons/html.svg';
import javascriptIcon from '../../../../assets/tech-icons/javascript.svg';
import mongodbIcon from '../../../../assets/tech-icons/mongodb.svg';
import mysqlIcon from '../../../../assets/tech-icons/mysql.svg';
import nodejsIcon from '../../../../assets/tech-icons/node-js.svg';
import phpIcon from '../../../../assets/tech-icons/php.svg';
import tailwindcssIcon from '../../../../assets/tech-icons/tailwindcss.svg';
function FerrisWheel() {
  const ferrisOfTechs = [
    reactJsIcon,
    laravelIcon,
    cssIcon,
    firebaseIcon,
    gitIcon,
    htmlIcon,
    javascriptIcon,
    mongodbIcon,
    mysqlIcon,
    nodejsIcon,
    phpIcon,
    tailwindcssIcon ,

  ];

  return (
    <div className="FerrisWheel" >
      {ferrisOfTechs.map((tech, index) => (
        <motion.div
          className="ferris-wheel-techs"
          key={index + 1}
          initial="initial"
          animate={['animate', 'initialHide']}
          variants={{
            initial: {
              opacity: 0,
            },
            initialHide: {
              opacity: 1,
              transition: {
                delay: index + 1,
              },
            },
            animate: {
              rotate: -360,
              transition: {
                duration: ferrisOfTechs.length,
                repeat: Infinity,
                delay: index + 1,
                ease: 'linear',
              },
            },
          }}
         
        >
          <div className="image-parent">
            <img
              className="tech-icon"
              src={tech}
              alt={tech}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default FerrisWheel;
