import React from "react";

export default function Select({ label, name, id, value, options, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={id} value={value} onChange={onChange}>
        {options?.map((singleOption) => (
          <option key={singleOption?.id}>{singleOption?.label}</option>
        ))}
      </select>
    </div>
  );
}
