import React from "react";

const AddCategory = () => {
  return (
    <div>
      <div className="font-extralight mx-3">
        {" "}
        <p className="my-8">Add Category</p>
        <form className="grid gap-4 items-center my-4 ">
          <label htmlFor="">
            Category Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder=" Enter Category Name"
            className="rounded-md w-4/5 py-1.5 px-1 "
          />
          <div className="flex justify-center my-4 w-4/5">
            <button className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5  ">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;