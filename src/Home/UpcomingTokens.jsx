import React from "react";
import tokenJson from "../json/uppcomingTokens.json";
function UpcomingTokens() {
  return (
    <section className="all-sections relative">
      <div className="w-full h-full -z-10 absolute top-2/4 left-2/4 translate-center rounded-[50%] overflow-hidden opacity-[18%] bg-gradient-to-r from-[#E8AA2E38] to-[#FF00D638]"></div>
      <div className="container">
        <div className=" ">
          <div className="text-center flex flex-col gap-[14px] sm:gap-[18px] items-start sm:items-center">
            <h2 className="text-[#26306A] font-semibold text-[33px] md:text-[39px] leading-10 md:leading-[50px] tracking-[0.02em]">
              Upcoming Tokens
            </h2>
            <span className="max-w-[140px] w-full bg-[#25A1FF] h-[2px]"></span>
          </div>
          <div className="grid grid-cols-2 sm:flex items-center gap-[13px] 2xl:gap-[30px] justify-between py-20 flex-wrap 2xl:flex-nowrap">
            {tokenJson.map((item, index) => (
              <div
                key={index}
                className="bg-[#151343] max-w-60 w-full text-left sm:text-center rounded-[10px] flex flex-col items-center py-6 sm:py-8 px-3 sm:px-[18px]"
              >
                <div className="flex flex-row self-start sm:self-center items-center sm:flex-col gap-[8px] lg:gap-[18px]">
                  <img
                    className="w-[30px] h-[30px] sm:w-auto sm:h-auto "
                    src={require(`../assets/img/upcomint-tokens-icon.png`)}
                    alt="token"
                  />
                  <h3 className="text-white text-[19px] sm:text-[23px] leading-[23px] sm:leading-[32px] tracking-[0.02em]">
                    {item.name}
                  </h3>
                </div>
                <p className="text-[#CCCED9] hidden sm:block text-[12px] leading-[18px] mt-3 font-normal">
                  {item.p}
                </p>
                <h4 className="text-white w-full mt-[18px] sm:mt-[37px] mb-1 sm:mb-[8px] text-xs sm:text-[14px] leading-[18px] sm:leading-[17px] font-normal sm:font-medium ">
                  Live in -
                </h4>
                <div className="bg-white py-[6px] px-[18px] rounded-[4px] w-full text-center sm:w-auto">
                  <h3
                    className=" text-transparent bg-clip-text  bg-gradient-to-r from-[#25A1FF] to-[#0070E4]
                  text-[12px] leading-[18px] sm:text-base font-medium
                  "
                  >
                    {item.time}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingTokens;
