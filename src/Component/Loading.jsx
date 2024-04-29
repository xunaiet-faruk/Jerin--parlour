import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="w-20 h-20  border-l-4 border-pink-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-red-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-4  border-orange-200 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>

        </div>
    );
};

export default Loading;