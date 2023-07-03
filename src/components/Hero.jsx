import React from "react";
import bgImg from "/background.svg";
import speakerImg from "/ill.png";
import { Parallax, Background } from "react-parallax";
import { motion } from "framer-motion";
import textureImg from "/texture.jpg"

const Hero = () => {
  const textAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const imgAnimation = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 12,
    },
  };

  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={bgImg}
      bgImageStyle={{ "object-fit": "cover" }}
      strength={300}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="font-body bg-gradient-to-b from-[#000300] from-15% opac"
      >
        <img src={textureImg} className="object-cover absolute opacity-10 z-[15] w-full h-full"></img>
        <div className="mx-8">
          <div className="h-screen flex mx-auto max-w-[1200px] bg-transparent items-center lg:flex-row justify-between">
            <div className="flex flex-col">
              <motion.h1
                variants={textAnimation}
                transition={{ delay: 0.5 }}
                className="text-white font-extrabold text-[56px] z-10 pb-4"
              >
                Welcome to
              </motion.h1>
              <motion.h1
                variants={textAnimation}
                transition={{ delay: 0.7 }}
                className="text-white font-extrabold text-[48px] z-10"
              >
                <span className="text-red-600">1rowvy</span> beat store
              </motion.h1>
            </div>
            <div className="md:flex hidden">
              <motion.img
                variants={imgAnimation}
                transition={{ duration: 0.5 }}
                src={speakerImg}
                alt=""
                className="-skew-y-3 absolute right-6 top-1/4 z-[5] w-[370px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Parallax>
  );
};

export default Hero;
