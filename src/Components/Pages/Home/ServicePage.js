import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServicePage = ({ service }) => {
  // console.log(service);
  const { title, description, img } = service;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <figure>
          <PhotoView src={img}>
            <img src={img} alt="car!" style={{ objectFit: "cover" }} />
          </PhotoView>
        </figure>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100
            ? description.slice(0, 150) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to="/packages">
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
