import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./pages/layout/Layout";
import NotFound from "./404";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import Package from "./pages/Packages/Package";
import Dashboard from "./pages/dashboard/Dashboard";
import AddPackage from "./pages/Packages/AddPackage";
import AdduserPackage from "./pages/Packages/AdduserPackage";
import Courses from "./pages/courses/Courses";
import GenerateCourse from "./pages/generate courses/GenerateCourse";
import Subscription from "./pages/subscription/Subscription";
import User from "./pages/users/User";
import EditUser from "./pages/users/EditUser";
import Team from "./pages/team/Team";
import EditTeam from "./pages/team/EditTeam";
import AddTeam from "./pages/team/AddTeam";
import Tickets from "./pages/Help and Support/Tickets";
import Report from "./pages/reports/Report";
import ViewOwnCourse from "./pages/generate courses/ViewOwnCourse";
import AddUser from "./pages/users/AddUser";
import Setting from "./pages/settings/Setting";
import ViewTicket from "./pages/Help and Support/ViewTicket";
import AddRole from "./pages/settings/AddRole";
import ResetPassword from "./pages/login/ResetPassword";
import Category from "./pages/settings/Category";
import ListTopics from "./pages/generate courses/ListTopics";
import Content from "./pages/generate courses/Content";
import ViewCertificate from "./pages/generate courses/ViewCertificate";
import EditPackage from "./pages/Packages/EditPackage";
import axios from "axios";
import { API } from "./Host";
import UpdateRole from "./pages/settings/UpdateRole";
const App = () => {
  const [features, setFeatures] = useState({});
  const rolename = localStorage.getItem("role");
  console.log(rolename);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${API}/api/getrolebyid?role_name=${rolename}`
        );
        console.log(response);
        
        const responseData = response.data.role;
        console.log(responseData, "data");

        const featuresData = responseData.accessLevels.reduce(
          (acc, current) => {
            acc[current.feature] = current.permissions;
            return acc;
          },
          {}
        );
        setFeatures(featuresData);
      } catch (error) {}
    };
    fetchUserData();
  }, [rolename]);

  const memoizedFeatures = useMemo(() => features, [features]);
  console.log(memoizedFeatures, "log");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/content" element={<Content />} />
          <Route path="/" element={<Layout permissions={memoizedFeatures} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/adduserPackage" element={<AdduserPackage />} />
            <Route path="/create" element={<GenerateCourse />} />
            <Route path="/topics" element={<ListTopics />} />
            <Route path="/viewcourse" element={<ViewOwnCourse />} />
            <Route path="/viewcertificate" element={<ViewCertificate />} />
           
         
            <Route path="/report" element={<Report />} />
            <Route path="/addrole" element={<AddRole />} />
            <Route path="/updaterole" element={<UpdateRole />} />
            <Route path="/category" element={<Category />} />

            {memoizedFeatures["packages"] && (
              <>
                <Route
                  path="/packages"
                  element={<Package permissions={memoizedFeatures["packages"]} />}
                />
                <Route path="/addpackage" element={<AddPackage />} />
                <Route path="/editpackage" element={<EditPackage />} />
              </>
            )}
            {memoizedFeatures["courses"] && (
              <>
                <Route
                  path="/courses"
                  element={
                    <Courses permissions={memoizedFeatures["courses"]} />
                  }
                />
              </>
            )}
            {memoizedFeatures["subscription"] && (
              <>
                <Route
                  path="/subscription"
                  element={
                    <Subscription
                      permissions={memoizedFeatures["subscription"]}
                    />
                  }
                />
              </>
            )}
            {memoizedFeatures["users"] && (
              <>
                <Route
                  path="/users"
                  element={<User permissions={memoizedFeatures["users"]} />}
                />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/edituser" element={<EditUser />} />
              </>
            )}
            {memoizedFeatures["team"] && (
              <>
                <Route
                  path="/team"
                  element={<Team permissions={memoizedFeatures["team"]} />}
                />
                <Route path="/editteam" element={<EditTeam />} />
                <Route path="/addteam" element={<AddTeam />} />
              </>
            )}
                {memoizedFeatures["support"] && (
              <>
                <Route
                  path="helpsupport"
                  element={
                    <Tickets permissions={memoizedFeatures["support"]} />
                  }
                  
                />
                   <Route path="/viewticket" element={<ViewTicket permissions={memoizedFeatures["support"]}/>} />
              </>
            )}
               {memoizedFeatures["setting"] && (
              <>
                <Route
                  path="/setting"
                  element={
                    <Setting permissions={memoizedFeatures["setting"]} />
                  }
                />
              </>
            )}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
