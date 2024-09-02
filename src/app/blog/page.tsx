import AsyncBlogCardBuilder from "@/components/blog/asyncBlogCardBuilder/AsyncBlogCardBuilder";
import BlogBubbleContainer from "@/components/blog/blogBubbleContainer/BlogBubbleContainer";
import FadeIn from "@/components/fadeIn/FadeIn";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <FadeIn></FadeIn>
      <BlogBubbleContainer />
    </>
  );
}

//(
//    <>
//      <FadeIn></FadeIn>
//        <Suspense>
//          <AsyncBlogCardBuilder />
//        </Suspense>
//    </>
//  )
