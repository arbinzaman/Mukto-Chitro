import React, { useEffect, useState } from "react";
import UseTitle from "../../../Hooks/UseTitle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UseAdmin from "../../../Hooks/UseAdmin";

const PackagesPrice = () => {
  UseTitle("Packages");
  const isAdmin = UseAdmin();
  const [displayUser, setDisplayUser] = useState();
  const [packages, setPackages] = useState([]);
  console.log(packages);
  useEffect(() => {
    fetch("http://localhost:3001/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  // handleDeleteUser
  const handleDeleteUser = async (packageID) => {
    await fetch(`http://localhost:3001/packages/${packageID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Row deleted successfully") {
          console.log(data.deletedCount);
          toast.success("Package Deleted Succesfully");
          window.location.reload();
          const remainingPackages = displayUser.filter(
            (packages) => packages.packageID !== packageID
          );
          setDisplayUser(remainingPackages);
          window.location.reload();
        }
      });
  };

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
              {/* string manipulation */}

              <Link
                to={`/packagedetails/${
                  packagee.title.includes(" ")
                    ? packagee?.title?.split(" ").join("")
                    : packagee.title
                }`}
              >
                <button className="btn btn-primary">Details</button>
              </Link>

              {isAdmin && (
                <button
                  onClick={() => handleDeleteUser(packagee.packageID)}
                  className="btn  btn-danger"
                >
                  Delete
                </button>
              )}

  
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackagesPrice;
