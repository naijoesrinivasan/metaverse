import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Image from 'next/image'

export function InsightCard({ imgUrl, title, subtitle, index }: {
  imgUrl: string,
  title: string,
  subtitle: string,
  index: number
}) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className='flex flex-col items-center md:items-stretch md:flex-row gap-4 min-h-[300px]'
    >
      <Image
        src={imgUrl}
        width={300}
        height={250}
        alt='Icon'
        className='rounded-[20px]'
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className='font-normal text-[26px] text-white lg:text-[42px]'>{title}</h4>
          <p className='mt-[16px] font-normal text-[14px] text-secondary-white lg:text-[20px]'>{subtitle}</p>
        </div>
      </div>
      <motion.div
        whileHover={{ rotateZ: "29deg", cursor: "pointer" }}
        className='hidden md:flex items-center justify-center h-[90px] w-[120px] rounded-full bg-transparent
                   border border-white p-[10px] place-self-center'
      >
        <Image
          src="/arrow.svg"
          width={50}
          height={50}
          alt='Arrow'
        />
      </motion.div>
    </motion.div>
  )
}
