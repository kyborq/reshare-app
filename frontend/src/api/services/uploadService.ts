import { api } from "../api";
import { UploadedFile, UploadedFiles } from "../models/fileModel";

export const getMyFiles = async () => {
  const { data: files } = await api.get<UploadedFiles>("/storage");
  return files;
};

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  await api.post("/storage/upload", formData);
};

export const downloadFile = async (file: UploadedFile) => {
  const response = await api.get(`/storage/download/${file.fileName}`, {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([response.data]));

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", file.alias);
  document.body.appendChild(link);
  link.click();

  link.parentNode?.removeChild(link);
  window.URL.revokeObjectURL(url);
};
