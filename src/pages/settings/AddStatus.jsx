import React, { useState } from "react";
import Select from "react-select";
import { FaCaretDown } from "react-icons/fa";

const AddStatus = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colorOptions = [
    { value: "green", label: "Green", color: "green" },
    { value: "blue", label: "Blue", color: "blue" },
    { value: "yellow", label: "Yellow", color: "yellow" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedColor(selectedOption);
  };
  return (
    <div className="mx-4">
      <p className="my-8">Add Status</p>
      <form className="grid gap-4 items-center my-4 ">
        <label htmlFor="">
          Status Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Status Name"
          className=" text-black rounded-md w-7/12 py-2 px-1 "
        />
        <label htmlFor="">
          Select Color <span className="text-red-600 ">*</span>
        </label>
        <div className="relative inline-block ">
          <Select
            className="w-7/12  outline-none  rounded-md "
            value={selectedColor}
            onChange={handleChange}
            options={colorOptions}
            getOptionLabel={(e) => (
              <div
                style={{
                  backgroundColor: e.color,
                  padding: "16px",
                  width: "95%",
                }}
              ></div>
            )}
            placeholder="Select Color"
          />
          <div className="absolute inset-y-0 right-[305px] flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
            <FaCaretDown className="text-black text-2xl" />
          </div>
        </div>
        <div className="flex justify-center my-4 w-7/12">
          <button className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5  ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStatus;
