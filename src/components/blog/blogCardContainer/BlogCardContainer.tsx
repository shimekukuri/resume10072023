import { ReactNode } from "react";

export default function BlogCardContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="h-full min-w-[90%] snap-center flex flex-col gap-4">
      {children}
    </div>
  );
}
