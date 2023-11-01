import React from "react";
import { useLoaderData } from "react-router-dom";
import PackageDetail from "./PackageDetail";

const PackageDetails = () => {
  const packagedetails = useLoaderData();
    console.log(packagedetails);
//   packagedetails.map((packagedetail) => {
//   	console.log(packagedetail);
//   });
  return (
    <div>
      <section className="">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">OUR PACKAGES</h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Capture the magic of your urban wedding with our photography package
            designed for city weddings. Our experienced photographers know the
            best locations for stunning city shots. Contact us today to learn
            more.
          </p>
        </div>
      </section>
      <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
        {packagedetails.map((packagedetail) => (
          <PackageDetail
            key={packagedetail}
            packagedetail={packagedetail}
          ></PackageDetail>
        ))}
        z
      </div>
    </div>
  );
};

export default PackageDetails;
