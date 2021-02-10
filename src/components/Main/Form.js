import React from "react";
import axios from "axios";
import { useAll } from "../../contexts";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { Card, TextField, Container, Typography, Fab } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import GitHubIcon from "@material-ui/icons/GitHub";
import RingLoader from "react-spinners/RingLoader";

const Form = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    project,
    loading,
    username,
    setUsername,
    error,
    settingUsername,
  } = useAll();

  const handleChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleClick = async () => {
    settingUsername();
  };
  console.log(project);

  return (
    <>
      {loading ? (
        <>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#06090f",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <RingLoader color={"#58a6ff"} size={100} />
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={classes.root}>
            <Container maxWidth="md">
              <Typography component="div">
                <h1>
                  Welcome to{" "}
                  <a
                    style={{
                      fontSize: "inherit",
                      color: "#58a6ff",
                    }}
                  >
                    Get Repo
                  </a>
                </h1>
                <a>
                  This website will allow you to search for Github usernames and
                  be able to see the repositories
                </a>
                <p className="logo">
                  <GitHubIcon />
                </p>
                <div className="inputField">
                  {error ? <p className="error">{error}</p> : null}
                  <TextField
                    error={error && true}
                    label="Username"
                    name="username"
                    variant="outlined"
                    value={username}
                    className={classes.textField}
                    onChange={handleChange}
                  />
                  <Fab
                    disabled={loading}
                    className={classes.button}
                    onClick={handleClick}
                  >
                    <ArrowForwardIosIcon />
                  </Fab>
                </div>
              </Typography>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
