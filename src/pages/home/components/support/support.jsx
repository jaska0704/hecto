import React from 'react'


export const Support = ({img, title, text}) => {
  return (
    <div className='max-w-[270px] w-full shadow-lg pt-16 text-center'>
        <img className=' inline-block mb-8' src={img} alt="" />
        <h3 className='text-[#151875] text-[22px] leading-6'>{title}</h3>
        <p className='font-["Lato"] font-bold text-base leading-6 mt-4 pb-10 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  )
}
