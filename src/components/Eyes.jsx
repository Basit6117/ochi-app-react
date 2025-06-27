import React, { useState } from 'react'
import { useEffect } from 'react';
function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e)=>{
      let mouseX = e.clientX;
      let mouseY =  e.clientY;
      // console.log(mouseX, mouseY);
      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;
      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle - 180);
  };
      window.addEventListener("mousemove", handleMouseMove);
 return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  console.log(rotate);
  return (
    <div className='w-full h-screen overflow-hidden '>
        <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-12 w-1/3 h-36  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="rounded-full flex items-center justify-center w-[15vw] h-[15vw] bg-white">
          <div className="relative rounded-full h-2/3 w-2/3 flex items-center justify-center bg-black">
          <div  style={{transform: `translate(-5%, -30%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[20%] w-full">
             <div className="rounded-full h-8 w-8   bg-white"></div>
          </div>
          </div>
        </div>
         <div className="rounded-full flex items-center justify-center w-[15vw] h-[15vw] bg-white">
           <div className=" relative rounded-full h-2/3 w-2/3 flex items-center justify-center  bg-black">
           <div style={{transform: `translate(-5%, -30%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[20%] w-full">
             <div className="rounded-full h-8 w-8   bg-white"></div>
          </div>
           </div>
         </div>
        </div>
        
        </div>
      
    </div>
  )
}

export default Eyes
