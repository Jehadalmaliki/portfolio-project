export const styles = {
  container: {
    display: "flex",
    backgroundColor: "#43ee61",
    height: "calc(100vh - 0px)",
   
  },
  leftPane: {
    flex: 1,  
    height: "100%",
    opacity: 0,
    padding: 0,
    margin: 0,

  borderRight: "1px solid #43ee61",
    "@media(max-width: 767px)": {
      borderRight: "none",
    },
  },
  rightPane: {
 
    flex: 1,
    height: "100%",
    opacity: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "#031c07",
  },
};
