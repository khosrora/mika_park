import React from "react";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

function BlockCard() {
  return (
    <div className="bg-white rounded-md p-4">
      <p>بلوک 1</p>
      <div className="flex justify-between items-center">
        <small className="text-xs">مهندس ناظر : </small>
        <p>محمدرضایی</p>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between items-center">
        <small className="text-xs">پیشرفت کلی : </small>
        <p>80 %</p>
      </div>
      <div className="divider"></div>
      <Link
        href="/charts/1"
        className="flex justify-between items-center text-blue-600"
      >
        <small className="text-xs">جزئیات بیشتر </small>
        <IconChevronLeft color="blue" />
      </Link>
    </div>
  );
}

export default BlockCard;
