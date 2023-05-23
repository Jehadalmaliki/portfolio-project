export const NavbarLtlstyles = {
    nav: {
      display: "flex", 
      height: "10vh",
      padding: "0 ",
      borderBottom: "2px solid #43ee61",
      margin:" 0 0rem",
      position: "fixed", 
      top: 0,
      left:0,
      right:0, 

    
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
      borderBottomColor: "#43ee61",
        textTransform: "uppercase",
    },
    a: {
       
   
        height: "50%",
        color: "#43ee61",
        textDecoration: "none",
        position: "relative",
        fontSize: "1.3rem",
     padding: "0.5rem 0",
        transition: "all 0.2s ease",
     
      
      },
      aHover: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
        margin:"0.1rem 0.5rem",
        color: "#43ee61",
        textDecoration: "none",
        position: "relative",
        fontSize: "1.2rem",
        border: "1px solid transparent",
        borderRadius: "50%",
        padding: "0.5rem 0.5rem",
        transition: "all 0.2s ease",
        borderColor: "#43ee61",
       
      },
      aBefore: {
        content: "''",
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "0%",
        height: "2px",
        transition: "all 0.2s ease",
      },
    aHoverBefore: {
      opacity: "1",
    },
   
  };
  