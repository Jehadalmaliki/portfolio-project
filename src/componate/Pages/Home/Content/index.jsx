import React from 'react'
import './AnimatedSentence.css';
import { motion } from "framer-motion";

function  Content() {
    const sentence = "<p>I'm a Full-Stack Web based in , Taiz Yemen.</p>".split('');

    return (
      <div className="sentence-container">
        {sentence.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.2 }}
            
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
  };

export default  Content