import BlogCard from "../blogCard/BlogCard";

export default async function AsyncBlogCardBuilder() {
  let data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/get-posts/`);
  let posts = await data.json();

  return (
    <div className="flex-1 flex flex-wrap gap-4 justify-center">
      <div className="w-full text-5xl">Catagories</div>
      {posts.map((x: any, i: number) => {
        return (
          <BlogCard
            key={`${x.title}${i}`}
            title={x.title}
            description={x.description}
            image={x.image}
            link={x.link}
          />
        );
      })}
    </div>
  );
}
