import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const PackageDetail = ({ packagedetail }) => {
  // console.log(packagedetail);
  const { description, title, event, location, price } = packagedetail;
  const [booking, setBooking] = useState({});
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    fetch("https://citro-golpo.vercel.app/services", {
      method: "",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          // event.target.from.reset()
          toast.success("Booking Succesfull");
        }
      })
      .catch((err) => console.err(err));

    const handleSetBooking = (event) => {
      setBooking();
    };
  };

  return (
    <div>
      <section className="py-6  ">
        <div className="container p-4 mx-auto sm:p-10">
          <div className="">
            <div className="flex flex-col overflow-hidden border-2 rounded-md border-gray-700">
              <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 ">
                <p className="text-lg font-medium">{title}</p>
                <p className="text-5xl font-bold">
                  {price}
                  {/* <span className="text-xl text-gray-400"></span> */}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-300">
                <ul className="self-stretch flex-1 space-y-2">
                  <li className="flex justify-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                    <span>{description}</span>
                  </li>
                </ul>
                <button
                  onClick={handleBooking()}
                  className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-slate-400 text-gray-900"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetail;
