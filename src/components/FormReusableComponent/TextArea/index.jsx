import React from "react";

export default function TextArea({
  label,
  name,
  id,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-5">
      <label htmlFor={name} className=" text-xl">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        type={type || "text"}
        placeholder={placeholder || "Enter value here..."}
        value={value}
        onChange={onChange}
        className="outline-none border-b-4 border-yellow-400 rounded-lg px-4 py-2 w-full"
      />
    </div>
  );
}
