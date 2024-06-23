import React from "react";
import BlockCard from "@/app/components/common/BlockCard";

function Bloks() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <BlockCard key={i} />
      ))}
    </div>
  );
}

export default Bloks;
