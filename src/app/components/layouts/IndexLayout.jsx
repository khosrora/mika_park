"use client";
import React from "react";

import useSWR, { SWRConfig } from "swr";

import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "sonner";

function IndexLayout({ children }) {
  return (
    <SWRConfig value={{}}>
      <Toaster
        richColors
        position="bottom-center"
        toastOptions={{
          style: {
            fontFamily: "var(--font-estedad)",
            direction: "rtl",
          },
        }}
      />
      <div className="max-w-screen-xl m-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </SWRConfig>
  );
}

export default IndexLayout;
