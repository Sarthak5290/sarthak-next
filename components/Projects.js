"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`project-${index}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [index]);

  return (
    <motion.div
      id={`project-${index}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="relative group mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-900 p-4">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="mt-4 space-y-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack - Moved below description with enhanced design */}
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full 
                bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                text-cyan-400 border border-cyan-500/20
                hover:from-cyan-500/20 hover:to-blue-500/20 
                transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Get-me-a-chai",
      description:
        "Crowdfunding platform for developers built with Next.js, React, MongoDB, and Node.js.",
      imageSrc: "/projects/image2.png",
      tech: ["Next.js", "MongoDB", "Node.js"],
      github: "https://github.com/Sarthak5290/get-me-a-chai",

      link: "https://get-me-a-chai-murex.vercel.app/",
      category: "fullstack",
    },

    {
      title: "ThermaCloud9",
      description:
        "A freelance project for a client in the field of Engineering. A website for their business.",
      imageSrc: "/projects/image1.png",
      github: "https://github.com/Sarthak5290/thermacloud9",

      link: "https://thermacloud9.com/",
      tech: ["React", "Node.js", "MongoDB"],
      category: "fullstack",
    },
    {
      title: "Bitlinks",
      description:
        "Easy-to-use URL shortener with React, Node.js, and MongoDB.",
      imageSrc: "/projects/image3.png",
      link: "https://new-bitlinks.netlify.app/",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Sarthak5290/bitlinks",
      category: "frontend",
    },
    {
      title: "Mess-Menu",
      description:
        "A streamlined application for managing and editing menus effortlessly.",
      imageSrc: "/projects/image5.png",
      // link: "https://github.com/Sarthak5290/Mess-Menu",
      tech: ["React", "Node.js", "MongoDB"],
      category: "frontend",
      github: "https://github.com/Sarthak5290/Mess-Menu",
    },
    {
      title: "Currency-Converter",
      description:
        "Real-time currency converter with React frontend, Node.js backend, and Tailwind CSS for styling.",
      imageSrc: "/projects/image4.png",
      // link: "https://github.com/Sarthak5290/currency-converter",
      tech: ["React", "Node.js", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/Sarthak5290/currency-converter",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="mt-40 mb-12 relative group/section">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white transition-all duration-300 group-hover/section:text-blue-300">
          Projects
        </h1>

        {/* <div className="flex justify-center gap-4 mb-12">
          {["all", "frontend", "fullstack"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === filter
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
