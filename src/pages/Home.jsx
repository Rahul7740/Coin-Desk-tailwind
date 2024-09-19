import React from "react";
import Banner from "../Home/Banner";
import UpcomingTokens from "../Home/UpcomingTokens";
import BitCoinPrice from "../Home/BitCoinPrice";

function Home() {
  return (
    <>
      <Banner />
      <UpcomingTokens />
      <BitCoinPrice />
    </>
  );
}

export default Home;
