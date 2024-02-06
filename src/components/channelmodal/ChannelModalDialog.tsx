"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useRef, useState } from "react";

export default function ChannelModalDialog({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const modalRef = useRef(null);
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const goToChannel = () => {
    setFadeOut(() => true);

    setTimeout(() => {
      router.replace(href);
    }, 1100);
  };

  return (
    <dialog id={`${href.slice(1)}-modal`} ref={modalRef} className="modal h-[100dvh] w-screen">
      <div
        className={`bg-black h-[100dvh] w-screen z-50 ${
          fadeOut ? "block animate-black-fade-out" : "hidden"
        }`}
      ></div>
      <div className="absolute h-[100dvh] w-screen flex justify-center items-center z-40">
        <div className="flex-1 h-full bg-[#ffffff] animate-channel-scale opacity-0 flex flex-col">
          <div className="flex-1">{children}</div>
          <div className="h-24 lg:h-44 bg-[#d6d4d4] w-full flex items-center justify-center">
            <div className="flex justify-around gap-12">
              <div
                className="btn bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
            rounded-full px-4 lg:px-24 md:h-24 flex-1 text-4xl overflow-clip relative"
                onClick={() => router.back()}
              >
                HOME
                <div className="absolute h-1/2 bg-white bg-opacity-20 top-0 left-0 rounded-full w-full -translate-y-2"></div>
              </div>
              <div
                className="btn bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
            rounded-full px-4 lg:px-24 md:h-24 flex-1 text-4xl overflow-clip relative"
                onClick={() => goToChannel()}
              >
                OPEN
                <div className="absolute h-1/2 bg-white bg-opacity-20 top-0 left-0 rounded-full w-full -translate-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
