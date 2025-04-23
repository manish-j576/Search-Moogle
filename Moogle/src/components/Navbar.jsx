import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-2 flex flex-wrap justify-between">
      <Link to="/">
        <div className="text-2xl font-medium cursor-pointer bg-gray-700 text-gray-100 dark:bg-gray-100 dark:text-gray-700 p-2 rounded border-b-0">
          Moogle 🔎
        </div>
      </Link>
      <Search></Search>
      <button
        className="bg-gray-700 text-gray-100 dark:bg-gray-100 dark:text-gray-700 px-4 font-medium cursor-pointer rounded hover:scale-105 transition-all"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {darkTheme ? "Light 💡" : "Dark 🌙"}
      </button>
    </div>
  );
};
