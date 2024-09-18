import React from "react";
import jsonData from "../json/header.json";
import Buttons from "../snippets/Buttons";
function Header() {
  return (
    <header className=" py-[29px] md:py-[36px] lg:py-[38px] xl:py-[42px] bg-white md:bg-transparent">
      <div className="container">
        <div className="flex gap-5 justify-between items-center">
          <div className="flex items-center gap-1">
            <img
              src={require(`../assets/svg/main-logo.svg`).default}
              alt="main-logo"
            />
            <div className="flex items-end">
              <h1 className="text-[#40476C] md:text-white text-[28px] font-medium leading-[38px]">
                C
              </h1>
              <p className="text-[#40476C] md:text-white text-lg leading-8 font-normal">
                oin
              </p>
              <h1 className="ml-[2px] text-[#40476C] md:text-white text-[28px] font-medium leading-[38px]">
                D
              </h1>
              <p className="text-[#40476C] md:text-white text-lg leading-8 font-normal">
                esk
              </p>
            </div>
          </div>
          <div className=" hidden md:flex items-center gap-4  lg:gap-7 xl:gap-[52px]">
            {jsonData["menuLInks"].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <h3 className="text-[#40476C] md:text-[#F0F1F5] text-base leading-[26px] font-normal">
                  {item.name}
                </h3>
                <img
                  className={`opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    item.selected && "opacity-100"
                  }`}
                  src={require(`../assets/svg/down-arrow-gray.svg`).default}
                  alt="down-svg"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[30px]  sm:gap-4 xl:gap-8 ">
            <img
              className="block sm:hidden"
              src={require(`../assets/svg/search-icon-gray.svg`).default}
              alt="search-icon"
            />
            <div className="hidden sm:flex items-center">
              {jsonData["currency"].map((i, index) => (
                <h4
                  key={index}
                  className=" text-[#40476C] md:text-[#F0F1F5] p-[5px_7px] xl:p-[8px_10px]"
                >
                  {i}
                </h4>
              ))}
            </div>
            <button className="block lg:hidden ">
              <img
                src={require(`../assets/svg/menu-btn.svg`).default}
                alt="menu-link"
              />
            </button>
            <div className="hidden lg:block">
              <Buttons name="Create an Account"  />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
