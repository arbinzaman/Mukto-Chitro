import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../Components/Shared/Spiner/Spiner";
const AddAEventCatagory = () => {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageInput = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const picture = img;
    const formData = new FormData();
    formData.append("image", picture);
    const url = `https://api.imgbb.com/1/upload?key=6cbb967e3c16f1e826cbddd427dbde87`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        toast.error(imgData.message);
        if (imgData.success) {
          const picture = imgData.data.url;
          const addaeventcategory = {
            title: title,
            description: description,
            img: picture,
          };
          console.log(addaeventcategory);

          fetch("http://localhost:3001/packages", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addaeventcategory),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.message === "Data Posted successfully") {
                setLoading(false);
                toast.success(`Event is added successfully`);
                form.reset();
              }
            });
        }
      });
  };

  if (loading) return <Spinner></Spinner>;
  return (
    <div className="text-center">
      <div className="flex flex-col max-w-md p-6 mt-20 rounded-md sm:p-10 dark:bg-base-300 dark:text-black">
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
              <label htmlFor="description" className="block mb-2 text-sm">
                Description
              </label>
              <input
                type="description"
                name="description"
                id="description"
                placeholder=""
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black"
              />
            </div>

            <div>
              <label htmlFor="file" className="block mb-2 text-sm">
                Drop A Picture
              </label>
              <input
                type="file"
                onChange={imageInput}
                name="file"
                id="file"
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

export default AddAEventCatagory;
