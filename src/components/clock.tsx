import React, { useEffect, useRef, useState } from "react";
import { listen } from "@tauri-apps/api/event";
import { pad } from "../util.ts";
import "../styles/clock.css";

const Clock: React.FC = () => {
  const [ time, setTime ] = useState<number>(0);

  const clock = useRef<number>();

  const eventClockReset = () => {
    clearInterval(clock.current);
    setTime(0);
  }

  const eventClockPause = () => {
    clearInterval(clock.current);
  }

  const eventClockStart = () => {
    clock.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  useEffect(() => {
    const unlisten_start = listen<string>('clock-start', eventClockStart);
    const unlisten_pause = listen<string>('clock-pause', eventClockPause);
    const unlisten_reset = listen<string>('clock-reset', eventClockReset);
    
    return () => {
      unlisten_start.then(f => f());
      unlisten_pause.then(f => f());
      unlisten_reset.then(f => f());
    };
  }, []);

  const formatTime = () => {
    const second = time % 60;
    const minute = Math.floor(time / 60);
    const hour   = Math.floor(time / 3600);

    return <>{pad(hour, 2)}:{pad(minute, 2)}:{pad(second, 2)}</>
  }

  return (
    <div className="clock">
      {formatTime()}
    </div>
  );
}

export default Clock;
