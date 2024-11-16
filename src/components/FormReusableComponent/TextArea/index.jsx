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
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={id}
        type={type || "text"}
        placeholder={placeholder || "Enter value here..."}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
