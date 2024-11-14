import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AllCourse from "./AllCourse";
import image from "../../assets/asset.jpg";

const ViewOwnCourse = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const course = [
    {
      images: image,
      topic: "Topic Name",
      type: "Text & Video Course",
      date: "12/12/24",
      certificate: "no",
    },
    {
      images: image,
      topic: "Topic Name",
      type: "Text & Theory Course",
      date: "12/11/24",
      certificate: "yes",
    },
    {
      images: image,
      topic: "Topic Name",
      type: "Text & Video Course",
      date: "12/08/24",
      certificate: "no",
    },
    {
      images: image,
      topic: "Topic Name",
      type: "Text & Video Course",
      date: "12/08/24",
      certificate: "yes",
    },
    {
      images: image,
      topic: "Topic Name",
      type: "Text & Video Course",
      date: "12/08/24",
      certificate: "yes",
    },
  ];

  const completed = course.filter((course)=>course.certificate === 'yes');
  const active = course.filter((course)=>course.certificate !== 'yes')

  return (
    <div className="overflow-auto my-6 -z-10 " >
       <p className="font-extralight text-base mx-2 ">Admin Courses</p>
            <hr />
      <div className="flex justify-between mt-8 mx-4 flex-wrap gap-3 font-poppins ">
        <div className="flex  justify-start gap-3   flex-wrap">
          <div class="relative inline-block">
            <button
              className={` text-lg  py-1.5 w-36  ${
                activeTab === "tab1"
                  ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]"
                  : "text-black bg-white"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              All Courses
            </button>
            <div class="absolute -top-9 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div class="relative inline-block">
            <button
              className={`text-lg py-1.5 w-36  ${
                activeTab === "tab2"
                  ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]"
                  : "text-black bg-white"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Completed
            </button>
            <div class="absolute -top-9 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div class="relative inline-block">
            <button
              className={`text-lg  py-1.5 w-36   ${
                activeTab === "tab3"
                  ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]"
                  : "text-black bg-white"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Active
            </button>
            <div class="absolute -top-9 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white w-96 px-6 py-1.5  rounded-md mr-3">
          <FaSearch className="text-black text-xl" />
          <input
            type="text"
            placeholder="Search By Course Name"
            className="bg-transparent w-full outline-none text-center font-extralight text-black"
          />
        </div>
      </div>
      <hr className="border-2 my-1 border-white mx-1"/>
      
      <div className="mx-1 overflow-auto">{activeTab === "tab1" && <AllCourse  course={course}/>}</div>
      <div className="mx-1 ">{activeTab === "tab2" && <AllCourse course={completed}/>}</div>
      <div className="mx-1 ">{activeTab === "tab3" &&<AllCourse  course={active}/>}</div>
    </div>
  );
};

export default ViewOwnCourse;
