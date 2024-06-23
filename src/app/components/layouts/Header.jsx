"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../../utils/nav_links";
import ImageCu from "../common/Logo";
import PhoneSvg from "../Icons/PhoneSvg";
import Drawer from "./Drawer";

function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="p-4 lg:p-0 lg:py-4">
        <div className="bg-white rounded-lg p-4">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-2">
              <Drawer />
              <ImageCu
                alt="لوگو میکاپارک"
                width={30}
                height={30}
                src="/images/logo.png"
              />
              <small className="font-bold lg:text-[18px]">میکاپارک</small>
            </div>
            <ul className="hidden lg:flex lg:justify-between lg:items-center lg:gap-x-4">
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
            <div className="flex justify-end items-center gap-x-2 lg:bg-cu_primary-100/10 lg:p-2 lg:rounded-md">
              <PhoneSvg />
              <a href="tel:09332839823" className="text-cu_primary-100 ">
                933-283-9823
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
