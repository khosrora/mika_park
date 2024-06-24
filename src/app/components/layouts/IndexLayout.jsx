"use client";
import React from "react";

import useSWR, { SWRConfig } from "swr";

import Header from "./Header";
import Footer from "./Footer";

function IndexLayout({ children }) {
  return (
    <SWRConfig value={{}}>
      <div className="max-w-7xl m-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </SWRConfig>
  );
}

export default IndexLayout;
