import React from "react";
import useStyles from "./styles";
import { useAll } from "../../contexts";
import { Fab } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Slide from "@material-ui/core/Slide";
import { Alert } from "@material-ui/lab";

const UserInfo = () => {
  const classes = useStyles();
  const { userData, returnMain, error } = useAll();

  const handleClick = () => {
    returnMain();
  };

  return (
    <div className={classes.userInfo}>
      {error ? (
        <Slide direction="down" in={error} mountOnEnter unmountOnExit>
          <Alert
            variant="filled"
            severity="error"
            style={{ position: "fixed", top: "10px", right: "10px" }}
          >
            README Not Found!
          </Alert>
        </Slide>
      ) : null}
      <Fab className={classes.button} onClick={handleClick}>
        <ArrowBackIcon />
      </Fab>
      <div className={classes.avatarHolder}>
        <a>
          <img
            width="200"
            height="200"
            src={userData.data.avatar_url}
            className={classes.avatar}
          />
        </a>
      </div>
      <div>
        <h2>{userData.data.name}</h2>
        <h3>{userData.data.login}</h3>
        <h4>{userData.data.bio}</h4>
        <h6>
          {userData.data.followers} follower · {userData.data.following}{" "}
          following
        </h6>
      </div>
      <hr />
    </div>
  );
};

export default UserInfo;
