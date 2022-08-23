import { api } from "./api";

const BASE_URL = "http://localhost:3000";
const ENDPOINTS = {
  users: "/users",
};

export interface User {
  avatar: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
}

export type PostUser = Omit<User, "id">;

export const getUsers = (): Promise<User[]> => {
  return api.get<User[]>(BASE_URL + ENDPOINTS.users);
};

export const createUser = (user: PostUser): Promise<User> => {
  return api.post(BASE_URL + ENDPOINTS.users, JSON.stringify(user));
};

export const updateUser = (user: User): Promise<User> => {
  const { id, ...data } = user;
  return api.put(`${BASE_URL + ENDPOINTS.users}/${id}`, JSON.stringify(data));
};

export const deleteUser = (id: number): Promise<User[]> => {
  return api.delete<User[]>(`${BASE_URL + ENDPOINTS.users}/${id}`);
};
