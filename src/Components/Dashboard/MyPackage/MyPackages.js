import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import MyPackage from "./MyPackage";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const MyPackages = () => {
  const { user } = useContext(AuthContext);
  const url = `https://mukto-chitro-server-site.vercel.app/book/${user?.email}`;

  const { data: myBookings = [] } = useQuery({
    queryKey: ["myBookings"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  // console.log(myBookings);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-5 ">My Bookings</h1>
      <div className="grid md:grid-cols-2 gap-3 my-20">
      {Array.isArray(myBookings) && myBookings.length > 0 ? (
        myBookings.map((myBooking) => (
          <MyPackage key={myBooking?.BookID} myBooking={myBooking}></MyPackage>
        ))
      ) : (
        <h1 className="text-3xl font-bold text-red-600 mb-10 mt-5">No Booking added</h1>
      )}
      </div>
    </div>
  );
};

export default MyPackages;
