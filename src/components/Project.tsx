import React from "react";
import { useProject } from "../api/ProjectAPI";
import { Project as IProject } from "../@types";

interface ProjectDetail {
  project: IProject;
}

const Project: React.FC<ProjectDetail> = ({ project }) => {
  const { data = [], isLoading } = useProject(project);
  if (isLoading) return <h2>Loading...</h2>;
  console.log(data);
  return <h2>Project - detail</h2>;
};

export default Project;
