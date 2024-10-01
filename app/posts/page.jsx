import getAllPosts from '@/lib/getAllPost';
import Link from 'next/link';
import React from 'react';

const PostsPage = async() => {
   
    const posts = await getAllPosts()


    return (
        <div className='mt-6 p-8'>
            <h1>All Posts : {posts.length}</h1>
            <ul className='grid grid-cols-3 gap-4'>
                {posts.map((post, id) => (
                    <li key={id} className='p-4 bg-violet-500 border-2 h-40'>
                        <Link href={`/posts/${post.id}`}> {post.title}</Link>
                       </li>
                ))}
            </ul>
            
        </div>
    );
};

export default PostsPage;