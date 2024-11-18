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
    <div className="xl:w-8/12 lg:w-10/12  mx-auto mt-10 py-10 px-10 shadow-md rounded-lg bg-white">
      <div className="grid md:grid-cols-4 gap-10 items-center justify-center">
        <img
          src={image}
          alt="image"
          className="w-full mx-auto col-span-2 rounded-md"
        />

        <div className="col-span-2 flex flex-col md:gap-10 gap-5">
          <h1 className="text-4xl sm:text-5xl font-bold ">{title}</h1>
          <div className="flex flex-col gap-2">
            <p>{content}</p>

            <a
              href={link}
              className="underline hover:bg-slate-200 py-2 px-4 rounded-lg max-w-max font-bold"
            >
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
