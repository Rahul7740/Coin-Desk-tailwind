import React from "react";
import footerData from "../json/footerData.json";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className=" mt-5 md:mt-8 xl:mt-[70px]">
      <div className="bg-[#161D26]">
        <div className="border-b-[1px] border-solid border-[#212A35]">
          <div className="container">
            <div className="flex items-center gap-1 pt-[40px] pb-[20px] sm:pb-[40px] lg:py-[60px] ">
              <img
                src={require(`../assets/svg/main-logo.svg`).default}
                alt="main-logo"
                className="cursor-pointer"
              />
              <div className="flex items-end text-white text-[28px] font-medium leading-[38px] cursor-pointer">
                C
                <p className="text-white text-lg leading-8 font-normal mr-[2px]">
                  oin
                </p>
                D<p className="text-white text-lg leading-8 font-normal">esk</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pt-10 md:pt-20 pb-10 flex flex-col lg:flex-row items-start gap-[30px] ">
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-[30px] gap-x-[13px] sm:gap-x-5 md:gap-[30px] w-full">
              {footerData["footerData"].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-3 md:gap-[18px] ${
                    item.xlHide && "hidden xl:flex"
                  }`}
                >
                  <h3 className="text-white font-medium text-[19px] leading-[23px] tracking-[0.02em] mb-[6px] md:mb-[10px]">
                    {item.heading}
                  </h3>
                  {item.contents.map((i, index) => (
                    <Link
                      key={index}
                      className="text-[#6A718A] hover:text-transparent font-normal text-[16px] leading-[26px] transition-all duration-200 bg-gradient-to-r from-[#25A1FF] to-[#0070E4] bg-clip-text relative w-fit
                      before:contents-[' '] before:absolute before:left-0 before:bottom-[4px] before:w-0 before:h-[1px]  before:bg-gradient-to-r before:from-from-[#25A1FF] before:to-[#0070E4] before:rounded hover:before:w-full before:transition-all before:duration-200 before:z-10

                      "
                    >
                      {i}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[18px] lg:max-w-[240px] w-full">
              <h3 className="text-white font-medium text-[19px] leading-[23px] tracking-[0.02em] mb-[6px] md:mb-[10px]">
                Download App
              </h3>
              <div className="flex flex-row lg:flex-col items-start justify-between sm:justify-start gap-[13px] sm:gap-6">
                {footerData["downloadBtns"].map((i, index) => (
                  <button
                    key={index}
                    className="sm:max-w-[170px] w-full flex items-center justify-center sm:justify-start gap-[10px] p-[6px_0px] sm:p-[6px_20px] shadow-[0px_0px_14px_0px_#0000000F] border-[1px] border-solid border-[#CCCED9] rounded"
                  >
                    <img
                      src={require(`../assets/svg/${i.img}`)}
                      alt="download"
                    />
                    <div className="text-start">
                      <p className="text-[#E9EAF0] text-[10px] leading-3 font-normal ">
                        {i.title}
                      </p>
                      <h3 className="text-[#CCCED9] text-4 leading-6">
                        {i.name}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#12171E] py-5 md:py-10 ">
        <div className="container">
          <div className="flex items-center flex-col-reverse sm:flex-row justify-between gap-[30px] ">
            <p className="font-normal text-[16px] text-white leading-[26px]">
              Ⓒ All Rights Reserved by dynamic.
            </p>
            <div className="flex items-center gap-6">
              {footerData["socialMedia"].map((i, index) => (
                <a
                  key={index}
                  href={i.link}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={require(`../assets/svg/${i.img}`)} alt="i.img" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
