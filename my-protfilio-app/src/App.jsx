import * as React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div>
      <SplitScreenOverride />
    </div>
  );
}

function SplitScreen(props) {
  return (
    <motion.div
      style={{
        display: "flex",
        backgroundColor: "#ccc",
        height: "calc(100vh - 60px)",
        flexDirection: props.direction,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        style={{
          flex: 1,
          backgroundColor: "#fdd",
          height: "100%",
          x: props.direction === "row" ? -200 : 0, // Move left pane left if direction is row
          y: props.direction === "column" ? -200 : 0, // Move left pane up if direction is column
          opacity: 0, // Start with 0 opacity
        }}
        animate={{
          x: 0, // Move back to original position
          y: 0, // Move back to original position
          opacity: 1, // Fade in
        }}
        transition={{ duration: 3 }}
      >
        {props.left}
      </motion.div>
      <motion.div
        style={{
          flex: 1,
          height: "100%",
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
    </motion.div>
  );
}

export function SplitScreenOverride() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ErrorBoundary>
      {isSmallScreen ? (
        <SplitScreen
          direction="column"
          left={
            <motion.div
              style={{ marginBottom: "20px", opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Left Column
            </motion.div>
          }
          right={
            <motion.div
              style={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Right Column
            </motion.div>
          }
        />
      ) : (
        <SplitScreen
          direction="row"
          left={
            <motion.div
              style={{ marginRight: "20px", opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Left Column
            </motion.div>
          }

          right={<motion.div
            style={{ marginRight: "20px", opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.5 }}
          >
           right Column
          </motion.div>}
        />
      )}
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // Fallback UI for error state
      return <div>Something went wrong.</div>;
    }

    // Render children

    return this.props.children;
  }
}
