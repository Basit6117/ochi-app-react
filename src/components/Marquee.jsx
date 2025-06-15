import React from 'react'
// import { motion } from "motion/react"
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full py-10 rounded-tl-[10px]  rounded-tr-[10px] bg-[#004d43]  '>
      <div className="text inline-flex space-x-10 border-t-[1px] border-b-[1px] border-zinc-400 uppercase justify-center items-center overflow-hidden white-space-nowrap ">
        <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{ease:"linear", repeat: Infinity, duration:5}} className='text-[7vw] leading-none font-["Founders_Grotesk_X-Condensed"] tracking-tight w-full mb-10 font-semibold pt-10'>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{ease:"linear", repeat: Infinity, duration:5}} className='text-[7vw] leading-none font-["Founders_Grotesk_X-Condensed"] tracking-tight w-full  mb-10 font-semibold pt-10'>we are ochi</motion.h1>
         <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{ease:"linear", repeat: Infinity, duration:5}} className='text-[7vw] leading-none font-["Founders_Grotesk_X-Condensed"] tracking-tight w-full  mb-10 font-semibold pt-10'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
