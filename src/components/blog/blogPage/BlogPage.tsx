import { ReactNode } from "react";

export default function BlogPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col p-4 justify-center-center items-center flex-1">
      <div className="max-w-screen-md">
        {children}
        <div className="h-52 w-5"></div>
      </div>
    </div>
  );
}
