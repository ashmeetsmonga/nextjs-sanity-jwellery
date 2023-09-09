import React from "react";
import Banner from "./Banner";
import NewArrivals from "./NewArrivals";
import BestSellers from "./BestSellers";

const HomeModule = () => {
  return (
    <main className="mt-20">
      <Banner />
      <NewArrivals />
      <BestSellers />
    </main>
  );
};

export default HomeModule;
