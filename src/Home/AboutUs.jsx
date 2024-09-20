import React, { useRef, useState } from "react";
import jsonData from "../json/about-us.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

function AboutUs() {
  const [indexx, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setIndex(swiper.realIndex);
  };

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
              className="hidden lg:block group"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <svg
                width="52"
                height="44"
                viewBox="0 0 52 44"
                fill="none"
                className="transition-all duration-200 group-hover:fill-[#25A1FF]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  y="0.250488"
                  width="51.5"
                  height="43.5"
                  rx="5.75"
                  stroke="#40476C"
                  className="transition-all duration-200 group-hover:stroke-[#25A1FF]"
                  stroke-width="1.5"
                />
                <path
                  d="M22.5987 19.8813L27.1887 15.2913C27.3761 15.105 27.6295 15.0005 27.8937 15.0005C28.1579 15.0005 28.4114 15.105 28.5987 15.2913C28.6925 15.3842 28.7669 15.4948 28.8176 15.6167C28.8684 15.7386 28.8945 15.8693 28.8945 16.0013C28.8945 16.1333 28.8684 16.264 28.8176 16.3859C28.7669 16.5077 28.6925 16.6183 28.5987 16.7113L23.9987 21.2913C23.905 21.3842 23.8306 21.4948 23.7798 21.6167C23.7291 21.7386 23.7029 21.8693 23.7029 22.0013C23.7029 22.1333 23.7291 22.264 23.7798 22.3859C23.8306 22.5077 23.905 22.6183 23.9987 22.7113L28.5987 27.2913C28.787 27.4783 28.8934 27.7324 28.8943 27.9977C28.8952 28.2631 28.7907 28.518 28.6037 28.7063C28.4168 28.8946 28.1626 29.0009 27.8973 29.0018C27.6319 29.0028 27.377 28.8983 27.1887 28.7113L22.5987 24.1213C22.0369 23.5588 21.7214 22.7963 21.7214 22.0013C21.7214 21.2063 22.0369 20.4438 22.5987 19.8813Z"
                  className="transition-all duration-200 fill-[#6A718A] group-hover:fill-white"
                />
              </svg>
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
                  slidesPerView: 1.5,
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
              onSlideChange={handleSlideChange}
              modules={[Autoplay]}
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
              className="hidden lg:block group"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <svg
                width="52"
                height="44"
                viewBox="0 0 52 44"
                fill="none"
                className="transition-all duration-200 group-hover:fill-[#25A1FF]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  y="0.250488"
                  width="51.5"
                  height="43.5"
                  rx="5.75"
                  stroke="#40476C"
                  className="transition-all duration-200 group-hover:stroke-[#25A1FF]"
                  stroke-width="0.5"
                />
                <path
                  d="M29.4013 19.8813L24.8113 15.2913C24.6239 15.105 24.3705 15.0005 24.1063 15.0005C23.8421 15.0005 23.5886 15.105 23.4013 15.2913C23.3075 15.3842 23.2331 15.4948 23.1824 15.6167C23.1316 15.7386 23.1055 15.8693 23.1055 16.0013C23.1055 16.1333 23.1316 16.264 23.1824 16.3859C23.2331 16.5077 23.3075 16.6183 23.4013 16.7113L28.0013 21.2913C28.095 21.3842 28.1694 21.4948 28.2202 21.6167C28.2709 21.7386 28.2971 21.8693 28.2971 22.0013C28.2971 22.1333 28.2709 22.264 28.2202 22.3859C28.1694 22.5077 28.095 22.6183 28.0013 22.7113L23.4013 27.2913C23.213 27.4783 23.1066 27.7324 23.1057 27.9977C23.1048 28.2631 23.2093 28.518 23.3963 28.7063C23.5832 28.8946 23.8374 29.0009 24.1027 29.0018C24.3681 29.0028 24.623 28.8983 24.8113 28.7113L29.4013 24.1213C29.9631 23.5588 30.2786 22.7963 30.2786 22.0013C30.2786 21.2063 29.9631 20.4438 29.4013 19.8813Z"
                  className="transition-all duration-200 fill-[#6A718A] group-hover:fill-white"
                />
              </svg>
            </button>
          </div>
          <div className="paginationSelected-container flex items-center justify-center gap-4">
            {jsonData.map((_, index) => (
              <span
                onClick={() => {
                  swiperRef.current.swiper.slideTo(index); // Slide to the clicked pagination
                  setIndex(index); // Set the active index
                }}
                key={index}
                className={`w-[20px] h-[20px] border-[4px] border-solid border-white outline-[2px] outline rounded-full outline-transparent bg-[#CCCED9] transition-all duration-200 hover:bg-[#25a1ffb4] cursor-pointer ${
                  index === indexx ? "paginationSelected" : ""
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
