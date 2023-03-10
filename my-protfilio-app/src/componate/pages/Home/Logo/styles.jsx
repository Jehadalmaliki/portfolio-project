export const styles = {
    container: {
      display: "inline-block",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#43ee61",
      textShadow: "1px 1px #000",
      transformStyle: "preserve-3d",
      marginBottom: "10rem",
      fontFamily: "cursive",
    },
    div: {
      position: "relative",
      transformStyle: "preserve-3d",
    },
    innerDiv: {
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: "translateZ(25px)",
    },
    innerDiv90: {
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: "rotateY(90deg) translateZ(25px)",
    },
    innerDiv180: {
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg) translateZ(25px)",
    },
    innerDivMinus90: {
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: "rotateY(-90deg) translateZ(25px)",
    },
    innerDivX90: {
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: "rotateX(90deg) translateZ(25px)",
    },
    innerDivXMinus90: {
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: "rotateX(-90deg) translateZ(25px)",
    },
    innerDivX180: {
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: "rotateX(180deg) translateZ(25px)",
    }
  };