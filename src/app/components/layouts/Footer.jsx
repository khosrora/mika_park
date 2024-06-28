import { IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import ImageCu from "../common/Logo";
import useSWR from "swr";
import { fetcher } from "@/utils/get_data";
import FooterLinks from "./FooterLinks";

function Footer() {
  const {
    data: footer,
    isLoading,
    error,
  } = useSWR(["siteinfo/footer/"], fetcher);

  if (!!isLoading) return <div className=""></div>;
  if (error) return <p> {error.message} </p>;

  return (
    <footer className="footer p-10 bg-white text-base-content mt-14 lg:rounded-md">
      <aside>
        <div className="flex justify-start items-center gap-x-4">
          <ImageCu
            alt={footer.logo.title}
            width={80}
            height={80}
            src={footer.logo.url}
          />
          <small className="font-extrabold text-lg">{footer.title}</small>
        </div>
        <p>{footer.description}</p>
      </aside>
      <FooterLinks />
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
