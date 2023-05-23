import { motion } from "framer-motion";
import './SplitScreenOverride.styles.css'
export default function SplitScreen(props) {
    return (
      <motion.dev
        style={{
     
          flexDirection: props.direction,
        }}
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className= "container"
      >
        <motion.div
          style={{
     
            x: props.direction === "row" ? -200 : 0, // Move left pane left if direction is row
            y: props.direction === "column" ? -200 : 0, // Move left pane up if direction is column
            opacity: 0, // Start with 0 opacity
          }}
          animate={{
            x: 0, // Move back to original position
            y: 0, // Move back to original position
            opacity: 1, // Fade in
          }}
          className= "leftPane"
        >
          {props.left}
        </motion.div>
        <motion.div
          style={{
          
            x: props.direction === "row" ? 200 : 0, // Move right pane right if direction is row
            y: props.direction === "column" ? 200 : 0, // Move right pane down if direction is column
            opacity: 0, // Start with 0 opacity
          }}
          animate={{
            x: 0, // Move back to original position
            y: 0, // Move back to original position
            opacity: 1, // Fade in
          }}
          className="rightPane"
        >
          {props.right}
        </motion.div>
      </motion.dev>
    );
  }