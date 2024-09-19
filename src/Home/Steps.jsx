import React from "react";
import jsonData from "../json/steps.json";

function Steps() {
  return (
    <section className="all-sections relative">
      <div className="w-full h-full -z-10 absolute top-2/4 left-2/4 translate-center rounded-[50%] overflow-hidden opacity-[15%] bg-gradient-to-r from-[#E8AA2E38] to-[#FF00D638] shadow-[0_0_30px_#FF00D638]"></div>
      <div className="container">
        <div className="">
          <div className="text-start sm:text-center flex flex-col gap-[14px] sm:gap-[18px] items-start sm:items-center ">
            <h2 className="text-[#26306A] font-semibold text-[33px] md:text-[39px] leading-10 md:leading-[50px] tracking-[0.02em]">
              Start Journey in Few Steps
            </h2>
            <span className="max-w-[140px] w-full bg-[#25A1FF] h-[2px]"></span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-[30px] pt-[32px] sm:pt-[50px] md:pt-[60px] lg:pt-20">
            {jsonData.map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-[10px] p-[24px_8px_23px_14px] sm:p-[40px_20px] lg:p-[60px_30px] xl:p-[100px_50px_102px_50px] shadow-[0px_0px_24px_0px_#0000000A] transition-all duration-100 border-[1px] border-solid border-transparent hover:border-[#25A1FF]"
              >
                <div className="flex flex-col gap-6 lg:gap-8 xl:gap-[48px] items-start max-w-[237px] 2xl:max-w-[240px] w-full">
                  <img
                    src={require(`../assets/svg/${item.img}`)}
                    alt="iconss"
                  />
                  <div className="">
                    <h3 className="text-[#40476C] text-base sm:text-[19px] sm:leading-6 tracking-[0.02em] mb-3">
                      {item.name}
                    </h3>
                    <p className="text-[#8C9298] text-[10px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[18px] lg:leading-[22px] font-normal">
                      {item.p}
                    </p>
                  </div>
                  <button className="hidden lg:flex items-center gap-2 text-[#56B2FF] text-base font-medium">
                    Start Trading Now
                    <img
                      src={require(`../assets/svg/go-btn.svg`).default}
                      alt="go"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
