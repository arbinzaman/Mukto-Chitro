import React, { useEffect, useState } from "react";
import UseTitle from "../../../Hooks/UseTitle";
import { Link } from "react-router-dom";

const PackagesPrice = () => {
  UseTitle("Packages");
  //   console.log(packagee);

  const [packages, setPackages] = useState([]);
  console.log(packages);
  useEffect(() => {
    fetch("http://localhost:3001/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div>
      <section className=" ">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            FIND THE RIGHT PLAN
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            We believe in transparency and clarity, which is why our pricing is
            straightforward and easy to understand. Contact us to learn more
            about our pricing options and to book your next photography session.
          </p>
        </div>
      </section>

      {/* {description.length > 100 ? description.slice(0, 150) + "..." : description}
      to={`/services/${_id}`}
      }
      
      */}
      {packages.map((packagee) => (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <img src={packagee.img} alt="car!" />
            <h2 className="card-title">{packagee.title}</h2>
            <p>{packagee.description}</p>
            <div className="card-actions justify-end">
              <Link to={`/packagedetails/${packagee.title.includes(" ") ? packagee?.title?.split(" ").join(""):packagee.title }`} >
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackagesPrice;
