import React from "react";
import jsonData from "../json/bitCoin.json";
import TransprentButton from "../snippets/TransprentButton";
import Buttons from "../snippets/Buttons"

function BitCoinPrice() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3 ">
          {jsonData["headings"].map((i, index) => (
            <h2
              key={index}
              className={`bg-[#EEF7FF99] p-[11px_18px] lg:p-[11px_23px] rounded-t-[10px] text-[#0091FF] text-[14px] leading-[17px] sm:text-base font-medium cursor-pointer transition-all duration-300 border-[1px] border-b-0 border-solid border-transparent hover:border-[#0091FF] ${
                i.lgHidden && "hidden lg:block"
              }`}
            >
              {i.name}
            </h2>
          ))}
        </div>
        <div className="grid grid-cols-[auto_auto_auto] gap-[10px] justify-between  sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center  w-full py-4 px-0 md:p-6 border-b-[1px] sm:border-[1px] border-solid border-[#E9EAF0]">
          {jsonData["contents-heading"].map((item, index) => (
            <h3
              key={index}
              className={`text-[#6A718A] text-sm leading-[22px] font-normal text-start
                ${item.lgHidden && "hidden lg:block"}
                ${item.lgShow && "block lg:hidden"}
                ${item.smHidden && "hidden sm:block"}
                ${item.smShow && "block sm:hidden"}
              `}
            >
              {item.name}
            </h3>
          ))}
          <div className="min-w-[178px] w-full hidden 2xl:block "></div>
        </div>
        <div className="flex flex-col gap-[10px]  pt-[10px] sm:border-[1px] border-solid border-[#E9EAF0] border-t-0 ">
          {jsonData["contents"].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_auto_auto] gap-[10px] justify-between sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center  w-full py-[14px] sm:p-[16px_20px] md:p-[20px_24px]"
            >
              <h3 className="text-[#6A718A] text-[16px] leading-[26px] font-normal text-start hidden sm:block">
                {item.name}
              </h3>
              <h4 className="text-[#40476C] text-[18px] leading-[32px] font-normal text-start hidden sm:block">
                {item.price}
              </h4>
              <div className="block sm:hidden">
                <h3 className="text-[#6A718A] text-[12px] leading-[18px] font-normal text-start">
                  {item.name}
                </h3>
                <h4 className="text-[#40476C] text-[14px] leading-[22px] font-normal text-start">
                  {item.price}
                </h4>
              </div>
              <h3 className="text-[#8C9298] sm:text-[#6A718A] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] font-normal text-start">
                {item.high}
              </h3>
              <h3 className="text-[#6A718A] text-[16px] leading-[26px] font-normal text-start hidden lg:block">
                {item.low}
              </h3>
              <h3 className="text-[#6A718A] text-[12px] sm:text-[16px] leading-[18px] sm:leading-[26px] font-normal text-start">
                {item.volume}
              </h3>
              <div className="hidden 2xl:flex items-center gap-6 justify-between">
                <TransprentButton name="Trade" />
                <TransprentButton name="Details" />
              </div>
            </div>
          ))}
        </div>
        <div className="pt-10 md:pt-[60px] pb-0 md:pb-5 text-center">
          <Buttons name="View More"/>
        </div>
      </div>
    </section>
  );
}

export default BitCoinPrice;
