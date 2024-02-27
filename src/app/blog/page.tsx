import AsyncBlogCardBuilder from "@/components/blog/asyncBlogCardBuilder/AsyncBlogCardBuilder";
import FadeIn from "@/components/fadeIn/FadeIn";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <FadeIn></FadeIn>
        <Suspense>
          <AsyncBlogCardBuilder />
        </Suspense>
    </>
  );
}
