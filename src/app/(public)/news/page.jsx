import NewsCart from "@/app/components/common/newsCart";
import React from "react";

function page() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <NewsCart />
        ))}
      </div>
    </div>
  );
}

export default page;
