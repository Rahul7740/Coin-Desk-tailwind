import React from "react";

function Footer() {
  return (
    <footer className=" mt-5 md:mt-8 xl:mt-[70px]">
      <div className="bg-[#161D26]">
        <div className="container">
          <div className="flex items-center gap-1 pt-[40px] pb-[20px] sm:pb-[40px] lg:py-[60px] border-b-[1px] border-solid border-[#212A35]">
            <img
              src={require(`../assets/svg/main-logo.svg`).default}
              alt="main-logo"
            />
            <div className="flex items-end">
              <h1 className="text-white text-[28px] font-medium leading-[38px]">
                C
              </h1>
              <p className="text-white text-lg leading-8 font-normal">oin</p>
              <h1 className="ml-[2px] text-white text-[28px] font-medium leading-[38px]">
                D
              </h1>
              <p className="text-white text-lg leading-8 font-normal">esk</p>
            </div>
          </div>
          <div className="">
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
