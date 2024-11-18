import React from "react";
import Card from "../../components/cardReusableComponent";
import { product } from "../../contents";

import Card2 from "../../components/cardReusableComponent2";
export default function Features() {
  return (
    <div className="p-5 flex flex-col items-center justify-center gap-3">
      {product?.map((item) => (
        <div key={item.title}>
          <div className="xl:w-8/12 lg:w-10/12 mx-auto  px-10  bg-white ">
            <img
              src={item.image}
              alt="image"
              className="w-full h-[600px] object-cover mx-auto rounded-lg m-10"
            />

            <div className="col-span-2 flex flex-col md:gap-10 gap-5">
              <h1 className="text-4xl sm:text-5xl font-bold ">{item.title}</h1>
              <div className="flex flex-col gap-2">
                <p className="sm:text-xl leading-8">{item.overView}</p>

                <a
                  href={item.link}
                  className="underline hover:bg-slate-200 py-2 px-4 rounded-lg max-w-max font-bold"
                >
                  {null}
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-10/12 w-screen  mx-auto mt-10 px-10 bg-white">
            <h1 className="text-4xl sm:text-5xl font-bold text-center">
              Features
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {item?.features?.map((feature) => (
                <Card2
                  title={feature.feature}
                  content={feature.description}
                  key={feature.title}
                  image={feature.image}
                  className="col-span-1"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="m-10 text-center flex flex-col gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold">Order smartHub today</h1>
        <p className="text-xl ">Transform Your Home into a Smart Haven!</p>
        <a
          href="/contact"
          className=" bg-blue-700 text-white py-4 px-8 rounded-lg max-w-max font-bold text-xl "
        >
          Contact Us To place an Order
        </a>
      </div>
    </div>
  );
}
