import React from "react";
import Image from "next/image";
import heroImg from "../public/avatar2.jpeg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Add this import

const Hero = () => {
  // Add social media links
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
    <section className="mt-32 pt-12 md:pt-16">
    

      {/* desktop / large screen view */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {/* Reduced the gap here */}
            <div className="flex-1 ml-36">
              <div className="max-w-xl">
                <h2 className="text-5xl font-bold">
                  <span className="text-gray-600 dark:text-white">
                    Hello! I&apos;m
                  </span>{" "}
                  <span className="text-dark-blue dark:text-[#99edfc]">
                    Sarthak Gaikwad
                  </span>
                </h2>
                <h5 className="mt-4 text-xl text-gray-600 dark:text-white">
                  Fullstack Web Developer
                </h5>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                Hi there! My name is Sarthak Gaikwad. I have hands-on experience in web development and a passion for coding and problem-solving.  I aim to inspire and help others grow in the world of tech!







                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="relative w-[400px] h-[400px]">
                <Image
                  alt="Sarthak Gaikwad"
                  src={heroImg}
                  fill
                  className="object-cover rounded-[3rem_0.5rem_0.5rem_0.5rem] shadow-2xl"
                  priority
                />
              </div>
              {/* Add social icons for desktop */}
              <div className="flex gap-4 mt-6">
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
      </div>
      {/* mobile / small screen view */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[300px] h-[300px] relative">
              <Image
                alt="Sarthak Gaikwad"
                src={heroImg}
                fill
                className="object-cover rounded-[3rem_0.5rem_0.5rem_0.5rem] shadow-xl"
                priority
              />
            </div>
            {/* Add social icons for mobile */}
            <div className="flex gap-4 mt-6 mb-8">
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
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                <span className="text-gray-600 dark:text-white">
                  Hello! I&apos;m
                </span>{" "}
                <span className="text-dark-blue dark:text-[#99edfc]">
                  Sarthak Gaikwad
                </span>
              </h2>
              <h5 className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                Fullstack Web Developer
              </h5>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                Hi there! My name is Sarthak Gaikwad and I&rsquo;m a software
                engineer with over 5 years of experience in the industry. I love
                all things tech and coding, and on my channel, I share my
                knowledge and experience with others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
