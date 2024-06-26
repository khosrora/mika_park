import TitleSection from "@/app/components/common/TitleSection";
import React from "react";

function Maps() {
  return (
    <div className="space-y-4">
      <TitleSection title="موقعیت جغرافیایی" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d305.818415157182!2d60.880093556373!3d29.45924129228013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1715598597155!5m2!1sen!2s"
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
