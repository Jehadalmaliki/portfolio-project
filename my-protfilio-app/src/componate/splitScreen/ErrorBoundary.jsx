import * as React from "react"; 
export class ErrorBoundary extends React.Component {
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
  