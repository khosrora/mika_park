import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function Blocks() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div className="bg-white p-6 rounded-md">
          <div className="mb-4">
            <p>بلوک 1</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs font-light">مهندس ناظر</p>
            <p>محمدرضایی</p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <p className="text-xs font-light">پیشرفت کلی</p>
            <p>80 %</p>
          </div>
          <div className="divider"></div>
          <Link
            href="/charts/1"
            className="flex justify-between items-center text-blue-500"
          >
            <p className="text-xs font-light">جزئیات بیشتر</p>
            <IconChevronLeft />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blocks;
