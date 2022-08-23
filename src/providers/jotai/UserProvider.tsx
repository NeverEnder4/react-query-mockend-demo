import React from "react";
import { Provider } from "jotai";

import { User } from "../../api/queries";
import { userAtom, INITIAL_USER_VALUE } from "../../stores/atoms/user";

interface Props {
  children: React.ReactNode;
  value: User;
}

export const UserProvider = ({ children, value }: Props): React.ReactElement => {
  return <Provider initialValues={[[userAtom, value]]}>{children}</Provider>;
};
