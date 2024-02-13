import React from 'react'
import { leatestData } from '../../../../data/leatest-data';
import { LeatestProductCard } from '../leatest-product-card';
import { Title } from '../../../../components/titles';

export const LeatestCard = () => {
    const [state, setState] = React.useState(leatestData[0]["New Arrival"]);
    const titles = Object.keys(leatestData[0]);
  
    const changeTab = (bat) => {
        setState(leatestData[0][bat])
    }
   
  return (
    <>
        <div className='text-center mt-16 max-w-[1180px] mx-auto'>
            <Title title={"Leatest Products"} classname={"mb-10"}/>
            <div className='flex gap-8 justify-center font-["Lato"] font-normal text-lg text-[#151875] mb-7'>
               {titles.map((item) => (
            <button onClick={() => changeTab(item)} className='' key={item}>{item}</button>
        ))}
            </div>
            <div className='flex flex-wrap gap-10'>
                {state?.map((item) => (   
          <LeatestProductCard key={item.id} img={item.img} title={item.title} newPrice={item.newPrice} price={item.price}/>
        ))}
            </div>
        </div>
    </>
  )
}
