import React from "react";
import bgImg from "/background.jpg";
import speakerImg from "/ill.png";
import { Parallax, Background } from "react-parallax";
import { motion } from "framer-motion";

const Hero = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const imgAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <Parallax
      blur={{ min: -20, max: 15 }}
      bgImage={bgImg}
      bgImageStyle={{ "object-fit": "cover" }}
      strength={600}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="font-body bg-gradient-to-b from-[#000300] from-15% opac"
      >
        <div className="mx-8">
          <div className="h-screen flex mx-auto max-w-[1200px] bg-transparent items-center lg:flex-row justify-between">
            <div className="flex flex-col">
              <motion.h1
                variants={textAnimation}
                className="text-white font-extrabold text-[56px] w-2/3 z-10"
              >
                Welcome to my beat store
              </motion.h1>
            </div>
            <div>
              <motion.img
                variants={imgAnimation}
                src={speakerImg}
                alt=""
                className="rotate-12 -skew-y-3 md:static absolute right-4 top-1/4 z-[5] w-[200px] md:w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Parallax>
  );
};

export default Hero;
