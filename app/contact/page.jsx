"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Import } from "lucide-react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7447728645",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gauravsonawane1722.@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Pune, Maharashtra, India, 411002",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-3 p-6 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">let's work together</h3>
              <p className="text-white/60 leading-snug font-thin text-sm">
              Feel free to reach out for collaborations, freelance opportunities, internships, or full-time roles. Whether it’s a project, idea, or just a question—I’d love to connect and hear from you.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="est">Application Development</SelectItem>
                    <SelectItem value="est">DevOps / Pipeline</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[144px]"
                placeholder="Type your message here."
              />
              {/* send button */}
              <Button size="sm" className="max-w-40">send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              <h3 className="text-2xl text-accent ">Contact Me</h3>
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[44px] h-[44px] xl:w-[56px] xl:h-[56px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[24px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm xl:text-md">{item.title}</p>
                    <h3 className="text-lg xl:text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
