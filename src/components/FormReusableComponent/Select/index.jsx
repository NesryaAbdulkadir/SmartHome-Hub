import React from "react";

export default function Select({ label, name, id, value, options, onChange }) {
  return (
    <div className="flex flex-col gap-5">
      <label htmlFor={name} className="text-xl">
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="outline-none border-b-4 border-yellow-400 bg-transparent rounded-lg px-4 py-2 w-full"
      >
        {options?.map((singleOption) => (
          <option key={singleOption?.id}>{singleOption?.label}</option>
        ))}
      </select>
    </div>
  );
}
