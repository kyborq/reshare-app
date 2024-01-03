import { api } from "../api";
import { LoginCredentials } from "../models/authModel";

export const loginUser = async (credentials: LoginCredentials) => {
  const result = await api.post("/auth/login", credentials);
  console.log(result);
  return result;
};
