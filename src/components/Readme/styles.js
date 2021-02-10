import { makeStyles } from "@material-ui/core/styles";

const color1 = "#c9d1d9";
const color3 = "#58a6ff";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    maxWidth: "100vw",
    color: color1,
  },
  button: {
    position: "fixed",
    top: "20px",
    left: "20px",
    backgroundColor: "transparent !important",
    color: color3,
  },
  Typography: {
    position: "relative",
    border: "1px solid #30363d",
    borderRadius: "6px",
    marginBottom: "50px",
    marginTop: "50px",
    minHeight: "100vh",
    whiteSpace: "normal",
    wordBreak: "break-all",
    "& .header": {
      backgroundColor: "#161b22",
      padding: "16px",
      top: "0px",
      alignItems: "center",
      margin: "-1px -1px 0",
      border: "1px solid #30363d",
      borderRadius: "6px",
    },
    "& h1, h2": {
      paddingBottom: "20px",
      borderBottom: "1px solid #30363d",
      margin: "15px 0 10px 0",
    },
    "& code": {
      backgroundColor: "#f0f6fc26",
      padding: ".2em .4em",
      borderRadius: "6px",
      whiteSpace: "normal",
      wordBreak: "break-all",
    },
    "& a": {
      textDecoration: "none",
      color: color3,
    },
    "& p": {
      fontSize: "16px",
      lineHeight: 1.5,
    },
  },
  mdHolder: {
    padding: "25px 100px",
  },
}));

export default useStyles;
