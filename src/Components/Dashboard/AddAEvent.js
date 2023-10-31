import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddAEvent = () => {
  const [img, setImg] = useState(null);
  const imageInput = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        if (imgData.success) {
          // const category_id = "1";
          // if (imgData.success || productcategory === "Apple" ) {
          //     const category_id = "1";

          // console.log(imgData.data.url);
          // const addToProduct = {
          //     title: title,
          //     resale_price: resale_price,
          //     specialty: data.specialty,
          //     picture: imgData.data.url
          // }

          const picture = imgData.data.url;
          const addaevent = {
            title: title,
            description: description,
            img: picture,
            // category_id: category_id
          };
          console.log(addaevent);

          fetch("https://trade-buy-sell-arbinzaman.vercel.app/myProducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addaevent),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`Event is added successfully`);
            //   Navigate("/dashboard/addaevent");
            });
        }
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

export default AddAEvent;
