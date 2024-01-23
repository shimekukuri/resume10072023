import { ReactNode } from "react";

export default function Channel({
  children,
  className,
  href,
}: {
  children?: ReactNode;
  className?: String;
  href: string;
}) {
  console.log(href);
  return (
    <a
      href={href}
      className="flex h-full w-full justify-center items-center"
    >
      <div
        className={`rounded-3xl bg-green-500 aspect-square md:aspect-auto md:h-full w-full shadow-lg ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
    </a>
  );
}
