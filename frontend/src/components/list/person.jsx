import React from "react";

function Person({ selectedPerson, setSelectedPerson }) {
  const persons = ["passenger1", "passenger2","passenger3"];

  const handleChange = (event) => {
    setSelectedPerson(event.target.value);
  };

  return (
    <div className="mb-4 md:py-20 md:px-20 ">
      <label
        htmlFor="person-select"
        className="block mb-2 font-italic text-violet-700"
      >
        Select passenger:
      </label>
      <select
        id="person-select"
        value={selectedPerson}
        onChange={handleChange}
        className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none bg-gray-100 text-gray-700 "
      >
        {persons.map((person) => (
          <option
            key={person}
            value={person}
          >
            {person}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Person;
