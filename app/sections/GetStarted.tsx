'use client';

import { motion } from "framer-motion"

import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion"
import Image from "next/image";
import { TitleText, TypingText } from "../components/CustomTexts"
import { startingFeatures } from "@/utils/data";
import StartSteps from "../components/StartSteps";

export default function GetStarted() {
  return (
    <section className="paddings relative z-10 h-fit">
      <motion.div
        variants={staggerContainer(0.25, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col lg:flex-row gap-8"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flexCenter flex-1 "
        >
          <Image
            src="/get-started.png"
            alt="Get Started"
            height={400}
            width={400}
            quality={100}
            className="object-contain z-10 flex-1" />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaverse Works" textStyles="text-white" />
          <TitleText title={<>Get Started with just a few clicks</>} textStyles="" />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-12">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
