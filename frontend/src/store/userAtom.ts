import { atom } from "jotai";
import { User } from "../api/models/userModel";

export type UserAtom = {
  user?: User;
};

const initialState: UserAtom = {};

export const userAtom = atom<UserAtom>(initialState);
