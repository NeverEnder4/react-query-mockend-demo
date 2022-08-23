import { request } from "./fetch";

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url, {}),

  // Using `extends` to set a type constraint:
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }),
  put: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }),
  delete: <TResponse>(url: string) => request<TResponse>(url, { method: "DELETE" }),
};
