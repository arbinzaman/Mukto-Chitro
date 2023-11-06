import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AllUser = () => {
  const [displayUser, setDisplayUser] = useState();
  const url = `http://localhost:3001/users`;

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  // // handleMakeAdmin
  const handleMakeAdmin = (userID) => {
    fetch(
      `http://localhost:3001/users/${userID}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfully");
          refetch();
        }
      });
  };

  // handleDeleteUser
  const handleDeleteUser = (userID) => {
    fetch(`http://localhost:3001/users/${userID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Row deleted successfully") {
          console.log(data.deletedCount);
          toast.success("User Deleted Succesfully");
          window.location.reload();
          const remainingUsers = displayUser.filter((usr) => usr.userID !== userID);
          setDisplayUser(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-5 ">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.userID}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user.userID)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleDeleteUser(user.userID)}
                      className="btn btn-xs btn-danger"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
