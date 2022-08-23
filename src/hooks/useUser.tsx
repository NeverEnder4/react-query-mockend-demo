import { useAtom } from "jotai";

import { userAtom } from "../stores/atoms/user";

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);

  return { user, setUser };
};
