import React, { useState } from "react";

function List({ list, selectedItems, setSelectedItems }) {
  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="bg-white p-2 m-2 rounded-md ">
      {list.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-center mb-2 p-3"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full md:w-24 h-24 object-cover rounded mb-4 md:mb-0 md:mr-4"
          />
          <div className="flex-grow">
            <h3 className="text-sm font-italic text-gray-700">{item.title}</h3>
            <p className="font-bold text-gray-700">{item.starter}</p>
            <div>
              <p className="text-gray-600">
                <span className="font-sm">Dessert:</span> {item.dessert}
              </p>
              <p>
                <span className="font-sm text-gray-700">Selected drink:</span>{" "}
                {item.selectedDrink}
              </p>
              <div className="flex items-center flex-wrap mt-2">
                {item.drinks &&
                  item.drinks.map((drink) => (
                    <img
                      key={drink.id}
                      src={drink.img}
                      alt={drink.title}
                      className="w-8 h-8 object-cover mr-2 cursor-pointer hover:border-2 border-gray-400 rounded hover:border-solid"
                      onClick={() => handleCheckboxChange(drink)}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <span className="text-lg font-italic text-gray-800">
              {item.price} €
            </span>
            <button
              onClick={() => handleCheckboxChange(item)}
              className={`mt-2 px-4 py-2 border rounded ${
                selectedItems.some(
                  (selectedItem) => selectedItem.id === item.id
                )
                  ? "bg-white text-violet-800 border border-solid"
                  : "bg-violet-100 text-violet-500"
              }`}
            >
              {selectedItems.some((selectedItem) => selectedItem.id === item.id)
                ? "Selected"
                : "Select"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
