export const styles = {
  container: {
    display: "flex",
    backgroundColor: "#031c07",
    height: "calc(100vh - 20px)",
    padding: 0,
    margin: 0,
  },
  leftPane: {
    flex: 1,
    backgroundColor: "#004d1f",
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
  },
};
