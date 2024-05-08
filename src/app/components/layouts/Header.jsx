import { IconMenu2 } from "@tabler/icons-react";
import ImageCu from "../common/Logo";
import PhoneSvg from "../Icons/PhoneSvg";

function Header() {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-2">
            <IconMenu2 size={24} />
            <ImageCu
              alt="لوگو میکاپارک"
              width={30}
              height={30}
              src="/images/logo.png"
            />
            <small className="font-bold">میکاپارک</small>
          </div>
          <div className="flex justify-end items-center gap-x-2">
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
