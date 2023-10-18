import Channel from '@/components/channel/Channel';
import Hero from '@/components/hero/Hero';

export default function Page() {
  return (
    <main className="flex-1 overflow-y-clip overflow-x-scroll snap-mandatory snap-x flex flex-row lg:gap-2 max-w-[100vw] min-h-full">
      <div className="min-w-[10vw] min-h-[100%] hidden md:block"></div>
      <div className="p-4 lg:p-0 min-w-[100vw] lg:min-w-[80vw] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 content-center gap-2 snap-center">
        <Hero />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel className={`shadow-none`} />
        <Channel className={`shadow-none`} />
        <Channel className={`shadow-none`} />
        <Channel className={`shadow-none`} />
        <Channel className={`shadow-none`} />
      </div>

      <div className="p-4 lg:p-0 min-w-[100vw] lg:min-w-[80vw] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 content-center gap-2 snap-center">
        <Hero />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
      </div>
      <div className="p-4 lg:p-0 min-w-[100vw] lg:min-w-[80vw] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 content-center gap-2 snap-center">
        <Hero />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
      </div>
      <div className="p-4 lg:p-0 min-w-[100vw] lg:min-w-[80vw] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 content-center gap-2 snap-center">
        <Hero />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
      </div>
      <div className="min-w-[10vw] min-h-[100%]"></div>
    </main>
  );
}
