'use client';

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import Image from "next/image";

export default function Feedback() {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col lg:flex-row gap-6"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex flex-col flex-1 lg:max-w-[370px] justify-end gradient-05 p-4 sm:p-8 rounded-[32px] 
                     border border-[#6a6a6a]"
        >
          <div className="feedback-gradient" />
          <div className="">
            <h4 className="font-bold text-[26px] sm:text-[32px] leading-[36px] sm:leading-[40px] text-white">Samantha</h4>
            <p className="mt-[8px] font-normal text-[12px] sm:text-[18px] leading-[16px] sm:leading-[22px] text-white">Founder | Metaverse</p>
          </div>
          <p className="mt-[24px] font-light text-[18px] sm:text-[24px] leading-[39px] sm:leading-[45px] text-white">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center min-h-[300px]"
        >
          <Image
            src='/planet-09.png'
            alt="Planet 09"
            fill
            className="object-cover rounded-[40px]"
          />
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="hidden lg:block h-[155px] w-[155px] absolute -left-[10%] top-[3%]"
          >
            <Image
              src="/stamp.png"
              fill
              alt="stamp"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
