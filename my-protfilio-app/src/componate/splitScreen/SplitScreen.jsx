import { motion } from "framer-motion";
import { styles } from "./SplitScreenOverride.styles";
export default function SplitScreen(props) {
    return (
      <motion.dev
        style={{
          ...styles.container,
          flexDirection: props.direction,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          style={{
            ...styles.leftPane,
            x: props.direction === "row" ? -200 : 0, // Move left pane left if direction is row
            y: props.direction === "column" ? -200 : 0, // Move left pane up if direction is column
            opacity: 0, // Start with 0 opacity
          }}
          animate={{
            x: 0, // Move back to original position
            y: 0, // Move back to original position
            opacity: 1, // Fade in
          }}
          transition={{ duration:0.8 }}
        >
          {props.left}
        </motion.div>
        <motion.div
          style={{
            ...styles.rightPane,
            x: props.direction === "row" ? 200 : 0, // Move right pane right if direction is row
            y: props.direction === "column" ? 200 : 0, // Move right pane down if direction is column
            opacity: 0, // Start with 0 opacity
          }}
          animate={{
            x: 0, // Move back to original position
            y: 0, // Move back to original position
            opacity: 1, // Fade in
          }}
          transition={{ duration: 0.5 }}
        >
          {props.right}
        </motion.div>
      </motion.dev>
    );
  }