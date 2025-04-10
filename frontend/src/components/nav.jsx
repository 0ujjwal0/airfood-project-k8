import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="bg-gray-300 flex justify-between items-center h-24 max-w-auto mx-auto px-4 text-white">
        <Link to="/">
          <button className="w-full text-3xl font-bold text-violet-500">
            Airfood
          </button>
        </Link>
        <ul className=" flex flex-row ">
          <li>
            <Link to="/">
              <button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/order">
              <button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4   hover:border-transparent rounded">
                Order
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
}

export default Nav;
