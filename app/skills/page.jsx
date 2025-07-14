"use client";

import { FaHtml5, FaCss3, FaJava, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiNumpy,
  SiScikitlearn,
  SiPandas,
  SiTensorflow
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const skills = {
  title: "My Skills",
  description: "Tools I’ve grown with - shaping ideas into experiences, and code into collaboration.",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiNumpy />,
      name: "Numpy",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgresql",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiScikitlearn />,
      name: "Scikit-Learn",
    },
    {
      icon: <SiPandas />,
      name: "Pandas",
    },
  ],
};

const Skills = () => {
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
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 xl:gap-7">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-5xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Skills;
