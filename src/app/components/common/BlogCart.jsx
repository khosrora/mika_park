import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function BlogCart({ blog }) {
  
  return (
    <div className="card bg-white mx-2">
      <figure className="p-4">
        <img src={blog.image.image} alt={blog.title} className="rounded-xl" />
      </figure>
      <div className="card-body text-right">
        <h2 className="card-title">{blog.title}</h2>
        <p className="text-xs leading-6">
          {blog.short_desc.length > 60
            ? `${blog.short_desc.substring(0, 60)}...`
            : blog.short_desc}
        </p>
        <div className="card-actions">
          <Link
            href={`/blogs/${blog.slug}`}
            className="text-cu_primary-100 flex justify-start items-center gap-x-4"
          >
            ادامه مطلب
            <IconArrowNarrowLeft size={24} stroke={1} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCart;
