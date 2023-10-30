import React, { useState } from 'react';
import { toast } from 'react-toastify';
import UseTitle from '../../../Hooks/UseTitle';

const AddService = () => {
    UseTitle("Add Service")
    // console.log(services);
    const [user, setUser] = useState({});

    const handleAddService = event => {
        event.preventDefault();
        console.log(user);


        fetch("https://citro-golpo.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.acknowledged) {
                    // event.target.from.reset()
                    toast.success("Added New Service");
                }
            })
            .catch((err) => console.log(err));

    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser)
    }
    return (
        <div>
             <div className="flex flex-col mt-10 pb-10 mb-10 p-6 rounded-md sm:p-10 bg-base-300 text-black text-black">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Add A Custom Service</h1>
                    <p className="text-sm dark:text-gray-400">You Can Add Your Customize Service From Us.</p>
                </div>
                <form onSubmit={handleAddService} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm">Field</label>

                            <input onChange={handleInputBlur} type="text" name="title" id="title" placeholder="Custom Field Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-base-300 text-black" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="text" className="text-sm">Text</label>

                            </div>

                            <input onChange={handleInputBlur} type="text" name="description" id="description" placeholder="Describe Details" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-base-300 text-black" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="text" className="text-sm">Photo</label>

                            </div>

                            <input onChange={handleInputBlur} type="img" name="img" id="img" placeholder="Attach Img" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-base-300 text-black" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;
