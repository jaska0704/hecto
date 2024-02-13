import React from 'react'
import clsx from 'clsx'


export const Buttons = ({children, variant, classname}) => {
  return (
    <div>
        <button className={clsx("rounded-[4px]", {
            "bg-[#08D15F] hover:transition-shadow": variant === "primary",
            "btn btn-secondar bg-[#E72A7B] text-white": variant === "pink",
        }, classname)}>{children}</button>
    </div>
  )
}
