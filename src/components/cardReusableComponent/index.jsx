import React from "react";

export default function Card({ title, content, footer, image }) {
  return (
    <div className="card">
      <img src={image} alt="image" />
      <h1>{title}</h1>
      <p>{content}</p>
      <footer>{footer}</footer>
    </div>
  );
}
