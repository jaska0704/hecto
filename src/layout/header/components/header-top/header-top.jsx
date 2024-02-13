import React from 'react'
import img from "/images/uil_envelope-alt.svg";

export const HeaderTop = () => {
  return (
    <>
      <div className="header font-fontFamily bg-[#7E33E0] py-4 top-0 z-50">
        <div className="max-w-[1180px] w-full mx-auto text-white flex justify-between">
          <div className="flex gap-4 justify-start items-center">
            <span>
              <img src="images/uil_envelope-alt.svg" alt="" />
            </span>
            <a href="mhhasanul@gmail.com">mhhasanul@gmail.com</a>
            <span>
              <img src="images/bx_bx-phone-call.svg" alt="" />
            </span>
            <a href="tel:(12345)67890">(12345)67890</a>
          </div>
          <div className="flex gap-4 text-white">
            <select name="lang" id="" className="bg-[#7E33E0]">
              <option value="eng">English</option>
              <option value="ru">Russian</option>
              <option value="uz">Uzbek</option>
            </select>
            <select name="payme" id="" className="bg-[#7E33E0]">
              <option className="" value="usd">
                Usd
              </option>
              <option className="" value="rubl">
                Rubl
              </option>
              <option className="" value="so'm">
                So'm
              </option>
            </select>
            <div className="flex">
              <p className="inline">Login</p>
              <img src="images/carbon_user.svg" alt="" />
            </div>
            <div className="flex">
              <p>Wishlist</p>
              <img src="images/uil_heart-alt.svg" alt="" />
            </div>
            <div>
              <img src="images/fluent_cart-24-regular.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
