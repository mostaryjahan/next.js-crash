import getPost from "@/lib/getPost";
import React from "react";

export async function generateMetadata({params}) {
    const { id } = params;
    const post = await getPost(id);
    return {
      title: post.title,
      description: post.body,
    };
  }

const PostsIdPage = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);

 

  return (
    <div className="mt-6">
      <h1 className="text-blue-600">Title: {post.title}</h1>
      <p>Description: {post.body}</p>
    </div>
  );
};

export default PostsIdPage;
