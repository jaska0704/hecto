import clsx from 'clsx'
import React from 'react'

export const Title = ({title, classname}) => {
  return (
    <div>
        <h1 className={clsx('text-[#1A0B5B] font-bold text-[42px] leading-10', classname)}>{title}</h1>
    </div>
  )
}
