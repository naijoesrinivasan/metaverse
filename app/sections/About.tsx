'use client';

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypingText } from "../components/CustomTexts";
import Image from "next/image";

export default function About() {
  return (
    <section className="paddings relative z-10">
      <div className="gradient-02 blur-blur02 z-0" />
      <motion.div
        variants={staggerContainer(0.25, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <TypingText title="| About Metaverse" textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new thing in the future, where you can enjoy the virtual
          world by feeling like it&apos;s really real, you can feel what you feel in this metaverse world, because this is really
          the <span className="font-extrabold text-white">madness of the metaverse</span> of today, using only <span className="font-extrabold text-white">VR</span> devices you
          can easily explore the metaverse world you want, turn your dreams into reality.
          Let&apos;s <span className="font-extrabold text-white">explore</span> the madness of the metaverse by scrolling down
        </motion.p>
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
        >
          <Image
            src="/arrow-down.svg"
            alt="Down Arrow"
            height={28}
            width={18}
            className="mt-[14px] md:mt-[28px]" />
        </motion.div>

      </motion.div>
    </section>
  )
}
