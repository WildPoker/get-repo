import React from "react";
import useStyles from "./styles";

import { useAll } from "../../contexts";

const UserInfo = () => {
  const classes = useStyles();
  const { userData } = useAll();
  return (
    <div className={classes.userInfo}>
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
