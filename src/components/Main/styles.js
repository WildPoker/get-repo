import { makeStyles } from "@material-ui/core/styles";

const textColor = "#A5B5BB";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
  },

  card: {
    height: "110px",
    width: "270px",
    margin: "auto",
    borderRadius: "20px !important",
    backgroundColor: "#161B22 !important",
  },
  form: {
    height: "100%",
    width: "100%",
    alignContent: "center",
  },

  textField: {
    width: "80%",
    margin: "25px 5px 0 10px !important",
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
        borderColor: "#21262D",
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
    width: "10%",
    color: "#A5B5BB",
    height: "50%",
    border: "2px solid #21262D",
    borderRadius: "5px",
    marginTop: "25px",
    backgroundColor: "transparent !important",
  },
}));

export default useStyles;
