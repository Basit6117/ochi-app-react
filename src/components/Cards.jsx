import React from 'react'

function Cards() {
  return (
    <div className='w-full h-full bg-zinc-900  mt-10'>
        <div className="p-10 flex gap-4">
<div className="cardContainer w-1/2 h-[60vh] p-5">
<div className="relative card flex items-center justify-center w-full h-full bg-[#004d43] rounded-2xl">
    <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
    <button className='absolute left-3 bottom-2 px-2 py-[1px] rounded-full border-2 border-[#e1fb84] text-[#e1fb84]'>&copy; 2019-2022</button>
</div>
</div>     
<div className="cardContainer flex gap-4 w-1/2 h-[60vh] p-5">
<div className="card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-2xl">
<img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
 <button className='absolute left-3 uppercase bottom-2 px-2 py-[1px] rounded-full border-2 tracking-tighter border-zinc-100'>Rating 5.0 on clutch</button>
</div>
<div className="card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-2xl">
<img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
 <button className='absolute left-3 uppercase bottom-2 px-2 py-[1px] rounded-full border-2 tracking-tighter border-zinc-100'>Bussiness bootcamp alumni</button>
</div>
</div>     
</div>
    </div>
  )
}

export default Cards
