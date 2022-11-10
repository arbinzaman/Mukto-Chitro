import React, { useState } from 'react';

const ReviewsPost = ({ review }) => {
    const { name, description,_id } = review;
    const [displayUser, setDisplayUser] = useState();


    const handleDelete = () => {
        const agree = window.confirm(`Are You Sure Want to Delete : ${name}`)
        console.log(agree);
        if (agree) {
            // console.log('Deleting user With id ',user._id);
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        console.log(data.deletedCount);
                        alert('user deleted successfully.');
                        const remainingUsers = displayUser.filter(usr => usr._id !== _id);
                        setDisplayUser(remainingUsers);
                    }
                })
        }
    }
    // console.log(review);
    return (

        <div className="container mb-10 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-black">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
                
                <div>
                    <h4 className="font-bold">{name}</h4>
                    
                </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-500">
              
                <span className="text-xl font-bold"><button onClick={handleDelete}>Delete</button></span>
            </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>{description}</p>
            
        </div>
    </div>








        // <div>
        //     <div className="flex justify-between p-4">
        //         <div className="flex space-x-4">
        //             <div>
        //                 <h4 className="font-bold text-black">{name}</h4>

        //             </div>
        //         </div>
        //         <p className='font-bold text-black'>{description} <button onClick={() => handleDelete()} >X</button> </p>
        //     </div>
        //     <div className="p-4 space-y-2 text-sm  text-black ">
        //         <p></p>
        //     </div>
        // </div>
    );
};

export default ReviewsPost;