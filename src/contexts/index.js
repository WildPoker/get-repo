import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AllContexts = React.createContext();

export function useAll() {
  return useContext(AllContexts);
}

export function AllProvider({ children }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState([]);
  const [project, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [markdown, setMarkdown] = useState("");
  const history = useHistory();

  const settingUsername = async () => {
    try {
      const resultUser = await axios(
        `https://api.github.com/users/${username}`
      );
      setLoading(true);
      const resultProject = await axios(
        `https://api.github.com/users/${username}/repos`
      );
      setUserData(resultUser);
      setProject(resultProject);
      setLoading(false);
      setError("");
      history.push(`/projects/${username}`);
    } catch {
      setError("Username not found");
    }
  };

  const settingRepositories = async (value) => {
    try {
      setError("");
      const resultReadme = await axios(
        `https://api.github.com/repos/${username}/${value}/readme`
      );
      setLoading(true);
      const resultMarkdown = await axios(resultReadme.data.download_url);
      //
      setMarkdown(resultMarkdown.data);
      setLoading(false);
      history.push(`/projects/${username}/${value}/readme`);
    } catch {
      setError("Error");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const returnMain = () => {
    history.push(`/`);
    setUsername("");
    setError("");
  };

  const returnProjects = () => {
    history.push(`/projects/${username}`);
  };

  const value = {
    username,
    userData,
    project,
    error,
    loading,
    selectedProject,
    markdown,
    returnProjects,
    settingRepositories,
    returnMain,
    settingUsername,
    setMarkdown,
    setSelectedProject,
    setProject,
    setLoading,
    setError,
    setUserData,
    setUsername,
  };

  return <AllContexts.Provider value={value}>{children}</AllContexts.Provider>;
}
