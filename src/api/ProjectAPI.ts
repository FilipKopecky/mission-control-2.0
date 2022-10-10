import {useQuery} from "@tanstack/react-query";
import Ajax from "../utils/Ajax";
import {getWorkspacesUrl} from "./endpoints";
import {Workspace} from "../@types";

const getProjects = (): Promise<Workspace[]> => Ajax.get(getWorkspacesUrl()).then(resp => resp.data);


export const useProjects = () => {
    return useQuery(["projects"], getProjects);
}