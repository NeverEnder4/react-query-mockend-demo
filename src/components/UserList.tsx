import React from "react";
import { useQuery } from "@tanstack/react-query";

import { UserItem } from "./UserItem";
import { getUsers } from "../api";

export const UserList = (): React.ReactElement => {
  const query = useQuery(["users"], getUsers);

  const users = query?.data?.map((data) => <UserItem user={data} />);

  if (query?.data)
    return (
      <div>
        <h2>Users</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          {users}
        </div>
      </div>
    );
  return <div>UNABLE TO GET USERS</div>;
};
