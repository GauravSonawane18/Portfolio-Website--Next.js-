import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-8">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none px-4">
            <span className="text-sm sm:text-base text-white/60 block mb-2">Software Developer</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Gaurav Sonawane</span>
            </h1>
            <span className="text-base sm:text-lg text-white/60 block mb-1">Tech Tamer</span>
            <span className="text-base sm:text-lg text-white/60 block mb-1">
              Converts air into code
            </span>{" "}
            <br />

            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="./assets/Gaurav Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-acccent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
