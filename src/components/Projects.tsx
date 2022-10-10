import React from "react";
import { useProjects } from "../api/ProjectAPI";
import Project from "./Project";

const Projects: React.FC = () => {
  const { data = [], isLoading } = useProjects();
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>Projects</h2>
      <Project project={data[61]} />
    </div>
  );
};

export default Projects;
