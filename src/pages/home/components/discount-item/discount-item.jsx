import React from 'react'
import { Buttons } from '../../../../components/buttons'

export const DiscountItem = ({img}) => {
  return (
    <div className=''>
        <div className='flex justify-center items-center gap-12'>
            <div>
                <h2 className='text-[35px] text-[#151875] leading-10 font-semibold mb-5'>20% Discount Of All Products</h2>
                <p className='text-[21px] leading-6 text-[#FB2E86] mb-5'>Eams Sofa Compact</p>
                <p className='text-[17px] font-normal leading-7 text-[#B7BACB] max-w-[520px] font-["Lato"]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <div className='flex gap-7 mt-6'>
                <div>
                    <p className='font-["Lato"] font-normal text-base leading-8 text-[#B8B8DC]'>✔️Material expose like metals</p>
                    <p className='font-["Lato"] font-normal text-base leading-8 text-[#B8B8DC]'>✔️Simple neutral colours.</p>
                </div>
                <div>
                    <p className='font-["Lato"] font-normal text-base leading-8 text-[#B8B8DC]'>✔️Clear lines and geomatric figures</p>
                    <p className='font-["Lato"] font-normal text-base leading-8 text-[#B8B8DC]'>✔️Material expose like metals</p>
                </div>
                </div>
                <Buttons variant="pink" classname={"px-14 mt-10"}>Shop Now</Buttons>
            </div>
            <div className=' relative z-10'>
                <img className=' relativ z-30' src={img} alt="" />
                <img className=' absolute top-8 left-10 z-[-1]' src="/images/Ellipse64.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}
