import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext);


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch(error => console.error(error));
    }
    return (
        <div className='mt-10 mb-10'>
            <div className=" mx-auto w-full max-w-md p-8 space-y-3 rounded-xl bg-base-300 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center text-black ">Sign Up</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-black">Name</label>
                        <input type="text" name="name" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                 
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign Up</button>
                </form>
   
            
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                    <Link to="/signIn" rel="noopener noreferrer"  className="  text-black underline ">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;