import React from "react";
import jsonData from "../json/bitCoin.json";
import TransprentButton from "../snippets/TransprentButton";

function BitCoinPrice() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3 ">
          {jsonData["headings"].map((i, index) => (
            <h2
              key={index}
              className={`bg-[#EEF7FF99] p-[12px_20px] lg:p-[12px_24px] rounded-t-[10px] text-[#0091FF] text-base font-medium ${
                i.lgHidden && "hidden lg:block"
              }`}
            >
              {i.name}
            </h2>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 items-center justify-center w-full py-4 px-5 md:p-6 border-[1px] border-[#E9EAF0]">
          {jsonData["contents-heading"].map((item, index) => (
            <h3
              key={index}
              className={`text-[#6A718A] text-sm leading-[22px] font-normal text-start ${
                item.lgHidden  && "hidden lg:block" ,
                item.smHidden && "hidden "
                
              }`}
            >
              {item.name}
            </h3>
          ))}
        </div>
        <div className="flex flex-col gap-[10px]  pt-[10px] border-[1px] border-[#E9EAF0] border-t-0 ">
          {jsonData["contents"].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 items-center justify-center w-full p-[14px_20px] md:p-[20px_24px]"
            >
              <h3 className="text-[#6A718A] text-[16px] leading-[26px] font-normal text-start">
                {item.name}
              </h3>
              <h4 className="text-[#40476C] text-[18px] leading-[32px] font-normal text-start">
                {item.price}
              </h4>
              <h3 className="text-[#6A718A] text-[16px] leading-[26px] font-normal text-start">
                {item.high}
              </h3>
              <h3 className="text-[#6A718A] text-[16px] leading-[26px] font-normal text-start hidden lg:block">
                {item.low}
              </h3>
              <h3 className="text-[#6A718A] text-[16px] leading-[26px] font-normal text-start">
                {item.volume}
              </h3>
              <div className="hidden 2xl:flex items-center gap-6 justify-between">
                <TransprentButton name="Trade" />
                <TransprentButton name="Details" />
              </div>
            </div>
          ))}
        </div>
        <div className="pt-10 md:pt-[60px] pb-0 md:pb-5"></div>
      </div>
    </section>
  );
}

export default BitCoinPrice;
