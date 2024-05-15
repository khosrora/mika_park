import Link from "next/link";
import React from "react";

function LatestNews() {
  return (
    <div className="bg-white p-4 absolute left-0 right-0 top-0 rounded-md">
      <p className="font-extrabold text-lg">اخرین مقالات</p>
      <ul className="space-y-4 mt-4">
        {[
          "طراحی معماری ساختمان",
          "مصالح ساختمانی",
          "بهترین عایق های صداگیر",
          "جدیدترین دکوراسیون های داخلی",
          "بهترین چوب های کابینت آشپزخانه",
        ].map((i) => (
          <li className="border-b">
            <Link className="text-xs" href="/">
              {i}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestNews;
