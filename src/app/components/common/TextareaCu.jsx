import React from "react";

function TextareaCu({
  title,
  type,
  placeholder,
  validation,
  errorMessage,
  name,
}) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text-alt">{title}</span>
      </div>
      <textarea
        type={type}
        className="input input-bordered w-full border min-h-32"
        name={name}
        {...validation}
      ></textarea>
      <div className="label">
        <span className="label-text-alt text-red-700">{errorMessage}</span>
      </div>
    </label>
  );
}

export default TextareaCu;
