import { api } from "../api";
import { User } from "../models/userModel";

export const getCurrentUser = async () => {
  const { data: user } = await api.get<User>("/users/current");
  return user;
};
