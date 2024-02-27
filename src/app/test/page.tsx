import AsyncBlogCardBuilder from "@/components/blog/asyncBlogCardBuilder/AsyncBlogCardBuilder";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Suspense>
        <AsyncBlogCardBuilder />
      </Suspense>
    </div>
  );
}
