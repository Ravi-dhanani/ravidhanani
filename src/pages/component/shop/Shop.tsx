"use client";
import React, { useEffect, useState } from "react";
import LstOfProduct from "./LstOfProduct";
export interface IProducts {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: [string];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
export default function Shop() {
  const [lstProduct, setLstProduct] = useState<any>();
  function getData() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((res) => setLstProduct(res.products));
  }
  useEffect(() => {
    getData();
  }, []);
  if (!lstProduct) {
    return (
      <div className="text-center bg-white flex justify-center">
        <img
          src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif"
          className="h-96"
        />
      </div>
    );
  }
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="flex mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {lstProduct &&
              lstProduct.map((item: IProducts, index: number) => (
                <div key={index}>
                  <LstOfProduct objItem={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
