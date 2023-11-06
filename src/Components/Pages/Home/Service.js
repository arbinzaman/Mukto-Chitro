import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../../../Hooks/UseAdmin";

const Service = ({ homeService }) => {
  const [displayEvent, setDisplayEvent] = useState();
  const isAdmin = useAdmin();
  const { eventID, title, description, img } = homeService;

  // handleDeleteUser
  const handleDeleteUser = (eventID) => {
    fetch(`http://localhost:3001/event/${eventID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Row deleted successfully") {
          console.log(data.deletedCount);
          toast.success("Event Deleted Succesfully");
          window.location.reload();
          const remainingUsers = displayEvent.filter(
            (usr) => usr.eventID !== eventID
          );
          setDisplayEvent(remainingUsers);
        }
      });
  };

  return (
    <div>
      {/* All Services */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 100
              ? description.slice(0, 150) + "..."
              : description}
          </p>
          <div className="card-actions justify-end">
            <Link to="/packages">
              {" "}
              <button className="btn btn-primary">Details</button>
            </Link>
            {isAdmin && (
              <button
                onClick={() => handleDeleteUser(eventID)}
                className="btn ml-2 btn-danger"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
