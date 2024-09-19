import React from "react";
import Banner from "../Home/Banner";
import UpcomingTokens from "../Home/UpcomingTokens";
import BitCoinPrice from "../Home/BitCoinPrice";
import Steps from "../Home/Steps";
import WhyChouseUs from "../Home/WhyChouseUs";
import P2PTransaction from "../Home/P2PTransaction";

function Home() {
  return (
    <>
      <Banner />
      <UpcomingTokens />
      <BitCoinPrice />
      <Steps />
      <WhyChouseUs />
      <P2PTransaction />
    </>
  );
}

export default Home;
