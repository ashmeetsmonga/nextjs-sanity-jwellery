import ProductCard from "@/components/ProductCard";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="w-full px-10 py-5 mt-5">
      <h2 className="my-4 text-3xl font-light text-center">New Arrivals</h2>
      <div className="w-full grid grid-cols-5 gap-4">
        <ProductCard
          title="Earring 1"
          price="500"
          image="/assets/images/Earrings-1.jpg"
        />
        <ProductCard
          title="Earring 2"
          price="500"
          image="/assets/images/Earrings-2.jpg"
        />
        <ProductCard
          title="Earring 3"
          price="500"
          image="/assets/images/Earrings-3.jpg"
        />
        <ProductCard
          title="Earring 4"
          price="500"
          image="/assets/images/Earrings-4.jpg"
        />
        <ProductCard
          title="Earring 5"
          price="500"
          image="/assets/images/Earrings-5.jpg"
        />
      </div>
    </div>
  );
};

export default NewArrivals;
