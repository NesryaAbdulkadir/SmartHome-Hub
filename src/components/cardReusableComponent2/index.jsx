import React from "react";

export default function Card2({
  title,
  content,
  footer,
  image,
  link,
  linkText,
}) {
  return (
    <div className="mx-auto mt-10 px-10 py-10 shadow-md rounded-lg bg-white w-full">
      <div className="flex flex-col gap-10 items-center justify-center">
        <img
          src={image || null}
          alt="image"
          className="w-full h-56 object-cover mx-auto rounded-md"
        />

        <div className="flex flex-col md:gap-10 gap-5">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold ">
            {title}
          </h1>
          <div className="flex flex-col gap-2">
            <p className="sm:text-xl leading-8">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
