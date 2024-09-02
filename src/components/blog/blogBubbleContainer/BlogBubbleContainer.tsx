import BlogBubble from "../blogBubble/BlogBubble";

export default function BlogBubbleContainer() {
  return (
    <div className="flex flex-wrap justify-evenly w-full gap-4">
      {[...Array(15)].map((_) => {
        return <BlogBubble />;
      })}
    </div>
  );
}
