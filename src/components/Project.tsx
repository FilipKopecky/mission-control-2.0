import React from "react";
import {useProject, useProjectViaID} from "../api/ProjectAPI";
import { Project as IProject } from "../@types";
import {useLocation, useParams} from "react-router-dom";

interface ProjectDetailInterface {
  project: IProject;
}

const Project: React.FC = () => {
  let location = useLocation();
  if(location.state?.project){
      return <ProjectDetail project={location.state.project}/>
  }
  return <ProjectDetailFetch/>;

};

const ProjectDetail: React.FC<ProjectDetailInterface> = ({project}) => {
    console.log(project);
    return <h2>Project - detail - PASSED FROM PREVIOUS</h2>;
}

const ProjectDetailFetch: React.FC = () => {
    let params = useParams();
    const id = params['*'] ?? "";
    const { data = [], isLoading } = useProjectViaID(id);
    if (isLoading) return <h2>Loading...</h2>;
    console.log(data);
    return <h2>Project - detail</h2>;
}



export default Project;
