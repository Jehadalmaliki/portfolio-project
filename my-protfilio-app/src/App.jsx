
import * as React from "react";
import { motion } from "framer-motion";


export default function App() {
  return (
    <div >
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
  
    
        }}
      >
        {props.left}
      </motion.div>
      <motion.div
        style={{
          flex: 1,
          height: "100%",
  
        }}
      >
        {props.right}
      </motion.div>
    </motion.div>
  );
}

export function SplitScreenOverride()  {
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
          left={<div style={{ marginBottom: "20px" }}></div>}
          right={<div>This is the right column.</div>}
        />
      ) : (
        <SplitScreen
          direction="row"
          left={<div style={{ marginRight: "20px" }}></div>}
          right={<div>This is the right column.</div>}
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
