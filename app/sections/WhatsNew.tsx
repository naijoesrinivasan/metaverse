'use client';

import { motion } from "framer-motion";

import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import { NewFeatures } from "../components/NewFeatures";
import { newFeatures } from "@/utils/data";
import Image from "next/image";

export default function WhatsNew() {
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
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's New" textStyles="text-white" />
          <TitleText title={<>What&apos;s new about Metaverse?</>} textStyles="" />
          <div className="mt-[48px] flex flex-wrap justify-between gap-12">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className="flexCenter flex-1 "
        >
          <Image
            src="/whats-new.png"
            alt="What's New"
            height={400}
            width={400}
            quality={100}
            className="object-contain z-10 flex-1"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
