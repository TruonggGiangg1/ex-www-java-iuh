import { useEffect, useMemo, useState } from 'react';

export default function useCountdown(targetDate) {
  const parsedTarget = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(() => parsedTarget - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(parsedTarget - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [parsedTarget]);

  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60));
  const minutes = Math.max(0, Math.floor((timeLeft / 1000 / 60) % 60));
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));

  return {
    days,
    hours,
    minutes,
    seconds,
    hasEnded: timeLeft <= 0
  };
}
