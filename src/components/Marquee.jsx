import React from 'react'
// import { motion } from "motion/react"
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-[10px]  rounded-tr-[10px] bg-[#004d43]  '>
      <div className="flex py-20 border-t-[1px] border-b-[1px] border-zinc-400 uppercase text-[5vw] font-['Founders_Grotesk_X-Condensed'] overflow-hidden white-space-nowrap">
        <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{ease:"linear", repeat: Infinity, duration:10}} className=''>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{ease:"linear", repeat: Infinity, duration:10}} className=''> we are ochi</motion.h1>
         <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{ease:"linear", repeat: Infinity, duration:10}} className=''> we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
