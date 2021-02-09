import { makeStyles } from "@material-ui/core/styles";

const color1 = "#c9d1d9";
const color2 = "#8b949e";
const color3 = "#58a6ff";
const color4 = "#30363d";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    maxWidth: "100vw",
  },
  grid: {
    flexGrow: 1,
  },
  avatarHolder: {
    marginTop: "50px",
    display: "inline-block",
  },
  userInfo: {
    color: color1,
    textAlign: "center",
    "& h3": {
      color: color2,
    },
    "& hr": {
      marginTop: "50px",
      height: "2px",
      borderWidth: "0",
      color: "gray",
      backgroundColor: "#30363d",
    },
  },
  avatar: {
    borderRadius: "50%",
    border: "1px solid #30363d",
    height: "auto",
  },
  gridRoot: {
    textAlign: "center",
    padding: "10px",
  },
  cardRoot: {
    position: "relative",
    border: "1px solid #30363d",
    backgroundColor: "transparent",
    borderRadius: "20px",
    height: "200px",
    color: color1,
    boxShadow: "4px 6px #0f1319",
    "& h3 ": {
      color: color3,
      fontWeight: "600",
      textTransform: "capitalize",
    },
    " & .repoInfo": {
      paddingTop: "10px",
      fontSize: "12px",
      "& a": {
        marginTop: "20px",
        fontWeight: "bold",
        color: color1,
        textDecoration: "none",
      },
    },
    " & .MuiCardActions-root": {
      position: "absolute",
      right: "0",
      bottom: "0px",
      "& button": {
        color: color1,
        fontWeight: "bold",
        borderRadius: "0px",
        borderBottom: "2px solid transparent",
      },
      "& button:hover": {
        borderBottom: "2px solid #58a6ff",
      },
    },
  },
}));

export default useStyles;
