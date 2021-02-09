import React, { useState } from "react";
import axios from "axios";
import useStyles from "./styles";
import { useAll } from "../../contexts";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Reposotories() {
  const classes = useStyles();
  const {
    project,
    username,
    setSelectedProject,
    setMarkdown,
    setLoading,
    setError,
  } = useAll();
  const projectArray = project.data;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSelectedProject(e.target.name);
    try {
      setLoading(true);
      const resultReadme = await axios(
        `https://api.github.com/repos/${username}/${e.target.name}/readme`
      );
      const resultMarkdown = await axios(resultReadme.data.download_url);
      //
      setMarkdown(resultMarkdown.data);
      setLoading(false);
      history.push(`/projects/${username}/${e.target.name}/readme`);
    } catch {
      setError("Error");
    }
  };

  return (
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
                      <p>Created at: {value.created_at}</p>
                      <a href={value.html_url}>{value.html_url}</a>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button>View</Button>
                    <Button type="submit">README</Button>
                  </CardActions>
                </form>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Reposotories;
