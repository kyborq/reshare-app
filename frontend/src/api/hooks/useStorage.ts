import { useQuery } from "react-query";
import { getMyFiles } from "../services/uploadService";

export const useStorage = () => {
  const { data, refetch } = useQuery({
    queryFn: () => getMyFiles(),
    retry: false,
  });

  return {
    files: data,
    updateList: refetch,
  };
};
