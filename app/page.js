// app/page.js (or components/Home.js depending on your file structure)
"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import FloatingIcon from "@/components/FloatingIcon";
import { techIcons } from "@/config/FloatingIcons";
// import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {techIcons.map((icon, index) => (
          <FloatingIcon key={index} {...icon} />
        ))}
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Projects />
      </div>
      {/* Chatbot Component */}
      {/* <Chatbot />  */}
    </div>
  );
}
