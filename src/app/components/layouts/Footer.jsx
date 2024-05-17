import { IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import ImageCu from "../common/Logo";

function Footer() {
  return (
    <footer className="footer p-10 bg-white text-base-content mt-14 lg:rounded-md">
      <aside>
        <div className="flex justify-start items-center gap-x-4">
          <ImageCu
            alt="لوگو میکاپارک"
            width={80}
            height={80}
            src="/images/logo.png"
          />
          <small className="font-extrabold text-lg">میکاپارک</small>
        </div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">لینک سریع</h6>
        <Link href="/" className="link link-hover">
          خانه
        </Link>
        <Link href="/critics" className="link link-hover">
          انتقادات و پیشنهادات
        </Link>
        <Link href="/about_us" className="link link-hover">
          درباره ما
        </Link>
        <Link href="/blogs" className="link link-hover">
          بلاگ
        </Link>
        <Link href="contact_us" className="link link-hover">
          ارتباط با ما
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">تماس با ما</h6>
        <p className="link link-hover">8 صبح تا 5 غروب</p>
        <p className="link link-hover">زیباشهر نبش پیامبر اعظم 11</p>
        <p className="link link-hover">054-467894</p>
        <p className="link link-hover">info@gmail.ir</p>
      </nav>
      <nav>
        <h6 className="footer-title">راه های ارتباطی</h6>
        <div className="flex justify-start items-center">
          <a className="link link-hover">
            <IconBrandInstagram color="grey" stroke={1} />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
