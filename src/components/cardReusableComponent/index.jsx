import React from "react";

export default function Card({
  title,
  content,
  footer,
  image,
  link,
  linkText,
}) {
  return (
    <div className="w-8/12 mx-auto mt-10 px-10 shadow-md rounded-lg bg-white">
      <h1 className="text-6xl font-bold text-center mb-10">{title}</h1>
      <div className="grid grid-cols-4 gap-10 items-center justify-center">
        <img src={image} alt="image" className="w-full mx-auto col-span-2" />

        <div className="col-span-2 flex flex-col gap-2">
          <p>{content}</p>

          <a
            href={link}
            className="underline hover:bg-slate-200 py-2 px-4 rounded-lg max-w-max "
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}
