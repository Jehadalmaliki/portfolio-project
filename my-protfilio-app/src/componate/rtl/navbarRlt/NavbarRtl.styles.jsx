export const Navbarstyles = {
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "8vh",
      borderBottom: "1px solid #43ee61",
    },
    ul: {
      display: "flex",
      listStyle: "none",     
    },
    li: {
      marginRight: "2rem",
      position: "relative",
      transition: "border-color 0.2s ease-in-out",
    },
    liHover: {
      borderBottom: "1px solid transparent",
      borderBottomColor: "#43ee61",
      transition: "borderBottomColor 0.9s ease-in-out",
      textTransform: "uppercase",
    },
    a: {
      display: "block",
      position: "relative",
      textDecoration: "none",
      padding: "5px",
      fontSize: "18px",
      fontFamily: "sans-serif",
      color: "#43ee61",
      textTransform: "uppercase",

    },
    aBefore: {
      position: "absolute",
      top: "100%",
      left: "0",
      width: "100%",
      height: "2px",
      backgroundColor: "#43ee61",
      content: '""',
      opacity: "0",

    },
    aHover: {
      color: "#43ee61",
      zIndex: "1",
      textDecoration: "none" 
    },
    aHoverBefore: {
      opacity: "1",
    },
   
  };
  