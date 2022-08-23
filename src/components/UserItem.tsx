import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { User } from "../api/queries";
import { useUser } from "../hooks/useUser";
import { deleteUser } from "../api";

interface Props {
  user: User;
}

export const UserItem = ({ user }: Props): React.ReactElement => {
  const { setUser } = useUser();
  const queryClient = useQueryClient();

  const onSuccess = () => {
    // ✅ refetch the users
    queryClient.invalidateQueries(["users"]);
  };

  const mutation = useMutation((id: number) => deleteUser(id), {
    onSuccess,
  });

  const { firstName, lastName, email, avatar } = user;
  const name = `${firstName} ${lastName}`;

  const handleUserClick = () => {
    setUser(user);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    mutation.mutate(user.id);
  };

  return (
    <div
      onClick={handleUserClick}
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: 8,
        border: "1px solid white",
        padding: 8,
        width: 300,
        cursor: "pointer",
      }}
    >
      <img style={{ width: 50, height: 50, marginRight: 16 }} alt={name} src={avatar} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <h5 style={{ margin: 0, lineHeight: 1, marginBottom: 4 }}>{name}</h5>
        <p style={{ margin: 0, fontSize: 12, lineHeight: 1 }}>{email}</p>
      </div>
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: "crimson",
          borderRadius: "200%",
          width: 20,
          height: 20,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          lineHeight: 1,
          marginLeft: "auto",
        }}
      >
        X
      </button>
    </div>
  );
};
