import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Service = ({ homeService }) => {
  const [displayEvent, setDisplayEvent] = useState();
  // console.log(service.description);
  // console.log(service);
  const { eventID, title, description, img,} = homeService;
  // console.log(title);

  // handleDeleteUser
  const handleDeleteUser = (eventID) => {
    fetch(`http://localhost:3001/event/${eventID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          console.log(data.deletedCount);
          toast.success("Event Deleted Succesfully");
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
            <button
              onClick={() => handleDeleteUser(eventID)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
          <div className="card-actions justify-end">
            <Link to="/packages">
              {" "}
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
