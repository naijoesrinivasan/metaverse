'use client';

import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components/CustomTexts";
import { ExploreCard } from "../components/ExploreCard";
import { staggerContainer } from "@/utils/motion";
import { useState } from "react";
import { exploreWorlds } from '@/utils/data'

export default function Explore() {
  const [active, setActive] = useState('world-2')

  return (
    <section className="paddings" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText title={<>Choose the world you want <br className="hidden md:block" /> to explore</>} textStyles="text-center leading-[36px] lg:leading-[60px]" />
        <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
