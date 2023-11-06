import { useQuery } from "@tanstack/react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddAPackage = () => {
  const { data: packages = [] } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3001/packages");
      const data = await res.json();
      return data;
    },
  });
  console.log(packages);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const location = form.location.value;
    const description = form.description.value;
    const eventName = form.event.value;

    const addapackage = {
      title: title,
      location: location,
      price: price,
      description: description,
      event: eventName,
    };
    console.log(addapackage);

    fetch("http://localhost:3001/packagedetails", {
      method: "",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addapackage),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`Package Detail is added successfully`);
        // Navigate('/dashboard/addaproduct')
      });
  };

  return (
    <div className="text-center">
      <div className="flex flex-col max-w-md p-6 mt-10 rounded-md sm:p-10 dark:bg-base-300 dark:text-black">
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm">
                title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder=""
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black"
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2 text-sm">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder=""
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black"
              />
            </div>
            <div>
              <select
                type="text"
                name="location"
                id="location"
                className="select block w-full text-center text-black"
              >
                <option disabled selected>
                  Loaction
                </option>
                {packages.map((packagee) => (
                  <option key={packagee.id} value={packagee.title}>
                    {packagee.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="event" className="block mb-2 text-sm">
                event
              </label>
              <input
                type="text"
                name="event"
                id="event"
                placeholder=""
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black"
              />
            </div>

            <div>
              <label htmlFor="description" className="block mb-2 text-sm">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder=""
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md btn btn-primary dark:text-base-300"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAPackage;
