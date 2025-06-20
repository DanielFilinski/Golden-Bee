import React, { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number; // ms
  suffix?: string;
};

const AnimatedNumber: React.FC<Props> = ({ value, duration = 1000, suffix = "" }) => {
  const [display, setDisplay] = useState(0);
  const start = useRef<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplay(Math.floor(progress * (value - start.current) + start.current));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };
    requestAnimationFrame(step);
    return () => {
      start.current = value;
    };
  }, [value, duration]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedNumber; 