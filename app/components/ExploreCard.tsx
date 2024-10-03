'use client';

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export function ExploreCard({ id, imgUrl, title, index, active, handleClick }: {
  id: string,
  imgUrl: string,
  title: string,
  index: number,
  active: string,
  handleClick: Dispatch<SetStateAction<string>>
}) {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} 
                  flex justify-center items-center min-w-[170px] h-[700px] transition-[flex] duration-[0.5s]
                  ease-out-flex cursor-pointer`}
    >
      <Image
        src={imgUrl}
        alt={title}
        fill={true}
        className="absolute w-full h-full object-cover rounded-[24px]"
        onClick={() => handleClick(id)}
      />
      {active !== id ? (
        <h3 className="font-semibold text-white text-[18px] sm:text-[26px] absolute lg:bottom-20 z-0 lg:-rotate-90 lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex flex-col justify-start w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className="flexCenter w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
            <Image
              src='/headset.svg'
              alt="Headset"
              height={20}
              width={20}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">Enter the Metaverse</p>
          <h2 className="mt-[24px] font-semibold text-[24px] sm:text-[32px] text-white">{title}</h2>
        </div>
      )}
    </motion.div>
  )
}
