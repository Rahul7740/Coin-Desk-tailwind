import React from "react";
import Header from "../common/Header";
import Buttons from "../snippets/Buttons";
function Banner() {
  return (
    <section className="bg-[#161D26]">
      <Header />
      <div className="container">
        <div className="grid grid-cols-2 gap-5 xl:flex items-center  justify-between ">
          <div className="max-w-[635px] w-full ">
            <h1 className="text-white text-[72px] leading-[92.4px] font-extrabold">Start Trading With Favourite Coins</h1>
            <p  className="text-white">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <Buttons name="Start Trading" />
          </div>
          <img src={require(`../assets/img/banner-img.png`)} alt="banner" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
