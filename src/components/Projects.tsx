import React from "react";
import {useProjects} from "../api/ProjectAPI";

const Projects:React.FC = () => {
    const {data = [], isLoading} = useProjects();
    if(isLoading) return <h2>Loading...</h2>
    console.log(data);
    return (<h2>Projects</h2>);
}

export default Projects;