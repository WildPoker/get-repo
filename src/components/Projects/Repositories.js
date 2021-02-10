import React, { useState } from "react";
import UserInfo from "./UserInfo";
import useStyles from "./styles";
import { useAll } from "../../contexts";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import RingLoader from "react-spinners/RingLoader";

function Repositories() {
  const classes = useStyles();
  const {
    project,
    loading,
    setSelectedProject,
    settingRepositories,
  } = useAll();
  const projectArray = project.data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSelectedProject(e.target.name);
    settingRepositories(e.target.name);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

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
          <UserInfo />

          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ flexGrow: 1 }}
            >
              {projectArray.map((value) => {
                return (
                  <Grid
                    key={value.id}
                    item
                    lg={3}
                    md={4}
                    xs={12}
                    className={classes.gridRoot}
                  >
                    <Card className={classes.cardRoot}>
                      <form onSubmit={handleSubmit} name={value.name}>
                        <CardContent>
                          <Typography component="h3">{value.name}</Typography>
                          <div className="repoInfo">
                            <p>
                              <a style={{ fontWeight: "bold" }}>
                                {value.language}
                              </a>{" "}
                            </p>
                            <a>{value.html_url}</a>
                          </div>
                        </CardContent>
                        <CardActions>
                          <Button onClick={() => openInNewTab(value.html_url)}>
                            View
                          </Button>
                          <Button type="submit">README</Button>
                        </CardActions>
                      </form>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </>
      )}
    </>
  );
}

export default Repositories;
