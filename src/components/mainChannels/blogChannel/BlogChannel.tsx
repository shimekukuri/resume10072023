import Channel from "@/components/channel/Channel";

export default function BlogChannel() {
  return (
    <Channel href="/blog">
      <div className="flex-1 relative flex flex-col h-full w-full @container">
        <div className="absolute channel w-full h-full z-10"></div>
        <div className="absolute right-12 font-bold text-black text-6xl @lg:text-[30rem] word-text">
          Words
        </div>
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center item-center flex-col">
          <h2 className="text-amber-700 text-8xl blog-text @lg:text-[20rem] ">
            Blog
          </h2>
        </div>
        <div className="absolute left-20">
          <div className="text-red-700 text-8xl thoughts-text @lg:text-[20rem] ">
            Thoughts
          </div>
        </div>
      </div>
    </Channel>
  );
}
