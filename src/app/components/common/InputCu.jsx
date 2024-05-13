import React from "react";

function InputCu({ title, type, placeholder, validation, errorMessage, name }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text-alt">{title}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full border-none"
        name={name}
        {...validation}
      />
      <div className="label">
        <span className="label-text-alt text-red-700">{errorMessage}</span>
      </div>
    </label>
  );
}

export default InputCu;
