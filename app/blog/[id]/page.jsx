import React from 'react';

const BlogPage = ({params}) => {
    const {id, title, description} = params;
    return (
          <div
         key={id}
            className="border-2 p-4 bg-orange-300 border-orange-600 mt-10"
          >
            <p> Blog ID: {id}</p>
            <h1 className="text-center text-xl font-bold">
              Title: {title}
            </h1>
            <p>
              <span className="font-bold">Description:</span> {description}
            </p>
        
      </div> 
    );
};

export default BlogPage;

