import React from 'react';

const ReviewsPost = ({review}) => {
    const {name,description} = review;
    // console.log(review);
    return (
        <div>
            <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <h4 className="font-bold text-black">{name}</h4>

                            </div>
                        </div>
                            <p className='font-bold text-black'>{description}</p>
                    </div>
                    <div className="p-4 space-y-2 text-sm  text-black ">
                        <p></p>
                    </div>
        </div>
    );
};

export default ReviewsPost;