import React from 'react';

export const TrendingCard = ({img, title}) => {
  return (
    <div className='max-w-[270px] w-full p-1 text-center shadow-md pb-9'>
        <img className=' inline-block bg-[#F5F6F8] w-[90%]' src={img} alt="" />
        <p className='font-["Lato"] text-base text-[#151875] font-bold leading-6 my-7'>{title}</p>
        <span className='font-normal text-sm text-[#151875]'>$26.00 </span><span className='font-normal text-xs text-slate-400 ml-4'>$42.00</span>
    </div>
  )
}
