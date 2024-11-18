import React from "react";

export default function Button({ handleClick, btnText, disabled, type }) {
  return (
    <button
      handleclick={handleClick || null}
      disabled={disabled || false}
      type={type || "submit"}
      className="bg-blue-700 text-white py-4 px-8 rounded-lg max-w-max font-bold text-xl "
    >
      {btnText || "Submit"}
    </button>
  );
}
