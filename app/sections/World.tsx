'use client';

import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components/CustomTexts";
import { staggerContainer, fadeIn } from "@/utils/motion";
import Image from "next/image";

export default function World() {
  return (
    <section className="paddings relative z-10 h-fit">
      <motion.div
        variants={staggerContainer(0.25, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            src='/map.png'
            fill
            alt="Map"
            className="object-contain"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-01.png"
              alt="People 01"
              width={200}
              height={200}
            />
          </div>
          <div className="absolute top-[30%] left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-02.png"
              alt="People 02"
              width={200}
              height={200}
            />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-03.png"
              alt="People 03"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
