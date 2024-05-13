import React from "react";

function TitlePage({ text }) {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl font-bold">{text}</h1>
    </div>
  );
}

export default TitlePage;
