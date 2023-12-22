"use client";

import { useState, useEffect } from "react";

export function Countdown({
  utc: deadline,
  className,
}: {
  utc: string;
  className?: string;
}) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    // Clear interval if the component is unmounted
    return () => clearInterval(timer);
  }, [deadline]);

  const { days, hours, minutes, seconds } = timeLeft;

  // If countdown is finished
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    return <span className={className}>Final results</span>;
  }

  return (
    <span className={className}>
      Ends in {days > 0 ? `${days}d ` : ""}
      {hours > 0 ? `${hours}h ` : ""}
      {minutes > 0 ? `${minutes}m ` : ""}
      {seconds > 0 ? `${seconds}s` : ""}
    </span>
  );
}

function calculateTimeLeft(deadline: string) {
  const difference = +new Date(deadline) - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}
