import React, { useState, useEffect } from "react";
import axios from "axios";
import Person from "./list/person";
import Tags from "./list/tags";
import List from "./list/list";
import Total from "./list/total";

function Order() {
  const [selectedPerson, setSelectedPerson] = useState("passenger1");
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedItems, setSelectedItems] = useState({
    passenger1: [],
    passenger2: [],
    passenger3: [],
  });
  const [data, setData] = useState({ meals: [] });

  useEffect(() => {
    axios
      .get("http://13.235.132.240:31100/api/meals")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getList = () => data.meals;

  const getListByTag = (tag) => {
    return data.meals.filter((meal) => meal.labels.includes(tag));
  };

  const handleSetSelectedItems = (items) => {
    setSelectedItems({
      ...selectedItems,
      [selectedPerson]: items,
    });
  };

  const calculateTotalPrice = () => {
    const allItemsSelected = [
      ...selectedItems.passenger1,
      ...selectedItems.passenger2,
      ...selectedItems.passenger3,
    ];
    return allItemsSelected.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="bg-gray-100 flex flex-col md:flex-row-reverse h-auto min-h-screen w-full p-4">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <Person
          selectedPerson={selectedPerson}
          setSelectedPerson={setSelectedPerson}
        />
        <Total
          totalPrice={calculateTotalPrice()}
          selectedItems={selectedItems}
          selectedPerson={selectedPerson}
        />
      </div>
      <div className="w-full md:w-2/3">
        <Tags
          list={getList()}
          setSelectedTag={setSelectedTag}
        />
        <List
          list={selectedTag ? getListByTag(selectedTag) : getList()}
          selectedItems={selectedItems[selectedPerson]}
          setSelectedItems={handleSetSelectedItems}
        />
      </div>
    </div>
  );
}

export default Order;
