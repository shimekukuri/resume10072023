"use client";

import { useSearchParams } from "next/navigation";

export default function BlackScreen() {
  const searchParams = useSearchParams();
  return (
    <>
      {searchParams.has("black") ? (
        <div className="absolute top-0 right-0 left-0 bottom-0 h-screen w-screen bg-black z-50"></div>
      ) : (
        ""
      )}
    </>
  );
}
