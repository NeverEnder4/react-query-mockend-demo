import React from "react";

import { UserList } from "../components/UserList";
import { CreateUserForm, EditUserForm } from "../components/Form";
import { useUser } from "../hooks/useUser";

export const Users = (): React.ReactElement => {
  const { user } = useUser();
  return (
    <div>
      <UserList />
      {user.id !== 0 ? <EditUserForm /> : <CreateUserForm />}
    </div>
  );
};
