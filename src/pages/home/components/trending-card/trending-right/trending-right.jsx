import React from 'react'

export const TrendingRight = ({img}) => {
  return (
    <div className='flex gap-4'>
        <img className='bg-[#F5F6F8] px-[21px] py-1' src={img} alt="" />
        <div className=' flex flex-col justify-center items-center'>
            <h2>Executive Seat chair</h2>
            <p>$32.00</p>
        </div>
    </div>
  )
}
