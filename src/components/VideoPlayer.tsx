"use client";

interface VideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function VideoPlayer({
  src,
  className,
  style,
}: VideoPlayerProps) {
  return (
    <video
      className={className}
      style={style}
      controls
      preload="metadata"
    >
      <source src={src} type="video/quicktime" />
      <source src={src} type="video/mp4" />
      თქვენი ბრაუზერი არ უჭერს მხარს ვიდეოს ჩვენებას.
    </video>
  );
}
