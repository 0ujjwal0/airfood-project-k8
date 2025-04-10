import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-auto p-4">
      <div className="font-mono text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl p-4 mb-8 sm:mb-10">
        CRAVING SOME
        <div className="text-violet-500">FOOD</div>
        IN AIR<span className="text-violet-500">?</span>
      </div>
      <div className="flex justify-center items-center">
        <Link to="/order">
          <button className="bg-violet-400/75 hover:bg-violet-500 text-white font-semibold hover:text-gray-200 py-2 px-4 border border-violet-500 hover:border-transparent rounded">
            ORDER NOW!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
