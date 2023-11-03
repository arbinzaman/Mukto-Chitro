import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import UseTitle from "../../../Hooks/UseTitle";
import { toast } from "react-toastify";

const Register = () => {
  UseTitle("Register");
  // const {createUser} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.username.value;
    const address = form.address.value;
    const contact = form.contact.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(userName,address,contact, email, password);
    const data = { userName, address, contact, email, password };
    console.log(data);
    // createUser(email, password)
    // .then(result => {
    //     const user = result.user;
    //     console.log(user);
    //     form.reset()
    // })
    // .catch(error => console.error(error));

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("User Added Successfully");
          form.reset();
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mt-10 mb-10">
      <div className=" mx-auto w-full max-w-md p-8 space-y-3 rounded-xl bg-base-300 text-black">
        <h1 className="text-2xl font-bold text-center text-black ">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="userame" className="block text-black">
              User Name
            </label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="userName"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-black">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="address"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-black">
              Contact Number
            </label>
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="contact"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-black focus:dark:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-black focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-xs text-black">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
          >
            Sign Up
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-black">
          Already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            className="  text-black underline "
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
