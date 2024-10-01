import React from 'react';

const Loading = () => {
    console.log("loading")
    return (
        <div className='flex justify-center items-center'>
        <span className='animate-spin border-4 border-dashed border-gray-300 rounded-full h-12 w-12'></span>
    </div>
    );
};

export default Loading;