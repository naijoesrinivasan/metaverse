'use client';

import { motion } from "framer-motion";
import { socials } from "@/utils/data";
import { footerVariants } from "@/utils/motion";
import Image from "next/image";

export function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="paddings relative"
    >
      <div className="footer-gradient" />
      <div className="innerWidth mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold text-[40px] md:text-[64px] text-white">Enter the Metaverse</h4>
          <button className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
            <Image
              src='/headset.svg'
              width={24}
              height={24}
              alt="Headset"
            />
            <span className="font-normal text-[16px] text-white">ENTER METAVERSE</span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">METAVERSES</h4>
            <p className="font-normal text-[14px] text-white opacity-50">All Rights Reserves &copy; Naijoe Srinivasan</p>
            <div className="flex gap-4">
              {socials.map((image) => (
                <Image
                  src={image.url}
                  alt={image.name}
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
