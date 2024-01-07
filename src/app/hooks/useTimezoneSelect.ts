import { useTimezoneContext } from "@/providers/TimezoneProvider/TimezoneProvider";
import { getClockData } from "@/utils";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export const useTimezoneSelect = () => {
  const { timezones = [] } = useTimezoneContext();

  const [selectedTZ, setSelectedTZ] = useState("");
  const [time, setTime] = useState<any>({});

  const onTZChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tz = e.target.value;
    setSelectedTZ(tz);
  };

  const setInitialTime = useCallback(async () => {
    if (!!selectedTZ) {
      const clockData = await getClockData(selectedTZ);
      setTime(clockData);
    }
  }, [selectedTZ]);

  useEffect(() => {
    setInitialTime();
  }, [setInitialTime]);

  useEffect(() => {
    if (!selectedTZ && timezones.length) {
      setSelectedTZ(timezones[0]);
    }
  }, [timezones, selectedTZ]);

  return { selectedTZ, onTZChange, time };
};
