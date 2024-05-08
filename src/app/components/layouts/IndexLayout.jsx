import React from "react";
import Header from "./Header";

function IndexLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default IndexLayout;
