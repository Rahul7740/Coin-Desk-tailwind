import React, { useRef, useState } from "react";
import jsonData from "../json/about-us.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function AboutUs() {
  const [indexx, setIndex] = useState(0);
  const swiperRef = useRef(null);
  return (
    <section className="all-sections relative">
      <div className="w-full h-full -z-10 absolute top-2/4 left-2/4 translate-center rounded-[50%] overflow-hidden opacity-[15%] bg-gradient-to-r from-[#E8AA2E38] to-[#FF00D638] shadow-[0_0_30px_#FF00D638]"></div>
      <div className="container">
        <div className="">
          <div className="text-start sm:text-center flex flex-col gap-[14px] sm:gap-[18px] items-start sm:items-center ">
            <h2 className="text-[#26306A] font-semibold text-[33px] md:text-[39px] leading-10 md:leading-[50px] tracking-[0.02em]">
              Users Feedback About Us
            </h2>
            <span className="max-w-[140px] w-full bg-[#25A1FF] h-[2px]"></span>
          </div>
          <div className="flex items-center justify-between gap-7 xl:gap-[53px] py-10 lg:py-20">
            <button
              className="hidden lg:block"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <img
                src={require(`../assets/svg/swiper-back-btn.svg`).default}
                alt="back"
              />
            </button>
            <Swiper
              ref={swiperRef}
              effect={"coverflow"}
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                700: {
                  spaceBetween: 10,
                  slidesPerView: 1.5
                },
                1000: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                1300: {
                  spaceBetween: 30,
                  slidesPerView: 2.5,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper max-w-[1380px] w-full"
            >
              {jsonData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white flex flex-col gap-6 md:gap-[30px] lg:gap-[42px] text-start md:text-center items-start md:items-center rounded-[10px] p-[24px_14px] md:p-[26px_22px] lg:p-[28px_40px] md:max-w-[510px] w-full">
                    <div className="text-start md:text-center flex items-center justify-start gap-3 md:gap-4 flex-row md:flex-col">
                      <img
                        className="w-[68px] sm:w-auto h-[68px] sm:h-auto"
                        src={require(`../assets/img/${item.img}`)}
                        alt="user"
                      />
                      <h3 className="text-[#40476C] text-[19px]  md:text-[23px] leading-[24px] md:leading-[29px] lg:leading-[34px] font-medium tracking-[0.02em] ">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-[#6A718A] text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-normal max-w-[410px] w-full">
                      {item.p}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="hidden lg:block"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <img
                src={require(`../assets/svg/swiper-forword-btn.svg`).default}
                alt="forword"
              />
            </button>
          </div>
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4].map((index) => (
              <span
                onClick={() => {
                  setIndex(index);
                }}
                key={index}
                className={`w-[20px] h-[20px] border-[4px] border-solid border-white outline-[2px] outline rounded-full outline-transparent bg-[#CCCED9] cursor-pointer ${
                  index === indexx && "paginationSelected"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
