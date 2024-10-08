'use client';

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { TypingText, TitleText } from "../components/CustomTexts";
import { InsightCard } from "../components/InsightCard";
import { insights } from "@/utils/data";

export default function Insights() {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer(0.25, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about Metaverse" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
