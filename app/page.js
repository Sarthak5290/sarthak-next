import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";
import htmlIcon from "../public/icons/html.png";
import cssIcon from "../public/icons/css.png";
import jsIcon from "../public/icons/js.png";
import reactIcon from "../public/icons/react.png";
import nextIcon from "../public/icons/nextjs.png";
import tailwindIcon from "../public/icons/tailwindcss.png";
import gitIcon from "../public/icons/git.png";
import githubIcon from "../public/icons/github.png";
import nodeIcon from "../public/icons/nodejs.png";
import mongodbIcon from "../public/icons/mongodb.png";
import pythonIcon from "../public/icons/python.png";
import javaIcon from "../public/icons/java.png";
import firebaseIcon from "../public/icons/firebase.png";

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

export default function Home() {
  // Configuration for floating icons
  const techIcons = [
    {
      src: htmlIcon,
      top: 5,  // Adjusted position
      left: 5,
      delay: 0,
      animationDuration: 12,
      rotationDelay: 2,
    },
    {
      src: cssIcon,
      top: 25,  // Adjusted position
      left: 80,
      delay: 2,
      animationDuration: 10,
      rotationDelay: 4,
    },
    {
      src: jsIcon,
      top: 45,  // Adjusted position
      left: 25,
      delay: 1,
      animationDuration: 14,
      rotationDelay: 6,
    },
    {
      src: reactIcon,
      top: 35,  // Adjusted position
      left: 95,
      delay: 3,
      animationDuration: 11,
      rotationDelay: 1,
    },
    {
      src: nextIcon,
      top: 35,  // Adjusted position
      left: 20,
      delay: 4,
      animationDuration: 13,
      rotationDelay: 3,
    },
    {
      src: tailwindIcon,
      top: 55,  // Adjusted position
      left: 50,
      delay: 5,
      animationDuration: 15,
      rotationDelay: 5,
    },
    {
      src: gitIcon,
      top: 15,  // Adjusted position
      left: 60,
      delay: 6,
      animationDuration: 12,
      rotationDelay: 7,
    },
    {
      src: githubIcon,
      top: 40,  // Adjusted position
      left: 10,
      delay: 7,
      animationDuration: 10,
      rotationDelay: 8,
    },
    {
      src: nodeIcon,
      top: 30,  // Adjusted position
      left: 45,
      delay: 8,
      animationDuration: 14,
      rotationDelay: 9,
    },
    {
      src: mongodbIcon,
      top: 60,  // Adjusted position
      left: 70,
      delay: 9,
      animationDuration: 11,
      rotationDelay: 10,
    },
    {
      src: pythonIcon,
      top: 50,  // Adjusted position
      left: 30,
      delay: 9,
      animationDuration: 11,
      rotationDelay: 10,
    },
    {
      src: javaIcon,
      top: 50,  // Adjusted position
      left: 75,
      delay: 9,
      animationDuration: 11,
      rotationDelay: 10,
    },
    {
      src: firebaseIcon,
      top: 45,  // Adjusted position
      left: 60,
      delay: 9,
      animationDuration: 11,
      rotationDelay: 10,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Floating background icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {techIcons.map((icon, index) => (
          <FloatingIcon key={index} {...icon} />
        ))}
      </div>

      {/* Existing page content */}
      <div className="relative z-10">
        <Hero />
        <Projects />
      </div>
    </div>
  );
}
