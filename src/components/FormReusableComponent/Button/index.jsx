import React from "react";

export default function Button( {
    handleClick,
    btnText,
    disabled,
    type,
}) {
  return (
    <button
      handleClick={handleClick || null}
      disabled={disabled || false}
      type={type || "submit"}
    >
      {btnText || "Submit"}
    </button>
  );
}
