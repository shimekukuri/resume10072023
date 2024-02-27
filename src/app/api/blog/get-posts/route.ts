import { NextRequest, NextResponse } from "next/server";

const blogs: bloginfo[] = [
  {
    title: "Welcome! Still under construction but have a look around",
    description:
      "Hey give me a click and I'll take you to my first blog post on this site, not much here yet but hey got to start somewhere",
    link: "/blog/first",
    image: "/dirby.jpeg",
    tags: ["rust", "javascript"],
  },
  {
    title: "test",
    description:
      "test description for all your test description needs just filling up the space here becuase I need to make sure that the different media queries actually work and will cut off the text after a certain point. Ya know sometimes you just got to do that to make sure that stuff works. That and I really like my new keyboard, the kensis advantage 2 is definately a real keeper. My wrist and hand pain is almost entirely gone and I am typing more and faster than ever there are a lot of people who said that this keyboard made them a slower typer but honestly after using for about two weeks I've found that it is actually easier to type on and faster once you get used to it. Hand placement on the keyboard is really key. I find that my left hand is actually sitting higher than my right but that is probably because I have most of my control keys mapped on the right thumb. Anyways I think that is enough test text for right now.",
    link: "/blog/test",
    image: "/dirby.jpeg",
    tags: ["rust", "javascript"],
  },
  {
    title: "test",
    description:
      "test description for all your test description needs just filling up the space here becuase I need to make sure that the different media queries actually work and will cut off the text after a certain point. Ya know sometimes you just got to do that to make sure that stuff works. That and I really like my new keyboard, the kensis advantage 2 is definately a real keeper. My wrist and hand pain is almost entirely gone and I am typing more and faster than ever there are a lot of people who said that this keyboard made them a slower typer but honestly after using for about two weeks I've found that it is actually easier to type on and faster once you get used to it. Hand placement on the keyboard is really key. I find that my left hand is actually sitting higher than my right but that is probably because I have most of my control keys mapped on the right thumb. Anyways I think that is enough test text for right now.",
    link: "/blog/test",
    image: "/dirby.jpeg",
    tags: ["rust"],
  },
  {
    title: "test",
    description:
      "test description for all your test description needs just filling up the space here becuase I need to make sure that the different media queries actually work and will cut off the text after a certain point. Ya know sometimes you just got to do that to make sure that stuff works. That and I really like my new keyboard, the kensis advantage 2 is definately a real keeper. My wrist and hand pain is almost entirely gone and I am typing more and faster than ever there are a lot of people who said that this keyboard made them a slower typer but honestly after using for about two weeks I've found that it is actually easier to type on and faster once you get used to it. Hand placement on the keyboard is really key. I find that my left hand is actually sitting higher than my right but that is probably because I have most of my control keys mapped on the right thumb. Anyways I think that is enough test text for right now.",
    link: "/blog/test",
    image: "/dirby.jpeg",
    tags: ["rust", "javascript"],
  },
  {
    title: "test",
    description:
      "test description for all your test description needs just filling up the space here becuase I need to make sure that the different media queries actually work and will cut off the text after a certain point. Ya know sometimes you just got to do that to make sure that stuff works. That and I really like my new keyboard, the kensis advantage 2 is definately a real keeper. My wrist and hand pain is almost entirely gone and I am typing more and faster than ever there are a lot of people who said that this keyboard made them a slower typer but honestly after using for about two weeks I've found that it is actually easier to type on and faster once you get used to it. Hand placement on the keyboard is really key. I find that my left hand is actually sitting higher than my right but that is probably because I have most of my control keys mapped on the right thumb. Anyways I think that is enough test text for right now.",
    link: "/blog/test",
    image: "/dirby.jpeg",
    tags: ["rust", "javascript"],
  },
  {
    title: "test",
    description:
      "test description for all your test description needs just filling up the space here becuase I need to make sure that the different media queries actually work and will cut off the text after a certain point. Ya know sometimes you just got to do that to make sure that stuff works. That and I really like my new keyboard, the kensis advantage 2 is definately a real keeper. My wrist and hand pain is almost entirely gone and I am typing more and faster than ever there are a lot of people who said that this keyboard made them a slower typer but honestly after using for about two weeks I've found that it is actually easier to type on and faster once you get used to it. Hand placement on the keyboard is really key. I find that my left hand is actually sitting higher than my right but that is probably because I have most of my control keys mapped on the right thumb. Anyways I think that is enough test text for right now.",
    link: "/blog/test",
    image: "/dirby.jpeg",
    tags: ["rust", "typescript"],
  },
  {
    title: "test",
    description:
      "test description for all your test description needs just filling up the space here becuase I need to make sure that the different media queries actually work and will cut off the text after a certain point. Ya know sometimes you just got to do that to make sure that stuff works. That and I really like my new keyboard, the kensis advantage 2 is definately a real keeper. My wrist and hand pain is almost entirely gone and I am typing more and faster than ever there are a lot of people who said that this keyboard made them a slower typer but honestly after using for about two weeks I've found that it is actually easier to type on and faster once you get used to it. Hand placement on the keyboard is really key. I find that my left hand is actually sitting higher than my right but that is probably because I have most of my control keys mapped on the right thumb. Anyways I think that is enough test text for right now.",
    link: "/blog/test",
    image: "/dirby.jpeg",
    tags: ["rust", "typescript"],
  },
  {
    title: "test",
    description:
      "test description for all your test description needs just filling up the space here becuase I need to make sure that the different media queries actually work and will cut off the text after a certain point. Ya know sometimes you just got to do that to make sure that stuff works. That and I really like my new keyboard, the kensis advantage 2 is definately a real keeper. My wrist and hand pain is almost entirely gone and I am typing more and faster than ever there are a lot of people who said that this keyboard made them a slower typer but honestly after using for about two weeks I've found that it is actually easier to type on and faster once you get used to it. Hand placement on the keyboard is really key. I find that my left hand is actually sitting higher than my right but that is probably because I have most of my control keys mapped on the right thumb. Anyways I think that is enough test text for right now.",
    link: "/blog/test",
    image: "/dirby.jpeg",
    tags: ["rust", "typescript"],
  },
  {
    title: "test",
    description:
      "test description for all your test description needs just filling up the space here becuase I need to make sure that the different media queries actually work and will cut off the text after a certain point. Ya know sometimes you just got to do that to make sure that stuff works. That and I really like my new keyboard, the kensis advantage 2 is definately a real keeper. My wrist and hand pain is almost entirely gone and I am typing more and faster than ever there are a lot of people who said that this keyboard made them a slower typer but honestly after using for about two weeks I've found that it is actually easier to type on and faster once you get used to it. Hand placement on the keyboard is really key. I find that my left hand is actually sitting higher than my right but that is probably because I have most of my control keys mapped on the right thumb. Anyways I think that is enough test text for right now.",
    link: "/blog/test",
    image: "/dirby.jpeg",
    tags: ["rust", "typescript"],
  },
  {
    title: "test",
    description:
      "test description for all your test description needs just filling up the space here becuase I need to make sure that the different media queries actually work and will cut off the text after a certain point. Ya know sometimes you just got to do that to make sure that stuff works. That and I really like my new keyboard, the kensis advantage 2 is definately a real keeper. My wrist and hand pain is almost entirely gone and I am typing more and faster than ever there are a lot of people who said that this keyboard made them a slower typer but honestly after using for about two weeks I've found that it is actually easier to type on and faster once you get used to it. Hand placement on the keyboard is really key. I find that my left hand is actually sitting higher than my right but that is probably because I have most of my control keys mapped on the right thumb. Anyways I think that is enough test text for right now.",
    link: "/blog/test",
    image: "/dirby.jpeg",
    tags: ["rust", "typescript"],
  },
];

export async function GET() {
  return NextResponse.json(blogs);
}

export interface bloginfo {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: subject[];
}

export interface blogRequestBody {
  subject: subject[];
  date: Date;
}

export type subject = "rust" | "typescript" | "javascript" | "docker" | "news";
