import React, { useEffect, useState } from "react";
import Packages from "./PackagesPrice";

const Packagee = () => {
  const [packages, setPackages] = useState([]);
  console.log(packages);
  useEffect(() => {
    fetch("https://mukto-chitro-server-site.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div>
      {packages.map((packagee) => (
        <Packages key={packagee.id} packagee={packagee}></Packages>
      ))}
    </div>
  );
};

export default Packagee;
