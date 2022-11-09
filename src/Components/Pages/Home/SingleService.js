import React from 'react';

const SingleService = ({serviceDetail}) => {
    // console.log(serviceDetail);
    const{img, description,title}= serviceDetail;
    return (
        <div className='bg-base-200 mt-10 pt-10 mb-10 pb-10'>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-base-200">
                    <img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                        <p>{description}</p>
                    </div>
                </a></div>
        </div>
    );
};

export default SingleService;