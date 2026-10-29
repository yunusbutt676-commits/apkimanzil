type PropertyVideoProps = {
  src: string;
  poster?: string;
  title: string;
  vertical?: boolean;
};

export default function PropertyVideo({
  src,
  poster,
  title,
  vertical = false,
}: PropertyVideoProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gray-950 shadow-sm ${
        vertical ? "mx-auto max-w-sm aspect-[9/16]" : "aspect-video"
      }`}
    >
      <video
        className="h-full w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support video playback.
      </video>
    </div>
  );
}