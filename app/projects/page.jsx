"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Machine Learning",
    title: "Movie Recommender System",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum consectetur laborum esse fugit omnis. Voluptates, ipsa laborum.",
    stack: [
      { name: "Python" },
      { name: "Streamlit" },
      { name: "Sci-Kit Learn" },
      { name: "Pandas" },
    ],
    image: "/assets/work/thumb1.png",
    live: " ",
    github: " ",
  },

  {
    num: "02",
    category: "Web Application Development",
    title: "Online Voting System",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum consectetur laborum esse fugit omnis. Voluptates, ipsa laborum.",
    stack: [
      { name: "Java" },
      { name: "SpringBoot" },
      { name: "Hibernate" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb2.png",
    live: " ",
    github: " ",
  },

  {
    num: "03",
    category: "Android Development",
    title: "Application System",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum consectetur laborum esse fugit omnis. Voluptates, ipsa laborum.",
    stack: [
      { name: "Java" },
      { name: "SpringBoot" },
      { name: "Hibernate" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb3.png",
    live: " ",
    github: " ",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center top-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className="text-4xl md:text-6xl xl:text-8xl leading-tight font-extrabold text-hollow text-outline">
                {project.num}
              </div>

              {/* project title */}
              <h2 className="text-2xl md:text-3xl xl:text-[42px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project category */}
              <h2 className="text-lg md:text-xl xl:text-2xl font-semibold leading-tight text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-sm md:text-base xl:text-white/60 text-white/60 leading-snug md:leading-normal">
                {project.description}
              </p>

              {/* project stack */}
              <ul className="flex flex-wrap gap-1 md:gap-2 max-w-full overflow-hidden break-words text-sm md:text-base">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-base text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20 my-1"></div>

              {/* buttons */}
              <div className="flex items-center gap-5">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[45px] h-[45px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[45px] h-[45px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[240px] md:h-[300px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex justify-between gap-4 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full xl:w-max xl:justify-between"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[18px] w-[32px] h-[32px] md:w-[36px] md:h-[36px] xl:w-[40px] xl:h-[40px] rounded-lg flex justify-center items-center transition-all"
                iconStyles="text-white text-xl md:text-[22px] xl:text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
