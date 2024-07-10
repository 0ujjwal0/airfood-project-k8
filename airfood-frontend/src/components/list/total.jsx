import React from "react";

function Total({ selectedItems, selectedPerson }) {
  const calculatePersonTotal = () => {
    let personTotal = 0;

    selectedItems[selectedPerson].forEach((item) => {
      personTotal += item.price;
    });

    return personTotal;
  };

  const calculateOverallTotal = () => {
    let overallTotal = 0;

    Object.values(selectedItems).forEach((personItems) => {
      personItems.forEach((item) => {
        overallTotal += item.price;
      });
    });

    return overallTotal;
  };

  return (
    <div className="md:mx-20 p-10 bg-gray-100 rounded shadow border border-violet-500">
      <div className="mb-4">
        <h4 className="font-semibold text-violet-500">
          {selectedPerson} Total:
        </h4>
        {selectedItems[selectedPerson].map((item) => (
          <p
            key={item.id}
            className="text-sm text-gray-500"
          >
            {item.title} - {item.price} €
          </p>
        ))}
        <p className="font-bold text-gray-500">
          Total: {calculatePersonTotal()} €
        </p>
      </div>
      <hr className="my-4" />
      <div>
        <h4 className="font-semibold text-violet-500">Overall Total:</h4>
        <p className="font-bold text-gray-500">{calculateOverallTotal()} €</p>
      </div>
    </div>
  );
}

export default Total;
