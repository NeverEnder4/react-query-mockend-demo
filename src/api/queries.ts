import { api } from "./api";

const BASE_URL = "https://mockend.com/NeverEnder4/react-query-mockend-demo";
const ENDPOINTS = {
  users: "users?limit=10",
};

export interface User {
  avatar: string;
  bio: string;
  createdAt: Date;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
}

export const getUsers = (): Promise<User[]> => {
  return api.get<User[]>(`${BASE_URL}/${ENDPOINTS.users}`);
};
