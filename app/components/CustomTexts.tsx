'use client';

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";
import { ReactElement } from "react";

export function TypingText({ title, textStyles }: {
  title: string
  textStyles: string | Element
}) {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-secondary-white text-[14px] ${textStyles}`}>
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  )
}

export function TitleText({ title, textStyles }: {
  title: string | ReactElement,
  textStyles: string
}) {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold text-[40px] md:text-[64px] text-white ${textStyles}`}>
      {title}
    </motion.h2>
  )
}