import React from 'react'
import { HomeHero } from './components/home-hero'
import { FeaturedCard } from './components/featured-card';
import { LeatestCard } from './components/leatest-card/leatest-card';
import { featuredData } from '../../data/featured-data'
import { Support } from './components/support';
import img from "/support-icon/deliver.svg";
import img1 from "/support-icon/cashback.svg";
import img2 from "/support-icon/quality.svg";
import img3 from "/support-icon/hours.svg";
import { Unique } from './components/unique';
import { TrendingCard } from './components/trending-card';
import { TrendingBottom } from './components/trending-card/trending-bottom/trending-bottom';
import { TrendingRight } from './components/trending-card/trending-right/trending-right';
import { Title } from '../../components/titles';
// import { DiscountItem } from './components/discount-item';
import Example from './components/discount-show/discount-show';


export const Home = () => {
  return (
    <>
        <div>
          <HomeHero/>
        </div>
        <div className='text-center mt-32  mb-9'>
             <Title title={"Featured Products"}/>
        </div>
        <div className='container carousel rounded-box max-w-[1180px] mx-auto flex gap-8 p-2'>
        {featuredData.map((item) =>(
          <FeaturedCard key={item.id} image={item.image} title={item.title} text={item.text} price={item.price} id={item.id}/>
        ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#1" className="btn btn-xs">1</a> 
            <a href="#8" className="btn btn-xs">2</a> 
            <a href="#12" className="btn btn-xs">3</a> 
        </div>
        <LeatestCard/>
        <div className='text-center max-w-[1180px] mx-auto'>
          <Title title={"What Shopex Offer!"} classname={"my-10"}/>
          <div className='flex gap-6'>
              <Support img={img} title={"24/7 Support"}/>
              <Support img={img1} title={"24/7 Support"}/>
              <Support img={img2} title={"24/7 Support"}/>
              <Support img={img3} title={"24/7 Support"}/>
          </div>
        </div>
        <div className='bg-[#F1F0FF] relative z-[-10] mt-36'>
            <Unique/>
        </div>
        <div className='text-center max-w-[1180px] mx-auto'>
          <Title classname={"mb-16 mt-32"} title={"Trending Products"}/>
          <div className='flex gap-7'>
              <TrendingCard img={"/trending-img/image33.png"} title={"Cantilever chair"}/>
              <TrendingCard img={"/trending-img/image32.png"} title={"Cantilever chair"}/>
              <TrendingCard img={"/trending-img/image31.png"} title={"Cantilever chair"}/>
              <TrendingCard img={"/trending-img/image34.png"} title={"Cantilever chair"}/>
          </div>
          <div className='pt-10 flex gap-7'>
            <TrendingBottom title={"23% off in all products"} text={"Shop Now"} img={"trending-img/image1162.png"} variant="secondry" classname={"w-[50%]"}/>
            <TrendingBottom title={"23% off in all products"} text={"View Collection"} img={"trending-img/tumba.png"} variant="primary" classname={"w-[90%]"}/>
            <div className='flex flex-col gap-8'>
                <TrendingRight img={"/trending-img/image29.png"}/>
                <TrendingRight img={"/trending-img/image28.png"}/>
                <TrendingRight img={"/trending-img/image19.png"}/>
            </div>
          </div>
        <Title title={"Discount Item"} classname={"mt-28 mb-12"}/>
        </div>
        <div className="">
            <Example/>
        </div>
    </>
  )
}
