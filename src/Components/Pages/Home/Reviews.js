import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Reviews = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);   

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const text = form.text.value;
        const userReview =(name,text,email);
        console.log(userReview);



        if (user?.uid) {
            fetch("http://localhost:5000/reviews", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userReview),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        form.reset();
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert("Please login first to provide review!");



        }
    }



        return (
            <div>

                <div className='grid grid-cols-2 mt-10 pt-10 mb-10'>
                    <form onSubmit={handleReviewSubmit} className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-base-200 dark:text-gray-100">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center text-black">Your Review!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center text-black">How was your experience?</span>
                            </div>


                            <div className='w-full pb-2'>

                                <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" defaultValue={user?.email} />
                            </div>
                            <div className='w-full pb-2'>

                                <input type="text" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea rows="3" type="text" id="text" name="text" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 bg-white">Leave Review</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a rel="noopener noreferrer" href="#" className="text-sm bg-black px-3 py-3 rounded-lg text-gray-400">Maybe later</a>
                        </div>
                    </form>


                    {/* ShowReviewSection */}


                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-base-200 dark:text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src={user?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black">{user?.displayName}</h4>

                                </div>
                            </div>

                        </div>
                        <div className="p-4 space-y-2 text-sm  text-black ">
                            <p></p>
                        </div>
                    </div>
                </div>




            </div>
        );
    };

    export default Reviews;