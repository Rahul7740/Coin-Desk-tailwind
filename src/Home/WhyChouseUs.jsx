import React from "react";

function WhyChouseUs() {
  return (
    <section className="all-sections">
      <div className="bg-[#161D26] bg-[url(./assets/img/banner-background.png)] bg-no-repeat bg-center bg-cover">
        <div className="container">
          <div className=" pt-10 md:pt-14 xl:pt-[120px] pb-10 md:pb-14 xl:pb-[100px]">
            <div className="text-start flex flex-col gap-[14px] sm:gap-[18px] items-start">
              <h2 className="text-white font-semibold text-[33px] md:text-[39px] leading-10 md:leading-[50px] tracking-[0.02em]">
                Start Journey in Few Steps
              </h2>
              <span className="max-w-[140px] w-full bg-[#25A1FF] h-[2px]"></span>
            </div>
            <div className="pt-[22px] flex flex-col xl:flex-row  gap-[31px]">
              <div className="flex flex-row  xl:flex-col justify-between lg:justify-center xl:justify-start gap-4 sm:gap-10 xl:gap-6 max-w-full xl:max-w-[240px] w-full h-auto xl:h-[320px] mt-[28px] lg:mt-[35px] xl:mt-[46px] border-0 xl:border-r-2 border-[#FFFFFF0F] border-solid">
                {[
                  "100% Secure",
                  "Fast Transaction",
                  "Bonus",
                  "Low Charges",
                ].map((i, index) => (
                  <div
                    key={index}
                    className="flex items-start xl:items-center flex-col xl:flex-row gap-1 xl:gap-2 py-[5px] cursor-pointer"
                  >
                    <h3 className="text-[#8C9298] xl:text-[#CCCED9] text-[12px] lg:text-[19px] leading-[18px] lg:leading-[24px] tracking-[0.02em] font-normal">
                      {i}
                    </h3>
                    <img
                      src={require(`../assets/svg/go-btn-white.svg`).default}
                      alt="go"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col-reverse md:grid md:grid-cols-2 2xl:flex 2xl:flex-row gap-[30px] 2xl:gap-[114px] items-center md:items-start lg:items-center justify-between">
                <div className="md:max-w-[561px] w-full">
                  <h3 className="text-[19px] sm:text-[24px] lg:text-[28px] leading-[23px] sm:leading-[30px] lg:leading-[38px] text-white tracking-[0.02em] font-semibold">
                    Your Data Security is Our Priority.
                  </h3>
                  <p className="md:max-w-[496px] w-full text-[12px] sm:text-[14px] lg:text-[16px] leading-[18px] sm:leading-[22px] lg:leading-[26px] text-[#AEB1BF] font-normal mt-[28px] mb-8">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                    <br />
                    <br /> It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged.
                  </p>
                  <ul className="flex flex-col gap-[18px] pl-[30px]">
                    {[
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                      "Lorem Ipsum is simply dummy text of the typesetting industry.",
                      "Lorem Ipsum is dummy text of typesetting industry.",
                    ].map((i, index) => (
                      <li
                        key={index}
                        className="list-disc text-[#E9EAF0] font-medium text-[12px] sm:text-[15px] lg:text-[18px] leading-[18px] sm:leading-[21px] lg:leading-[26px]"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  className="w-[223px] sm:w-[350px] md:w-auto h-[174px] sm:h-[300px] md:h-auto"
                  src={require(`../assets/img/whuChooseUs-img.png`)}
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChouseUs;
