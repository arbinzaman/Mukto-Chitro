import React from "react";

const Gallery = () => {
  return (
    <section className="my-6 bg-gray-300 text-gray-50">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://source.unsplash.com/random/200x200/?1"
          alt=""
          className="w-full h-70 col-span-2 row-span-2 rounded shadow-sm min-h-96  mx-auto md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://weddingdiary.com.bd/wp-content/uploads/2023/05/0O7A4139-1.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://chitrogolpo.com/wp-content/uploads/2023/06/50314456_2014229001999714_6712095579322712064_n.jpeg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?2"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?3"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?4"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?5"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?6"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?7"
        />
        <img
          src="https://source.unsplash.com/random/302x302/"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};

export default Gallery;
