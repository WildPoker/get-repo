import { makeStyles } from "@material-ui/core/styles";

const color1 = "#c9d1d9";
const color2 = "#8b949e";
const color3 = "#58a6ff";

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
  tfHolder: {
    display: "flex",
    marginBottom: "10px",
  },
  textField: {
    flexGrow: 0.5,
    margin: "auto",
    "& input ": {
      color: color1,
    },
    "& .MuiFormLabel-root": {
      color: color1,
    },
    "& label.Mui-focused": {
      color: color1,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#30363d",
      },
      "&:hover fieldset": {
        borderColor: "#c7cfb7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#388BFD",
        borderWidth: "3px",
      },
    },
  },
  button: {
    position: "fixed",
    top: "20px",
    left: "20px",
    backgroundColor: "transparent !important",
    color: color3,
  },
  userInfo: {
    color: color1,
    textAlign: "center",
    marginBottom: "25px",
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
    height: "150px",
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
