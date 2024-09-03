import BlogBubble from "../blogBubble/BlogBubble";

export default function BlogBubbleContainer() {
  return (
    <div className="flex-1 flex flex-col gap-4 pb-40">
      <div className="flex-1 flex justify-evenly">
        <BlogBubble className="animate-float-200"/>
        <BlogBubble className="animate-float2-200"/>
        <BlogBubble className="animate-float3-200"/>
        <BlogBubble className="animate-float-200"/>
        <BlogBubble className="animate-float2-400"/>
      </div>
      <div className="flex-1 flex justify-evenly">
        <BlogBubble className="animate-float2-200"/>
        <BlogBubble className="animate-float4-400"/>
        <BlogBubble className="animate-float-200"/>
        <BlogBubble className="animate-float3-400"/>
      </div>
      <div className="flex-1 flex justify-evenly">
        <BlogBubble className="animate-float4-200"/>
        <BlogBubble className="animate-float-200"/>
        <BlogBubble className="animate-float2-400"/>
        <BlogBubble className="animate-float3-200"/>
        <BlogBubble className="animate-float4-400"/>
      </div>
    </div>
  );
}
