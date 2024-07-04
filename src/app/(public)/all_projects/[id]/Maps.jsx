import TitleSection from "@/app/components/common/TitleSection";
import React from "react";

function Maps({ link }) {
  return (
    <div className="space-y-4">
      <TitleSection title="موقعیت جغرافیایی" />
      <iframe
        src={link}
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-md lg:h-60"
      ></iframe>
    </div>
  );
}

export default Maps;
