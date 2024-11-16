import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const AddPackage = () => {
  const [selectedValue, setSelectedValue] = useState("5");
  const [selectedType, setSelectedType] = useState('Text & Image Course');
  const handleRadioChangeType = (event) => {
    setSelectedType(event.target.value);
};

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const navigate=useNavigate()
  const redirectPackage=()=>{
    navigate('/packages')
  }
  return (
    <>
      <div className="font-extralight ">
        <p className="mb-2 mx-2 mt-4 ">Add a new package</p>
        <hr />
        <form className="mx-4 my-6 ">
          <div className="grid gap-2.5 font-extralight ">
            <label className="text-lg col-span-12">
              Package Name <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Package name"
              className="col-span-2 text-black rounded-md py-1.5 px-2"
              required
            />
            <label className="text-lg col-span-12">
              Price <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
               placeholder="Enter Price"
              className="col-span-2 text-black rounded-md py-1.5 px-2"
              required
            />
            <label className="text-lg col-span-12">
              No of Courses per month <span className=" text-red-600">*</span>
            </label>
            <input
              type="number"
              placeholder="00"
              className="col-span-2 text-black rounded-md py-1.5 px-2"
              required
            />
            <label className="text-lg col-span-12">
              Tax <span className=" text-red-600">*</span>
            </label>
            <div className="relative inline-block col-span-2 ">
              <select defaultValue="select" className=" w-full text-black px-2 py-1.5 outline-none rounded-md ">
                <option value="select" disabled>
                  Select Tax
                </option>
                <option value="">Tax1</option>
                <option value="">Tax2</option>
                <option value="">Tax3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>

            <label className="text-lg col-span-12">
              No of Subtopic <span className=" text-red-600">*</span>
            </label>
            <div className="flex flex-col space-y-1">
            <div className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="value"
                id="5"
                value="5"
                onChange={handleRadioChange}
                className="hidden peer"
              />
              <label htmlFor="5" className="flex items-center cursor-pointer">
                <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <span
                    className={`w-3 h-3  ${
                      selectedValue === "5" ? "bg-white" : "hidden"
                    }`}
                  ></span>
                </span>
                <span className="ml-2">05</span>
              </label>
            </div>

            <div className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="value"
                id="10"
                value="10"
                onChange={handleRadioChange}
                className="hidden peer"
              />
              <label htmlFor="10" className="flex items-center cursor-pointer">
                <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <span
                    className={`w-3 h-3  ${
                      selectedValue === "10" ? "bg-white" : "hidden"
                    }`}
                  ></span>
                </span>
                <span className="ml-2">10</span>
              </label>
            </div>
          </div>
          <p className="text-lg py-2 col-span-12">Course Type  <span className="text-red-600">*</span></p>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="value1"
                id="textcourse"
                value="Text & Image Course"
                onChange={handleRadioChangeType}
                className="hidden peer"
              />
              <label htmlFor="textcourse" className="flex items-center cursor-pointer">
                <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <span
                    className={`w-3 h-3  ${
                        selectedType === "Text & Image Course" ? "bg-white" : "hidden"
                    }`}
                  ></span>
                </span>
                <span className="ml-2">Theory & Image Course</span>
              </label>
            </div>

            <div className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="value1"
                id="videocourse"
                value="Video & Text Course"
                onChange={handleRadioChangeType}
                className="hidden peer"
              />
              <label htmlFor="videocourse" className="flex items-center cursor-pointer">
                <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <span
                    className={`w-3 h-3  ${
                        selectedType === "Video & Text Course" ? "bg-white" : "hidden"
                    }`}
                  ></span>
                </span>
                <span className="ml-2">Video & Theory Course</span>
              </label>
            </div>
          </div>
          </div>
          <button onClick={redirectPackage}
            type="submit"
            className="my-6 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-2 "
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPackage;
