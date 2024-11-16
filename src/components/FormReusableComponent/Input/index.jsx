import React from "react";

export default function Input({
  label,
  name,
  id,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "Enter value here..."}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
