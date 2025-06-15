import React from 'react'

function Featured() {
  return (
    <div className='w-full py-18 font-[Neue_Montreal]'>
      <div className='w-full px-10 border-b-[1px] border-zinc-600 pb-10'>
        <h1 className='text-6xl tracking-tight'>Featured projects </h1>
      </div>
      <div className="px-14 ">
        <div className="cards w-full flex gap-4 mt-20 font-['Founders_Grotesk_X-Condensed']">
          <div className="cardContainer  relative  w-1/2 h-[80vh] font-semibold ">
            <div className=" sailencelabs absolute leading-none left-full z-[999] -translate-x-1/2 top-1/2  -translate-y-1/2 tracking-tight text-8xl text-[#e1fb84]"> {"SALIENCELABS".split('').map((item, index) => <span>{item}</span>)}</div>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
            </div>
          </div>
          <div className="cardContainer relative  w-1/2 h-[80vh] ">
            <div className="absolute  w-full leading-none right-full z-[999] translate-x-1/2 top-1/2  -translate-y-1/2 tracking-tight text-8xl text-[#e1fb84]"> {"CARDSBOARD SPACESHIP".split('').map((item, index) => <span>{item}</span>)}</div>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img  src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
            </div>
          </div>

        </div>
        <div className="px-2">
                  <div className="cards w-full flex gap-4 mt-20 font-['Founders_Grotesk_X-Condensed']">
           <div className="cardContainer relative  w-1/2 h-[80vh] font-semibold ">
            <div className=" sailencelabs absolute leading-none left-full z-[999] -translate-x-1/2 top-1/2  -translate-y-1/2 tracking-tight text-8xl text-[#e1fb84]"> {"FYDE".split('').map((item, index) => <span>{item}</span>)}</div>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
            </div>
          </div>
          <div className="cardContainer relative  w-1/2 h-[80vh] font-semibold ">
            <div className=" sailencelabs absolute leading-none right-full z-[999] translate-x-1/2 top-1/2  -translate-y-1/2 tracking-tight text-8xl text-[#e1fb84]"> {"VISE".split('').map((item, index) => <span>{item}</span>)}</div>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Featured
