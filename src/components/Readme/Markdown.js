import React from "react";
import ReactMarkdown from "react-markdown";
import { useAll } from "../../contexts";
import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Fab } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const Markdown = () => {
  const { selectedProject, markdown, returnProjects } = useAll();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Fab className={classes.button} onClick={returnProjects}>
          <ArrowBackIcon />
        </Fab>
        <Typography component="div" className={classes.Typography}>
          <div className="header">
            <p>
              <GitHubIcon style={{ marginRight: "15px" }} />
              <a style={{ fontSize: "14px" }}>{selectedProject}</a> /{" "}
              <a style={{ fontSize: "14px", color: "#C9D1D9" }}>README.md</a>
            </p>
          </div>
          <div className={classes.mdHolder}>
            <ReactMarkdown source={markdown} />
          </div>
        </Typography>
      </Container>
    </div>
  );
};

export default Markdown;
