import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Allbookings = () => {
  //   const [displayUser, setDisplayUser] = useState();
  const url = `http://localhost:3001/book`;

  const { data: booking = [], refetch } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-5 ">All booking</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Title</th>
              <th>Price</th>
              <th>Location</th>
              <th>Event Name</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((book, i) => (
              <tr key={book.id}>
                <th>{i + 1}</th>
                <td>{book.customerName}</td>
                <td>{book.phone}</td>
                <td>{book.title}</td>
                <td>{book.price}</td>
                <td>{book.location}</td>
                <td>{book.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbookings;
