import { IconFileLike } from "@tabler/icons-react";
import React from "react";

function Comment() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-start items-center gap-x-2">
          <IconFileLike color="green" />
          <small>پیشنهاد میکنم</small>
        </div>
        <small className="leading-8">
          دلیل پیش خرید واحد های میکا پارک معلم نگرش حرفه ايي و تخصصي شركت میکا
          در امر ساخت و ساز ، آشنايي ، باور و بكار گيري علوم اكادميك و دانشگاهي
          هيئت مديره شركت در فعاليتهاي خود و بهره گرفتن از مشاوران و اساتيد
          تواناي دانشگاه تهران از ابتداي تدوين طرح توجيهي پروژه بوده است. در
          اكثر پروژه هاي اين چنيني از سوي سازندگان سنتي موارد متعددي مغفول مي
          ماند و باعث بروز مشكلات زياد براي خريداران مي شود.
        </small>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-4">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" />
              </div>
            </div>
            <small className="text-xs"> محمدرضا پوراسماعیل </small>
          </div>
          <small>1/2/1400</small>
        </div>
      </div>
    </div>
  );
}

export default Comment;
