import Image from "next/image";

const FloatingIcon = ({
  src,
  top,
  left,
  delay,
  animationDuration,
  rotationDelay,
}) => {
  return (
    <div
      className="absolute opacity-20 animate-float animate-rotate"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${animationDuration}s`,
        animationPlayState: "running",
      }}
    >
      <Image
        src={src}
        alt="Tech Icon"
        width={48}
        height={48}
        className="w-12 h-12 animate-spin-slow"
        style={{
          animationDelay: `${rotationDelay}s`,
        }}
      />
    </div>
  );
};

export default FloatingIcon;
