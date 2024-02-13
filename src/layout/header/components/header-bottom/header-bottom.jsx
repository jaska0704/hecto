import React from "react";
import { layoutData } from "../../../../data/layout-data";
import img from "/home-img/Vector.png"


export const HeaderBottom = () => {
  return (
    <>
      <div className="nav py-6">
        <div className="container max-w-[1180px] mx-auto flex justify-between items-center">
          <h2 className="text-5xl font-bold">Hekto</h2>
          <div className="nav-items">
            <ul className="flex gap-8">
              {layoutData.map((item) => (
                <li className="text-[#FB2E86] flex text-base font-normal font-['Lato']">
                  <a className="active:text-blue-600 " href={item.path}>
                    {item.component}
                  </a>
                  <img src={item.icon} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <form action="" className="flex">
            <input
              className="border w-64 h-10"
              type="search"
              name="search"
              id="search"
            />
            <div className="w-10 h-10 bg-[#FB2E86] flex justify-center items-center">
              <img src={img} alt="" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
