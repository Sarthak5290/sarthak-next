import React from "react";
import Image from "next/image";
import heroImg from "../public/avatar2.jpeg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  // Social media links
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/sarthak5290",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/sarthak-gaikwad-848288529029082003",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={24} />,
      url: "https://twitter.com/Sarthak27400371",
      label: "Twitter",
    },
  ];

  return (
    <section className="mt-16 sm:mt-24 md:mt-32 pt-8 sm:pt-12 md:pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main flex container with responsive breakpoints */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">
          {/* Text Content - Order changes for mobile */}
          <div className="order-2 md:order-1 flex-1 mt-8 md:mt-0 text-center md:text-left">
            <div className="max-w-xl mx-auto md:ml-0 lg:ml-8 xl:ml-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="text-gray-600 dark:text-white block sm:inline">
                  Hello! I&apos;m
                </span>{" "}
                <span className="text-dark-blue dark:text-[#99edfc]">
                  Sarthak Gaikwad
                </span>
              </h2>

              {/* Typing Animation */}
              <h5 className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600 dark:text-white">
                <ReactTyped
                  strings={["Frontend Web Developer", "Backend Web Developer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h5>

              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Hi there! My name is Sarthak Gaikwad. I have hands-on experience
                in web development and a passion for coding and problem-solving.
                I aim to inspire and help others grow in the world of tech!
              </p>

              {/* Social Links for mobile - hidden on desktop */}
              <div className="flex gap-4 mt-6 justify-center md:hidden">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-dark-blue dark:text-gray-400 dark:hover:text-[#99edfc] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image Container - Order changes for mobile */}
          <div className="order-1 md:order-2 flex-1 flex flex-col items-center">
            <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              {/* Animated Border */}
              <div className="absolute -inset-1 overflow-hidden rounded-[3rem_0.5rem_0.5rem_0.5rem]">
                <div className="absolute inset-0 animate-border-movement bg-gradient-to-r from-transparent via-[#7ed4e6] to-transparent">
                  <style jsx>{`
                    @keyframes border-movement {
                      0% {
                        background-position: 0% 50%;
                        filter: blur(5px) brightness(1);
                      }
                      50% {
                        background-position: 100% 50%;
                        filter: blur(10px) brightness(1.2);
                      }
                      100% {
                        background-position: 0% 50%;
                        filter: blur(5px) brightness(1);
                      }
                    }

                    .animate-border-movement {
                      background-size: 200% 200%;
                      animation: border-movement 5s ease infinite;
                      box-shadow: 0 0 15px rgba(126, 212, 230, 0.5),
                        inset 0 0 15px rgba(126, 212, 230, 0.3);
                    }
                  `}</style>
                </div>
              </div>

              {/* Image */}
              <Image
                alt="Sarthak Gaikwad"
                src={heroImg}
                fill
                className="relative object-cover rounded-[3rem_0.5rem_0.5rem_0.5rem] shadow-2xl"
                priority
              />
            </div>

            {/* Social Links for desktop - hidden on mobile */}
            <div className="hidden md:flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-dark-blue dark:text-gray-400 dark:hover:text-[#99edfc] transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
