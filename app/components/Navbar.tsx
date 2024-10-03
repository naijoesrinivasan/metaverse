'use client';

import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'
import Image from 'next/image';

export const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`xPaddings py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 blur-blur01" />
      <div className={`xPaddings mx-auto flex justify-between gap-8`}>
        <Image
          src='search.svg'
          width={24}
          height={24}
          alt='Search Icon'
          className='object-contain'
        />
        <h2 className='text-secondary-white'>METAVERSE</h2>
        <Image
          src='/menu.svg'
          width={24}
          height={24}
          alt='Menu'
          className='object-contain' />
      </div>
    </motion.nav>
  )
}
