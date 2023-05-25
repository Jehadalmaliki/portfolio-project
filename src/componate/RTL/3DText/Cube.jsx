import { motion } from "framer-motion";

const Cube = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "6vh",
        paddingRight: "2px",
      }}
    >
      <motion.div
        style={{
          width: "20px",
          height: "20px",
          position: "relative",
          transformStyle: "preserve-3d",
          rotateX: 45,
          rotateY: 45,
          border: "2px solid #43ee61",
          boxSizing: "border-box",
        }}
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          style={{
            width: "20px",
            height: "20px",
            position: "absolute",
            transform: "translateZ(10px)",
            border: "2px solid #43ee61",
            boxSizing: "border-box",
          }}
        />
        <motion.div
          style={{
            width: "20px",
            height: "20px",
            position: "absolute",
            transform: "rotateY(90deg) translateZ(10px)",
            border: "2px solid #43ee61",
            boxSizing: "border-box",
          }}
        />
        <motion.div
          style={{
            width: "20px",
            height: "20px",
            position: "absolute",
            transform: "rotateY(180deg) translateZ(10px)",
            border: "2px solid #43ee61",
            boxSizing: "border-box",
          }}
        />
        <motion.div
          style={{
            width: "20px",
            height: "20px",
            position: "absolute",
            transform: "rotateY(-90deg) translateZ(10px)",
            border: "2px solid #43ee61",
            boxSizing: "border-box",
          }}
        />
        <motion.div
          style={{
            width: "20px",
            height: "20px",
            position: "absolute",
            transform: "rotateX(90deg) translateZ(10px)",
            border: "2px solid #43ee61",
            boxSizing: "border-box",
          }}
        />
        <motion.div
          style={{
            width: "20px",
            height: "20px",
            position: "absolute",
            transform: "rotateX(-90deg) translateZ(10px)",
            border: "2px solid #43ee61",
            boxSizing: "border-box",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Cube;
