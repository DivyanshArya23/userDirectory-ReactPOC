import { ENDPOINTS } from "@/constants";

export const getTimezoneData = async (timezone: string) => {
  const res = await fetch(`${ENDPOINTS.TIMEZONES}/${timezone}`);
  const timezoneData = await res.json();

  return timezoneData;
};
