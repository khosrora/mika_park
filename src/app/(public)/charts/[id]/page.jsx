import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function page() {
  return (
    <div>
      <div className="bg-white p-6 rounded-md">
        <div className="mb-4">
          <p>بلوک 1</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="flex justify-between items-center">
              <p className="text-xs font-light">مهندس ناظر : </p>
              <p>محمدرضایی</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 mt-4 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <PieChart />
        ))}
      </div>
      {/* <BarChart /> */}
    </div>
  );
}

export default page;
