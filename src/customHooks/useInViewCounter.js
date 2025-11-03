// hooks/useInViewCounter.js
import { useEffect, useState } from 'react';

export default function useInViewCounter(ref, start, end, speed = 50) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let current = start;
    const increment = end > start ? 1 : -1;

    const interval = setInterval(() => {
      current += increment;
      setCount(current);
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [hasStarted, start, end, speed]);

  return count;
}
