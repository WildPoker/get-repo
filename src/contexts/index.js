import React, { useContext, useState, useEffect } from "react";

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

  const value = {
    username,
    userData,
    project,
    error,
    loading,
    selectedProject,
    markdown,
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
