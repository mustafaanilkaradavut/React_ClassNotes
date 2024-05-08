import React from "react";

const HoverAndFocus = () => {
  return (
    <>
      <div>
        <button className=" w-20 bg-sky-400 hover:bg-sky-500 hover:shadow-slate-100 rounded-full py-2 mx-1">
          Save
        </button>

        <button className=" text-white bg-yellow-400 px-5 py-2.5 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 ml-5">
          Yellow
        </button>
      </div>

      <div className=" mt-7">
        <input
          type="email"
          className=" border border-gray-400 text-gray-900 focus:outline-red-600 block w1/2 p-3 rounded-lg peer"
        />

        <p className=" mt-2 text-red-600 text-sm invisible  peer-invalid:visible ">
          Please provide a valid email address
        </p>
      </div>
    </>
  );
};

export default HoverAndFocus;
