import { ReactNode } from "react";
import ChannelModalDialog from "../channelmodal/ChannelModalDialog";

export default function Channel({
  children,
  className,
  href,
}: {
  children?: ReactNode;
  className?: String;
  href: string;
}) {
  console.log(href.slice(1));
  return (
    <>
      <a href={`#${href.slice(1)}-modal`} className="flex h-full w-full justify-center items-center">
        <div
          className={`rounded-3xl bg-green-500 aspect-square md:aspect-auto md:h-full w-full shadow-lg overflow-clip ${
            className ? className : ""
          }`}
        >
        {children}
        </div>
      </a>
      <ChannelModalDialog href={href}>{children}</ChannelModalDialog>
    </>
  );
}
