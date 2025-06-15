import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

export default function LandingPage() {
  return (
    <div className='w-full h-[100%] pt-1 bg-zinc-900'>
      <div className="textstructure mt-52 px-20">
        {['we create', 'Eye-Opening', 'Presentations'].map((item, index) => {
          return <div className="masker text-[7.5vw] leading-[7vw] tracking-tighter  font-['Founders_Grotesk_X-condensed'] font-medium">
          <div className="w-fit flex items-center overflow-hidden">
         {index === 1 && 
         <motion.div  initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration: 1}} className='w-[8vw] h-[11vh] mt-4.5 mr-[1vh] '>
<img className='rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
          </motion.div>}
            <h1 key={index} className='uppercase '>{item}</h1></div>  
          </div>
        })}
      </div>
       <div className="flex justify-between items-center py-5 px-20 border-t-2 border-zinc-700 mt-32">
        {['For public and private companies', 'From the first pitch to IPO'].map((item, index)=>{
          return <p className='text-md font-light leading-none ' key={index}>{item}</p>
        })}
        <div className="start flex gap-2 ">
          <div className='px-6 py-2 border-[1px] rounded-full border-zinc-300 uppercase font-light text-sm'>
            start the project
          </div>
          <div className="pt-0 w-7 h-7 mt-2 flex items-center justify-center  rounded-full border-[1px]  border-zinc-300">
           <GoArrowUpRight />
          </div>
        </div>
       </div>

    </div>
  )
}
