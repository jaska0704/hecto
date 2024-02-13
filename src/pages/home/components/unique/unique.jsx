import React from 'react'
import { Buttons } from '../../../../components/buttons'

export const Unique = () => {
  return (
    <div className='max-w-[1180px] mx-auto flex justify-center items-center relative z-[-1]'>
        <img src="/images/Home-Stylish-Club.png" alt="" />
        <img className=' absolute top-10 left-16 z-[-2]' src="/images/Ellipse63.png" alt="" />
        <div>
            <h2 className='text-[35px] text-[#151875] leading-10 max-w-[507px] font-bold'>Unique Features Of leatest & Trending Poducts</h2>  
            <ul role="list" class="marker:p-2 list-disc pl-5 space-y-3 text-left text-slate-500">
                <li className='marker:text-[#F52B70] font-["Lato"] text-base'>
                    All frames constructed with hardwood solids and laminates
                </li>
                <li className='marker:text-[#2B2BF5] font-["Lato"] text-base'>
                    Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails
                </li>
                <li className='marker:text-[#2BF5CC] font-["Lato"] text-base'>
                    Arms, backs and seats are structurally reinforced
                </li>
            </ul>
            <div className='flex gap-5 mt-8'>
                <Buttons variant="pink" classname="px-9 py-2 ">Add To Cart</Buttons>
                <div>
                    <p className='text-sm text-[#151875] leading-4 font-medium'>B&B Italian Sofa </p>
                    <p className='font-["Lato"] text-sm'>$32.00</p>
                </div>
            </div>
        </div>
    </div>
  )
}
