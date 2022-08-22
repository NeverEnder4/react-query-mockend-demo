import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { UserItem } from "./UserItem";
import { getUsers } from "../api";

export const Users = (): React.ReactElement => {
  // const queryClient = useQueryClient();

  const query = useQuery(["users"], getUsers);

  const users = query?.data?.map((data) => <UserItem user={data} />);

  console.log(query, "Q");

  if (query?.data) return <div>{users}</div>;
  return <div>UNABLE TO GET USERS</div>;
};
