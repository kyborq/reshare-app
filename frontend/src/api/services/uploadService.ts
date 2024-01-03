import { api } from "../api";
import { UploadedFiles } from "../models/fileModel";

export const getMyFiles = async () => {
  const { data: files } = await api.get<UploadedFiles>("/storage");
  return files;
};

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  await api.post("/storage/upload", formData);
};
