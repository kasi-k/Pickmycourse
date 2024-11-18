import React, { useState } from "react";
import Category from "./Category";
import Priority from "./Priority";
import Status from "./Status";
import AddCategory from "./AddCategory";
import AddPriority from "./AddPriority";
import AddStatus from "./AddStatus";

const HelpSupport = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [addModal, setAddModal] = useState("");
  return (
    <div className="font-extralight bg-[#000928] h-56 mx-2 lg:w-4/5 md:w-5/6 w-4/5">
      <div className="flex justify-between my-4 mx-4">
        <div className="flex gap-8 ">
          <p
            className={` cursor-pointer flex justify-between items-center text-md  transition-all duration-700  font-extralight   ${
              activeTab === "tab1"
                ? "text-blue-300  transition-all duration-500"
                : " "
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Category
          </p>
          <p
            className={` cursor-pointer flex justify-between items-center text-md  transition-all duration-700  font-extralight   ${
              activeTab === "tab2"
                ? "text-blue-300  transition-all duration-500"
                : " "
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Priority
          </p>
          <p
            className={` cursor-pointer flex justify-between items-center text-md  transition-all duration-700  font-extralight   ${
              activeTab === "tab3"
                ? "text-blue-300  transition-all duration-500"
                : " "
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            status
          </p>
        </div>
        <div className="">
          <p className="text-sm mt-5" onClick={() => setAddModal("1")}>
            {" "}
            {activeTab === "tab1" ? "Add Category" : ""}
          </p>
          <p className="text-sm " onClick={() => setAddModal("2")}>
            {activeTab === "tab2" ? "Add Priority" : ""}
          </p>
          <p className="text-sm mt-5" onClick={() => setAddModal("3")}>
            {activeTab === "tab3" ? "Add Status" : ""}
          </p>
        </div>
      </div>
      <hr />
      {activeTab === "tab1" && <Category />}
      {activeTab === "tab2" && <Priority />}
      {activeTab === "tab3" && <Status />}
      <div className="my-32">
        {activeTab === "tab1" && addModal === "1" ? (
          <AddCategory />
        ) : activeTab === "tab2" && addModal === "2" ? (
          <AddPriority />
        ) : activeTab === "tab3" && addModal === "3" ? (
          <AddStatus />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HelpSupport;
