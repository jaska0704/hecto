import React from 'react'
import { Buttons } from '../../../../components/buttons'


export const HomeHero = () => {
  return (
    <div className=' bg-[#F2F0FF] relative z-[-10]'>
        <section id='item1' className=" container max-w-[1180px] mx-auto flex justify-between">
            <div className=" flex mt-[150px]">
                <div className=" pt-[10px] w-[640px]">
                    <h4 className="font-['Lato'] text-[#FB2E86] text-base font-bold">
                      Best Furniture For Your Castle....
                    </h4>
                    <h1 className="text-[53px] font-bold">
                      New Furniture Collection Trends in 2020
                    </h1>
                    <p className="text-[#8A8FB9] font-['Lato'] text-base font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                        est adipiscing in phasellus non in justo.
                    </p>
                    <Buttons variant="pink" classname="px-14 py-2 mt-3">Play now</Buttons>
                </div>
                <img className=" absolute top-0 left-[-90px] w-[22%]" src="images/bg-divan.png" alt="lampa"/>
                <p className="absolute top-[83px] left-[83%] text-4xl z-[10] font-bold text-white">50% <br />off</p>
                <img className=' absolute top-14 left-[81%] z-9' src="images/Vector11.png" alt="" />
            </div>
            <div className="">
                <img src="images/lampa.png" alt="" className="mt-20 image-divan p-16 z-1" />
                <img className=' absolute top-[100px] z-[-1] w-[30%]' src="images/Ellipse61.png" alt="" />
                <img className=' absolute top-[60px] left-[56%] z-[-2] w-[30%]' src="images/Ellipse61.png" alt="" />
            </div>
        </section>
    </div>
  )
}
