import BlogCard from "@/components/blog/blogCard/BlogCard";
import BlogCardContainer from "@/components/blog/blogCardContainer/BlogCardContainer";
import FadeIn from "@/components/fadeIn/FadeIn";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <FadeIn></FadeIn>
      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-4 px-4 pt-4 lg:pt-0">
        <div className="bg-yellow-500 min-h-16 lg:h-full col-span-1 rounded-2xl gap-4 dropdown flex lg:flex-col justify-between lg:justify-start items-center lg:items-start lg:p-4">
          <div className="hidden justify-between w-full gap-4 lg:flex">
            <div className="aspect-square flex-1 bg-red-400 rounded-2xl relative">
              <Image src={"/dirby.jpeg"} alt="itsamejames" fill={true} className="rounded-2xl"/>
            </div>
            <div className="aspect-square flex-1 bg-slate-100 bg-opacity-40 border-black border rounded-2xl flex flex-col justify-center items-center">
              <p className="flex justify-center items-center p-4 text-black text-xl">
                Im James, a software developer from Chattanooga TN, I like to
                talk JS/TS, Rust, and docker.
              </p>
              <p>Thanks for stopping by!</p>
            </div>
          </div>
          <div className="hidden lg:flex flex-col justify-center items-center flex-1 w-full ">
            <div className="bg-red-400 flex-1 w-full">test</div>
          </div>
          <div className="dropdown dropdown-end lg:hidden">
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
          <BlogCardContainer>
            <BlogCard title="BIG TITLE YEAH" description="test" link="./" />
            <BlogCard title="test" description="test" link="./" />
            <BlogCard title="test" description="test" link="./" />
          </BlogCardContainer>
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
