import { useTimezoneSelect } from "@/app/hooks/useTimezoneSelect";
import { useTimezoneContext } from "@/providers/TimezoneProvider/TimezoneProvider";
import { ChangeEvent, useState } from "react";
import { ClockCounter } from "../ClockCounter/ClockCounter";

export const CountryClock = () => {
  const { timezones = [] } = useTimezoneContext();
  const { selectedTZ, onTZChange, time } = useTimezoneSelect();

  return (
    <div className="d-flex flex-wrap row spacing-20">
      <select
        name="timezone"
        id="timezone"
        value={selectedTZ}
        onChange={onTZChange}
      >
        {timezones?.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
      <ClockCounter time={time} />
    </div>
  );
};
