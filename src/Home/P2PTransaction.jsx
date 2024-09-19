import React from "react";
import Buttons from './../snippets/Buttons';

function P2PTransaction() {
  return (
    <section className="all-sections">
      <div className="container">
        <div className="flex flex-col-reverse md:grid grid-cols-2 xl:flex xl:flex-row items-center justify-between gap-10">
          <div className="max-w-[645px] w-full">
            <div className="text-start flex flex-col gap-[14px] sm:gap-[18px] items-start">
              <h2 className="text-[#26306A] font-semibold text-[33px] md:text-[39px] leading-10 md:leading-[50px] tracking-[0.02em]">
                Easy Way for P2P Transaction.
              </h2>
              <span className="max-w-[140px] w-full bg-[#25A1FF] h-[2px]"></span>
            </div>
            <p className="text-[#8C9298] text-[18px] leading-[32px] font-normal mt-[18px] lg:mt-7 mb-10 lg:mb-[60px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It survived not only
              five centuries.
              <br />
              <br />
              It was popularised in the 1960s with the release of sheets
              containing Lorem Ipsum passages.
            </p>
            <Buttons name="Start Trading" />
          </div>
          <img className="w-[255px] sm:w-[350px] md:w-auto h-[220px] sm:h-[300px] md:h-auto" src={require(`../assets/img/p2p-img.png`)} alt="p2p" />
        </div>
      </div>
    </section>
  );
}

export default P2PTransaction;
