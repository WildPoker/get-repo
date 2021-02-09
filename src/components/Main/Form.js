import React from "react";
import axios from "axios";
import { useAll } from "../../contexts";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { Card, TextField } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Form = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    userData,
    project,
    loading,
    username,
    setUsername,
    setProject,
    setLoading,
    setError,
    setUserData,
  } = useAll();

  const handleChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const resultUser = await axios(
        `https://api.github.com/users/${username}`
      );
      const resultProject = await axios(
        `https://api.github.com/users/${username}/repos`
      );
      setUserData(resultUser);
      setProject(resultProject);
      setLoading(false);
      history.push(`/projects/${username}`);
    } catch {
      setError("Username not found.");
    }
  };
  console.log(project);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            value={username}
            className={classes.textField}
            onChange={handleChange}
          />
          <button disabled={loading} type="submit" className={classes.button}>
            <ArrowForwardIosIcon />
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
