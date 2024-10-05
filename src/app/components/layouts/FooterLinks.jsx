import { fetcher } from "@/utils/get_data";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

function FooterLinks() {
  const {
    data: footerLink,
    isLoading,
    error,
  } = useSWR(["siteinfo/footer_links/"], fetcher);
  
  if (isLoading) return <div className=""></div>;
  if (error) return <p> {error.message} </p>;
  return (
    <>
      <nav>
        <h6 className="footer-title">لینک سریع</h6>
        {footerLink.map((i) => {
          if (i.footer_link_type === "C") return null;
          return (
            <Link key={i.id} href={i.link} className="link link-hover">
              {i.title}
            </Link>
          );
        })}
      </nav>
      <nav>
        <h6 className="footer-title">تماس با ما</h6>
        {footerLink.map((i) => {
          if (i.footer_link_type === "F") return null;
          return (
            <p key={i.id} className="link link-hover">
              {i.title}
            </p>
          );
        })}
      </nav>
    </>
  );
}

export default FooterLinks;
