import { useQuery } from "@tanstack/react-query";
import { Vocabulary } from "../@types";
import { getVocabulariesUrl } from "./endpoints";
import Ajax from "../utils/Ajax";

const getVocabularies = (): Promise<Vocabulary[]> =>
  Ajax.get(getVocabulariesUrl()).then((resp) => resp.data);

export const useVocabularies = () => {
  return useQuery(["vocabularies"], getVocabularies);
};
