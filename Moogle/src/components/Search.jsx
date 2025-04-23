import React from "react";

export const Search = () => {
  return (
    <div className=" w-[80%] flex justify-start items-center ">
      <input
        className="h-[70%] w-[60%] ml-10 rounded-md pl-3 border-2"
        type="text"
        placeholder="Search"
      ></input>
      <button className="ml-5 rounded-md pl-1 bg-gray-700 text-gray-100 w-[7%] h-[70%] hover:scale-105 transition-all">
        Search{" "}
      </button>
    </div>
  );
};
