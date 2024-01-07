import { getTimezoneData } from "./api/getTimezoneData";

export const getTimeComponents = (timeInMs: number, toClockString = false) => {
  const newDate = new Date(timeInMs);

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getDate();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();
  const second = newDate.getSeconds();

  if (toClockString) {
    return {
      year: year.toString().padStart(2, "0"),
      month: month.toString().padStart(2, "0"),
      date: date.toString().padStart(2, "0"),
      hour: hour.toString().padStart(2, "0"),
      minute: minute.toString().padStart(2, "0"),
      second: second.toString().padStart(2, "0"),
      timeInMs,
    };
  }

  return { year, month, date, hour, minute, second, timeInMs };
};

export const getClockData = async (timezone: string) => {
  const timezoneData = await getTimezoneData(timezone);

  const dateTime = timezoneData.datetime.split(".")[0];
  const [fullDate, fullTime] = dateTime.split("T");

  const [year, month, date] = fullDate.split("-");
  const [hour, minute, second] = fullTime.split(":");
  const dateJS = new Date(year, month, date, hour, minute, second);

  const timeInMs = dateJS.getTime();
  const timeComponents = getTimeComponents(timeInMs);

  return timeComponents;
};
