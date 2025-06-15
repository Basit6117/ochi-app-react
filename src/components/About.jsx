import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function About() {
  return (
    <div className='w-full py-20 bg-[#cdea68] rounded-tl-[10px] rounded-tr-[10px]'>
      <div className="text w-[85vw] px-12  text-5xl text-zinc-900 font-[Neue_Montreal] leading-12">
        <h1>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'> raise funds, sell prod­ucts, ex­plain com­plex ideas,</span> and <span className='underline'> hire great peo­ple.</span>
        </h1>
      </div>
      <div className=" p-6 flex w-full border-t-1 border-[#6c7648] mt-14">
<div className='w-1/2'>
<h1 className='text-black text-5xl'>Our approach:</h1>
<button className='px-9 py-3.5 uppercase bg-black flex gap-6 items-center rounded-full   text-white mt-5'>Read More
    <div className='h-2 w-2 rounded-full bg-zinc-100'></div>
     {/* <div className="pt-0 w-7 h-7 flex items-center justify-center bg-white  rounded-full border-[1px]  border-zinc-300">
               <GoArrowUpRight />
              </div> */}
</button>

</div>
<div className='w-1/2 h-[80vh] '>
<img className='rounded-[10px]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default About
About