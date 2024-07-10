import React, { useEffect } from "react";

function Tags({ list, setSelectedTag }) {
  const labels = [...new Set(list.flatMap((item) => item.labels))];

  useEffect(() => {
    setSelectedTag(null);
  }, [setSelectedTag]);

  return (
    <div className="mb-4">
      <button
        onClick={() => setSelectedTag(null)}
        className="focus:outline-none focus:ring focus:ring-violet-200 py-2 px-4 mr-3 text-gray-700 hover:bg-violet-500 hover:text-white rounded-2xl"
      >
        All
      </button>
      {labels.map((label) => (
        <button
          key={label}
          onClick={() => setSelectedTag(label)}
          className="focus:outline-none focus:ring focus:ring-violet-200 py-2 px-4 mr-3 mb-1 text-gray-700 hover:bg-violet-500 hover:text-white rounded-2xl"
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Tags;
