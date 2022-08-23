import React from "react";

import type { User } from "../api/queries";

interface Props {
  user: User;
}

export const UserItem = ({ user }: Props): React.ReactElement => {
  console.log(user);
  const { firstName, lastName, email, avatar } = user;
  const name = `${firstName} ${lastName}`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: 8,
        border: "1px solid white",
        padding: 8,
        width: 300,
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
    </div>
  );
};
