import React from "react";

function Tabs({ tab, setTab }) {
  return (
    <div role="tablist" className="tabs tabs-bordered  max-w-lg">
      <div
        role="tab"
        onClick={() => setTab(1)}
        className={`tab ${tab === 1 ? "tab-active" : ""}`}
      >
        امکانات
      </div>
      <div
        role="tab"
        onClick={() => setTab(2)}
        className={`tab ${tab === 2 ? "tab-active" : ""}`}
      >
        ویژگی ها
      </div>
      <div
        role="tab"
        onClick={() => setTab(3)}
        className={`tab ${tab === 3 ? "tab-active" : ""}`}
      >
        مکان جغرافیایی
      </div>
    </div>
  );
}

export default Tabs;
