import { atom } from "jotai";

import { User } from "../../api";

export const INITIAL_USER_VALUE: User = {
  firstName: "",
  lastName: "",
  email: "",
  id: 0,
  avatar: "",
};

export const userAtom = atom<User>(INITIAL_USER_VALUE);
