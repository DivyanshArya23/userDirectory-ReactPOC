import { getTimezones } from "@/api/getTimezones";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const initialTimezoneContext: { timezones: Array<string> } = { timezones: [] };

const TimezoneContext = createContext(initialTimezoneContext);

export const TimezoneProvider = ({ children }: { children: ReactNode }) => {
  const [timezones, setTimezones] = useState([]);

  const fetchTimezones = useCallback(async () => {
    const timezoneData = await getTimezones();
    setTimezones(timezoneData);
  }, []);

  useEffect(() => {
    fetchTimezones();
  }, [fetchTimezones]);

  return (
    <TimezoneContext.Provider value={{ timezones }}>
      {children}
    </TimezoneContext.Provider>
  );
};

export const useTimezoneContext = () => {
  const ctx = useContext(TimezoneContext);

  if (ctx === undefined) {
    throw new Error("Component is not wrapped in TimezoneProvider");
  }

  return ctx;
};
