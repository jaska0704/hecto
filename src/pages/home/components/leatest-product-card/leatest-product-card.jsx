import React from 'react'


export const LeatestProductCard = ({img, title, price, newPrice}) => {
  return (
    <div className='max-w-[360px] w-full   flex flex-col'>
        <img className='w-[100%] h-[85%] bg-[#F7F7F7] p-8' src={img} alt="" />
        <div className=' flex justify-between mt-4'>
            <p className='text-base text-[#151875] leading-5'>{title}</p>
            <div className='flex gap-1 items-center'>
                <span className='text-sm text-[#151875] leading-4'>{newPrice}</span><span className='text-xs text-[#FB2448] leading-3 line-through'>{price}</span>
            </div>
        </div>
    </div>
  )
}
