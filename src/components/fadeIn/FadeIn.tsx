'use client';
import { useEffect, useState } from "react";

export default function FadeIn() {
  const [display, setDisplay] = useState<boolean>(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDisplay(() => false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {display ? <div
        className={`absolute bg-black animate-black-fade-in w-screen min-h-screen top-0 bottom-0 right-0 left-0 z-50`}
      ></div> : ''}
    </>
  );
}
