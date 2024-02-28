import { Cabin } from "next/font/google";
import Channel from "../channel/Channel";

const cabin = Cabin({ style: "normal", weight: ["700"], subsets: ["latin"] });

export default function AboutMe() {
  return (
    <Channel href="aboutme">
      <div
        className={`@container color-change-background flex-1 h-full flex items-center justify-center relative ${cabin.className}`}
      >
        <div className="absolute channel w-full h-full z-10"></div>
        <div className="flex @[4rem]:text-5xl @[6rem]:text-9xl @sm:text-[20rem]">
          <div className="color-change-15000 mix-blend-difference">M</div>
          <div className="color-change-50000 mix-blend-difference">i</div>
          <div className="color-change-10000 mix-blend-difference">i</div>
        </div>
      </div>
    </Channel>
  );
}
