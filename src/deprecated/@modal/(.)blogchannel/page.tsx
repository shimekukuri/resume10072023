"use client";

import ChannelModal from "@/components/channelmodal/ChannelModal";
import { useRouter } from "next/navigation";

export default function Page() {
  let router = useRouter();
  router.prefetch("/blog");
  
  return (
    <ChannelModal>
      <button onClick={() => router.refresh()}>TEST</button>
      <div>BLOG</div>
    </ChannelModal>
  );
}
