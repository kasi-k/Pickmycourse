import React from "react";
import { FaCaretDown } from "react-icons/fa";
import Gallery from "../../assets/gallery.png"

const ViewTicket = () => {
  return (
    <div className=" mx-4 my-2 font-extralight  ">
      <div className="flex justify-between">
        <div className="space-y-1">
          <p>John Doe</p>
          <p>Ticket No: 17896546</p>
          <span className="grid py-2">
            <p> Date : 15-Oct-2024</p>
            <p> Category : General</p>
            <p>Priority : Medium</p>
          </span>
          <p className="flex gap-2 items-center">
            <p>Attachments :</p> <span className="flex gap-2 "> 
              <img src={Gallery} alt="gallery image" className="size-8" />
              <img src={Gallery} alt="gallery image" className="size-8" />
              <img src={Gallery} alt="gallery image" className="size-8" />
            </span></p>
        </div>
        <div>
          <form className="grid mx-2 my-2 ">
            <label>
              Team Member <span className="text-red-600">*</span>
            </label>
            <div className="relative inline-block  ">
              <select
                defaultValue="select"
                className="  text-black lg:w-72 md:w-72 w-64 px-2 py-1.5 outline-none rounded-md "
              >
                <option value="select" disabled>
                  Select team member
                </option>
                <option value="">Tax1</option>
                <option value="">Tax2</option>
                <option value="">Tax3</option>
              </select>
              <div className="absolute inset-y-0 right-0  flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <p>Description:</p>
          <p >
            Lorem ipsum is a dummy text used for type setting instead of
            realtext only for demonstration purpose.Lorem ipsum is a dummy text
            used for type setting instead of real dummy text used for demonstration purpose .
          </p>
      <hr />
      <div className="mt-10">
        <form className="flex flex-col ">
          <label className="mx-6">Add Reply</label>
          <textarea
            rows={9}
            placeholder="write Reply"
            className="rounded-3xl text-center place-content-center outline-none text-black  "
          ></textarea>
          <div className="lg:flex  justify-between my-2">
            <div className="relative">
              <label htmlFor="">
                Attachments (you can select multiple files)
              </label>
              <div className="absolute inset-y-1 top-7 left-0 rounded-lg px-1 py-2  flex items-center  bg-gray-300  pointer-events-none outline-none text-black">
                Choose Files
              </div>
              <input
                type="file"
                className="border bg-white text-black w-96 rounded-lg py-1.5 my-1 flex items-center  "
              />
            </div>
            <div className="grid mx-2">
              <label htmlFor="">
                Ticket staus<span className="text-red-600">*</span>
              </label>
              <div className="relative inline-block  ">
                <select
                  defaultValue="select"
                  className="  text-black w-72 px-2 py-1.5  outline-none rounded-md "
                >
                  <option value="select" disabled>
                    Ticket Status
                  </option>
                  <option value="">Ticket1</option>
                  <option value="">Ticket2</option>
                  <option value="">Ticket3</option>
                </select>
                <div className="absolute inset-y-0 bottom-2 right-0  flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                  <FaCaretDown className="text-black text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </form>
        <button
        type="submit"
        className="mx-2 bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-10 py-2 my-4"
      >
        Submit
      </button>
      </div>
    </div>
  );
};

export default ViewTicket;
