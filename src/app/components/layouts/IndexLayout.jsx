import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function IndexLayout({ children }) {
  return (
    <div className="max-w-7xl m-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default IndexLayout;
