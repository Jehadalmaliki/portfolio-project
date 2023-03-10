import { motion } from "framer-motion";
import { styles } from "./styles";
const JehadAliText = () => {

 
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotateX: 45, rotateY: 45 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      <motion.div style={styles.div}>
        <motion.div style={styles.innerDiv}>J</motion.div>
        <motion.div style={styles.innerDiv90}>A</motion.div>
        <motion.div style={styles.innerDiv180}>A</motion.div>
        <motion.div style={styles.innerDivMinus90}>A</motion.div>
        <motion.div style={styles.innerDivX90}>A</motion.div>
        <motion.div style={styles.innerDivXMinus90}>A</motion.div>
        <motion.div style={styles.innerDivX180}>A</motion.div>
      </motion.div>
    </motion.div>
  );
};

export default JehadAliText;
