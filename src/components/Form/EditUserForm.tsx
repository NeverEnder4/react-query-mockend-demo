import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { User, updateUser } from "../../api";
import { useUser } from "../../hooks/useUser";
import { INITIAL_USER_VALUE } from "../../stores/atoms/user";

const INITIAL_FORM_STATE: User = {
  firstName: "",
  lastName: "",
  email: "",
  avatar: "",
  id: 0,
};

export const EditUserForm = () => {
  const queryClient = useQueryClient();
  const { user, setUser } = useUser();

  const [formState, setFormState] = useState<User>(user);

  useEffect(() => {
    setFormState(user);
  }, [user]);

  const onSuccess = () => {
    // ✅ refetch the users
    queryClient.invalidateQueries(["users"]);
    setFormState(INITIAL_FORM_STATE);
    setUser(INITIAL_USER_VALUE);
  };

  const mutation = useMutation((user: User) => updateUser(user), {
    onSuccess,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutation.mutate(formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 60 }}>
      <h2 style={{ textAlign: "left" }}>Update User</h2>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "auto auto", marginTop: 16 }}>
        <label
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}
        >
          First Name
          <input
            style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid white" }}
            name='firstName'
            type='firstName'
            placeholder='First name'
            value={formState.firstName}
            onChange={handleChange}
          />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}
        >
          Last Name
          <input
            style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid white" }}
            name='lastName'
            type='lastName'
            placeholder='Last name'
            value={formState.lastName}
            onChange={handleChange}
          />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}
        >
          Email
          <input
            style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid white" }}
            name='email'
            type='email'
            placeholder='Email'
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}
        >
          Avatar Url
          <input
            style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid white" }}
            name='avatar'
            placeholder='Avatar URL'
            value={formState.avatar}
            onChange={handleChange}
          />
        </label>
        <button
          style={{ backgroundColor: "green", marginTop: 32, gridColumn: "1/span 2" }}
          type='submit'
        >
          Update User
        </button>
      </div>
    </form>
  );
};
