import React from 'react';
import UseTitle from '../../../Hooks/UseTitle';

const Blogs = () => {
    UseTitle("BLogs")
    return (
        <div className="bg-base-300 text-base-300">
            <div className="container mb-10 mt-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-300">

                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl  text-black font-bold hover:underline">Difference Between SQL and NoSQl?</a>
                    <p className="mt-2 text-black ">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                  
                </div>
            </div>
            <div className="container mb-10 mt-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-300">

                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl  text-black font-bold hover:underline">What is JWt, and how Does it work?</a>
                    <p className="mt-2 text-black ">What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                  
                </div>
            </div>
            <div className="container mb-10 mt-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-300">

                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl  text-black font-bold hover:underline">What is The difference Between Javascript and NodeJS?</a>
                    <p className="mt-2 text-black ">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                  
                </div>
            </div>
            <div className="container mb-10 mt-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-base-300">

                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl  text-black font-bold hover:underline">How does NodeJs handle multiple requests at the same time ?</a>
                    <p className="mt-2 text-black ">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                  
                </div>
            </div>
        </div>
    );
};

export default Blogs;