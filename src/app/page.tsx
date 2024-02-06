import Channel from "@/components/channel/Channel";
import Hero from "@/components/hero/Hero";
import BlogChannel from "@/components/mainChannels/blogChannel/BlogChannel";

export default function Page() {
  return (
    <main className="flex-1 overflow-y-clip overflow-x-scroll snap-mandatory snap-x flex flex-row lg:gap-2 max-w-[100vw] md:min-h-full">
      <div className="min-w-[10vw] min-h-[100%] hidden md:block"></div>
      <div className="pb-16 pt-10 pl-1 pr-1 lg:p-0 lg:pb-0 lg:pt-0 lg:pl-0 lg:pr-0 min-w-[100vw] lg:min-w-[80vw] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 content-center gap-1 md:gap-2 snap-center">
        <Hero />
        <BlogChannel />
        <Channel href="/test" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" className={`shadow-none`} />
        <Channel href="/" className={`shadow-none`} />
        <Channel href="/" className={`shadow-none`} />
        <Channel href="/" className={`shadow-none`} />
        <Channel href="/" className={`shadow-none`} />
      </div>

      <div className="p-4 lg:p-0 min-w-[100vw] lg:min-w-[80vw] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 content-center gap-2 snap-center">
        <Hero />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
      </div>
      <div className="p-4 lg:p-0 min-w-[100vw] lg:min-w-[80vw] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 content-center gap-2 snap-center">
        <Hero />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
      </div>
      <div className="p-4 lg:p-0 min-w-[100vw] lg:min-w-[80vw] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 content-center gap-2 snap-center">
        <Hero />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
        <Channel href="/" />
      </div>
      <div className="min-w-[10vw] min-h-[100%]"></div>
    </main>
  );
}
