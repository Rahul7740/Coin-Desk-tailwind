import React from "react";
import Header from "../common/Header";
import Buttons from "../snippets/Buttons";
import bannerJsonData from "../json/banner.json";
function Banner() {
  return (
    <section className="bg-[rgb(22,29,38)] banner-section bg-[url(./assets/img/banner-background.png)] bg-no-repeat bg-center bg-cover mb-5 md:mb-8 xl:mb-[70px]">
      <Header />
      <div className="container">
        <div className="flex flex-col-reverse lg:grid grid-cols-1  lg:grid-cols-2 gap-10 2xl:gap-[308px] xl:flex xl:flex-row items-center  justify-between pt-[80px] sm:pt-[70px] lg:pt-[58px] pb-10 sm:pb-7 lg:pb-[25px] ">
          <div className="max-w-[635px] w-full text-center lg:text-left">
            <h1
              className="text-white text-[34px] leading-[46px] font-extrabold 
               sm:text-[40px] sm:leading-[54px]  
               md:text-[48px] md:leading-[64px] 
               lg:text-[60px] lg:leading-[80px] text-center lg:text-left
               xl:text-[72px] xl:leading-[92.4px]               
               "
            >
              Start <span className="text-[#0091FF]">Trading</span> With
              Favourite Coins
            </h1>

            <p className=" mt-[22px] mb-[40px] lg:mb-[60px] lg:mt-[28px] text-white text-[14px] leading-[22px] md:text-base lg:text-[18px]  lg:leadubg-[32px] font-normal text-center lg:text-left">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <Buttons name="Start Trading" />
          </div>
          <img
            className="w-[279px] h-[320px] sm:w-[420px] sm:h-[470px] lg:w-auto lg:h-auto "
            src={require(`../assets/img/banner-img.png`)}
            alt="banner"
          />
        </div>
        <div className="grid grid-cols-[auto_auto] sm:flex items-center gap-[30px] justify-between flex-wrap 2xl:flex-nowrap pb-10 lg:pb-[50px] ">
          {bannerJsonData.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center sm:min-w-[242px] gap-3  sm:gap-[18px] justify-between p-0 sm:py-[10px] sm:pl-[14px] sm:pr-[11px] sm:border-[1px] border-[#40476C] hover:border-transparent transition-all duration-150 cursor-default rounded">
              <h5 className="text-[#CCCED9] text-[14px]  leading-[22px] font-normal  ">{item.name}</h5>
              <div>
                <h3 className=" text-base font-medium text-[#F0F1F5] ">{item.price}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src={require(`../assets/svg/banner-off-svg.svg`).default}
                    alt="off"
                  />
                  <p className="text-[#34D399] font-medium text-[14px] leading-[22px] sm:leading-[17px]">{item.off}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
