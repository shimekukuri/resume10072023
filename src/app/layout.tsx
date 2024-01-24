import Clock from "@/components/clock/Clock";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Orbitron } from "next/font/google";
import { Fredoka } from "next/font/google";
import DateDisplay from "@/components/date/DateDisplay";
import Link from "next/link";
import FadeIn from "@/components/fadeIn/FadeIn";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "James Hutchinson",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme=""
      className="bg-[#ffffff] max-w-[100vw] max-h-screen overflow-clip"
    >
      <body
        className={`${inter.className} flex flex-col items-center justify-between min-h-screen max-h-screen overflow-y-clip max-w-[100vw] overflow-x-clip bg-slate-300`}
      >
      <FadeIn />
        <div className="flex-1 min-w-full flex overflow-x-scroll lg:pt-16 pb-4 snap-mandatory">
          {children}
        </div>
        <div className="bottom-24 md:bottom-0 left-0 right-0 w-full h-24 md:h-32 lg:h-52 relative ">
          <Clock
            className={`absolute top-0 right-0 left-0 z-10 text-center ${orbitron.className} text-3xl lg:text-6xl`}
          ></Clock>
          <DateDisplay
            className={`absolute bottom-0 top-0 left-0 right-0 z-10 text-center text-2xl md:text-4xl ${orbitron.className} text-black flex justify-center items-center lg:pt-8`}
          />

          <div className="absolute lg:top-0 bottom-0 left-0 z-10 flex items-center font-black">
            <div className="rounded-r-full w-24 md:w-64 h-24 md:h-32 flex items-center justify-end p-2 shadow-2xl border-2 border-[#9e9e9e9a]">
              <Link
              href={'/'}
                className={`rounded-full w-full h-22 md:w-auto md:h-28 aspect-square border-2 border-[#34BEED] flex justify-center items-center shadow-2xl text-black ${fredoka.className} text-3xl md:text-4xl hover:bg-red-400`}
              >
                Mii
              </Link>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 right-0 z-10 flex items-center font-black">
            <div className="rounded-l-full w-24 md:w-64 h-24 md:h-32 flex items-center justify-start p-2 shadow-2xl border-2 border-[#9e9e9e9a]">
              <div className="rounded-full w-full h-22 md:w-auto md:h-28 aspect-square border-2 border-[#34BEED] flex items-center justify-center shadow-2xl text-black p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.1 -0.1 20.2 3.2"
            className="scale-110 hidden lg:block"
            style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" }}
          >
            {/* scale-125 z-0 top-0 bottom-0 absolute */}
            <filter id="inset-shadow">
              <feOffset dx="0" dy="0" />
              <feGaussianBlur stdDeviation="1" result="offset-blur" />
              <feComposite
                operator="out"
                in="SourceGraphic"
                in2="offset-blur"
                result="inverse"
              />

              <feFlood floodColor="black" floodOpacity=".95" result="color" />
              <feComposite
                operator="in"
                in="color"
                in2="inverse"
                result="shadow"
              />

              <feComposite operator="over" in="shadow" in2="SourceGraphic" />
            </filter>
            <g filter="url(#inset-shadow)">
              <path
                d="M 0 0 L 0 3 L 20 3 L 20 0 L 17 0 C 16 0 15 1 14 1 L 6 1 C 5 1 4 0 3 0 Z"
                stroke="#2ff7f7"
                strokeWidth="0.05"
                fill="#d6d4d4"
              />
            </g>
          </svg>
        </div>
      <Link href={'/blog'} className="hidden"></Link>
      </body>
    </html>
  );
}
