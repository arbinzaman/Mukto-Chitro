import React from 'react';
import { Link } from 'react-router-dom';

const HighLightSection = () => {
    return (
        <section>
            <div className="bg-base-300 my-20">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Capture Your Dream Moments With Us. </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Welcome to Mukto Chitro, a creative wedding photography team from Bangladesh. Our journey began more than a decade ago. In 2017, we formed our company with a passion for capturing the simplicity of people on their special day. We believe every wedding is unique & we tell the story through our photos. From the villages to the cities, we’ve been documenting Bangladeshi weddings for a decade & our photos become more valuable with time.</p>
                    <div className="flex flex-wrap justify-center">
                      <Link to='login'><button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Contact Us</button></Link>
                       <Link to='/blogs'> <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Blogs</button></Link>
                    </div>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1579260729526-ca1e77ad9092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
        </section>
    );
};

export default HighLightSection;