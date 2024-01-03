import { useQuery } from "react-query";
import { getMyFiles } from "../services/uploadService";

export const useStorage = () => {
  const { data, refetch } = useQuery({
    queryFn: () => getMyFiles(),
  });

  return {
    files: data,
    updateList: refetch,
  };
};
