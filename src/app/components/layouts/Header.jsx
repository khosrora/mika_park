import { navLinks } from "@/utils/nav_links";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import ImageCu from "../common/Logo";
import PhoneSvg from "../Icons/PhoneSvg";

function Header() {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-2">
            <IconMenu2 size={24} className="lg:hidden" />
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
                <Link href={item.href} className="hover:text-cu_primary-100">
                  {item.name}
                </Link>
              </li>
            ))}
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
  );
}

export default Header;
