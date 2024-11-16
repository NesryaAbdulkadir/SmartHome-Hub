import React from "react";
import Card from "../../components/cardReusableComponent";
import { product } from "../../contents";

export default function HomePage() {
  return (
    <div>
      {product?.map((item) => (
        <Card title={item.title} content={item.overView} footer={item.link} />
      ))}
    </div>
  );
}
