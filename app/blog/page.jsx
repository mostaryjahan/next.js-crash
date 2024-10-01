import Link from "next/link";
import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus non porro sit deserunt nostrum possimus omnis ad corporis minima debitis!",
    },
    {
      id: 2,
      title: "Blog 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus non porro sit deserunt nostrum possimus omnis ad corporis minima debitis!",
    },
  ];
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl">All Blogs : {blogs.length}</h1>
    
      <ul>
        {blogs.map((blog)=> (<li key={blog.id} className="mb-6 mt-6">
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>))}
      </ul>
    </div>
  );
};

export default Blogs;
