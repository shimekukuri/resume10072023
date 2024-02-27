import Channel from "../channel/Channel";
import image from "../../../public/rust2.jpeg"

export default function Rust() {
  return (
    <Channel href="/rust">
      <div
        className="flex-1 h-full w-full relative flex justify-center items-center"
        style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: '20px right'}}
      >
        <div className="text-7xl text-orange-400">RUST</div>

        <div className="absolute channel w-full h-full z-10"></div>
      </div>
    </Channel>
  );
}
