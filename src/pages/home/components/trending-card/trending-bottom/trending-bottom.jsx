import React from 'react'
import clsx from 'clsx'

export const TrendingBottom = ({img, title, text, variant, classname}) => {
  return (
    <div className={clsx('max-w-[420px] w-full max-h-[300px] p-6 text-left',{
        "bg-[#EEEFFB]": variant === "primary",
        "bg-[#FFF6FB]": variant === "secondry",
    })}>
        <h3 className='text-[26px] text-[#151875] font-semibold leading-6 my-5'>{title}</h3>
        <p className=' inline-block  font-["Lato"] font-semibold text-base text-[#FB2E86] border-b-2 border-[#FB2E86]'>{text}</p>
        <div className='text-right'>
            <img className={clsx(' inline-block', classname)} src={img} alt="" />
        </div>
    </div>
  )
}
