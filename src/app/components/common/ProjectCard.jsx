import Link from "next/link";
import React from "react";

function ProjectCard({ item }) {
  return (
    <Link key={item.id} href="/all_projects/1">
      <div
        style={{
          "--image-url": `url(${item.link})`,
        }}
        className="bg-[image:var(--image-url)] h-60 bg-cover mx-2 rounded-lg relative overflow-hidden lg:h-96"
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex justify-center items-end pb-2"
          style={{ backgroundColor: "rgb(0, 0, 0, 0.5)" }}
        >
          <p className="text-white text-xs font-bold lg:text-lg">
            {item.title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
