export default function BlogBubble({ className }: { className?: string }) {
  return (
    <div
      className={`min-w-16 aspect-square rounded-full bubble hover:animate-blog-scale-200 hover:z-50 ${className ? className : ""}`}
    >
      <div className=""></div>
    </div>
  );
}
