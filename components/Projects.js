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
      {/* Animated border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-500"></div>

      {/* Card container with glass effect */}
      <div className="relative rounded-xl bg-gray-900/90 backdrop-blur-sm p-5 border border-gray-800 shadow-xl transition-all duration-300 hover:shadow-cyan-500/20 z-10">
        {/* Image container with improved hover effects */}
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          <div className="absolute top-3 right-3 z-10">
            <span
              className="px-3 py-1 text-xs font-medium rounded-full 
              bg-blue-500/20 text-blue-300 border border-blue-500/30
              backdrop-blur-sm"
            >
              {project.category}
            </span>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {/* Title with gradient effect on hover */}
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description with better typography */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 transition-colors duration-300 group-hover:text-gray-300">
            {project.description}
          </p>

          {/* Tech Stack with improved pill design */}
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full 
                bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                text-cyan-400 border border-cyan-500/20
                hover:from-cyan-500/20 hover:to-blue-500/20 
                hover:text-cyan-300 hover:scale-105
                transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links with enhanced hover effects */}
          <div className="flex gap-4 pt-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1"
              >
                <ExternalLink
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1"
              >
                <Github
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
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
      title: "True Feedback",
      description:
        "An anonymous feedback application built with Next.js. It enables users to receive anonymous feedback and provides AI-generated suggestions for responses.",
      imageSrc: "/projects/image8.png",
      tech: ["Next.js", "Google Gemini API", "Resend API"],
      category: "fullstack",
      github: "https://github.com/Sarthak5290/1true-feedbacks",
      link: "https://true-feedback-eosin.vercel.app/",
    },
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
      title: "Busineess-Dashboard",
      description:
        "This project is a business analytics dashboard built for managing and visualizing financial and operational data.",
      imageSrc: "/projects/image6.png",
      tech: ["Next.js", "Node.js", "Tailwind CSS", "Typescript"],
      category: "frontend",
      github: "https://github.com/Sarthak5290/currency-converter",
      link: "https://business-dashboard-flax.vercel.app/",
    },
    {
      title: "PDF-to-Text in Marathi and Image Extraction",
      description:
        "A Flask-based application designed for processing PDFs. It extracts text and images, matches images with captions, and generates structured XML outputs.",
      imageSrc: "/projects/image7.png",
      tech: ["Flask", "Python", "Pillow", "PyMuPDF"],
      category: "backend",
      github:
        "https://github.com/Sarthak5290/PDF-to-text-and-image-extraction--Marathi-Language-",
      link: "https://e-news-digital.onrender.com/",
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

  // Filter buttons
  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Full Stack", value: "fullstack" },
  ];

  return (
    <section className="mt-40 mb-12 relative group/section">
      <div className="container mx-auto px-4">
        {/* Animated title */}
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300">
          Projects
        </h1>

        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
