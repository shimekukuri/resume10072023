import { Pixelify_Sans } from "next/font/google";

const alfaSo = Pixelify_Sans({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div className="col-span-3 lg:col-span-4 rounded-3xl shadow-2xl  h-full flex">
      <div
        className={`${alfaSo.className} rounded-3xl text-white text-3xl md:text-4xl lg:text-5xl flex flex-wrap text-center justify-center items-center
        w-full
        overflow-clip
        relative
        `}
      >
      <div className="absolute bg-black left-0 right-0 bottom-0 top-0 bg-cover lg:bg-[center_bottom_-24rem] animate-herobg z-0"></div>
        <div className="flex">
          <div className="opacity-0 animate-negscale-600-d150 z-10">J</div>
          <div className="opacity-0 animate-negscale-600-d75">A</div>
          <div className="opacity-0 animate-negscale-600-d325 ">M</div>
          <div className="opacity-0 animate-negscale-600-d250">E</div>
          <div className="opacity-0 animate-negscale-600-d400">S</div>
        </div>
        <div className="w-4">{`   `}</div>
        <div className="flex">
          <div className="opacity-0  animate-negscale-600-d450">H</div>
          <div className="opacity-0 animate-negscale-600-d275">U</div>
          <div className="opacity-0 animate-negscale-600-d325">T</div>
          <div className="opacity-0 animate-negscale-600-d50">C</div>
          <div className="opacity-0 animate-negscale-600-d175">H</div>
          <div className="opacity-0 animate-negscale-600-d200">I</div>
          <div className="opacity-0 animate-negscale-600-d225">N</div>
          <div className="opacity-0 animate-negscale-600-d125">S</div>
          <div className="opacity-0 animate-negscale-600-d450">O</div>
          <div className="opacity-0 animate-negscale-600-d100 animate-floating-text">
            N
          </div>
        </div>
      </div>
    </div>
  );
}

//S 5
//u 2
//p 12
//e 8
//r 13
//s 14
//m 9
//a 11
//s 1
//h 6
//b 7
//r 4
//o 15
//s 3
//
//
//
//
