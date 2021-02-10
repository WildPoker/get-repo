import { makeStyles } from "@material-ui/core/styles";

const textColor = "#A5B5BB";
const color1 = "#c9d1d9";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    position: "relative",
    textAlign: "center",
    "& h1": {
      color: color1,
      fontSize: "32px",
      margin: "100px 0 25px",
    },
    "& a": {
      color: color1,
      fontSize: "16px",
      textShadow: "1px 1px #58a6ff",
    },
    "& .logo": {
      marginTop: "50px",
      color: "white",
      paddingBottom: "25px",
      borderBottom: "1px solid #30363d",
      "& .MuiSvgIcon-root": {
        height: "100px",
        width: "100px",
      },
    },
    "& .inputField": {
      paddingBottom: "60px",
      borderBottom: "1px solid #30363d",
      "& .error": {
        marginRight: "40px",
        marginTop: "10px",
        color: "#f44336",
        marginBottom: "-34px",
      },
    },
  },
  textField: {
    flexGrow: 1,
    margin: "60px 10px 0 15px !important",
    "& input ": {
      color: textColor,
    },
    "& .MuiFormLabel-root": {
      color: textColor,
    },
    "& label.Mui-focused": {
      color: textColor,
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
    marginTop: "60px !important",
    backgroundColor: "transparent !important",
    border: "2px solid #30363d !important",
    color: "#58a6ff !important",
    "&:hover": {
      border: "2px solid #c7cfb7 !important",
    },
  },
}));

export default useStyles;
