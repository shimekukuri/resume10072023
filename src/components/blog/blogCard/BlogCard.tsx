import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  image,
  title,
  link,
  description,
}: {
  image?: string;
  title: string;
  link: string;
  description: string;
}) {
  return (
    <Link
      href={link}
      className="flex-1 gap-2 lg:gap-4 bg-red-50 border border-black rounded-2xl shadow-2xl p-2 flex"
    >
      <div className="h-full aspect-square bg-gray-400 relative">
        {image ? (
          <Image src={image} alt="test" fill={true} />
        ) : (
          <Image src={"/dirby.jpeg"} alt="test" fill={true} />
        )}
      </div>
      <div className="flex flex-col p-1 gap-1">
        <h2 className="w-full text-black text-xl lg:text-3xl">{title}</h2>
        <p className="lg:hidden">{description.slice(0,16)}...</p>
        <p className="lg:block">{description.slice(0,150)}...</p>
      </div>
    </Link>
  );
}
