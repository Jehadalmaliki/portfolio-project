import React from 'react';
import { motion } from 'framer-motion';
import './Title.css';

const Title = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='title'
    >
      <motion.span
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='title-word'
      >
        Hello,
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
        className='title-word'
      >
        <motion.span
          whileHover={{ scale: 1.2 }}
          className='title-letter'
        >
          W
        </motion.span>
        orld! 
      </motion.span>
    </motion.div>
    
  );
};

export default Title;
