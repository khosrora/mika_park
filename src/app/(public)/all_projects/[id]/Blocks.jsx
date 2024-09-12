import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function Blocks({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-md">
          <div className="mb-4">
            <p>{item.title}</p>
          </div>
          {item.specs.map((i, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-xs font-light">{i.key}</p>
              <p>{i.value}</p>
            </div>
          ))}
          <div className="divider"></div>
          <Link
            href={`/charts/${item.id}`}
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
