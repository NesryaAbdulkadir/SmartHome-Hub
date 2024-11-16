import React from "react";
import Card from "../../components/cardReusableComponent";
import { product } from "../../contents";

export default function HomePage() {
  return (
    <div className="p-5 flex flex-col items-center justify-center gap-3">
      {product?.map((item) => (
        <Card
          title={item.title}
          content={item.overView}
          footer={item.link}
          image={item.image}
          key={item.title}
          className={item.className}
          link={item.link}
          linkText={item.linkText}
        />
      ))}
      <a
        href="/contactus"
        className="underline hover:bg-orange-100 py-4 px-8 rounded-lg max-w-max font-bold text-xl "
      >
        Contact Us
      </a>
    </div>
  );
}
