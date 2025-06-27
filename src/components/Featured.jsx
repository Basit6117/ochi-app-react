import { animate, motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
  const card =  [useAnimation(), useAnimation(),useAnimation(),useAnimation() ]
  const handleHover = (index)=>{
card[index].start({y:'0'})
  }
 const handleHoverEnd  = (index)=>{
card[index].start({y:'100%'})
  }
  return (
    <div className='w-full py-18 font-[Neue_Montreal]'>
      <div className='w-full px-10 border-b-[1px] border-zinc-600 pb-10'>
        <h1 className='text-6xl tracking-tight'>Featured projects </h1>
      </div>
      <div className="px-14">
        <div className="cards  w-full flex gap-4 mt-20 font-['Founders_Grotesk_X-Condensed']">
          <motion.div   
          onHoverStart={()=>handleHover(0)} 
          onHoverEnd={()=>handleHoverEnd(0)}    
          className="cardContainer   relative  w-1/2 h-[80vh] font-semibold ">
            <div className=" overflow-hidden flex sailencelabs absolute leading-none left-full z-[999] -translate-x-1/2 top-1/2  -translate-y-1/2 tracking-tight text-8xl text-[#e1fb84]">
             {"SALIENCELABS".split('').map((item, index) => 
             <motion.span initial={{y: '100%'}} animate={card[0]} transition={{ease: [0.22,1,0.36,1], delay: index*.06}}
             className='inline-block'
             >{item}</motion.span>)}</div>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
            </div>
          </motion.div>
          <motion.div
          onHoverStart={()=>handleHover(1)} 
          onHoverEnd={()=>handleHoverEnd(1)}
          className="cardContainer relative  w-1/2 h-[80vh] ">
            <div className="flex absolute overflow-hidden  w-full leading-none right-full z-[999] translate-x-1/2 top-1/2  -translate-y-1/2 tracking-tight text-8xl text-[#e1fb84]">
             {"CARDSBOARD".split('').map((item, index) => 
             <motion.span
               animate={card[1]}
                transition={{ease: [0.22,1,0.36,1], 
                delay: index*.06}}
                className='inline-block'
                 >{item}</motion.span>)}
             </div>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img  src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
            </div>
          </motion.div>

        </div>
        <div className="px-2">
                  <div className="cards w-full flex gap-4 mt-20 font-['Founders_Grotesk_X-Condensed']">
           <motion.div 
          onHoverStart={()=>handleHover(2)} 
          onHoverEnd={()=>handleHoverEnd(2)}
           className="cardContainer relative  w-1/2 h-[80vh] font-semibold ">
            <div className=" overflow-hidden flex sailencelabs absolute leading-none left-full z-[999] -translate-x-1/2 top-1/2  -translate-y-1/2 tracking-tight text-8xl text-[#e1fb84]"> 
            {"FYDE".split('').map((item, index) => 
            <motion.span 
              animate={card[2]}
                transition={{ease: [0.22,1,0.36,1], 
                delay: index*.06}}
                className='inline-block'
            >{item}</motion.span>)}</div>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
            </div>
          </motion.div>
          <motion.div
          onHoverStart={()=>handleHover(3)} 
          onHoverEnd={()=>handleHoverEnd(3)}
          className="cardContainer relative  w-1/2 h-[80vh] font-semibold ">
            <div className=" overflow-hidden flex sailencelabs absolute leading-none right-full z-[999] translate-x-1/2 top-1/2  -translate-y-1/2 tracking-tight text-8xl text-[#e1fb84]"> 
            {"VISE".split('').map((item, index) => 
            <motion.span
                animate={card[3]}
                transition={{ease: [0.22,1,0.36,1], 
                delay: index*.06}}
                className='inline-block'
            >{item}</motion.span>)}</div>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
            </div>
          </motion.div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Featured
