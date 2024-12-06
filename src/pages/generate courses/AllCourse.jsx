import React from "react";
import { formatDate1 } from "../../Host";
import { useNavigate } from "react-router-dom";


const AllCourse = ({courses,handleCourse,handleCertificate}) => {
  
  return (
    <div className="grid grid-cols-12 gap-3 mx-2 mt-6  ">
      {courses && courses.map((course, index) => (
        <div
          className="lg:col-span-3 md:col-span-4 col-span-12 overflow-hidden shadow-lg bg-[#110038] font-poppins font-extralight"
          key={index}
        >
          <img className="w-full" src={course.photo} alt="Images" />
          <div className="px-4 py-3 ">
            <div className="text-lg truncate"> {course.mainTopic}</div>
            <p className="text-sm pt-1">{course.type}</p>
            <p className="text-sm ">{formatDate1(course.date)}</p>
          </div>
          <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2.5 font-normal "
          onClick={() => handleCourse(course.content, course.mainTopic, course.type, course._id, course.completed, course.end)}>
            Continue
          </button>
          {course.completed === true && (
            <button className=" text-lg bg-white text-black w-1/2 py-2.5 font-normal"
            onClick={() => handleCertificate(course.mainTopic, course.end)}
            >
              Certificate
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllCourse;