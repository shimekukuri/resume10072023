'use client';
import { useEffect, useState } from 'react';

export default function Clock({ className }: { className: string }) {
  const [hours, setHours] = useState<any>();
  const [minutes, setMinutes] = useState<any>();

  useEffect(() => {
    let date = new Date();

    const interval_id = setInterval(() => {
      let date = new Date();

      setHours(() => date.getHours());
      setMinutes(() => date.getMinutes());
    }, 1000);

    setHours(() => date.getHours());
    setMinutes(() => date.getMinutes());
    return () => {
      clearInterval(interval_id);
    };
  }, []);

  return <div className={className}>{`${hours}:${minutes}`}</div>;
}
