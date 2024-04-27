"use client";
import React, { useEffect, useState } from "react";
import { IProducts } from "./Shop";
import { useRouter } from "next/navigation";

interface IPropsLstProduct {
  objItem: IProducts;
}
export default function LstOfProduct(props: IPropsLstProduct) {
  const [lstProduct, setLstProduct] = useState<any>();
  const router = useRouter();
  function getData() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((res) => setLstProduct(res.products));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <a
        href="#"
        className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
      >
        <img
          src={props.objItem?.thumbnail}
          loading="lazy"
          alt="Photo by Austin Wade"
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
          {props.objItem?.discountPercentage}%
        </span>
      </a>

      <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
        <div className="flex flex-col">
          <a
            href="#"
            className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
            onClick={() => router.push(`/detail/${props.objItem?.id}`)}
          >
            {props.objItem?.title}
          </a>
          <span className="text-sm text-gray-500 lg:text-base">
            by Fancy Brand
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-bold text-gray-600 lg:text-lg">
            ₹{props.objItem?.price}
          </span>
          <span className="text-sm text-red-500 line-through">
            ₹{props.objItem?.price * 2}
          </span>
        </div>
      </div>
    </div>
  );
}
