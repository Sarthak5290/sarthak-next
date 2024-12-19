import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import FloatingIcon from "@/components/FloatingIcon";
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

export default function Home() {
  // Configuration for floating icons - First set
  const techIcons = [
    { src: htmlIcon, top: 8, left: 12, delay: 0, animationDuration: 15, rotationDelay: 3 },
    { src: cssIcon, top: 35, left: 85, delay: 1, animationDuration: 12, rotationDelay: 5 },
    { src: jsIcon, top: 55, left: 20, delay: 2, animationDuration: 18, rotationDelay: 7 },
    { src: reactIcon, top: 42, left: 92, delay: 3, animationDuration: 14, rotationDelay: 2 },
    { src: nextIcon, top: 28, left: 15, delay: 4, animationDuration: 16, rotationDelay: 4 },
    { src: tailwindIcon, top: 65, left: 45, delay: 5, animationDuration: 20, rotationDelay: 6 },
    { src: gitIcon, top: 18, left: 68, delay: 1, animationDuration: 15, rotationDelay: 8 },
    { src: githubIcon, top: 48, left: 8, delay: 2, animationDuration: 13, rotationDelay: 9 },
    { src: nodeIcon, top: 38, left: 52, delay: 3, animationDuration: 17, rotationDelay: 10 },
    { src: mongodbIcon, top: 72, left: 75, delay: 4, animationDuration: 14, rotationDelay: 11 },
    { src: pythonIcon, top: 58, left: 35, delay: 5, animationDuration: 16, rotationDelay: 12 },
    { src: javaIcon, top: 62, left: 82, delay: 0, animationDuration: 15, rotationDelay: 13 },
    { src: firebaseIcon, top: 52, left: 65, delay: 1, animationDuration: 14, rotationDelay: 14 },
    // Second set of icons with different positions and timings
    { src: htmlIcon, top: 82, left: 88, delay: 2, animationDuration: 16, rotationDelay: 4 },
    { src: cssIcon, top: 15, left: 42, delay: 3, animationDuration: 13, rotationDelay: 6 },
    { src: jsIcon, top: 25, left: 95, delay: 4, animationDuration: 19, rotationDelay: 8 },
    { src: reactIcon, top: 78, left: 28, delay: 5, animationDuration: 15, rotationDelay: 3 },
    { src: nextIcon, top: 88, left: 62, delay: 0, animationDuration: 17, rotationDelay: 5 },
    { src: tailwindIcon, top: 32, left: 78, delay: 1, animationDuration: 21, rotationDelay: 7 },
    { src: gitIcon, top: 85, left: 15, delay: 2, animationDuration: 16, rotationDelay: 9 },
    { src: githubIcon, top: 12, left: 92, delay: 3, animationDuration: 14, rotationDelay: 10 },
    { src: nodeIcon, top: 92, left: 42, delay: 4, animationDuration: 18, rotationDelay: 11 },
    { src: mongodbIcon, top: 22, left: 32, delay: 5, animationDuration: 15, rotationDelay: 12 },
    { src: pythonIcon, top: 75, left: 55, delay: 0, animationDuration: 17, rotationDelay: 13 },
    { src: javaIcon, top: 18, left: 25, delay: 1, animationDuration: 16, rotationDelay: 14 },
    { src: firebaseIcon, top: 5, left: 72, delay: 2, animationDuration: 15, rotationDelay: 15 }
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