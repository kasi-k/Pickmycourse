import React from "react";
import { FaCaretDown } from "react-icons/fa";

const AddStatus = () => {
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
          <select
            defaultValue="select"
            className=" w-7/12 text-black px-2 py-2 outline-none  rounded-md "
          >
            <option value="select" disabled>
              Select Tax
            </option>
            <option value="" className="bg-yellow-800"></option>
            <option value="">Tax2</option>
            <option value="">Tax3</option>
          </select>
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
