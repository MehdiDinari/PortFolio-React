"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* Section Texte */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Boîte d'introduction */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">About</h1>
        </motion.div>

        {/* Titre principal */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Mehdi Dinari{" "}
            </span>
            , Welcome to my Portfolio
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a  
          <span className="font-bold text-indigo-400">
            {" "}Full Stack Developer, Data Scientist, and Data Analyst{" "}
          </span>
          , I have strong knowledge in Machine Learning and Deep Learning.
        </motion.p>

        {/* Bouton Learn More */}
        <motion.a
          href="https://www.linkedin.com/in/mehdi-dinari-b0487a2a9/"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          target="_blank"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Image de droite */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/test.png"
          alt="work icons"
          height={400}
          width={400}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
