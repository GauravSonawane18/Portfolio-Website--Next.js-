"use client";

// Experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "My experience in the industry",
  items: [
    {
      company: "WebKorps Services",
      position: "Java Development Intern",
      duration: "May 2024 - Jul 2024",
    },
    {
      company: "Techno Solutions",
      position: "Python Development Intern",
      duration: "Jan 2024 - Mar 2024",
    },
  ],
};

// About data
const about = {
  title: "About me",
  description: [
    "I’m a curious and driven individual who believes that the best ideas come from a mix of creativity, collaboration, and constant learning. With a strong foundation in problem-solving and attention to detail, I enjoy turning challenges into opportunities for growth. I value teamwork, clear communication, and bringing positive energy to every project I work on. Whether I'm building, designing, or brainstorming, I approach every task with passion, persistence, and a mindset focused on delivering real impact.",
  ],
  items: [
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

// Education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "My Educational Background",
  items: [
    {
      institution: "Pimpri Chinchwad University",
      degree: "Master of Computer Applications",
      duration: "Aug 2024 - Jun 2026",
    },
    {
      institution: "MGM University, Sambhajinagar",
      degree: "Bachelor of Science (IT)",
      duration: "Aug 2021 - Jun 2024",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full lg:w-1/2 w-max-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="interest">Interest</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col text-center xl:text-left">
                <h3 className="text-4xl font-bold py-0">{about.title}</h3>

                <ScrollArea>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 py-6">
                    {about.description}
                  </p>

                  <ul className="grid grid-cols-1 lg:grid-cols-3 my-4 gap-6 lg:gap-6">
                    {about.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[100px] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent text-sm">{item.fieldName}</span>
                          <div className="flex items-center gap-4">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <h2 className="text-white text-xl max-w-[260px] text-center lg:text-left">
                              {item.fieldValue}
                            </h2>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* interest */}
            <TabsContent value="interest" className="w-full">
              interest
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
