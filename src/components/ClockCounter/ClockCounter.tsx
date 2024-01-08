import { useCallback, useEffect, useRef, useState } from "react";
import { Time } from "../types";
import { getTimeComponents } from "@/utils";

type ClockCounterProps = { time: Time };

export const ClockCounter = ({ time }: ClockCounterProps) => {
  const { timeInMs } = time;

  const [clock, setClock] = useState<number>(timeInMs);
  const [timeData, setTimeData] = useState<Record<string, number | string>>({
    hour: "00",
    minute: "00",
    second: "00",
  });

  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startClock = useCallback(() => {
    timerRef.current = setInterval(() => {
      setClock((clockTime) => clockTime + 1000);
      setIsRunning(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setClock(timeInMs);
    if (!isRunning) {
      stopClock();
      startClock();
    }
  }, [timeInMs]);

  const stopClock = useCallback(() => {
    if (timerRef.current) {
      setIsRunning(false);
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startClock();
    return stopClock;
  }, [startClock, stopClock]);

  useEffect(() => {
    if (clock) {
      const timeComponents = getTimeComponents(clock, true);
      setTimeData(timeComponents);
    }
  }, [clock]);

  return (
    <div className="d-flex flex-wrap spacing-20">
      <div>
        {timeData.hour}:{timeData.minute}:{timeData.second}
      </div>
      <div>
        <button onClick={isRunning ? stopClock : startClock}>
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};
