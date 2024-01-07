import { ENDPOINTS } from "@/constants";

export const getTimezones = async (postId?: number) => {
  const res = await fetch(ENDPOINTS.TIMEZONES);
  const timezones = await res.json();

  return timezones;
};
