import FadeIn from "@/components/fadeIn/FadeIn";

export default function Page() {
  return (
    <>
      <FadeIn></FadeIn>
      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-4 px-4 pt-4 lg:pt-0">
        <div className="bg-yellow-500 min-h-16 lg:h-full col-span-1 rounded-2xl dropdown flex justify-between items-center">
          <div></div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              Click
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-sky-500 h-full col-span-2 rounded-2xl snap-x flex p-4 gap-4 overflow-x-scroll">
          <div className="h-full min-w-[90%] snap-center flex flex-col gap-4">
            <div className="flex-1 bg-red-50 border border-black rounded-2xl shadow-2xl p-2 flex">
              <div className="h-full aspect-square bg-gray-400"></div>
              <div className="w-full">TEst</div>
            </div>
            <div className="flex-1 bg-red-50 border border-black rounded-2xl shadow-2xl p-2">
              yy1
            </div>
            <div className="flex-1 bg-red-50 border border-black rounded-2xl shadow-2xl p-2">
              yy1
            </div>
          </div>
          <div className="h-full min-w-[90%] snap-center flex flex-col gap-4">
            <div className="flex-1 bg-red-50 border border-black rounded-2xl shadow-2xl p-2 flex">
              <div className="h-full aspect-square bg-gray-400"></div>
              <div className="w-full">TEst</div>
            </div>
            <div className="flex-1 bg-red-50 border border-black rounded-2xl shadow-2xl p-2">
              yy1
            </div>
            <div className="flex-1 bg-red-50 border border-black rounded-2xl shadow-2xl p-2">
              yy1
            </div>
          </div>
          <div className="h-full min-w-[90%] snap-center flex flex-col gap-4">
            <div className="flex-1 bg-red-50 border border-black rounded-2xl shadow-2xl p-2 flex">
              <div className="h-full aspect-square bg-gray-400"></div>
              <div className="w-full">TEst</div>
            </div>
            <div className="flex-1 bg-red-50 border border-black rounded-2xl shadow-2xl p-2">
              yy1
            </div>
            <div className="flex-1 bg-red-50 border border-black rounded-2xl shadow-2xl p-2">
              yy1
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
