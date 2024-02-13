import React from 'react'

export const FeaturedCard = ({image, title, text, price, id}) => {
  return (
   <div id={id} className=' max-w-[270px] shadow-xl text-center carousel-item w-1/4 flex flex-col'>
        <div className='w-[100%] bg-[#F6F7FB] h-[60%]'>
             <img className=' w-full h-full' src={image} alt="" />
        </div>
        <h3 className="font-['Lato'] font-bold text-lg leading-5 text-[#FB2E86] my-4 ">{title}</h3>
        <div className='flex justify-center gap-3'>
             <span className=" w-[20px] border-t-4  border-[#05E6B7] rounded-s-sm rounded-e-sm text-transparent">sal</span>
            <span className=" w-[20px] border-t-4  border-[#F601A7] rounded-s-sm rounded-e-sm text-transparent">sal</span>
            <span className=" w-[20px] border-t-4  border-[#000096] rounded-s-sm rounded-e-sm text-transparent">sal</span>
        </div>
        <p className='text-[#151875] text-sm leading-5'>{text}</p>
        <p className='text-[#151875] text-sm leading-5 pb-4'>{price}</p>
    </div>
  )
}
