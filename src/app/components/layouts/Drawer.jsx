import React from "react";

import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageCu from "../common/Logo";
import { navLinks } from "../../../utils/nav_links";

function Drawer() {
  const pathname = usePathname();

  return (
    <div className="drawer drawer-end" dir="ltr">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4">
          <IconMenu2 size={24} className="lg:hidden" />
        </label>
      </div>
      <div className="drawer-side  text-right">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className="menu p-4 w-80 min-h-full bg-base-200 space-y-4"
          dir="rtl"
        >
          <div className="flex justify-start items-center gap-x-2">
            <ImageCu
              alt="لوگو میکاپارک"
              width={30}
              height={30}
              src="/images/logo.png"
            />
            <small className="font-bold lg:text-[18px]">میکاپارک</small>
          </div>
          {navLinks.map((item) => (
            <li key={item.id} className="text-[14px]">
              <Link
                href={item.href}
                className={`hover:text-cu_primary-100 ${
                  pathname === item.href ? "text-cu_primary-100" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <details className="dropdown">
            <summary className="cursor-pointer">پروژه ها</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <Link
                  href="/all_projects?isDuring=true"
                  className={`hover:text-cu_primary-100 ${
                    pathname === "/all_projects?isDuring=true"
                      ? "text-cu_primary-100"
                      : ""
                  }`}
                >
                  پروژه های درحال انجام
                </Link>
              </li>
              <li>
                <Link
                  href="/all_projects?isDuring=false"
                  className={`hover:text-cu_primary-100 ${
                    pathname === "/all_projects?isDuring=false"
                      ? "text-cu_primary-100"
                      : ""
                  }`}
                >
                  پروژه های انجام شده
                </Link>
              </li>
            </ul>
          </details>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
