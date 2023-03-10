import { motion } from "framer-motion";

const JehadAliText = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotateX: 45, rotateY: 45 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "inline-block",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#43ee61",
        textShadow: "1px 1px #000",
        transformStyle: "preserve-3d",
        marginBottom:"10rem ",
        fontFamily:  "cursive",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "translateZ(25px)",
          }}
        >
          J
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateY(90deg) translateZ(25px)",
          }}
        >
        A 
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(25px)",
          }}
        >
  A
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateY(-90deg) translateZ(25px)",
          }}
        >
          A
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateX(90deg) translateZ(25px)",
          }}
        >
         A
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateX(-90deg) translateZ(25px)",
          }}
        >
    A
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg) translateZ(25px)",
          }}
        >
       A
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default JehadAliText;
