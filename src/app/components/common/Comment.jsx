import { IconFileLike } from "@tabler/icons-react";
import React from "react";

function Comment({ comment }) {
  return (
    <div className="flex flex-col space-y-4 bg-white p-4 rounded-md">
      <div className="flex justify-start items-center gap-x-2">
        <IconFileLike color="green" />
        <small>پیشنهاد میکنم</small>
      </div>
      <small className="leading-8 text-xs">{comment.comment}</small>
      <div className="divider"></div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-4">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" />
            </div>
          </div>
          <small className="text-xs"> {comment.name} </small>
        </div>
        <small>{comment.date}</small>
      </div>
    </div>
  );
}

export default Comment;
