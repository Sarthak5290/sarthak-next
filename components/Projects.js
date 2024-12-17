"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const projects = [
    {
      title: "Get-me-a-chai",
      description:
        "Get Me A Chai is a crowdfunding platform created using Next.js (app route), React, MongoDB, and Node.js. It is designed for developers who need funds to complete their projects. Fans and supporters of developers or project creators can support them by sending funds.",
      imageSrc: "/projects/image2.png",
      link: "https://get-me-a-chai-murex.vercel.app/",
    },
    {
      title: "ThermaCloud9",
      description:
        "It is a freelance project for a client who is a professional in the field of Engineering. The project is a website for his business.",
      imageSrc: "/projects/image1.png",
      link: "https://thermacloud9.com/",
    },
    {
      title: "Bitlinks",
      description:
        "Easy-to-use URL shortener with React, Node.js, and MongoDB.",
      imageSrc: "/projects/image3.png",
      link: "https://new-bitlinks.netlify.app/",
    },
    {
      title: "Mess-Menu",
      description:
        "A streamlined application for managing and editing menus effortlessly.",
      imageSrc: "/projects/image5.png",
      link: "https://github.com/Sarthak5290/Mess-Menu",
    },
    {
      title: "Currency-Converter",
      description:
        "Real-time currency converter with React frontend, Node.js backend, and Tailwind CSS for styling.",
      imageSrc: "/projects/image4.png",
      link: "https://github.com/Sarthak5290/currency-converter",
    },
  ];

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const onSelect = React.useCallback((emblaApi) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="mt-40 mb-12 relative group/section">
      <div className="container mx-auto px-4">
        <h1
          className="text-4xl font-bold text-center mb-12 text-white 
          transition-all duration-300 group-hover/section:text-blue-300"
        >
          Projects
        </h1>

        <div className="relative">
          {/* Carousel Container */}
          <div
            className="overflow-hidden touch-pan-y select-none"
            ref={emblaRef}
          >
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] 
                    transition-all duration-300"
                >
                  <div
                    className="bg-white border border-gray-200 rounded-xl 
                    shadow-lg dark:bg-[#1e1e1e] dark:border-gray-800 
                    overflow-hidden transition-all duration-300 
                    hover:shadow-2xl hover:scale-[1.03] 
                    group/card h-full"
                  >
                    <a
                      href={project.link}
                      className="block relative group/image"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image
                          className="object-cover transition-transform duration-300 
                            group-hover/image:scale-110"
                          src={project.imageSrc}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                        />
                        <div
                          className="absolute inset-0 bg-black/20 
                          opacity-0 group-hover/image:opacity-100 
                          transition-opacity duration-300"
                        ></div>
                      </div>
                    </a>
                    <div className="p-5 space-y-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h5
                          className="text-2xl font-bold tracking-tight 
                          text-gray-900 dark:text-white 
                          group-hover/card:text-blue-600 
                          transition-colors duration-300"
                        >
                          {project.title}
                        </h5>
                      </a>
                      <p
                        className="text-gray-600 dark:text-gray-300 
                        line-clamp-3"
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className={cn(
              `absolute left-0 top-1/2 -translate-y-1/2 
              bg-gradient-to-r from-blue-500/70 to-blue-700/70 
              hover:from-blue-600/80 hover:to-blue-800/80 
              text-white p-3 rounded-full shadow-lg 
              transition-all duration-300 z-10 
              hidden md:block 
              opacity-0 group-hover/section:opacity-100 
              focus:outline-none focus:ring-2 focus:ring-blue-500`,
              !canScrollPrev && "opacity-20 cursor-not-allowed"
            )}
            disabled={!canScrollPrev}
            aria-label="Previous projects"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={scrollNext}
            className={cn(
              `absolute right-0 top-1/2 -translate-y-1/2 
              bg-gradient-to-r from-blue-500/70 to-blue-700/70 
              hover:from-blue-600/80 hover:to-blue-800/80 
              text-white p-3 rounded-full shadow-lg 
              transition-all duration-300 z-10 
              hidden md:block 
              opacity-0 group-hover/section:opacity-100 
              focus:outline-none focus:ring-2 focus:ring-blue-500`,
              !canScrollNext && "opacity-20 cursor-not-allowed"
            )}
            disabled={!canScrollNext}
            aria-label="Next projects"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
