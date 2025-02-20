import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Add this import

const Footer = () => {
  // Social media links
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
    <footer className="bg-black">
      <div className="max-w-screen-xl px-4 py-0 mb-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-8 mt-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
