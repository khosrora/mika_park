import React from "react";

function ButtonCu({ handler, title, type }) {
  return (
    <button
      className="btn bg-cu_primary-100/30 border text-cu_primary-100 border-cu_primary-100 w-1/2"
      type={type}
      onClick={handler}
    >
      {title}
    </button>
  );
}

export default ButtonCu;
