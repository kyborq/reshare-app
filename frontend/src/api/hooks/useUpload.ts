import { useMutation } from "react-query";
import { downloadFile, uploadFile } from "../services/uploadService";
import { UploadedFile } from "../models/fileModel";

export const useUpload = (onSuccess?: () => void) => {
  const { mutate: upload } = useMutation({
    mutationFn: (file: File) => uploadFile(file),
    onSuccess: onSuccess,
  });

  const { mutate: download } = useMutation({
    mutationFn: (file: UploadedFile) => downloadFile(file),
  });

  return {
    uploadFile: upload,
    downloadFile: download,
  };
};
