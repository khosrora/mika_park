import React from "react";

function SkDives() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
}

export default SkDives;
