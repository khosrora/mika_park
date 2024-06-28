import React from "react";

function Alert({ message, className }) {
  return (
    <div role="alert" className={className}>
      <span>{message}</span>
    </div>
  );
}

export default Alert;
