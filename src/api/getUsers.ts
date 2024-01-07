import { ENDPOINTS } from "@/constants";

export const getAllUsers = async () => {
  const res = await fetch(ENDPOINTS.USERS);
  const users = await res.json();

  return users;
};
