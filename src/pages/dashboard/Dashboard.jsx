import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../Host";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const userId = localStorage.getItem("user");
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserCourses = async () => {
      const postURL = API + `/api/courses?userId=${userId}`;
      try {
        const response = await axios.get(postURL);
        setCourses(response.data);
      } catch (error) {
        // fetchUserCourses();
      }
    };

    const fetchUsers = async () => {
      const postURL = API + `/api/getusers`;
      try {
        const response = await axios.get(postURL);
        console.log(response);

        setUsers(response.data.user);
      } catch (error) {
        // fetchUsers();
      }
    };

    fetchUserCourses();
    fetchUsers();
  }, []);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const coursesThisMonthCount = courses.filter((course) => {
    const courseDate = new Date(course.date);
    return (
      courseDate.getMonth() === currentMonth &&
      courseDate.getFullYear() === currentYear
    );
  }).length;

  const completedThisMonthCount = courses.filter((course) => {
    const courseDate = new Date(course.date);
    return (
      course.completed &&
      courseDate.getMonth() === currentMonth &&
      courseDate.getFullYear() === currentYear
    );
  }).length;

  const ActiveThisMonthCount = courses.filter((course) => {
    const courseDate = new Date(course.date);
    return (
      course.completed === false &&
      courseDate.getMonth() === currentMonth &&
      courseDate.getFullYear() === currentYear
    );
  }).length;

  const redirectToCourses =()=>{
    navigate('/courses')
  }
  const redirectToUsers =()=>{
    navigate('/users')
  }

  return (
    <div className=" font-extralight  space-y-4 mx-4 my-8">
      <div className="grid grid-cols-12 gap-2  ">
        <div className="bg-[#000928]  drop-shadow-2xl col-span-3">
          <p className="mx-2 my-1 text-base">Total Courses Generated</p>
          <p className="text-end pt-8 text-3xl mx-2">
            {" "}
            {courses && courses.length}
          </p>
          <button onClick={redirectToCourses} className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5">
            View
          </button>
        </div>
        <div className="bg-[#000928] col-span-3 drop-shadow-2xl ">
          <p className="mx-2 my-1 text-base">Total Number Of Users</p>
          <p className="text-end pt-8 text-3xl mx-2">{users && users.length}</p>
          <button  onClick={redirectToUsers} className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5">
            View
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="bg-[#000928] col-span-3 drop-shadow-2xl">
          <p className="mx-2 my-1 text-base">Revenue Generated</p>
          <p className="text-end pt-8 text-3xl mx-2">$3800000</p>
          <button className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5">
            View
          </button>
        </div>
        <div className="bg-[#000928] col-span-3 drop-shadow-2xl">
          <p className="mx-2 my-1 text-base">Recurring Revenue</p>
          <p className="text-end pt-8 text-3xl mx-2">$380000</p>
          <button className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 w-full py-2.5">
            View
          </button>
        </div>
      </div>
      <div>
        <p className="font-poppins my-4 text-sm">Monthly Activity Progress</p>
        <span>
          <p className="w-1/3 text-xl mx-4 text-end">{coursesThisMonthCount}/10</p>
          <div className="w-1/3 bg-gray-200 rounded-full h-3 dark:bg-gray-700 mx-5">
            <div
              className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 h-3 rounded-full"
              style={{ width: `${(coursesThisMonthCount / 10) * 100}%`}}
            ></div>
          </div>
          <p className="mx-5">Courses Generated this month</p>
        </span>
        <span>
          <p className="w-1/3 text-xl mx-4 text-end">{ActiveThisMonthCount}/10</p>
          <div className="w-1/3 bg-gray-200 rounded-full h-3 dark:bg-gray-700 mx-5">
            <div
              className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 h-3 rounded-full"
              style={{width: `${(ActiveThisMonthCount / 10) * 100}%`}}
            ></div>
          </div>
          <p className="mx-5"> Active Courses this month</p>
        </span>
        <span>
          <p className="w-1/3 text-xl mx-4 text-end">{completedThisMonthCount}/10</p>
          <div className="w-1/3 bg-gray-200 rounded-full h-3 dark:bg-gray-700 mx-5">
            <div
              className=" bg-gradient-to-r from-blue-900 to-fuchsia-600 h-3 rounded-full"
              style={{ width: `${(completedThisMonthCount / 10) * 100}%` }}
            ></div>
          </div>
          <p className="mx-5"> Completed Courses this month</p>
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
