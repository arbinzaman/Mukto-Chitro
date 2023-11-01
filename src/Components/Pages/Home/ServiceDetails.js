import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";
import SingleService from "./SingleService";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  // console.log(serviceDetails);
  return (
    <div>
      {serviceDetails.map((serviceDetail) => (
        <SingleService
          key={serviceDetail._id}
          serviceDetail={serviceDetail}
        ></SingleService>
      ))}
      <Reviews></Reviews>
    </div>
  );
};

export default ServiceDetails;
